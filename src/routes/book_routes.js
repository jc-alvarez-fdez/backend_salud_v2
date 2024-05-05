// src/routes/userRoutes.js
import { Router } from 'express';
import { getBooks, getBookById, addBook, updateBook, deleteBook } from '../controllers/book_controller.js';
import authenticateToken from '../middlewares/authenticate_token.js';
import { bookValidator } from '../validations/book_validation.js';
import { idValidator } from '../validations/generic_validation.js'

const bookRouter = Router();

// Rutas para obtener y modificar los datos de los usuarios
bookRouter.get('/', authenticateToken, getBooks);
bookRouter.get('/:id', authenticateToken, idValidator, getBookById);
bookRouter.post('/', authenticateToken, bookValidator, addBook);
bookRouter.put('/:id', authenticateToken, idValidator, bookValidator, updateBook);
bookRouter.delete('/:id', authenticateToken, idValidator, deleteBook);

export default bookRouter;
