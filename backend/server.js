//importo express para levantar el server HTTP
import express from "express";
//inporto cors
import cors from "cors";
//importo fs para cargar las routes
import fs from "fs";
//importo cors para loggear las request HTTP
const morgan = require("morgan");
//importo dotenv para cargar las variables de entorno
require("dotenv").config();

//creo una app express (un server)
const app = express();

//aplico middlewares utilizando app.use
app.use(cors);
//express.json() para mandar datos del frontend al backend como JSON
app.use(express.json());
app.use(morgan("dev"));

//mapeo todas mis rutas, leo el archivo routes y por cada ruta que exporto hago un app.use
//
fs.readdirSync("./routes").map((route) => {
  app.use("/api", require(`./routes/${route}`));
});
//port

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
