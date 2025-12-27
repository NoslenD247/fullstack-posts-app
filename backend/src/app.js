import express from "express"
import router from "./routes/posts.routes.js";
import specs from "../src/config/swagger.js"
import swaggerUI from "swagger-ui-express"

const app = express();

app.use(express.json())

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))  //serve retorna un handle para manejar los archivos

// Routes
app.use("/posts", router)

//Route for Status
// app.get("/healt", (req, res) => {
//     res.json({
//         message
//     })
// })

export default app