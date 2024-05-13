import Administracion from './../models/administracion_model.js';
import { validationResult } from 'express-validator';

export const getAdministraciones = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Obtener todas las administraciones de la base de datos
    const administraciones = await Administracion.findAll();

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Administraciones List',
      data: administraciones
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al obtener las administraciones',
    });
  }
};

export const getAdministracionById = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    // Buscar un usuario por su ID en la base de datos
    const administracion = await Administracion.findByPk(id);
    if (!administracion) {
      return res.status(404).json({
        code: -6,
        message: 'Administracion no encontrada'
      });
    }

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Administracion Detail',
      data: administracion
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al obtener la administracion'
    });
  }
};

export const addAdministracion = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { dosis, frecuencia } = req.body;
    let newAdministracion;
    try {
      newAdministracion = await Administracion.create({ dosis: dosis, frecuencia: frecuencia, medicamento_id: req.medicamento.id_medicamento});
    } catch (error) {
      // Si hay un error de duplicación de clave única (por ejemplo, título duplicado)
      if (error.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json({
          code: -61,
          message: 'La administracion ya existe'
        });
      }
    }

    if (!newAdministracion) {
      return res.status(404).json({
        code: -6,
        message: 'Error al añadir una administracion'
      });
    }

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Administracion añadida correctamente',
      data: newAdministracion
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al añadir la administracion'
    });
  }
};

export const updateAdministracion = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { dosis, frecuencia, ayunas, desayuno, media_manyana, pre_comida, comida, post_comida, media_tarde, merienda, pre_cena, cena, post_cena, acostarse } = req.body;

    // Buscar una administración por su ID en la base de datos
    const administracion = await Administracion.findByPk(id);
    if (!administracion) {
      return res.status(404).json({
        code: -3,
        message: 'Administracion no encontrado'
      });
    }

    // Actualizar los datos de la administracion
    administracion.dosis = dosis;
    administracion.frecuencia = frecuencia;
    administracion.ayunas = ayunas;
    administracion.desayuno = desayuno;
    administracion.media_manyana = media_manyana;
    administracion.pre_comida = pre_comida;
    administracion.comida = comida;
    administracion.post_comida = post_comida;
    administracion.media_tarde = media_tarde;
    administracion.merienda = merienda;
    administracion.pre_cena = pre_cena;
    administracion.cena = cena;
    administracion.post_cena = post_cena;
    administracion.acostarse = acostarse;

    await administracion.save();

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'El administracion se ha actualizado',
      data: administracion
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al actualizar el administracion'
    });
  }
};

export const deleteAdministracion = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    // Buscar un administracion por su ID en la base de datos y eliminarlo
    const deletedAdministracion = await Administracion.destroy({ where: { id_administracion: id } });

    // Verificar si la administracion fue encontrada y eliminada
    if (!deletedAdministracion) {
      return res.status(404).json({
        code: -100,
        message: 'Administracion no encontrada'
      });
     }
 
    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'La administracion se ha eliminado'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al eliminar la administracion'
    });
  }
};