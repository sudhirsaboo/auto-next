import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { pgm_submission, pgm_submissionId } from './pgm_submission';
import type { user, userId } from './user';

export interface pgm_judgeAttributes {
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
  judge_id?: number;
  program_submission_id?: number;
}

export type pgm_judgePk = "id";
export type pgm_judgeId = pgm_judge[pgm_judgePk];
export type pgm_judgeOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "created_by_id" | "last_modified_by_id" | "organization_id" | "judge_id" | "program_submission_id";
export type pgm_judgeCreationAttributes = Optional<pgm_judgeAttributes, pgm_judgeOptionalAttributes>;

export class pgm_judge extends Model<pgm_judgeAttributes, pgm_judgeCreationAttributes> implements pgm_judgeAttributes {
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
  judge_id?: number;
  program_submission_id?: number;

  // pgm_judge belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // pgm_judge belongsTo pgm_submission via program_submission_id
  program_submission!: pgm_submission;
  getProgram_submission!: Sequelize.BelongsToGetAssociationMixin<pgm_submission>;
  setProgram_submission!: Sequelize.BelongsToSetAssociationMixin<pgm_submission, pgm_submissionId>;
  createProgram_submission!: Sequelize.BelongsToCreateAssociationMixin<pgm_submission>;
  // pgm_judge belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // pgm_judge belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // pgm_judge belongsTo user via judge_id
  judge!: user;
  getJudge!: Sequelize.BelongsToGetAssociationMixin<user>;
  setJudge!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createJudge!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof pgm_judge {
    return pgm_judge.init({
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
    judge_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    program_submission_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'pgm_submission',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'pgm_judge',
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
        name: "FKntc1wvik5m3t5qobpfwvh16jw",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKckm4soqmvkqr12xpcbpkw44m4",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKt67l8p0r99iedlg8km05yqjgr",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKrtso6erck3c3fg389mxre8c35",
        using: "BTREE",
        fields: [
          { name: "judge_id" },
        ]
      },
      {
        name: "FKrh0fdt8pjpg1uk43vm2tkjow3",
        using: "BTREE",
        fields: [
          { name: "program_submission_id" },
        ]
      },
    ]
  });
  }
}
