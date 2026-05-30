# 🔬 L1 — Path to Zetta-Scale Computing

<div align="center">

![Module](https://img.shields.io/badge/Module-1%3A%20Scaling%20Beyond%20CMOS-4fa3e3?style=for-the-badge&logoColor=white)
![Lecture](https://img.shields.io/badge/Lecture-L1-f5a623?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-HPC%20Roadmap-7ed321?style=for-the-badge)

> *"Start with the problem and work backwards to the technology."*

**From Turing's Bombe to a 10²¹ FLOPS zetta-scale supercomputer —**  
this lecture traces the 80-year arc of computing, the forces that shaped it,  
and the innovations needed to reach the next frontier.

---

[📄 View Live Portfolio Page](https://najlabintnajeeb.github.io/FinFET-Circuit-Design/Module_1_Scaling_Beyond_CMOS/L1_Path_To_Zetta_Scale/L1_portfolio.html) &nbsp;·&nbsp;
[🏠 Course Home](https://najlabintnajeeb.github.io/FinFET-Circuit-Design/) &nbsp;·&nbsp;
[📁 Course Repo](https://github.com/najlabintnajeeb/FinFET-Circuit-Design)

</div>

---

## 📋 Lecture Overview

| | |
|---|---|
| **Course** | FinFET & Circuit Design — 7nm Technology |
| **Module** | Module 1: Scaling Beyond CMOS |
| **Lecture** | L1 — Path to Zetta-Scale Computing |
| **Sections** | 4 — History · Moore's Law · Rise of Mobile · HPC Roadmap |
| **Key Concept** | Rack as a Socket · Zettaflop by ~2035 |

---

## 🗂️ Sections — Click to Expand

---

<details>
<summary><h3>🖥️ Section 1 — Problems to Solve: Where Computing Began</h3></summary>

<br>

> Computing has always been driven by a specific problem to solve — not the other way around.

![Problems to Solve Slide](images/slide-problems.png)

---

### 🏛️ Historical Machines

| Machine | Era | Technology | Purpose |
|---|---|---|---|
| **Bombe** | WWII | Mechanical | Break Nazi Enigma cipher |
| **ENIAC** | Post-War | Vacuum Tubes · Decimal | Missile trajectory simulation |
| **EDVAC** | Post-War | Vacuum Tubes · Binary | First von Neumann architecture |
| **CMOS ENIAC** | 1995 | CMOS chip | Full ENIAC on a coin-sized chip |

All three early machines shared one trait: they **occupied entire rooms**, required teams of people to programme, and were rewired to change tasks. By 1995, the same logic fit on a chip smaller than a coin.

---

### 🌍 Next-Generation Problems

These are the civilisation-scale challenges that demand zetta-scale compute — solved **from first principles**:

| Problem | Why It Needs Zetta-Scale |
|---|---|
| 🌩️ Weather Modeling & Forecasting | Requires planet-scale fluid dynamics simulation |
| 🧬 Health & Precision Medicine | Protein folding, genomic analysis at population scale |
| 🌐 Earthquake Modeling | Real-time subsurface physics from first principles |
| 💡 Room Temperature Superconductors | Quantum material discovery via simulation |
| ⚛️ Next-Gen Semiconductors | Atomic-level device modelling |
| 🔬 Virtual Particle Accelerators | Replace physical accelerators with simulation |
| 🌍 Validate Fundamental Laws of Nature | First-principles verification of physics constants |
| 💧 Earth Water Cycle | Climate modelling at full resolution |

</details>

---

<details>
<summary><h3>📈 Section 2 — 50 Years of Microprocessor Trend Data</h3></summary>

<br>

> Moore's Law isn't dead — but it's evolving. The next chapter is architectural, not just physical.

![50 Years Microprocessor Overview](images/slide-50years-overview.png)

![50 Years Microprocessor Annotated](images/slide-50years-annotated.png)

---

### 📊 What the Data Shows

<details>
<summary><b>🟠 Transistors (thousands) — Still exponential</b></summary>

<br>

Transistor counts continue their exponential trajectory with no sign of flattening — from thousands in the 1970s to **tens of billions** today. This is the core of Moore's Law.

- 1970s: ~1,000 transistors
- 2000s: ~100 million transistors  
- 2020s: 10–80 **billion** transistors per chip

</details>

<details>
<summary><b>🟢 Frequency (MHz) — Plateaued ~2005</b></summary>

<br>

Clock speeds stagnated between **1–5 GHz** and have barely moved in 20 years.

**Why?** The **thermal wall** — chips cannot be cooled fast enough to sustain further clock increases without burning out. Heat dissipation, not transistor physics, is the ceiling.

</details>

<details>
<summary><b>🔴 Typical Power (Watts) — Saturated at 100–125W</b></summary>

<br>

Chip power plateaued at **~100–125W** for desktop processors. 

The 2007 iPhone launch dramatically accelerated this: mobile devices have **no active cooling**, so the entire industry pivoted to performance-per-watt as the primary metric. This suppressed frequency growth across the board.

</details>

<details>
<summary><b>⚫ Logical Cores — The new scaling vector</b></summary>

<br>

Since frequency couldn't grow, manufacturers added **more cores**:

- 2005: Dual-core (Core 2 Duo)
- 2010s: 4–8 cores mainstream
- 2020s: **50–100 cores** on a single chip

Parallelism replaced clock speed as the primary performance driver.

</details>

<details>
<summary><b>🔵 Single-Thread Performance — Still improving, but slower</b></summary>

<br>

Single-thread performance (SpecINT) continues to improve — but driven by **IPC improvements**, deeper pipelines, smarter cache hierarchies, and microarchitectural innovation rather than raw frequency.

</details>

---

### 💡 Key Takeaway

```
Expect Moore's Law to continue — but using NEW ways:
FinFET scaling · GAA transistors · 3D stacking · Advanced packaging · Chiplets
```

</details>

---

<details>
<summary><h3>📱 Section 3 — Rise of Mobile: The Market Inflection That Changed Everything</h3></summary>

<br>

> A single product launch in 2007 redirected the trajectory of an entire industry.

![Rise of Mobile Slide](images/slide-rise-of-mobile.png)

---

### 📉 The Crossover

| Year | PC Units Shipped | Smartphone Units Shipped |
|---|---|---|
| 2007 (iPhone launch) | ~271 million | ~124 million |
| ~2010 | ~289 million | **crossed over** |
| ~2015 | ~289 million | **1.4 billion** |

Source: Gartner, IDC, Apple

---

### ⚡ Why This Mattered for Semiconductors

<details>
<summary><b>No active cooling → power became the #1 constraint</b></summary>

<br>

Mobile devices have no fans, no heatsinks, no liquid cooling. Every watt of excess power becomes heat trapped against a user's hand. This forced chip designers to treat **power efficiency as the primary design axis** — not raw performance.

</details>

<details>
<summary><b>Frequency suppressed by mobile dominance</b></summary>

<br>

Had the PC market remained dominant, chip TDPs might have pushed past 100W toward 200–300W envelopes with proportionally higher frequencies. Instead, the mobile crossover locked the industry into a low-power paradigm for over a decade.

</details>

<details>
<summary><b>Technology definition moved from desktop to mobile</b></summary>

<br>

The process nodes, transistor architectures (FinFET was driven heavily by mobile needs), and IP blocks that defined each generation from ~2010 onward were shaped primarily by **Apple, Qualcomm, and ARM** — not Intel or AMD.

</details>

</details>

---

<details>
<summary><h3>🚀 Section 4 — HPC Roadmap: Giga → Tera → Peta → Exa → Zetta</h3></summary>

<br>

> Each milestone is a 1000× leap in compute. The concept driving the next leap: **Rack as a Socket**.

![Path to Zetta-Scale Slide](images/slide-zetta-roadmap.png)

---

### 📅 Milestone Timeline

```
1984 ──────────── 1997 ──────── 2008 ─────────────────── 2021 ──────────────── ~2035
Giga              Tera          Peta                      Exa                  ZETTA
10⁹ FLOPS         10¹² FLOPS    10¹⁵ FLOPS                10¹⁸ FLOPS           10²¹ FLOPS
                  ◄──13 yrs──►  ◄────9 yrs────►           ◄──────14 yrs──────► ◄── ?? ──►
```

---

### 🖥️ Key Systems

<details>
<summary><b>Jaguar — Cray XT5 (2008) · First Petaflop</b></summary>

| Spec | Value |
|---|---|
| Performance | 2.3 PF |
| Processor | AMD CPU |
| Power | 7 MW |
| Time to milestone | 9 years from teraflop |

</details>

<details>
<summary><b>Titan — Cray XK6 (2012) · First Major GPU Supercomputer</b></summary>

| Spec | Value |
|---|---|
| Performance | 27 PF |
| Accelerator | NVIDIA GPU |
| Processor | AMD CPU |
| Power | 9 MW |

</details>

<details>
<summary><b>Summit — IBM (2018) · Pre-Exascale Peak</b></summary>

| Spec | Value |
|---|---|
| Performance | 200 PF |
| GPUs/node | 6 × NVIDIA |
| CPUs/node | 2 × Power CPU |
| Power | 13 MW |

</details>

<details>
<summary><b>Frontier — Cray Shasta (2021) · First Exaflop ✅</b></summary>

| Spec | Value |
|---|---|
| Performance | 1,500 PF (1.5 EF) |
| GPUs/node | 4 × AMD GPU |
| CPUs/node | 1 × AMD CPU |
| Power | 29 MW |
| Time to milestone | 14 years from petaflop |

</details>

<details>
<summary><b>🟠 Zetta Target (~2035) · The Goal</b></summary>

| Spec | Value |
|---|---|
| FP64 Performance | 1 Zettaflop |
| FP32 Performance | 1 Zettaflop |
| BF16 / Int8 Peak | 8–16 Zettaflop |
| Estimated Power | 50–100 MW |
| Architecture | Rack as a Socket |

**Two scenarios to get there:**
- 🔶 HPC-optimised path: **2× every year**
- ⬜ Industry standard: **2× every 2 years**

</details>

---

### 🔑 Key Concept: Rack as a Socket

> Instead of measuring a single chip's performance, the zetta-scale paradigm treats an **entire data-centre rack as a single compute socket** — combining thousands of chips, accelerators, and memory units into one unified compute unit.

This requires breakthroughs in:
- **Front-end of line** — FinFET scaling, Gate-All-Around (GAA) transistors
- **Back-end of line** — interconnect density, power delivery
- **Packaging** — 3D stacking, chiplets, co-packaged optics
- **System architecture** — NVLink, UCIe, CXL interconnects

</details>

---

## 🗺️ What's Next

| Lecture | Topic | Status |
|---|---|---|
| **L1** | Path to Zetta-Scale Computing | ✅ Complete |
| **L2** | FinFETs & Front-End of Line Innovations | 🔜 Coming |
| **L3** | Back-End of Line Innovations | 🔜 Coming |
| **L4** | Putting It All Together | 🔜 Coming |

---

## 📁 Files in This Folder

```
L1_Path_To_Zetta_Scale/
├── README.md                  ← You are here
├── L1_portfolio.html          ← Live portfolio page
└── images/
    ├── slide-problems.png
    ├── slide-50years-overview.png
    ├── slide-50years-annotated.png
    ├── slide-rise-of-mobile.png
    └── slide-zetta-roadmap.png
```

---

<div align="center">

**FinFET Circuit Design · 7nm Technology Course**  
[🔝 Back to Top](#-l1--path-to-zetta-scale-computing)

</div>
