function convertirNumero(valor) {
  let numero = parseFloat(valor);

  if (isNaN(numero)) {
    return 0;
  }

  return numero;
}

function formatoDinero(valor) {
  return "$" + valor.toFixed(2);
}

function escribirResultado(id, valor) {
  let elemento = document.getElementById(id);

  if (elemento !== null) {
    elemento.innerText = formatoDinero(valor);
  }
}

function calcularIvaAprendizaje() {
  let valor = convertirNumero(document.getElementById("ivaValor").value);
  let porcentaje = convertirNumero(
    document.getElementById("ivaPorcentaje").value,
  );

  let iva = valor * (porcentaje / 100);
  let total = valor + iva;

  escribirResultado("ivaResultado", iva);
}

function calcularSubtotalAprendizaje() {
  let total = convertirNumero(document.getElementById("subtotalTotal").value);
  let porcentaje = convertirNumero(
    document.getElementById("subtotalPorcentaje").value,
  );

  let subtotal = 0;

  if (porcentaje >= 0) {
    subtotal = total / (1 + porcentaje / 100);
  }

  let iva = total - subtotal;

  escribirResultado("subtotalResultado", subtotal);
  escribirResultado("subtotalIvaResultado", iva);
  escribirResultado("subtotalTotalResultado", total);
}

function calcularTotalFacturaAprendizaje() {
  let subtotal = convertirNumero(
    document.getElementById("totalSubtotal").value,
  );
  let porcentaje = convertirNumero(
    document.getElementById("totalIvaPorcentaje").value,
  );
  let descuento = convertirNumero(
    document.getElementById("totalDescuento").value,
  );

  let iva = subtotal * (porcentaje / 100);
  let total = subtotal + iva - descuento;

  if (total < 0) {
    total = 0;
  }

  escribirResultado("totalIvaResultado", iva);
  escribirResultado("totalDescuentoResultado", descuento);
  escribirResultado("totalFinalResultado", total);
}

function calcularImpuestoBasicoAprendizaje() {
  let base = convertirNumero(document.getElementById("impuestoBase").value);
  let tasa = convertirNumero(document.getElementById("impuestoTasa").value);

  let impuesto = base * (tasa / 100);
  let total = base + impuesto;

  escribirResultado("impuestoBaseResultado", base);
  escribirResultado("impuestoResultado", impuesto);
  escribirResultado("impuestoTotalResultado", total);
}

function revisarHashInicial() {
  if (window.location.hash !== "") {
    window.history.replaceState(null, "", window.location.pathname);
  }

  mostrarVista("home");
}

window.addEventListener("load", revisarHashInicial);
