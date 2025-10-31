import { todos, uno, crear, actualizar, eliminar } from '../controller/vehiculoController.js'    
import { Router } from 'express'


export const vehiculoRouter= Router()


vehiculoRouter.get("/",todos)
vehiculoRouter.get("/",todos)
vehiculoRouter.get("/:id", uno)
vehiculoRouter.post("/", crear)
vehiculoRouter.put("/:id", actualizar)
vehiculoRouter.delete("/:id", eliminar)