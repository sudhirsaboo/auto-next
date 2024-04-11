import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user_biography, user_biographyId } from './user_biography';
import type { user_biography_affiliations, user_biography_affiliationsId } from './user_biography_affiliations';
import type { user_biography_awards_and_honors, user_biography_awards_and_honorsId } from './user_biography_awards_and_honors';
import type { user_biography_education, user_biography_educationId } from './user_biography_education';
import type { user_biography_exhibitions, user_biography_exhibitionsId } from './user_biography_exhibitions';
import type { user_biography_publications, user_biography_publicationsId } from './user_biography_publications';

export interface time_lineAttributes {
  id: number;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  city?: string;
  location?: string;
  state?: string;
  title?: string;
  year?: string;
}

export type time_linePk = "id";
export type time_lineId = time_line[time_linePk];
export type time_lineOptionalAttributes = "description" | "display_name" | "name" | "status" | "city" | "location" | "state" | "title" | "year";
export type time_lineCreationAttributes = Optional<time_lineAttributes, time_lineOptionalAttributes>;

export class time_line extends Model<time_lineAttributes, time_lineCreationAttributes> implements time_lineAttributes {
  id!: number;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  city?: string;
  location?: string;
  state?: string;
  title?: string;
  year?: string;

  // time_line belongsToMany user_biography via affiliations_id and user_biography_id
  user_biography_id_user_biographies!: user_biography[];
  getUser_biography_id_user_biographies!: Sequelize.BelongsToManyGetAssociationsMixin<user_biography>;
  setUser_biography_id_user_biographies!: Sequelize.BelongsToManySetAssociationsMixin<user_biography, user_biographyId>;
  addUser_biography_id_user_biography!: Sequelize.BelongsToManyAddAssociationMixin<user_biography, user_biographyId>;
  addUser_biography_id_user_biographies!: Sequelize.BelongsToManyAddAssociationsMixin<user_biography, user_biographyId>;
  createUser_biography_id_user_biography!: Sequelize.BelongsToManyCreateAssociationMixin<user_biography>;
  removeUser_biography_id_user_biography!: Sequelize.BelongsToManyRemoveAssociationMixin<user_biography, user_biographyId>;
  removeUser_biography_id_user_biographies!: Sequelize.BelongsToManyRemoveAssociationsMixin<user_biography, user_biographyId>;
  hasUser_biography_id_user_biography!: Sequelize.BelongsToManyHasAssociationMixin<user_biography, user_biographyId>;
  hasUser_biography_id_user_biographies!: Sequelize.BelongsToManyHasAssociationsMixin<user_biography, user_biographyId>;
  countUser_biography_id_user_biographies!: Sequelize.BelongsToManyCountAssociationsMixin;
  // time_line belongsToMany user_biography via awards_and_honors_id and user_biography_id
  user_biography_id_user_biography_user_biography_awards_and_honors!: user_biography[];
  getUser_biography_id_user_biography_user_biography_awards_and_honors!: Sequelize.BelongsToManyGetAssociationsMixin<user_biography>;
  setUser_biography_id_user_biography_user_biography_awards_and_honors!: Sequelize.BelongsToManySetAssociationsMixin<user_biography, user_biographyId>;
  addUser_biography_id_user_biography_user_biography_awards_and_honor!: Sequelize.BelongsToManyAddAssociationMixin<user_biography, user_biographyId>;
  addUser_biography_id_user_biography_user_biography_awards_and_honors!: Sequelize.BelongsToManyAddAssociationsMixin<user_biography, user_biographyId>;
  createUser_biography_id_user_biography_user_biography_awards_and_honor!: Sequelize.BelongsToManyCreateAssociationMixin<user_biography>;
  removeUser_biography_id_user_biography_user_biography_awards_and_honor!: Sequelize.BelongsToManyRemoveAssociationMixin<user_biography, user_biographyId>;
  removeUser_biography_id_user_biography_user_biography_awards_and_honors!: Sequelize.BelongsToManyRemoveAssociationsMixin<user_biography, user_biographyId>;
  hasUser_biography_id_user_biography_user_biography_awards_and_honor!: Sequelize.BelongsToManyHasAssociationMixin<user_biography, user_biographyId>;
  hasUser_biography_id_user_biography_user_biography_awards_and_honors!: Sequelize.BelongsToManyHasAssociationsMixin<user_biography, user_biographyId>;
  countUser_biography_id_user_biography_user_biography_awards_and_honors!: Sequelize.BelongsToManyCountAssociationsMixin;
  // time_line belongsToMany user_biography via education_id and user_biography_id
  user_biography_id_user_biography_user_biography_educations!: user_biography[];
  getUser_biography_id_user_biography_user_biography_educations!: Sequelize.BelongsToManyGetAssociationsMixin<user_biography>;
  setUser_biography_id_user_biography_user_biography_educations!: Sequelize.BelongsToManySetAssociationsMixin<user_biography, user_biographyId>;
  addUser_biography_id_user_biography_user_biography_education!: Sequelize.BelongsToManyAddAssociationMixin<user_biography, user_biographyId>;
  addUser_biography_id_user_biography_user_biography_educations!: Sequelize.BelongsToManyAddAssociationsMixin<user_biography, user_biographyId>;
  createUser_biography_id_user_biography_user_biography_education!: Sequelize.BelongsToManyCreateAssociationMixin<user_biography>;
  removeUser_biography_id_user_biography_user_biography_education!: Sequelize.BelongsToManyRemoveAssociationMixin<user_biography, user_biographyId>;
  removeUser_biography_id_user_biography_user_biography_educations!: Sequelize.BelongsToManyRemoveAssociationsMixin<user_biography, user_biographyId>;
  hasUser_biography_id_user_biography_user_biography_education!: Sequelize.BelongsToManyHasAssociationMixin<user_biography, user_biographyId>;
  hasUser_biography_id_user_biography_user_biography_educations!: Sequelize.BelongsToManyHasAssociationsMixin<user_biography, user_biographyId>;
  countUser_biography_id_user_biography_user_biography_educations!: Sequelize.BelongsToManyCountAssociationsMixin;
  // time_line belongsToMany user_biography via exhibitions_id and user_biography_id
  user_biography_id_user_biography_user_biography_exhibitions!: user_biography[];
  getUser_biography_id_user_biography_user_biography_exhibitions!: Sequelize.BelongsToManyGetAssociationsMixin<user_biography>;
  setUser_biography_id_user_biography_user_biography_exhibitions!: Sequelize.BelongsToManySetAssociationsMixin<user_biography, user_biographyId>;
  addUser_biography_id_user_biography_user_biography_exhibition!: Sequelize.BelongsToManyAddAssociationMixin<user_biography, user_biographyId>;
  addUser_biography_id_user_biography_user_biography_exhibitions!: Sequelize.BelongsToManyAddAssociationsMixin<user_biography, user_biographyId>;
  createUser_biography_id_user_biography_user_biography_exhibition!: Sequelize.BelongsToManyCreateAssociationMixin<user_biography>;
  removeUser_biography_id_user_biography_user_biography_exhibition!: Sequelize.BelongsToManyRemoveAssociationMixin<user_biography, user_biographyId>;
  removeUser_biography_id_user_biography_user_biography_exhibitions!: Sequelize.BelongsToManyRemoveAssociationsMixin<user_biography, user_biographyId>;
  hasUser_biography_id_user_biography_user_biography_exhibition!: Sequelize.BelongsToManyHasAssociationMixin<user_biography, user_biographyId>;
  hasUser_biography_id_user_biography_user_biography_exhibitions!: Sequelize.BelongsToManyHasAssociationsMixin<user_biography, user_biographyId>;
  countUser_biography_id_user_biography_user_biography_exhibitions!: Sequelize.BelongsToManyCountAssociationsMixin;
  // time_line belongsToMany user_biography via publications_id and user_biography_id
  user_biography_id_user_biography_user_biography_publications!: user_biography[];
  getUser_biography_id_user_biography_user_biography_publications!: Sequelize.BelongsToManyGetAssociationsMixin<user_biography>;
  setUser_biography_id_user_biography_user_biography_publications!: Sequelize.BelongsToManySetAssociationsMixin<user_biography, user_biographyId>;
  addUser_biography_id_user_biography_user_biography_publication!: Sequelize.BelongsToManyAddAssociationMixin<user_biography, user_biographyId>;
  addUser_biography_id_user_biography_user_biography_publications!: Sequelize.BelongsToManyAddAssociationsMixin<user_biography, user_biographyId>;
  createUser_biography_id_user_biography_user_biography_publication!: Sequelize.BelongsToManyCreateAssociationMixin<user_biography>;
  removeUser_biography_id_user_biography_user_biography_publication!: Sequelize.BelongsToManyRemoveAssociationMixin<user_biography, user_biographyId>;
  removeUser_biography_id_user_biography_user_biography_publications!: Sequelize.BelongsToManyRemoveAssociationsMixin<user_biography, user_biographyId>;
  hasUser_biography_id_user_biography_user_biography_publication!: Sequelize.BelongsToManyHasAssociationMixin<user_biography, user_biographyId>;
  hasUser_biography_id_user_biography_user_biography_publications!: Sequelize.BelongsToManyHasAssociationsMixin<user_biography, user_biographyId>;
  countUser_biography_id_user_biography_user_biography_publications!: Sequelize.BelongsToManyCountAssociationsMixin;
  // time_line hasMany user_biography_affiliations via affiliations_id
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
  // time_line hasMany user_biography_awards_and_honors via awards_and_honors_id
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
  // time_line hasMany user_biography_education via education_id
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
  // time_line hasMany user_biography_exhibitions via exhibitions_id
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
  // time_line hasMany user_biography_publications via publications_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof time_line {
    return time_line.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(255),
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
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'time_line',
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
    ]
  });
  }
}
