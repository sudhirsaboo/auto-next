import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface perm_oauth_codeAttributes {
  id: number;
  client_id?: string;
  redirect_uri?: string;
  user_id?: string;
  value?: string;
}

export type perm_oauth_codePk = "id";
export type perm_oauth_codeId = perm_oauth_code[perm_oauth_codePk];
export type perm_oauth_codeOptionalAttributes = "client_id" | "redirect_uri" | "user_id" | "value";
export type perm_oauth_codeCreationAttributes = Optional<perm_oauth_codeAttributes, perm_oauth_codeOptionalAttributes>;

export class perm_oauth_code extends Model<perm_oauth_codeAttributes, perm_oauth_codeCreationAttributes> implements perm_oauth_codeAttributes {
  id!: number;
  client_id?: string;
  redirect_uri?: string;
  user_id?: string;
  value?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof perm_oauth_code {
    return perm_oauth_code.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    client_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    redirect_uri: {
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
    tableName: 'perm_oauth_code',
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
