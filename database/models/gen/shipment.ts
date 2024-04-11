import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_address, ent_addressId } from './ent_address';
import type { item_bid_shipment, item_bid_shipmentCreationAttributes, item_bid_shipmentId } from './item_bid_shipment';
import type { user, userId } from './user';

export interface shipmentAttributes {
  shipment_id: number;
  created: Date;
  inspection_period_days: number;
  shipment_state: string;
  obj_version?: number;
  buyer_id: number;
  delivery_address_id: number;
  seller_id: number;
}

export type shipmentPk = "shipment_id";
export type shipmentId = shipment[shipmentPk];
export type shipmentOptionalAttributes = "obj_version";
export type shipmentCreationAttributes = Optional<shipmentAttributes, shipmentOptionalAttributes>;

export class shipment extends Model<shipmentAttributes, shipmentCreationAttributes> implements shipmentAttributes {
  shipment_id!: number;
  created!: Date;
  inspection_period_days!: number;
  shipment_state!: string;
  obj_version?: number;
  buyer_id!: number;
  delivery_address_id!: number;
  seller_id!: number;

  // shipment belongsTo ent_address via delivery_address_id
  delivery_address!: ent_address;
  getDelivery_address!: Sequelize.BelongsToGetAssociationMixin<ent_address>;
  setDelivery_address!: Sequelize.BelongsToSetAssociationMixin<ent_address, ent_addressId>;
  createDelivery_address!: Sequelize.BelongsToCreateAssociationMixin<ent_address>;
  // shipment hasOne item_bid_shipment via shipment_id
  item_bid_shipment!: item_bid_shipment;
  getItem_bid_shipment!: Sequelize.HasOneGetAssociationMixin<item_bid_shipment>;
  setItem_bid_shipment!: Sequelize.HasOneSetAssociationMixin<item_bid_shipment, item_bid_shipmentId>;
  createItem_bid_shipment!: Sequelize.HasOneCreateAssociationMixin<item_bid_shipment>;
  // shipment belongsTo user via buyer_id
  buyer!: user;
  getBuyer!: Sequelize.BelongsToGetAssociationMixin<user>;
  setBuyer!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createBuyer!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // shipment belongsTo user via seller_id
  seller!: user;
  getSeller!: Sequelize.BelongsToGetAssociationMixin<user>;
  setSeller!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createSeller!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof shipment {
    return shipment.init({
    shipment_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    created: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    inspection_period_days: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shipment_state: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    obj_version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    buyer_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    delivery_address_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'ent_address',
        key: 'id'
      }
    },
    seller_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'shipment',
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
        name: "FK_SHIPMENT_BUYER_ID",
        using: "BTREE",
        fields: [
          { name: "buyer_id" },
        ]
      },
      {
        name: "FK_SHIPMENT_DELIVERY_ADDRESS_ID",
        using: "BTREE",
        fields: [
          { name: "delivery_address_id" },
        ]
      },
      {
        name: "FK_SHIPMENT_SELLER_ID",
        using: "BTREE",
        fields: [
          { name: "seller_id" },
        ]
      },
    ]
  });
  }
}
