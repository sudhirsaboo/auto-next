import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { sch_class, sch_classId } from './sch_class';
import type { sch_dept, sch_deptId } from './sch_dept';
import type { sch_enroll, sch_enrollId } from './sch_enroll';
import type { sch_instructor, sch_instructorId } from './sch_instructor';
import type { user, userId } from './user';

export interface sch_studentAttributes {
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
  advisor_id?: number;
  department_id?: number;
}

export type sch_studentPk = "id";
export type sch_studentId = sch_student[sch_studentPk];
export type sch_studentOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "created_by_id" | "last_modified_by_id" | "organization_id" | "advisor_id" | "department_id";
export type sch_studentCreationAttributes = Optional<sch_studentAttributes, sch_studentOptionalAttributes>;

export class sch_student extends Model<sch_studentAttributes, sch_studentCreationAttributes> implements sch_studentAttributes {
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
  advisor_id?: number;
  department_id?: number;

  // sch_student belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // sch_student belongsTo sch_dept via department_id
  department!: sch_dept;
  getDepartment!: Sequelize.BelongsToGetAssociationMixin<sch_dept>;
  setDepartment!: Sequelize.BelongsToSetAssociationMixin<sch_dept, sch_deptId>;
  createDepartment!: Sequelize.BelongsToCreateAssociationMixin<sch_dept>;
  // sch_student belongsTo sch_instructor via advisor_id
  advisor!: sch_instructor;
  getAdvisor!: Sequelize.BelongsToGetAssociationMixin<sch_instructor>;
  setAdvisor!: Sequelize.BelongsToSetAssociationMixin<sch_instructor, sch_instructorId>;
  createAdvisor!: Sequelize.BelongsToCreateAssociationMixin<sch_instructor>;
  // sch_student belongsToMany sch_class via student_id and course_class_id
  course_class_id_sch_classes!: sch_class[];
  getCourse_class_id_sch_classes!: Sequelize.BelongsToManyGetAssociationsMixin<sch_class>;
  setCourse_class_id_sch_classes!: Sequelize.BelongsToManySetAssociationsMixin<sch_class, sch_classId>;
  addCourse_class_id_sch_class!: Sequelize.BelongsToManyAddAssociationMixin<sch_class, sch_classId>;
  addCourse_class_id_sch_classes!: Sequelize.BelongsToManyAddAssociationsMixin<sch_class, sch_classId>;
  createCourse_class_id_sch_class!: Sequelize.BelongsToManyCreateAssociationMixin<sch_class>;
  removeCourse_class_id_sch_class!: Sequelize.BelongsToManyRemoveAssociationMixin<sch_class, sch_classId>;
  removeCourse_class_id_sch_classes!: Sequelize.BelongsToManyRemoveAssociationsMixin<sch_class, sch_classId>;
  hasCourse_class_id_sch_class!: Sequelize.BelongsToManyHasAssociationMixin<sch_class, sch_classId>;
  hasCourse_class_id_sch_classes!: Sequelize.BelongsToManyHasAssociationsMixin<sch_class, sch_classId>;
  countCourse_class_id_sch_classes!: Sequelize.BelongsToManyCountAssociationsMixin;
  // sch_student hasMany sch_enroll via student_id
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
  // sch_student belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // sch_student belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof sch_student {
    return sch_student.init({
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
    advisor_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'sch_instructor',
        key: 'id'
      }
    },
    department_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'sch_dept',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'sch_student',
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
        name: "FKqxb4ysn0929ueyvqufwc0wg29",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKpkfpi0bysi898y4u6og4emlwq",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FK5st1jtddka3xp5lxvqx2npocy",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKr5pfmjimm46m0gmk2etgemcfp",
        using: "BTREE",
        fields: [
          { name: "advisor_id" },
        ]
      },
      {
        name: "FKied5yqxec0eqqosdtcvb4vy84",
        using: "BTREE",
        fields: [
          { name: "department_id" },
        ]
      },
    ]
  });
  }
}
