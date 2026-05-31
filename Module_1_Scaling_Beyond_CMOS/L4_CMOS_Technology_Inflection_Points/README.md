
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

Bob Dennard (IBM) formalised constant electric field scaling as a roadmap methodology — predicting supply voltage and gate length at each generation. That roadmap held until ~250 nm, after which oxide thickness, interconnect RC, and transistor non-idealities forced a series of structural innovations at each node. Beginning at 90 nm, materials substitutions (Cu BEOL, strained Si, high-K metal gate) maintained performance scaling while managing leakage and resistance. From 22 nm onward, 3D transistor architectures — FinFET, then gate-all-around and eventually CFET — took over as the primary scaling lever, with lithography transitioning from multi-patterning to EUV.

---

## Scaling Constraint Evolution Map

* **~250 nm** → Power scaling breakdown (Dennard collapse)
* **~130 nm** → RC delay begins (aluminium BEOL too resistive)
* **~90 nm** → Copper BEOL introduced to address interconnect resistance
* **~65 nm** → Mobility / strain engineering (NMOS + PMOS strained); ultra-low-K BEOL dielectrics
* **~45 nm** → Leakage wall (HKMG introduced); lithography wall (193 nm can no longer print bidirectional lines → unidirectional routing)
* **~32 nm** → Variability wall (variation decreases with HKMG, then starts rising again)
* **~22 nm** → Electrostatics wall → FinFET introduced
* **~14 nm** → Patterning wall (SADP / SAQP / LELELE); M0 unidirectional; single diffusion break
* **~7 nm** → Lithography cost wall → EUV (single-exposure replaces LELELE)
* **~5 nm** → Mobility / material wall (SiGe PMOS fin)
* **<5 nm** → Quantum tunneling wall → GAA / nanosheet → CFET → 2D materials (MoS₂)

---

## FEOL vs BEOL Separation Model

FEOL and BEOL are co-optimised from 45 nm onward, not independently engineered.

| FEOL (Device) | BEOL (Interconnect) |
| :--- | :--- |
| HKMG | Cu / Co interconnect |
| FinFET / GAA | Low-k dielectrics |
| Strain engineering | RC optimization |

---

<details>
<summary><strong>~1 μm – 250 nm | Dennard Scaling Era</strong></summary>
<br>

**🔴 Constraint**
* Moore's Law governs transistor integration density but says nothing about performance.
* Constant electric field scaling (Dennard) was needed to predict and design transistor performance — specifically the electric field across the gate oxide.
* Around 250 nm the methodology broke down because:
  * Oxide thickness did not scale fast enough for the required voltage reduction.
  * Interconnects became RC-dominant.
  * Transistors became less ideal (short-channel effects).

**🛠 Engineering Response**
* Dennard roadmap: simultaneously scale gate length and supply voltage to keep electric field constant.
* IBM formalised performance prediction under these scaling assumptions.

**⚙ Side Effects**
* Power density remained stable while the model held.
* Interconnect and device physics were still weakly coupled.

**📈 Outcome**
* Predictable, single-rule scaling regime up to ~250 nm.
* Beyond this point, multi-constraint era begins.

</details>

<details>
<summary><strong>~130 nm – 90 nm | Interconnect Resistance Transition</strong></summary>
<br>

**🔴 Constraint**
* At ~130 nm the aluminium BEOL became too resistive; RC delay emerged as a first-order concern.

**🛠 Engineering Response**
* **~90 nm:** Copper BEOL introduced to reduce interconnect resistivity.

**⚙ Side Effects**
* Interconnect delay became a first-order design constraint.
* Copper metallization increased process integration complexity.

**📈 Outcome**
* Performance scaling maintained through materials engineering.
* System-level shift: interconnect and device co-dependence begins.

</details>

<details>
<summary><strong>65 nm – 32 nm | Leakage, Lithography, and Variability Crisis</strong></summary>
<br>

**🔴 Constraint**
* SiO₂ gate dielectric reached quantum-tunneling limit → severe gate leakage.
* 193 nm (ArF) lithography hit resolution and bidirectionality limits around 45 nm.
* Random variation decreased with first-generation HKMG but started increasing again at 32 nm — a new scaling limiter.

