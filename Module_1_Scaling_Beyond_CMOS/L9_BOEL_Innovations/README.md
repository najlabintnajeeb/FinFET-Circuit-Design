# L9 — Back End of Line (BOEL) Innovations

![Module](https://img.shields.io/badge/Module_1-Scaling_Beyond_CMOS-2ea44f)
![Topic](https://img.shields.io/badge/Topic-Interconnect_Scaling-blue)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen)

---

## At a Glance

| Attribute | Detail |
|-----------|--------|
| **Core Theme** | Interconnect scaling and back-side power delivery |
| **Key Materials** | Copper → Ruthenium, Nickel, Molybdenum, Iridium, Rhodium |
| **Key Process** | Dual damascene → Single damascene → Subtractive (barrierless) |
| **Central Problem** | Gap fill, barrier resistance, IR drop across 17–18 metal layers |
| **Key Innovation** | Back-Side Power Delivery Network (BS-PDN) |
| **Connects To** | L5 (standard cell area), L6 (parasitics), L8 (3D structures) |

---

## Overview

The Back End of Line (BOEL) sits above the transistors and is responsible for routing signals and delivering power across the chip. As technology nodes scale down, the gaps between metal lines shrink, barriers become proportionally thicker, and via resistance skyrockets — all of which erode the performance gains earned at the transistor level.

This lecture traces the evolution of interconnect technology from dual damascene copper through single damascene and subtractive processes, introduces post-copper materials (with ruthenium as the leading candidate), and culminates in one of the most impactful BOEL innovations of the sub-5nm era: **back-side power delivery**. By routing VDD/VSS through the substrate rather than the front-side metal stack, designers recover routing resources, reduce IR drop, and shrink standard cell height — all without touching the transistor.

---

## Interconnect Scaling: The Gap Fill Problem

<details>
<summary><strong>From Dual to Single Damascene</strong></summary>

### Dual Damascene (Legacy)

In the traditional dual damascene process, a trench and via are etched together into oxide and filled with copper in a single deposition step. This was a major improvement over aluminium because copper has lower resistivity and the damascene process avoids patterning copper directly (copper is difficult to etch).

**The problem:** as feature sizes shrink, the combined trench+via structure produces a very high aspect ratio void that becomes increasingly difficult to fill without voids or seams.

### Single Damascene (Intermediate Solution)

The via and the metal trench are filled **separately** in two sequential steps, reducing the maximum aspect ratio encountered at any one time. This improves gap fill but does not address the barrier problem.

```
Dual Damascene          Single Damascene
─────────────────       ─────────────────
Via + Metal filled  →   Via filled first
together               Metal filled second
High aspect ratio      Lower aspect ratio
Severe gap fill        Improved gap fill
```

### Subtractive Process (Future Direction)

For materials like ruthenium, a **subtractive etch process** (analogous to how aluminium was historically patterned) becomes viable because:
- Ruthenium can be etched
- Ruthenium does not require thick diffusion barriers
- A barrierless flow is achievable, eliminating the volume penalty of barriers entirely

> **Why aluminium failed at scale:** Aluminium was patterned subtractively but has higher resistivity than copper and suffers from electromigration. Copper solved those issues but introduced the damascene constraint. Ruthenium potentially solves all three simultaneously.

</details>

---

## Barrier Engineering: Reducing Via Resistance

<details>
<summary><strong>The Barrier Resistance Problem and Bottom Barrier Removal</strong></summary>

### Why Barriers Exist

Copper diffuses rapidly into silicon dioxide and silicon, poisoning devices. Barriers (typically TaN/Ta bilayers) line the via walls and bottom to contain the copper. At advanced nodes, these barriers consume a significant fraction of the total via cross-section — dramatically increasing effective resistivity.

### Bottom Barrier Removal Process

A targeted process innovation removes only the **bottom barrier** while retaining sidewall barriers for copper containment:

1. Etch the via hole into oxide
2. Deposit a **blocking material** on top of the exposed copper at the via bottom — this material prevents barrier nucleation on copper
3. Deposit barrier normally — it forms on the oxide sidewalls but **not** on the blocked copper surface
4. Remove the blocking material
5. Fill with copper

**Result:** Via resistance reduced by approximately **50%** for identical via dimensions.

### Barrier Comparison

| Configuration | Barrier Coverage | Via Resistance | Risk |
|--------------|-----------------|----------------|------|
| Full barrier (legacy) | Bottom + sidewalls | Baseline (100%) | Lowest copper diffusion risk |
| Bottom barrier removed | Sidewalls only | ~50% of baseline | Moderate — copper contacts oxide at bottom |
| Fully barrierless (ruthenium) | None | Minimal | N/A — Ru does not diffuse into oxide |

</details>

---

## Post-Copper Interconnect Materials

<details>
<summary><strong>Candidate Materials and Why Ruthenium Leads</strong></summary>

### The Case Against Copper at Advanced Nodes

Copper's bulk resistivity (~1.7 µΩ·cm) is excellent, but at narrow line widths (<10 nm), surface and grain boundary scattering cause the **effective resistivity to increase dramatically** — far exceeding the bulk value. Additionally, copper requires thick diffusion barriers that consume an ever-larger fraction of the wire cross-section.

### Candidate Materials

| Material | Key Advantage | Barrier Requirement | Manufacturing Maturity |
|----------|--------------|--------------------|-----------------------|
| **Ruthenium (Ru)** | Lower effective resistivity at narrow widths; barrierless possible | None / thin | High — actively explored for HVM |
| **Nickel (Ni)** | Good electromigration resistance | Thin | Moderate |
| **Molybdenum (Mo)** | Low resistivity, etchable | Thin | Moderate |
| **Iridium (Ir)** | Excellent stability | Minimal | Early research |
| **Rhodium (Rh)** | Low resistivity | Minimal | Early research |

### Why Ruthenium is the Front-Runner

- Shows **lower effective resistivity than copper** at feature sizes relevant to sub-5nm nodes
- Compatible with **subtractive patterning** — no damascene required
- Can be deposited **barrierless**, reclaiming the full wire cross-section for the conductor
- Significant investment from industry for high-volume manufacturing (HVM) readiness

> **Key insight:** The advantage of ruthenium is not its bulk resistivity (copper is still better in bulk) — it is that ruthenium **scales better** because it does not need barriers and suffers less from size-effect resistivity increases.

</details>

---

## Back-Side Power Delivery Network (BS-PDN)

<details>
<summary><strong>The Problem with Front-Side Power Delivery</strong></summary>

### Today's Front-Side Power Delivery

In current processes, power (VDD) and ground (VSS) are routed through the same front-side metal stack as signals. A modern chip has **17–18 metal layers**. Power must travel from the top metal layer, down through all 17–18 vias and metal segments, before reaching the transistor source/drain regions.

**Quantified resistance impact:**
- ~**300 Ω per power pillar** through the full metal stack
- ~**170 Ω per µm** of M0 (lowest metal) line resistance
- Combined effect: significant **IR drop** — the voltage actually arriving at the transistor is meaningfully lower than the supply voltage at the bump

This IR drop causes performance loss, timing violations, and forces designers to over-voltage to compensate.

</details>

<details>
<summary><strong>Back-Side Power Delivery: Architecture and Benefits</strong></summary>

### Architecture

Instead of routing VDD/VSS through the front-side metal stack, BS-PDN routes power through **nano-TSVs (through-silicon vias)** drilled from the back of the wafer up to the transistor source/drain contacts. Power is delivered from the back side; signals use the front side exclusively.

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
                                   Nano-TSV  ← VDD/VSS direct
                                   Backside metal
                                   Bump
```

### Benefits

| Benefit | Mechanism | Impact |
|---------|-----------|--------|
| **Reduced IR drop** | Power bypasses 17–18 resistive via/metal layers | Near-ideal VDD at transistor |
| **More signal routing tracks** | Front-side metal freed from power rails | Higher wiring density |
| **Fewer required metal layers** | Power no longer needs front-side metal | Reduced process cost and parasitics |
| **Smaller standard cell height** | Wide VDD/VSS tracks buried in substrate | Higher logic density |

### Standard Cell Area Benefit

In a conventional standard cell, wide VDD and VSS rails run horizontally across the cell boundary, consuming height. With BS-PDN:
- The wide power rails are moved to the back side
- Cell height can be reduced without sacrificing signal track count
- This directly reduces standard cell area and improves logic density

> This connects directly to L5 (standard cell area scaling) — BS-PDN is one of the primary architectural levers enabling continued cell height reduction at 3nm and below.

</details>

---

## Key Terminology

| Term | Definition |
|------|-----------|
| **Dual damascene** | Process where via and metal trench are etched and filled together in a single copper deposition step |
| **Single damascene** | Via and metal are filled in separate sequential steps, reducing aspect ratio |
| **Subtractive process** | Metal deposited as a blanket film then etched to pattern — used for Al historically, re-emerging for Ru |
| **Diffusion barrier** | Thin liner (e.g. TaN/Ta) preventing copper migration into surrounding dielectric or silicon |
| **Bottom barrier removal** | Process using a blocking layer to prevent barrier formation at via bottom, reducing via resistance ~50% |
| **Ruthenium (Ru)** | Post-copper interconnect candidate with lower size-effect resistivity and barrierless integration |
| **BS-PDN** | Back-Side Power Delivery Network — routes VDD/VSS through the wafer substrate rather than front-side metal |
| **Nano-TSV** | Through-silicon via at nano-scale dimensions connecting backside power metal to front-side transistor contacts |
| **IR drop** | Resistive voltage loss along a power rail; reduces effective supply voltage at the transistor |
| **M0** | Lowest metal layer, directly contacting transistor source/drain; highest resistance per unit length |

---

## Lecture Insights

> 💡 **Barriers are not free.** At advanced nodes, the TaN/Ta barrier in a copper via can occupy 30–40% of the total via volume. Removing even the bottom barrier recovers 50% of via resistance — this is a purely geometric win, no new materials required.

> 💡 **Ruthenium's advantage is relative, not absolute.** Its bulk resistivity is higher than copper's — the win comes from dramatically better size-effect scaling and the elimination of barriers, which together make it lower resistance than copper in practice at sub-10nm wire widths.

> 💡 **BS-PDN is a system-level innovation.** It does not improve a single transistor or wire — it restructures where an entire category of interconnect lives, freeing the most congested routing layers and reducing IR drop simultaneously.

> 💡 **Feynman's quote reframed.** The lecture closes by extending Feynman's famous "there is plenty of room at the bottom" — the instructor's point is that scaling opportunities now exist everywhere: at the bottom (devices), in the middle (interconnect), and at the system level (3D integration, back-side delivery). The course as a whole has traced all three dimensions.

---

**Key Takeaway:** BOEL innovations — from single damascene and bottom barrier removal to ruthenium interconnects and back-side power delivery — address the interconnect bottleneck that would otherwise negate transistor-level scaling gains. BS-PDN in particular is a paradigm shift: by moving power to the back of the wafer, it simultaneously reduces IR drop, frees front-side routing, and enables smaller standard cells, making it one of the most impactful system-level scaling levers at 3nm and below.

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
