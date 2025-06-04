import { UsuarioRepo } from "../repositories/Usuario.repository";
import { RoleRepo } from "../repositories/Role.repository";
import { Usuario } from "../entities/Usuario.entity";

export class UsuarioService {
    async createUsuario(data: Partial<Usuario>): Promise<Usuario> {
        if (!data.rolId) throw new Error("rolId es obligatorio");
        const rol = await RoleRepo.findOneByOrFail({ id: data.rolId });
        const usuario = UsuarioRepo.create({ ...data, rol });
        return UsuarioRepo.save(usuario);
    }

    async getAllUsuarios(): Promise<Usuario[]> {
        return UsuarioRepo.find({ relations: ["rol"] });
    }
} 