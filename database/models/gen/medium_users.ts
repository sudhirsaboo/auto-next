import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface medium_usersAttributes {
  id: number;
  firstName?: string;
  lastName?: string;
  status?: number;
  createdAt: Date;
  updatedAt: Date;
}

export type medium_usersPk = "id";
export type medium_usersId = medium_users[medium_usersPk];
export type medium_usersOptionalAttributes = "id" | "firstName" | "lastName" | "status" | "createdAt" | "updatedAt";
export type medium_usersCreationAttributes = Optional<medium_usersAttributes, medium_usersOptionalAttributes>;

export class medium_users extends Model<medium_usersAttributes, medium_usersCreationAttributes> implements medium_usersAttributes {
  id!: number;
  firstName?: string;
  lastName?: string;
  status?: number;
  createdAt!: Date;
  updatedAt!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof medium_users {
    return medium_users.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'medium_users',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
