// src/clientManagement/api/clientRoutes.js
const express = require('express');
const router = express.Router();
const Admin = require('../domain/Admin');

const ClientManagementService = require('../application/ClientManagementService');
const SupabaseClientRepository = require('../infrastructure/SupabaseClientRepository');
const InvitationEmailService = require('../infrastructure/InvitationEmailService');

// Setup dependencies for the application service.
const clientRepository = new SupabaseClientRepository();
const invitationEmailService = new InvitationEmailService();
const clientManagementService = new ClientManagementService({
  clientRepository,
  invitationEmailService
});

// Define an API endpoint for creating a new client account.
// In a real app, admin authentication would be handled via middleware.
router.post('/create-client', async (req, res) => {
  try {
    // Simulated admin object.
    // In production, extract admin info from a secure authentication mechanism.
    const admin = new Admin({ id: 1, email: 'admin@example.com', isSuperAdmin: true });
    const { email } = req.body;
    const client = await clientManagementService.createClientAccount(admin, email);
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
