let tarjetas = document.getElementById("tarjetas");
const buscar = document.getElementById("buscar");

const xhr = new XMLHttpRequest();

buscar.addEventListener("click", () => {
  const artista = document.getElementById("artista").value;
  const titulo = document.getElementById("titulo").value;
  const lanzamiento = document.getElementById("lanzamiento").value;

  xhr.addEventListener("load", () => {
    tarjetas.innerHTML = "";
    const response = JSON.parse(xhr.responseText);

    response.forEach((elemento) => {
      tarjetas.innerHTML += `
        <img src="${elemento.tapa}">
        <div class="card-body">
        <h3>${elemento.artista}</h3>
        <h6>${elemento.titulo}</h6>
        <p>Lanzamiento: ${elemento.lanzamiento}</p>        
        </div>`;
    });
  });

  let filter = "";

  if (artista) {
    filter += (filter ? "&" : "") + `artista=${artista}`;
  }
  if (titulo) {
    filter += (filter ? "&" : "") + `titulo=${titulo}`;
  }
  if (lanzamiento) {
    filter += (filter ? "&" : "") + `lanzamiento=${lanzamiento}`;
  }
  xhr.open("GET", `/discos?${filter}`);
  xhr.send();
});
