import pool from '../configs/connectDB'

let getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.render('index.ejs', { dataUser: rows })
}
let getIDUser = async (req, res) => {
    let id = req.params.id;
    let [user, fields] = await pool.execute('select *from users where id = ?', [id]);
    console.log('check req param: ', user)
    return res.send('heloo')
}
let createNewUser = async (req, res) => {
    console.log('check request', req.body);
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('insert into users(firstName,lastName,email,address ) values(?,?,?,?)', [firstName, lastName, email, address]);
    return res.send('heloo')
}
module.exports = {
    getHomePage, getIDUser, createNewUser
}