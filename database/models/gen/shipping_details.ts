import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { user, userId } from './user';

export interface shipping_detailsAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  owner: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  user_id?: number;
}

export type shipping_detailsPk = "id";
export type shipping_detailsId = shipping_details[shipping_detailsPk];
export type shipping_detailsOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "created_by_id" | "last_modified_by_id" | "organization_id" | "user_id";
export type shipping_detailsCreationAttributes = Optional<shipping_detailsAttributes, shipping_detailsOptionalAttributes>;

export class shipping_details extends Model<shipping_detailsAttributes, shipping_detailsCreationAttributes> implements shipping_detailsAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  owner!: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  user_id?: number;

  // shipping_details belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // shipping_details belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // shipping_details belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // shipping_details belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof shipping_details {
    return shipping_details.init({
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
    tableName: 'shipping_details',
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
        name: "FKc6ltcysbad7oucvuai6skhqqr",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKsxg66giescs7neu6cyeixikwd",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKmib73e8i6rfw71qf6475gpive",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKekycabtcfkysajgjr249gcg9m",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
