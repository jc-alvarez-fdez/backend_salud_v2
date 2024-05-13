// src/routes/userRoutes.js
import { Router } from 'express';
import { getMisMedicamentos, getMiMedicamentoById, addMiMedicamento, updateMiMedicamento, deleteMiMedicamento } from '../controllers/mi_medicamento_controller.js';
import authenticateToken from '../middlewares/authenticate_token.js';
import { miMedicamentoValidator } from '../validations/mi_medicamento_validation.js';
import { idValidator } from '../validations/generic_validation.js'

const misMedicamentosRouter = Router();

// Rutas para obtener y modificar los datos de los usuarios
misMedicamentosRouter.get('/', authenticateToken, getMisMedicamentos);
misMedicamentosRouter.get('/:id', authenticateToken, idValidator, getMiMedicamentoById);
misMedicamentosRouter.post('/', authenticateToken, miMedicamentoValidator, addMiMedicamento);
misMedicamentosRouter.put('/:id', authenticateToken, idValidator, miMedicamentoValidator, updateMiMedicamento);
misMedicamentosRouter.delete('/:id', authenticateToken, idValidator, deleteMiMedicamento);

export default misMedicamentosRouter;

