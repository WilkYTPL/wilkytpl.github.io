const reasons = [
    "Because you listen to me",
    "Because you never left me",
    "Just because I like you :3",
    "For being here for me",
    "For letting me be your friend (now bf :3)",
    "Because I feel like it",
    "Because you deserve it",
    "Because you care about me",
    "You like me even tho I'm dumb",
    "Because you helped me when I felt sad",
    "Because yes",
    "Because why not",
    "Because you trusted me",
    "Because you listen to my yapping"
];

function displayRandomReason() {
    const randomIndex = Math.floor(Math.random() * reasons.length);
    const randomReason = reasons[randomIndex];
    const reasonElement = document.getElementById('reason');
    if (reasonElement) {
        reasonElement.textContent = randomReason;
    }
}

document.addEventListener('DOMContentLoaded', displayRandomReason);
