const passport = require("passport");

module.exports = app => {
  // router helper
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // router helper
  app.get("/auth/google/callback", passport.authenticate("google"));
};
