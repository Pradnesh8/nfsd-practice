const socket = io("ws://localhost:8080")

socket.on("message", (text) => {
    const li = document.createElement('li')
    li.innerText = text;
    document.querySelector('ul').appendChild(li);
})

document.querySelector("button").onclick = () => {
    const msg = document.getElementById("msg");
    socket.emit('message', msg.value)
    msg.value = "";
}