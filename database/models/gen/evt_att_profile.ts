import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { evt_attendee, evt_attendeeId } from './evt_attendee';
import type { user, userId } from './user';

export interface evt_att_profileAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  age: number;
  birth_date?: Date;
  blog?: string;
  cell_phone?: string;
  company?: string;
  email?: string;
  first_name?: string;
  gender?: string;
  job_title?: string;
  last_name?: string;
  prefix?: string;
  suffix?: string;
  website?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
}

export type evt_att_profilePk = "id";
export type evt_att_profileId = evt_att_profile[evt_att_profilePk];
export type evt_att_profileOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "birth_date" | "blog" | "cell_phone" | "company" | "email" | "first_name" | "gender" | "job_title" | "last_name" | "prefix" | "suffix" | "website" | "created_by_id" | "last_modified_by_id" | "organization_id";
export type evt_att_profileCreationAttributes = Optional<evt_att_profileAttributes, evt_att_profileOptionalAttributes>;

export class evt_att_profile extends Model<evt_att_profileAttributes, evt_att_profileCreationAttributes> implements evt_att_profileAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  age!: number;
  birth_date?: Date;
  blog?: string;
  cell_phone?: string;
  company?: string;
  email?: string;
  first_name?: string;
  gender?: string;
  job_title?: string;
  last_name?: string;
  prefix?: string;
  suffix?: string;
  website?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;

  // evt_att_profile belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // evt_att_profile hasMany evt_attendee via profile_id
  evt_attendees!: evt_attendee[];
  getEvt_attendees!: Sequelize.HasManyGetAssociationsMixin<evt_attendee>;
  setEvt_attendees!: Sequelize.HasManySetAssociationsMixin<evt_attendee, evt_attendeeId>;
  addEvt_attendee!: Sequelize.HasManyAddAssociationMixin<evt_attendee, evt_attendeeId>;
  addEvt_attendees!: Sequelize.HasManyAddAssociationsMixin<evt_attendee, evt_attendeeId>;
  createEvt_attendee!: Sequelize.HasManyCreateAssociationMixin<evt_attendee>;
  removeEvt_attendee!: Sequelize.HasManyRemoveAssociationMixin<evt_attendee, evt_attendeeId>;
  removeEvt_attendees!: Sequelize.HasManyRemoveAssociationsMixin<evt_attendee, evt_attendeeId>;
  hasEvt_attendee!: Sequelize.HasManyHasAssociationMixin<evt_attendee, evt_attendeeId>;
  hasEvt_attendees!: Sequelize.HasManyHasAssociationsMixin<evt_attendee, evt_attendeeId>;
  countEvt_attendees!: Sequelize.HasManyCountAssociationsMixin;
  // evt_att_profile belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // evt_att_profile belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof evt_att_profile {
    return evt_att_profile.init({
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
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    birth_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    blog: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cell_phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    company: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    job_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    prefix: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    suffix: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    website: {
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
    tableName: 'evt_att_profile',
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
        name: "FKq0yq3lvejdc30autvyfrvn47m",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKrgs03tccrsw682yvort3bgpfb",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKj4mkorqwalpluhegmbt6gr8s3",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
    ]
  });
  }
}
