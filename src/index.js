// app.js
import express from 'express';
import cookieParser from "cookie-parser";
import cors from 'cors'; //para poder hacer puts, y tal desde el cliente al servidor
import authRouter from './routes/auth_routes.js';
import bookRouter from './routes/book_routes.js';
import pacienteRouter from './routes/paciente_routes.js'
import misMedicamentosRouter from './routes/mis_medicamentos_routes.js';
import { testConnection } from './db.js';
import dotenv from 'dotenv';
import { insertInitialPacienteData } from './start_data.js';
import administracionesRouter from './routes/administracion_routes.js';



dotenv.config();

const app = express();

// Configura el middleware CORS para que pueda recibir solicitudes de POST, PUT, DELETE, UPDATE, etc.
app.use(cors({
  credentials: true,
  origin: 'http://localhost:4200',
}));

//header and populate req.cookies with an object keyed by the cookie names
app.use(cookieParser());

// Middleware para analizar el cuerpo de las solicitudes con formato JSON
app.use(express.json());

// Middleware para analizar el cuerpo de las solicitudes con datos de formulario
app.use(express.urlencoded({ extended: true })); // Para analizar datos de formularios en el cuerpo de la solicitud

await testConnection();
await insertInitialPacienteData();

// Configurar rutas
app.use('/auth', authRouter);
app.use('/paciente', pacienteRouter);
app.use('/book', bookRouter);
app.use('/mis_medicamentos', misMedicamentosRouter);
app.use('/administraciones', administracionesRouter);

// Iniciar el servidor
app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
