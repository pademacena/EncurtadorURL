import express from 'express';

import ConnectController from './controllers/ConnectController';
import LinkController from './controllers/LinkController';

const routes = express.Router();

routes.get('/api', ConnectController.index);
routes.get('/api/links', LinkController.show);
routes.get('/:id', LinkController.redirect);

routes.post('/api/link', LinkController.store);

export default routes;