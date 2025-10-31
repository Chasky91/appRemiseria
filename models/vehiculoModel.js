import connection from "../config/config.db.js"


const  obtenerTodos = async () => {
    let resultado = await connection.query("SELECT * FROM vehiculo")
    return resultado[0]
}

const obtenerUno = async (id) => {
    let resultado = await connection.query("SELECT * FROM vehiculo WHERE idVehiculo = ?", [id])
    return resultado[0]
}


export default  vehiculosModel = {
    obtenerTodos,
    obtenerUno
}