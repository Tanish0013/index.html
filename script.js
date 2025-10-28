async function sendMessage() {
  const userInput = document.getElementById("userInput").value;
  addMessage(userInput, "user");

  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userInput }),
  });

  const data = await response.json();
  addMessage(data.reply, "bot");
}
// ✅ Define the input box and send button
const inputElem = document.querySelector("#user-input");
const sendBtn = document.querySelector("#send-btn");
