import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { master_value, master_valueId } from './master_value';
import type { user, userId } from './user';

export interface cart_con_optionAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  start_at_price?: string;
  type_id: string;
  value?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  cat_type_id: number;
  subcat_type_id: number;
}

export type cart_con_optionPk = "id";
export type cart_con_optionId = cart_con_option[cart_con_optionPk];
export type cart_con_optionOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "start_at_price" | "value" | "created_by_id" | "last_modified_by_id" | "organization_id";
export type cart_con_optionCreationAttributes = Optional<cart_con_optionAttributes, cart_con_optionOptionalAttributes>;

export class cart_con_option extends Model<cart_con_optionAttributes, cart_con_optionCreationAttributes> implements cart_con_optionAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  start_at_price?: string;
  type_id!: string;
  value?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  cat_type_id!: number;
  subcat_type_id!: number;

  // cart_con_option belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // cart_con_option belongsTo master_value via subcat_type_id
  subcat_type!: master_value;
  getSubcat_type!: Sequelize.BelongsToGetAssociationMixin<master_value>;
  setSubcat_type!: Sequelize.BelongsToSetAssociationMixin<master_value, master_valueId>;
  createSubcat_type!: Sequelize.BelongsToCreateAssociationMixin<master_value>;
  // cart_con_option belongsTo master_value via cat_type_id
  cat_type!: master_value;
  getCat_type!: Sequelize.BelongsToGetAssociationMixin<master_value>;
  setCat_type!: Sequelize.BelongsToSetAssociationMixin<master_value, master_valueId>;
  createCat_type!: Sequelize.BelongsToCreateAssociationMixin<master_value>;
  // cart_con_option belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // cart_con_option belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof cart_con_option {
    return cart_con_option.init({
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
    start_at_price: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type_id: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    cat_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'master_value',
        key: 'id'
      }
    },
    subcat_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'master_value',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'cart_con_option',
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
        name: "FKr6aqrasy9x8xij7gldv831ceb",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FK2u5ncxgg5ysylxaib06xw86hl",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKl4c5d186b73r15t0hc3924nes",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKp8p9jmplixtvsa8cveobenr36",
        using: "BTREE",
        fields: [
          { name: "cat_type_id" },
        ]
      },
      {
        name: "FKb43q2g6eikn59md8eciywo8pq",
        using: "BTREE",
        fields: [
          { name: "subcat_type_id" },
        ]
      },
    ]
  });
  }
}
