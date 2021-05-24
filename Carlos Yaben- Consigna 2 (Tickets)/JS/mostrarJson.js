const MostrandoTickets = "https://carlos-2790.github.io/ticketsJson/tickets.json";
let infoHtml = "";

//En esta funcion se utiliza la API (XMLHttpRequest())
//que permite realizar solicitudes de red para recuperar
//recursos desde un servidor

const request = new XMLHttpRequest();
request.open('GET', MostrandoTickets);   /* -->   abrirmos una nueva solicitud utilizando el método open()  */
request.responseType = 'json';          /*  -->   establecemos el responseType a JSON, de esta forma ese XHR sabe que el servidor estará retornando JSON */
request.send();                        /*   -->   es convertido en segundo plano en un objeto JavaScript. Entonces se envía la solicitud con el método send()*/
request.onload = function () {
  const productosInfoComments = request.response;
  for (let i = 0; i < productosInfoComments.length; i++) {
    let com = productosInfoComments[i];
    var estado = "";
    if (com.status == "SOLVED") {

      estado = `<p class="card-text badge bg-success text-wrap" style="width: 6rem;">` + com.status + `</p>`
    } else {
      estado = ` <p class="card-text badge bg-danger text-wrap" style="width: 6rem;">` + com.status + `</p>`
    }


    infoHtml += `

        <div class="card " style="width: 18rem;">
        <div class="card-body rounded border border-1 border border-secondary">
          <h5 class="card-title">de: `+ com.from + `</h5>
          <p class="card-text">`+ estado + `</p>
          <p class="card-text">`+ com.subject + `</p>
          <p class="card-text">`+ com.body + `</p>
          <p class="card-text">`+ com.ticketId + `</p>
          <h6 class="card-subtitle mb-2 text-muted">Enviado: `+ com.date + `</h6>
         </div>
      </div>

      `


    document.getElementById("uno").innerHTML = infoHtml;
  }
}