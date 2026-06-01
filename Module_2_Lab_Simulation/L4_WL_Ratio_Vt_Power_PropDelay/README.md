# L4 — W/L Ratio, Vt, Power, Propagation Delay, Gain And Noise Margin









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
