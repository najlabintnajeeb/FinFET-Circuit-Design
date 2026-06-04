# L9 — Back End of Line (BEOL) Innovations

![Module](https://img.shields.io/badge/Module_1-Scaling_Beyond_CMOS-2ea44f)
![Topic](https://img.shields.io/badge/Topic-Interconnect_Scaling-blue)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen)

---

## At a Glance

| | |
|---|---|
| **What** | Interconnect scaling innovations — from process changes to new materials to back-side power delivery |
| **Why** | Interconnect resistance and IR drop cancel out transistor-level gains if not addressed |
| **How** | Dual → single damascene for gap fill · bottom barrier removal for via resistance · ruthenium for barrierless wires · BS-PDN to move power off the front-side metal stack |
| **Key Concept** | Back-Side Power Delivery Network (BS-PDN) — deliver VDD/VSS from the wafer back side, freeing front-side metal for signals only |
| **Key Numbers** | ~300 Ω/pillar front-side IR drop · ~170 Ω/µm M0 resistance · 50% via resistance reduction with bottom barrier removal · 17–18 metal layers in current processes |

---

## Overview

The Back End of Line (BOEL) sits above the transistors and handles routing signals and delivering power across the chip. As nodes scale down, the gaps between metal lines shrink, barriers take up a larger fraction of the via, and via resistance grows — eating into the gains made at the transistor level.

BOEL innovations address this from three angles: changing the fill process (dual → single damascene), removing or eliminating barriers (bottom barrier removal, barrierless ruthenium), and restructuring where power is delivered entirely (back-side power delivery). Together these recover the performance and area headroom that interconnect scaling would otherwise consume.

---

## Interconnect Scaling: The Gap Fill Problem

<details>
<summary><strong>From Dual to Single Damascene</strong></summary>

### Dual Damascene

Copper replaced aluminium as the interconnect material because it has lower resistivity and is harder to etch directly — so instead of patterning the metal, a hole is etched in the oxide and copper is filled into it. In dual damascene, the via and the metal trench are etched and filled together in one step.

**The problem:** as scaling continues, the gap to be filled gets smaller. Filling a via and trench together creates a high aspect ratio structure that becomes harder and harder to fill without defects.

### Single Damascene

Via and metal are filled **separately** in two steps. This reduces the aspect ratio at each step and improves gap fill — but does not fix the barrier problem.

```
Dual Damascene          Single Damascene
─────────────────       ─────────────────
Via + Metal filled  →   Via filled first
together               Metal filled second
High aspect ratio      Lower aspect ratio
Severe gap fill        Improved gap fill
```

![Interconnect Scaling Roadmap](images/interconnects.png)

### Subtractive Process

For materials like ruthenium, a subtractive process becomes possible — deposit a blanket metal film and etch it to pattern, similar to how aluminium was done. This works because ruthenium can be etched and does not need thick barriers, enabling a fully barrierless flow.

> **Why aluminium was replaced:** Aluminium was patterned subtractively but has higher resistivity than copper and suffers from electromigration. Copper solved those problems but required the damascene process. Ruthenium can potentially address all three.

</details>

---

## Barrier Engineering: Reducing Via Resistance

<details>
<summary><strong>Bottom Barrier Removal</strong></summary>

### The Barrier Problem

Barriers line the walls and bottom of a copper via to prevent copper from diffusing into the surrounding oxide. At advanced nodes these barriers consume a significant fraction of the total via cross-section, directly increasing resistance.

### Bottom Barrier Removal Process

The side barriers are kept — only the **bottom barrier** is removed:

1. Etch the via hole into oxide
2. Deposit a **blocking material** on the exposed copper at the via bottom — this prevents the barrier from forming there
3. Deposit barrier — it forms on the oxide sidewalls but not on the blocked copper surface
4. Remove the blocking material
5. Fill with copper

**Result:** Via resistance reduced by approximately **50%** for the same dimensions.

### Barrier Comparison

| Configuration | Barrier Coverage | Via Resistance |
|--------------|-----------------|----------------|
| Full barrier | Bottom + sidewalls | Baseline (100%) |
| Bottom barrier removed | Sidewalls only | ~50% of baseline |
| Fully barrierless (ruthenium) | None | Minimal |

![Extending Copper Interconnects — Selective Barrier Integration](images/extended_copper_interconnects.png)

</details>

---

## Post-Copper Interconnect Materials

<details>
<summary><strong>Candidate Materials and Ruthenium</strong></summary>

### Why Move Away from Copper

As wire widths shrink, the effective resistivity of copper increases well beyond its bulk value. Additionally, the barriers copper needs take up more and more of the wire cross-section, leaving less room for the conductor itself.

### Candidate Materials

| Material | Key Advantage | Barrier Requirement |
|----------|--------------|---------------------|
| **Ruthenium (Ru)** | Lower resistivity at narrow widths; barrierless possible | None / thin |
| **Nickel (Ni)** | Explored for post-copper | Thin |
| **Molybdenum (Mo)** | Low resistivity, can be etched | Thin |
| **Iridium (Ir)** | Explored for post-copper | Minimal |
| **Rhodium (Rh)** | Explored for post-copper | Minimal |

### Why Ruthenium

- Shows **lower resistivity than copper** at the feature sizes relevant to sub-5nm
- Compatible with a **subtractive process** — no damascene required
- Can be integrated **barrierless**, reclaiming the full via cross-section for conductor
- Most explored material for high-volume manufacturing among post-copper candidates

> Ruthenium's advantage is not in bulk resistivity — copper is still better in bulk. The advantage is that ruthenium **scales better**: no barriers needed and less resistivity increase at narrow widths.

![Non-Cu Metals — Material Properties Comparison](images/Non_cu_.png)

</details>

---

## Back-Side Power Delivery Network (BS-PDN)

<details>
<summary><strong>The Problem with Front-Side Power Delivery</strong></summary>

### How Power is Delivered Today

Power (VDD) and ground (VSS) are routed through the same front-side metal stack as signals. A modern chip has **17–18 metal layers**. Power has to travel from the very top, through all 17–18 via and metal layers, to reach the transistor source and drain regions.

**Resistance impact:**
- ~**300 Ω per power pillar** through the full metal stack
- ~**170 Ω per µm** of M0 line resistance
- Combined result: significant **IR drop** — the voltage that actually arrives at the transistor is much lower than the supply voltage at the top

A lot of front-side routing resources are also consumed just for power and ground rails, leaving less room for signal routing.

</details>

<details>
<summary><strong>Back-Side Power Delivery: How It Works and What It Enables</strong></summary>

### How It Works

Instead of routing VDD/VSS down through the front-side metal stack, power is delivered from the **back side of the wafer** directly to the transistor source/drain. Signals use the front side exclusively.

```
FRONT-SIDE POWER DELIVERY          BACK-SIDE POWER DELIVERY
──────────────────────────         ──────────────────────────
Metal 17  ← VDD/VSS + Signals      Metal 17  ← Signals only
Metal 16                           Metal 16
  ...       (power travels         ...
Metal 2     down 17 layers)        Metal 2
Metal 1                            Metal 1
M0        ← IR drop ~300Ω          M0        ← Signals only
──────────                         ──────────
Transistor                         Transistor
                                   ↑ VDD/VSS direct from back
                                   Backside metal
                                   Bump
```

### Benefits

| Benefit | How |
|---------|-----|
| **Reduced IR drop** | Power bypasses all 17–18 resistive layers |
| **More signal routing tracks** | Front-side metal freed from power rails |
| **Fewer metal layers needed** | Power no longer requires front-side metal |
| **Smaller standard cell height** | Wide VDD/VSS rails moved to back side |

![Back-Side Power Delivery Network](images/BS_PDN.png)

### Standard Cell Area Benefit

In a standard cell, wide VDD and VSS tracks run along the cell boundary and consume cell height. Moving these to the back side means cell height can be reduced without losing any signal tracks — directly reducing standard cell area, which connects back to the scaling discussed in L5.

</details>

---

## Key Terminology

| Term | Definition |
|------|-----------|
| **Dual damascene** | Via and metal trench etched and filled together in one copper deposition step |
| **Single damascene** | Via and metal filled separately in two steps, reducing aspect ratio |
| **Subtractive process** | Blanket metal film deposited then etched to pattern — used for Al, re-emerging for Ru |
| **Barrier** | Thin liner preventing copper from diffusing into surrounding oxide |
| **Bottom barrier removal** | Process using a blocking material so the barrier forms only on sidewalls, not at via bottom — reduces via resistance ~50% |
| **Ruthenium (Ru)** | Leading post-copper interconnect candidate; lower resistivity at narrow widths, barrierless capable |
| **BS-PDN** | Back-Side Power Delivery Network — routes VDD/VSS from the wafer back side instead of through front-side metal |
| **IR drop** | Voltage loss due to resistance along a power rail; reduces the supply voltage actually seen at the transistor |
| **M0** | Lowest metal layer, connects directly to transistor source/drain |

---


> **The gap fill problem drives the whole process evolution.** Dual → single damascene → subtractive is not about switching materials arbitrarily — each step is a direct response to the shrinking gap that makes the previous process unworkable.

> **Removing the bottom barrier cuts via resistance by 50% with no dimensional change.** The blocking material process is a purely geometric fix — the same via, same copper, but the barrier no longer occupies the bottom cross-section.

> **Ruthenium wins at scale, not in bulk.** Its bulk resistivity is worse than copper. The advantage appears at narrow widths where copper's effective resistivity rises sharply and barriers consume the cross-section — ruthenium avoids both problems.

> **BS-PDN doesn't improve one component — it restructures the whole power delivery path.** By cutting 17–18 resistive layers out of the power path, IR drop drops dramatically, front-side metal is freed for signals, and standard cells can shrink — all from one architectural change.


---

**Key Takeaway:** BOEL innovations address the interconnect bottleneck that would otherwise cancel out transistor-level scaling gains. Moving from dual to single damascene tackles gap fill. Bottom barrier removal and ruthenium tackle via and wire resistance. BS-PDN tackles power delivery — cutting IR drop, freeing routing resources, and enabling smaller standard cells all at once.

---

## File Structure

```
L9_BOEL_Innovations/
└── README.md          ← This file
```

---

## Navigation

| Previous | Module Home | Next |
|----------|------------|------|
| [← L8: 3D Structures](../L8_3D_Structures/README.md) | [Module 1 Home](../../README.md) | End of Module 1 |
