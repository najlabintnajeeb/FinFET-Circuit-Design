
# VTC and I<sub>D</sub> Analysis — Fin Configuration Sweep

![PDK](https://img.shields.io/badge/PDK-7nm_ASAP-blue?style=flat-square)
![Tool](https://img.shields.io/badge/Simulator-NGSpice-orange?style=flat-square)

> Visual comparison of how changing PMOS and NMOS fin counts shifts the VTC curve and drain current profile. Configurations are grouped to show the progression clearly.

---

## Contents

| # | Topic | Jump To |
|---|-------|---------|
| 1 | How to Read These Plots | [→](#1-how-to-read-these-plots) |
| 2 | Balanced — Equal PMOS & NMOS | [→](#2-balanced--equal-pmos--nmos) |
| 3 | NMOS Dominant — V<sub>th</sub> shifts down | [→](#3-nmos-dominant--vth-shifts-down) |
| 4 | PMOS Dominant — V<sub>th</sub> shifts up | [→](#4-pmos-dominant--vth-shifts-up) |

---

## 1. How to Read These Plots

| Plot | What to look for |
|------|-----------------|
| **VTC** | Where the curve crosses V<sub>out</sub> = V<sub>in</sub> — that is V<sub>th</sub>. Curve shifts **right** when PMOS is stronger, **left** when NMOS is stronger. |
| **I<sub>D</sub>** | Peak height shows total current drive. Peak position shifts with V<sub>th</sub> — stronger NMOS moves peak left, stronger PMOS moves it right. |

---

## 2. Balanced — Equal PMOS & NMOS

Both transistors have equal drive strength → V<sub>th</sub> sits at V<sub>DD</sub>/2 = **0.3448 V**

### 14 fins / 14 fins

**VTC**

![VTC 14/14](../images/(VTC)14:14.png)

**I<sub>D</sub>**

![ID 14/14](../images/(ID)14:14.png)

---

## 3. NMOS Dominant — V<sub>th</sub> shifts down

NMOS has more fins than PMOS → stronger pull-down → V<sub>th</sub> moves toward GND

### 14 fins PMOS / 7 fins NMOS → wait, NMOS weaker here
> Configs below have **more NMOS fins** than PMOS — NMOS pulls output low faster.

### PMOS 6 / NMOS 14

**VTC**

![VTC 6/14](../images/(VTC)6:14.png)

**I<sub>D</sub>**

![ID 6/14](../images/(ID)6:14.png)

---

### PMOS 6 / NMOS 19

**VTC**

![VTC 6/19](../images/(VTC)6:19.png)

**I<sub>D</sub>**

![ID 6/19](../images/(ID)6:19.png)

---

### PMOS 14 / NMOS 19 *(moderate asymmetry)*

**I<sub>D</sub>**

![ID 14/19 — no VTC available yet](../images/(ID)6:19.png)

---

## 4. PMOS Dominant — V<sub>th</sub> shifts up

PMOS has more fins than NMOS → stronger pull-up → V<sub>th</sub> moves toward V<sub>DD</sub>

### PMOS 14 / NMOS 7

**VTC**

![VTC 14/7](../images/(VTC)14:7.png)

**I<sub>D</sub>**

![ID 14/7](../images/(ID)14:7.png)

---

### PMOS 14 / NMOS 6

**VTC**

![VTC 14/6](../images/(VTC)14:6.png)

**I<sub>D</sub>**

![ID 14/6](../images/(ID)14:6.png)

---

### PMOS 19 / NMOS 14 *(moderate asymmetry)*

**VTC**

![VTC 19/14](../images/(VTC)19:14.png)

**I<sub>D</sub>**

![ID 19/14](../images/(ID)19:14.png)

---

### PMOS 19 / NMOS 6 *(strong asymmetry)*

**VTC**

![VTC 19/6](../images/(VTC)19:6.png)

**I<sub>D</sub>**

![ID 19/6](../images/(ID)19:6.png)

---

## Summary

| Group | V<sub>th</sub> direction | Drive strength |
|-------|--------------------------|----------------|
| Equal fins | V<sub>th</sub> = V<sub>DD</sub>/2 | Balanced |
| More NMOS fins | V<sub>th</sub> shifts **down** | NMOS pulls output low faster |
| More PMOS fins | V<sub>th</sub> shifts **up** | PMOS pulls output high faster |

> Add `6:6` and `19:19` symmetric plots to section 2 once generated.

---

## Navigation

| | |
|---|---|
| ← Back | [Assignment README](README.md) |
| ↑ Module | [Module 2 Overview](../README.md) |
| ↑ Course | [Course Overview](../../README.md) |
