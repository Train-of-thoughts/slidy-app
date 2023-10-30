import open from "open";
import express from "express"
import path, { dirname } from "path"
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 5555;
const app = express();

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.sendFile(path.resolve("index.html"))
})

const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}\nLocalhost adress is: http://localhost:${PORT}`)
        open(`http://localhost:${PORT}`)
    })
}

startServer()
