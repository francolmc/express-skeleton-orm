import { Request, Response, Router } from 'express';
import Container from 'typedi';
import HomeController from '@app/test/controllers/home.controller';
import ShowController from '@app/test/controllers/show.controller';

const router: Router = Router();

// get dependenci inyection
const homeController = Container.get(HomeController);
const showController = Container.get(ShowController);

// routes
router.get('/test', (req: Request, res: Response) => homeController.home(req, res));

router.get('/test/:id', (req: Request, res: Response) => showController.show(req, res));

export default router;