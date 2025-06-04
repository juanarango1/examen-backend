import { DataSource } from "typeorm";
import { Usuario } from "../entities/Usuario.entity";
import { Role } from "../entities/Role.entity";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "/tmp/db.sqlite",
    synchronize: true,
    logging: false,
    entities: [Usuario, Role],
});