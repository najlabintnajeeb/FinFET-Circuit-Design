
# L3 — Introduction To FinFETs

##  Overview

This lecture covers the **critical transition** from traditional **Planar MOSFETs** to **FinFETs** (and the future **Gate-All-Around**), one of the most important innovations that allowed Moore’s Law to continue beyond the 22/28nm nodes.

**Key Takeaway**:  
FinFETs solved the fundamental **short-channel effects** and **leakage problems** that were limiting performance and power efficiency in planar transistors.

---

##  Transistor Evolution

### Timeline

| Generation              | Year       | Architecture              | Key Feature                          | Status            |
|-------------------------|------------|---------------------------|--------------------------------------|-------------------|
| **Planar**              | ~2000–2011 | Flat Channel              | Gate on top only                     | Legacy            |
| **FinFET (Tri-Gate)**   | **2011**   | Vertical Fin + Tri-Gate   | Gate wraps **3 sides**               | Mainstream        |
| **Gate-All-Around (GAA)** | **2025+** | Nanosheet / Nanowire      | Gate surrounds channel completely    | Next Generation   |

### Visual Evolution

![Transistor Evolution](https://najlabintnajeeb.github.io/FinFET-Circuit-Design/Module_1_Scaling_Beyond_CMOS/L3_Introduction_To_FinFETs/Images/transistor-evolution.png) 

**FinFET Innovation**:
- Channel protrudes as a vertical **"Fin"**
- Gate wraps around **three sides** (Tri-Gate)
- **Electrical width decoupled** from device footprint → More drive current per area



---

##  Why FinFETs?

![Why FinFETs?](https://najlabintnajeeb.github.io/FinFET-Circuit-Design/Module_1_Scaling_Beyond_CMOS/L3_Introduction_To_FinFETs/Images/why-finfets.png) 

### Problems with Planar Transistors

<details>
<summary><strong>1. Sub-Channel Leakage</strong></summary>
The gate only controls the channel from the **top**. Current leaks through the deeper sub-channel region (red arrow), causing high off-state leakage.
</details>

<details>
<summary><strong>2. Short Channel Effects & Heavy Doping</strong></summary>
As transistors shrink, heavy channel doping is needed to control leakage, which leads to **Band-to-Band Tunneling** and increased parasitic capacitance.
</details>

<details> <summary><strong>3. Fully Depleted Channel Concept</strong></summary>
In FinFETs, the silicon channel is made very thin so that it becomes fully depleted of carriers when the device is OFF.
This means:
No deep uncontrolled charge region
Gate has complete electrostatic control
Eliminates sub-channel leakage naturally
</details>

<details>
<summary><strong>3. Poor Subthreshold Swing</strong></summary>
Far from the ideal 60 mV/decade, resulting in slow switching and high leakage.
</details>

<details> <summary><strong>4. Why Undoped Channels Matter</strong></summary>
Planar MOSFETs require heavy doping for control, but this leads to:
Band-to-band tunneling
Random dopant fluctuations
Increased parasitic capacitance
FinFETs reduce or eliminate channel doping → improving:
Variability
Capacitance (C<sub>D</sub>)
Switching behavior
</details>

### Solutions: FinFET & Gate-All-Around

<details>
<summary><strong>✅ FinFET (Tri-Gate)</strong></summary>
- Vertical fin structure<br>
- Gate wraps **3 sides** → Excellent electrostatic control<br>
- Enables undoped channel → Lower capacitance
</details>

<details>
<summary><strong>✅ Gate-All-Around (GAA)</strong></summary>
- Gate completely surrounds the channel<br>
- Stacked nanosheets<br>
- Best possible short-channel performance
</details>

**Key Advantage**:  
**Width (I<sub>on</sub>) decoupled from transistor footprint** — More drive current without increasing area.

---

##  Performance Impact

![Impact on Circuit Performance](https://najlabintnajeeb.github.io/FinFET-Circuit-Design/Module_1_Scaling_Beyond_CMOS/L3_Introduction_To_FinFETs/Images/performance-impact.png) 

### Key Takeaways

| Benefit                        | Planar          | Tri-Gate FinFET     | Advantage                     |
|-------------------------------|-----------------|---------------------|-------------------------------|
| Off-Current (Leakage)         | Higher          | **Much Lower**      | Lower static power            |
| On-Current (at same Ioff)     | Lower           | **Higher**          | Better performance            |
| Subthreshold Swing            | Poor            | **Excellent**       | Sharper switching             |
| Circuit Efficiency            | Baseline        | **Significantly Better** | Enables voltage scaling    |

### Graph Explanations

<details>
<summary><strong>1. Lower Off-Current at Same On-Current</strong></summary>
FinFET shows significantly lower leakage when OFF, while maintaining similar drive current when ON → **Lower power dissipation**.
</details>

<details>
<summary><strong>2. Higher Drive Current at Same Off-Current</strong></summary>
At the same leakage level, FinFET delivers much higher drive current → **Better speed at same power**.
</details>

---


##  Key Advantages of FinFETs

- ✅ Superior Gate Control
- ✅ Dramatically Lower Leakage
- ✅ Higher Drive Current per Footprint
- ✅ Better Scalability (enabled 14nm → 7nm → 5nm nodes)
- ✅ Foundation for modern mobile & high-performance computing
- Enables better performance scaling, but
- System bottleneck shifts toward interconnect RC delay, not transistor switching

---
##  Subthreshold Swing

**Subthreshold Swing (S)** measures how quickly the transistor turns on/off.

$$
S = \frac{kT}{q} \ln(10) \left(1 + \frac{C_d}{C_{ox}}\right)
$$


### Meaning
Measures how sharply transistor switches ON/OFF
Lower value = better switching efficiency

### Physical Insight
Depends on ratio of:
Channel depletion capacitance (C<sub>D</sub>)
Oxide capacitance (C<sub>ox</sub>)

### FinFET improves this by:
Increasing gate control (↑ C<sub>ox</sub>)
Reducing depletion region (↓ C<sub>D</sub>)

With multi-gate transistors (FinFET), we get much higher `C_ox` and lower `C_d`, so subthreshold swing moves closer to the ideal **60 mV/decade**.

**Real Data** (from lecture):
- Intel 32nm Planar vs 22nm Tri-Gate
- Tri-Gate shows much improved subthreshold swing for both logic and high-voltage transistors.

---
##  Summary from Lecture

- FinFETs provide **better gate control** due to the vertical fin structure.
- Reduced leakage current.
- Ability to achieve higher drive current at same leakage.
- Lower power dissipation.
- Improved overall circuit performance.

  

## Navigation

| | Lecture |
|---|---------|
| ← Previous | [L2 — CMOS Evolution And Next-Gen Candidates](../L2_CMOS_Evolution_And_Next_Gen_Candidates/README.md) |
| ↑ Course | [Course Overview](../../README.md) |
| ← Previous | [L4 — CMOS Evolution And Next-Gen Candidates](../L2_CMOS_Evolution_And_Next_Gen_Candidates/README.md) |

