import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { sch_class, sch_classId } from './sch_class';
import type { sch_student, sch_studentId } from './sch_student';

export interface sch_enrollAttributes {
  course_class_id: number;
  student_id: number;
}

export type sch_enrollPk = "course_class_id" | "student_id";
export type sch_enrollId = sch_enroll[sch_enrollPk];
export type sch_enrollCreationAttributes = sch_enrollAttributes;

export class sch_enroll extends Model<sch_enrollAttributes, sch_enrollCreationAttributes> implements sch_enrollAttributes {
  course_class_id!: number;
  student_id!: number;

  // sch_enroll belongsTo sch_class via course_class_id
  course_class!: sch_class;
  getCourse_class!: Sequelize.BelongsToGetAssociationMixin<sch_class>;
  setCourse_class!: Sequelize.BelongsToSetAssociationMixin<sch_class, sch_classId>;
  createCourse_class!: Sequelize.BelongsToCreateAssociationMixin<sch_class>;
  // sch_enroll belongsTo sch_student via student_id
  student!: sch_student;
  getStudent!: Sequelize.BelongsToGetAssociationMixin<sch_student>;
  setStudent!: Sequelize.BelongsToSetAssociationMixin<sch_student, sch_studentId>;
  createStudent!: Sequelize.BelongsToCreateAssociationMixin<sch_student>;

  static initModel(sequelize: Sequelize.Sequelize): typeof sch_enroll {
    return sch_enroll.init({
    course_class_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sch_class',
        key: 'id'
      }
    },
    student_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sch_student',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'sch_enroll',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "course_class_id" },
          { name: "student_id" },
        ]
      },
      {
        name: "FKf0d33waof2jqfva8ccjubi5es",
        using: "BTREE",
        fields: [
          { name: "student_id" },
        ]
      },
    ]
  });
  }
}
