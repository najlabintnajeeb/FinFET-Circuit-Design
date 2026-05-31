# L4 — CMOS Technology Inflection Points
> From Dennard scaling to gate-all-around — every node that changed the rules.

![Module](https://img.shields.io/badge/Module_2-FEOL-blue) ![Lecture](https://img.shields.io/badge/Lecture-4_of_9-green) ![Topics](https://img.shields.io/badge/Topics-CMOS_Scaling_·_Transistor_Architecture_·_Lithography-purple)

**[← L3](#)** · **[Home](#)** · **[L5 →](#)**

---

## At a Glance

| | |
|---|---|
| **What** | A node-by-node history of CMOS innovations — materials, architecture, and lithography changes that kept scaling alive |
| **Why** | Transistors couldn't just shrink — each node hit a physical wall that required a structural reinvention to continue |
| **How** | Successive substitutions: better metals → strained channels → high-K dielectrics → 3D fins → gate-all-around |
| **Key Concept** | Dennard Scaling Breakdown — once voltage couldn't track gate length, every node needed its own engineering solution |
| **Target** | Sub-1 nm devices via GAA + CFET + 2D materials (MoS₂) · current frontier: 3/2/1.4 nm GAA nodes |

---

## Summary

Dennard's constant electric field scaling guided CMOS roadmaps until ~250 nm, after which oxide thickness, interconnect RC, and transistor non-idealities forced a series of structural innovations at each node. Beginning at 130 nm, materials substitutions (Cu BEOL, strained Si, high-K metal gate) maintained performance scaling while managing leakage and resistance. From 22 nm onward, 3D transistor architectures — FinFET, then gate-all-around and eventually CFET — took over as the primary scaling lever, with lithography transitioning from multi-patterning to EUV.

---

## Sections

<details>
<summary><strong>~1 μm – 250 nm &nbsp;|&nbsp; Dennard Scaling Era</strong></summary>

> 📊 *Slide 2 — Drive Voltage Scaling graph (left panel)*

| Parameter | Behaviour |
|---|---|
| Supply voltage | Tracks constant E-field trajectory down to ~250 nm |
| Gate length | Shrinks proportionally per Dennard's roadmap |
| Deviation point | ~250 nm — oxide & interconnect fail to keep pace |

Bob Dennard (IBM) formalised constant electric field scaling — reduce gate length, scale voltage proportionally, keep the E-field across the oxide constant. This worked cleanly until ~250 nm, when oxide thickness could not scale further and RC parasitics in interconnects grew dominant.

</details>

<details>
<summary><strong>180 nm – 90 nm &nbsp;|&nbsp; Back-End Materials Refresh</strong></summary>

> 🔬 *Slide 2 — Cu BEOL node labels (130 nm / 90 nm)*

| Node | Innovation | Why it mattered |
|---|---|---|
| 180 nm | Voltage scaling continues | Last node close to Dennard trajectory |
| 130 nm | Copper BEOL replaces aluminium | Lower resistivity reduces RC delay |
| 90 nm | Uniaxial strained Si NMOS | Higher electron mobility → more drive current |

Aluminium interconnects became too resistive at 130 nm; copper was introduced to cut back-end RC. Simultaneously, mechanical strain engineering boosted channel mobility without shrinking the gate further.

</details>

<details>
<summary><strong>65 nm – 32 nm &nbsp;|&nbsp; Gate Dielectric & Variability Crisis</strong></summary>

> 🔬 *Slide 2 — HKMG cross-section TEM (right panel)*

| Node | Innovation | Effect |
|---|---|---|
| 65 nm | eSiGe CVD + ultra-low-K dielectric | PMOS strain; reduced BEOL capacitance |
| 45 nm | HKMG (gate-first) + unidirectional gate & metal lines | Lower leakage; new layout paradigm |
| 32 nm | HKMG gate-last / replacement gate + raised S/D NMOS | Sharp drop in random variability |

SiO₂ could no longer scale — quantum tunnelling leakage spiked. Hafnium oxide (high-K) replaced it, and polysilicon gates gave way to metal to keep EOT low. At 45 nm, 193 nm lithography also hit a hard wall: it could no longer print lines running in two directions simultaneously, so both gate and metal layers moved to **unidirectional routing only** — a fundamental layout rule change that reshaped how circuits are placed on chip. The gate-last replacement gate process at 32 nm then dramatically reduced threshold voltage variation (see random variation bar chart, Slide 2).

</details>

<details>
<summary><strong>22 nm – 14 nm &nbsp;|&nbsp; FinFET & 3D Gate Control</strong></summary>

> 🖼 *Slide 1 — FinFET IV curve & Tri-gate SEM (left panel); standard cell diagrams (centre)*

| Feature | Detail |
|---|---|
| FinFET introduction | 22 nm (Intel, 2011) — gate wraps three sides of fin |
| Benefit | Superior electrostatic control; decouples drive width from footprint |
| SAC (self-aligned contacts) | Contact lands precisely on gate/source/drain — reduces resistance |
| Co+Cu BEOL | Cobalt liner added under copper to reduce contact resistance at narrow vias |
| 14 nm: unidirectional M0 | Lowest metal layer made unidirectional — enables tighter pitch |
| 14 nm: SADP | Halves the minimum pitch → smaller standard cell height |
| 14 nm: double→single diffusion break | SDB separates adjacent transistors; single break saves area vs double |
| 14 nm: gate contact on active | Previously gate contacts only landed on STI (isolation); moving to active improves cell-to-cell interconnection |
| 14 nm: self-aligned SDB | Alignment tolerance removed → better contact resistance, higher drive current |

Planar transistors could no longer be switched off cleanly below 22 nm. FinFET's 3D fin geometry gives the gate control from three sides, suppressing short-channel effects while letting electrical width (drive current) scale independently of the device footprint. Cobalt was added as a liner beneath copper at 22 nm because copper's resistivity rises sharply in very narrow vias — cobalt's better wetting and lower contact resistance at small dimensions fills that gap. By 14 nm, the combination of SADP, unidirectional M0, and self-aligned single diffusion break enabled the three standard cell flavours visible on Slide 1: **High Density** (0.092 μm², 1 pull-up / 1 pull-down), **Low Voltage** (0.108 μm², 1 PU / 2 PD), and **High Speed** (0.130 μm², 2 PU / 3 PD) — each trading area for drive strength.

</details>

<details>
<summary><strong>10 nm – 7 nm &nbsp;|&nbsp; Multi-Patterning & EUV</strong></summary>

> 🖼 *Slide 1 — 10 nm / 7 nm node badges*

| Node | Lithography | Other changes |
|---|---|---|
| 10 nm | Bi-directional LELELE (193 nm, 3 exposures) | COAG, SA-SDB, SAQP |
| 7 nm | EUV single pattern (13.5 nm wavelength) | First EUV production node |

193 nm ArF immersion lithography was extended via multiple patterning — LELELE (litho-etch repeated three times) — at 10 nm, at enormous process complexity and cost. **SA-SDB** (self-aligned single diffusion break) appeared here too: by aligning the diffusion break to existing features rather than a separate mask, it removes overlay error, tightening contact resistance and boosting drive current. EUV at 7 nm replaced three ArF exposures with one 13.5 nm shot, cutting process steps while continuing pitch scaling.

</details>

<details>
<summary><strong>5 nm – 3/2/1.4 nm &nbsp;|&nbsp; SiGe PMOS & Gate-All-Around</strong></summary>

> 🖼 *Slide 1 — SiGe mobility scatter plot & stacked nanosheet diagram*

| Node | Innovation | Benefit |
|---|---|---|
| 5 nm | SiGe fin for PMOS | Higher hole mobility → better PMOS drive current |
| 3/2/1.4 nm | Gate-all-around (nanosheet / GAA) | Gate surrounds channel on all 4 sides; better Vt control |
| Future | Complementary FET (CFET) | Stack NMOS above PMOS — area scaling without fin pitch shrink |

FinFET channel thickness is defined by lithography on the horizontal axis; GAA nanosheets decouple this by controlling thickness on the vertical axis — far more precise. CFET stacks the two transistor types vertically, potentially doubling device density per footprint.

</details>

<details>
<summary><strong>Sub-1 nm &nbsp;|&nbsp; 2D Materials & Beyond Si</strong></summary>

> 🖼 *Slide 1 — MoS₂ / TiN / HfO cross-section (far right)*

| Challenge | Approach |
|---|---|
| Direct source-drain tunnelling in Si at <5 nm gate length | Transition metal dichalcogenides (e.g. MoS₂) |
| Area scaling | GAA + CFET + 2D FET stacking |

Silicon's band structure allows quantum-mechanical tunnelling directly from source to drain below ~5 nm gate length, setting a hard floor on Si scaling. Materials like molybdenum disulphide (MoS₂) have a larger effective mass, suppressing this effect and enabling sub-5 nm gate lengths in research devices.

</details>

---

## Key Terminology

| Term | Definition |
|---|---|
| **Dennard Scaling** | Constant electric field methodology — scale gate length and voltage together to maintain performance |
| **EOT** | Equivalent oxide thickness — notional SiO₂ thickness giving the same capacitance as a high-K dielectric stack |
| **HKMG** | High-K metal gate — hafnium oxide dielectric + metal gate replacing poly-Si to reduce leakage and EOT |
| **Unidirectional routing** | Layout rule requiring all lines on a layer to run in one direction only — forced at 45 nm by 193 nm lithography limits |
| **SAC** | Self-aligned contact — contact patterned relative to the gate itself, not a separate mask, minimising resistance |
| **Diffusion break (SDB)** | Cut in the active silicon that electrically isolates adjacent transistors; single break saves area over double |
| **FinFET / Tri-gate** | 3D transistor where the gate wraps three sides of a vertical silicon fin for better electrostatic control |
| **SADP / SAQP** | Self-aligned double/quadruple patterning — spacer techniques that halve or quarter the effective pitch |
| **EUV** | Extreme ultraviolet lithography (13.5 nm wavelength) — single-exposure patterning replacing multi-patterning at 7 nm |
| **GAA / Nanosheet** | Gate-all-around transistor — gate surrounds the channel on all four sides; channel thickness set vertically |
| **CFET** | Complementary FET — NMOS and PMOS stacked vertically to achieve area scaling without lateral fin pitch reduction |
| **TMD / MoS₂** | Transition metal dichalcogenide — 2D material with larger effective mass enabling sub-5 nm gate lengths |

---

## Key Takeaway

**Each major node boundary forced a structural reinvention — materials, geometry, or lithography — because no single lever can sustain Moore's Law indefinitely; scaling is now a systems problem, not just a shrink.**

---

## Files

```
📁 L4 — CMOS Inflection Points
├── 🖼  slide_deck_image1_22nm_subnm.png
├── 🖼  slide_deck_image2_1um_32nm.png
├── 📄  lecture_transcript.txt
└── 📝  L4_CMOS_Inflection_Points.md  ← this file
```

---

**[← L3](#)** · **[Home](#)** · **[L5 →](#)**
