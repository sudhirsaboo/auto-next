import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { cart_con_option, cart_con_optionId } from './cart_con_option';
import type { ent_org, ent_orgId } from './ent_org';
import type { master_type, master_typeId } from './master_type';
import type { user, userId } from './user';

export interface master_valueAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  parent_value?: string;
  type_id?: string;
  value?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  parent_type_id?: number;
}

export type master_valuePk = "id";
export type master_valueId = master_value[master_valuePk];
export type master_valueOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "parent_value" | "type_id" | "value" | "created_by_id" | "last_modified_by_id" | "organization_id" | "parent_type_id";
export type master_valueCreationAttributes = Optional<master_valueAttributes, master_valueOptionalAttributes>;

export class master_value extends Model<master_valueAttributes, master_valueCreationAttributes> implements master_valueAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  parent_value?: string;
  type_id?: string;
  value?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  parent_type_id?: number;

  // master_value belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // master_value belongsTo master_type via parent_type_id
  parent_type!: master_type;
  getParent_type!: Sequelize.BelongsToGetAssociationMixin<master_type>;
  setParent_type!: Sequelize.BelongsToSetAssociationMixin<master_type, master_typeId>;
  createParent_type!: Sequelize.BelongsToCreateAssociationMixin<master_type>;
  // master_value hasMany cart_con_option via subcat_type_id
  cart_con_options!: cart_con_option[];
  getCart_con_options!: Sequelize.HasManyGetAssociationsMixin<cart_con_option>;
  setCart_con_options!: Sequelize.HasManySetAssociationsMixin<cart_con_option, cart_con_optionId>;
  addCart_con_option!: Sequelize.HasManyAddAssociationMixin<cart_con_option, cart_con_optionId>;
  addCart_con_options!: Sequelize.HasManyAddAssociationsMixin<cart_con_option, cart_con_optionId>;
  createCart_con_option!: Sequelize.HasManyCreateAssociationMixin<cart_con_option>;
  removeCart_con_option!: Sequelize.HasManyRemoveAssociationMixin<cart_con_option, cart_con_optionId>;
  removeCart_con_options!: Sequelize.HasManyRemoveAssociationsMixin<cart_con_option, cart_con_optionId>;
  hasCart_con_option!: Sequelize.HasManyHasAssociationMixin<cart_con_option, cart_con_optionId>;
  hasCart_con_options!: Sequelize.HasManyHasAssociationsMixin<cart_con_option, cart_con_optionId>;
  countCart_con_options!: Sequelize.HasManyCountAssociationsMixin;
  // master_value hasMany cart_con_option via cat_type_id
  cat_type_cart_con_options!: cart_con_option[];
  getCat_type_cart_con_options!: Sequelize.HasManyGetAssociationsMixin<cart_con_option>;
  setCat_type_cart_con_options!: Sequelize.HasManySetAssociationsMixin<cart_con_option, cart_con_optionId>;
  addCat_type_cart_con_option!: Sequelize.HasManyAddAssociationMixin<cart_con_option, cart_con_optionId>;
  addCat_type_cart_con_options!: Sequelize.HasManyAddAssociationsMixin<cart_con_option, cart_con_optionId>;
  createCat_type_cart_con_option!: Sequelize.HasManyCreateAssociationMixin<cart_con_option>;
  removeCat_type_cart_con_option!: Sequelize.HasManyRemoveAssociationMixin<cart_con_option, cart_con_optionId>;
  removeCat_type_cart_con_options!: Sequelize.HasManyRemoveAssociationsMixin<cart_con_option, cart_con_optionId>;
  hasCat_type_cart_con_option!: Sequelize.HasManyHasAssociationMixin<cart_con_option, cart_con_optionId>;
  hasCat_type_cart_con_options!: Sequelize.HasManyHasAssociationsMixin<cart_con_option, cart_con_optionId>;
  countCat_type_cart_con_options!: Sequelize.HasManyCountAssociationsMixin;
  // master_value belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // master_value belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof master_value {
    return master_value.init({
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
    parent_value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    value: {
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
    tableName: 'master_value',
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
        name: "FK5uckut1xu63k520ymerp2gobe",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKbg70kcvjo5we6n09vdo6j5sod",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKj4o4447129i48c3g431sleab6",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKcypg1ibuh6fxxyd2dnydenamx",
        using: "BTREE",
        fields: [
          { name: "parent_type_id" },
        ]
      },
    ]
  });
  }
}
