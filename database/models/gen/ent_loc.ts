import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_address, ent_addressId } from './ent_address';
import type { ent_org, ent_orgId } from './ent_org';
import type { user, userId } from './user';

export interface ent_locAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  code?: string;
  category?: string;
  time_zone?: string;
  time_zone_offset: number;
  type?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  address_id?: number;
  owner_id?: number;
  parent_id?: number;
}

export type ent_locPk = "id";
export type ent_locId = ent_loc[ent_locPk];
export type ent_locOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "code" | "category" | "time_zone" | "type" | "created_by_id" | "last_modified_by_id" | "organization_id" | "address_id" | "owner_id" | "parent_id";
export type ent_locCreationAttributes = Optional<ent_locAttributes, ent_locOptionalAttributes>;

export class ent_loc extends Model<ent_locAttributes, ent_locCreationAttributes> implements ent_locAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  code?: string;
  category?: string;
  time_zone?: string;
  time_zone_offset!: number;
  type?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  address_id?: number;
  owner_id?: number;
  parent_id?: number;

  // ent_loc belongsTo ent_address via address_id
  address!: ent_address;
  getAddress!: Sequelize.BelongsToGetAssociationMixin<ent_address>;
  setAddress!: Sequelize.BelongsToSetAssociationMixin<ent_address, ent_addressId>;
  createAddress!: Sequelize.BelongsToCreateAssociationMixin<ent_address>;
  // ent_loc belongsTo ent_loc via parent_id
  parent!: ent_loc;
  getParent!: Sequelize.BelongsToGetAssociationMixin<ent_loc>;
  setParent!: Sequelize.BelongsToSetAssociationMixin<ent_loc, ent_locId>;
  createParent!: Sequelize.BelongsToCreateAssociationMixin<ent_loc>;
  // ent_loc belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // ent_loc belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // ent_loc belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // ent_loc belongsTo user via owner_id
  owner!: user;
  getOwner!: Sequelize.BelongsToGetAssociationMixin<user>;
  setOwner!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createOwner!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ent_loc {
    return ent_loc.init({
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
    code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    time_zone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    time_zone_offset: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
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
    },
    owner_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    parent_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'ent_loc',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'ent_loc',
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
        name: "FK6gm0kkrf6uar8l5nxdbfanva9",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKg0wrc0u7641e6xs28s7pr64ns",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKs7yj490df62v5xjw791v9o0ng",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKsl5bf5jcm164yqyngcoe65tt0",
        using: "BTREE",
        fields: [
          { name: "address_id" },
        ]
      },
      {
        name: "FKl9cxati2hpsmtkp639s39p24b",
        using: "BTREE",
        fields: [
          { name: "owner_id" },
        ]
      },
      {
        name: "FKfk3trvlgmecut2fu4e7tej2ow",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
    ]
  });
  }
}
