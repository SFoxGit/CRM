const User = require("./User");
const Organization = require("./Organization");
const Customer = require("./Customer");

Organization.hasMany(User, {
  foreignKey: "org"
});
User.belongsTo(Organization, {
  as: "organization",
  foreignKey: "org"
})
User.hasMany(Customer, {
  foreignKey: "username"
});
Customer.belongsTo(User, {
  as: "user",
  foreignKey: "username"
})

module.exports = {User, Organization, Customer};