import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const Paciente = sequelize.define('01_pacientes', {

  id_paciente: {
    type: DataTypes.INTEGER(8).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  apellidos: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  dni: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  telefono: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  domicilio: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  cp: {
    type: DataTypes.STRING(5),
    allowNull: true,
  },
  poblacion: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  provincia: {
    type: DataTypes.STRING(40),
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
},{
  indexes: [{ unique: true, fields: ['email', 'dni'] }],
  timestamps: true, // Activa la creación automática de createdAt y updatedAt
  createdAt: 'created_at',
  updatedAt: 'updated_at'
  
});

export default Paciente;