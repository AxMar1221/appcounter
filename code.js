var name;
var add = 0;
var subtract = 0;

function propertyConuterAdd(){
  setProperty("labelCounterAdd", "text",add);
}

function propertyConuterSubtract(){
  setProperty("labelCounterSubtract", "text",subtract);
}

function clearInput(){
  setProperty("inputName", "text","");
}

function clearLabel(){
  setProperty("labelNameAdd", "text","");
  setProperty("labelNameSubtract", "text","");
  setProperty("image1", "image", "");
}

function setName(){
  name = getText("inputName");
  setProperty("labelNameAdd", "text",name);
  setProperty("labelNameSubtract", "text",name);
}

onEvent("buttonHome1", "click", function( ) {
  setScreen("screenHome");
  add = 0;
  setProperty("labelCounterAdd", "text",add);
  clearLabel();
});

onEvent("buttonHome2", "click", function( ) {
  setScreen("screenHome");
  subtract = 0;
  setProperty("labelCounterSubtract", "text",subtract);
  clearLabel();
});

onEvent("buttonScreenAdd", "click", function( ) {
  setName();
  setScreen("screenAdd");
  clearInput();
});

onEvent("buttonScreenSubtract", "click", function( ) {
  setName();
  setScreen("screenSubtract");
  clearInput();
});

onEvent("buttonScreenAdd", "mousemove", function( ) {
  setImageURL("image1", "assets/mas.png");
});
onEvent("buttonScreenSubtract", "mousemove", function( ) {
  setImageURL("image1", "assets/menos.png");
});

//sumar
onEvent("buttonAdd1", "click", function( ) {
  add = add + 1;
  propertyConuterAdd();
});

onEvent("buttonAdd2", "click", function( ) {
  add = add + 2;
  propertyConuterAdd();
});

onEvent("buttonAdd3", "click", function( ) {
  add = add + 3;
  propertyConuterAdd();
});

onEvent("buttonAdd4", "click", function( ) {
  add = add + 4;
  propertyConuterAdd();
});

onEvent("buttonAdd5", "click", function( ) {
  add = add + 5;
  propertyConuterAdd();
});

//botón reiniciar contador agregar
onEvent("buttonResetAdd", "click", function() {
  add = 0;
  propertyConuterAdd();
});

//restar
onEvent("buttonSubtract1", "click", function( ) {
  subtract = subtract - 1;
  propertyConuterSubtract();
});

onEvent("buttonSubtract2", "click", function( ) {
  subtract = subtract - 2;
  propertyConuterSubtract();
});

onEvent("buttonSubtract3", "click", function( ) {
  subtract = subtract - 3;
  propertyConuterSubtract();
});

onEvent("buttonSubtract4", "click", function( ) {
  subtract = subtract - 4;
  propertyConuterSubtract();
});

onEvent("buttonSubtract5", "click", function( ) {
  subtract = subtract - 5;
  propertyConuterSubtract();
});

//botón reiniciar contador restar
onEvent("buttonResetSubtract", "click", function( ) {
  subtract = 0;
  propertyConuterSubtract();
});



