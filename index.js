let getcolor = () => {
  let RandomNumber = Math.floor(Math.random() * 16777215);
  let RandomCode = "#" + RandomNumber.toString(16).padStart(6, "0");

  document.body.style.backgroundColor = RandomCode;
  document.getElementById("color-code").innerText = RandomCode;
  navigator.clipboard.writeText(RandomCode);
};
document.getElementById("btn").addEventListener("click", getcolor);
getcolor();
