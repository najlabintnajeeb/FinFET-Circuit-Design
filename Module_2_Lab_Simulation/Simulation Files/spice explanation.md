
# 7nm FinFET CMOS Inverter — SPICE Code Walkthrough

> A beginner-friendly explanation of every section of the SPICE netlist for a CMOS inverter using ASAP 7nm FinFET technology.

---

## Table of Contents
- [Circuit Instantiation](#1-circuit-instantiation)
- [Voltage Sources](#2-voltage-sources)
- [Parameters](#3-parameters)
- [DC Analysis](#4-dc-analysis--vtc-extraction)
- [Gain & Noise Margin](#5-gain--noise-margin)
- [Transconductance](#6-transconductance-gm)
- [Transient Analysis](#7-transient-analysis--propagation-delay)
- [Frequency Calculation](#8-frequency-calculation)
- [Subcircuit Definitions](#9-subcircuit-definitions)
- [BSIMCMG Model Parameters](#10-bsimcmg-model-key-parameters)

---

## 1. Circuit Instantiation

```spice
Xpfet1 nfet_out nfet_in vdd vdd asap_7nm_pfet l=7e-009 nfin={pfin}
Xnfet1 nfet_out nfet_in GND GND asap_7nm_nfet l=7e-009 nfin={nfin_val}
```

| Field | PMOS (Xpfet1) | NMOS (Xnfet1) | Meaning |
|-------|--------------|--------------|---------|
| Instance name | `Xpfet1` | `Xnfet1` | X = subcircuit call |
| Drain | `nfet_out` | `nfet_out` | Output node (shared) |
| Gate | `nfet_in` | `nfet_in` | Input node (shared) |
| Source | `vdd` | `GND` | PMOS source = VDD, NMOS source = GND |
| Bulk | `vdd` | `GND` | Bulk tied to source (standard CMOS) |
| Subcircuit | `asap_7nm_pfet` | `asap_7nm_nfet` | Which device model to use |
| `l=7e-009` | 7nm | 7nm | Channel length — fixed by technology |
| `nfin={pfin}` | parameterized | parameterized | Number of fins — controls width |

---

## 2. Voltage Sources

```spice
V1 nfet_in GND pulse(0 0.7 20p 10p 10p 20p 500p 1)
V2 vdd GND 0.7
Vuniq in 0 DC 0.518
```

| Source | Nodes | Type | Value | Purpose |
|--------|-------|------|-------|---------|
| `V1` | nfet_in → GND | PULSE | 0 to 0.7V | Input signal for transient simulation |
| `V2` | vdd → GND | DC | 0.7V | Supply voltage VDD |
| `Vuniq` | in → GND | DC | 0.518V | Unique fingerprint (ASCII sum of username in mV) |

### V1 Pulse Parameters Explained:

```spice
pulse(0   0.7   20p   10p   10p   20p   500p   1)
       ↑    ↑    ↑     ↑     ↑     ↑     ↑      ↑
      V_low V_high TD   TR    TF    PW   Period  Cycles
```

| Parameter | Value | Meaning |
|-----------|-------|---------|
| V_low | 0V | Logic LOW voltage |
| V_high | 0.7V | Logic HIGH voltage |
| TD (delay) | 20ps | Time before pulse starts |
| TR (rise time) | 10ps | Time to rise from 0 to 0.7V |
| TF (fall time) | 10ps | Time to fall from 0.7V to 0 |
| PW (pulse width) | 20ps | Time signal stays HIGH |
| Period | 500ps | Total period of one cycle |
| Cycles | 1 | Number of repetitions |

---

## 3. Parameters

```spice
.param pfin=19
.param nfin_val=6
```

| Parameter | Controls | Effect when increased |
|-----------|---------|----------------------|
| `pfin` | PMOS number of fins | More PMOS width → stronger pull-up → Vth increases |
| `nfin_val` | NMOS number of fins | More NMOS width → stronger pull-down → Vth decreases |

> **Tip:** Change only these 2 lines to vary the entire simulation. All subcircuit references use `{pfin}` and `{nfin_val}` automatically.

---

## 4. DC Analysis & VTC Extraction

```spice
dc v1 0 0.7 1m
meas dc v_th when nfet_out = nfet_in
plot nfet_out nfet_in
```

| Line | What it does |
|------|-------------|
| `dc v1 0 0.7 1m` | Sweeps input V1 from 0V to 0.7V in 1mV steps → generates VTC curve |
| `meas dc v_th when nfet_out = nfet_in` | Finds switching threshold — input voltage where Vout = Vin |
| `plot nfet_out nfet_in` | Plots VTC: Vout and Vin vs swept voltage |

---

## 5. Gain & Noise Margin

```spice
let gain_av = abs(deriv(nfet_out))
meas dc max_gain max gain_av
let gain_target = max_gain * 0.999
meas dc vil find nfet_in when gain_av = gain_target cross=1
meas dc voh find nfet_out when gain_av = gain_target cross=1
meas dc vih find nfet_in when gain_av = gain_target cross=2
meas dc vol find nfet_out when gain_av = gain_target cross=2
let nmh = voh - vih
let nml = vil - vol
```

| Line | Variable | Meaning |
|------|----------|---------|
| `abs(deriv(nfet_out))` | `gain_av` | Instantaneous gain = \|dVout/dVin\| at every point |
| `max gain_av` | `max_gain` | Peak gain of the inverter |
| `max_gain * 0.999` | `gain_target` | 99.9% of peak — used to find VIL/VIH points |
| `cross=1` | VIL, VOH | First crossing of gain_target curve |
| `cross=2` | VIH, VOL | Second crossing of gain_target curve |
| `voh - vih` | `nmh` | Noise Margin High = how much HIGH signal tolerance |
| `vil - vol` | `nml` | Noise Margin Low = how much LOW signal tolerance |

### VTC Points Visual:

```
Vout
 |
VDD ─── VOH
        |   \
        |    \   ← High gain region (slope = -Av)
        |     \
 0  ─── VOL────\────────── Vin
        VIL  Vth  VIH
```

---

## 6. Transconductance (gm)

```spice
let id = v2#branch
let gm = real(deriv(id, nfet_in))
meas dc gm_max MAX gm
plot gm
let r_out = deriv(nfet_out, id)
plot r_out
plot id
```

| Line | Variable | Meaning |
|------|----------|---------|
| `v2#branch` | `id` | Current flowing through V2 = total drain current |
| `deriv(id, nfet_in)` | `gm` | gm = dId/dVin = transconductance |
| `real(...)` | — | Takes real part (removes numerical noise) |
| `MAX gm` | `gm_max` | Peak transconductance value |
| `deriv(nfet_out, id)` | `r_out` | Output resistance = dVout/dId |

---

## 7. Transient Analysis & Propagation Delay

```spice
tran 1e-12 100e-12
meas tran tpr when nfet_in = 0.35 rise = 1
meas tran tpf when nfet_out = 0.35 fall = 1
let tp = (tpr + tpf) / 2
meas tran id_pwr integ trans_current from=2e-11 to=6e-11
let pwr = id_pwr * 0.7
let power = abs(pwr / 40e-12)
```

| Line | Variable | Meaning |
|------|----------|---------|
| `tran 1e-12 100e-12` | — | Transient sim: 1ps timestep, 100ps total |
| `when nfet_in = 0.35 rise=1` | `tpr` | Time when input crosses VDD/2 (rising) |
| `when nfet_out = 0.35 fall=1` | `tpf` | Time when output crosses VDD/2 (falling) |
| `(tpr + tpf) / 2` | `tp` | Average propagation delay |
| `integ trans_current from=... to=...` | `id_pwr` | Integrates current over one switching window |
| `id_pwr * 0.7` | `pwr` | Power = charge × VDD |
| `abs(pwr / 40e-12)` | `power` | Average power over 40ps window |

### Propagation Delay Visual:

```

tpd = (tpr + tpf) / 2
```

---

## 8. Frequency Calculation

```spice
tran 0.1 100p
meas tran tr when nfet_in=0.07 RISE=1
meas tran tf when nfet_out=0.63 FALL=1
let t_delay = tr + tf
let f = 1/t_delay
```

| Line | Variable | Meaning |
|------|----------|---------|
| `tran 0.1 100p` | — | Finer transient: 0.1ps step for accurate edge detection |
| `when nfet_in=0.07 RISE=1` | `tr` | Time at 10% of VDD on rising edge |
| `when nfet_out=0.63 FALL=1` | `tf` | Time at 90% of VDD on falling edge |
| `tr + tf` | `t_delay` | Total transition delay |
| `1/t_delay` | `f` | Maximum operating frequency |

---

## 9. Subcircuit Definitions

```spice
.subckt asap_7nm_pfet S G D B l=7e-009 nfin={pfin}
    npmos_finfet S G D B BSIMCMG_osdi_P l=7e-009 nfin={pfin}
.ends asap_7nm_pfet

.subckt asap_7nm_nfet S G D B l=7e-009 nfin={nfin_val}
    nnmos_finfet S G D B BSIMCMG_osdi_N l=7e-009 nfin={nfin_val}
.ends asap_7nm_nfet
```

| Field | Meaning |
|-------|---------|
| `.subckt` | Defines a reusable subcircuit block |
| `S G D B` | Terminals: Source, Gate, Drain, Bulk |
| `npmos_finfet` | Primitive FinFET device (from OSDI model) |
| `BSIMCMG_osdi_P` | PMOS model name defined in `.model` block |
| `BSIMCMG_osdi_N` | NMOS model name defined in `.model` block |
| `nfin={pfin}` | Passes parameter value into the primitive device |
| `.ends` | End of subcircuit definition |

> **Important:** The `nfin` value in the subcircuit **must always match** the instance line (`Xpfet1`, `Xnfet1`). Using `{pfin}` and `{nfin_val}` parameters ensures this automatically.

---

## 10. BSIMCMG Model Key Parameters

```spice
.model BSIMCMG_osdi_N BSIMCMG_va (TYPE=1 ...)
```

| Parameter | Value (NMOS) | Value (PMOS) | Meaning |
|-----------|-------------|-------------|---------|
| `TYPE` | 1 | 0 | 1=NMOS, 0=PMOS |
| `l` | 2.1e-8 | 2.1e-8 | Effective model channel length |
| `tfin` | 6.5nm | 6.5nm | Fin thickness |
| `hfin` | 32nm | 32nm | Fin height |
| `toxg` | 1.8nm | 1.8nm | Gate oxide thickness |
| `eot` | 1nm | 1nm | Equivalent oxide thickness |
| `nfin` | 1 | 1 | Per-fin normalization (do NOT change) |
| `phig` | 4.2466 | 4.9278 | Gate work function (sets Vth) |
| `u0` | 0.0303 | 0.0237 | Low-field mobility |
| `vsat` | 70000 | 60000 | Saturation velocity |
| `rdsw` | 200 | 200 | Source/drain resistance |



---


*Technology: ASAP 7nm FinFET PDK | Simulator: ngspice | Model: BSIMCMG (OSDI)*
