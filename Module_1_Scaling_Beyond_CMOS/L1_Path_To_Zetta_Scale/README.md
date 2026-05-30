<div align="center">

![Module](https://img.shields.io/badge/Module_1-Scaling_Beyond_CMOS-0d1117?style=plastic&labelColor=4fa3e3&color=0d1117)
![Lecture](https://img.shields.io/badge/Lecture-L1_of_9-0d1117?style=plastic&labelColor=f5a623&color=0d1117)
![Topics](https://img.shields.io/badge/Topics-Moore%27s_Law_%C2%B7_HPC_%C2%B7_Mobile-0d1117?style=plastic&labelColor=7ed321&color=0d1117)

# L1 — Path to Zetta-Scale Computing

*Why the world needs a zettaflop — and what it will take to build one.*

[📄 Portfolio Page](https://najlabintnajeeb.github.io/FinFET-Circuit-Design/Module_1_Scaling_Beyond_CMOS/L1_Path_To_Zetta_Scale/L1_portfolio.html) · [🏠 Course Home](../../README.md) · [→ Next: L2](../L2_CMOS_Evolution_And_Next_Gen_Candidates/README.md)

</div>

---

## At a Glance

| | |
|:--|:--|
| **What** | History of computing + the roadmap to 10²¹ FLOPS |
| **Why** | Next-gen problems (climate, medicine, physics) need compute that doesn't exist yet |
| **How** | Moore's Law must continue — but through new vectors, not just shrinking transistors |
| **Key Concept** | Rack as a Socket — a data-centre rack treated as one unified compute unit |
| **Target** | 1 Zettaflop by ~2035 · estimated 50–100 MW power |

---

## Summary

Computing has always been problem-driven. From Turing's Bombe breaking the Enigma cipher to ENIAC modelling missile trajectories, each generation of hardware was built to solve a specific problem. Today, challenges like precision medicine, earthquake modelling, and room-temperature superconductors demand compute that is orders of magnitude beyond what exists. This lecture establishes *why* we need zetta-scale systems and traces the 80-year arc — through Moore's Law, the mobile inflection, and the HPC milestone race — that defines the path to get there.

---

## Sections

<details>
<summary><strong>01 · Problems to Solve</strong> &nbsp;—&nbsp; where computing began and where it must go</summary>

<br>

![Problems to Solve](images/slide-problems.png)

Computing was never invented for its own sake — every major machine was built to crack a specific problem.

| Machine | Era | Technology | Built To Solve |
|:--|:--|:--|:--|
| **Bombe** | WWII | Mechanical | Break the Nazi Enigma cipher — application-specific |
| **ENIAC** | Post-War | Vacuum Tubes · Decimal | Missile trajectory simulation · Turing-complete |
| **EDVAC** | Post-War | Vacuum Tubes · Binary | First von Neumann architecture |
| **CMOS ENIAC** | 1995 | CMOS chip | Entire ENIAC logic on a coin-sized chip |

All three early machines filled entire rooms. By 1995 the same logic fit on a chip smaller than a coin — the beginning of the miniaturisation era.

**Next-generation problems** that demand zetta-scale compute, solved from first principles:

`Weather Forecasting` · `Precision Medicine` · `Earthquake Modelling` · `Room-Temperature Superconductors` · `Virtual Particle Accelerators` · `Earth Water Cycle` · `Fundamental Physics Validation` · `Next-Gen Semiconductors`

</details>

---

<details>
<summary><strong>02 · 50 Years of Microprocessor Trend Data</strong> &nbsp;—&nbsp; what Moore's Law actually looks like</summary>

<br>

![50 Years Overview](images/slide-50years-overview.png)

![50 Years Annotated](images/slide-50years-annotated.png)

Five curves tell the full story of five decades of silicon progress:

| Metric | Trend | Root Cause |
|:--|:--|:--|
| 🟠 Transistors | Still exponential ↑ | Process node shrinking continues |
| 🟢 Frequency | Plateaued ~2005 at 1–5 GHz | Thermal wall — chips can't be cooled fast enough |
| 🔴 Power | Saturated at 100–125W | Mobile dominance locked in low-power design |
| ⚫ Logical Cores | Rising — 2 → 100+ | Parallelism replaced clock speed as the scaling vector |
| 🔵 Single-Thread Perf | Improving, but slowly | IPC gains and microarchitecture, not frequency |

**The iPhone effect (2007)** — smartphone shipments crossed PC sales by ~2010. With 1.4B smartphones shipped annually vs ~289M PCs, mobile redefined the industry's priorities. No active cooling meant power efficiency became the primary metric — directly suppressing frequency growth.

> **Moore's Law is expected to continue — but using new ways:**
> FinFET scaling · Gate-All-Around transistors · 3D stacking · Advanced packaging · Chiplet architectures

</details>

---

<details>
<summary><strong>03 · Rise of Mobile</strong> &nbsp;—&nbsp; the market shift that redirected semiconductor R&D</summary>

<br>

![Rise of Mobile](images/slide-rise-of-mobile.png)

| Year | PC Shipments | Smartphone Shipments |
|:--|:--|:--|
| 2007 — iPhone launch | 271 million | 124 million |
| ~2010 | 289 million | **Crossed over** |
| ~2015 | 289 million | **1.4 billion** |

*Source: Gartner, IDC, Apple*

Mobile devices carry no fans or heatsinks. Every excess watt becomes heat trapped against the user's hand. This single constraint — more than any other — explains why CPU frequency stagnated and why FinFET architecture was prioritised: a transistor architecture built around leakage control and efficiency, not raw speed. The mobile crossover also shifted technology definition from Intel/AMD to Apple, Qualcomm, and ARM.

</details>

---

<details>
<summary><strong>04 · HPC Roadmap: Giga → Zetta</strong> &nbsp;—&nbsp; the milestone race and what comes next</summary>

<br>

![HPC Roadmap](images/slide-zetta-roadmap.png)

Each step is a **1,000× leap** in compute. The race from gigaflop to zettaflop spans five decades:

```
1984          1997          2008          2021          ~2035
│             │             │             │             │
Giga          Tera          Peta          Exa           ZETTA
10⁹           10¹²          10¹⁵          10¹⁸          10²¹ FLOPS
│◄── 13 yrs ──►│◄── 9 yrs ──►│◄──── 14 yrs ────►│◄─ ?? ──►│
```

| System | Year | Performance | Power | Notable |
|:--|:--|:--|:--|:--|
| Jaguar — Cray XT5 | 2008 | 2.3 PF | 7 MW | First petaflop · AMD CPU |
| Titan — Cray XK6 | 2012 | 27 PF | 9 MW | First major GPU supercomputer |
| Summit — IBM | 2018 | 200 PF | 13 MW | 6 NVIDIA GPUs per node |
| **Frontier — Cray Shasta** | **2021** | **1,500 PF** | **29 MW** | **First true exaflop** |
| **Zetta Target** | **~2035** | **10²¹ FLOPS** | **50–100 MW** | **Rack as a Socket** |

**Zetta target specs:** FP64 / FP32: 1 Zettaflop · BF16/Int8 peak: 8–16 Zettaflop
Two trajectories: HPC path (2× per year) vs Industry standard (2× per 2 years)

**Rack as a Socket** — rather than measuring a single chip, an entire data-centre rack is treated as one unified compute socket, combining thousands of chips, accelerators, and memory units. Achieving this requires advances across every layer: transistor geometry, 3D packaging, interconnect, and system architecture.

</details>

---

## Key Takeaway

> The path to zetta-scale is not a single breakthrough — it is the **compounding of many**: continued transistor scaling (FinFET → GAA), 3D integration, advanced packaging, and rack-scale architecture. The problems worth solving demand it.

---

## Files

```
L1_Path_To_Zetta_Scale/
├── README.md
├── L1_portfolio.html
└── images/
    ├── slide-problems.png
    ├── slide-50years-overview.png
    ├── slide-50years-annotated.png
    ├── slide-rise-of-mobile.png
    └── slide-zetta-roadmap.png
```

---

<div align="center">

[🏠 Course Home](../../README.md) &nbsp;·&nbsp; [→ L2 — CMOS Evolution](../L2_CMOS_Evolution_And_Next_Gen_Candidates/README.md)

*FinFET Circuit Design · 7nm Technology*

</div>
| Gate Stack | SiO₂ | HKMG | Ferroelectric |
| Device | Planar / FinFET | GAA | CFET |
| DTCO | DDB/SDB | BS-PDN | Backside Signalling |

---

## Sections

<details>
<summary><strong>01 · Patterning</strong> &nbsp;—&nbsp; printing circuit features onto silicon using light</summary>

<br>

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
