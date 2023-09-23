import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";
import { pool } from "../db.config.js";
export const validatetoken = async (req,res,next) => {
    const accessToken = req.header("accessToken")
    if(!accessToken) return res.json({message: 'Usuario no logueado'})
    try {
        const validtoken = jwt.verify(accessToken,SECRET)
        req.correo = validtoken.correo
        req.UserId = validtoken.id;
        const user  = await  pool.query("SELECT * FROM CLIENTES WHERE = ?",[req.UserId])
        if(!user) return res.json({message: 'Usuario no existe'})
        next()
    } catch (error) {
        return res.status(401).json({error: error.message})
    }
}