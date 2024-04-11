import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { master_value, master_valueId } from './master_value';
import type { user, userId } from './user';

export interface master_typeAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  type_id?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  parent_type_id?: number;
}

export type master_typePk = "id";
export type master_typeId = master_type[master_typePk];
export type master_typeOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "type_id" | "created_by_id" | "last_modified_by_id" | "organization_id" | "parent_type_id";
export type master_typeCreationAttributes = Optional<master_typeAttributes, master_typeOptionalAttributes>;

export class master_type extends Model<master_typeAttributes, master_typeCreationAttributes> implements master_typeAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  type_id?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  parent_type_id?: number;

  // master_type belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // master_type belongsTo master_type via parent_type_id
  parent_type!: master_type;
  getParent_type!: Sequelize.BelongsToGetAssociationMixin<master_type>;
  setParent_type!: Sequelize.BelongsToSetAssociationMixin<master_type, master_typeId>;
  createParent_type!: Sequelize.BelongsToCreateAssociationMixin<master_type>;
  // master_type hasMany master_value via parent_type_id
  master_values!: master_value[];
  getMaster_values!: Sequelize.HasManyGetAssociationsMixin<master_value>;
  setMaster_values!: Sequelize.HasManySetAssociationsMixin<master_value, master_valueId>;
  addMaster_value!: Sequelize.HasManyAddAssociationMixin<master_value, master_valueId>;
  addMaster_values!: Sequelize.HasManyAddAssociationsMixin<master_value, master_valueId>;
  createMaster_value!: Sequelize.HasManyCreateAssociationMixin<master_value>;
  removeMaster_value!: Sequelize.HasManyRemoveAssociationMixin<master_value, master_valueId>;
  removeMaster_values!: Sequelize.HasManyRemoveAssociationsMixin<master_value, master_valueId>;
  hasMaster_value!: Sequelize.HasManyHasAssociationMixin<master_value, master_valueId>;
  hasMaster_values!: Sequelize.HasManyHasAssociationsMixin<master_value, master_valueId>;
  countMaster_values!: Sequelize.HasManyCountAssociationsMixin;
  // master_type belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // master_type belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof master_type {
    return master_type.init({
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
    type_id: {
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
    parent_type_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'master_type',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'master_type',
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
        name: "FK68911f6q4p09l6ip81a8wevy9",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKepplg2vxhsnsksa0qxryvmb2j",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FK421lleord5xt1n6xb5sdjk5ia",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FK89upw2andvchkm455jra0f8cf",
        using: "BTREE",
        fields: [
          { name: "parent_type_id" },
        ]
      },
    ]
  });
  }
}
