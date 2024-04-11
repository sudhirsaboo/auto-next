import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { evt_schedule, evt_scheduleId } from './evt_schedule';

export interface schedule_recurrenceAttributes {
  schedule_id: number;
  recurrence?: string;
}

export type schedule_recurrenceOptionalAttributes = "recurrence";
export type schedule_recurrenceCreationAttributes = Optional<schedule_recurrenceAttributes, schedule_recurrenceOptionalAttributes>;

export class schedule_recurrence extends Model<schedule_recurrenceAttributes, schedule_recurrenceCreationAttributes> implements schedule_recurrenceAttributes {
  schedule_id!: number;
  recurrence?: string;

  // schedule_recurrence belongsTo evt_schedule via schedule_id
  schedule!: evt_schedule;
  getSchedule!: Sequelize.BelongsToGetAssociationMixin<evt_schedule>;
  setSchedule!: Sequelize.BelongsToSetAssociationMixin<evt_schedule, evt_scheduleId>;
  createSchedule!: Sequelize.BelongsToCreateAssociationMixin<evt_schedule>;

  static initModel(sequelize: Sequelize.Sequelize): typeof schedule_recurrence {
    return schedule_recurrence.init({
    schedule_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'evt_schedule',
        key: 'id'
      }
    },
    recurrence: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'schedule_recurrence',
    timestamps: false,
    indexes: [
      {
        name: "FK2whvc455kxh8etqgfyb7bcsvd",
        using: "BTREE",
        fields: [
          { name: "schedule_id" },
        ]
      },
    ]
  });
  }
}
