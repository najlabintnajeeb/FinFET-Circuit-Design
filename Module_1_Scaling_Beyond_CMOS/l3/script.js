const slider = document.getElementById("slider");

const img = document.getElementById("deviceImg");
const title = document.getElementById("title");
const desc = document.getElementById("desc");

const leakage = document.getElementById("leakage");
const gate = document.getElementById("gate");

const box = document.getElementById("deviceBox");

function animateChange() {
  box.classList.add("fade");

  setTimeout(() => {
    box.classList.remove("fade");
  }, 200);
}

slider.addEventListener("input", () => {

  animateChange();

  const v = parseInt(slider.value);

  if (v === 0) {
    img.src = "assets/planar.png";
    title.textContent = "Planar MOSFET";
    desc.textContent = "Gate controls only top surface";

    leakage.textContent = "High leakage due to weak control";
    gate.textContent = "Single-side gate control";
  }

  if (v === 1) {
    img.src = "assets/finfet.png";
    title.textContent = "FinFET (Tri-Gate)";
    desc.textContent = "Gate wraps 3 sides of channel";

    leakage.textContent = "Strongly reduced leakage";
    gate.textContent = "Multi-side electrostatic control";
  }

  if (v === 2) {
    img.src = "assets/gaa.png";
    title.textContent = "Gate-All-Around (GAA)";
    desc.textContent = "Gate fully surrounds channel";

    leakage.textContent = "Near-zero leakage";
    gate.textContent = "Maximum electrostatic control";
  }
});
