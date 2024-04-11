import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bid, bidId } from './bid';
import type { item_bid, item_bidId } from './item_bid';

export interface item_bid_bidsAttributes {
  item_bid_id: number;
  bids_id: number;
}

export type item_bid_bidsPk = "bids_id";
export type item_bid_bidsId = item_bid_bids[item_bid_bidsPk];
export type item_bid_bidsCreationAttributes = item_bid_bidsAttributes;

export class item_bid_bids extends Model<item_bid_bidsAttributes, item_bid_bidsCreationAttributes> implements item_bid_bidsAttributes {
  item_bid_id!: number;
  bids_id!: number;

  // item_bid_bids belongsTo bid via bids_id
  bid!: bid;
  getBid!: Sequelize.BelongsToGetAssociationMixin<bid>;
  setBid!: Sequelize.BelongsToSetAssociationMixin<bid, bidId>;
  createBid!: Sequelize.BelongsToCreateAssociationMixin<bid>;
  // item_bid_bids belongsTo item_bid via item_bid_id
  item_bid!: item_bid;
  getItem_bid!: Sequelize.BelongsToGetAssociationMixin<item_bid>;
  setItem_bid!: Sequelize.BelongsToSetAssociationMixin<item_bid, item_bidId>;
  createItem_bid!: Sequelize.BelongsToCreateAssociationMixin<item_bid>;

  static initModel(sequelize: Sequelize.Sequelize): typeof item_bid_bids {
    return item_bid_bids.init({
    item_bid_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'item_bid',
        key: 'id'
      }
    },
    bids_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'bid',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'item_bid_bids',
    timestamps: false,
    indexes: [
      {
        name: "UK_9jmoh9har7f4c3nsfa1bb5vqd",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bids_id" },
        ]
      },
      {
        name: "FKmmlpi4vqkvuvqxafd3y31ceaf",
        using: "BTREE",
        fields: [
          { name: "item_bid_id" },
        ]
      },
    ]
  });
  }
}
