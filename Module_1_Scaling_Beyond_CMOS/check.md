# L5 — Standard Cell Area Scaling And Variability

![Module](https://img.shields.io/badge/Module_2-Standard_Cells-blue) 
![Lecture](https://img.shields.io/badge/Lecture-5_of_9-green) 
![Topics](https://img.shields.io/badge/Topics-Area_Scaling_·_Variability_·_Parasitics-purple)

**[← L4](#)** · **[Home](#)** · **[L6 →](#)**

---

## At a Glance

| | |
|---|---|
| **What** | Standard cell area scaling using vertical and horizontal layout changes, along with variability and parasitic effects. |
| **Why** | Cell area is limited by fin count, diffusion spacing, and power rail width. Scaling requires reducing these, but introduces variability and parasitic challenges. |
| **How** | Fin depopulation (height), diffusion break scaling (width), COAG, and power rail scaling concept. |
| **Key Concept** | Reducing fins reduces area and capacitance but affects variability. |

---

## 1. Standard Cell Area Scaling: Fin Depopulation

**Cell Area = Cell Height × Cell Width**

### Vertical Scaling (Cell Height)

![Fin Depopulation](images/fin-depopulation.png)

Fin depopulation reduces the number of fins in a transistor.

### Node Trend

- 10nm (HD): 10 fins, 420 nm height  
- 8nm (uHD): 9 fins, 378 nm height  
- 7nm (HD): 9 fins, 243 nm height  
- 5nm (uHD): 8 fins, 216 nm height  

### Key Effects

- Reduced cell height
- Reduced input capacitance
- Reduced power consumption

---

## 2. Standard Cell Area Scaling: SDB, COAG, Power Rails

### Horizontal Scaling (Cell Width) + Layout Constraints

![SDB COAG BS-PDN](images/sdb-coag-bs-pdn.png)

### Diffusion Breaks

- Double diffusion break → larger spacing
- Single diffusion break → reduced spacing

**Effect:** reduces cell width

---

### COAG

- Gate contact allowed on STI or active region
- Improves interconnection flexibility
- Helps reduce layout constraints inside the cell

---

### Power Rail Scaling Concept

- Power rails occupy significant vertical space
- Their width limits minimum achievable cell height
- Moving power rails away from top/bottom region frees vertical space

---

## 3. Variation

![Variation](images/variability.png)

### Trend Across Devices

- Planar: high variability due to channel doping
- FinFET: reduced variability due to better control
- Fin depopulation: variability can increase due to reduced averaging
- Nanowire / nanosheet: variability reduces again due to stronger control
- Ultimately approaches limit where single dopants affect threshold variation

---

## 4. Parasitic Effects

![Parasitic Variation](images/parasitic-resistance.png)

### Key Idea

Parasitics vary due to layout and routing differences.

### Effects

- Delay variation
- Power variation
- Signal integrity variation

### Key Observation

As scaling continues, parasitic variation becomes increasingly important compared to device variation.

---

## Key Takeaway

Standard cell scaling is achieved through:

- Fin depopulation (vertical scaling)
- Diffusion break reduction (horizontal scaling)
- Contact rule relaxation (COAG)
- Power rail scaling concepts

But:

- Variability and parasitic effects become dominant challenges as scaling continues.
