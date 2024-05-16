import Paciente from './models/paciente_model.js';
import Book from './models/book_model.js';
import Administracion from './models/administracion_model.js';
import MiMedicamento from './models/mi_medicamento_model.js';
import TomaDiaria from './models/toma_diaria_model.js';
import MotivoPerdida from './models/motivo_perdida_model.js';

const insertInitialPacienteData = async () => {

  const pacienteData = [
    // { email: 'ismael.academy@gmail.com', password: '$2b$10$tXrqo7VdSPCLAsIUhrVsYejYeMt9FLo9J4OchgCKwuDvpeDK6Xf1q',name: 'Ismael', }, //pass: ismael123
    // { email: 'laura@hotmail.com', password: '$2b$10$tXrqo7VdSPCLAsIUhrVsYejYeMt9FLo9J4OchgCKwuDvpeDK6Xf1q', name: 'Laura' },
    // { email: 'maria@hotmail.com', password: '$2b$10$tXrqo7VdSPCLAsIUhrVsYejYeMt9FLo9J4OchgCKwuDvpeDK6Xf1q', name: 'Maria', surname: 'kale' }
  ];
  // Insertar datos con opción ignoreDuplicates
  // Para actualizar todas las filas: updateOnDuplicate: Object.keys(User.rawAttributes)
  await Paciente.bulkCreate(pacienteData, { ignoreDuplicates: true });
  
  const bookData = [
    // { title: 'TituloA', year: 1955 },
    // { title: 'TituloB', year: 1988 },
    // { title: 'TituloC', year: 1475, user_id: 2 }
  ];
  // Insertar datos con opción ignoreDuplicates
  await Book.bulkCreate(bookData, { ignoreDuplicates: true });


  const miMedicamentoData = [
  //  { nombre: "nombre",	num_registro: 23,	laboratorio: 'laboratorio',	triangulo_seguim: "false",	forma_simple: 'comprimido',	via_administracion: 'oral',	prospecto: 'prospecto' }
  ];
  // Insertar datos con opción ignoreDuplicates
  // Para actualizar todas las filas: updateOnDuplicate: Object.keys(Paciente.rawAttributes)
  await MiMedicamento.bulkCreate(miMedicamentoData, { ignoreDuplicates: true });

const administracionData = [
    //{ dosis: 1, frecuencia: 24 },
  ];
  // Insertar datos con opción ignoreDuplicates
  await Administracion.bulkCreate(administracionData, { ignoreDuplicates: true });

  const tomaDiariaData = [
   //{ fecha_tto: 2024/12/23, toma_realizada: false, toma_retrasada: false, toma_perdida: false },
  ];
  // Insertar datos con opción ignoreDuplicates
  await TomaDiaria.bulkCreate(tomaDiariaData, { ignoreDuplicates: true });

  const motivoPerdidaData = [
    // { olvido: false; },
   ];
   // Insertar datos con opción ignoreDuplicates
   await MotivoPerdida.bulkCreate(motivoPerdidaData, { ignoreDuplicates: true });
}




export { insertInitialPacienteData };
