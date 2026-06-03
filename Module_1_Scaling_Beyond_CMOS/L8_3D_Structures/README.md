

![Module](https://img.shields.io/badge/Module_1-Scaling_Beyond_CMOS-0d1117?style=plastic&labelColor=4fa3e3&color=0d1117) ![Lecture](https://img.shields.io/badge/Lecture-L8_of_9-0d1117?style=plastic&labelColor=f5a623&color=0d1117) ![Topics](https://img.shields.io/badge/Topics-Monolithic_3D_%C2%B7_TMD_CMOS_%C2%B7_Area_Savings_%C2%B7_VDD_Scaling-0d1117?style=plastic&labelColor=7ed321&color=0d1117)

# L8 — Monolithic 3D CMOS with TMD Transistors
*Stacking NMOS and PMOS vertically using 2D materials to halve cell area and push VDD below 200 mV.*

---

## At a Glance

| | |
|---|---|
| **Core idea** | Place NMOS and PMOS transistors on top of each other instead of side by side |
| **Area saving** | ~42–46% reduction across standard cells (INV, NAND2, SRAM, FA, ADD8) |
| **Key enabler** | TMDs (MoS₂ for NMOS, WSe₂ for PMOS) can be deposited at low temperature on any surface |
| **Key demo** | Inverter operating at V_DD = 150 mV; NAND and NOR circuits demonstrated |
| **Why it matters** | Density scaling independent of lithography node; natural fit for CMOS circuits |

---

## Summary

As lithographic scaling slows, monolithic 3D integration offers a complementary path to higher transistor density by exploiting the vertical dimension. CMOS logic naturally lends itself to this approach — every standard cell contains paired NMOS and PMOS transistors, so folding one on top of the other approximately halves the cell footprint. TMD transistors are the critical enabler: unlike silicon, MoS₂ and WSe₂ can be deposited at low temperatures via CVD on pre-existing device layers without damaging underlying circuits. Demonstrated 3D CMOS circuits show 42–46% area reduction and inverter gain greater than unity down to V_DD = 150 mV, pointing toward ultra-low-power operation.

---

## Sections

<details>
<summary><strong>1 — The monolithic 3D concept</strong></summary>

**Single-layer CMOS (conventional):**
- NMOS and PMOS transistors placed side by side in the same plane
- Cell area determined by the combined footprint of both devices plus routing

**Monolithic 3D CMOS:**
- PMOS layer deposited directly on top of NMOS layer (or vice versa)
- Vertical connection between the two through interlayer vias
- Same circuit functionality, ~half the planar footprint

**Why CMOS is ideally suited:**

Every static CMOS gate (inverter, NAND, NOR) has a complementary NMOS pull-down network and PMOS pull-up network. If you draw a horizontal cut line through the layout, you can separate all NMOS from all PMOS. Folding along that cut line stacks them — the circuit topology is preserved, the area is halved.

| Standard cell | 1-layer area (normalised) | 2-layer area (normalised) | Reduction |
|---|---|---|---|
| Inverter (INV) | 1.0 | ~0.56 | ~44% |
| 2-input NAND | 1.0 | ~0.57 | ~43% |
| SRAM cell | 1.0 | ~0.58 | ~42% |
| Full Adder (FA) | 1.0 | ~0.55 | ~45% |
| 8-bit Adder (ADD8) | 1.0 | ~0.54 | ~46% |

> 💡 **Monolithic vs sequential 3D**
>
> *Monolithic* 3D means both device layers are fabricated on the same wafer in sequence — interlayer vias are nanoscale and alignment is tight. *Sequential* 3D (wafer bonding) has micron-scale vias and looser alignment. Monolithic is harder to make but gives much denser vertical connections.

</details>

<details>
<summary><strong>2 — Why TMDs enable monolithic 3D (and silicon does not)</strong></summary>

| Requirement | Silicon | TMDs (MoS₂ / WSe₂) |
|---|---|---|
| Deposition temperature | High-temp epitaxy (~900–1100 °C) | CVD at low temperature — compatible with BEOL |
| Substrate requirement | Must grow on crystalline Si | Can grow on any surface including oxide and metal |
| Conformal deposition on 3D | Not possible — single crystal only on flat wafer | Demonstrated on fins, nanowires, flat oxides |
| Channel thickness | Set by etch process (variable) | Atomically precise (0.65 nm monolayer MoS₂) |
| NMOS / PMOS pairing | Requires same Si with doping split | MoS₂ (NMOS) + WSe₂ (PMOS) naturally complementary |

**The low-temperature deposition requirement is non-negotiable.** Once the bottom device layer is complete, any subsequent processing must stay below ~400–450 °C to avoid damaging the interlayer dielectric, metal contacts, and silicides of the first layer. TMDs meet this constraint; silicon epitaxy does not.

</details>

<details>
<summary><strong>3 — Device structure: hybrid Si/MoS₂ 3DFETs (Chen et al., IEDM 2014)</strong></summary>

A practical demonstration used a hybrid structure where MoS₂ is deposited on a silicon substrate with a blocking oxide:

```
Metal gate (top)
High-κ dielectric
MoS₂ channel (10 nm, CVD grown)
Blocking oxide (SiO₂)
Si substrate (back gate)
```

| Parameter | Value |
|---|---|
| MoS₂ channel thickness | 10 nm |
| Gate length | 50 nm |
| Gate dielectric | High-κ |
| Back gate | Global Si substrate |

**Measured results:**
- PFET and NFET both demonstrated in the same MoS₂ film
- Good transfer characteristics (I_D vs V_GS) for both polarities
- Good output characteristics (I_D vs V_DS)
- Short-channel performance: excellent subthreshold swing and DIBL
- Back-gate control: V_T shifts by over 1 V with ~2.5 V change in back-gate voltage

</details>

<details>
<summary><strong>4 — Monolithic 3D circuit results (Sachid et al., Advanced Materials 2016)</strong></summary>

**Inverter VDD scalability:**

The minimum VDD for a logic circuit is set by the point where inverter voltage gain equals 1. Below this, the output swing is insufficient to drive subsequent stages.

| Metric | Value | Significance |
|---|---|---|
| Gain = 1 crossing | ~150 mV | Inverter functional down to 150 mV VDD |
| Theoretical kT/q limit | ~26 mV at room temp | Still well above fundamental limit — room to improve |
| Comparison to Si CMOS | Typically >300–400 mV minimum VDD | TMD 3D CMOS shows 2× better VDD scaling |

**Circuits demonstrated:**
- Inverter (gain > 1 confirmed)
- 2-input NAND
- 2-input NOR
- All operating correctly with 3D NMOS-over-PMOS architecture

**Area savings measured across standard cells:**
- Range: 42% to 46% area reduction vs equivalent single-layer CMOS layout
- Consistent across different complexity cells (from inverter to 8-bit adder)

> 💡 **Why 150 mV VDD matters**
>
> Dynamic power scales as CV²f. Halving VDD from 300 mV to 150 mV reduces dynamic power by 4×. At the same time, leakage power also falls because the reduced supply lowers the electric field driving band-to-band and gate tunnelling. Ultra-low-VDD operation is essential for always-on IoT and near-threshold computing.

</details>

<details>
<summary><strong>5 — Area savings in detail</strong></summary>

The area comparison from Sachid et al. (Advanced Materials 2016) benchmarks standard cell layouts at equal drive strength:

**Why the savings are not exactly 50%:**
- Routing overhead between the two layers consumes some of the saved area
- Interlayer vias have a minimum pitch that sets a floor on how close NMOS and PMOS can be
- Power and ground rails still run horizontally across the cell
- In practice 42–46% is achievable — close to the theoretical 50% maximum

**Scaling trajectory:**
As via pitch and layer-to-layer alignment improve with process maturity, savings will approach the 50% theoretical limit. Combined with continued in-plane lithographic scaling, monolithic 3D compounds the density improvement multiplicatively rather than additively.

</details>

---

## Key terminology

| Term | Definition |
|---|---|
| **Monolithic 3D** | Both device layers fabricated sequentially on one wafer; nanoscale interlayer vias |
| **Sequential 3D / wafer bonding** | Two separately fabricated wafers bonded together; micron-scale vias |
| **BEOL compatibility** | Process steps that can be performed after front-end devices are made; requires T < ~450 °C |
| **Interlayer via** | Vertical conductor connecting devices in different layers of a monolithic 3D stack |
| **WSe₂** | Tungsten diselenide — TMD used as p-type channel in complementary TMD CMOS |
| **MoS₂** | Molybdenum disulfide — TMD used as n-type channel in complementary TMD CMOS |
| **Inverter gain** | dV_out/dV_in — must exceed 1 for the inverter to regenerate logic levels |
| **Minimum VDD** | Supply voltage at which inverter gain = 1; below this, logic fails |
| **Near-threshold computing** | Operating circuits just above their minimum VDD for maximum energy efficiency |
| **Standard cell** | Pre-designed logic primitive (INV, NAND, NOR, FF) used to build digital circuits |

---

## Lecture Insights

- CMOS is uniquely suited to monolithic 3D because N and P devices are already paired — folding the layout is conceptually natural.
- TMDs are the enabling technology for monolithic 3D: their low deposition temperature is what makes stacking possible.
- 42–46% area savings is a lithography-independent density gain — it compounds on top of node scaling.
- VDD scaling to 150 mV points toward a new regime of ultra-low-power computation.
- The same CVD-on-3D-surface capability that enables body bias (L7) also enables monolithic 3D stacking (L8) — one material property unlocks multiple device innovations.

## Key takeaway

> **Monolithic 3D CMOS using TMD transistors delivers ~42–46% area savings by stacking NMOS and PMOS vertically — an approach enabled entirely by the low deposition temperature and conformal growth of 2D materials, and which simultaneously pushes minimum operating voltage below 200 mV.**

---

## Files

```
L8_Monolithic_3D_CMOS/
├── README.md               ← this file
└── Images/
    ├── transistor-level-monolithic-3d.png
    ├── area-savings-chart.png
    └── monolithic-3d-circuits.png
```

---

| | Lecture |
|---|---|
| ← Previous | [L7 — 2D Materials and MoS₂ Transistors](../L7_2D_Materials_MoS2_Transistors/README.md) |
| ↑ Course | [Course Overview](../../README.md) |
| Next → | [L9 — Back End of Line Innovations](../L9/README.md) |


| | Lecture |
|---|---------|
| ← Previous | [L7 — Device Scaling And Electrical Characteristics](../L7_Device_Scaling_And_Electrical_Characteristics/README.md) |
| ↑ Course | [Course Overview](../../README.md) |
