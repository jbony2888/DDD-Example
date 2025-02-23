// src/clientManagement/domain/Admin.js
class Admin {
  constructor({ id, email, isSuperAdmin = false }) {
    this.id = id;
    this.email = email;
    this.isSuperAdmin = isSuperAdmin;
  }

  // Determines if this admin has permission to create client accounts.
  canCreateClient() {
    // For example, only super admins are allowed.
    return this.isSuperAdmin;
  }
}

module.exports = Admin;
