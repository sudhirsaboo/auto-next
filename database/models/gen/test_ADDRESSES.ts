import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { test_USERS, test_USERSId } from './test_USERS';

export interface test_ADDRESSESAttributes {
  ID: number;
  STREET: string;
  CITY?: string;
  PIN?: number;
}

export type test_ADDRESSESPk = "ID";
export type test_ADDRESSESId = test_ADDRESSES[test_ADDRESSESPk];
export type test_ADDRESSESOptionalAttributes = "CITY" | "PIN";
export type test_ADDRESSESCreationAttributes = Optional<test_ADDRESSESAttributes, test_ADDRESSESOptionalAttributes>;

export class test_ADDRESSES extends Model<test_ADDRESSESAttributes, test_ADDRESSESCreationAttributes> implements test_ADDRESSESAttributes {
  ID!: number;
  STREET!: string;
  CITY?: string;
  PIN?: number;

  // test_ADDRESSES hasMany test_USERS via ADDRESS
  test_USERs!: test_USERS[];
  getTest_USERs!: Sequelize.HasManyGetAssociationsMixin<test_USERS>;
  setTest_USERs!: Sequelize.HasManySetAssociationsMixin<test_USERS, test_USERSId>;
  addTest_USER!: Sequelize.HasManyAddAssociationMixin<test_USERS, test_USERSId>;
  addTest_USERs!: Sequelize.HasManyAddAssociationsMixin<test_USERS, test_USERSId>;
  createTest_USER!: Sequelize.HasManyCreateAssociationMixin<test_USERS>;
  removeTest_USER!: Sequelize.HasManyRemoveAssociationMixin<test_USERS, test_USERSId>;
  removeTest_USERs!: Sequelize.HasManyRemoveAssociationsMixin<test_USERS, test_USERSId>;
  hasTest_USER!: Sequelize.HasManyHasAssociationMixin<test_USERS, test_USERSId>;
  hasTest_USERs!: Sequelize.HasManyHasAssociationsMixin<test_USERS, test_USERSId>;
  countTest_USERs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof test_ADDRESSES {
    return test_ADDRESSES.init({
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    STREET: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    CITY: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PIN: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'test_ADDRESSES',
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
    ]
  });
  }
}
