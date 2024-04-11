import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { evt_program, evt_programId } from './evt_program';
import type { user, userId } from './user';

export interface evt_prog_catAttributes {
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
  fk_parent_category?: number;
}

export type evt_prog_catPk = "id";
export type evt_prog_catId = evt_prog_cat[evt_prog_catPk];
export type evt_prog_catOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "created_by_id" | "last_modified_by_id" | "organization_id" | "fk_parent_category";
export type evt_prog_catCreationAttributes = Optional<evt_prog_catAttributes, evt_prog_catOptionalAttributes>;

export class evt_prog_cat extends Model<evt_prog_catAttributes, evt_prog_catCreationAttributes> implements evt_prog_catAttributes {
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
  fk_parent_category?: number;

  // evt_prog_cat belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // evt_prog_cat belongsTo evt_prog_cat via fk_parent_category
  fk_parent_category_evt_prog_cat!: evt_prog_cat;
  getFk_parent_category_evt_prog_cat!: Sequelize.BelongsToGetAssociationMixin<evt_prog_cat>;
  setFk_parent_category_evt_prog_cat!: Sequelize.BelongsToSetAssociationMixin<evt_prog_cat, evt_prog_catId>;
  createFk_parent_category_evt_prog_cat!: Sequelize.BelongsToCreateAssociationMixin<evt_prog_cat>;
  // evt_prog_cat hasMany evt_program via subcategory_id
  evt_programs!: evt_program[];
  getEvt_programs!: Sequelize.HasManyGetAssociationsMixin<evt_program>;
  setEvt_programs!: Sequelize.HasManySetAssociationsMixin<evt_program, evt_programId>;
  addEvt_program!: Sequelize.HasManyAddAssociationMixin<evt_program, evt_programId>;
  addEvt_programs!: Sequelize.HasManyAddAssociationsMixin<evt_program, evt_programId>;
  createEvt_program!: Sequelize.HasManyCreateAssociationMixin<evt_program>;
  removeEvt_program!: Sequelize.HasManyRemoveAssociationMixin<evt_program, evt_programId>;
  removeEvt_programs!: Sequelize.HasManyRemoveAssociationsMixin<evt_program, evt_programId>;
  hasEvt_program!: Sequelize.HasManyHasAssociationMixin<evt_program, evt_programId>;
  hasEvt_programs!: Sequelize.HasManyHasAssociationsMixin<evt_program, evt_programId>;
  countEvt_programs!: Sequelize.HasManyCountAssociationsMixin;
  // evt_prog_cat hasMany evt_program via category_id
  category_evt_programs!: evt_program[];
  getCategory_evt_programs!: Sequelize.HasManyGetAssociationsMixin<evt_program>;
  setCategory_evt_programs!: Sequelize.HasManySetAssociationsMixin<evt_program, evt_programId>;
  addCategory_evt_program!: Sequelize.HasManyAddAssociationMixin<evt_program, evt_programId>;
  addCategory_evt_programs!: Sequelize.HasManyAddAssociationsMixin<evt_program, evt_programId>;
  createCategory_evt_program!: Sequelize.HasManyCreateAssociationMixin<evt_program>;
  removeCategory_evt_program!: Sequelize.HasManyRemoveAssociationMixin<evt_program, evt_programId>;
  removeCategory_evt_programs!: Sequelize.HasManyRemoveAssociationsMixin<evt_program, evt_programId>;
  hasCategory_evt_program!: Sequelize.HasManyHasAssociationMixin<evt_program, evt_programId>;
  hasCategory_evt_programs!: Sequelize.HasManyHasAssociationsMixin<evt_program, evt_programId>;
  countCategory_evt_programs!: Sequelize.HasManyCountAssociationsMixin;
  // evt_prog_cat belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // evt_prog_cat belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof evt_prog_cat {
    return evt_prog_cat.init({
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
    fk_parent_category: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'evt_prog_cat',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'evt_prog_cat',
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
        name: "FKjvcw06wrvpfo22j28j32jocll",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKg9m04dll20ygaei5w1hkh27ds",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKjowqoqn8d8yfcqcn944fe18rg",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FK5e5jv7nlqmv3u31qb3xbyxv97",
        using: "BTREE",
        fields: [
          { name: "fk_parent_category" },
        ]
      },
    ]
  });
  }
}
