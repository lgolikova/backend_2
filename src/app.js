const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/users");
const loggerOne = require("./middlewares/loggerOne");
const loggerTwo = require("./middlewares/loggerTwo");

const app = express();

const { PORT = 3000, API_URL = "http://127.0.0.1" } = process.env;

const helloWorld = (request, response) => {
    response.status(200);
    response.send("Hello, World!");
};

app.use(cors);
app.use(loggerOne);
app.use(bodyParser.json());

app.get("/", helloWorld);

app.post("/", (request, response) => {
    response.status(200);
    response.send("Hello from POST");
});

app.listen(PORT, () => {
    console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});

app.use(userRouter);
