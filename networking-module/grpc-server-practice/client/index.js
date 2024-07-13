const express = require("express")
const app = express()
const client = require("./client")
app.use(express.json())

app.get("/", (req, res) => {
    client.getAll(null, (err, data) => {
        if (!err)
            res.send(data.customers)
    })
})

app.post("/create", (req, res) => {
    const newCustomer = {
        id: "",
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    }
    client.insert(newCustomer, (err, data) => {
        if (err) throw err;
        console.log("Customer added", data);
        res.send({ message: "Customer created successfully" })
    })

})

app.post("/update", (req, res) => {
    const updatedCustomer = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    }
    client.update(updatedCustomer, (err, data) => {
        if (err) throw err;
        console.log("Customer updated", data);
        res.send({ message: "Customer updated successfully" })
    })
})

app.delete("/delete", (req, res) => {
    const deletedCustomer = {
        id: req.body.id
    }
    client.remove(deletedCustomer, (err, _) => {
        if (err) throw err;
        console.log("Customer deleted", _);
        res.send({ message: "Customer deleted successfully" })
    })
})

const PORT = 3000
app.listen(PORT, () => {
    console.log("Server is running at port " + PORT);
})