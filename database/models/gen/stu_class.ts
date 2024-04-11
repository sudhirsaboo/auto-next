import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { stu_regist, stu_registId } from './stu_regist';
import type { user, userId } from './user';

export interface stu_classAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  class_day?: string;
  end_date?: Date;
  end_time?: string;
  location?: string;
  sort_order: number;
  start_date?: Date;
  start_time?: string;
  title?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
}

export type stu_classPk = "id";
export type stu_classId = stu_class[stu_classPk];
export type stu_classOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "class_day" | "end_date" | "end_time" | "location" | "start_date" | "start_time" | "title" | "created_by_id" | "last_modified_by_id" | "organization_id";
export type stu_classCreationAttributes = Optional<stu_classAttributes, stu_classOptionalAttributes>;

export class stu_class extends Model<stu_classAttributes, stu_classCreationAttributes> implements stu_classAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  class_day?: string;
  end_date?: Date;
  end_time?: string;
  location?: string;
  sort_order!: number;
  start_date?: Date;
  start_time?: string;
  title?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;

  // stu_class belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // stu_class hasMany stu_regist via class_id
  stu_regists!: stu_regist[];
  getStu_regists!: Sequelize.HasManyGetAssociationsMixin<stu_regist>;
  setStu_regists!: Sequelize.HasManySetAssociationsMixin<stu_regist, stu_registId>;
  addStu_regist!: Sequelize.HasManyAddAssociationMixin<stu_regist, stu_registId>;
  addStu_regists!: Sequelize.HasManyAddAssociationsMixin<stu_regist, stu_registId>;
  createStu_regist!: Sequelize.HasManyCreateAssociationMixin<stu_regist>;
  removeStu_regist!: Sequelize.HasManyRemoveAssociationMixin<stu_regist, stu_registId>;
  removeStu_regists!: Sequelize.HasManyRemoveAssociationsMixin<stu_regist, stu_registId>;
  hasStu_regist!: Sequelize.HasManyHasAssociationMixin<stu_regist, stu_registId>;
  hasStu_regists!: Sequelize.HasManyHasAssociationsMixin<stu_regist, stu_registId>;
  countStu_regists!: Sequelize.HasManyCountAssociationsMixin;
  // stu_class belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // stu_class belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof stu_class {
    return stu_class.init({
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
    class_day: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    end_time: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sort_order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    start_time: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
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
    }
  }, {
    sequelize,
    tableName: 'stu_class',
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
        name: "FKdynchkkwwxwcsjx3pwhl19ukc",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FK2yrvjjowv9225px5ufmjttfgh",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FK5bx43ayv2ec32h89p1mb7mqcc",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
    ]
  });
  }
}
