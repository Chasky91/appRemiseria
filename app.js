import express from 'express'
import vehiculos from './vehiculos.js';

const app = express()
app.use(express.json())

app.get("/",  (req, res) => {
  res.send("Hola Mundo!");
})

app.get("/vehiculos",  (req, res) => {
    res.json({"respuesta JSON": vehiculos})
})

app.get("/vehiculos/:id",  (req, res) => {

    let id = parseInt(req.params.id)

    for (let i = 0; i < vehiculos.length; i++) {
        if (id === vehiculos[i].idVehiculo) {
            return res.json({"respuesta JSON": vehiculos[i]})
        }        
    }
    res.status(404).json({"respuesta JSON": "No existe un vehiculo con esa id vehiculo"})
})

app.post("/vehiculos",  (req, res) => {
    let body = req.body
    let nuevo = {
        "idVehiculo":vehiculos.length +1, 
        ...body
    }
    vehiculos.push(nuevo)
    res.json({"respuesta JSON": {
        "Vehiculo":nuevo
    }})
})

app.put("/vehiculos/:id",  (req, res) => {
    
    let id = parseInt(req.params.id)
    let body = req.body

    for (let i = 0; i < vehiculos.length; i++) {
        if (id === vehiculos[i].idVehiculo) {
            let actualizacion = {
                "idVehiculo":vehiculos[i].idVehiculo, 
                ...body
            }
            vehiculos.splice(i, 1, actualizacion)
            return res.json({"respuesta JSON": "Actualización completa"})
        }        
    }
    res.status(404).json({"respuesta JSON": "No existe un vehiculo con ese id"})
})

app.delete("/vehiculos/:id",  (req, res) => {

    let id = parseInt(req.params.id)

    for (let i = 0; i < vehiculos.length; i++) {
        if (id === vehiculos[i].idVehiculo) {
            vehiculos.splice(i,1)
            return res.status(204).json({"respuesta JSON": "Vehiculo eliminado"})
        }        
    }
    res.status(404).json({"respuesta JSON": "No existe un vehiculo con esa id"})
})


app.listen(3000,  () => {
  console.log("Aplicación ejemplo, escuchando el puerto 3000!");
})
