import { AppDataSource } from "../config/database";
import { Role } from "../entities/Role.entity";

export const RoleRepo = AppDataSource.getRepository(Role); 