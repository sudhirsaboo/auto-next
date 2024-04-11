import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { credit_card, credit_cardCreationAttributes, credit_cardId } from './credit_card';
import type { ent_org, ent_orgId } from './ent_org';
import type { user, userId } from './user';

export interface billing_detailsAttributes {
  billing_details_type: string;
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  owner: string;
  ba_account?: string;
  ba_bankname?: string;
  ba_swift?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  user_id?: number;
}

export type billing_detailsPk = "id";
export type billing_detailsId = billing_details[billing_detailsPk];
export type billing_detailsOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "ba_account" | "ba_bankname" | "ba_swift" | "created_by_id" | "last_modified_by_id" | "organization_id" | "user_id";
export type billing_detailsCreationAttributes = Optional<billing_detailsAttributes, billing_detailsOptionalAttributes>;

export class billing_details extends Model<billing_detailsAttributes, billing_detailsCreationAttributes> implements billing_detailsAttributes {
  billing_details_type!: string;
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  owner!: string;
  ba_account?: string;
  ba_bankname?: string;
  ba_swift?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  user_id?: number;

  // billing_details hasOne credit_card via credit_card_id
  credit_card!: credit_card;
  getCredit_card!: Sequelize.HasOneGetAssociationMixin<credit_card>;
  setCredit_card!: Sequelize.HasOneSetAssociationMixin<credit_card, credit_cardId>;
  createCredit_card!: Sequelize.HasOneCreateAssociationMixin<credit_card>;
  // billing_details belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // billing_details belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // billing_details belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // billing_details belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof billing_details {
    return billing_details.init({
    billing_details_type: {
      type: DataTypes.STRING(31),
      allowNull: false
    },
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
    owner: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ba_account: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    ba_bankname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ba_swift: {
      type: DataTypes.STRING(15),
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
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'billing_details',
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
        name: "FKjqbuk1r5sxue2hxwengtfhwd1",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FK8vpdexkw6y1pbj76xgu0dt7gw",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FK29s64dbduy73p3h9b89ce0p38",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FK_USER_ID",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
