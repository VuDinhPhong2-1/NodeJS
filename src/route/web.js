import Express from "express";
import HomeController from '../controller/HomeController';
let router = Express.Router();

const initWebRoute = (app) => {
    router.get('/', HomeController.getHomePage)
    router.get('/detail/user/:id', HomeController.getIDUser)
    router.post('/create-new-user', HomeController.createNewUser)
    router.post('/delete-user/:id', HomeController.deleteUser);
    router.get('/edit-user/:id', HomeController.editUser);
    router.post('/update-user', HomeController.postUpdateUser);
    return app.use('/', router);
}

export default initWebRoute; 