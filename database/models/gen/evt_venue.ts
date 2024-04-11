import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_address, ent_addressId } from './ent_address';
import type { ent_org, ent_orgId } from './ent_org';
import type { evt_program, evt_programId } from './evt_program';
import type { user, userId } from './user';

export interface evt_venueAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  latitude?: string;
  longitude?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  address_id?: number;
}

export type evt_venuePk = "id";
export type evt_venueId = evt_venue[evt_venuePk];
export type evt_venueOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "latitude" | "longitude" | "created_by_id" | "last_modified_by_id" | "organization_id" | "address_id";
export type evt_venueCreationAttributes = Optional<evt_venueAttributes, evt_venueOptionalAttributes>;

export class evt_venue extends Model<evt_venueAttributes, evt_venueCreationAttributes> implements evt_venueAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  latitude?: string;
  longitude?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  address_id?: number;

  // evt_venue belongsTo ent_address via address_id
  address!: ent_address;
  getAddress!: Sequelize.BelongsToGetAssociationMixin<ent_address>;
  setAddress!: Sequelize.BelongsToSetAssociationMixin<ent_address, ent_addressId>;
  createAddress!: Sequelize.BelongsToCreateAssociationMixin<ent_address>;
  // evt_venue belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // evt_venue hasMany evt_program via venue_id
  evt_programs!: evt_program[];
  getEvt_programs!: Sequelize.HasManyGetAssociationsMixin<evt_program>;
  setEvt_programs!: Sequelize.HasManySetAssociationsMixin<evt_program, evt_programId>;
  addEvt_program!: Sequelize.HasManyAddAssociationMixin<evt_program, evt_programId>;
  addEvt_programs!: Sequelize.HasManyAddAssociationsMixin<evt_program, evt_programId>;
  createEvt_program!: Sequelize.HasManyCreateAssociationMixin<evt_program>;
  removeEvt_program!: Sequelize.HasManyRemoveAssociationMixin<evt_program, evt_programId>;
  removeEvt_programs!: Sequelize.HasManyRemoveAssociationsMixin<evt_program, evt_programId>;
  hasEvt_program!: Sequelize.HasManyHasAssociationMixin<evt_program, evt_programId>;
  hasEvt_programs!: Sequelize.HasManyHasAssociationsMixin<evt_program, evt_programId>;
  countEvt_programs!: Sequelize.HasManyCountAssociationsMixin;
  // evt_venue belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // evt_venue belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof evt_venue {
    return evt_venue.init({
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
    latitude: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    longitude: {
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
    }
  }, {
    sequelize,
    tableName: 'evt_venue',
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
        name: "FKe0ohdn51jd7s0n49xsv7o5qy5",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKbn4w1ocgjy0jlffvgat6nit9d",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKbn9sjx38mnoqhhtm75wlri2x7",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKb0dg5iwn2f6p1shljr7syho7m",
        using: "BTREE",
        fields: [
          { name: "address_id" },
        ]
      },
    ]
  });
  }
}
