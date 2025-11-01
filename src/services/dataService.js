const Professional = require('../../models/Professional');

class DataService {
    // Fetch all professionals
    async getAllProfessionals() {
        try {
            return await Professional.find();
        } catch (error) {
            throw new Error('Error retrieving professionals: ' + error.message);
        }
    }

    // Fetch a single professional by ID
    async getProfessionalById(id) {
        try {
            return await Professional.findById(id);
        } catch (error) {
            throw new Error('Error retrieving professional by ID: ' + error.message);
        }
    }
}

module.exports = new DataService();