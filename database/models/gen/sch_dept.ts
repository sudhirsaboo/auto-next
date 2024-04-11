import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { sch_instructor, sch_instructorId } from './sch_instructor';
import type { sch_school, sch_schoolId } from './sch_school';
import type { sch_student, sch_studentId } from './sch_student';
import type { user, userId } from './user';

export interface sch_deptAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  chair?: any;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  school_id?: number;
}

export type sch_deptPk = "id";
export type sch_deptId = sch_dept[sch_deptPk];
export type sch_deptOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "chair" | "created_by_id" | "last_modified_by_id" | "organization_id" | "school_id";
export type sch_deptCreationAttributes = Optional<sch_deptAttributes, sch_deptOptionalAttributes>;

export class sch_dept extends Model<sch_deptAttributes, sch_deptCreationAttributes> implements sch_deptAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  chair?: any;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  school_id?: number;

  // sch_dept belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // sch_dept hasMany sch_instructor via department_id
  sch_instructors!: sch_instructor[];
  getSch_instructors!: Sequelize.HasManyGetAssociationsMixin<sch_instructor>;
  setSch_instructors!: Sequelize.HasManySetAssociationsMixin<sch_instructor, sch_instructorId>;
  addSch_instructor!: Sequelize.HasManyAddAssociationMixin<sch_instructor, sch_instructorId>;
  addSch_instructors!: Sequelize.HasManyAddAssociationsMixin<sch_instructor, sch_instructorId>;
  createSch_instructor!: Sequelize.HasManyCreateAssociationMixin<sch_instructor>;
  removeSch_instructor!: Sequelize.HasManyRemoveAssociationMixin<sch_instructor, sch_instructorId>;
  removeSch_instructors!: Sequelize.HasManyRemoveAssociationsMixin<sch_instructor, sch_instructorId>;
  hasSch_instructor!: Sequelize.HasManyHasAssociationMixin<sch_instructor, sch_instructorId>;
  hasSch_instructors!: Sequelize.HasManyHasAssociationsMixin<sch_instructor, sch_instructorId>;
  countSch_instructors!: Sequelize.HasManyCountAssociationsMixin;
  // sch_dept hasMany sch_student via department_id
  sch_students!: sch_student[];
  getSch_students!: Sequelize.HasManyGetAssociationsMixin<sch_student>;
  setSch_students!: Sequelize.HasManySetAssociationsMixin<sch_student, sch_studentId>;
  addSch_student!: Sequelize.HasManyAddAssociationMixin<sch_student, sch_studentId>;
  addSch_students!: Sequelize.HasManyAddAssociationsMixin<sch_student, sch_studentId>;
  createSch_student!: Sequelize.HasManyCreateAssociationMixin<sch_student>;
  removeSch_student!: Sequelize.HasManyRemoveAssociationMixin<sch_student, sch_studentId>;
  removeSch_students!: Sequelize.HasManyRemoveAssociationsMixin<sch_student, sch_studentId>;
  hasSch_student!: Sequelize.HasManyHasAssociationMixin<sch_student, sch_studentId>;
  hasSch_students!: Sequelize.HasManyHasAssociationsMixin<sch_student, sch_studentId>;
  countSch_students!: Sequelize.HasManyCountAssociationsMixin;
  // sch_dept belongsTo sch_school via school_id
  school!: sch_school;
  getSchool!: Sequelize.BelongsToGetAssociationMixin<sch_school>;
  setSchool!: Sequelize.BelongsToSetAssociationMixin<sch_school, sch_schoolId>;
  createSchool!: Sequelize.BelongsToCreateAssociationMixin<sch_school>;
  // sch_dept belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // sch_dept belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof sch_dept {
    return sch_dept.init({
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
    chair: {
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
    school_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'sch_school',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'sch_dept',
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
        name: "FK7jywm0y5cwc71jlrj7diuqmhp",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKjwein2pkcehswmc9lip7l7qdj",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKti5wearuat21rwsdr277fd574",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FK44ftm0c87uovsa8xfbgqmygee",
        using: "BTREE",
        fields: [
          { name: "school_id" },
        ]
      },
    ]
  });
  }
}
