const MostrandoTickets = "https://carlos-2790.github.io/ticketsJson/tickets.json";
let infoHtml = "";

//En esta funcion se utiliza la API (XMLHttpRequest())
//que permite realizar solicitudes de red para recuperar
//recursos desde un servidor

const request = new XMLHttpRequest();
request.open('GET', MostrandoTickets);
request.responseType = 'json';
request.send();
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

        
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">De: `+ com.from + `</h5>
          <h6 class="card-subtitle mb-2 text-muted">Enviado: `+ com.date + `</h6>
          <p class="card-text">`+ estado + `</p>
          <p class="card-text">`+ com.subject + `</p>
          <p class="card-text">`+ com.body + `</p>
          <p class="card-text">`+ com.ticketId + `</p>
          
        </div>
      </div>

      `


        document.getElementById("uno").innerHTML = infoHtml;
    }
}