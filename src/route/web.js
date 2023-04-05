import Express from "express";
import HomController, { getHomePage } from '../controller/HomeController'
let router = Express.Router();

const initWebRoute = (app) => {
    router.get('/', HomController.getHomePage)

    return app.use('/', router)
}

export default initWebRoute;