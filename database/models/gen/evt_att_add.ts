import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_address, ent_addressId } from './ent_address';
import type { ent_org, ent_orgId } from './ent_org';
import type { evt_attendee, evt_attendeeId } from './evt_attendee';
import type { user, userId } from './user';

export interface evt_att_addAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  home_id?: number;
  ship_id?: number;
  work_id?: number;
}

export type evt_att_addPk = "id";
export type evt_att_addId = evt_att_add[evt_att_addPk];
export type evt_att_addOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "created_by_id" | "last_modified_by_id" | "organization_id" | "home_id" | "ship_id" | "work_id";
export type evt_att_addCreationAttributes = Optional<evt_att_addAttributes, evt_att_addOptionalAttributes>;

export class evt_att_add extends Model<evt_att_addAttributes, evt_att_addCreationAttributes> implements evt_att_addAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  home_id?: number;
  ship_id?: number;
  work_id?: number;

  // evt_att_add belongsTo ent_address via home_id
  home!: ent_address;
  getHome!: Sequelize.BelongsToGetAssociationMixin<ent_address>;
  setHome!: Sequelize.BelongsToSetAssociationMixin<ent_address, ent_addressId>;
  createHome!: Sequelize.BelongsToCreateAssociationMixin<ent_address>;
  // evt_att_add belongsTo ent_address via ship_id
  ship!: ent_address;
  getShip!: Sequelize.BelongsToGetAssociationMixin<ent_address>;
  setShip!: Sequelize.BelongsToSetAssociationMixin<ent_address, ent_addressId>;
  createShip!: Sequelize.BelongsToCreateAssociationMixin<ent_address>;
  // evt_att_add belongsTo ent_address via work_id
  work!: ent_address;
  getWork!: Sequelize.BelongsToGetAssociationMixin<ent_address>;
  setWork!: Sequelize.BelongsToSetAssociationMixin<ent_address, ent_addressId>;
  createWork!: Sequelize.BelongsToCreateAssociationMixin<ent_address>;
  // evt_att_add belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // evt_att_add hasMany evt_attendee via addresses_id
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
  // evt_att_add belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // evt_att_add belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof evt_att_add {
    return evt_att_add.init({
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
    home_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'ent_address',
        key: 'id'
      }
    },
    ship_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'ent_address',
        key: 'id'
      }
    },
    work_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'ent_address',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'evt_att_add',
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
        name: "FKlpe7s6l2yjyp60tlrp6osti3e",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FK3nbjadjp59ymcqkvktijyotov",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKomclwk9o9fmwfhhbs9wrdj0pd",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FK2cxbrvnt2kb2tlqexqoavg8t7",
        using: "BTREE",
        fields: [
          { name: "home_id" },
        ]
      },
      {
        name: "FKbrwya37e527y6nl733be421x2",
        using: "BTREE",
        fields: [
          { name: "ship_id" },
        ]
      },
      {
        name: "FKobdpmmgrt8ewq5uruhyev4ufg",
        using: "BTREE",
        fields: [
          { name: "work_id" },
        ]
      },
    ]
  });
  }
}
