// src/clientManagement/domain/Client.js
class Client {
  constructor({ id, email, status }) {
    this.id = id;
    this.email = email;
    this.status = status || 'Pending Registration';
  }

  markRegistered() {
    this.status = 'Registered';
  }

  // Additional domain logic can be added here.
}

module.exports = Client;
