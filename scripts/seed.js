const seeder = require('mongoose-seed');

const db = "mongodb://localhost:27017/i-am-learning";

seeder.connect(db, function () {
    seeder.loadModels([
        '../server/database/schemas/Todo'
    ]);

    seeder.clearModels(['Todo'], function () {

        seeder.populateModels(data, function () {
            seeder.disconnect();
        });
    });
});

const data = [
    {
        'model': 'Todo',
        'documents': [
            {
                "user": "5d725a4a7b292f5f8ceff789",
                "text": "make sure to close video and mute audio before using mathroom",
            }
        ]
    }
]