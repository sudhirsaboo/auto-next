import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { sch_class, sch_classId } from './sch_class';
import type { sch_dept, sch_deptId } from './sch_dept';
import type { sch_student, sch_studentId } from './sch_student';
import type { user, userId } from './user';

export interface sch_instructorAttributes {
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
  department_id?: number;
}

export type sch_instructorPk = "id";
export type sch_instructorId = sch_instructor[sch_instructorPk];
export type sch_instructorOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "created_by_id" | "last_modified_by_id" | "organization_id" | "department_id";
export type sch_instructorCreationAttributes = Optional<sch_instructorAttributes, sch_instructorOptionalAttributes>;

export class sch_instructor extends Model<sch_instructorAttributes, sch_instructorCreationAttributes> implements sch_instructorAttributes {
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
  department_id?: number;

  // sch_instructor belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // sch_instructor belongsTo sch_dept via department_id
  department!: sch_dept;
  getDepartment!: Sequelize.BelongsToGetAssociationMixin<sch_dept>;
  setDepartment!: Sequelize.BelongsToSetAssociationMixin<sch_dept, sch_deptId>;
  createDepartment!: Sequelize.BelongsToCreateAssociationMixin<sch_dept>;
  // sch_instructor hasMany sch_class via instructor_id
  sch_classes!: sch_class[];
  getSch_classes!: Sequelize.HasManyGetAssociationsMixin<sch_class>;
  setSch_classes!: Sequelize.HasManySetAssociationsMixin<sch_class, sch_classId>;
  addSch_class!: Sequelize.HasManyAddAssociationMixin<sch_class, sch_classId>;
  addSch_classes!: Sequelize.HasManyAddAssociationsMixin<sch_class, sch_classId>;
  createSch_class!: Sequelize.HasManyCreateAssociationMixin<sch_class>;
  removeSch_class!: Sequelize.HasManyRemoveAssociationMixin<sch_class, sch_classId>;
  removeSch_classes!: Sequelize.HasManyRemoveAssociationsMixin<sch_class, sch_classId>;
  hasSch_class!: Sequelize.HasManyHasAssociationMixin<sch_class, sch_classId>;
  hasSch_classes!: Sequelize.HasManyHasAssociationsMixin<sch_class, sch_classId>;
  countSch_classes!: Sequelize.HasManyCountAssociationsMixin;
  // sch_instructor hasMany sch_student via advisor_id
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
  // sch_instructor belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // sch_instructor belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof sch_instructor {
    return sch_instructor.init({
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
    tableName: 'sch_instructor',
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
        name: "FK97utpcguolwci7xc1x159n6yj",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKa4c2rgsesoxqotbl5qdqkn4bn",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKjka62gqt8iihnb5vg90e72xrb",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKnjmfp3bohmdi182yw1wk95uc0",
        using: "BTREE",
        fields: [
          { name: "department_id" },
        ]
      },
    ]
  });
  }
}
