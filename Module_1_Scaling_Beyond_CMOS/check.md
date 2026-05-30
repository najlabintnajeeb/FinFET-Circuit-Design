<div align="center">

[Module](https://img.shields.io/badge/Module_1-Scaling_Beyond_CMOS-0d1117?style=plastic&labelColor=4fa3e3&color=0d1117)
[Lecture](https://img.shields.io/badge/Lecture-L2_of_9-0d1117?style=plastic&labelColor=f5a623&color=0d1117)
[Status](https://img.shields.io/badge/Status-Complete-0d1117?style=plastic&labelColor=7ed321&color=0d1117)

# L2 — CMOS Evolution and Next-Gen Candidates

*Chip scaling is no longer just about shrinking transistors — it is a coordinated push across six dimensions simultaneously.*

[📄 Portfolio Page](#) · [🏠 Course Home](../../README.md) · [← L1](../L1_Path_To_Zetta_Scale/README.md) · [→ L3](../L3_Introduction_To_FinFETs/README.md)

</div>

---

## At a Glance

| | |
|:--|:--|
| **What** | Six axes of semiconductor scaling — patterning, channel, interconnect, gate stack, device architecture, DTCO |
| **Why** | Pure geometric shrinking has limits; every layer of the stack must co-evolve |
| **How** | Each axis has a clear past → now → next trajectory toward the 1 nm era |
| **Key Concept** | DTCO & STCO — design and system co-optimisation unlock area gains beyond transistor scaling |
| **Source** | Daewon Ha, *Energy-efficient CMOS scaling for 1nm and beyond*, IEDM 2022 |

---

## Summary

Modern chip scaling is a coordinated advance across six dimensions — not a single lever. This lecture maps each dimension on a timeline from established technology to future candidates, showing how lithography, materials, device geometry, and system architecture are all evolving in parallel. The key insight is that progress in one axis often enables or demands change in another: a new transistor architecture needs a new gate stack; a new gate stack needs new patterning; new patterning enables new interconnect. Together, these six axes form the roadmap from today's 5 nm node to the 1 nm era and beyond.

---

## The Six Dimensions

```
←————————————————————————————————————————————————→
Past              NOW                          1nm
KrF / ArF    →   EUV        →   High-NA EUV       Patterning
Si           →   SiGe       →   2D Materials       Channel
Al → Cu      →   Cu         →   Ru / Compounds     Interconnect
SiO₂         →   HKMG       →   Ferroelectric      Gate Stack
Planar       →   GAA        →   CFET               Device
DDB/SDB      →   BS-PDN     →   BS Signalling      DTCO
```

---

## Sections

<details>
<summary><strong>01 · Patterning</strong> &nbsp;—&nbsp; printing circuit features onto silicon using light</summary>

<br>

![CMOS Evolution Diagram](Images/cmos_evolution_diagram.png)

A shorter wavelength of light means finer, more precise features — like using a sharper pencil tip.

| Era | Technology | What It Means |
|:--|:--|:--|
| Past | KrF — 248 nm | First widely-used deep UV light source |
| Past | ArF — 193 nm | Shorter wavelength; enabled smaller features |
| Past | Double / Quad Patterning (DPT / QPT) | When wavelength couldn't shrink, the same pattern was printed in 2–4 passes to halve/quarter the effective pitch |
| **Now** | **EUV — 13.5 nm** | One EUV exposure replaces multiple older passes; fundamentally sharper |
| **Next** | **High-NA EUV** | Larger numerical aperture optics — higher magnification — for even finer resolution |

> Every generation of patterning directly determines the minimum size of transistors and wires that can be printed on a chip.

</details>

---

<details>
<summary><strong>02 · Channel Material</strong> &nbsp;—&nbsp; the material through which current flows inside a transistor</summary>

<br>

The key property is **carrier mobility** — how fast electrons (NMOS) or holes (PMOS) move. Faster carriers = more drive current = faster, more efficient circuits.

| Era | Material | What It Means |
|:--|:--|:--|
| Past | **Bulk Silicon** | Reliable and well-understood; foundational for decades |
| Past | **Strained Silicon / Strained SiGe** | Physically stretching the crystal lattice makes carriers move faster |
| **Now** | **SiGe PFETs** (TSMC 5 nm) | Silicon-germanium alloy gives the p-type transistor a speed and efficiency boost |
| **Next** | **2D Materials (e.g. MoS₂)** | Atomically thin sheets; silicon breaks down below ~7 nm gate length — 2D materials demonstrated down to 1 nm gate length |

</details>

---

<details>
<summary><strong>03 · Interconnect Material</strong> &nbsp;—&nbsp; the metal wires linking transistors together</summary>

<br>

Transistors are connected by metal wires running through multiple layers above the silicon. The key property is **resistivity** — lower resistance means less power wasted and faster signal travel.

| Era | Material | Process | What It Means |
|:--|:--|:--|:--|
| Past | **Aluminium (Al)** | Subtractive etch | Simple; resistance climbs steeply as wire width shrinks |
| Past | **Copper (Cu)** from 180 nm | Dual damascene — dig trenches, fill, polish (CMP) | Lower resistivity than Al; Cu can't be etched so the process is inverted |
| **Next** | **Ruthenium (Ru)** | Subtractive etch (simpler than Cu) | At narrow widths, Ru has lower resistance than Cu |
| **R&D** | **Topological semi-metals** | — | Near-zero electron scattering at atomic scales |

**What is CMP?** Chemical Mechanical Planarisation — a polishing step that grinds the wafer surface flat after filling metal into trenches.

</details>

---

<details>
<summary><strong>04 · Gate Stack</strong> &nbsp;—&nbsp; the insulating layer and electrode that control the transistor switch</summary>

<br>

The gate oxide insulates the gate from the channel; the gate electrode applies the voltage that switches the transistor on or off. Thinner oxide = stronger gate control, but too thin causes leakage.

| Era | Gate Oxide | Gate Electrode | What Changed |
|:--|:--|:--|:--|
| Past | **SiO₂** | **Polysilicon** | Classical combination; thermally grown |
| Past | **Nitrided SiO₂ (SiON)** | Polysilicon | Nitrogen plugs defects and reduces leakage |
| **Now** | **High-k dielectric (HfO₂)** | **Metal gate (HKMG)** | Physically thicker but electrically equivalent to ultra-thin SiO₂ — stops leakage. Introduced at 45 nm. |
| **Now** | HKMG + **Dipole engineering** | Metal gate | Thin interlayers shift threshold voltage (Vt) — multiple Vt flavours on one chip |
| **Next** | **Ferroelectric oxides (NC-FET)** | Metal gate | Negative capacitance amplifies gate control — steeper switching with less voltage |

**What is Vt?** Threshold voltage — the minimum gate voltage needed to turn a transistor on. Different circuit blocks need different Vt values to balance speed and leakage.

</details>

---

<details>
<summary><strong>05 · Device Architecture</strong> &nbsp;—&nbsp; the 3D shape of the transistor itself</summary>

<br>

As gate lengths shrink, the drain terminal starts influencing the channel even when the gate says "off" — called **short-channel effects**. Each architecture generation improves electrostatic control to suppress this.

| Era | Architecture | Gate Control | Key Benefit |
|:--|:--|:--|:--|
| Past | **Planar FET** | Gate on top only — 1 side | Simple; works at large sizes |
| Past | **FinFET** | Gate wraps 3 sides of a vertical fin | Dramatically reduces short-channel effects |
| **Now** | **Gate-All-Around (GAA) / Nanosheet FET** | Gate wraps all 4 sides of stacked nano-ribbons | Maximum electrostatic control; nanosheet width tunable for drive current |
| **Next** | **CFET (Complementary FET)** | N and P transistors stacked vertically | Halves the standard-cell footprint — more logic per mm² |

**What is a standard cell?** A pre-designed logic building block (AND gate, flip-flop, etc.) laid out to a fixed height. Reducing standard-cell area directly reduces chip area and cost.

</details>

---

<details>
<summary><strong>06 · DTCO & STCO</strong> &nbsp;—&nbsp; co-optimisation that shrinks circuits beyond transistor scaling</summary>

<br>

**DTCO (Design-Technology Co-Optimisation)** — process changes developed jointly with circuit designers to reduce standard-cell area without necessarily shrinking the transistor itself.

| Era | Innovation | What It Means |
|:--|:--|:--|
| Past | **Double → Single Diffusion Break (DDB → SDB)** | The isolation cut between adjacent transistors shrinks — recovering area without hurting isolation |
| Past | **COAG** (Contact-Over-Active-Gate) | Gate contacts land directly over the active transistor area — frees routing space inside the cell |
| **Now** | **Backside Power Delivery Network (BS-PDN)** | Power rails moved to the back of the wafer — front-side metal layers freed entirely for signals |
| **Next** | **Backside Signalling** | Extends backside routing to signal nets — gives the chip a second full wiring plane |

**STCO (System-Technology Co-Optimisation)** — splitting a chip into smaller dies, each on its best-fit process node.

| Integration | Description | Benefit |
|:--|:--|:--|
| **Chiplets** | Separate dies for CPU, analog, I/O, memory | Each function uses its optimal process node |
| **2.5D** | Dies side-by-side on a silicon interposer | Dense, short connections — much higher bandwidth than PCB |
| **3D** | Dies stacked vertically with TSVs | Shortens compute-to-memory path from mm to µm |

> **Analogy:** Chiplets are like building a PC — CPU, GPU, RAM as separate components — but all in one package with much shorter, faster connections.

</details>

---

## Key Terminology

| Term | Meaning |
|:--|:--|
| **EUV** | Extreme Ultraviolet — 13.5 nm wavelength lithography |
| **High-NA** | High Numerical Aperture — improved lens system for EUV |
| **SiGe** | Silicon-Germanium alloy channel material |
| **HKMG** | High-k Metal Gate |
| **HfO₂** | Hafnium dioxide — standard high-k dielectric |
| **NC-FET** | Negative Capacitance FET — ferroelectric gate oxide |
| **GAA** | Gate-All-Around transistor |
| **CFET** | Complementary FET — stacked N+P transistors |
| **CMP** | Chemical Mechanical Planarisation — wafer polishing step |
| **DTCO** | Design-Technology Co-Optimisation |
| **STCO** | System-Technology Co-Optimisation |
| **BS-PDN** | Backside Power Delivery Network |
| **TSV** | Through-Silicon Via — vertical electrical connection through a die |
| **Vt** | Threshold voltage — minimum gate voltage to turn transistor on |

---

## Key Takeaway

> Chip scaling in the 1 nm era is a **six-axis problem**. Progress in patterning enables finer features; new channel materials restore drive current; new gate stacks prevent leakage; new device architectures restore electrostatic control; DTCO recovers area at the circuit level; STCO optimises the whole system. No single axis is sufficient alone.

---

## Files

```
L2_CMOS_Evolution_And_Next_Gen_Candidates/
├── README.md
└── Images/
    └── cmos_evolution_diagram.png
```

---

<div align="center">

[← L1 — Path to Zetta-Scale](../L1_Path_To_Zetta_Scale/README.md) &nbsp;·&nbsp; [🏠 Course Home](../../README.md) &nbsp;·&nbsp; [→ L3 — Introduction to FinFETs](../L3_Introduction_To_FinFETs/README.md)

*FinFET Circuit Design · 7nm Technology*

</div>
