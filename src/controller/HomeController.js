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
module.exports = {
    getHomePage, getIDUser
}