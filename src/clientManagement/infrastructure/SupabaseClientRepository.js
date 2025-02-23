// src/clientManagement/infrastructure/SupabaseClientRepository.js
const ClientRepository = require('../domain/ClientRepository');
const supabaseClient = require('./supabaseClient');

class SupabaseClientRepository extends ClientRepository {
  async findByEmail(email) {
    const { data, error } = await supabaseClient
      .from('clients')
      .select('*')
      .eq('email', email)
      .single();
      
    if (error && error.code !== 'PGRST116') { // Adjust error code handling as needed.
      throw error;
    }
    
    return data;
  }

  async save(client) {
    const { data, error } = await supabaseClient
      .from('clients')
      .insert([{ email: client.email, status: client.status }]);
      
    if (error) {
      throw error;
    }
    
    return data;
  }
}

module.exports = SupabaseClientRepository;
