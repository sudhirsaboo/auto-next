import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { time_line, time_lineId } from './time_line';
import type { user_biography, user_biographyId } from './user_biography';

export interface user_biography_educationAttributes {
  user_biography_id: number;
  education_id: number;
}

export type user_biography_educationPk = "user_biography_id" | "education_id";
export type user_biography_educationId = user_biography_education[user_biography_educationPk];
export type user_biography_educationCreationAttributes = user_biography_educationAttributes;

export class user_biography_education extends Model<user_biography_educationAttributes, user_biography_educationCreationAttributes> implements user_biography_educationAttributes {
  user_biography_id!: number;
  education_id!: number;

  // user_biography_education belongsTo time_line via education_id
  education!: time_line;
  getEducation!: Sequelize.BelongsToGetAssociationMixin<time_line>;
  setEducation!: Sequelize.BelongsToSetAssociationMixin<time_line, time_lineId>;
  createEducation!: Sequelize.BelongsToCreateAssociationMixin<time_line>;
  // user_biography_education belongsTo user_biography via user_biography_id
  user_biography!: user_biography;
  getUser_biography!: Sequelize.BelongsToGetAssociationMixin<user_biography>;
  setUser_biography!: Sequelize.BelongsToSetAssociationMixin<user_biography, user_biographyId>;
  createUser_biography!: Sequelize.BelongsToCreateAssociationMixin<user_biography>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_biography_education {
    return user_biography_education.init({
    user_biography_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_biography',
        key: 'id'
      }
    },
    education_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'time_line',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_biography_education',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_biography_id" },
          { name: "education_id" },
        ]
      },
      {
        name: "UK_3uh7vsut20kpvqyr3v3rpau3u",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "education_id" },
        ]
      },
    ]
  });
  }
}
