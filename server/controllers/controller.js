module.exports = {
    getAllMakes: (req, res) => {
        let db = req.app.get('db');
        db.get_all_makes().then(allMakes => {
            res.status(200).send(allMakes)
        })
    },
    getAllLinesFromSelectedMakes: (req, res) => {
        let db = req.app.get('db');
        db.get_all_lines_from_selected_makes().then(allLinesFromSelectedMakes => {
            res.status(200).send(allLinesFromSelectedMakes)
        })
    }
}