import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_address, ent_addressId } from './ent_address';
import type { ent_bill_add, ent_bill_addId } from './ent_bill_add';
import type { ent_order_point, ent_order_pointId } from './ent_order_point';
import type { ent_org, ent_orgId } from './ent_org';
import type { user, userId } from './user';

export interface ent_contactAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  birthday?: Date;
  email?: string;
  fax?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  address_id?: number;
}

export type ent_contactPk = "id";
export type ent_contactId = ent_contact[ent_contactPk];
export type ent_contactOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "birthday" | "email" | "fax" | "first_name" | "last_name" | "phone" | "created_by_id" | "last_modified_by_id" | "organization_id" | "address_id";
export type ent_contactCreationAttributes = Optional<ent_contactAttributes, ent_contactOptionalAttributes>;

export class ent_contact extends Model<ent_contactAttributes, ent_contactCreationAttributes> implements ent_contactAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  birthday?: Date;
  email?: string;
  fax?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  address_id?: number;

  // ent_contact belongsTo ent_address via address_id
  address!: ent_address;
  getAddress!: Sequelize.BelongsToGetAssociationMixin<ent_address>;
  setAddress!: Sequelize.BelongsToSetAssociationMixin<ent_address, ent_addressId>;
  createAddress!: Sequelize.BelongsToCreateAssociationMixin<ent_address>;
  // ent_contact hasMany ent_bill_add via contact_id
  ent_bill_adds!: ent_bill_add[];
  getEnt_bill_adds!: Sequelize.HasManyGetAssociationsMixin<ent_bill_add>;
  setEnt_bill_adds!: Sequelize.HasManySetAssociationsMixin<ent_bill_add, ent_bill_addId>;
  addEnt_bill_add!: Sequelize.HasManyAddAssociationMixin<ent_bill_add, ent_bill_addId>;
  addEnt_bill_adds!: Sequelize.HasManyAddAssociationsMixin<ent_bill_add, ent_bill_addId>;
  createEnt_bill_add!: Sequelize.HasManyCreateAssociationMixin<ent_bill_add>;
  removeEnt_bill_add!: Sequelize.HasManyRemoveAssociationMixin<ent_bill_add, ent_bill_addId>;
  removeEnt_bill_adds!: Sequelize.HasManyRemoveAssociationsMixin<ent_bill_add, ent_bill_addId>;
  hasEnt_bill_add!: Sequelize.HasManyHasAssociationMixin<ent_bill_add, ent_bill_addId>;
  hasEnt_bill_adds!: Sequelize.HasManyHasAssociationsMixin<ent_bill_add, ent_bill_addId>;
  countEnt_bill_adds!: Sequelize.HasManyCountAssociationsMixin;
  // ent_contact hasMany ent_order_point via contact_id
  ent_order_points!: ent_order_point[];
  getEnt_order_points!: Sequelize.HasManyGetAssociationsMixin<ent_order_point>;
  setEnt_order_points!: Sequelize.HasManySetAssociationsMixin<ent_order_point, ent_order_pointId>;
  addEnt_order_point!: Sequelize.HasManyAddAssociationMixin<ent_order_point, ent_order_pointId>;
  addEnt_order_points!: Sequelize.HasManyAddAssociationsMixin<ent_order_point, ent_order_pointId>;
  createEnt_order_point!: Sequelize.HasManyCreateAssociationMixin<ent_order_point>;
  removeEnt_order_point!: Sequelize.HasManyRemoveAssociationMixin<ent_order_point, ent_order_pointId>;
  removeEnt_order_points!: Sequelize.HasManyRemoveAssociationsMixin<ent_order_point, ent_order_pointId>;
  hasEnt_order_point!: Sequelize.HasManyHasAssociationMixin<ent_order_point, ent_order_pointId>;
  hasEnt_order_points!: Sequelize.HasManyHasAssociationsMixin<ent_order_point, ent_order_pointId>;
  countEnt_order_points!: Sequelize.HasManyCountAssociationsMixin;
  // ent_contact hasMany ent_org via contact_id
  ent_orgs!: ent_org[];
  getEnt_orgs!: Sequelize.HasManyGetAssociationsMixin<ent_org>;
  setEnt_orgs!: Sequelize.HasManySetAssociationsMixin<ent_org, ent_orgId>;
  addEnt_org!: Sequelize.HasManyAddAssociationMixin<ent_org, ent_orgId>;
  addEnt_orgs!: Sequelize.HasManyAddAssociationsMixin<ent_org, ent_orgId>;
  createEnt_org!: Sequelize.HasManyCreateAssociationMixin<ent_org>;
  removeEnt_org!: Sequelize.HasManyRemoveAssociationMixin<ent_org, ent_orgId>;
  removeEnt_orgs!: Sequelize.HasManyRemoveAssociationsMixin<ent_org, ent_orgId>;
  hasEnt_org!: Sequelize.HasManyHasAssociationMixin<ent_org, ent_orgId>;
  hasEnt_orgs!: Sequelize.HasManyHasAssociationsMixin<ent_org, ent_orgId>;
  countEnt_orgs!: Sequelize.HasManyCountAssociationsMixin;
  // ent_contact hasMany user via contact_id
  users!: user[];
  getUsers!: Sequelize.HasManyGetAssociationsMixin<user>;
  setUsers!: Sequelize.HasManySetAssociationsMixin<user, userId>;
  addUser!: Sequelize.HasManyAddAssociationMixin<user, userId>;
  addUsers!: Sequelize.HasManyAddAssociationsMixin<user, userId>;
  createUser!: Sequelize.HasManyCreateAssociationMixin<user>;
  removeUser!: Sequelize.HasManyRemoveAssociationMixin<user, userId>;
  removeUsers!: Sequelize.HasManyRemoveAssociationsMixin<user, userId>;
  hasUser!: Sequelize.HasManyHasAssociationMixin<user, userId>;
  hasUsers!: Sequelize.HasManyHasAssociationsMixin<user, userId>;
  countUsers!: Sequelize.HasManyCountAssociationsMixin;
  // ent_contact belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // ent_contact belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // ent_contact belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ent_contact {
    return ent_contact.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    created_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    last_modified_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    display_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    version: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "UK_o99imsmmew6rijdsly05xcy9"
    },
    fax: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_by_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    last_modified_by_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    organization_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'ent_org',
        key: 'id'
      }
    },
    address_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'ent_address',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'ent_contact',
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
      {
        name: "UK_o99imsmmew6rijdsly05xcy9",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "FK76w6hyd1t37lyymeki6h2dq13",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FK9tgdr7bjbxbsj5pmnu412mldn",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FK5ux4pjwjxdircm2vou54m40dd",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FK5kwxge91gmn9q01cw51eex0rj",
        using: "BTREE",
        fields: [
          { name: "address_id" },
        ]
      },
    ]
  });
  }
}
