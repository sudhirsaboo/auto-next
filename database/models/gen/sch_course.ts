import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { sch_class, sch_classId } from './sch_class';
import type { user, userId } from './user';

export interface sch_courseAttributes {
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
  root_id?: number;
}

export type sch_coursePk = "id";
export type sch_courseId = sch_course[sch_coursePk];
export type sch_courseOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "created_by_id" | "last_modified_by_id" | "organization_id" | "root_id";
export type sch_courseCreationAttributes = Optional<sch_courseAttributes, sch_courseOptionalAttributes>;

export class sch_course extends Model<sch_courseAttributes, sch_courseCreationAttributes> implements sch_courseAttributes {
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
  root_id?: number;

  // sch_course belongsTo ent_org via root_id
  root!: ent_org;
  getRoot!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setRoot!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createRoot!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // sch_course belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // sch_course hasMany sch_class via course_id
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
  // sch_course belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // sch_course belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof sch_course {
    return sch_course.init({
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
    root_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'ent_org',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'sch_course',
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
        name: "FKo46n0vfdyjsv2gs5h3ijpkb4q",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FK4wqpur5nfogb0fx1mbvr9iqcy",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKl8cpo53wavlnrg6s473lrutwx",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKh1yoca3e62vf0lbrbyl00j8ll",
        using: "BTREE",
        fields: [
          { name: "root_id" },
        ]
      },
    ]
  });
  }
}
