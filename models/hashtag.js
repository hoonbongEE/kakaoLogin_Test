const Sequelize = require("sequelize");

class Hashtag extends Sequelize.Model {
  static initiate(sequelize) {
    Hashtag.init(
      {
        title: {
          type: Sequelize.STRING(15),
          allowNull: false,
          unique: true,
        },
      },
      {
        sequelize,
        timestamps: true, // ceratedAT,updateAt 을 알려줌
        underscored: false, // true가되면 cerated_AT,update_At 됨 저는 커멜케이스 중시
        modelName: "Hashtag",
        tableName: "Hashtags",
        paranoid: true, // deletedAt이 추가 됨 유저 삭제일 // soft delete
        charset: "utf8mb4", // db를 어떤식으로 문자를 적어둘 지 (mb4는 이모티콘까지 추가한거임)
        collate: "utf8mb4_general_ci", // 저장된 문자를 어떤식으로 정렬할지
      }
    );
  }

  static associate(db) {
    db.Hashtag.belongsToMany(db.Post, { through: "PostHashtag" });
  }
}

module.exports = Hashtag;
