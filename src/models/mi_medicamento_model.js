import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import Paciente from './paciente_model.js'

const MiMedicamento = sequelize.define('02_medicamentos', {

  id_medicamento: {
    type: DataTypes.INTEGER(8).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  paciente_id: {
    type: DataTypes.INTEGER(8).UNSIGNED
  },
  nombre: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  num_registro: {
    type: DataTypes.INTEGER(25),
    allowNull: false,
  },
  laboratorio: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  triangulo_seguim: {
    type: DataTypes.STRING(12),
    allowNull: false,
  },
  forma_simple: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  via_administracion: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  prospecto: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  inicio_envase: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  contenido_envase: {
    type: DataTypes.NUMBER(4),
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
},{
  indexes: [{ unique: true, fields: ['num_registro'] }],
  timestamps: false, // Activa la creación automática de createdAt y updatedAt
  //updatedAt: 'updated_at',
  //createdAt: 'created_at'
});
Paciente.hasMany(MiMedicamento, { foreignKey: 'paciente_id' });
MiMedicamento.belongsTo(Paciente, { foreignKey: 'paciente_id' });

export default MiMedicamento;