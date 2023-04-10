import Express from "express";
import ApiController from '../controller/ApiController';
let router = Express.Router();

const initAPIRoute = (app) => {
    router.get('/all-user', ApiController.getHomePage);
    router.put('/update-user/:id', ApiController.updateUser);
    router.delete('/detele-user/:id', ApiController.deteleUser);
    router.post('/create-user', ApiController.createUser);
    return app.use('/api/v1/', router);
}

export default initAPIRoute; 