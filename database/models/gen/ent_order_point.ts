import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_address, ent_addressId } from './ent_address';
import type { ent_contact, ent_contactId } from './ent_contact';
import type { ent_org, ent_orgId } from './ent_org';
import type { user, userId } from './user';

export interface ent_order_pointAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  address_id?: number;
  contact_id?: number;
}

export type ent_order_pointPk = "id";
export type ent_order_pointId = ent_order_point[ent_order_pointPk];
export type ent_order_pointOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "created_by_id" | "last_modified_by_id" | "organization_id" | "address_id" | "contact_id";
export type ent_order_pointCreationAttributes = Optional<ent_order_pointAttributes, ent_order_pointOptionalAttributes>;

export class ent_order_point extends Model<ent_order_pointAttributes, ent_order_pointCreationAttributes> implements ent_order_pointAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  address_id?: number;
  contact_id?: number;

  // ent_order_point belongsTo ent_address via address_id
  address!: ent_address;
  getAddress!: Sequelize.BelongsToGetAssociationMixin<ent_address>;
  setAddress!: Sequelize.BelongsToSetAssociationMixin<ent_address, ent_addressId>;
  createAddress!: Sequelize.BelongsToCreateAssociationMixin<ent_address>;
  // ent_order_point belongsTo ent_contact via contact_id
  contact!: ent_contact;
  getContact!: Sequelize.BelongsToGetAssociationMixin<ent_contact>;
  setContact!: Sequelize.BelongsToSetAssociationMixin<ent_contact, ent_contactId>;
  createContact!: Sequelize.BelongsToCreateAssociationMixin<ent_contact>;
  // ent_order_point belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // ent_order_point belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // ent_order_point belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ent_order_point {
    return ent_order_point.init({
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
    },
    contact_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'ent_contact',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'ent_order_point',
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
        name: "FKlbmmp9pgpqjdj5etgtudkmtoy",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FK56s69m1lhe5ryww1pvecu7oo5",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FK19ig8q8kml65isomgqvcbtbot",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKjkc50qw1sgh7pvbl4i7nud6ua",
        using: "BTREE",
        fields: [
          { name: "address_id" },
        ]
      },
      {
        name: "FKj9hulsl6kv73q88nrvrheqpmi",
        using: "BTREE",
        fields: [
          { name: "contact_id" },
        ]
      },
    ]
  });
  }
}
