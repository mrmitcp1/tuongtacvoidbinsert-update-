const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '123321',
    database: 'Demo'
})

connection.connect(function (err) {
    if (err){
        console.log(err.message)
    }
    else {
        console.log('success')
    }
})

const sqlInsert = "INSERT INTO customer (name, address) VALUES ('Tu','BN')"
connection.query(sqlInsert,function (err,result){
    if (err) throw err;
    console.log('done1')
})

const sqlUpdate = "UPDATE customer SET address ='HCM' WHERE name = 'hoa'"
connection.query(sqlUpdate,function (err,result){
    if (err) throw err;
    console.log('done')
})