**🛠 Engineering Response**
* **65 nm:**
  * NMOS and PMOS transistors strained.
  * Ultra-low-K dielectrics introduced in BEOL to reduce RC.
* **45 nm:**
  * HfO₂ high-K dielectric replaces SiO₂.
  * Metal gate replaces polysilicon (HKMG) — reduces EOT and gate leakage.
  * 193 nm lithography can no longer print bidirectional lines → **unidirectional routing** enforced for both gate and metal layers (major layout change).
* **32 nm:**
  * Second-generation HKMG using a **replacement gate (gate-last)** process.
  * Raised source/drain engineering for better drive control.

**⚙ Side Effects**
* Layout paradigm shifted to unidirectional standard-cell architecture (45 nm).
* Process complexity increased significantly due to HKMG integration.
* Variability transitioned into a core design constraint by 32 nm.

**📈 Outcome**
* Leakage dramatically reduced via high-K dielectric stacks.
* Physical vs electrical oxide thickness decoupled (EOT concept stabilised).
* Unidirectional routing became the new normal for cell design.

</details>

<details>
<summary><strong>22 nm – 14 nm | FinFET & 3D Electrostatic Control</strong></summary>
<br>

**🔴 Constraint**
* Beyond 32 nm, planar MOSFETs could not turn on/off efficiently — no viable scaling path.
* OFF-state leakage became uncontrollable.
* Copper via resistance increased sharply at nanoscale dimensions.

**🛠 Engineering Response**
* **22 nm (2011):**
  * **FinFET (tri-gate)** introduced — improved gate control enables efficient on/off switching; 3D geometry decouples drive current from device footprint.
  * Self-aligned contacts (SAC).
  * Cobalt + copper BEOL.
* **14 nm:**
  * M0 made unidirectional.
  * **SADP** introduced — reduces pitch by 2×, enabling smaller cell height.
  * Double diffusion break → **single diffusion break** (area savings).
  * Gate contact moved from STI-only to **on-active** (improves inter-cell interconnection).
  * Single diffusion break → **self-aligned single diffusion break** (improved contact resistance → higher drive current).

**⚙ Side Effects**
* Device geometry became 3D-driven rather than planar scaling.
* Tight co-optimisation of device, layout, and interconnect stack required.

**📈 Outcome**
* Electrostatic control restored via multi-gate structures.
* Drive current decoupled from planar footprint.
* FinFET becomes the dominant CMOS architecture.

</details>

<details>
<summary><strong>10 nm – 7 nm | Multi-Patterning Collapse → EUV Transition</strong></summary>
<br>

**🔴 Constraint**
* 193 nm lithography reached resolution and overlay limits.
* Multi-patterning (LELELE — litho-etch × 3) introduced cumulative alignment errors.
* Cost and process complexity scaled superlinearly.

**🛠 Engineering Response**
* **10 nm:**
  * LELELE multi-patterning (3× litho-etch, bidirectional).
  * SAQP / SA-SDB introduced for alignment correction.
* **7 nm:**
  * **EUV lithography** (13.5 nm wavelength) introduced for the first time.
  * **Single-exposure patterning** replaces multi-patterning.

**⚙ Side Effects**
* Multi-patterning complexity reached its economic and physical limit.
* Mask count and process variability increased sharply pre-EUV.
* EUV required ecosystem-level infrastructure overhaul.

**📈 Outcome**
* Overlay error accumulation eliminated.
* Lithography transitions from combinational multi-patterning to single-exposure paradigm.
* Scaling resumes via wavelength reduction.

</details>

<details>
<summary><strong>5 nm – 3/2/1.4 nm | Gate-All-Around & Mobility Engineering</strong></summary>
<br>

**🔴 Constraint**
* FinFET electrostatics approaching physical limit.
* PMOS mobility lagging NMOS performance.
* Lateral scaling efficiency diminishing.

**🛠 Engineering Response**
* **5 nm:**
  * **PMOS fin changed to silicon germanium** — SiGe shows higher mobility compared to silicon for PMOS, translating to higher drive current at the same off-current.
