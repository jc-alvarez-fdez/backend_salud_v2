import MiMedicamento from '../models/mi_medicamento_model.js';
import { validationResult } from 'express-validator';

export const getMisMedicamentos = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Obtener todos los usuarios de la base de datos
    const misMedicamentos = await MiMedicamento.findAll();

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Lista de mis medicamentos',
      data: misMedicamentos
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al obtener los medicamentos',
    });
  }
};

export const getMiMedicamentoById = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    // Buscar un usuario por su ID en la base de datos
    const miMedicamento = await MiMedicamento.findByPk(id);
    if (!miMedicamento) {
      return res.status(404).json({
        code: -6,
        message: 'Medicamento no encontrado'
      });
    }

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Detalle del medicamento',
      data: miMedicamento
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al obtener el medicamento'
    });
  }
};

export const addMiMedicamento = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nombre, num_registro, laboratorio, triangulo_seguim, forma_simple, via_administracion, prospecto } = req.body;
    let newMiMedicamento;
    try {
        newMiMedicamento = await MiMedicamento.create({
          nombre: nombre,
          num_registro: num_registro,
          laboratorio: laboratorio,
          triangulo_seguim: triangulo_seguim,
          forma_simple:forma_simple,
          via_administracion:via_administracion,
          prospecto: prospecto,
          paciente_id: req.paciente.id_paciente });
    } catch (error) {
      // Si hay un error de duplicación de clave única (por ejemplo, título duplicado)
      if (error.nombre === 'SequelizeUniqueConstraintError') {
        res.status(400).json({
          code: -61,
          message: 'Nombre de medicamento duplicado'
        });
      }
    }

    if (!newMiMedicamento) {
      return res.status(404).json({
        code: -6,
        message: 'Error al añadir el medicamento'
      });
    }

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Medicamento añadido corrrectamente',
      data: newMiMedicamento
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al añadir el medicamento'
    });
  }
};

export const updateMiMedicamento = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { inicio_envase, contenido_envase } = req.body;

    // Buscar un usuario por su ID en la base de datos
    const miMedicamento = await MiMedicamento.findByPk(id);
    if (!miMedicamento) {
      return res.status(404).json({
        code: -3,
        message: 'Medicamento no encontrado'
      });
    }

    // Actualizar los datos del medicamento 
    miMedicamento.inicio_envase = inicio_envase;
    miMedicamento.contenido_envase = contenido_envase;
    await miMedicamento.save();

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Medicamento actualizado',
      data: miMedicamento
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al actualizar el medicamneto'
    });
  }
};

export const deleteMiMedicamento = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    // Buscar un libro por su ID en la base de datos y eliminarlo
    const deletedMiMedicamento = await MiMedicamento.destroy({ where: { id_miMedicamento: id } });

    // Verificar si el libro fue encontrado y eliminado
    if (!deletedMiMedicamento) {
      return res.status(404).json({
        code: -100,
        message: 'MiMedicamento Not Found'
      });
     }
 
    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Mi medicamento eliminado'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al eliminar el medicamento'
    });
  }
};