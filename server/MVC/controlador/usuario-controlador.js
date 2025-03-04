import { modeloUsuario } from "../modelo/usuario-modelo.js";

export const comment = async (req, res) => {
    try {

        const { nombre, correoElectronico, telefono, edad, genero, experiencia, sugerencias } = req.body;
        if (!nombre || !correoElectronico || !telefono || !edad || !genero || !experiencia || !sugerencias) {
            return res.status(400).json({ "msg": "Falta de llenar uno o más campos" });
        }

        const newUser = {
            nombre,
            correoElectronico,
            telefono,
            edad,
            genero,
            experiencia,
            sugerencias
        };

        await modeloUsuario.create(newUser);
        return res.status(200).json({ "msg": "Hemos recibido tus comentarios :D" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ "msg": "Me parece que tenemos un error :(" });
    }
}
