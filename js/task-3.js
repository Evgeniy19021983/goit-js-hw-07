const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
input.addEventListener("input", showName);

function showName(event) {
    const value = "Anonymous";
    const target = event.target;
    if (target.value.trim() == "") {
        span.textContent = value;
    } else {
        span.textContent = target.value.trim();
    }
}