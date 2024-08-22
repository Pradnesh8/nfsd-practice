const express = require('express');
const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}\\client\\index.html`)
})

app.get("/logout", (req, res) => {
    res.setHeader('Clear-Site-Data', '"cookies", "cache", "storage"')
    res.redirect("/");
})

app.post("/set-preferences", (req, res) => {
    const data = req.body.preferences
    res.cookie('userPreferences', data, { maxAge: 3600000 })
    res.redirect("/");
})

const PORT = 3001
app.listen(PORT, () => {
    console.log("Server is running at port " + PORT);
})