import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { time_line, time_lineId } from './time_line';
import type { user, userId } from './user';
import type { user_biography_affiliations, user_biography_affiliationsId } from './user_biography_affiliations';
import type { user_biography_awards_and_honors, user_biography_awards_and_honorsId } from './user_biography_awards_and_honors';
import type { user_biography_education, user_biography_educationId } from './user_biography_education';
import type { user_biography_exhibitions, user_biography_exhibitionsId } from './user_biography_exhibitions';
import type { user_biography_publications, user_biography_publicationsId } from './user_biography_publications';

export interface user_biographyAttributes {
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

export type user_biographyPk = "id";
export type user_biographyId = user_biography[user_biographyPk];
export type user_biographyOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "created_by_id" | "last_modified_by_id" | "organization_id";
export type user_biographyCreationAttributes = Optional<user_biographyAttributes, user_biographyOptionalAttributes>;

export class user_biography extends Model<user_biographyAttributes, user_biographyCreationAttributes> implements user_biographyAttributes {
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

  // user_biography belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // user_biography belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // user_biography belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // user_biography belongsToMany time_line via user_biography_id and affiliations_id
  affiliations_id_time_lines!: time_line[];
  getAffiliations_id_time_lines!: Sequelize.BelongsToManyGetAssociationsMixin<time_line>;
  setAffiliations_id_time_lines!: Sequelize.BelongsToManySetAssociationsMixin<time_line, time_lineId>;
  addAffiliations_id_time_line!: Sequelize.BelongsToManyAddAssociationMixin<time_line, time_lineId>;
  addAffiliations_id_time_lines!: Sequelize.BelongsToManyAddAssociationsMixin<time_line, time_lineId>;
  createAffiliations_id_time_line!: Sequelize.BelongsToManyCreateAssociationMixin<time_line>;
  removeAffiliations_id_time_line!: Sequelize.BelongsToManyRemoveAssociationMixin<time_line, time_lineId>;
  removeAffiliations_id_time_lines!: Sequelize.BelongsToManyRemoveAssociationsMixin<time_line, time_lineId>;
  hasAffiliations_id_time_line!: Sequelize.BelongsToManyHasAssociationMixin<time_line, time_lineId>;
  hasAffiliations_id_time_lines!: Sequelize.BelongsToManyHasAssociationsMixin<time_line, time_lineId>;
  countAffiliations_id_time_lines!: Sequelize.BelongsToManyCountAssociationsMixin;
  // user_biography belongsToMany time_line via user_biography_id and awards_and_honors_id
  awards_and_honors_id_time_lines!: time_line[];
  getAwards_and_honors_id_time_lines!: Sequelize.BelongsToManyGetAssociationsMixin<time_line>;
  setAwards_and_honors_id_time_lines!: Sequelize.BelongsToManySetAssociationsMixin<time_line, time_lineId>;
  addAwards_and_honors_id_time_line!: Sequelize.BelongsToManyAddAssociationMixin<time_line, time_lineId>;
  addAwards_and_honors_id_time_lines!: Sequelize.BelongsToManyAddAssociationsMixin<time_line, time_lineId>;
  createAwards_and_honors_id_time_line!: Sequelize.BelongsToManyCreateAssociationMixin<time_line>;
  removeAwards_and_honors_id_time_line!: Sequelize.BelongsToManyRemoveAssociationMixin<time_line, time_lineId>;
  removeAwards_and_honors_id_time_lines!: Sequelize.BelongsToManyRemoveAssociationsMixin<time_line, time_lineId>;
  hasAwards_and_honors_id_time_line!: Sequelize.BelongsToManyHasAssociationMixin<time_line, time_lineId>;
  hasAwards_and_honors_id_time_lines!: Sequelize.BelongsToManyHasAssociationsMixin<time_line, time_lineId>;
  countAwards_and_honors_id_time_lines!: Sequelize.BelongsToManyCountAssociationsMixin;
  // user_biography belongsToMany time_line via user_biography_id and education_id
  education_id_time_lines!: time_line[];
  getEducation_id_time_lines!: Sequelize.BelongsToManyGetAssociationsMixin<time_line>;
  setEducation_id_time_lines!: Sequelize.BelongsToManySetAssociationsMixin<time_line, time_lineId>;
  addEducation_id_time_line!: Sequelize.BelongsToManyAddAssociationMixin<time_line, time_lineId>;
  addEducation_id_time_lines!: Sequelize.BelongsToManyAddAssociationsMixin<time_line, time_lineId>;
  createEducation_id_time_line!: Sequelize.BelongsToManyCreateAssociationMixin<time_line>;
  removeEducation_id_time_line!: Sequelize.BelongsToManyRemoveAssociationMixin<time_line, time_lineId>;
  removeEducation_id_time_lines!: Sequelize.BelongsToManyRemoveAssociationsMixin<time_line, time_lineId>;
  hasEducation_id_time_line!: Sequelize.BelongsToManyHasAssociationMixin<time_line, time_lineId>;
  hasEducation_id_time_lines!: Sequelize.BelongsToManyHasAssociationsMixin<time_line, time_lineId>;
  countEducation_id_time_lines!: Sequelize.BelongsToManyCountAssociationsMixin;
  // user_biography belongsToMany time_line via user_biography_id and exhibitions_id
  exhibitions_id_time_lines!: time_line[];
  getExhibitions_id_time_lines!: Sequelize.BelongsToManyGetAssociationsMixin<time_line>;
  setExhibitions_id_time_lines!: Sequelize.BelongsToManySetAssociationsMixin<time_line, time_lineId>;
  addExhibitions_id_time_line!: Sequelize.BelongsToManyAddAssociationMixin<time_line, time_lineId>;
  addExhibitions_id_time_lines!: Sequelize.BelongsToManyAddAssociationsMixin<time_line, time_lineId>;
  createExhibitions_id_time_line!: Sequelize.BelongsToManyCreateAssociationMixin<time_line>;
  removeExhibitions_id_time_line!: Sequelize.BelongsToManyRemoveAssociationMixin<time_line, time_lineId>;
  removeExhibitions_id_time_lines!: Sequelize.BelongsToManyRemoveAssociationsMixin<time_line, time_lineId>;
  hasExhibitions_id_time_line!: Sequelize.BelongsToManyHasAssociationMixin<time_line, time_lineId>;
  hasExhibitions_id_time_lines!: Sequelize.BelongsToManyHasAssociationsMixin<time_line, time_lineId>;
  countExhibitions_id_time_lines!: Sequelize.BelongsToManyCountAssociationsMixin;
  // user_biography belongsToMany time_line via user_biography_id and publications_id
  publications_id_time_lines!: time_line[];
  getPublications_id_time_lines!: Sequelize.BelongsToManyGetAssociationsMixin<time_line>;
  setPublications_id_time_lines!: Sequelize.BelongsToManySetAssociationsMixin<time_line, time_lineId>;
  addPublications_id_time_line!: Sequelize.BelongsToManyAddAssociationMixin<time_line, time_lineId>;
  addPublications_id_time_lines!: Sequelize.BelongsToManyAddAssociationsMixin<time_line, time_lineId>;
  createPublications_id_time_line!: Sequelize.BelongsToManyCreateAssociationMixin<time_line>;
  removePublications_id_time_line!: Sequelize.BelongsToManyRemoveAssociationMixin<time_line, time_lineId>;
  removePublications_id_time_lines!: Sequelize.BelongsToManyRemoveAssociationsMixin<time_line, time_lineId>;
  hasPublications_id_time_line!: Sequelize.BelongsToManyHasAssociationMixin<time_line, time_lineId>;
  hasPublications_id_time_lines!: Sequelize.BelongsToManyHasAssociationsMixin<time_line, time_lineId>;
  countPublications_id_time_lines!: Sequelize.BelongsToManyCountAssociationsMixin;
  // user_biography hasMany user_biography_affiliations via user_biography_id
  user_biography_affiliations!: user_biography_affiliations[];
  getUser_biography_affiliations!: Sequelize.HasManyGetAssociationsMixin<user_biography_affiliations>;
  setUser_biography_affiliations!: Sequelize.HasManySetAssociationsMixin<user_biography_affiliations, user_biography_affiliationsId>;
  addUser_biography_affiliation!: Sequelize.HasManyAddAssociationMixin<user_biography_affiliations, user_biography_affiliationsId>;
  addUser_biography_affiliations!: Sequelize.HasManyAddAssociationsMixin<user_biography_affiliations, user_biography_affiliationsId>;
  createUser_biography_affiliation!: Sequelize.HasManyCreateAssociationMixin<user_biography_affiliations>;
  removeUser_biography_affiliation!: Sequelize.HasManyRemoveAssociationMixin<user_biography_affiliations, user_biography_affiliationsId>;
  removeUser_biography_affiliations!: Sequelize.HasManyRemoveAssociationsMixin<user_biography_affiliations, user_biography_affiliationsId>;
  hasUser_biography_affiliation!: Sequelize.HasManyHasAssociationMixin<user_biography_affiliations, user_biography_affiliationsId>;
  hasUser_biography_affiliations!: Sequelize.HasManyHasAssociationsMixin<user_biography_affiliations, user_biography_affiliationsId>;
  countUser_biography_affiliations!: Sequelize.HasManyCountAssociationsMixin;
  // user_biography hasMany user_biography_awards_and_honors via user_biography_id
  user_biography_awards_and_honors!: user_biography_awards_and_honors[];
  getUser_biography_awards_and_honors!: Sequelize.HasManyGetAssociationsMixin<user_biography_awards_and_honors>;
  setUser_biography_awards_and_honors!: Sequelize.HasManySetAssociationsMixin<user_biography_awards_and_honors, user_biography_awards_and_honorsId>;
  addUser_biography_awards_and_honor!: Sequelize.HasManyAddAssociationMixin<user_biography_awards_and_honors, user_biography_awards_and_honorsId>;
  addUser_biography_awards_and_honors!: Sequelize.HasManyAddAssociationsMixin<user_biography_awards_and_honors, user_biography_awards_and_honorsId>;
  createUser_biography_awards_and_honor!: Sequelize.HasManyCreateAssociationMixin<user_biography_awards_and_honors>;
  removeUser_biography_awards_and_honor!: Sequelize.HasManyRemoveAssociationMixin<user_biography_awards_and_honors, user_biography_awards_and_honorsId>;
  removeUser_biography_awards_and_honors!: Sequelize.HasManyRemoveAssociationsMixin<user_biography_awards_and_honors, user_biography_awards_and_honorsId>;
  hasUser_biography_awards_and_honor!: Sequelize.HasManyHasAssociationMixin<user_biography_awards_and_honors, user_biography_awards_and_honorsId>;
  hasUser_biography_awards_and_honors!: Sequelize.HasManyHasAssociationsMixin<user_biography_awards_and_honors, user_biography_awards_and_honorsId>;
  countUser_biography_awards_and_honors!: Sequelize.HasManyCountAssociationsMixin;
  // user_biography hasMany user_biography_education via user_biography_id
  user_biography_educations!: user_biography_education[];
  getUser_biography_educations!: Sequelize.HasManyGetAssociationsMixin<user_biography_education>;
  setUser_biography_educations!: Sequelize.HasManySetAssociationsMixin<user_biography_education, user_biography_educationId>;
  addUser_biography_education!: Sequelize.HasManyAddAssociationMixin<user_biography_education, user_biography_educationId>;
  addUser_biography_educations!: Sequelize.HasManyAddAssociationsMixin<user_biography_education, user_biography_educationId>;
  createUser_biography_education!: Sequelize.HasManyCreateAssociationMixin<user_biography_education>;
  removeUser_biography_education!: Sequelize.HasManyRemoveAssociationMixin<user_biography_education, user_biography_educationId>;
  removeUser_biography_educations!: Sequelize.HasManyRemoveAssociationsMixin<user_biography_education, user_biography_educationId>;
  hasUser_biography_education!: Sequelize.HasManyHasAssociationMixin<user_biography_education, user_biography_educationId>;
  hasUser_biography_educations!: Sequelize.HasManyHasAssociationsMixin<user_biography_education, user_biography_educationId>;
  countUser_biography_educations!: Sequelize.HasManyCountAssociationsMixin;
  // user_biography hasMany user_biography_exhibitions via user_biography_id
  user_biography_exhibitions!: user_biography_exhibitions[];
  getUser_biography_exhibitions!: Sequelize.HasManyGetAssociationsMixin<user_biography_exhibitions>;
  setUser_biography_exhibitions!: Sequelize.HasManySetAssociationsMixin<user_biography_exhibitions, user_biography_exhibitionsId>;
  addUser_biography_exhibition!: Sequelize.HasManyAddAssociationMixin<user_biography_exhibitions, user_biography_exhibitionsId>;
  addUser_biography_exhibitions!: Sequelize.HasManyAddAssociationsMixin<user_biography_exhibitions, user_biography_exhibitionsId>;
  createUser_biography_exhibition!: Sequelize.HasManyCreateAssociationMixin<user_biography_exhibitions>;
  removeUser_biography_exhibition!: Sequelize.HasManyRemoveAssociationMixin<user_biography_exhibitions, user_biography_exhibitionsId>;
  removeUser_biography_exhibitions!: Sequelize.HasManyRemoveAssociationsMixin<user_biography_exhibitions, user_biography_exhibitionsId>;
  hasUser_biography_exhibition!: Sequelize.HasManyHasAssociationMixin<user_biography_exhibitions, user_biography_exhibitionsId>;
  hasUser_biography_exhibitions!: Sequelize.HasManyHasAssociationsMixin<user_biography_exhibitions, user_biography_exhibitionsId>;
  countUser_biography_exhibitions!: Sequelize.HasManyCountAssociationsMixin;
  // user_biography hasMany user_biography_publications via user_biography_id
  user_biography_publications!: user_biography_publications[];
  getUser_biography_publications!: Sequelize.HasManyGetAssociationsMixin<user_biography_publications>;
  setUser_biography_publications!: Sequelize.HasManySetAssociationsMixin<user_biography_publications, user_biography_publicationsId>;
  addUser_biography_publication!: Sequelize.HasManyAddAssociationMixin<user_biography_publications, user_biography_publicationsId>;
  addUser_biography_publications!: Sequelize.HasManyAddAssociationsMixin<user_biography_publications, user_biography_publicationsId>;
  createUser_biography_publication!: Sequelize.HasManyCreateAssociationMixin<user_biography_publications>;
  removeUser_biography_publication!: Sequelize.HasManyRemoveAssociationMixin<user_biography_publications, user_biography_publicationsId>;
  removeUser_biography_publications!: Sequelize.HasManyRemoveAssociationsMixin<user_biography_publications, user_biography_publicationsId>;
  hasUser_biography_publication!: Sequelize.HasManyHasAssociationMixin<user_biography_publications, user_biography_publicationsId>;
  hasUser_biography_publications!: Sequelize.HasManyHasAssociationsMixin<user_biography_publications, user_biography_publicationsId>;
  countUser_biography_publications!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_biography {
    return user_biography.init({
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
    tableName: 'user_biography',
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
        name: "FKkq23s4k7nmpkcfijnfl8n5387",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FK95bpj2y4ixdvb3s1pw518mtpn",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKiqe9t5utu3oq7hv6bra6wc3fr",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
    ]
  });
  }
}
