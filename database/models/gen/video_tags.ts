import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { video, videoId } from './video';

export interface video_tagsAttributes {
  video_id: number;
  tags?: string;
}

export type video_tagsOptionalAttributes = "tags";
export type video_tagsCreationAttributes = Optional<video_tagsAttributes, video_tagsOptionalAttributes>;

export class video_tags extends Model<video_tagsAttributes, video_tagsCreationAttributes> implements video_tagsAttributes {
  video_id!: number;
  tags?: string;

  // video_tags belongsTo video via video_id
  video!: video;
  getVideo!: Sequelize.BelongsToGetAssociationMixin<video>;
  setVideo!: Sequelize.BelongsToSetAssociationMixin<video, videoId>;
  createVideo!: Sequelize.BelongsToCreateAssociationMixin<video>;

  static initModel(sequelize: Sequelize.Sequelize): typeof video_tags {
    return video_tags.init({
    video_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'video',
        key: 'id'
      }
    },
    tags: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'video_tags',
    timestamps: false,
    indexes: [
      {
        name: "FKry3serark801w5vq5mmp2nny5",
        using: "BTREE",
        fields: [
          { name: "video_id" },
        ]
      },
    ]
  });
  }
}
