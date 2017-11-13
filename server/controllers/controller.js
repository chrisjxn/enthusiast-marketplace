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
    },
    getAllYears: (req, res) => {
        let db = req.app.get('db');
        db.get_all_years().then(allYears => {
            res.status(200).send(allYears)
        })
    },
    getAllListings: (req, res) => {
        let db = req.app.get('db');
        db.get_all_listings().then(allListings => {
            res.status(200).send(allListings)
        })
    },
    getActiveListing: (req, res) => {
        let db = req.app.get('db');
        db.get_active_listing([req.params.listingId]).then(activeListing => {
            res.status(200).send(activeListing)
        })
    },
    getTrims: (req, res) => {
        let db = req.app.get('db');
        db.get_trims([req.params.yearId]).then(trims => {
            res.status(200).send(trims)
        })
    },
    getEngines: (req, res) => {
        let db = req.app.get('db');
        db.get_engines([req.params.yearId]).then(engines => {
            res.status(200).send(engines)
        })
    },
    getTransmissions: (req, res) => {
        let db = req.app.get('db');
        db.get_transmissions([req.params.yearId]).then(transmissions => {
            res.status(200).send(transmissions)
        })
    },
    getColors: (req, res) => {
        let db = req.app.get('db');
        db.get_colors([req.params.yearId]).then(colors => {
            res.status(200).send(colors)
        })
    },
    getInteriors: (req, res) => {
        let db = req.app.get('db');
        db.get_interiors([req.params.yearId]).then(interiors => {
            res.status(200).send(interiors)
        })
    },
    getPackages: (req, res) => {
        let db = req.app.get('db');
        db.get_packages([req.params.yearId]).then(packages => {
            res.status(200).send(packages)
        })
    },
    getOptions: (req, res) => {
        let db = req.app.get('db');
        db.get_options([req.params.yearId]).then(options => {
            res.status(200).send(options)
        })
    },
    getConfigListings: (req, res) => {
        let db = req.app.get('db');
        db.get_config_listings([req.params.colorId]).then(configListings => {
            res.status(200).send(configListings)
        })
    }
}