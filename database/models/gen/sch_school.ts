import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { sch_dept, sch_deptId } from './sch_dept';
import type { user, userId } from './user';

export interface sch_schoolAttributes {
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
}

export type sch_schoolPk = "id";
export type sch_schoolId = sch_school[sch_schoolPk];
export type sch_schoolOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "created_by_id" | "last_modified_by_id" | "organization_id";
export type sch_schoolCreationAttributes = Optional<sch_schoolAttributes, sch_schoolOptionalAttributes>;

export class sch_school extends Model<sch_schoolAttributes, sch_schoolCreationAttributes> implements sch_schoolAttributes {
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

  // sch_school belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // sch_school hasMany sch_dept via school_id
  sch_depts!: sch_dept[];
  getSch_depts!: Sequelize.HasManyGetAssociationsMixin<sch_dept>;
  setSch_depts!: Sequelize.HasManySetAssociationsMixin<sch_dept, sch_deptId>;
  addSch_dept!: Sequelize.HasManyAddAssociationMixin<sch_dept, sch_deptId>;
  addSch_depts!: Sequelize.HasManyAddAssociationsMixin<sch_dept, sch_deptId>;
  createSch_dept!: Sequelize.HasManyCreateAssociationMixin<sch_dept>;
  removeSch_dept!: Sequelize.HasManyRemoveAssociationMixin<sch_dept, sch_deptId>;
  removeSch_depts!: Sequelize.HasManyRemoveAssociationsMixin<sch_dept, sch_deptId>;
  hasSch_dept!: Sequelize.HasManyHasAssociationMixin<sch_dept, sch_deptId>;
  hasSch_depts!: Sequelize.HasManyHasAssociationsMixin<sch_dept, sch_deptId>;
  countSch_depts!: Sequelize.HasManyCountAssociationsMixin;
  // sch_school belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // sch_school belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof sch_school {
    return sch_school.init({
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
    }
  }, {
    sequelize,
    tableName: 'sch_school',
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
        name: "FK4cd7hflkgvawndu7qh3d4wma5",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKronv877ix9im6x1x5qm1mcyhc",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKo3bmgtm6lqd8d8tqnugiukcjp",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
    ]
  });
  }
}
