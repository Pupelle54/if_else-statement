const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);
function setWeather() {
    const choice = select.value;
    if (choice==="sunny") {
        para.textContent = "It is nice and sunny outside today..";
    }
 else if (choice === "rainy") {
    para.textContent = "Rain is falling outside ";
 }
 else if (choice ==="snowing") {
    para.textContent = "Today it is snowing";
 }
else if (choice ==="overcast") {
    para.textContent = "Today it is overcast";
}
else {
    para.textContent = "";
}
}