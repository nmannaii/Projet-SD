const mysql = require('mysql');

module.exports = {
    createUser: (req, res) => {
        const db = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '',
            database: 'systemed'
        });
        var nom = req.body.nom;
        var prenom = req.body.prenom;
        var login = req.body.login;
        var pwd = req.body.pwd;

        db.connect((err) => {
            if(err) throw err;
            console.log("connected");
            var sql = `INSERT INTO users(nom, prenom, login, pwd) VALUES ('${nom}','${prenom}','${login}','${pwd}')`;
            db.query(sql,(err, results) => {
                console.log(results);
                res.json({res: results});
            });
            db.end(() => {
                console.log('connection ended');
            })
        });
    },
    connexion: (req, res) => {
        const db = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '',
            database: 'systemed'
        });
        var login = req.body.login;
        var password = req.body.pwd;

        db.connect((err) => {
            if(err) throw err;
            console.log("connected");
            var sql = `SELECT * FROM ?? where ?? = ? and ?? = ?`;
            var inserts = ['users', 'login', login, 'pwd', password];
            sql = mysql.format(sql, inserts);
            db.query(sql,(err, results) => {
                if (results.length !== 0){
                    var returnVal = {
                        nom: results[0].nom,
                        prenom: results[0].prenom,
                        id: results[0].id,
                        login: results[0].login
                    }
                    res.json({sucess: true, returnVal});
                } else {
                    res.json({sucess: false});
                }
            });
            db.end(() => {
                console.log('connection ended');
            })
        });

    }
}