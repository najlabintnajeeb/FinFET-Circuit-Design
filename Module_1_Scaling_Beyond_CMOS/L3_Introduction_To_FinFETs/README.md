
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

## ❓ Why FinFETs?

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

<details>
<summary><strong>3. Poor Subthreshold Swing</strong></summary>
Far from the ideal 60 mV/decade, resulting in slow switching and high leakage.
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

## 📈 Technical Deep Dive

### Subthreshold Swing (SS)

$$
S = \frac{kT}{q} \ln(10) \left(1 + \frac{C_d}{C_{ox}}\right)
$$

- **Planar**: High `C_d` → Poor SS (80–100 mV/dec)
- **FinFET**: Higher `C_ox`, lower `C_d` → Near ideal **60 mV/dec**

**Real Data** (Intel 32nm Planar vs 22nm Tri-Gate) shows clear improvement in both logic and high-voltage transistors.

---

##  Key Advantages of FinFETs

- ✅ Superior Gate Control
- ✅ Dramatically Lower Leakage
- ✅ Higher Drive Current per Footprint
- ✅ Better Scalability (enabled 14nm → 7nm → 5nm nodes)
- ✅ Foundation for modern mobile & high-performance computing

---


## Navigation

| | Lecture |
|---|---------|
| ← Previous | [L2 — CMOS Evolution And Next-Gen Candidates](../L2_CMOS_Evolution_And_Next_Gen_Candidates/README.md) |
| ↑ Course | [Course Overview](../../README.md) |
