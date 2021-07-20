const User = require("./User");
const Organization = require("./Organization");

Organization.hasMany(User, {
  foreignKey: "org"
});
User.belongsTo(Organization, {
  foreignKey: "org"
})

module.exports = {User, Organization};