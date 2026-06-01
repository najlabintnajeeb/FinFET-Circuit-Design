# L1 — First NFET Characteristics Using 7nm PDKs

**Course:** FinFET Circuit Design and Characterization
**Module:** Module 2 — Lab-to-Simulation
**Status:** 📝 Notes coming soon




A FinFET is a transistor where the silicon channel is shaped like a tiny vertical fin, and the gate wraps around it on three sides instead of just one (like in older flat transistors).
Why this matters:
The gate controls the channel much better
It reduces leakage current (less unwanted power loss)
It improves speed and performance
It allows chips to be smaller and more efficient
Simple comparison:
Old planar transistor: gate only on top → weaker control
FinFET: gate wraps around 3 sides → strong control
In practice:
FinFETs are the main transistor type used in modern chips at nodes like 14 nm, 10 nm, and 7 nm, enabling high-performance, low-power processors in CPUs, GPUs, and mobile chips.



<img width="849" height="480" alt="finfet" src="https://github.com/user-attachments/assets/da2f7ab5-dd8a-46f6-acdd-cc92715a3e56" />


Characterization of CMOS VTC

Nfet Id and Vd Characteristics

Nfet spice file- nfet_char.spice


** sch_path: /home/hprcse/Finfet/nfet_char.sch
**.subckt nfet_char
V1 nfet_in GND 0
V2 vdd GND 3
R1 vdd nfet_out 1k m=1
Xnfet2 nfet_out nfet_in GND GND asap_7nm_nfet l=7e-009 nfin=14
**** begin user architecture code


.dc v1 0 0.7 1m v2 0 0.7 0.2
.control
run
set xbrushwidth=3
let vd = vdd - nfet_out
let id  = vd/1000
plot id
.endc


**** end user architecture code
**.ends
.GLOBAL GND
**** begin user architecture code

.subckt asap_7nm_nfet S G D B l=7e-009 nfin=14
	nnmos_finfet S G D B BSIMCMG_osdi_N l=7e-009 nfin=14
.ends asap_7nm_nfet

.model BSIMCMG_osdi_N BSIMCMG_va (
+ TYPE = 1
************************************************************
*                         general                          *
************************************************************
+version = 107             bulkmod = 1               igcmod  = 1               igbmod  = 0
+gidlmod = 1               iimod   = 0               geomod  = 1               rdsmod  = 0
+rgatemod= 0               rgeomod = 0               shmod   = 0               nqsmod  = 0
+coremod = 0               cgeomod = 0               capmod  = 0               tnom    = 25
+eot     = 1e-009          eotbox  = 1.4e-007        eotacc  = 1e-010          tfin    = 6.5e-009
+toxp    = 2.1e-009        nbody   = 1e+022          phig    = 4.2466          epsrox  = 3.9
+epsrsub = 11.9            easub   = 4.05            ni0sub  = 1.1e+016        bg0sub  = 1.17
+nc0sub  = 2.86e+025       nsd     = 2e+026          ngate   = 0               nseg    = 5
+l       = 2.1e-008        xl      = 1e-009          lint    = -2e-009         dlc     = 0
+dlbin   = 0               hfin    = 3.2e-008        deltaw  = 0               deltawcv= 0
+sdterm  = 0               epsrsp  = 3.9             nfin    = 1
+toxg    = 1.80e-009
************************************************************
*                            dc                            *
************************************************************
+cit     = 0               cdsc    = 0.01            cdscd   = 0.01            dvt0    = 0.05
+dvt1    = 0.47            phin    = 0.05            eta0    = 0.07            dsub    = 0.35
+k1rsce  = 0               lpe0    = 0               dvtshift= 0               qmfactor= 2.5
+etaqm   = 0.54            qm0     = 0.001           pqm     = 0.66            u0      = 0.0303
+etamob  = 2               up      = 0               ua      = 0.55            eu      = 1.2
+ud      = 0               ucs     = 1               rdswmin = 0               rdsw    = 200
+wr      = 1               rswmin  = 0               rdwmin  = 0               rshs    = 0
+rshd    = 0               vsat    = 70000           deltavsat= 0.2             ksativ  = 2
+mexp    = 4               ptwg    = 30              pclm    = 0.05            pclmg   = 0
+pdibl1  = 0               pdibl2  = 0.002           drout   = 1               pvag    = 0
+fpitch  = 2.7e-008        rth0    = 0.225           cth0    = 1.243e-006      wth0    = 2.6e-007
+lcdscd  = 5e-005          lcdscdr = 5e-005          lrdsw   = 0.2             lvsat   = 0
************************************************************
*                         leakage                          *
************************************************************
+aigc    = 0.014           bigc    = 0.005           cigc    = 0.25            dlcigs  = 1e-009
+dlcigd  = 1e-009          aigs    = 0.0115          aigd    = 0.0115          bigs    = 0.00332
+bigd    = 0.00332         cigs    = 0.35            cigd    = 0.35            poxedge = 1.1
+agidl   = 1e-012          agisl   = 1e-012          bgidl   = 10000000        bgisl   = 10000000
+egidl   = 0.35            egisl   = 0.35
************************************************************
*                            rf                            *
************************************************************
************************************************************
*                         junction                         *
************************************************************
************************************************************
*                       capacitance                        *
************************************************************
+cfs     = 0               cfd     = 0               cgso    = 1.6e-010        cgdo    = 1.6e-010
+cgsl    = 0               cgdl    = 0               ckappas = 0.6             ckappad = 0.6
+cgbo    = 0               cgbl    = 0
************************************************************
*                       temperature                        *
************************************************************
+tbgasub = 0.000473        tbgbsub = 636             kt1     = 0               kt1l    = 0
+ute     = -0.7            utl     = 0               ua1     = 0.001032        ud1     = 0
+ucste   = -0.004775       at      = 0.001           ptwgt   = 0.004           tmexp   = 0
+prt     = 0               tgidl   = -0.007          igt     = 2.5
************************************************************
*                          noise                           *
************************************************************
**)
.control
pre_osdi /workspaces/vsd-7nm/asap_7nm_Xschem/bsimcmg.osdi
.endc


