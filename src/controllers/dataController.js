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

    // GET single professional by ID
    async getSingleData(req, res) {
        try {
            const id = req.params.id;
            const contact = await this.dataService.getContactById(id);
            if (!contact) {
                return res.status(404).json({ error: 'Professional not found' });
            }
            res.status(200).json(contact);
        } catch (error) {
            res.status(500).json({ error: 'Server error: ' + error.message });
        }
    }
}

module.exports = DataController;