const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sql = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

// Example API to get data from a table named 'Users'
app.get("/users", async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM Users`;
        res.json(result.recordset);
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).send("Server Error");
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
