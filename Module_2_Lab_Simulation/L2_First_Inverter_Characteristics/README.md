# Module 2 — 7nm FinFET Inverter Simulation & Performance Analysis

![Module](https://img.shields.io/badge/Module-2-2ea44f?style=flat-square)
![PDK](https://img.shields.io/badge/PDK-7nm_ASAP-blue?style=flat-square)
![Tool](https://img.shields.io/badge/Simulator-NGSpice-orange?style=flat-square)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen?style=flat-square)

> Hands-on characterisation of a CMOS inverter using the 7nm ASAP PDK — from first NFET curves through full inverter performance analysis.

---

## Contents

| # | Topic | Jump To |
|---|-------|---------|
| 1 | Circuit Overview | [→](#1-circuit-overview) |
| 2 | W/L Ratio | [→](#2-wl-ratio) |
| 3 | Switching Threshold Voltage | [→](#3-switching-threshold-voltage-vth) |
| 4 | Drain Current | [→](#4-drain-current-id) |
| 5 | Power Consumption | [→](#5-power-consumption) |
| 6 | Propagation Delay | [→](#6-propagation-delay-tp) |
| 7 | Voltage Gain | [→](#7-voltage-gain-av) |
| 8 | Noise Margin | [→](#8-noise-margin) |
| 9 | Transconductance | [→](#9-transconductance-gm) |
| 10 | Maximum Frequency | [→](#10-maximum-operating-frequency) |
| 11 | Output Resistance | [→](#11-output-resistance-rout) |
| — | Simulation Files | [→](#simulation-files) |

---

## 1. Circuit Overview

The circuit under study is a **CMOS inverter** built with 7nm FinFET devices from the ASAP 7nm PDK.

| Component | Value |
|-----------|-------|
| PFET | `asap_7nm_pfet` — `nfin=14`, `l=7nm` |
| NFET | `asap_7nm_nfet` — `nfin=14`, `l=7nm` |
| V<sub>DD</sub> | 0.7 V |
| Input stimulus | Pulse: 0 → 0.7 V, 20 ps rise/fall, 500 ps period |
| Analyses run | DC sweep + Transient |

<details>
<summary><b>Circuit Nodes</b></summary>

```
         VDD (0.7V)
            │
       ┌────┴────┐
       │  PFET   │  nfin=14
nfet_in┤G        ├── nfet_out
       │         │
       └────┬────┘
            │
       ┌────┴────┐
       │  NFET   │  nfin=14
nfet_in┤G        ├── nfet_out
       │         │
       └────┬────┘
            │
           GND
```

</details>

---

## 2. W/L Ratio

The W/L ratio directly controls a transistor's **current drive capability**, **switching speed**, and **power consumption**.

| Parameter | Value |
|-----------|-------|
| Technology node | 7nm PDK |
| Channel length (L) | **Fixed** at 7nm |
| Width (W) control | Varied via `nfins` (number of fins) |

<details>
<summary><b>Why nfins?</b></summary>

In FinFET-based 7nm PDK, width is not continuous — it is **quantised** by the number of fins. Each fin adds a fixed amount of effective width. Separate `nfins` values are swept for NMOS (`nnmos`) and PMOS (`npmos`) to study how the ratio affects inverter behaviour.

</details>

---

## 3. Switching Threshold Voltage (V<sub>th</sub>)

The point on the VTC where **V<sub>in</sub> = V<sub>out</sub>** — the inverter's switching midpoint.

$$V_{th} : \quad V_{in} = V_{out}$$

| To shift V<sub>th</sub>… | Do this |
|--------------------------|---------|
| **Higher** → toward V<sub>DD</sub> | Widen PMOS (increase `npmos nfins`) |
| **Lower** → toward GND | Widen NMOS (increase `nnmos nfins`) |

<details>
<summary><b>SPICE Command</b></summary>

```spice
meas dc v_th when nfet_out=nfet_in   ; finds Vin where Vout = Vin
```

</details>

<details>
<summary><b>Plot</b></summary>

![Switching Threshold](plots/vth.png)

</details>

---

## 4. Drain Current (I<sub>D</sub>)

Current flowing from drain to source, controlled by gate voltage.

| Region | I<sub>D</sub> Behaviour |
|--------|------------------------|
| **Triode** | Increases linearly with V<sub>DS</sub> |
| **Saturation** | Constant — independent of V<sub>DS</sub> |

<details>
<summary><b>SPICE Commands</b></summary>

```spice
let id = v2#branch   ; supply branch current = drain current
plot id
```

> Run `display` in NGSpice to confirm available node names.

</details>

<details>
<summary><b>Plot</b></summary>

![Drain Current](plots/drain_current.png)

</details>

---

## 5. Power Consumption

Average power is the supply current integrated over one switching cycle, multiplied by V<sub>DD</sub>.

$$P_{avg} = \frac{V_{DD} \cdot \int_{t_1}^{t_2} i(t)\, dt}{\Delta t}$$

<details>
<summary><b>SPICE Commands</b></summary>

```spice
let trans_current = v2#branch
meas tran id_pwr integ trans_current from=20e-12 to=60e-12   ; integrate over one cycle
let pwr   = id_pwr * 0.7                                      ; × Vdd
let power = abs(pwr / 40e-12)                                 ; ÷ time window
print power
```

</details>

---

## 6. Propagation Delay (T<sub>p</sub>)

Time for the output to respond to an input change, measured at **50% crossings**.

| Parameter | Definition |
|-----------|-----------|
| **t<sub>pr</sub>** | Output rises past 50% after input crosses 50% |
| **t<sub>pf</sub>** | Output falls past 50% after input crosses 50% |
| **t<sub>p</sub>** | Average = (t<sub>pr</sub> + t<sub>pf</sub>) / 2 |
| **t<sub>r</sub>** | Output: 10% → 90% of V<sub>DD</sub> |
| **t<sub>f</sub>** | Output: 90% → 10% of V<sub>DD</sub> |

> Some designs use 30%/70% thresholds — it varies by convention.

<details>
<summary><b>SPICE Commands</b></summary>

```spice
meas tran tpr when nfet_in=0.35  RISE=1   ; input rises through Vdd/2
meas tran tpf when nfet_out=0.35 FALL=1   ; output falls through Vdd/2
let tp = (tpf + tpr) / 2
print tp
```

</details>

<details>
<summary><b>Plot</b></summary>

![Propagation Delay](plots/propagation_delay.png)

</details>

---

## 7. Voltage Gain (A<sub>v</sub>)

Ratio of output voltage change to input voltage change — the slope of the VTC.

$$A_v = \frac{dV_{out}}{dV_{in}}$$

<details>
<summary><b>SPICE Commands</b></summary>

```spice
let gain_av = deriv(nfet_out)        ; slope of VTC (negative for inverter)
let gain_av = abs(deriv(nfet_out))   ; absolute gain
plot gain_av
```

> Peak of `gain_av` corresponds to the transition region — where the inverter amplifies most strongly.

</details>

<details>
<summary><b>Plot</b></summary>

![Voltage Gain](plots/gain.png)

</details>

---

## 8. Noise Margin

How much voltage noise the inverter can tolerate before misreading a logic level.

| Parameter | Meaning |
|-----------|---------|
| **V<sub>IH</sub>** | Min input recognised as HIGH |
| **V<sub>IL</sub>** | Max input recognised as LOW |
| **V<sub>OH</sub>** | Min output when driving HIGH |
| **V<sub>OL</sub>** | Max output when driving LOW |
| **NM<sub>H</sub>** = V<sub>OH</sub> − V<sub>IH</sub> | High noise margin |
| **NM<sub>L</sub>** = V<sub>IL</sub> − V<sub>OL</sub> | Low noise margin |

The four voltages are extracted at the points where **slope of VTC = −1**.

<details>
<summary><b>SPICE Commands</b></summary>

```spice
meas dc vil find nfet_in  when nfet_out=gain CROSS=1   ; VIL
meas dc voh find nfet_out when nfet_out=gain CROSS=1   ; VOH
meas dc vih find nfet_in  when nfet_out=gain CROSS=2   ; VIH
meas dc vol find nfet_out when nfet_out=gain CROSS=2   ; VOL

let nmh = voh - vih
let nml = vil - vol
print nmh nml
```

</details>

<details>
<summary><b>Plot</b></summary>

![Noise Margin](plots/noise_margin.png)

</details>

---

## 9. Transconductance (g<sub>m</sub>)

How effectively gate voltage controls drain current — key to amplifier performance.

$$g_m = \frac{\partial I_D}{\partial V_{GS}}$$

Higher g<sub>m</sub> → stronger response to input → better amplification.

<details>
<summary><b>SPICE Commands</b></summary>

```spice
let gm = real(deriv(id, nfet_in))   ; dId/dVgs
meas dc gm_max MAX gm               ; peak transconductance
plot gm
```

</details>

<details>
<summary><b>Plot</b></summary>

![Transconductance](plots/transconductance.png)

</details>

---

## 10. Maximum Operating Frequency

The fastest rate at which the inverter can reliably switch, set by rise and fall times.

$$f_{max} = \frac{1}{t_r + t_f}$$

| Parameter | Definition |
|-----------|-----------|
| **t<sub>r</sub>** | Output: low → high transition time |
| **t<sub>f</sub>** | Output: high → low transition time |
| **f<sub>max</sub>** | Maximum reliable switching frequency |

<details>
<summary><b>SPICE Commands</b></summary>

```spice
tran 0.1 100p

meas tran tr when nfet_in=0.07  RISE=1   ; 10% of Vdd = 0.07V
meas tran tf when nfet_out=0.63 FALL=1   ; 90% of Vdd = 0.63V

let t_delay = tr + tf
let f = 1 / t_delay
print t_delay f
```

> 0.07 V and 0.63 V are 10% and 90% of V<sub>DD</sub> = 0.7 V.

</details>

<details>
<summary><b>Plot</b></summary>

![Frequency](plots/frequency.png)

</details>

---

## 11. Output Resistance (R<sub>out</sub>)

How strongly drain current responds to output voltage — determines signal integrity and gain.

$$R_{out} = \frac{\partial V_{out}}{\partial I_D}$$

A high R<sub>out</sub> → transistor behaves closer to an ideal current source → higher voltage gain.

<details>
<summary><b>SPICE Commands</b></summary>

```spice
let r_out = deriv(nfet_out, id)   ; dVout/dId
plot r_out
```

</details>

<details>
<summary><b>Plot</b></summary>

![Output Resistance](plots/output_resistance.png)

</details>

---

## Simulation Files

| File | Description |
|------|-------------|
| [`inverter_vtc.spice`](simulation/inverter_vtc.spice) | Full SPICE netlist — DC + transient analyses |
| [`EXPLAINED.md`](simulation/EXPLAINED.md) | Line-by-line walkthrough of the SPICE deck |

---

## Navigation

| | |
|---|---|
| ← Previous | [Module 1 — Scaling Beyond CMOS](../Module_1_Scaling_Beyond_CMOS/README.md) |
| → Next | [Module 3 — Bandgap References](../Module_3_Bandgap_References/README.md) |
| ↑ Course | [Course Overview](../README.md) |
