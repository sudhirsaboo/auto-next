import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { stu_class, stu_classId } from './stu_class';
import type { stu_receipt, stu_receiptId } from './stu_receipt';
import type { user, userId } from './user';

export interface stu_registAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  cellphone?: string;
  email?: string;
  end_date?: Date;
  fathers_name?: string;
  mothers_name?: string;
  phone?: string;
  start_date?: Date;
  student_age: number;
  student_name?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  class_id?: number;
}

export type stu_registPk = "id";
export type stu_registId = stu_regist[stu_registPk];
export type stu_registOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "cellphone" | "email" | "end_date" | "fathers_name" | "mothers_name" | "phone" | "start_date" | "student_name" | "created_by_id" | "last_modified_by_id" | "organization_id" | "class_id";
export type stu_registCreationAttributes = Optional<stu_registAttributes, stu_registOptionalAttributes>;

export class stu_regist extends Model<stu_registAttributes, stu_registCreationAttributes> implements stu_registAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  cellphone?: string;
  email?: string;
  end_date?: Date;
  fathers_name?: string;
  mothers_name?: string;
  phone?: string;
  start_date?: Date;
  student_age!: number;
  student_name?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  class_id?: number;

  // stu_regist belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // stu_regist belongsTo stu_class via class_id
  class!: stu_class;
  getClass!: Sequelize.BelongsToGetAssociationMixin<stu_class>;
  setClass!: Sequelize.BelongsToSetAssociationMixin<stu_class, stu_classId>;
  createClass!: Sequelize.BelongsToCreateAssociationMixin<stu_class>;
  // stu_regist hasMany stu_receipt via registration_id
  stu_receipts!: stu_receipt[];
  getStu_receipts!: Sequelize.HasManyGetAssociationsMixin<stu_receipt>;
  setStu_receipts!: Sequelize.HasManySetAssociationsMixin<stu_receipt, stu_receiptId>;
  addStu_receipt!: Sequelize.HasManyAddAssociationMixin<stu_receipt, stu_receiptId>;
  addStu_receipts!: Sequelize.HasManyAddAssociationsMixin<stu_receipt, stu_receiptId>;
  createStu_receipt!: Sequelize.HasManyCreateAssociationMixin<stu_receipt>;
  removeStu_receipt!: Sequelize.HasManyRemoveAssociationMixin<stu_receipt, stu_receiptId>;
  removeStu_receipts!: Sequelize.HasManyRemoveAssociationsMixin<stu_receipt, stu_receiptId>;
  hasStu_receipt!: Sequelize.HasManyHasAssociationMixin<stu_receipt, stu_receiptId>;
  hasStu_receipts!: Sequelize.HasManyHasAssociationsMixin<stu_receipt, stu_receiptId>;
  countStu_receipts!: Sequelize.HasManyCountAssociationsMixin;
  // stu_regist belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // stu_regist belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof stu_regist {
    return stu_regist.init({
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
    cellphone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    fathers_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mothers_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    student_age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    student_name: {
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
    },
    class_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'stu_class',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'stu_regist',
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
        name: "FKdmj6e5kmr7bt7w5m5k4dholth",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKrcmskmhvh2tctho1itv8av8xv",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKt8einr3f4wqqi7byat5dckdqk",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKqo4utjb86o1im50q4c7ycd2aw",
        using: "BTREE",
        fields: [
          { name: "class_id" },
        ]
      },
    ]
  });
  }
}
