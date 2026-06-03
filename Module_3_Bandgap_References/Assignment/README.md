# Bandgap Reference Circuit Simulation Report
### ASAP 7nm PDK | Xschem + Ngspice | Username: `najla` | Unique Resistor: R3 = 518Ω

---

## 📋 Table of Contents
1. [Circuit Overview](#circuit-overview)
2. [Unique Resistor](#unique-resistor)
3. [Simulation Commands Reference](#simulation-commands-reference)
4. [Characterization Table](#characterization-table)
5. [Vref vs Temperature Data](#vref-vs-temperature-data)

---

## Circuit Overview

| Parameter | Value |
|-----------|-------|
| PDK | ASAP 7nm FinFET |
| Tool | Xschem + Ngspice-46+ |
| Supply Voltage (VDD) | 0.7V – 1.1V |
| Temperature Range | -40°C to 125°C |
| Outputs | Vref, Vctat |
| Unique Resistor | R3 = 518Ω |

---

## Unique Resistor

Username: `najla`

| Character | ASCII Value |
|-----------|-------------|
| n | 110 |
| a | 97 |
| j | 106 | 
| l | 108 |
| a | 97 |
| **Total** | **518** |

Placed as: `R3 net10 GND 518 ac=1k` in the startup branch.

---

## Simulation Commands Reference

### 1. Temperature Sweep — Vref and Vctat

```spice
.dc temp -40 125 5
.control
run
plot v(Vref) v(Vctat)
plot v(Vref)-v(Vctat)
print v(Vref)
.endc
```

| Line | Purpose |
|------|---------|
| `.dc temp -40 125 5` | Sweeps temperature from -40°C to 125°C in 5°C steps |
| `run` | Executes the simulation |
| `plot v(Vref) v(Vctat)` | Plots both outputs vs temperature on same graph |
| `plot v(Vref)-v(Vctat)` | Plots difference between Vref and Vctat |
| `print v(Vref)` | Prints Vref at every temperature step to terminal |

---

### 2. Temperature Sweep — Min/Max and Temperature Coefficient

```spice
.dc temp -40 125 5
.control
run
meas DC VREF_Min MIN v(Vref)
meas DC VREF_Max MAX v(Vref)
let dVREF_dT = deriv(v(Vref)) * 1e6
plot dVREF_dT
let TempRange = 165
let Vref_Slope = (VREF_Max - VREF_Min) / TempRange
print Vref_Slope
print VREF_Min
print VREF_Max
.endc
```

| Line | Purpose |
|------|---------|
| `meas DC VREF_Min MIN v(Vref)` | Finds minimum Vref and at which temperature |
| `meas DC VREF_Max MAX v(Vref)` | Finds maximum Vref and at which temperature |
| `deriv(v(Vref)) * 1e6` | Calculates temperature coefficient dVref/dT in µV/°C |
| `plot dVREF_dT` | Visualizes temperature sensitivity across sweep |
| `Vref_Slope` | Overall voltage change per degree across full range |

**Result:**
```
vref_min   = 0.8284V  at temp = -40°C
vref_max   = 0.9221V  at temp =  125°C
vref_slope = 0.568 mV/°C
```

---

### 3. VDD Sweep — Line Regulation

```spice
.dc V1 0.7 1.1 0.1
.control
run
meas dc VREF_MAX MAX v(Vref)
meas dc VREF_MIN MIN v(Vref)
let LINE_REG = (VREF_MAX - VREF_MIN)/0.4*1000
print VREF_MAX
print VREF_MIN
print LINE_REG
.endc
```

| Line | Purpose |
|------|---------|
| `.dc V1 0.7 1.1 0.1` | Sweeps VDD from 0.7V to 1.1V in 0.1V steps |
| `/0.4` | Divides by total VDD range (1.1 - 0.7 = 0.4V) |
| `*1000` | Converts result to mV/V |
| `LINE_REG` | Measures how stable Vref is against supply variations |

**Result at temp=27°C:**
```
LINE_REG = 1008.9 mV/V
```

---

### 4. VDD Sweep at Specific Temperature

```spice
.temp -40
.dc V1 0.7 1.1 0.1
.control
run
meas dc VREF_MAX MAX v(Vref)
meas dc VREF_MIN MIN v(Vref)
let LINE_REG = (VREF_MAX - VREF_MIN)/0.4*1000
print LINE_REG
.endc
```

| Line | Purpose |
|------|---------|
| `.temp -40` | Sets simulation temperature before running sweep |
| Change to `.temp 125` | Repeat for high temperature row |

**Results:**
```
temp = -40°C → LINE_REG = 1036.2 mV/V
temp = 125°C → LINE_REG =  972.2 mV/V
```

---

### 5. Multi-VDD Loop — All Line Reg Values in One Run

```spice
.dc temp -40 125 5
.control
foreach vdd_val 0.8 0.9 1.0
    alter V1 = $vdd_val
    run
    meas DC VREF_Min MIN v(Vref)
    meas DC VREF_Max MAX v(Vref)
    let LineReg = (VREF_Max - VREF_Min) / (165 * 0.001)
    echo "VDD = $vdd_val"
    print VREF_Min
    print VREF_Max
    print LineReg
end
.endc
```

| Line | Purpose |
|------|---------|
| `foreach vdd_val 0.8 0.9 1.0` | Loops through all three VDD values automatically |
| `alter V1 = $vdd_val` | Updates VDD source value each iteration |
| `echo "VDD = $vdd_val"` | Labels each result block in terminal output |

**Results:**
```
VDD=0.8 → LineReg = 644.8 mV/V
VDD=0.9 → LineReg = 604.3 mV/V
VDD=1.0 → LineReg = 567.6 mV/V
```

---

### 6. Transient — Startup Time (Single VDD)

```spice
.ic V(Vref)=0 V(vctat)=0 V(net1)=0
V1 VDD GND PULSE(0 1.0 1n 0.1n 0.1n 50n 100n)
.tran 0.01n 20n uic
.control
run
meas tran Vref_final FIND v(Vref) AT=18n
meas tran startup_time WHEN v(Vref)=0.99*Vref_final RISE=1
print startup_time
plot v(Vref)
.endc
```

| Line | Purpose |
|------|---------|
| `.ic V(Vref)=0` | Forces all nodes to start at 0V for real startup |
| `PULSE(0 1.0 ...)` | VDD ramps from 0 to 1V — simulates power-on |
| `uic` | Use Initial Conditions — starts from zero |
| `FIND v(Vref) AT=18n` | Reads steady-state Vref near end of simulation |
| `WHEN v(Vref)=0.99*Vref_final` | Time when Vref reaches 99% of final value = startup time |

---

### 7. Transient — Multi-VDD Startup in One Run

```spice
.ic V(Vref)=0 V(vctat)=0 V(net1)=0
.tran 0.01n 20n uic
.control
foreach vdd_val 0.8 0.9 1.0
    alter V1 = $vdd_val
    run
    meas tran Vref_final FIND v(Vref) AT=18n
    meas tran startup_time WHEN v(Vref)=0.99*Vref_final RISE=1
    echo "VDD = $vdd_val"
    print startup_time
end
.endc
```

| Line | Purpose |
|------|---------|
| `foreach` loop | Runs startup simulation for all 3 VDD values automatically |
| `alter V1` | Changes VDD each iteration without rewriting netlist |

**Results:**
```
VDD=0.8 → startup_time = 2.16 ps
VDD=0.9 → startup_time = 1.37 ps
VDD=1.0 → startup_time = 1.06 ps
```

---

### 8. Transient — Startup at Different Temperatures

```spice
.ic V(Vref)=0 V(vctat)=0 V(net1)=0
.tran 0.01n 20n uic
.control
foreach temp_val -40 125
    reset
    set temp = $temp_val
    run
    meas tran Vref_final FIND v(Vref) AT=18n
    meas tran startup_time WHEN v(Vref)=0.99*Vref_final RISE=1
    echo "TEMP = $temp_val"
    print Vref_final
    print startup_time
end
.endc
```

| Line | Purpose |
|------|---------|
| `reset` | Reloads circuit so temperature change takes effect |
| `set temp = $temp_val` | Sets simulation temperature inside control block |

**Results:**
```
temp = -40°C → startup_time = 14.3 ns  (slower at cold temperature)
temp = 125°C → startup_time = 0.80 ps  (faster at high temperature)
```

---


## Characterization Table



> Row 4 startup is slower due to reduced transistor mobility at -40°C — physically expected behavior.

---

## Vref vs Temperature Data


---

*VSD 7nm Workshop — BGR Assignment | Username: najla | R3 = 518Ω | ASAP 7nm PDK*# Module 3 Assignment

