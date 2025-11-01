class DataController {
    constructor(dataService) {
        this.dataService = dataService;
    }

    // GET all professionals
    async getAllData(req, res) {
        try {
            const data = await this.dataService.getAllProfessionals();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: 'Server error: ' + error.message });
        }
    }

    // GET single professional by ID
    async getSingleData(req, res) {
        try {
            const id = req.params.id;
            const professional = await this.dataService.getProfessionalById(id);
            if (!professional) {
                return res.status(404).json({ error: 'Professional not found' });
            }
            res.status(200).json(professional);
        } catch (error) {
            res.status(500).json({ error: 'Server error: ' + error.message });
        }
    }
}

module.exports = DataController;