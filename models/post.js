const Sequelize = require("sequelize");

class Post extends Sequelize.Model {
  static initiate(sequelize) {
    Post.init(
      {
        content: {
          type: Sequelize.STRING(140),
          allowNull: false,
        },
        img: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true, // ceratedAT,updateAt 을 알려줌
        underscored: false, // true가되면 cerated_AT,update_At 됨 저는 커멜케이스 중시
        modelName: "Post",
        tableName: "Posts",
        paranoid: true, // deletedAt이 추가 됨 유저 삭제일 // soft delete
        charset: "utf8mb4", // db를 어떤식으로 문자를 적어둘 지 (mb4는 이모티콘까지 추가한거임)
        collate: "utf8mb4_general_ci", // 저장된 문자를 어떤식으로 정렬할지
      }
    );
  }

  static associate(db) {
    db.Post.belongsTo(db.User);
    db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" });
  }
}

module.exports = Post;
