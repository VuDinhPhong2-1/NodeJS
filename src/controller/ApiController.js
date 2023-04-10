import pool from '../configs/connectDB'

let getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.status(200).json({
        message: 'ok',
        data: rows,
    })
}
let updateUser = async (req, res) => {
    let id = req.params.id;
    let { firstName, lastName, email, address } = req.body;
    if (!firstName || !lastName || !email || !address) {
        return res.send('missing data params')
    }
    await pool.execute('update users set firstName = ?,  lastName = ?, email = ?, address = ? where id = ?', [firstName, lastName, email, address, id]);
    return res.status(200).json({
        message: 'ok',
        //data: rows,
    })

}
let deteleUser = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.send('missing data params')
    }
    await pool.execute('delete from users where id = ?', [id]);
    return res.status(200).json({
        message: 'ok',
        //data: rows,
    })
}
let createUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;
    if (!firstName || !lastName || !email || !address) {
        return res.send('missing data params')
    }
    await pool.execute('insert into users(firstName,lastName,email,address ) values(?,?,?,?)', [firstName, lastName, email, address]);
    return res.status(200).json({
        message: 'ok',
        //data: rows,
    })
}

module.exports = { getHomePage, updateUser, deteleUser, createUser }