const express = require('express')
const app = express()
const port = 3000
const mysql = require("mysql")
const connection = mysql.createConnection({
    user: "admin",
    password: "admin",
    host: "db", 
    database: "nodedb"
})
 
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

app.set("trust proxy", "127.0.0.1")

app.get("/", (req, res) => {    
    connection.query("INSERT INTO people (name) values ('Rafael');")
    connection.query("SELECT * FROM people", (error, result, fields) => {
        const userList = result.reduce((map, current) => {
            map += (`<li>id: ${current.id} name: ${current.name}</li>`)
            return map
        }, "")
        
        return res.send("<h1>Full Cycle Rocks!</h1>" + `<ul>${userList}</ul>`)
    })
})

app.listen(port, () => console.log(`Rodando na porta ${port}`))
express.application