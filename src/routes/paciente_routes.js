// src/routes/userRoutes.js
import { Router } from 'express';
import { getPacienteById, uploadPhoto, getListFiles, downloadPhoto } from '../controllers/paciente_controller.js';
import authenticateToken from '../middlewares/authenticate_token.js';
import { idValidator, nameValidator } from '../validations/generic_validation.js'


const router = Router();

// Rutas para obtener y modificar los datos de los usuarios
router.get('/',(req,res)=>{
    res.send("Hello World form NodeJS express.");
  });
router.get('/:id', authenticateToken, idValidator, getPacienteById);
router.post("/upload", authenticateToken, uploadPhoto);
router.get("/files",  authenticateToken, getListFiles);
router.get("/files/:name", authenticateToken, nameValidator, downloadPhoto);

export default router;
