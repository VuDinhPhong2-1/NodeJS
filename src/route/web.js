import Express from "express";
import HomController from '../controller/homeController';
let router = Express.Router();

const initWebRoute = (app) => {
    router.get('/', HomController.getHomePage)
    router.get('/detail/user/:id', HomController.getIDUser)
    router.post('/create-new-user', HomController.createNewUser)
    return app.use('/', router)
}

export default initWebRoute;