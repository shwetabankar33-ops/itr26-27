const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Shweta! Welcome to my backend.");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});