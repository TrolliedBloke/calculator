// grabbing display element "display" from HTML
const display = document.getElementById("display");

// function to append a value to the display tag we are using as a screen
function appendValue(value) {
  display.value += value;
} // function for our clear button to instantly clear the display
function clearDisplay() {
  display.value = "";
}
// function to delete the last character inputed to the display screen with slice
function deleteLast() {
  display.value = display.value.slice(0, -1);
}
// function using the built in eval to automatically evaluate contents of display and
// calculate.
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    // catch block incase it cant complete which returns "error" on the screen
    display.vue = "Error";
  }
}
