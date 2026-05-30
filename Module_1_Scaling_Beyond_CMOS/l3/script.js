const slider = document.getElementById("slider");

const img = document.getElementById("deviceImg");
const title = document.getElementById("title");
const desc = document.getElementById("desc");

const leakage = document.getElementById("leakage");
const gate = document.getElementById("gate");

const canvas = document.getElementById("curveCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 300;

let mode = 0;

// ---------- DEVICE UPDATE ----------
slider.addEventListener("input", () => {

  mode = parseInt(slider.value);

  if (mode === 0) {
    img.src = "assets/planar.png";
    title.textContent = "Planar MOSFET";
    desc.textContent = "Weak gate control → high leakage";

    leakage.textContent = "High leakage current";
    gate.textContent = "Single-side control";
  }

  if (mode === 1) {
    img.src = "assets/finfet.png";
    title.textContent = "FinFET";
    desc.textContent = "Tri-gate control → strong electrostatics";

    leakage.textContent = "Reduced leakage";
    gate.textContent = "Multi-gate control";
  }

  if (mode === 2) {
    img.src = "assets/gaa.png";
    title.textContent = "Gate-All-Around";
    desc.textContent = "Full channel control";

    leakage.textContent = "Near-zero leakage";
    gate.textContent = "360° control";
  }

  drawCurve();
});

// ---------- CURVE GENERATION ----------
function transferFunction(vg, type) {

  // Planar: weak switching
  if (type === 0) {
    return Math.max(0, Math.exp((vg - 2.5)));
  }

  // FinFET: improved slope
  if (type === 1) {
    return Math.max(0, Math.exp((vg - 1.8) * 1.4));
  }

  // GAA: near ideal
  if (type === 2) {
    return Math.max(0, Math.exp((vg - 1.2) * 2.2));
  }
}

// ---------- DRAW GRAPH ----------
function drawCurve() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // axes
  ctx.strokeStyle = "#64748b";
  ctx.beginPath();
  ctx.moveTo(50, 250);
  ctx.lineTo(550, 250);
  ctx.moveTo(50, 250);
  ctx.lineTo(50, 30);
  ctx.stroke();

  // curve
  ctx.strokeStyle = "#38bdf8";
  ctx.beginPath();

  for (let x = 0; x <= 100; x++) {

    let vg = x / 20; // 0 to 5V
    let id = transferFunction(vg, mode);

    let px = 50 + x * 5;
    let py = 250 - id * 40;

    if (x === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }

  ctx.stroke();
}

// initial render
drawCurve();
