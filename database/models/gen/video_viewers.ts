import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { video, videoId } from './video';

export interface video_viewersAttributes {
  video_id: number;
  viewers?: string;
}

export type video_viewersOptionalAttributes = "viewers";
export type video_viewersCreationAttributes = Optional<video_viewersAttributes, video_viewersOptionalAttributes>;

export class video_viewers extends Model<video_viewersAttributes, video_viewersCreationAttributes> implements video_viewersAttributes {
  video_id!: number;
  viewers?: string;

  // video_viewers belongsTo video via video_id
  video!: video;
  getVideo!: Sequelize.BelongsToGetAssociationMixin<video>;
  setVideo!: Sequelize.BelongsToSetAssociationMixin<video, videoId>;
  createVideo!: Sequelize.BelongsToCreateAssociationMixin<video>;

  static initModel(sequelize: Sequelize.Sequelize): typeof video_viewers {
    return video_viewers.init({
    video_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'video',
        key: 'id'
      }
    },
    viewers: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'video_viewers',
    timestamps: false,
    indexes: [
      {
        name: "FKim184bmvi4cnbwxe83bvr45j9",
        using: "BTREE",
        fields: [
          { name: "video_id" },
        ]
      },
    ]
  });
  }
}
