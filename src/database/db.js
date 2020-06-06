// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o objeto de banco de dados para nossas operações

//db.serialize(() => {
    //usando comandos SQL:

    //criar uma tabela
/*     db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT, 
            city TEXT
        );
    `)
    //inserir dados na tabela
    const query = `
        INSERT INTO places (
            image,
            name, 
            address,
            address2,
            state,
            city
        ) VALUES (?,?,?,?,?,?);
    `
    const values =  [
        "https://images.unsplash.com/photo-1575468332949-4bd46064dd66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "Posto de Saúde Alayde Cunha",
        "Dr. Laureano, R. Suruí",
        "Nº 150",
        "Rio de Janeiro",
        "Duque de Caxias"
    ]

function afterInsertData(err) {
    if(err) {
        return console.log(err)
    }
    
    console.log("Cadastrado com sucesso")
    console.log(this)
}

    db.run(query, values, afterInsertData) */

    //consultar os dados da tabela
    /* db.all(`SELECT name FROM places`, function(err, rows){
        if(err) {
            return console.log(err)
        }
        console.log("Aqui estão seus registros: ")
        console.log(rows)
    }) */
  
    //deletar um dado da tabela

     /* db.run(`DELETE FROM places WHERE city = ?`, ['Niterói'], function(err) {
        if(err) {
            return console.log(err)
        }

        console.log("Registro deletado com sucesso!")
    })
  */
//}) 