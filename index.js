function addFrac() {
    var a = document.getElementById("numerator").value
    var b = document.getElementById("denominator").value
    var c = document.getElementById("numerator2").value
    var d = document.getElementById("denominator2").value
    return ((a / b) + (c / d)).toFixed(0)
}
function multiplyFrac() {
    var a = document.getElementById("numerator").value
    var b = document.getElementById("denominator").value
    var c = document.getElementById("numerator2").value
    var d = document.getElementById("denominator2").value
    return ((a / b) * (c / d)).toFixed(0)
}
function checkFraction() {
    if (multiplyFrac() != addFrac()) {
        document.getElementById("result").innerHTML = "OUTPUT: NOT IDEAL"
    } else {
        document.getElementById("result").innerHTML = "OUTPUT: IDEAL"
    }
}
document.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        event.preventDefault();
        document.getElementById("calculate").click();
    }
})