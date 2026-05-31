# L6 — Parasitic Resistance & Capacitance Scaling in Advanced FETs
> Why contact resistance and spacer capacitance dominate in FinFET, GAA, and CFET technologies

![Module](https://img.shields.io/badge/Module_2-FEOL-blue)
![Lecture](https://img.shields.io/badge/Lecture-L6_of_9-0d1117?style=plastic&labelColor=f5a623&color=0d1117)
![Topic](https://img.shields.io/badge/Parasitics-RC_Scaling-red)

---

## Overview

As CMOS technology scales beyond FinFET into **Gate-All-Around (GAA)** and **CFET architectures**, device performance is increasingly limited not by channel engineering alone, but by **extrinsic parasitics**.

This lecture focuses on:
- **Parasitic resistance (Rext)** — dominated by contact resistance
- **Parasitic capacitance (Cpar)** — dominated by spacer and fringe effects
- Material and process innovations used to mitigate both

---

# 📌 Figure 1 — Device Cross-Section & Resistance Components

> Resistance in advanced transistors is distributed across FEOL, contact, and MOL regions.

*(Insert FinFET / nanosheet cross-section diagram here)*

### Resistance regions:
- **FEOL resistance** → channel + source/drain access
- **Contact resistance (dominant)** → silicide + metal interface
- **MOL resistance** → vias + local interconnects

---

## 1. Scaling Impact on Parasitic Resistance

### Planar MOSFET
- Contact width ≈ channel width
- Large cross-sectional contact area
- Low extrinsic resistance

### FinFET → GAA → CFET
- Reduced effective contact width due to:
  - Fin quantization
  - Nanosheet stacking
  - Pitch scaling constraints
- Contact area shrinks faster than current scaling

👉 Result:
> **Contact resistance becomes the dominant parasitic bottleneck**

---

## 2. Resistance Breakdown (Technology Insight)

### NFET
- FEOL resistance ≈ 33%
- Contact resistance ≈ 60–65% (dominant)
- MOL resistance ≈ 5–10%

### PFET
- FEOL resistance ≈ 45–50%
- Contact resistance ≈ 45–50%
- MOL resistance ≈ ~5%

---

## 3. Physical Origin of Contact Resistance

Contact resistance arises from:

### (1) Schottky Barrier Height (ΦB)
- Metal–semiconductor interface barrier
- Controls carrier injection efficiency

### (2) Doping concentration in S/D regions
- Higher doping reduces depletion width
- Enables tunneling-dominated transport

### (3) Silicide / contact metal system
- Determines interface resistivity and barrier height

---

## 4. Engineering Strategies to Reduce Rcontact

### A. Advanced Doping Techniques
- Increased source/drain doping concentration
- Improved:
  - solid-state diffusion
  - spike annealing / laser annealing
- Goal: reduce depletion region thickness near contact

---

### B. Metal & Silicide Engineering
Material evolution trends:
- NiSi → Ti-based contacts → W-based systems (selective regions)
- Exploration of:
  - low-barrier metals
  - engineered contact stacks

👉 Objective:
- Lower Schottky barrier height
- Improve carrier injection efficiency

---

### Target Outcome
If fully optimized:
- Contact resistance contribution:
  - ~60% → ~10% (future target regime)

---

# 📌 Figure 2 — Parasitic Capacitance in Scaled Devices

*(Insert spacer / gate-to-S/D coupling diagram here)*

---

## 5. Parasitic Capacitance Scaling Trend

As devices scale:
- Gate-to-source/drain spacing decreases
- Spacer dielectric dominates coupling effects

### Key shift:
- Intrinsic gate capacitance (Cox contribution) ↓
- Parasitic capacitance (fringe + spacer) ↑

---

## 6. Spacer Engineering (Low-k Strategy)

### Material evolution:
- High-k spacer → low-k dielectric spacer → air gap spacer

### Impact:
- Reduced dielectric constant (k)
- Reduced fringe capacitance (Ceff)

---

## 7. Performance Impact (Delay Scaling)

Device delay is governed by:

> Delay ∝ R × C

### Improvements achieved by:
- Reducing contact resistance (Rext)
- Reducing spacer capacitance (Cpar)

### Observed trends:
- Low-k spacers → measurable reduction in Ceff
- Air spacers → up to ~15% reduction in effective capacitance

---

## 8. Key Takeaways

- Contact resistance is the **dominant scaling limiter in NFETs**
- Parasitic capacitance increases in importance as geometry shrinks
- Material innovation (metals, doping, dielectrics) is now as critical as device architecture
- Future scaling is fundamentally a **contact + interconnect co-optimization problem**

---

## Summary

Advanced CMOS scaling is no longer purely a transistor geometry problem. Performance is increasingly governed by:

- ⚡ Contact engineering (Rext)
- ⚡ Spacer dielectric engineering (Cpar)
- ⚡ System-level RC optimization across FEOL–MOL–BEOL stack

---

## Navigation

| | Lecture |
|---|---------|
| ← Previous | [L5 — Standard Cell Area Scaling And Variability](../L5_Standard_Cell_Area_Scaling_And_Variability/README.md) |
| ↑ Course | [Course Overview](../../README.md) |
