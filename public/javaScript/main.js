var RangeRotate = document.getElementById("RangeRotate");
var ColorOne = document.getElementById("ColorOne");
var ColorTwo = document.getElementById("ColorTwo");
var GradientBox = document.getElementById("GradientBox");
var TextGradient = document.getElementById("TextGradient");
var RangePourcentOne = document.getElementById("RangePourcentOne");
var RangePourcentTwo = document.getElementById("RangePourcentTwo");
var Copy = document.getElementById("Copy");

RangeRotate.addEventListener("input", () => {
    ChangeGradient();
});

ColorOne.addEventListener("input", () => {
    ChangeGradient();
});

ColorTwo.addEventListener("input", () => {
    ChangeGradient();
});

RangePourcentOne.addEventListener("input", () => {
    ChangeGradient();
});

RangePourcentTwo.addEventListener("input", () => {
    ChangeGradient();
});

Copy.addEventListener("click", () => {
    var TextGradient = document.getElementById("TextGradient");
    TextGradient.select();
    document.execCommand("copy")
})

function ChangeGradient() {
    RangeRotate.setAttribute("data-degre", RangeRotate.value + "deg");
    ColorOne.setAttribute("data-colorOne", ColorOne.value);
    ColorTwo.setAttribute("data-colorTwo", ColorTwo.value);
    RangePourcentOne.setAttribute("data-pourcentGradientOne", RangePourcentOne.value + "%")
    RangePourcentTwo.setAttribute("data-pourcentGradientTwo", RangePourcentTwo.value + "%")

    GradientBox.style.backgroundImage = "linear-gradient("+ RangeRotate.value + "deg, "+ ColorOne.value +" "+ RangePourcentOne.value +"%, "+ ColorTwo.value +" "+ RangePourcentTwo.value +"%)"
    TextGradient.value = "background-image: linear-gradient("+ RangeRotate.value + "deg, "+ ColorOne.value +" "+ RangePourcentOne.value +"%, "+ ColorTwo.value +" "+ RangePourcentTwo.value +"%);"

    // TextGradient.innerHTML = "background-image: linear-gradient("+ RangeRotate.value + "deg, "+ ColorOne.value +" "+ RangePourcentOne.value +"%, "+ ColorTwo.value +" "+ RangePourcentTwo.value +"%);"
}