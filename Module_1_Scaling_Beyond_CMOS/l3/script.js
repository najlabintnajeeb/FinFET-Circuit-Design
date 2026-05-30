const slider = document.getElementById("deviceSlider");

const image = document.getElementById("deviceImage");
const title = document.getElementById("deviceTitle");
const desc = document.getElementById("deviceDesc");

const leakageText = document.getElementById("leakageText");
const gateText = document.getElementById("gateText");

slider.addEventListener("input", () => {

  const value = parseInt(slider.value);

  if (value === 0) {
    // PLANAR
    image.src = "assets/planar.png";
    title.textContent = "Planar MOSFET";
    desc.textContent = "Gate controls only top surface → weak electrostatic control";

    leakageText.textContent = "High sub-channel leakage due to weak control";
    gateText.textContent = "Single-side gate control";
  }

  if (value === 1) {
    // FINFET
    image.src = "assets/finfet.png";
    title.textContent = "FinFET (Tri-Gate)";
    desc.textContent = "Gate wraps 3 sides → strong electrostatic control";

    leakageText.textContent = "Significantly reduced leakage";
    gateText.textContent = "Multi-side gate control improves switching";
  }

  if (value === 2) {
    // GAA
    image.src = "assets/gaa.png";
    title.textContent = "Gate-All-Around (GAA)";
    desc.textContent = "Gate fully surrounds channel → maximum control";

    leakageText.textContent = "Minimal leakage (near ideal)";
    gateText.textContent = "Full 360° gate control";
  }
});
