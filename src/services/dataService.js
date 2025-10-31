const Professional = require('../../models/Professional');

const getData = async () => {
    try {
        const professionals = await Professional.find(); // Retrieve all professionals
        return professionals;
    } catch (error) {
        throw new Error('Error retrieving data from MongoDB: ' + error.message);
    }
};

module.exports = { getData };