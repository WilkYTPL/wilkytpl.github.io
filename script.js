function toggleMessage() {
    const message = document.getElementById("birthdayMessage");
    const sign = document.getElementById("sign");
    
    if (message.classList.contains("hidden")) {
        message.classList.remove("hidden");
        message.classList.add("show");
        sign.classList.remove("hidden");
        sign.classList.add("show");
    } else {
        message.classList.remove("show");
        message.classList.add("hidden");
        sign.classList.remove("show");
        sign.classList.add("hidden");
    }
}