* **3 / 2 / 1.4 nm:**
  * **Gate-All-Around (nanosheet)** architecture introduced — channel thickness controlled in the **vertical** dimension rather than the **horizontal** dimension, allowing much tighter control.
  * **CFET (Complementary FET)** introduced as a future concept: NMOS and PMOS stacked vertically (one above the other) instead of side by side, enabling area scaling.

**⚙ Side Effects**
* Device scaling shifted from planar → vertical dimension.
* Channel geometry decoupled from lithography limits.
* Fabrication complexity increased significantly.

**📈 Outcome**
* Electrostatics improved via full gate-surround control.
* Continued scaling enabled without fin pitch reduction.
* Foundation laid for vertical integration (CFET era).

</details>

<details>
<summary><strong>Sub-1 nm | Quantum Limit & 2D Materials</strong></summary>
<br>

**🔴 Constraint**
* Gate-length scaling limited by direct source-to-drain quantum-mechanical tunneling in silicon.
* Silicon band structure prevents further gate-length reduction.

**🛠 Engineering Response**
* **Transition metal dichalcogenides (TMDs)** explored — e.g., molybdenum disulphide (MoS₂).
  * Published results show it is possible to scale gate length to 5 nm and below with MoS₂ channels.
* GAA + CFET stacking continued as the architecture strategy.

**⚙ Side Effects**
* Material system shift required beyond silicon.
* Device physics becomes quantum-mechanically dominated.

**📈 Outcome**
* Silicon scaling reaches physical-limit regime.
* Research shifts toward 2D materials and heterogeneous integration.

</details>

---

## Key Terminology

| Term | Definition |
|---|---|
| **Dennard Scaling** | Constant electric field methodology — scale gate length and voltage together to maintain the electric field across the gate oxide; formulated by Bob Dennard (IBM) |
| **EOT** | Equivalent oxide thickness — notional SiO₂ thickness giving the same capacitance as a high-K dielectric stack |
| **HKMG** | High-K metal gate — hafnium oxide dielectric + metal gate replacing poly-Si to reduce leakage and EOT |
| **Unidirectional routing** | Layout rule requiring all lines on a layer to run in one direction only — forced at 45 nm when 193 nm lithography could no longer print bidirectional lines |
| **SAC** | Self-aligned contact — contact patterned relative to the gate itself, not a separate mask, minimising resistance |
| **Diffusion break (SDB)** | Cut in the active silicon that electrically isolates adjacent transistors; single break saves area over double |
| **Gate contact on active** | 14 nm layout change: gate contact landing on the active fin rather than only on STI, improving inter-cell interconnection |
| **FinFET / Tri-gate** | 3D transistor where the gate wraps three sides of a vertical silicon fin for better electrostatic control; introduced at 22 nm (2011) |
| **SADP / SAQP** | Self-aligned double/quadruple patterning — spacer techniques that halve or quarter the effective pitch |
| **LELELE** | Litho-etch, litho-etch, litho-etch — triple-patterning scheme used at 10 nm before EUV was production-ready |
| **EUV** | Extreme ultraviolet lithography (13.5 nm wavelength) — single-exposure patterning replacing multi-patterning at 7 nm |
| **GAA / Nanosheet** | Gate-all-around transistor — gate surrounds the channel on all four sides; channel thickness set vertically (not by lithography) |
| **CFET** | Complementary FET — NMOS and PMOS stacked vertically to achieve area scaling without lateral fin pitch reduction |
| **TMD / MoS₂** | Transition metal dichalcogenide — 2D material (e.g. molybdenum disulphide) with larger effective mass enabling sub-5 nm gate lengths |

---

## Key Takeaway

**Each major node boundary forced a structural reinvention — materials, geometry, or lithography — because no single lever can sustain Moore's Law indefinitely; scaling is now a systems problem, not just a shrink.**

---

## Files

```
📁 L4 — CMOS Inflection Points
├── images
      ├── image1_22nm_subnm.png
      ├── image2_1um_32nm.png
└── README.md  ← this file
```

---

**[← L3](#)** · **[Home](#)** · **[L5 →](#)**
```

---
