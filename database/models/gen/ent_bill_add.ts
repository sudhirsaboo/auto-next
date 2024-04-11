import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_address, ent_addressId } from './ent_address';
import type { ent_contact, ent_contactId } from './ent_contact';
import type { ent_org, ent_orgId } from './ent_org';
import type { user, userId } from './user';

export interface ent_bill_addAttributes {
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

export type ent_bill_addPk = "id";
export type ent_bill_addId = ent_bill_add[ent_bill_addPk];
export type ent_bill_addOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "created_by_id" | "last_modified_by_id" | "organization_id" | "address_id" | "contact_id";
export type ent_bill_addCreationAttributes = Optional<ent_bill_addAttributes, ent_bill_addOptionalAttributes>;

export class ent_bill_add extends Model<ent_bill_addAttributes, ent_bill_addCreationAttributes> implements ent_bill_addAttributes {
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

  // ent_bill_add belongsTo ent_address via address_id
  address!: ent_address;
  getAddress!: Sequelize.BelongsToGetAssociationMixin<ent_address>;
  setAddress!: Sequelize.BelongsToSetAssociationMixin<ent_address, ent_addressId>;
  createAddress!: Sequelize.BelongsToCreateAssociationMixin<ent_address>;
  // ent_bill_add belongsTo ent_contact via contact_id
  contact!: ent_contact;
  getContact!: Sequelize.BelongsToGetAssociationMixin<ent_contact>;
  setContact!: Sequelize.BelongsToSetAssociationMixin<ent_contact, ent_contactId>;
  createContact!: Sequelize.BelongsToCreateAssociationMixin<ent_contact>;
  // ent_bill_add belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // ent_bill_add belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // ent_bill_add belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ent_bill_add {
    return ent_bill_add.init({
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
    tableName: 'ent_bill_add',
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
        name: "FK2t3g75nc5xjxvgw9ydkv8h0be",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKk94w6v7nn2hespexss7iwawqc",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKpepnexlmas3jbjgncoefu344d",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKcac478k7hd0tk6593h3eh28d4",
        using: "BTREE",
        fields: [
          { name: "address_id" },
        ]
      },
      {
        name: "FKjl8e6ijf902pm0wdq79bfhewy",
        using: "BTREE",
        fields: [
          { name: "contact_id" },
        ]
      },
    ]
  });
  }
}
