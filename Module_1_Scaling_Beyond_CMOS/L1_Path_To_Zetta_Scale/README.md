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
    ├── problems.png
    ├── 50years-overview.png
    ├── 50years-overview2.png
    ├── rise-of-mobile.png
    └── zetta-roadmap.png
```

---

<div align="center">

[🏠 Course Home](../../README.md) &nbsp;·&nbsp; [→ L2 — CMOS Evolution](../L2_CMOS_Evolution_And_Next_Gen_Candidates/README.md)

*FinFET Circuit Design · 7nm Technology*

</div>
