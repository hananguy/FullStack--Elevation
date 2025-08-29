import express from "express";
import logger from "./middlewares/logger.js";
import count from "./middlewares/counter.js";
import validateId from './middlewares/validateId.js'
import checkResourceExists from "./middlewares/checkResourceExists.js";
import usersRouter from './Routes/usersRouter.js'

import { fileURLToPath } from "url";
import { dirname } from "path";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(logger);
app.use(count);



app.get('/', (req, res) =>
{
    res.send(`Welcome! This is request number ${req.requestCount}`);
      
})

app.use('/users', usersRouter)




//Error middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error",
  });
});


const port = 8080
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})


