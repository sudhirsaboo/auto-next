import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { sch_course, sch_courseId } from './sch_course';
import type { sch_enroll, sch_enrollId } from './sch_enroll';
import type { sch_instructor, sch_instructorId } from './sch_instructor';
import type { sch_student, sch_studentId } from './sch_student';
import type { user, userId } from './user';

export interface sch_classAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  section?: string;
  end?: Date;
  start?: Date;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  course_id?: number;
  instructor_id?: number;
}

export type sch_classPk = "id";
export type sch_classId = sch_class[sch_classPk];
export type sch_classOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "section" | "end" | "start" | "created_by_id" | "last_modified_by_id" | "organization_id" | "course_id" | "instructor_id";
export type sch_classCreationAttributes = Optional<sch_classAttributes, sch_classOptionalAttributes>;

export class sch_class extends Model<sch_classAttributes, sch_classCreationAttributes> implements sch_classAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  section?: string;
  end?: Date;
  start?: Date;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  course_id?: number;
  instructor_id?: number;

  // sch_class belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // sch_class hasMany sch_enroll via course_class_id
  sch_enrolls!: sch_enroll[];
  getSch_enrolls!: Sequelize.HasManyGetAssociationsMixin<sch_enroll>;
  setSch_enrolls!: Sequelize.HasManySetAssociationsMixin<sch_enroll, sch_enrollId>;
  addSch_enroll!: Sequelize.HasManyAddAssociationMixin<sch_enroll, sch_enrollId>;
  addSch_enrolls!: Sequelize.HasManyAddAssociationsMixin<sch_enroll, sch_enrollId>;
  createSch_enroll!: Sequelize.HasManyCreateAssociationMixin<sch_enroll>;
  removeSch_enroll!: Sequelize.HasManyRemoveAssociationMixin<sch_enroll, sch_enrollId>;
  removeSch_enrolls!: Sequelize.HasManyRemoveAssociationsMixin<sch_enroll, sch_enrollId>;
  hasSch_enroll!: Sequelize.HasManyHasAssociationMixin<sch_enroll, sch_enrollId>;
  hasSch_enrolls!: Sequelize.HasManyHasAssociationsMixin<sch_enroll, sch_enrollId>;
  countSch_enrolls!: Sequelize.HasManyCountAssociationsMixin;
  // sch_class belongsToMany sch_student via course_class_id and student_id
  student_id_sch_students!: sch_student[];
  getStudent_id_sch_students!: Sequelize.BelongsToManyGetAssociationsMixin<sch_student>;
  setStudent_id_sch_students!: Sequelize.BelongsToManySetAssociationsMixin<sch_student, sch_studentId>;
  addStudent_id_sch_student!: Sequelize.BelongsToManyAddAssociationMixin<sch_student, sch_studentId>;
  addStudent_id_sch_students!: Sequelize.BelongsToManyAddAssociationsMixin<sch_student, sch_studentId>;
  createStudent_id_sch_student!: Sequelize.BelongsToManyCreateAssociationMixin<sch_student>;
  removeStudent_id_sch_student!: Sequelize.BelongsToManyRemoveAssociationMixin<sch_student, sch_studentId>;
  removeStudent_id_sch_students!: Sequelize.BelongsToManyRemoveAssociationsMixin<sch_student, sch_studentId>;
  hasStudent_id_sch_student!: Sequelize.BelongsToManyHasAssociationMixin<sch_student, sch_studentId>;
  hasStudent_id_sch_students!: Sequelize.BelongsToManyHasAssociationsMixin<sch_student, sch_studentId>;
  countStudent_id_sch_students!: Sequelize.BelongsToManyCountAssociationsMixin;
  // sch_class belongsTo sch_course via course_id
  course!: sch_course;
  getCourse!: Sequelize.BelongsToGetAssociationMixin<sch_course>;
  setCourse!: Sequelize.BelongsToSetAssociationMixin<sch_course, sch_courseId>;
  createCourse!: Sequelize.BelongsToCreateAssociationMixin<sch_course>;
  // sch_class belongsTo sch_instructor via instructor_id
  instructor!: sch_instructor;
  getInstructor!: Sequelize.BelongsToGetAssociationMixin<sch_instructor>;
  setInstructor!: Sequelize.BelongsToSetAssociationMixin<sch_instructor, sch_instructorId>;
  createInstructor!: Sequelize.BelongsToCreateAssociationMixin<sch_instructor>;
  // sch_class belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // sch_class belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof sch_class {
    return sch_class.init({
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
    section: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    course_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'sch_course',
        key: 'id'
      }
    },
    instructor_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'sch_instructor',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'sch_class',
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
        name: "FKn0qesiq41x92gd7o2ed4aqw0i",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKnq34di6sit1gne7metwaq7ktl",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKlf931397qo5m0o9np7l71nhm7",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKt43ja7mcgfiivhjmnfinvtgi0",
        using: "BTREE",
        fields: [
          { name: "course_id" },
        ]
      },
      {
        name: "FK2u7y8fdutb2jxawdr68ipqnpg",
        using: "BTREE",
        fields: [
          { name: "instructor_id" },
        ]
      },
    ]
  });
  }
}
