function toggleMessage(){
    const message = document.getElementById("hiddentext");

    if (message.classList.contains("hidden")){
        message.classList.remove("hidden");
        message.classList.add("show")
    } else {
        message.classList.remove("show");
        message.classList.add("hidden");
    }
}