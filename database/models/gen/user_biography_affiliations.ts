import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { time_line, time_lineId } from './time_line';
import type { user_biography, user_biographyId } from './user_biography';

export interface user_biography_affiliationsAttributes {
  user_biography_id: number;
  affiliations_id: number;
}

export type user_biography_affiliationsPk = "user_biography_id" | "affiliations_id";
export type user_biography_affiliationsId = user_biography_affiliations[user_biography_affiliationsPk];
export type user_biography_affiliationsCreationAttributes = user_biography_affiliationsAttributes;

export class user_biography_affiliations extends Model<user_biography_affiliationsAttributes, user_biography_affiliationsCreationAttributes> implements user_biography_affiliationsAttributes {
  user_biography_id!: number;
  affiliations_id!: number;

  // user_biography_affiliations belongsTo time_line via affiliations_id
  affiliation!: time_line;
  getAffiliation!: Sequelize.BelongsToGetAssociationMixin<time_line>;
  setAffiliation!: Sequelize.BelongsToSetAssociationMixin<time_line, time_lineId>;
  createAffiliation!: Sequelize.BelongsToCreateAssociationMixin<time_line>;
  // user_biography_affiliations belongsTo user_biography via user_biography_id
  user_biography!: user_biography;
  getUser_biography!: Sequelize.BelongsToGetAssociationMixin<user_biography>;
  setUser_biography!: Sequelize.BelongsToSetAssociationMixin<user_biography, user_biographyId>;
  createUser_biography!: Sequelize.BelongsToCreateAssociationMixin<user_biography>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_biography_affiliations {
    return user_biography_affiliations.init({
    user_biography_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_biography',
        key: 'id'
      }
    },
    affiliations_id: {
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
    tableName: 'user_biography_affiliations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_biography_id" },
          { name: "affiliations_id" },
        ]
      },
      {
        name: "UK_ghmkmixf5n77q84ivw89txa1v",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "affiliations_id" },
        ]
      },
    ]
  });
  }
}
