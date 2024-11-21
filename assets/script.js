const pathLampadinaSpenta = "./assets/img/white_lamp.png"
const pathLampadinaAccesa = "./assets/img/yellow_lamp.png"

const elementLampadina = document.querySelector(".lampadina > img");

elementLampadina.src = pathLampadinaSpenta;

const elementButton = document.getElementById("btn")
const messageAccendi = "Accendi la lampadina";
const messageSpegni = "Spegni la lampadina";

elementButton.innerHTML = messageAccendi;

elementButton.addEventListener("click", () =>{
  elementLampadina.classList.toggle("active");
  if (elementLampadina.classList.contains("active")){
    elementButton.innerHTML = messageSpegni;
    elementLampadina.src = pathLampadinaAccesa;
  } else {
    elementButton.innerHTML = messageAccendi;
    elementLampadina.src = pathLampadinaSpenta;
  }
})