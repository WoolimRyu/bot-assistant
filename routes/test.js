var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('{\n' +
        '    "name": "G11",\n' +
        '    "star": 5,\n' +
        '    "stats": {\n' +
        '        "att": 24,\n' +
        '        "def": 50\n' +
        '    }\n' +
        '}');
});

router.post('/', function(req, res, next) {
    //return res.json(tests);
    res.send('{\n' +
        '    "name": "G11",\n' +
        '    "star": 5,\n' +
        '    "stats": {\n' +
        '        "att": 24,\n' +
        '        "def": 50\n' +
        '    }\n' +
        '}');
});

module.exports = router;
