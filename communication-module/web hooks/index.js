const express = require('express');
const app = express();

app.use(express.json())

app.post("/webhook", (req, res) => {
    const data = req.body;
    console.log("Webhook called")
    console.log("DATA FOUND : ", data);
    console.log("Updating data")
    res.status(200).json({ data: "success" })
})

const PORT = 3001
app.listen(PORT, () => {
    console.log("Server is running at port " + PORT);
})