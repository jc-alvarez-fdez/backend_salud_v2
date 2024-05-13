import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import Paciente from './paciente_model.js'

const MiMedicamento = sequelize.define('mis_medicamentos', {

  id_medicamento: {
    type: DataTypes.INTEGER(8).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  paciente_id: {
    type: DataTypes.INTEGER(8).UNSIGNED,
  },
  nombre: {
    type: DataTypes.STRING(300),
    allowNull: true,
  },
  num_registro: {
    type: DataTypes.INTEGER(25),
    allowNull: true,
  },
  laboratorio: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  triangulo_seguim: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
    allowNull: true,
  },
  forma_simple: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  via_administracion: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  prospecto: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  inicio_envase: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  contenido_envase: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  imagen: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  consejos: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: 1,
  },
},
{
  indexes: [{ unique: true, fields: ['num_registro'] }],
  timestamps: true, // Activa la creación automática de createdAt y updatedAt
  updatedAt: 'updated_at',
  createdAt: 'created_at',
});
Paciente.hasMany(MiMedicamento, { foreignKey: 'paciente_id' });
MiMedicamento.belongsTo(Paciente, { foreignKey: 'paciente_id' });

export default MiMedicamento;