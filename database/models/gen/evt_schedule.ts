import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { evt_program, evt_programId } from './evt_program';
import type { schedule_recurrence, schedule_recurrenceId } from './schedule_recurrence';
import type { upload, uploadId } from './upload';
import type { user, userId } from './user';

export interface evt_scheduleAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  end?: Date;
  start?: Date;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  cover_id?: number;
}

export type evt_schedulePk = "id";
export type evt_scheduleId = evt_schedule[evt_schedulePk];
export type evt_scheduleOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "end" | "start" | "created_by_id" | "last_modified_by_id" | "organization_id" | "cover_id";
export type evt_scheduleCreationAttributes = Optional<evt_scheduleAttributes, evt_scheduleOptionalAttributes>;

export class evt_schedule extends Model<evt_scheduleAttributes, evt_scheduleCreationAttributes> implements evt_scheduleAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  end?: Date;
  start?: Date;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  cover_id?: number;

  // evt_schedule belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // evt_schedule hasMany evt_program via schedule_id
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
  // evt_schedule hasMany schedule_recurrence via schedule_id
  schedule_recurrences!: schedule_recurrence[];
  getSchedule_recurrences!: Sequelize.HasManyGetAssociationsMixin<schedule_recurrence>;
  setSchedule_recurrences!: Sequelize.HasManySetAssociationsMixin<schedule_recurrence, schedule_recurrenceId>;
  addSchedule_recurrence!: Sequelize.HasManyAddAssociationMixin<schedule_recurrence, schedule_recurrenceId>;
  addSchedule_recurrences!: Sequelize.HasManyAddAssociationsMixin<schedule_recurrence, schedule_recurrenceId>;
  createSchedule_recurrence!: Sequelize.HasManyCreateAssociationMixin<schedule_recurrence>;
  removeSchedule_recurrence!: Sequelize.HasManyRemoveAssociationMixin<schedule_recurrence, schedule_recurrenceId>;
  removeSchedule_recurrences!: Sequelize.HasManyRemoveAssociationsMixin<schedule_recurrence, schedule_recurrenceId>;
  hasSchedule_recurrence!: Sequelize.HasManyHasAssociationMixin<schedule_recurrence, schedule_recurrenceId>;
  hasSchedule_recurrences!: Sequelize.HasManyHasAssociationsMixin<schedule_recurrence, schedule_recurrenceId>;
  countSchedule_recurrences!: Sequelize.HasManyCountAssociationsMixin;
  // evt_schedule belongsTo upload via cover_id
  cover!: upload;
  getCover!: Sequelize.BelongsToGetAssociationMixin<upload>;
  setCover!: Sequelize.BelongsToSetAssociationMixin<upload, uploadId>;
  createCover!: Sequelize.BelongsToCreateAssociationMixin<upload>;
  // evt_schedule belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // evt_schedule belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof evt_schedule {
    return evt_schedule.init({
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
    end: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    start: {
      type: DataTypes.DATE(6),
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
    cover_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'upload',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'evt_schedule',
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
        name: "FKgth6swswlr0cm03ijft4yoxkn",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKpfs11omdp0oo3uafxu3evklo0",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKcbnto20d8ehlem01gpjlikh3r",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FK4md2p0qv1fvdgbchkjocyeg63",
        using: "BTREE",
        fields: [
          { name: "cover_id" },
        ]
      },
    ]
  });
  }
}
