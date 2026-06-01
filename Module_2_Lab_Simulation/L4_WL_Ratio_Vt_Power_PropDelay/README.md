# L4 — W/L Ratio, Vt, Power, Propagation Delay, Gain And Noise Margin Transconductance, Frequency And Inverter Characteristics


## 2.1 W/L Ratio

The W/L ratio directly controls a transistor's **current drive capability**, **switching speed**, and **power consumption** — making it one of the most important parameters in CMOS design.

| Parameter | Value |
|-----------|-------|
| Technology node | 7 nm PDK |
| Channel length (L) | **Fixed** at 7 nm |
| Width (W) control | Varied via `nfins` (number of fins) |

In FinFET-based 7 nm PDK, width is not continuous — it is quantised by the number of fins (`nfins`). Separate `nfins` values are swept for the NMOS (`nnmos`) and PMOS (`npmos`) to study how the ratio affects circuit behaviour.

---

## 2.2 Switching Threshold Voltage (V<sub>th</sub>)

The switching threshold V<sub>th</sub> is the input voltage at which the output voltage equals the input voltage — the **midpoint of the voltage transfer curve (VTC)**.

$$V_{th} : \quad V_{in} = V_{out}$$

It is set by the relative drive strengths of the PMOS and NMOS transistors:

| To shift V<sub>th</sub>… | Do this |
|--------------------------|---------|
| **Higher** (toward V<sub>DD</sub>) | Increase PMOS width (stronger PMOS) |
| **Lower** (toward GND) | Increase NMOS width (stronger NMOS) |

**SPICE Command:**

```spice
meas dc v_th when nfet_out=nfet_in   ; finds the input voltage where Vout = Vin
```

---

## 2.3 Drain Current (I<sub>D</sub>)

Drain current is the current flowing from drain to source, controlled by the gate voltage. It behaves differently depending on the operating region:

| Region | I<sub>D</sub> behaviour |
|--------|------------------------|
| **Triode** | Increases linearly with V<sub>DS</sub> |
| **Saturation** | Constant — independent of V<sub>DS</sub> |

In NGSPICE, the supply branch current (`v2#branch`) is used as I<sub>D</sub>. Run `display` in NGSPICE to confirm the available branch current node name.

**SPICE Commands:**

```spice
let id = v2#branch   ; assign branch current to variable id
plot id              ; plot drain current vs. sweep variable
```






## 2.5 Power Consumption

Power consumption is calculated by integrating the transient supply current over one switching cycle and multiplying by V<sub>DD</sub>.
In CMOS circuits, it is mainly calculated from the current drawn from the supply (Vdd) over time.
**Formula:**

$$P_{avg} = \frac{V_{DD} \cdot \int_{t_1}^{t_2} i(t)\, dt}{\Delta t}$$

**SPICE Commands:**

```spice
let trans_current = v2#branch              ; capture supply current
meas tran id_pwr integ trans_current from=20e-12 to=60e-12   ; integrate over one cycle
let pwr    = id_pwr * 0.7                  ; multiply by Vdd (0.7 V)
let power  = abs(pwr / 40e-12)             ; divide by time window → average power
print power
```

---

## 2.6 Propagation Delay (T<sub>p</sub>)

Propagation delay is the time it takes for an output to respond to an input change, measured at the **50% crossing** of each signal.

| Parameter | Definition |
|-----------|-----------|
| **t<sub>p</sub>** | Average propagation delay = (t<sub>pf</sub> + t<sub>pr</sub>) / 2 |
| **t<sub>pr</sub>** | Time for output to rise past 50% after input crosses 50% |
| **t<sub>pf</sub>** | Time for output to fall past 50% after input crosses 50% |
| **Rise time (t<sub>r</sub>)** | Time for output to swing from 10% → 90% of V<sub>DD</sub> |
| **Fall time (t<sub>f</sub>)** | Time for output to swing from 90% → 10% of V<sub>DD</sub> |

> Some designs use 30%/70% thresholds instead of 10%/90% — it varies by convention.

**SPICE Commands:**

```spice
meas tran tpr when nfet_in=0.35  RISE=1   ; time when input rises through 50% (0.35 V = Vdd/2)
meas tran tpf when nfet_out=0.35 FALL=1   ; time when output falls through 50%
let tp = (tpf + tpr) / 2                  ; average propagation delay
print tp
```

