import "express-async-errors";
import express from 'express'
import { AppDataSource } from './data-source'
import { errorMidleware } from './middlewares/error'
import routes from "./routes";

AppDataSource.initialize().then(() => {
    const app = express()
    var cors = require('cors')

    app.use(express.json())

    app.use(cors())
    app.use(routes)

    app.use(errorMidleware)


    return app.listen(3000)
})