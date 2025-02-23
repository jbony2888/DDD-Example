// src/clientManagement/domain/Email.js
class Email {
  constructor(address) {
    if (!this.validate(address)) {
      throw new Error('Invalid email format');
    }
    this.address = address;
  }

  validate(address) {
    // Basic regex for email validation
    return /\S+@\S+\.\S+/.test(address);
  }
}

module.exports = Email;