---

## 2.7 Voltage Gain (A<sub>v</sub>)

Gain is the ratio of output voltage change to input voltage change:

$$A_v = \frac{dV_{out}}{dV_{in}}$$

**SPICE Commands:**

```spice
let gain_av = deriv(nfet_out)        ; dVout/dVin  (negative for an inverter)
let gain_av = abs(deriv(nfet_out))   ; absolute value of gain
plot gain_av
```

> `deriv()` computes the slope of the voltage transfer curve (VTC), giving gain at every operating point.

---

## 2.8 Noise Margin

Noise margin quantifies how much voltage noise a CMOS gate can tolerate before it misreads a logic level. It is read from the **Voltage Transfer Characteristic (VTC)**.

| Parameter | Meaning |
|-----------|---------|
| **V<sub>IH</sub>** | Minimum input voltage recognised as logic HIGH |
| **V<sub>IL</sub>** | Maximum input voltage recognised as logic LOW |
| **V<sub>OH</sub>** | Minimum output voltage when driving logic HIGH |
| **V<sub>OL</sub>** | Maximum output voltage when driving logic LOW |
| **NM<sub>H</sub>** = V<sub>OH</sub> − V<sub>IH</sub> | High noise margin |
| **NM<sub>L</sub>** = V<sub>IL</sub> − V<sub>OL</sub> | Low noise margin |

The four critical voltages are found where the **slope of the VTC = −1** (i.e. where `nfet_out = gain`).

**SPICE Commands:**

```spice
; --- Find the four key voltages ---
meas dc vil find nfet_in  when nfet_out=gain CROSS=1   ; VIL  (1st  slope = -1 crossing)
meas dc voh find nfet_out when nfet_out=gain CROSS=1   ; VOH  (same crossing, output side)
meas dc vih find nfet_in  when nfet_out=gain CROSS=2   ; VIH  (2nd  slope = -1 crossing)
meas dc vol find nfet_out when nfet_out=gain CROSS=2   ; VOL  (same crossing, output side)

; --- Calculate noise margins ---
let nmh = voh - vih
print nmh

let nml = vil - vol
print nml
```

---

## 2.9 Transconductance (g<sub>m</sub>)

Transconductance measures how effectively gate voltage controls drain current:

$$g_m = \frac{\partial I_D}{\partial V_{GS}}$$

Higher g<sub>m</sub> → the transistor responds more strongly to small input signals → better amplification.

**SPICE Commands:**

```spice
let gm = real(deriv(id, nfet_in))   ; derivative of drain current w.r.t. gate voltage
meas dc gm_max MAX gm               ; find the peak transconductance
plot gm
```



## 2.10 Maximum Operating Frequency (f)

The maximum signal frequency the circuit can handle is determined by how fast the output can transition — limited by rise and fall times.

$$f_{max} = \frac{1}{t_r + t_f}$$

| Parameter | Definition |
|-----------|-----------|
| **t<sub>r</sub>** | Rise time — output swings from low to high |
| **t<sub>f</sub>** | Fall time — output swings from high to low |
| **f<sub>max</sub>** | Maximum frequency the gate can reliably switch at |

**SPICE Commands:**

```spice
tran 0.1 100p                           ; transient analysis: 0.1 ps step, 100 ps window

meas tran tr when nfet_in=0.07  RISE=1  ; measure rise time (input crosses 10% of Vdd)
meas tran tf when nfet_out=0.63 FALL=1  ; measure fall time (output crosses 90% of Vdd)

let t_delay = tr + tf                   ; total switching period
print t_delay

let f = 1 / t_delay                     ; maximum operating frequency
print f
```

> The threshold voltages (0.07 V and 0.63 V) correspond to 10% and 90% of V<sub>DD</sub> = 0.7 V, consistent with standard rise/fall time definitions.

---

## 2.11 Output Resistance (R<sub>out</sub>)

Output resistance describes how much the drain current changes in response to a change in output voltage — a key parameter for amplifier gain and signal integrity.

$$R_{out} = \frac{\partial V_{out}}{\partial I_D}$$

A high R<sub>out</sub> means the transistor behaves more like an ideal current source, which improves voltage gain.

**SPICE Commands:**

```spice
let r_out = deriv(nfet_out, id)   ; dVout / dId → output resistance at each bias point
plot r_out
```
