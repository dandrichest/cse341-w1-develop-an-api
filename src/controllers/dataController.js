const Contact = require('../../models/Contact');

class DataController {
    constructor(dataService) {
        this.dataService = dataService;
    }

    // GET all contacts
    async getAllData(req, res) {
        try {
            const data = await this.dataService.getAllContacts();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: 'Server error: ' + error.message });
        }
    }

    // GET single contact by ID
    async getSingleData(req, res) {
        try {
            const id = req.params.id;
            const contact = await this.dataService.getContactById(id);
            if (!contact) {
                return res.status(404).json({ error: 'Contact not found' });
            }
            res.status(200).json(contact);
        } catch (error) {
            res.status(500).json({ error: 'Server error: ' + error.message });
        }
    }

    // POST - Create a new contact
    async createData(req, res) {
        try {
            const { firstName, lastName, email, favoriteColor, birthday } = req.body;

            // Validate all required fields
            if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
                return res.status(400).json({ error: 'All fields are required: firstName, lastName, email, favoriteColor, birthday' });
            }

            const newContact = await this.dataService.createContact({
                firstName,
                lastName,
                email,
                favoriteColor,
                birthday
            });

            res.status(201).json({ 
                message: 'Contact created successfully',
                id: newContact._id,
                contact: newContact
            });
        } catch (error) {
            res.status(500).json({ error: 'Server error: ' + error.message });
        }
    }

    // PUT - Update a contact by ID
    async updateData(req, res) {
        try {
            const id = req.params.id;
            const { firstName, lastName, email, favoriteColor, birthday } = req.body;

            // Check if contact exists
            const contact = await this.dataService.getContactById(id);
            if (!contact) {
                return res.status(404).json({ error: 'Contact not found' });
            }

            // Update contact
            const updatedContact = await this.dataService.updateContact(id, {
                firstName: firstName || contact.firstName,
                lastName: lastName || contact.lastName,
                email: email || contact.email,
                favoriteColor: favoriteColor || contact.favoriteColor,
                birthday: birthday || contact.birthday
            });

            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Server error: ' + error.message });
        }
    }

    // DELETE - Delete a contact by ID
    async deleteData(req, res) {
        try {
            const id = req.params.id;

            // Check if contact exists
            const contact = await this.dataService.getContactById(id);
            if (!contact) {
                return res.status(404).json({ error: 'Contact not found' });
            }

            await this.dataService.deleteContact(id);
            res.status(200).json({ message: 'Contact deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Server error: ' + error.message });
        }
    }
}

module.exports = DataController;