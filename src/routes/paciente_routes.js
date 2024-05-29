// src/routes/userRoutes.js
import { Router } from 'express';
import { getPacientes, getPacienteById, updatePaciente, deletePaciente  } from '../controllers/paciente_controller.js';
import authenticateToken from '../middlewares/authenticate_token.js';
import { idValidator } from '../validations/generic_validation.js'
import { pacienteValidator } from '../validations/paciente_validation.js'

const pacienteRouter = Router();

// Rutas para obtener y modificar los datos de los pacientes

pacienteRouter.get('/', authenticateToken, getPacientes); // Listado pacientes
pacienteRouter.get('/:id', authenticateToken, idValidator, getPacienteById); // Paciente por ID
pacienteRouter.put('/:id', authenticateToken, idValidator, pacienteValidator, updatePaciente); // Modificar datos del paciente
pacienteRouter.delete('/:id', authenticateToken, idValidator, deletePaciente); // eliminar paciente

export default pacienteRouter;
