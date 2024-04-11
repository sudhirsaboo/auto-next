import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { time_line, time_lineId } from './time_line';
import type { user_biography, user_biographyId } from './user_biography';

export interface user_biography_exhibitionsAttributes {
  user_biography_id: number;
  exhibitions_id: number;
}

export type user_biography_exhibitionsPk = "user_biography_id" | "exhibitions_id";
export type user_biography_exhibitionsId = user_biography_exhibitions[user_biography_exhibitionsPk];
export type user_biography_exhibitionsCreationAttributes = user_biography_exhibitionsAttributes;

export class user_biography_exhibitions extends Model<user_biography_exhibitionsAttributes, user_biography_exhibitionsCreationAttributes> implements user_biography_exhibitionsAttributes {
  user_biography_id!: number;
  exhibitions_id!: number;

  // user_biography_exhibitions belongsTo time_line via exhibitions_id
  exhibition!: time_line;
  getExhibition!: Sequelize.BelongsToGetAssociationMixin<time_line>;
  setExhibition!: Sequelize.BelongsToSetAssociationMixin<time_line, time_lineId>;
  createExhibition!: Sequelize.BelongsToCreateAssociationMixin<time_line>;
  // user_biography_exhibitions belongsTo user_biography via user_biography_id
  user_biography!: user_biography;
  getUser_biography!: Sequelize.BelongsToGetAssociationMixin<user_biography>;
  setUser_biography!: Sequelize.BelongsToSetAssociationMixin<user_biography, user_biographyId>;
  createUser_biography!: Sequelize.BelongsToCreateAssociationMixin<user_biography>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_biography_exhibitions {
    return user_biography_exhibitions.init({
    user_biography_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_biography',
        key: 'id'
      }
    },
    exhibitions_id: {
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
    tableName: 'user_biography_exhibitions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_biography_id" },
          { name: "exhibitions_id" },
        ]
      },
      {
        name: "UK_giujl0yk118u2gqiyk7llp2hr",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "exhibitions_id" },
        ]
      },
    ]
  });
  }
}
