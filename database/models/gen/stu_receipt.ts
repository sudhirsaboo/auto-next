import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { stu_regist, stu_registId } from './stu_regist';
import type { user, userId } from './user';

export interface stu_receiptAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  month?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  registration_id?: number;
}

export type stu_receiptPk = "id";
export type stu_receiptId = stu_receipt[stu_receiptPk];
export type stu_receiptOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "month" | "created_by_id" | "last_modified_by_id" | "organization_id" | "registration_id";
export type stu_receiptCreationAttributes = Optional<stu_receiptAttributes, stu_receiptOptionalAttributes>;

export class stu_receipt extends Model<stu_receiptAttributes, stu_receiptCreationAttributes> implements stu_receiptAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  month?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  registration_id?: number;

  // stu_receipt belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // stu_receipt belongsTo stu_regist via registration_id
  registration!: stu_regist;
  getRegistration!: Sequelize.BelongsToGetAssociationMixin<stu_regist>;
  setRegistration!: Sequelize.BelongsToSetAssociationMixin<stu_regist, stu_registId>;
  createRegistration!: Sequelize.BelongsToCreateAssociationMixin<stu_regist>;
  // stu_receipt belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // stu_receipt belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof stu_receipt {
    return stu_receipt.init({
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
    month: {
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
    registration_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'stu_regist',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'stu_receipt',
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
        name: "FK3uyfyawvy3gjem41daaxqyoic",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKgnsio6fu6bfeyc7jqcp7nsb8w",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKptdu2a3mw6hxov5po3qjboqcr",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKqweh7mjf7yk1k1k1dgvca7lqc",
        using: "BTREE",
        fields: [
          { name: "registration_id" },
        ]
      },
    ]
  });
  }
}
