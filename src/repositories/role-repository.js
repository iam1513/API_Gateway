const CrudRepository = require("./crud-repository");
const { Roles } = require("../models");
class RoleRepository extends CrudRepository {
  constructor() {
    super(Roles);
  }

  async getRoleByName(name) {
    const role = await Roles.findOne({ where: { name: name } });
    return role;
  }
}

module.exports = RoleRepository;
