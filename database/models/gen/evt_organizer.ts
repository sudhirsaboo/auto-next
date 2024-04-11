import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { evt_program, evt_programId } from './evt_program';
import type { user, userId } from './user';

export interface evt_organizerAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  url?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
}

export type evt_organizerPk = "id";
export type evt_organizerId = evt_organizer[evt_organizerPk];
export type evt_organizerOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "url" | "created_by_id" | "last_modified_by_id" | "organization_id";
export type evt_organizerCreationAttributes = Optional<evt_organizerAttributes, evt_organizerOptionalAttributes>;

export class evt_organizer extends Model<evt_organizerAttributes, evt_organizerCreationAttributes> implements evt_organizerAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  url?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;

  // evt_organizer belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // evt_organizer hasMany evt_program via organizer_id
  evt_programs!: evt_program[];
  getEvt_programs!: Sequelize.HasManyGetAssociationsMixin<evt_program>;
  setEvt_programs!: Sequelize.HasManySetAssociationsMixin<evt_program, evt_programId>;
  addEvt_program!: Sequelize.HasManyAddAssociationMixin<evt_program, evt_programId>;
  addEvt_programs!: Sequelize.HasManyAddAssociationsMixin<evt_program, evt_programId>;
  createEvt_program!: Sequelize.HasManyCreateAssociationMixin<evt_program>;
  removeEvt_program!: Sequelize.HasManyRemoveAssociationMixin<evt_program, evt_programId>;
  removeEvt_programs!: Sequelize.HasManyRemoveAssociationsMixin<evt_program, evt_programId>;
  hasEvt_program!: Sequelize.HasManyHasAssociationMixin<evt_program, evt_programId>;
  hasEvt_programs!: Sequelize.HasManyHasAssociationsMixin<evt_program, evt_programId>;
  countEvt_programs!: Sequelize.HasManyCountAssociationsMixin;
  // evt_organizer belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // evt_organizer belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof evt_organizer {
    return evt_organizer.init({
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
    url: {
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
    tableName: 'evt_organizer',
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
        name: "FKl683mv079091tvkqyv8rk95cd",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKn00t2a2ybf52lk86r7gp37s7m",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FK5j74gi2mfji0qt110xmyn2uri",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
    ]
  });
  }
}
