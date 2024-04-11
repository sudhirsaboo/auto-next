import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { pgm_quest, pgm_questId } from './pgm_quest';
import type { user, userId } from './user';

export interface pgm_answersAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  answer?: string;
  question?: string;
  question_id?: string;
  type?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  questionnaire_id?: number;
}

export type pgm_answersPk = "id";
export type pgm_answersId = pgm_answers[pgm_answersPk];
export type pgm_answersOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "answer" | "question" | "question_id" | "type" | "created_by_id" | "last_modified_by_id" | "organization_id" | "questionnaire_id";
export type pgm_answersCreationAttributes = Optional<pgm_answersAttributes, pgm_answersOptionalAttributes>;

export class pgm_answers extends Model<pgm_answersAttributes, pgm_answersCreationAttributes> implements pgm_answersAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  answer?: string;
  question?: string;
  question_id?: string;
  type?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  questionnaire_id?: number;

  // pgm_answers belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // pgm_answers belongsTo pgm_quest via questionnaire_id
  questionnaire!: pgm_quest;
  getQuestionnaire!: Sequelize.BelongsToGetAssociationMixin<pgm_quest>;
  setQuestionnaire!: Sequelize.BelongsToSetAssociationMixin<pgm_quest, pgm_questId>;
  createQuestionnaire!: Sequelize.BelongsToCreateAssociationMixin<pgm_quest>;
  // pgm_answers belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // pgm_answers belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof pgm_answers {
    return pgm_answers.init({
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
    answer: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    question: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    question_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
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
    questionnaire_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'pgm_quest',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'pgm_answers',
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
        name: "FK6apq591aejeijlbytjgi5ngxj",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FK3in71u1em98awfspaimenarhf",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKmnn99147xctcnncphe5u4lxhg",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FK7mx7fmwd1km2xhxe7ej2tgn8q",
        using: "BTREE",
        fields: [
          { name: "questionnaire_id" },
        ]
      },
    ]
  });
  }
}
