const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 5551;
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("index.html"));
});

const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}\nLocalhost address is: http://localhost:${PORT}`);
    });
};

startServer();
