let botonesAgregar = $(".agregar");

let contador = 0;
botonesAgregar.on("click", function (event) {
  contador++;
  $("#cantidad-Carrito").html(contador);
  alert("El producto ha sido agregado con éxito!");
});
