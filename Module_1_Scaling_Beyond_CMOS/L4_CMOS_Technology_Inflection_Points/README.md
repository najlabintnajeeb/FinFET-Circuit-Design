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

## Scaling Constraint Evolution Map ##

250 nm → Power scaling breakdown (Dennard collapse)
130 nm → RC delay begins
90 nm → Interconnect resistance crisis
65 nm → mobility + strain engineering
45 nm → leakage + lithography constraint
32 nm → variability wall
22 nm → electrostatics wall (FinFET)
14 nm → patterning wall
7 nm → lithography cost wall (EUV needed)
5 nm → mobility/material wall (SiGe)
<5 nm → quantum tunneling wall

---
## FEOL vs BEOL Separation Model ##
FEOL and BEOL are co-optimized from 45 nm onward, not independently engineered.

| FEOL (Device)      | BEOL (Interconnect)  |
| ------------------ | -------------------- |
| HKMG               | Cu / Co interconnect |
| FinFET / GAA       | Low-k dielectrics    |
| Strain engineering | RC optimization      |


---


<details>
<summary><strong>~1 μm – 250 nm | Dennard Scaling Era</strong></summary>
🔴 Constraint
Constant electric field scaling required simultaneous voltage and geometry reduction
Below ~250 nm, oxide scaling and interconnect RC could not keep pace
Transistor non-idealities (short-channel effects) began emerging
🛠 Engineering Response
Constant E-field (Dennard) scaling: reduce gate length with proportional voltage scaling
IBM roadmap formalized performance prediction under scaling assumptions
⚙ Side Effects
Power density remained stable under scaling assumptions
Interconnect and device physics were still weakly coupled
📈 Outcome
Predictable scaling regime up to ~250 nm
Beyond this, single-rule scaling breakdown → multi-constraint era begins
</details>
<details>
<summary><strong>180 nm – 90 nm | Interconnect Resistance Transition</strong></summary>
🔴 Constraint
Aluminium interconnects became RC-limited at 130 nm
Device drive current scaling insufficient at 90 nm without mobility enhancement
🛠 Engineering Response
130 nm: Copper BEOL introduced → reduced interconnect resistivity
90 nm: Strained silicon NMOS → mobility enhancement without scaling gate length
⚙ Side Effects
Interconnect delay became a first-order design constraint
Process integration complexity increased due to copper metallization
📈 Outcome
Performance scaling maintained through materials engineering
System-level shift: interconnect + device co-dependence begins
</details>
<details>
<summary><strong>65 nm – 32 nm | Leakage, Lithography, and Variability Crisis</strong></summary>
🔴 Constraint
SiO₂ scaling reached quantum tunneling limit → severe gate leakage
45 nm lithography (193 nm ArF) hit resolution + bidirectionality limits
32 nm variability began increasing after initial improvement
🛠 Engineering Response
65 nm: eSiGe strain engineering + ultra-low-K dielectrics (BEOL RC reduction)
45 nm:
HfO₂ high-K dielectric replaces SiO₂
Metal gate replaces polysilicon (HKMG)
Unidirectional routing enforced for gates and metal layers
32 nm:
Gate-last (replacement gate) HKMG process
Raised source/drain engineering for better drive control
⚙ Side Effects
Layout paradigm shifted to unidirectional standard-cell architecture
Process complexity increased significantly due to HKMG integration
Variability became a measurable scaling limiter post-32 nm
📈 Outcome
Leakage dramatically reduced via high-K dielectric stacks
Physical vs electrical oxide thickness decoupled (EOT concept stabilized)
Variability transitioned into a core design constraint
</details>
<details>
<summary><strong>22 nm – 14 nm | FinFET & 3D Electrostatic Control</strong></summary>
🔴 Constraint
Planar MOSFETs failed to suppress short-channel effects
OFF-state leakage became uncontrollable below ~22 nm
Copper via resistance increased sharply at nanoscale dimensions
🛠 Engineering Response
22 nm:
FinFET (tri-gate architecture) introduced
Self-aligned contacts (SAC)
Co liner added in Cu BEOL to reduce via resistance
14 nm:
SADP (pitch scaling via spacers)
Unidirectional M0 routing
Single diffusion break architecture
Self-aligned SDB for reduced overlay error
⚙ Side Effects
Device geometry became 3D-driven rather than planar scaling
Standard-cell architectures diversified (HD / LP / HP cells)
Tight co-optimization of device, layout, and interconnect stack
📈 Outcome
Electrostatic control restored via multi-gate structures
Drive current decoupled from planar footprint
FinFET becomes dominant CMOS architecture
</details>
<details>
<summary><strong>10 nm – 7 nm | Multi-Patterning Collapse → EUV Transition</strong></summary>
🔴 Constraint
193 nm lithography reached resolution and overlay limits
Multi-patterning (LELELE) introduced cumulative alignment errors
Cost and process complexity scaled superlinearly
🛠 Engineering Response
10 nm:
LELELE multi-patterning (3× litho-etch)
SAQP / SA-SDB introduced for alignment correction
7 nm:
EUV lithography (13.5 nm wavelength)
Single-exposure patterning replaces multi-patterning
⚙ Side Effects
Multi-patterning complexity reached economic and physical limit
Mask count and process variability increased sharply pre-EUV
EUV required ecosystem-level infrastructure overhaul
📈 Outcome
Overlay error accumulation eliminated at 7 nm
Lithography transitions from combinational to single-exposure paradigm
Scaling resumes via wavelength reduction
</details>
<details>
<summary><strong>5 nm – 3/2/1.4 nm | Gate-All-Around & Mobility Engineering</strong></summary>
🔴 Constraint
FinFET electrostatics approaching physical limit
PMOS mobility lagging NMOS performance
Lateral scaling efficiency diminishing
🛠 Engineering Response
5 nm:
SiGe channel engineering for PMOS mobility improvement
3/2/1.4 nm:
Gate-All-Around (nanosheet architecture)
Channel thickness controlled vertically (not lithographically)
CFET introduced as future stacked architecture concept
⚙ Side Effects
Device scaling shifted from planar → vertical dimension
Channel geometry decoupled from lithography limits
Fabrication complexity increased significantly
📈 Outcome
Electrostatics improved via full gate surround control
Continued scaling enabled without fin pitch reduction
Foundation laid for vertical integration (CFET era)
</details>
<details>
<summary><strong>Sub-1 nm | Quantum Limit & 2D Materials</strong></summary>
🔴 Constraint
Direct source–drain tunneling dominates below ~5 nm gate length
Silicon band structure limits further scaling
🛠 Engineering Response
Transition metal dichalcogenides (e.g., MoS₂) explored
Gate-All-Around + CFET stacking continued as architecture strategy
⚙ Side Effects
Material system shift required beyond silicon
Device physics becomes quantum-mechanically dominated
📈 Outcome
Silicon scaling reaches physical limit regime
Research shifts toward 2D materials and heterogeneous integration
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
