import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { time_line, time_lineId } from './time_line';
import type { user_biography, user_biographyId } from './user_biography';

export interface user_biography_awards_and_honorsAttributes {
  user_biography_id: number;
  awards_and_honors_id: number;
}

export type user_biography_awards_and_honorsPk = "user_biography_id" | "awards_and_honors_id";
export type user_biography_awards_and_honorsId = user_biography_awards_and_honors[user_biography_awards_and_honorsPk];
export type user_biography_awards_and_honorsCreationAttributes = user_biography_awards_and_honorsAttributes;

export class user_biography_awards_and_honors extends Model<user_biography_awards_and_honorsAttributes, user_biography_awards_and_honorsCreationAttributes> implements user_biography_awards_and_honorsAttributes {
  user_biography_id!: number;
  awards_and_honors_id!: number;

  // user_biography_awards_and_honors belongsTo time_line via awards_and_honors_id
  awards_and_honor!: time_line;
  getAwards_and_honor!: Sequelize.BelongsToGetAssociationMixin<time_line>;
  setAwards_and_honor!: Sequelize.BelongsToSetAssociationMixin<time_line, time_lineId>;
  createAwards_and_honor!: Sequelize.BelongsToCreateAssociationMixin<time_line>;
  // user_biography_awards_and_honors belongsTo user_biography via user_biography_id
  user_biography!: user_biography;
  getUser_biography!: Sequelize.BelongsToGetAssociationMixin<user_biography>;
  setUser_biography!: Sequelize.BelongsToSetAssociationMixin<user_biography, user_biographyId>;
  createUser_biography!: Sequelize.BelongsToCreateAssociationMixin<user_biography>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_biography_awards_and_honors {
    return user_biography_awards_and_honors.init({
    user_biography_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_biography',
        key: 'id'
      }
    },
    awards_and_honors_id: {
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
    tableName: 'user_biography_awards_and_honors',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_biography_id" },
          { name: "awards_and_honors_id" },
        ]
      },
      {
        name: "UK_tatby3voaelnn3l6mk02ldd5u",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "awards_and_honors_id" },
        ]
      },
    ]
  });
  }
}
