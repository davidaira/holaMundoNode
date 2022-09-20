const select = document.querySelector("select");
const button = document.querySelector("button");
const perroContainer = document.querySelector(".perro-container");

button.addEventListener("click", (e) => {
    e.preventDefault();
    traerInfo(`https://dog.ceo/api/breed/${select.value}/images/random`,crearRaza);
})

window.addEventListener("load", (e) => {
    e.preventDefault();
    traerInfo(`https://dog.ceo/api/breeds/list/all`,cargarSelect);
})

function traerInfo(url, callback) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            callback(data);
        })
        .catch( (e) => { console.log(e)});
}

function crearRaza(raza) {
    const img = document.createElement('img');
    img.src = raza.message;

    const h3 = document.createElement('h3');
    h3.textContent = raza.message;

    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3);

    perroContainer.appendChild(div);
}

/* function cargarSelect(razasObj){
    let razas = Object.keys(razasObj.message);
    razas.forEach(raza => { 
        let opt = document.createElement('option');
        opt.value = raza;
        opt.innerHTML = raza;
        select.appendChild(opt);
    })
} */

