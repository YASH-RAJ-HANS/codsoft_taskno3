const display = document.querySelector(".display");
// declaring constants 
const spchar = ["%", "*", "/", "-", "+", "="];
const buttons = document.querySelectorAll("button");

let out = "";
const calculate = (btval) => {
  display.focus();
  if (btval === "=" && out !== "") {
    out = eval(out.replace("%", "/100"));
  } else if (btval === "AC") {
    out = "";
  } else if (btval === "DEL") {
    out = out.toString().slice(0, -1);
  } else {
    if (out === "" && spchar.includes(btval)) return;
    out += btval;
  }
  display.value = out;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
