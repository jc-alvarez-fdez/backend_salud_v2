import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import Administracion from './administracion_model.js'

const TomaDiaria = sequelize.define('tomas_diarias', {

  id_toma_diaria: {
    type: DataTypes.INTEGER(8),
    primaryKey: true,
    autoIncrement: true
  },
  administracion_id : {
    type: DataTypes.INTEGER(8)
  },
  fecha_tto: {
    type: DataTypes.DATE,
    allowNull: false
  },
  toma_realizada: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
    allowNull: true
  },
  toma_retrasada: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
    allowNull: true
  },
  toma_perdida: {
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
TomaDiaria.hasMany(Administracion, { foreignKey: 'administracion_id' });
Administracion.belongsTo(TomaDiaria, { foreignKey: 'administracion_id' });

export default TomaDiaria;