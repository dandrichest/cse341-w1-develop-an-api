class DataController {
    constructor(dataService) {
        this.dataService = dataService;
    }

    async getAllData(req, res) {
        try {
            const data = await this.dataService.getData();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: 'Server error: ' + error.message });
        }
    }
}

module.exports = DataController;