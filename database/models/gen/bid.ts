import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { item_bid, item_bidId } from './item_bid';
import type { item_bid_bids, item_bid_bidsId } from './item_bid_bids';
import type { user, userId } from './user';

export interface bidAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  amount?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  bidder_id?: number;
  item_id: number;
}

export type bidPk = "id";
export type bidId = bid[bidPk];
export type bidOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "amount" | "created_by_id" | "last_modified_by_id" | "organization_id" | "bidder_id";
export type bidCreationAttributes = Optional<bidAttributes, bidOptionalAttributes>;

export class bid extends Model<bidAttributes, bidCreationAttributes> implements bidAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  amount?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  bidder_id?: number;
  item_id!: number;

  // bid hasMany item_bid via successful_bid_id
  item_bids!: item_bid[];
  getItem_bids!: Sequelize.HasManyGetAssociationsMixin<item_bid>;
  setItem_bids!: Sequelize.HasManySetAssociationsMixin<item_bid, item_bidId>;
  addItem_bid!: Sequelize.HasManyAddAssociationMixin<item_bid, item_bidId>;
  addItem_bids!: Sequelize.HasManyAddAssociationsMixin<item_bid, item_bidId>;
  createItem_bid!: Sequelize.HasManyCreateAssociationMixin<item_bid>;
  removeItem_bid!: Sequelize.HasManyRemoveAssociationMixin<item_bid, item_bidId>;
  removeItem_bids!: Sequelize.HasManyRemoveAssociationsMixin<item_bid, item_bidId>;
  hasItem_bid!: Sequelize.HasManyHasAssociationMixin<item_bid, item_bidId>;
  hasItem_bids!: Sequelize.HasManyHasAssociationsMixin<item_bid, item_bidId>;
  countItem_bids!: Sequelize.HasManyCountAssociationsMixin;
  // bid hasMany item_bid_bids via bids_id
  item_bid_bids!: item_bid_bids[];
  getItem_bid_bids!: Sequelize.HasManyGetAssociationsMixin<item_bid_bids>;
  setItem_bid_bids!: Sequelize.HasManySetAssociationsMixin<item_bid_bids, item_bid_bidsId>;
  addItem_bid_bid!: Sequelize.HasManyAddAssociationMixin<item_bid_bids, item_bid_bidsId>;
  addItem_bid_bids!: Sequelize.HasManyAddAssociationsMixin<item_bid_bids, item_bid_bidsId>;
  createItem_bid_bid!: Sequelize.HasManyCreateAssociationMixin<item_bid_bids>;
  removeItem_bid_bid!: Sequelize.HasManyRemoveAssociationMixin<item_bid_bids, item_bid_bidsId>;
  removeItem_bid_bids!: Sequelize.HasManyRemoveAssociationsMixin<item_bid_bids, item_bid_bidsId>;
  hasItem_bid_bid!: Sequelize.HasManyHasAssociationMixin<item_bid_bids, item_bid_bidsId>;
  hasItem_bid_bids!: Sequelize.HasManyHasAssociationsMixin<item_bid_bids, item_bid_bidsId>;
  countItem_bid_bids!: Sequelize.HasManyCountAssociationsMixin;
  // bid belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // bid belongsTo item_bid via item_id
  item!: item_bid;
  getItem!: Sequelize.BelongsToGetAssociationMixin<item_bid>;
  setItem!: Sequelize.BelongsToSetAssociationMixin<item_bid, item_bidId>;
  createItem!: Sequelize.BelongsToCreateAssociationMixin<item_bid>;
  // bid belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // bid belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // bid belongsTo user via bidder_id
  bidder!: user;
  getBidder!: Sequelize.BelongsToGetAssociationMixin<user>;
  setBidder!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createBidder!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof bid {
    return bid.init({
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
    amount: {
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
    bidder_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    item_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'item_bid',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'bid',
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
        name: "FK4yiappmh2ornhot99cgb4hbnj",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FK6i4r9sq8ithu3ypm2u9dwibtp",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKhnhftvy4im3g6dg9fxdq0axmp",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKlv3wvxwx62go8g98owtwcbf7k",
        using: "BTREE",
        fields: [
          { name: "bidder_id" },
        ]
      },
      {
        name: "FK50k91sauq9ich74mikjv56j2d",
        using: "BTREE",
        fields: [
          { name: "item_id" },
        ]
      },
    ]
  });
  }
}
