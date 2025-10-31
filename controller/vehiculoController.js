import vehiculos from "../vehiculos.js"

export const todos = (req, res) => {
    res.json({"respuesta JSON": vehiculos})
}


export const uno = (req, res) => {
    
    let id = parseInt(req.params.id)

    for (let i = 0; i < vehiculos.length; i++) {
        if (id === vehiculos[i].idVehiculo) {
            return res.json({"respuesta JSON": vehiculos[i]})
        }        
    }
    res.status(404).json({"respuesta JSON": "No existe un vehiculo con esa id vehiculo"})
}


export const crear = (req, res) => {
    let body = req.body
    let nuevo = {
        "idVehiculo":vehiculos.length +1, 
        ...body
    }
    vehiculos.push(nuevo)
    res.json({"respuesta JSON": {
        "Vehiculo":nuevo
    }})
}


export const actualizar = (req, res) => {
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
}


export const eliminar = (req, res) => {
    let id = parseInt(req.params.id)


    for (let i = 0; i < vehiculos.length; i++) {
        if (id === vehiculos[i].idVehiculo) {
            vehiculos.splice(i,1)
            return res.status(204).json({"respuesta JSON": "Vehiculo eliminado"})
        }        
    }
    res.status(404).json({"respuesta JSON": "No existe un vehiculo con esa id"})
}
