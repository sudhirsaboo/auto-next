import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { affiliation, affiliationId } from './affiliation';
import type { ent_bill_add, ent_bill_addId } from './ent_bill_add';
import type { ent_contact, ent_contactId } from './ent_contact';
import type { ent_loc, ent_locId } from './ent_loc';
import type { ent_order_point, ent_order_pointId } from './ent_order_point';
import type { ent_org, ent_orgId } from './ent_org';
import type { evt_att_add, evt_att_addId } from './evt_att_add';
import type { evt_venue, evt_venueId } from './evt_venue';
import type { shipment, shipmentId } from './shipment';
import type { user, userId } from './user';

export interface ent_addressAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  city?: string;
  country?: string;
  county?: string;
  line1?: string;
  line2?: string;
  region?: string;
  state?: string;
  zipcode?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
}

export type ent_addressPk = "id";
export type ent_addressId = ent_address[ent_addressPk];
export type ent_addressOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "city" | "country" | "county" | "line1" | "line2" | "region" | "state" | "zipcode" | "created_by_id" | "last_modified_by_id" | "organization_id";
export type ent_addressCreationAttributes = Optional<ent_addressAttributes, ent_addressOptionalAttributes>;

export class ent_address extends Model<ent_addressAttributes, ent_addressCreationAttributes> implements ent_addressAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  city?: string;
  country?: string;
  county?: string;
  line1?: string;
  line2?: string;
  region?: string;
  state?: string;
  zipcode?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;

  // ent_address hasMany affiliation via address_id
  affiliations!: affiliation[];
  getAffiliations!: Sequelize.HasManyGetAssociationsMixin<affiliation>;
  setAffiliations!: Sequelize.HasManySetAssociationsMixin<affiliation, affiliationId>;
  addAffiliation!: Sequelize.HasManyAddAssociationMixin<affiliation, affiliationId>;
  addAffiliations!: Sequelize.HasManyAddAssociationsMixin<affiliation, affiliationId>;
  createAffiliation!: Sequelize.HasManyCreateAssociationMixin<affiliation>;
  removeAffiliation!: Sequelize.HasManyRemoveAssociationMixin<affiliation, affiliationId>;
  removeAffiliations!: Sequelize.HasManyRemoveAssociationsMixin<affiliation, affiliationId>;
  hasAffiliation!: Sequelize.HasManyHasAssociationMixin<affiliation, affiliationId>;
  hasAffiliations!: Sequelize.HasManyHasAssociationsMixin<affiliation, affiliationId>;
  countAffiliations!: Sequelize.HasManyCountAssociationsMixin;
  // ent_address hasMany ent_bill_add via address_id
  ent_bill_adds!: ent_bill_add[];
  getEnt_bill_adds!: Sequelize.HasManyGetAssociationsMixin<ent_bill_add>;
  setEnt_bill_adds!: Sequelize.HasManySetAssociationsMixin<ent_bill_add, ent_bill_addId>;
  addEnt_bill_add!: Sequelize.HasManyAddAssociationMixin<ent_bill_add, ent_bill_addId>;
  addEnt_bill_adds!: Sequelize.HasManyAddAssociationsMixin<ent_bill_add, ent_bill_addId>;
  createEnt_bill_add!: Sequelize.HasManyCreateAssociationMixin<ent_bill_add>;
  removeEnt_bill_add!: Sequelize.HasManyRemoveAssociationMixin<ent_bill_add, ent_bill_addId>;
  removeEnt_bill_adds!: Sequelize.HasManyRemoveAssociationsMixin<ent_bill_add, ent_bill_addId>;
  hasEnt_bill_add!: Sequelize.HasManyHasAssociationMixin<ent_bill_add, ent_bill_addId>;
  hasEnt_bill_adds!: Sequelize.HasManyHasAssociationsMixin<ent_bill_add, ent_bill_addId>;
  countEnt_bill_adds!: Sequelize.HasManyCountAssociationsMixin;
  // ent_address hasMany ent_contact via address_id
  ent_contacts!: ent_contact[];
  getEnt_contacts!: Sequelize.HasManyGetAssociationsMixin<ent_contact>;
  setEnt_contacts!: Sequelize.HasManySetAssociationsMixin<ent_contact, ent_contactId>;
  addEnt_contact!: Sequelize.HasManyAddAssociationMixin<ent_contact, ent_contactId>;
  addEnt_contacts!: Sequelize.HasManyAddAssociationsMixin<ent_contact, ent_contactId>;
  createEnt_contact!: Sequelize.HasManyCreateAssociationMixin<ent_contact>;
  removeEnt_contact!: Sequelize.HasManyRemoveAssociationMixin<ent_contact, ent_contactId>;
  removeEnt_contacts!: Sequelize.HasManyRemoveAssociationsMixin<ent_contact, ent_contactId>;
  hasEnt_contact!: Sequelize.HasManyHasAssociationMixin<ent_contact, ent_contactId>;
  hasEnt_contacts!: Sequelize.HasManyHasAssociationsMixin<ent_contact, ent_contactId>;
  countEnt_contacts!: Sequelize.HasManyCountAssociationsMixin;
  // ent_address hasMany ent_loc via address_id
  ent_locs!: ent_loc[];
  getEnt_locs!: Sequelize.HasManyGetAssociationsMixin<ent_loc>;
  setEnt_locs!: Sequelize.HasManySetAssociationsMixin<ent_loc, ent_locId>;
  addEnt_loc!: Sequelize.HasManyAddAssociationMixin<ent_loc, ent_locId>;
  addEnt_locs!: Sequelize.HasManyAddAssociationsMixin<ent_loc, ent_locId>;
  createEnt_loc!: Sequelize.HasManyCreateAssociationMixin<ent_loc>;
  removeEnt_loc!: Sequelize.HasManyRemoveAssociationMixin<ent_loc, ent_locId>;
  removeEnt_locs!: Sequelize.HasManyRemoveAssociationsMixin<ent_loc, ent_locId>;
  hasEnt_loc!: Sequelize.HasManyHasAssociationMixin<ent_loc, ent_locId>;
  hasEnt_locs!: Sequelize.HasManyHasAssociationsMixin<ent_loc, ent_locId>;
  countEnt_locs!: Sequelize.HasManyCountAssociationsMixin;
  // ent_address hasMany ent_order_point via address_id
  ent_order_points!: ent_order_point[];
  getEnt_order_points!: Sequelize.HasManyGetAssociationsMixin<ent_order_point>;
  setEnt_order_points!: Sequelize.HasManySetAssociationsMixin<ent_order_point, ent_order_pointId>;
  addEnt_order_point!: Sequelize.HasManyAddAssociationMixin<ent_order_point, ent_order_pointId>;
  addEnt_order_points!: Sequelize.HasManyAddAssociationsMixin<ent_order_point, ent_order_pointId>;
  createEnt_order_point!: Sequelize.HasManyCreateAssociationMixin<ent_order_point>;
  removeEnt_order_point!: Sequelize.HasManyRemoveAssociationMixin<ent_order_point, ent_order_pointId>;
  removeEnt_order_points!: Sequelize.HasManyRemoveAssociationsMixin<ent_order_point, ent_order_pointId>;
  hasEnt_order_point!: Sequelize.HasManyHasAssociationMixin<ent_order_point, ent_order_pointId>;
  hasEnt_order_points!: Sequelize.HasManyHasAssociationsMixin<ent_order_point, ent_order_pointId>;
  countEnt_order_points!: Sequelize.HasManyCountAssociationsMixin;
  // ent_address hasMany ent_org via address_id
  ent_orgs!: ent_org[];
  getEnt_orgs!: Sequelize.HasManyGetAssociationsMixin<ent_org>;
  setEnt_orgs!: Sequelize.HasManySetAssociationsMixin<ent_org, ent_orgId>;
  addEnt_org!: Sequelize.HasManyAddAssociationMixin<ent_org, ent_orgId>;
  addEnt_orgs!: Sequelize.HasManyAddAssociationsMixin<ent_org, ent_orgId>;
  createEnt_org!: Sequelize.HasManyCreateAssociationMixin<ent_org>;
  removeEnt_org!: Sequelize.HasManyRemoveAssociationMixin<ent_org, ent_orgId>;
  removeEnt_orgs!: Sequelize.HasManyRemoveAssociationsMixin<ent_org, ent_orgId>;
  hasEnt_org!: Sequelize.HasManyHasAssociationMixin<ent_org, ent_orgId>;
  hasEnt_orgs!: Sequelize.HasManyHasAssociationsMixin<ent_org, ent_orgId>;
  countEnt_orgs!: Sequelize.HasManyCountAssociationsMixin;
  // ent_address hasMany evt_att_add via home_id
  evt_att_adds!: evt_att_add[];
  getEvt_att_adds!: Sequelize.HasManyGetAssociationsMixin<evt_att_add>;
  setEvt_att_adds!: Sequelize.HasManySetAssociationsMixin<evt_att_add, evt_att_addId>;
  addEvt_att_add!: Sequelize.HasManyAddAssociationMixin<evt_att_add, evt_att_addId>;
  addEvt_att_adds!: Sequelize.HasManyAddAssociationsMixin<evt_att_add, evt_att_addId>;
  createEvt_att_add!: Sequelize.HasManyCreateAssociationMixin<evt_att_add>;
  removeEvt_att_add!: Sequelize.HasManyRemoveAssociationMixin<evt_att_add, evt_att_addId>;
  removeEvt_att_adds!: Sequelize.HasManyRemoveAssociationsMixin<evt_att_add, evt_att_addId>;
  hasEvt_att_add!: Sequelize.HasManyHasAssociationMixin<evt_att_add, evt_att_addId>;
  hasEvt_att_adds!: Sequelize.HasManyHasAssociationsMixin<evt_att_add, evt_att_addId>;
  countEvt_att_adds!: Sequelize.HasManyCountAssociationsMixin;
  // ent_address hasMany evt_att_add via ship_id
  ship_evt_att_adds!: evt_att_add[];
  getShip_evt_att_adds!: Sequelize.HasManyGetAssociationsMixin<evt_att_add>;
  setShip_evt_att_adds!: Sequelize.HasManySetAssociationsMixin<evt_att_add, evt_att_addId>;
  addShip_evt_att_add!: Sequelize.HasManyAddAssociationMixin<evt_att_add, evt_att_addId>;
  addShip_evt_att_adds!: Sequelize.HasManyAddAssociationsMixin<evt_att_add, evt_att_addId>;
  createShip_evt_att_add!: Sequelize.HasManyCreateAssociationMixin<evt_att_add>;
  removeShip_evt_att_add!: Sequelize.HasManyRemoveAssociationMixin<evt_att_add, evt_att_addId>;
  removeShip_evt_att_adds!: Sequelize.HasManyRemoveAssociationsMixin<evt_att_add, evt_att_addId>;
  hasShip_evt_att_add!: Sequelize.HasManyHasAssociationMixin<evt_att_add, evt_att_addId>;
  hasShip_evt_att_adds!: Sequelize.HasManyHasAssociationsMixin<evt_att_add, evt_att_addId>;
  countShip_evt_att_adds!: Sequelize.HasManyCountAssociationsMixin;
  // ent_address hasMany evt_att_add via work_id
  work_evt_att_adds!: evt_att_add[];
  getWork_evt_att_adds!: Sequelize.HasManyGetAssociationsMixin<evt_att_add>;
  setWork_evt_att_adds!: Sequelize.HasManySetAssociationsMixin<evt_att_add, evt_att_addId>;
  addWork_evt_att_add!: Sequelize.HasManyAddAssociationMixin<evt_att_add, evt_att_addId>;
  addWork_evt_att_adds!: Sequelize.HasManyAddAssociationsMixin<evt_att_add, evt_att_addId>;
  createWork_evt_att_add!: Sequelize.HasManyCreateAssociationMixin<evt_att_add>;
  removeWork_evt_att_add!: Sequelize.HasManyRemoveAssociationMixin<evt_att_add, evt_att_addId>;
  removeWork_evt_att_adds!: Sequelize.HasManyRemoveAssociationsMixin<evt_att_add, evt_att_addId>;
  hasWork_evt_att_add!: Sequelize.HasManyHasAssociationMixin<evt_att_add, evt_att_addId>;
  hasWork_evt_att_adds!: Sequelize.HasManyHasAssociationsMixin<evt_att_add, evt_att_addId>;
  countWork_evt_att_adds!: Sequelize.HasManyCountAssociationsMixin;
  // ent_address hasMany evt_venue via address_id
  evt_venues!: evt_venue[];
  getEvt_venues!: Sequelize.HasManyGetAssociationsMixin<evt_venue>;
  setEvt_venues!: Sequelize.HasManySetAssociationsMixin<evt_venue, evt_venueId>;
  addEvt_venue!: Sequelize.HasManyAddAssociationMixin<evt_venue, evt_venueId>;
  addEvt_venues!: Sequelize.HasManyAddAssociationsMixin<evt_venue, evt_venueId>;
  createEvt_venue!: Sequelize.HasManyCreateAssociationMixin<evt_venue>;
  removeEvt_venue!: Sequelize.HasManyRemoveAssociationMixin<evt_venue, evt_venueId>;
  removeEvt_venues!: Sequelize.HasManyRemoveAssociationsMixin<evt_venue, evt_venueId>;
  hasEvt_venue!: Sequelize.HasManyHasAssociationMixin<evt_venue, evt_venueId>;
  hasEvt_venues!: Sequelize.HasManyHasAssociationsMixin<evt_venue, evt_venueId>;
  countEvt_venues!: Sequelize.HasManyCountAssociationsMixin;
  // ent_address hasMany shipment via delivery_address_id
  shipments!: shipment[];
  getShipments!: Sequelize.HasManyGetAssociationsMixin<shipment>;
  setShipments!: Sequelize.HasManySetAssociationsMixin<shipment, shipmentId>;
  addShipment!: Sequelize.HasManyAddAssociationMixin<shipment, shipmentId>;
  addShipments!: Sequelize.HasManyAddAssociationsMixin<shipment, shipmentId>;
  createShipment!: Sequelize.HasManyCreateAssociationMixin<shipment>;
  removeShipment!: Sequelize.HasManyRemoveAssociationMixin<shipment, shipmentId>;
  removeShipments!: Sequelize.HasManyRemoveAssociationsMixin<shipment, shipmentId>;
  hasShipment!: Sequelize.HasManyHasAssociationMixin<shipment, shipmentId>;
  hasShipments!: Sequelize.HasManyHasAssociationsMixin<shipment, shipmentId>;
  countShipments!: Sequelize.HasManyCountAssociationsMixin;
  // ent_address belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // ent_address belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // ent_address belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ent_address {
    return ent_address.init({
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
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    county: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    region: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    zipcode: {
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
    }
  }, {
    sequelize,
    tableName: 'ent_address',
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
        name: "FKal0tfn2ee6cmws48oj65yv0ct",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKaa18uvw90gfo9vm80ltm41sjs",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FK77suflxch7qtvl0owx9iv2egu",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
    ]
  });
  }
}
