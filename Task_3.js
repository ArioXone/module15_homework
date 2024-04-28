const chat = document.getElementById("chat");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const locationButton = document.getElementById("locationButton");

const ws = new WebSocket("wss://echo-ws-service.herokuapp.com");

ws.onmessage = function (event) {
  const message = event.data;
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  chat.appendChild(messageElement);
};

sendButton.addEventListener("click", function () {
  const message = messageInput.value;
  ws.send(message);
  messageInput.value = "";
});

locationButton.addEventListener("click", function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const locationLink = `https://www.openstreetmap.org/#map=15/${latitude}/${longitude}`;
      ws.send(locationLink);
    });
  } else {
    alert("Геолокация не поддерживается вашим браузером.");
  }
});
