import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { pgm_answers, pgm_answersId } from './pgm_answers';
import type { pgm_submission, pgm_submissionId } from './pgm_submission';
import type { user, userId } from './user';

export interface pgm_questAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  dbo?: Date;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  program_submission_id?: number;
}

export type pgm_questPk = "id";
export type pgm_questId = pgm_quest[pgm_questPk];
export type pgm_questOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "dbo" | "created_by_id" | "last_modified_by_id" | "organization_id" | "program_submission_id";
export type pgm_questCreationAttributes = Optional<pgm_questAttributes, pgm_questOptionalAttributes>;

export class pgm_quest extends Model<pgm_questAttributes, pgm_questCreationAttributes> implements pgm_questAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  dbo?: Date;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  program_submission_id?: number;

  // pgm_quest belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // pgm_quest hasMany pgm_answers via questionnaire_id
  pgm_answers!: pgm_answers[];
  getPgm_answers!: Sequelize.HasManyGetAssociationsMixin<pgm_answers>;
  setPgm_answers!: Sequelize.HasManySetAssociationsMixin<pgm_answers, pgm_answersId>;
  addPgm_answer!: Sequelize.HasManyAddAssociationMixin<pgm_answers, pgm_answersId>;
  addPgm_answers!: Sequelize.HasManyAddAssociationsMixin<pgm_answers, pgm_answersId>;
  createPgm_answer!: Sequelize.HasManyCreateAssociationMixin<pgm_answers>;
  removePgm_answer!: Sequelize.HasManyRemoveAssociationMixin<pgm_answers, pgm_answersId>;
  removePgm_answers!: Sequelize.HasManyRemoveAssociationsMixin<pgm_answers, pgm_answersId>;
  hasPgm_answer!: Sequelize.HasManyHasAssociationMixin<pgm_answers, pgm_answersId>;
  hasPgm_answers!: Sequelize.HasManyHasAssociationsMixin<pgm_answers, pgm_answersId>;
  countPgm_answers!: Sequelize.HasManyCountAssociationsMixin;
  // pgm_quest hasMany pgm_submission via questionnaire_id
  pgm_submissions!: pgm_submission[];
  getPgm_submissions!: Sequelize.HasManyGetAssociationsMixin<pgm_submission>;
  setPgm_submissions!: Sequelize.HasManySetAssociationsMixin<pgm_submission, pgm_submissionId>;
  addPgm_submission!: Sequelize.HasManyAddAssociationMixin<pgm_submission, pgm_submissionId>;
  addPgm_submissions!: Sequelize.HasManyAddAssociationsMixin<pgm_submission, pgm_submissionId>;
  createPgm_submission!: Sequelize.HasManyCreateAssociationMixin<pgm_submission>;
  removePgm_submission!: Sequelize.HasManyRemoveAssociationMixin<pgm_submission, pgm_submissionId>;
  removePgm_submissions!: Sequelize.HasManyRemoveAssociationsMixin<pgm_submission, pgm_submissionId>;
  hasPgm_submission!: Sequelize.HasManyHasAssociationMixin<pgm_submission, pgm_submissionId>;
  hasPgm_submissions!: Sequelize.HasManyHasAssociationsMixin<pgm_submission, pgm_submissionId>;
  countPgm_submissions!: Sequelize.HasManyCountAssociationsMixin;
  // pgm_quest belongsTo pgm_submission via program_submission_id
  program_submission!: pgm_submission;
  getProgram_submission!: Sequelize.BelongsToGetAssociationMixin<pgm_submission>;
  setProgram_submission!: Sequelize.BelongsToSetAssociationMixin<pgm_submission, pgm_submissionId>;
  createProgram_submission!: Sequelize.BelongsToCreateAssociationMixin<pgm_submission>;
  // pgm_quest belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // pgm_quest belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof pgm_quest {
    return pgm_quest.init({
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
    dbo: {
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
    tableName: 'pgm_quest',
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
        name: "FK5s5p1h2s79u9ixeug70cwwfhm",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FK7ik0xbr19wfmt8114j62gunld",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKa3p2t0uoindxhrtnpuq1mtmdw",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKjbq87h1halqe72dtigd32fyof",
        using: "BTREE",
        fields: [
          { name: "program_submission_id" },
        ]
      },
    ]
  });
  }
}
