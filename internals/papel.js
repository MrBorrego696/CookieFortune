var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
module.exports = {
    "getFortune": function (cb) {
        mongoClient.connect("mongodb://127.0.0.1:27017/fortuneapp",
            function (err, db) {
                if (err) {
                    console.log("no se conecto a la base de datos fortuneapp");
                    var fortunePaperResponse = JSON.stringify(fortunePaper);
                    cb(fortunePaperResponse);
                } else {
                    var papersCollection = db.collection("papers");
                    var objetoRestultado = papersCollection.find();
                    objetoRestultado.toArray(function (err, papers) {
                        var randomIndex = Math.round(Math.random(0) * papers.length);
                        console.log("message".zebra + randomIndex);
                        var fortunePaperResponse = JSON.stringify(papers[randomIndex]);
                        db.close()
                        console.log("> La fortuna es: " + fortunePaperResponse);
                        cb(fortunePaperResponse);
                    });
                }
            });
    }
};