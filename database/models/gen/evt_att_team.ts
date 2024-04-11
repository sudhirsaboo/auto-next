import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { evt_program, evt_programId } from './evt_program';
import type { user, userId } from './user';

export interface evt_att_teamAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  date_joined?: any;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  program_id?: number;
}

export type evt_att_teamPk = "id";
export type evt_att_teamId = evt_att_team[evt_att_teamPk];
export type evt_att_teamOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "date_joined" | "created_by_id" | "last_modified_by_id" | "organization_id" | "program_id";
export type evt_att_teamCreationAttributes = Optional<evt_att_teamAttributes, evt_att_teamOptionalAttributes>;

export class evt_att_team extends Model<evt_att_teamAttributes, evt_att_teamCreationAttributes> implements evt_att_teamAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  date_joined?: any;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  program_id?: number;

  // evt_att_team belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // evt_att_team belongsTo evt_program via program_id
  program!: evt_program;
  getProgram!: Sequelize.BelongsToGetAssociationMixin<evt_program>;
  setProgram!: Sequelize.BelongsToSetAssociationMixin<evt_program, evt_programId>;
  createProgram!: Sequelize.BelongsToCreateAssociationMixin<evt_program>;
  // evt_att_team belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // evt_att_team belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof evt_att_team {
    return evt_att_team.init({
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
    date_joined: {
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
    program_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'evt_program',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'evt_att_team',
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
        name: "FKi2mswlbpi0y6w38622cv9mcsa",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FK9k3i72yqsm0urweyolpumkpg7",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKfgmepul31s8fvkxihevbep0yf",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKtau23heytcaq3oohk2lk7obpm",
        using: "BTREE",
        fields: [
          { name: "program_id" },
        ]
      },
    ]
  });
  }
}
