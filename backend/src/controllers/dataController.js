const connection = require('../config/db');

exports.getEducationData = (req, res) => {
    connection.query('SELECT * FROM details', (error, results) => {
        if (error) {
            res.status(500).json({ error: error.message });
            return;
        }
        res.json(results);
    });
};