**** end user architecture code
.end



<img width="1181" height="710" alt="nfet char" src="https://github.com/user-attachments/assets/d2ee79a5-c3e2-41fc-beb2-3d988219b164" />



The plot Id vs Vd
<img width="991" height="675" alt="id vs vd" src="https://github.com/user-attachments/assets/3b2d3f5e-e675-4523-a067-7bc018112671" />





The schematic of Nfet is given below. It's created in Xschem.
Note: make sure to give correct the "asap_7nm_nfet.sym" location in nfet_char.sch elese you may encounter error os missing symbol

nfet_char.sch file 
v {xschem version=3.4.5 file_version=1.2
}
G {}
K {}
V {}
S {}
E {}
N 170 90 170 120 {
lab=GND}
N 170 60 240 60 {
lab=GND}
N 240 60 240 110 {
lab=GND}
N 170 110 240 110 {
lab=GND}
N 170 10 170 30 {
lab=nfet_out}
N 100 20 170 20 {
lab=nfet_out}
C {vsource.sym} -40 100 0 0 {name=V1 value=0 savecurrent=false}
C {gnd.sym} 170 120 0 0 {name=l1 lab=GND}
C {gnd.sym} -40 130 0 0 {name=l2 lab=GND}
C {lab_pin.sym} -40 70 0 0 {name=p1 sig_type=std_logic lab=nfet_in}
C {lab_pin.sym} 130 60 0 0 {name=p2 sig_type=std_logic lab=nfet_in}
C {vsource.sym} 370 100 0 0 {name=V2 value=3 savecurrent=false}
C {gnd.sym} 370 130 0 0 {name=l3 lab=GND}
C {lab_pin.sym} 370 70 0 0 {name=p3 sig_type=std_logic lab=vdd}
C {lab_pin.sym} 170 -50 0 0 {name=p4 sig_type=std_logic lab=vdd}
C {code_shown.sym} 430 20 0 0 {name=s1 only_toplevel=false value="
.dc v1 0 0.7 1m v2 0 0.7 0.2
.control
run
set xbrushwidth=3
let vd = vdd - nfet_out
let id  = vd/1000
plot id
.endc
"}
C {res.sym} 170 -20 0 0 {name=R1
value=1k
footprint=1206
device=resistor
m=1}
C {lab_pin.sym} 100 20 0 0 {name=p5 sig_type=std_logic lab=nfet_out}
C {/workspaces/vsd-7nm/asap_7nm_Xschem/asap_7nm_nfet.sym} 150 60 0 0 {name=nfet2 model=asap_7nm_nfet spiceprefix=X l=7e-009 nfin=14}


command : xschem nfet_char.sch 

<img width="832" height="581" alt="nfet schematic" src="https://github.com/user-attachments/assets/fbba2165-bedd-45bb-bb38-2acba6d0a28e" />


| ← Previous | [Module Overview](../../README.md) |
| ↑ Course | [Course Overview](../../README.md) |
