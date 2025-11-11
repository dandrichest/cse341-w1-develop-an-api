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

    // Fetch a single contact by ID
    async getContactById(id) {
        try {
            return await Contact.findById(id);
        } catch (error) {
            throw new Error('Error retrieving contact: ' + error.message);
        }
    }

    // Create a new contact
    async createContact(contactData) {
        try {
            const newContact = new Contact(contactData);
            return await newContact.save();
        } catch (error) {
            throw new Error('Error creating contact: ' + error.message);
        }
    }

    // Update a contact
    async updateContact(id, updateData) {
        try {
            return await Contact.findByIdAndUpdate(id, updateData, { new: true });
        } catch (error) {
            throw new Error('Error updating contact: ' + error.message);
        }
    }

    // Delete a contact
    async deleteContact(id) {
        try {
            return await Contact.findByIdAndDelete(id);
        } catch (error) {
            throw new Error('Error deleting contact: ' + error.message);
        }
    }
}

module.exports = new DataService();