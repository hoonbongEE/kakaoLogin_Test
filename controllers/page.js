exports.renderProfile = (req, res, next) => {
  res.render("profile", { title: "내 정보 -kakaopr" });
};

exports.renderJoin = (req, res, next) => {
  res.render("join", { title: "회원가입 -kakaopr" });
};

exports.renderMain = (req, res, next) => {
  res.render("main", {
    title: "kakaopr",
    twits: [],
  });
};
