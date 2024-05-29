import Paciente from '../models/paciente_model.js';
import { validationResult } from 'express-validator';

export const getPacientes = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Obtener todos los pacientes de la base de datos
    const pacientes = await Paciente.findAll();

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Lista de pacientes',
      data: pacientes
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al obtener la lista de pacientes',
    });
  }
};

export const getPacienteById = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    // Buscar un medicamento por su ID en la base de datos
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
      return res.status(404).json({
        code: -6,
        message: 'Paciente no encontrado'
      });
    }

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Detalle del paciente',
      data: paciente
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al obtener el paciente'
    });
  }
};



// Añadir paciente (se realiza mediante el registro)
export const addPaciente = async (req, res) => {
  const { body } = req;
  try {
      await Paciente.create(body);

      res.json({
          msg: 'El paciente se ha añadido',
          body
      });

  } catch (error) {
      console.log(error);
      res.json({
          msg: 'Ha ocurrido un error, póngase en contacto con soporte',
      });
  }
}   


export const updatePaciente = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { nombre, apellidos, fecha_nacimiento, dni,telefono, domicilio, cp, poblacion, provincia } = req.body;

    // Buscar un paciente por su ID en la base de datos
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
      return res.status(404).json({
        code: -3,
        message: 'Paciente no encontrado'
      });
    }

    // Actualizar los datos del paciente 
    paciente.nombre = nombre;
    paciente.apellidos = apellidos;
    paciente.fecha_nacimiento = fecha_nacimiento;
    paciente.dni = dni;
    paciente.telefono = telefono;
    paciente.domicilio = domicilio;
    paciente.cp = cp;
    paciente.poblacion = poblacion;
    paciente.provincia = provincia;
    await paciente.save();

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Paciente actualizado',
      data: paciente
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al actualizar el paciente'
    });
  }
};

export const deletePaciente = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    // Buscar un paciente por su ID en la base de datos y eliminarlo
    const deletedPaciente = await Paciente.destroy({ where: { id_paciente: id } });

    // Verificar si el paciente fue encontrado y eliminado
    if (!deletedPaciente) {
      return res.status(404).json({
        code: -100,
        message: 'Paciente no encontrado'
      });
     }
 
    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Paciente eliminado'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al eliminar el paciente'
    });
  }
};