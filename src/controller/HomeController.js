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
    return res.redirect('/');
}
let deleteUser = async (req, res) => {
    let userId = req.body.userId;
    await pool.execute('delete from users where id = ?', [userId])
    return res.redirect('/');
}
let editUser = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute('select * from users where id =?', [id])
    return res.render('update.ejs', { dataUser: user[0] }); //Tạo 1 đối tượng dataUser và được gán bởi biến user
}
let postUpdateUser = async (req, res) => {
    console.log('check request', req.body);
    let { firstName, lastName, email, address, id } = req.body;
    await pool.execute('update users set firstName = ?,  lastName = ?, email = ?, address = ? where id = ?', [firstName, lastName, email, address, id])
    return res.redirect('/');
}
module.exports = {
    getHomePage, getIDUser, createNewUser, deleteUser, editUser, postUpdateUser
}