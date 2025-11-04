const Contact = require('../../models/Contact');

class DataService {
    // Fetch all professionals
    async getAllContacts() {
        try {
            return await Contact.find();
        } catch (error) {
            throw new Error('Error retrieving contacts: ' + error.message);
        }
    }

    // Fetch a single Contact by ID
    async getcontactById(id) {
        try {
            return await Contact.findById(id);
        } catch (error) {
            throw new Error('Error retrieving contact by ID: ' + error.message);
        }
    }
}

module.exports = new DataService();