module.exports = {
    getAllMakes: (req, res) => {
        let db = req.app.get('db');
        db.get_all_makes().then(allMakes => {
            res.status(200).send(allMakes)
        })
    },
    getAllLines: (req, res) => {
        let db = req.app.get('db');
        db.get_all_lines().then(allLines => {
            res.status(200).send(allLines)
        })
    },
    getAllGenerations: (req, res) => {
        let db = req.app.get('db');
        db.get_all_generations().then(allGenerations => {
            res.status(200).send(allGenerations)
        })
    },
    getAllModels: (req, res) => {
        let db = req.app.get('db');
        db.get_all_models().then(allModels => {
            res.status(200).send(allModels)
        })
    }
}