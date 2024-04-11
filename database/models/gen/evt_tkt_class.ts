import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { evt_attendee, evt_attendeeId } from './evt_attendee';
import type { user, userId } from './user';

export interface evt_tkt_classAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  auto_hide: boolean;
  auto_hide_after?: any;
  auto_hide_before?: any;
  cost?: string;
  donation: boolean;
  event_id?: any;
  fee?: string;
  free: boolean;
  hidden: boolean;
  hide_desc: boolean;
  include_fee: boolean;
  max_qty: number;
  min_qty: number;
  qty_sold: number;
  qty_total: number;
  sales_end?: any;
  sales_start?: any;
  sales_start_after?: string;
  split_fee: boolean;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
}

export type evt_tkt_classPk = "id";
export type evt_tkt_classId = evt_tkt_class[evt_tkt_classPk];
export type evt_tkt_classOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "auto_hide_after" | "auto_hide_before" | "cost" | "event_id" | "fee" | "sales_end" | "sales_start" | "sales_start_after" | "created_by_id" | "last_modified_by_id" | "organization_id";
export type evt_tkt_classCreationAttributes = Optional<evt_tkt_classAttributes, evt_tkt_classOptionalAttributes>;

export class evt_tkt_class extends Model<evt_tkt_classAttributes, evt_tkt_classCreationAttributes> implements evt_tkt_classAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  auto_hide!: boolean;
  auto_hide_after?: any;
  auto_hide_before?: any;
  cost?: string;
  donation!: boolean;
  event_id?: any;
  fee?: string;
  free!: boolean;
  hidden!: boolean;
  hide_desc!: boolean;
  include_fee!: boolean;
  max_qty!: number;
  min_qty!: number;
  qty_sold!: number;
  qty_total!: number;
  sales_end?: any;
  sales_start?: any;
  sales_start_after?: string;
  split_fee!: boolean;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;

  // evt_tkt_class belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // evt_tkt_class hasMany evt_attendee via ticket_class_id
  evt_attendees!: evt_attendee[];
  getEvt_attendees!: Sequelize.HasManyGetAssociationsMixin<evt_attendee>;
  setEvt_attendees!: Sequelize.HasManySetAssociationsMixin<evt_attendee, evt_attendeeId>;
  addEvt_attendee!: Sequelize.HasManyAddAssociationMixin<evt_attendee, evt_attendeeId>;
  addEvt_attendees!: Sequelize.HasManyAddAssociationsMixin<evt_attendee, evt_attendeeId>;
  createEvt_attendee!: Sequelize.HasManyCreateAssociationMixin<evt_attendee>;
  removeEvt_attendee!: Sequelize.HasManyRemoveAssociationMixin<evt_attendee, evt_attendeeId>;
  removeEvt_attendees!: Sequelize.HasManyRemoveAssociationsMixin<evt_attendee, evt_attendeeId>;
  hasEvt_attendee!: Sequelize.HasManyHasAssociationMixin<evt_attendee, evt_attendeeId>;
  hasEvt_attendees!: Sequelize.HasManyHasAssociationsMixin<evt_attendee, evt_attendeeId>;
  countEvt_attendees!: Sequelize.HasManyCountAssociationsMixin;
  // evt_tkt_class belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // evt_tkt_class belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof evt_tkt_class {
    return evt_tkt_class.init({
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
    auto_hide: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    auto_hide_after: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    auto_hide_before: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    cost: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    donation: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    event_id: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    fee: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    free: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    hidden: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    hide_desc: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    include_fee: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    max_qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    min_qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    qty_sold: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    qty_total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_end: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    sales_start: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    sales_start_after: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    split_fee: {
      type: DataTypes.BOOLEAN,
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
    }
  }, {
    sequelize,
    tableName: 'evt_tkt_class',
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
        name: "FKptct0ygf510kvc2n65m1cx04c",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKbh8s2crckrewrnfayh6xwltui",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FK4k9f8k5fy0uat8gcomligb171",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
    ]
  });
  }
}
