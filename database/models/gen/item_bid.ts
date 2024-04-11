import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bid, bidId } from './bid';
import type { ent_org, ent_orgId } from './ent_org';
import type { item_bid_bids, item_bid_bidsId } from './item_bid_bids';
import type { item_bid_shipment, item_bid_shipmentId } from './item_bid_shipment';
import type { user, userId } from './user';

export interface item_bidAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  end_date?: Date;
  initial_price?: string;
  reserve_price?: string;
  start_date?: Date;
  state?: any;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  successful_bid_id?: number;
}

export type item_bidPk = "id";
export type item_bidId = item_bid[item_bidPk];
export type item_bidOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "end_date" | "initial_price" | "reserve_price" | "start_date" | "state" | "created_by_id" | "last_modified_by_id" | "organization_id" | "successful_bid_id";
export type item_bidCreationAttributes = Optional<item_bidAttributes, item_bidOptionalAttributes>;

export class item_bid extends Model<item_bidAttributes, item_bidCreationAttributes> implements item_bidAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  end_date?: Date;
  initial_price?: string;
  reserve_price?: string;
  start_date?: Date;
  state?: any;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  successful_bid_id?: number;

  // item_bid belongsTo bid via successful_bid_id
  successful_bid!: bid;
  getSuccessful_bid!: Sequelize.BelongsToGetAssociationMixin<bid>;
  setSuccessful_bid!: Sequelize.BelongsToSetAssociationMixin<bid, bidId>;
  createSuccessful_bid!: Sequelize.BelongsToCreateAssociationMixin<bid>;
  // item_bid belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // item_bid hasMany bid via item_id
  bids!: bid[];
  getBids!: Sequelize.HasManyGetAssociationsMixin<bid>;
  setBids!: Sequelize.HasManySetAssociationsMixin<bid, bidId>;
  addBid!: Sequelize.HasManyAddAssociationMixin<bid, bidId>;
  addBids!: Sequelize.HasManyAddAssociationsMixin<bid, bidId>;
  createBid!: Sequelize.HasManyCreateAssociationMixin<bid>;
  removeBid!: Sequelize.HasManyRemoveAssociationMixin<bid, bidId>;
  removeBids!: Sequelize.HasManyRemoveAssociationsMixin<bid, bidId>;
  hasBid!: Sequelize.HasManyHasAssociationMixin<bid, bidId>;
  hasBids!: Sequelize.HasManyHasAssociationsMixin<bid, bidId>;
  countBids!: Sequelize.HasManyCountAssociationsMixin;
  // item_bid hasMany item_bid_bids via item_bid_id
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
  // item_bid hasMany item_bid_shipment via item_bid_id
  item_bid_shipments!: item_bid_shipment[];
  getItem_bid_shipments!: Sequelize.HasManyGetAssociationsMixin<item_bid_shipment>;
  setItem_bid_shipments!: Sequelize.HasManySetAssociationsMixin<item_bid_shipment, item_bid_shipmentId>;
  addItem_bid_shipment!: Sequelize.HasManyAddAssociationMixin<item_bid_shipment, item_bid_shipmentId>;
  addItem_bid_shipments!: Sequelize.HasManyAddAssociationsMixin<item_bid_shipment, item_bid_shipmentId>;
  createItem_bid_shipment!: Sequelize.HasManyCreateAssociationMixin<item_bid_shipment>;
  removeItem_bid_shipment!: Sequelize.HasManyRemoveAssociationMixin<item_bid_shipment, item_bid_shipmentId>;
  removeItem_bid_shipments!: Sequelize.HasManyRemoveAssociationsMixin<item_bid_shipment, item_bid_shipmentId>;
  hasItem_bid_shipment!: Sequelize.HasManyHasAssociationMixin<item_bid_shipment, item_bid_shipmentId>;
  hasItem_bid_shipments!: Sequelize.HasManyHasAssociationsMixin<item_bid_shipment, item_bid_shipmentId>;
  countItem_bid_shipments!: Sequelize.HasManyCountAssociationsMixin;
  // item_bid belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // item_bid belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof item_bid {
    return item_bid.init({
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
    end_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    initial_price: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reserve_price: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    state: {
      type: DataTypes.BLOB,
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
    successful_bid_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'bid',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'item_bid',
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
        name: "FKps2qrbwr2u714d2urq0exw3gp",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKd3crdhiw0dg96sb7aku57k6hn",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKgwi0scd7a5k1xecx5j5kye6b5",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKoko5caiti51ya9hxwfu8jqq9a",
        using: "BTREE",
        fields: [
          { name: "successful_bid_id" },
        ]
      },
    ]
  });
  }
}
