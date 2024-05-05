// src/routes/userRoutes.js
import { Router } from 'express';
import { getBooks, getBookById, addBook, updateBook, deleteBook } from '../controllers/bookController.js';
import authenticateToken from '../middlewares/authenticateToken.js';
import { bookValidator } from '../validations/book.Validation.js';
import { idValidator } from '../validations/generic.Validation.js'

const router = Router();

// Rutas para obtener y modificar los datos de los usuarios
router.get('/', authenticateToken, getBooks);
router.get('/:id', authenticateToken, idValidator, getBookById);
router.post('/', authenticateToken, bookValidator, addBook);
router.put('/:id', authenticateToken, idValidator, bookValidator, updateBook);
router.delete('/:id', authenticateToken, idValidator, deleteBook);

export default router;
