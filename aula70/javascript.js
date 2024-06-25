const long = document.getElementById("long")
const lati = document.getElementById("lati")



if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(MostrarLocalização)
}else{
    console.log("Geolocalização não suportada")
}

function MostrarLocalização (pos){
    long.innerHTML = `Longitude: ${pos.coords.longitude}`
    lati.innerHTML = `Latitude: ${pos.coords.latitude}`
}

function ErroLocalização (){
    console.log("Erro ao obter a localização")
}