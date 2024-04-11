import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface perm_oauth_tokenAttributes {
  id: number;
  client_id?: string;
  user_id?: string;
  value?: string;
}

export type perm_oauth_tokenPk = "id";
export type perm_oauth_tokenId = perm_oauth_token[perm_oauth_tokenPk];
export type perm_oauth_tokenOptionalAttributes = "client_id" | "user_id" | "value";
export type perm_oauth_tokenCreationAttributes = Optional<perm_oauth_tokenAttributes, perm_oauth_tokenOptionalAttributes>;

export class perm_oauth_token extends Model<perm_oauth_tokenAttributes, perm_oauth_tokenCreationAttributes> implements perm_oauth_tokenAttributes {
  id!: number;
  client_id?: string;
  user_id?: string;
  value?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof perm_oauth_token {
    return perm_oauth_token.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    client_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'perm_oauth_token',
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
