// - `@Entity("books")`: tabla books.
// - `@PrimaryGeneratedColumn()`: clave primaria autogenerada.
// - `@Column()`: columnas para nombre y género.
// - `@Column("int")`: columna numérica para año de publicación.
// - `@ManyToOne()`: relación muchos a uno con Writer.
// - `@JoinColumn()`: define la columna foránea authorId.

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Usuario } from "./Usuario.entity";

@Entity("roles")
export class Role {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nombre!: string;

    @Column({ nullable: true })
    descripcion?: string;

    @OneToMany(() => Usuario, usuario => usuario.rol)
    usuarios!: Usuario[];
} 