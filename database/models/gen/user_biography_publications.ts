import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { time_line, time_lineId } from './time_line';
import type { user_biography, user_biographyId } from './user_biography';

export interface user_biography_publicationsAttributes {
  user_biography_id: number;
  publications_id: number;
}

export type user_biography_publicationsPk = "user_biography_id" | "publications_id";
export type user_biography_publicationsId = user_biography_publications[user_biography_publicationsPk];
export type user_biography_publicationsCreationAttributes = user_biography_publicationsAttributes;

export class user_biography_publications extends Model<user_biography_publicationsAttributes, user_biography_publicationsCreationAttributes> implements user_biography_publicationsAttributes {
  user_biography_id!: number;
  publications_id!: number;

  // user_biography_publications belongsTo time_line via publications_id
  publication!: time_line;
  getPublication!: Sequelize.BelongsToGetAssociationMixin<time_line>;
  setPublication!: Sequelize.BelongsToSetAssociationMixin<time_line, time_lineId>;
  createPublication!: Sequelize.BelongsToCreateAssociationMixin<time_line>;
  // user_biography_publications belongsTo user_biography via user_biography_id
  user_biography!: user_biography;
  getUser_biography!: Sequelize.BelongsToGetAssociationMixin<user_biography>;
  setUser_biography!: Sequelize.BelongsToSetAssociationMixin<user_biography, user_biographyId>;
  createUser_biography!: Sequelize.BelongsToCreateAssociationMixin<user_biography>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_biography_publications {
    return user_biography_publications.init({
    user_biography_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_biography',
        key: 'id'
      }
    },
    publications_id: {
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
    tableName: 'user_biography_publications',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_biography_id" },
          { name: "publications_id" },
        ]
      },
      {
        name: "UK_9ym5j2jwiyamgu94ojqbavlmp",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "publications_id" },
        ]
      },
    ]
  });
  }
}
