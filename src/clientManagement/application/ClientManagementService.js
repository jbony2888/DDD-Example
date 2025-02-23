// src/clientManagement/application/ClientManagementService.js
const Client = require('../domain/Client');
const Email = require('../domain/Email');

class ClientManagementService {
  constructor({ clientRepository, invitationEmailService }) {
    this.clientRepository = clientRepository;
    this.invitationEmailService = invitationEmailService;
  }

  async createClientAccount(admin, emailAddress) {
    // Ensure that the caller is an admin with permission.
    if (!admin || !admin.canCreateClient()) {
      throw new Error('Unauthorized: Only admins can create client accounts.');
    }
    
    // Validate and wrap the email address.
    const email = new Email(emailAddress);
    
    // Check for uniqueness.
    const existingClient = await this.clientRepository.findByEmail(email.address);
    if (existingClient) {
      throw new Error('Client with this email already exists');
    }
    
    // Create a new client with "Pending Registration" status.
    const newClient = new Client({ email: email.address });
    
    // Persist the new client.
    await this.clientRepository.save(newClient);
    
    // Send an invitation email.
    await this.invitationEmailService.sendInvitation(email.address);
    
    return newClient;
  }
}

module.exports = ClientManagementService;
