import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { item_bid, item_bidId } from './item_bid';
import type { shipment, shipmentId } from './shipment';

export interface item_bid_shipmentAttributes {
  item_bid_id?: number;
  shipment_id: number;
}

export type item_bid_shipmentPk = "shipment_id";
export type item_bid_shipmentId = item_bid_shipment[item_bid_shipmentPk];
export type item_bid_shipmentOptionalAttributes = "item_bid_id";
export type item_bid_shipmentCreationAttributes = Optional<item_bid_shipmentAttributes, item_bid_shipmentOptionalAttributes>;

export class item_bid_shipment extends Model<item_bid_shipmentAttributes, item_bid_shipmentCreationAttributes> implements item_bid_shipmentAttributes {
  item_bid_id?: number;
  shipment_id!: number;

  // item_bid_shipment belongsTo item_bid via item_bid_id
  item_bid!: item_bid;
  getItem_bid!: Sequelize.BelongsToGetAssociationMixin<item_bid>;
  setItem_bid!: Sequelize.BelongsToSetAssociationMixin<item_bid, item_bidId>;
  createItem_bid!: Sequelize.BelongsToCreateAssociationMixin<item_bid>;
  // item_bid_shipment belongsTo shipment via shipment_id
  shipment!: shipment;
  getShipment!: Sequelize.BelongsToGetAssociationMixin<shipment>;
  setShipment!: Sequelize.BelongsToSetAssociationMixin<shipment, shipmentId>;
  createShipment!: Sequelize.BelongsToCreateAssociationMixin<shipment>;

  static initModel(sequelize: Sequelize.Sequelize): typeof item_bid_shipment {
    return item_bid_shipment.init({
    item_bid_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'item_bid',
        key: 'id'
      }
    },
    shipment_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'shipment',
        key: 'shipment_id'
      }
    }
  }, {
    sequelize,
    tableName: 'item_bid_shipment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shipment_id" },
        ]
      },
      {
        name: "FK_ItemBid_SHIPMENT_ItemBid_ID",
        using: "BTREE",
        fields: [
          { name: "item_bid_id" },
        ]
      },
    ]
  });
  }
}
