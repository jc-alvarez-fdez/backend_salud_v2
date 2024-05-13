import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import TomaDiaria from './toma_diaria_model.js';

const MotivoPerdida = sequelize.define('motivos_perdidas', {

  id_motivo_perdida: {
    type: DataTypes.INTEGER(8),
    primaryKey: true,
    autoIncrement: true
  },
  toma_diaria_id: {
    type: DataTypes.INTEGER(8)
  },
  olvido: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
    allowNull: true
  },
  no_disponible: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
    allowNull: true
  },
  agotado: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  malestar: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  dificultad: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  coste: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  otros: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: 1
  }
},
{
  //indexes: [{ unique: true, fields: ['num_registro'] }],
  timestamps: false, // Activa la creación automática de createdAt y updatedAt
  updatedAt: 'updated_at',
  createdAt: 'created_at'
});
MotivoPerdida.hasMany(TomaDiaria, { foreignKey: 'toma_diaria_id' });
TomaDiaria.belongsTo(MotivoPerdida, { foreignKey: 'toma_diaria_id' });

export default MotivoPerdida;