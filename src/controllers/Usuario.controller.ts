import { Request, Response, NextFunction } from "express";
import { UsuarioService } from "../services/Usuario.service";

const usuarioService = new UsuarioService();

export const createUsuario = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const usuario = await usuarioService.createUsuario(req.body);
        res.status(201).json(usuario);
    } catch (err) {
        next(err);
    }
};

export const getUsuarios = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const usuarios = await usuarioService.getAllUsuarios();
        res.json(usuarios);
    } catch (err) {
        next(err);
    }
}; 