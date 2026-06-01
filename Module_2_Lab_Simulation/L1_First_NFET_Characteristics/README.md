# 01 — NFET Device Characterization

![PDK](https://img.shields.io/badge/PDK-7nm_ASAP-blue?style=flat-square)
![Tool](https://img.shields.io/badge/Simulator-NGSpice-orange?style=flat-square)
![Device](https://img.shields.io/badge/Device-NFET_FinFET-purple?style=flat-square)

> First look at 7nm FinFET behaviour — understanding the device before building a circuit.

---

## Contents

| # | Topic | Jump To |
|---|-------|---------|
| 1 | What is a FinFET? | [→](#1-what-is-a-finfet) |
| 2 | ASAP 7nm PDK | [→](#2-asap-7nm-pdk) |
| 3 | NFET Characteristics | [→](#3-nfet-characteristics) |
| — | Simulation Files | [→](#simulation-files) |

---

## 1. What is a FinFET?

A FinFET is a transistor where the silicon channel is shaped like a **vertical fin**, and the gate wraps around it on **three sides** instead of just the top.

![FinFET Diagram](https://github.com/user-attachments/assets/da2f7ab5-dd8a-46f6-acdd-cc92715a3e56)

<details>
<summary><b>Why this matters</b></summary>

| Old Planar Transistor | FinFET |
|-----------------------|--------|
| Gate on top only | Gate wraps 3 sides |
| Weak channel control | Strong channel control |
| Higher leakage current | Lower leakage |
| Limited scaling | Enables 14nm, 10nm, 7nm nodes |

The three-sided gate gives the FinFET much tighter control over the channel — reducing leakage, improving switching speed, and allowing chips to scale to smaller nodes without losing reliability.

In practice, FinFETs are the dominant transistor type in modern CPUs, GPUs, and mobile chips at 14nm and below.

</details>

---

## 2. ASAP 7nm PDK

The **ASAP 7nm PDK** (Process Design Kit) is the simulation environment used throughout this module. It provides the device models, design rules, and parameters needed to simulate realistic 7nm FinFET behaviour.

| Feature | Details |
|---------|---------|
| Technology node | 7nm FinFET |
| Device models | BSIMCMG (industry-standard FinFET model) |
| Transistor types | NFET (`asap_7nm_nfet`), PFET (`asap_7nm_pfet`) |
| Key focus | Performance, power efficiency, and area (PPA) |
| EDA compatibility | NGSpice, Xschem |

<details>
<summary><b>What the PDK provides</b></summary>

| Component | Purpose |
|-----------|---------|
| Device models | Accurate I-V and C-V curves for NFET/PFET |
| Design rules | Minimum dimensions, spacing, fin counts |
| Process corners | Fast/slow/typical — for variation analysis |
| DFM features | Design-for-manufacturability checks |
| Power models | Dynamic and static power estimation |

The PDK leverages FinFET technology to deliver significantly lower leakage and better drive current compared to planar devices at the same node — making it suitable for high-performance computing, mobile, and AI workloads.

</details>

---

## 3. NFET Characteristics

The characterisation circuit uses a simple **resistive load** to measure NFET drain current across a range of gate and drain voltages.

| Component | Value |
|-----------|-------|
| NFET | `asap_7nm_nfet` — `nfin=14`, `l=7nm` |
| Load resistor (R1) | 1 kΩ |
| V<sub>GS</sub> sweep (V1) | 0 → 0.7 V |
| V<sub>DS</sub> sweep (V2) | 0 → 0.7 V, step 0.2 V |

---

### Xschem Schematic

The circuit is drawn in **Xschem** before being exported to SPICE for simulation.

![NFET Schematic](https://github.com/user-attachments/assets/fbba2165-bedd-45bb-bb38-2acba6d0a28e)

> **Note:** Ensure the `asap_7nm_nfet.sym` symbol path is correct in `nfet_char.sch` — an incorrect path will cause a missing symbol error when opening in Xschem.

```bash
xschem nfet_char.sch
```

<details>
<summary><b>Xschem Netlist (nfet_char.sch)</b></summary>

```
v {xschem version=3.4.5 file_version=1.2}

C {vsource.sym} -40 100 0 0 {name=V1 value=0 savecurrent=false}
C {vsource.sym} 370 100 0 0 {name=V2 value=3 savecurrent=false}
C {res.sym} 170 -20 0 0 {name=R1 value=1k footprint=1206 device=resistor m=1}
C {/workspaces/vsd-7nm/asap_7nm_Xschem/asap_7nm_nfet.sym} 150 60 0 0 {name=nfet2 model=asap_7nm_nfet spiceprefix=X l=7e-009 nfin=14}

C {lab_pin.sym} -40 70 0 0  {name=p1 lab=nfet_in}
C {lab_pin.sym} 130 60 0 0  {name=p2 lab=nfet_in}
C {lab_pin.sym} 370 70 0 0  {name=p3 lab=vdd}
C {lab_pin.sym} 170 -50 0 0 {name=p4 lab=vdd}
C {lab_pin.sym} 100 20 0 0  {name=p5 lab=nfet_out}

C {gnd.sym} 170 120 0 0 {name=l1 lab=GND}
C {gnd.sym} -40 130 0 0 {name=l2 lab=GND}
C {gnd.sym} 370 130 0 0 {name=l3 lab=GND}

C {code_shown.sym} 430 20 0 0 {name=s1 only_toplevel=false value="
.dc v1 0 0.7 1m v2 0 0.7 0.2
.control
run
set xbrushwidth=3
let vd = vdd - nfet_out
let id  = vd/1000
plot id
.endc
"}
```

</details>

---

### SPICE Netlist

<details>
<summary><b>nfet_char.spice</b></summary>

```spice
** nfet_char.spice
V1 nfet_in GND 0
V2 vdd GND 3
R1 vdd nfet_out 1k m=1
Xnfet2 nfet_out nfet_in GND GND asap_7nm_nfet l=7e-009 nfin=14

.dc v1 0 0.7 1m v2 0 0.7 0.2

.control
run
set xbrushwidth=3
let vd = vdd - nfet_out    ; actual drain voltage
let id = vd / 1000         ; Id = Vdrop / R1
plot id
.endc

.GLOBAL GND
```

</details>

---

### I<sub>D</sub>–V<sub>D</sub> Characteristics

The DC sweep plots drain current (I<sub>D</sub>) versus drain voltage (V<sub>DS</sub>) at multiple gate voltages (V<sub>GS</sub>) — the classic MOSFET output characteristic.

![NFET ID-VD](https://github.com/user-attachments/assets/d2ee79a5-c3e2-41fc-beb2-3d988219b164)

<details>
<summary><b>What to observe in the plot</b></summary>

| Region | What it looks like | What it means |
|--------|--------------------|---------------|
| **Triode** | I<sub>D</sub> rises steeply | V<sub>DS</sub> < V<sub>GS</sub> − V<sub>th</sub> — channel fully open |
| **Saturation** | I<sub>D</sub> flattens out | V<sub>DS</sub> ≥ V<sub>GS</sub> − V<sub>th</sub> — channel pinched off |
| **Cut-off** | I<sub>D</sub> ≈ 0 | V<sub>GS</sub> < V<sub>th</sub> — transistor off |

Each curve corresponds to a different V<sub>GS</sub> step (0.2 V increments up to 0.7 V).

</details>

<details>
<summary><b>NGSpice plot</b></summary>

![ID-VD NGSpice](https://github.com/user-attachments/assets/3b2d3f5e-e675-4523-a067-7bc018112671)

</details>

---

## Simulation Files

| File | Description |
|------|-------------|
| [`nfet_char.spice`](simulation/nfet_char.spice) | SPICE netlist for NFET characterisation |
| [`nfet_char.sch`](simulation/nfet_char.sch) | Xschem schematic |

---

## Navigation

| | |
|---|---|
| → Next | [02 — CMOS Inverter Design & Simulation](../02_CMOS_Inverter_Design/README.md) |
| ↑ Module | [Module 2 Overview](../README.md) |
| ↑ Course | [Course Overview](../../README.md) |
