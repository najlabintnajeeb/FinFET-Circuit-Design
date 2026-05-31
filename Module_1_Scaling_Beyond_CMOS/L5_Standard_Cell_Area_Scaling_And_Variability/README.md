# L5 — Standard Cell Area Scaling And Variability

**Course:** FinFET Circuit Design and Characterization
**Module:** Module 1 — Scaling Beyond CMOS
**Status:** 📝 Notes coming soon

---

## Overview

> Notes for this lecture will be added here.

---

# 📌 Figure 1 — Standard Cell Area Scaling: Fin Depopulation

## Core Relation

Standard cell area = **Cell Height (Vertical) × Cell Width (Horizontal)**

This figure focuses on **vertical scaling (cell height)** driven by fin depopulation, with node-to-node comparisons showing how standard cell height is continuously reduced.

---

## Node-wise Breakdown

### 🔹 10nm (HD)
- Cell height: **420 nm**
- Fin count: **10 fins**
- Baseline standard cell structure
- Large cell height with higher input capacitance
- Wide power rails at top and bottom

**Interpretation:**
This represents the starting reference point before aggressive fin reduction is applied.

---

### 🔹 8nm (uHD)
- Cell height: **378 nm**
- Fin count: **9 fins**
- First step of fin depopulation (10 → 9)
- Slight reduction in vertical cell dimension

**Interpretation:**
Small but important improvement in area efficiency and input capacitance reduction.

---

### 🔹 7nm (HD)
- Cell height: **243 nm**
- Fin count: **9 fins**
- Major reduction in cell height compared to earlier nodes
- Indicates stronger vertical scaling beyond just fin reduction (tightened geometry)

**Interpretation:**
This stage shows that fin depopulation alone is not the only driver — vertical scaling also improves significantly.

---

### 🔹 5nm (uHD)
- Cell height: **216 nm**
- Fin count: **8 fins**
- Further fin depopulation (9 → 8)
- Continued reduction in standard cell height

**Interpretation:**
Further density improvement while maintaining FinFET structure.

---

## Key Observations (Lecture-Aligned)

### 1. Fin Depopulation Trend
- 10 fins → 9 fins → 9 fins → 8 fins
- Progressive reduction across nodes

### 2. Cell Height Scaling
- 420 nm → 378 nm → 243 nm → 216 nm
- Clear continuous reduction in vertical dimension

### 3. Electrical Impact
- Reduced fin count → lower input capacitance
- Lower capacitance → reduced dynamic power consumption

---

## Final Takeaway

Fin depopulation is used as a **primary mechanism for vertical standard cell scaling**, enabling:

- Reduction in cell height across technology nodes  
- Reduction in input capacitance  
- Lower power consumption per standard cell  

This figure directly demonstrates how FinFET-era scaling achieves density improvement through controlled fin reduction.
---



---

## Navigation

| | Lecture |
|---|---------|
| ← Previous | [L4 — CMOS Technology Inflection Points](../L4_CMOS_Technology_Inflection_Points/README.md) |
| ↑ Course | [Course Overview](../../README.md) |
