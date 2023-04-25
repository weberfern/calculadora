const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = document.getElementById("weight").value;

  const dose = (weight / 3).toFixed(2);
  const total = (dose * 21).toFixed(0);
  const frascos = Math.ceil(total / 150).toFixed(0);

  const value = document.getElementById("value");
  let description = "";

  document.getElementById("infos").classList.remove("hidden");

  document.getElementById("value1").textContent = dose;
  document.getElementById("value2").textContent = total;
  document.getElementById("value3").textContent = frascos;
});
