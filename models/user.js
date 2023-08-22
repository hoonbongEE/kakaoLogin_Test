const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init(
      {
        email: {
          type: Sequelize.STRING(40),
          allowNull: true, // 카카오 로그인이기 떄문에 꼭 이메일이 있을 필욘 없음
          unique: true,
        },
        nick: {
          type: Sequelize.STRING(15),
          allowNull: false,
          // unique: true,
        },
        password: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },

        provider: {
          type: Sequelize.ENUM("local", "kakao"),
          allowNull: false,
          defaultValue: "local",
        },
        snsId: {
          type: Sequelize.STRING(30),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true, // ceratedAT,updateAt 을 알려줌
        underscored: false, // true가되면 cerated_AT,update_At 됨 저는 커멜케이스 중시
        modelName: "User",
        tableName: "users",
        paranoid: true, // deletedAt이 추가 됨 유저 삭제일 // soft delete
        charset: "utf8mb4", // db를 어떤식으로 문자를 적어둘 지 (mb4는 이모티콘까지 추가한거임)
        collate: "utf8mb4_general_ci", // 저장된 문자를 어떤식으로 정렬할지
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Post);
    db.User.belongsToMany(db.User, {
      foreignKey: "followingId",
      as: "Followers",
      through: "Follow",
    });
    db.User.belongsToMany(db.User, {
      foreignKey: "followerId",
      as: "Followings",
      through: "Follow",
    });
  }
}

module.exports = User;
