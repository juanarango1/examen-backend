import { AppDataSource } from "../config/database";
import { Usuario } from "../entities/Usuario.entity";

export const UsuarioRepo = AppDataSource.getRepository(Usuario); 