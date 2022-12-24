/*!
 * Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

//CODIGO JAVASCRIPT
/* let tituloPrincipal = document.getElementById("titulo-principal");

tituloPrincipal.innerText = "Mi tienda virtual"; */

/* $("h1").html("Mi tienda virtual con JQuery");

$("h1").prepend("<strong>¡¡¡</strong>");
$("h1").append("<strong>!!!</strong>");

$("h1").css({
  color: "red",
  fontWeight: "800",
  backgroundColor: "green",
}); */

//$("#cantidad-carrito").html();

let botonesAgregar = $(".agregar");

let contador = 0;
botonesAgregar.on("click", function (event) {
  contador++;
  $("#cantidad-carrito").html(contador);
  alert("El producto ha sido agregado con éxito!");
});

/* $("header").on("mouseenter", function (event) {
  $("header").removeClass("bg-dark");
  $("header").css("background-color", "pink");
});

$("header").on("mouseleave", function (event) {
  $("header").addClass("bg-dark");
}); */
