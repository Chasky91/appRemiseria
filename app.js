import express from 'express'
import vehiculos from './vehiculos.js'
import { vehiculoRouter } from './router/vehiculoRouter.js'

const app = express()
app.use(express.json())

app.get("/",  (req, res) => {
  res.send("Hola Mundo!");
})

app.use('/vehiculos', vehiculoRouter)


app.listen(3000,  () => {
  console.log("Aplicación ejemplo, escuchando el puerto 3000!");
})
