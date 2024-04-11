import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { user, userId } from './user';

export interface evt_accesscodeAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  code?: string;
  end_date?: Date;
  quantity_available: number;
  start_date?: Date;
  ticket_ids?: any;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
}

export type evt_accesscodePk = "id";
export type evt_accesscodeId = evt_accesscode[evt_accesscodePk];
export type evt_accesscodeOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "code" | "end_date" | "start_date" | "ticket_ids" | "created_by_id" | "last_modified_by_id" | "organization_id";
export type evt_accesscodeCreationAttributes = Optional<evt_accesscodeAttributes, evt_accesscodeOptionalAttributes>;

export class evt_accesscode extends Model<evt_accesscodeAttributes, evt_accesscodeCreationAttributes> implements evt_accesscodeAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  code?: string;
  end_date?: Date;
  quantity_available!: number;
  start_date?: Date;
  ticket_ids?: any;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;

  // evt_accesscode belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // evt_accesscode belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // evt_accesscode belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof evt_accesscode {
    return evt_accesscode.init({
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
    end_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    quantity_available: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    ticket_ids: {
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
    }
  }, {
    sequelize,
    tableName: 'evt_accesscode',
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
        name: "FKf9xrhoxrg3go4p1myc0w1yt28",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FK692srqsv992os44vo4nes69vd",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FK5qm63ucmj3r4id2g8xmsgqwyt",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
    ]
  });
  }
}
