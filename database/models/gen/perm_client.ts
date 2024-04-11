import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface perm_clientAttributes {
  id: string;
  name?: string;
  secret?: string;
  user_id?: string;
}

export type perm_clientPk = "id";
export type perm_clientId = perm_client[perm_clientPk];
export type perm_clientOptionalAttributes = "name" | "secret" | "user_id";
export type perm_clientCreationAttributes = Optional<perm_clientAttributes, perm_clientOptionalAttributes>;

export class perm_client extends Model<perm_clientAttributes, perm_clientCreationAttributes> implements perm_clientAttributes {
  id!: string;
  name?: string;
  secret?: string;
  user_id?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof perm_client {
    return perm_client.init({
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    secret: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'perm_client',
    timestamps: false,
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
