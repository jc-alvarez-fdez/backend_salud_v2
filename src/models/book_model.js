import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import Paciente from './paciente_model.js';

const Book = sequelize.define('books', {
  id_book: {
    type: DataTypes.INTEGER(8).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  paciente_id: {
    type: DataTypes.INTEGER(8).UNSIGNED
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER(4),
    //allowNull defaults to true
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: 1
  }
},
{
  indexes: [{ unique: true, fields: ['title'] }],
  timestamps: true, // Activa la creación automática de createdAt y updatedAt
  updatedAt: 'updated_at',
  createdAt: 'created_at'
});
Paciente.hasMany(Book, { foreignKey: 'paciente_id' });
Book.belongsTo(Paciente, { foreignKey: 'paciente_id' });
//Ten en cuenta que hasMany solo establece la relación desde el modelo principal hacia el secundario.
//En algunos casos, eso puede ser suficiente si no necesitas navegar desde el secundario hacia el principal.
//Sin embargo, si necesitas la relación inversa(por ejemplo, obtener el usuario al que pertenece un libro), entonces necesitarás belongsTo.

export default Book;