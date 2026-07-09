function sendMessage() {

    let input = document.getElementById("userInput");
    let chat = document.getElementById("chat");

    let userText = input.value;

    if(userText === "") {
        return;
    }

    chat.innerHTML += "<p><b>You:</b> " + userText + "</p>";

    let reply = "I am Shubham AI. I am learning to answer your questions.";

    if(userText.toLowerCase().includes("hello")) {
        reply = "Hello! Welcome to Shubham AI 🤖";
    }

    if(userText.toLowerCase().includes("name")) {
        reply = "My name is Shubham AI.";
    }

    chat.innerHTML += "<p><b>AI:</b> " + reply + "</p>";

    input.value = "";

    chat.scrollTop = chat.scrollHeight;
}
