// TrekMate JavaScript
console.log("Welcome to TrekMate 🚀");

document.querySelectorAll(".card button")
.forEach(button => {
    button.addEventListener("click", function () {
        window.location.href = "booking.html";
    });
});