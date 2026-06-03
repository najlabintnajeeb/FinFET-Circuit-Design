![Module](https://img.shields.io/badge/Module_1-Scaling_Beyond_CMOS-0d1117?style=plastic&labelColor=4fa3e3&color=0d1117) ![Lecture](https://img.shields.io/badge/Lecture-L7_of_9-0d1117?style=plastic&labelColor=f5a623&color=0d1117) ![Topics](https://img.shields.io/badge/Topics-2D_Materials_%C2%B7_MoS%E2%82%82_%C2%B7_TMDs_%C2%B7_Direct_Tunnelling_%C2%B7_Gate_Scaling-0d1117?style=plastic&labelColor=7ed321&color=0d1117)

# L7 — 2D Materials and MoS₂ Transistors
*How atomically thin semiconductors unlock gate lengths below 5 nm by suppressing direct source-to-drain tunnelling.*

---

## At a Glance

| | |
|---|---|
| **Core problem** | Direct source-to-drain tunnelling prevents silicon transistors scaling below ~5 nm gate length |
| **Key material** | MoS₂ (molybdenum disulfide) — a transition metal dichalcogenide (TMD), 0.65 nm monolayer |
| **Why it helps** | Higher effective mass, atomically uniform thickness, no dangling bonds, low in-plane dielectric constant |
| **Key demo** | MoS₂ transistor with 1 nm gate length using a single-walled carbon nanotube as gate electrode |
| **Next step** | All-2D MOSFETs, body-bias-enabled Vt tuning, TMDs on 3D fin/nanowire topographies |

---

## Summary

Silicon transistor scaling is approaching a fundamental quantum limit — direct source-to-drain tunnelling — where electrons flow through the gate barrier rather than over it. 2D layered materials like MoS₂ address this through three intrinsic properties: a higher carrier effective mass that suppresses tunnelling, atomically precise and uniform thickness that eliminates channel variability, and pristine surfaces free of dangling bonds that prevent mobility degradation under high vertical electric fields. A landmark demonstration achieved a functional MoS₂ transistor with a 1 nm gate length, showing near-ideal subthreshold swing of ~65 mV/decade and an on/off ratio of 10⁶. These materials can also be deposited conformally on fins, nanowires, and other 3D surfaces, enabling body-bias Vt control and monolithic 3D integration.

---

## Sections

<details>
<summary><strong>1 — Why silicon fails below 5 nm: direct source-to-drain tunnelling</strong></summary>

| Failure mode | Root cause | Impact |
|---|---|---|
| Thermionic emission | Electrons thermally excited over the gate barrier | Normal, controllable operation |
| Direct source-drain tunnelling | Electrons quantum-tunnel *through* the barrier at very short gate lengths | Leakage floor — gate cannot suppress it |
| Surface roughness scattering | Dangling bonds at Si/SiO₂ interface scatter carriers at high vertical field | Mobility degrades as V_GS increases |
| Channel thickness variability | Statistical variation in Si fin/body thickness across a wafer | V_T variability, yield loss |

**Scaling challenges highlighted in the lecture:**
- Current state-of-the-art gate length: ~15 nm
- Target: ~5 nm and below
- New channel material requirements (from the slides):
  - Uniform atomically thin material → eliminates thickness variability
  - High effective mass m* → suppresses direct tunnelling
  - Low in-plane dielectric constant ε → lowers C_D relative to C_ox
  - No dangling bonds → preserves mobility at high vertical fields

> 💡 **The tunnelling problem in one line**
>
> At very short gate lengths the source-drain separation is so small that the quantum-mechanical wavefunction of an electron at the source has non-negligible amplitude at the drain — the electron "appears" on the other side without ever going over the barrier. A higher effective mass shrinks this wavefunction overlap exponentially.

</details>

<details>
<summary><strong>2 — Properties of 2D layered materials (TMDs)</strong></summary>

| Property | Silicon | MoS₂ (monolayer) | Significance |
|---|---|---|---|
| Thickness control | Statistical (fin etching) | Atomically precise — 0.65 nm | Eliminates thickness variability |
| Effective mass m* | ~0.22 m₀ | ~0.55 m₀ | ~2.5× heavier → less tunnelling |
| Bandgap | 1.12 eV (indirect) | ~1.85 eV monolayer / ~1.5 eV bilayer | Tunable; higher gap aids off-state |
| Surface chemistry | Dangling bonds at interface | No dangling bonds (van der Waals surface) | Mobility stays constant with vertical field |
| In-plane dielectric constant ε | ~11.7 | Lower than Si | Reduces C_D → better subthreshold swing |
| Deposition method | Epitaxial growth on Si only | CVD on any substrate / topography | Compatible with 3D surfaces and back-end |

**Energy band alignment for common TMDs** (from slide):
- MoS₂, MoSe₂, MoTe₂, WS₂, WSe₂ offer a range of bandgaps
- Monolayer bandgaps are larger than bulk due to quantum confinement
- Bilayer transitions from direct to indirect bandgap

**Direct source-to-drain tunnelling comparison (MoS₂ vs Si):**
Simulation shows ~100× reduction in direct tunnelling leakage for MoS₂ vs silicon at equivalent gate lengths, due primarily to the higher effective mass (m*_MoS₂ ≈ 0.55 m₀ vs m*_Si ≈ 0.22 m₀).

</details>

<details>
<summary><strong>3 — 1 nm gate length MoS₂ transistor (Desai et al., Science 2016)</strong></summary>

| Device component | Material / value |
|---|---|
| Channel | MoS₂ (few-layer) |
| Gate electrode | Single-walled metallic carbon nanotube (SWCNT), diameter ~1 nm |
| Gate dielectric | ZrO₂ |
| Source / Drain | n⁺ Si back gate + CNT gate depletes small MoS₂ region above it |
| Gate length | ~1 nm — shortest demonstrated at time of publication |

**Key measured results:**
- Subthreshold swing: ~65 mV/decade (near-ideal; compare 60 mV/dec theoretical limit)
- On/off current ratio: ~10⁶
- Comparison: 5 nm gate length silicon transistor showed SS of ~208 mV/decade

> 💡 **Why a carbon nanotube gate?**
>
> A SWCNT with ~1 nm diameter acts as a self-aligned, atomically precise gate electrode. No lithography tool can pattern 1 nm features in conventional resist — the nanotube itself is the pattern.

</details>

<details>
<summary><strong>4 — All-2D MOSFET: pristine interfaces and mobility behaviour (Roy et al., ACS Nano 2014)</strong></summary>

A device built entirely from 2D materials (channel, dielectric, and contacts all van der Waals stacked) reveals a distinctive mobility characteristic:

| Behaviour | Silicon MOSFET | All-2D MOSFET |
|---|---|---|
| Mobility vs vertical field | Decreases at high V_GS − V_T (surface roughness scattering) | **Constant** — no degradation |
| Root cause | Si/SiO₂ interface has dangling bonds that scatter carriers | Van der Waals surfaces have no dangling bonds |
| Practical consequence | Drive current saturates or falls at high gate overdrive | Drive current continues to scale with gate overdrive |
| VDD scaling benefit | Limited by mobility rolloff | Enables further supply voltage reduction |

**Measured characteristics:**
- Excellent on/off ratio (>10⁵)
- Good output characteristics (I_D vs V_DS)
- Constant mobility with gate electric field — the key signature of pristine van der Waals interfaces

</details>

<details>
<summary><strong>5 — TMDs on 3D surfaces: body bias and Vt control (Chen et al., IEDM 2014 & 2015)</strong></summary>

Because TMDs are so thin and flexible, they can be deposited conformally on non-planar silicon structures via CVD — something impossible with conventional single-crystal semiconductors.

**Demonstrated structures:**
- MoS₂ deposited on silicon fins (covered with blocking oxide)
- MoS₂ deposited on silicon nanowires
- Gate stack: blocking oxide → MoS₂ channel → high-κ dielectric → metal gate

**Body-bias Vt modulation:**

| Back-gate voltage change | Vt shift |
|---|---|
| ~2.5 V change in V_bg | > 1 V shift in V_T |

This recovers the **body-bias knob** that was lost in conventional FinFETs:

> In standard FinFETs the fin is so thin that an electric field from below cannot modulate the channel potential — the body is fully depleted and electrically isolated. With a TMD deposited on an oxide-covered fin, the back-gate field penetrates the thin TMD and shifts V_T dynamically, enabling a single transistor to operate as either a low-leakage or high-performance device.

**Electrical results (50 nm gate length MoS₂ on fin):**
- Excellent short-channel performance (subthreshold swing and DIBL)
- Good output characteristics
- Strong back-gate control confirmed

</details>

---

## Key terminology

| Term | Definition |
|---|---|
| **TMD** | Transition Metal Dichalcogenide — layered material of the form MX₂ (M = Mo/W, X = S/Se/Te) |
| **MoS₂** | Molybdenum disulfide — most widely studied TMD; monolayer thickness 0.65 nm |
| **Direct source-drain tunnelling** | Quantum-mechanical leakage where electrons tunnel *through* the gate barrier; cannot be switched off by the gate |
| **Effective mass m*** | Apparent mass of a carrier in a crystal; higher m* → shorter tunnelling length → less leakage |
| **Van der Waals surface** | Atomically flat surface with no unsatisfied bonds; adjacent layers held only by weak van der Waals forces |
| **Dangling bond** | Unsatisfied covalent bond at a semiconductor surface; causes interface trap states and carrier scattering |
| **Surface roughness scattering** | Mobility degradation mechanism at high vertical fields caused by interface imperfections |
| **SWCNT gate** | Single-walled carbon nanotube used as a ~1 nm gate electrode |
| **Body bias** | Voltage applied to the body/back-gate of a transistor to shift its threshold voltage dynamically |
| **CVD** | Chemical Vapour Deposition — technique for growing TMD films on substrates including 3D topographies |

---

## Lecture Insights

- The fundamental limit to silicon gate length scaling is quantum mechanical (tunnelling), not lithographic.
- 2D materials address this with a combination of higher m*, thinner body, and cleaner interfaces — all simultaneously.
- The 1 nm gate length demo shows these are not merely theoretical benefits — functional transistors have been demonstrated.
- Constant mobility with vertical field is a direct experimental signature of dangling-bond-free surfaces.
- Body bias — lost in FinFETs — can be recovered by depositing TMDs on existing 3D silicon topographies.
- TMDs are compatible with back-end-of-line temperatures, opening monolithic 3D integration pathways.

## Key takeaway

> **2D materials like MoS₂ solve the direct source-to-drain tunnelling problem that prevents silicon from scaling below ~5 nm gate length — through higher effective mass, atomically uniform thickness, and pristine van der Waals surfaces — while also recovering body-bias Vt control and enabling conformal deposition on 3D topographies.**

---

## Files

```
L7_2D_Materials_MoS2_Transistors/
├── README.md               ← this file
└── Images/
    ├── transistor-scaling-sub5nm.png
    ├── direct-source-drain-tunnelling.png
    ├── mos2-1nm-gate.png
    ├── all-2d-mosfet-electrical.png
    ├── tmds-on-3d-surfaces.png
    └── body-bias-effect.png
```

---

| | Lecture |
|---|---|
| ← Previous | [L6 — Back End of Line and Interconnects](../L6/README.md) |
| ↑ Course | [Course Overview](../../README.md) |
| Next → | [L8 — Monolithic 3D CMOS](../L8_Monolithic_3D_CMOS/README.md) |
