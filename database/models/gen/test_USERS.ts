import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { test_ADDRESSES, test_ADDRESSESId } from './test_ADDRESSES';

export interface test_USERSAttributes {
  ID: number;
  NAME: string;
  EMAIL?: string;
  PHONE?: number;
  ADDRESS: number;
}

export type test_USERSPk = "ID";
export type test_USERSId = test_USERS[test_USERSPk];
export type test_USERSOptionalAttributes = "EMAIL" | "PHONE";
export type test_USERSCreationAttributes = Optional<test_USERSAttributes, test_USERSOptionalAttributes>;

export class test_USERS extends Model<test_USERSAttributes, test_USERSCreationAttributes> implements test_USERSAttributes {
  ID!: number;
  NAME!: string;
  EMAIL?: string;
  PHONE?: number;
  ADDRESS!: number;

  // test_USERS belongsTo test_ADDRESSES via ADDRESS
  ADDRESS_test_ADDRESS!: test_ADDRESSES;
  getADDRESS_test_ADDRESS!: Sequelize.BelongsToGetAssociationMixin<test_ADDRESSES>;
  setADDRESS_test_ADDRESS!: Sequelize.BelongsToSetAssociationMixin<test_ADDRESSES, test_ADDRESSESId>;
  createADDRESS_test_ADDRESS!: Sequelize.BelongsToCreateAssociationMixin<test_ADDRESSES>;

  static initModel(sequelize: Sequelize.Sequelize): typeof test_USERS {
    return test_USERS.init({
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PHONE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ADDRESS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'test_ADDRESSES',
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 'test_USERS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "USERS_FK",
        using: "BTREE",
        fields: [
          { name: "ADDRESS" },
        ]
      },
    ]
  });
  }
}
