# Backend Vue - API REST

Este es un backend desarrollado con TypeScript, Express y TypeORM que proporciona una API REST para la gestión de usuarios y roles.

## 🚀 Tecnologías Utilizadas

- **TypeScript**: Lenguaje de programación tipado
- **Express**: Framework web para Node.js
- **TypeORM**: ORM para TypeScript y JavaScript
- **SQLite**: Base de datos relacional
- **CORS**: Middleware para manejar solicitudes cross-origin

## 📋 Prerrequisitos

- Node.js (versión recomendada: 18.x o superior)
- npm (incluido con Node.js)

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
```

2. Instalar dependencias:
```bash
npm install
```

3. Compilar el proyecto:
```bash
npm run build
```

4. Iniciar el servidor:
```bash
npm start
```

## 📁 Estructura del Proyecto

```
src/
├── config/         # Configuraciones de la aplicación
├── controllers/    # Controladores de la API
├── entities/       # Entidades de TypeORM
├── repositories/   # Repositorios personalizados
├── routes/         # Rutas de la API
├── services/       # Lógica de negocio
└── app.ts         # Punto de entrada de la aplicación
```

## 🗄️ Base de Datos

El proyecto utiliza SQLite como base de datos. Las entidades principales son:

### Usuario
- id: number (PK)
- nombres: string
- apellidos: string
- identificacion: string
- correo: string
- rolId: number (FK)

### Role
- Relación Many-to-One con Usuario

## 🔐 Endpoints

La API proporciona los siguientes endpoints:

- `/usuarios`: Gestión de usuarios
- `/roles`: Gestión de roles

## 🛠️ Scripts Disponibles

- `npm run build`: Compila el proyecto TypeScript
- `npm start`: Inicia el servidor en modo producción

## 📦 Dependencias Principales

- express: ^5.1.0
- typeorm: ^0.3.24
- sqlite3: ^5.1.7
- cors: ^2.8.5
- reflect-metadata: ^0.2.2

## 🔧 Dependencias de Desarrollo

- typescript: ^5.8.3
- ts-node: ^10.9.2
- ts-node-dev: ^2.0.0
- @types/express: ^5.0.2
- @types/node: ^22.15.21

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.
