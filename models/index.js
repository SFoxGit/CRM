const User = require("./User");
const Organization = require("./Organization");
const Customer = require("./Customer");
const Contact = require("./Contact");

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
});
Customer.hasMany(Contact, {
  foreignKey: "company"
});
Contact.belongsTo(Customer, {
  as: "customer",
  foreignKey: "company"
})


module.exports = {User, Organization, Customer, Contact};