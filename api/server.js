const koa = require('koa');
const cors = require('@koa/cors')
const Router = require('koa-router');
const mount = require('koa-mount')
const koaBody = require('koa-body');
const respond = require('koa-respond')
import routes from './routes'
const api = new koa()


api.use(cors({
    origin: '*',
    allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
    exposeHeaders: ['X-Request-Id']
}));
api.use(koaBody(({ multipart: true })))

//api.use(mount(require('./controllers/candidateController')))

//api.use(mount(require('./controllers/vacancyController')))
//api.use(mount(require('./controllers/loginController')))
//api.use(mount(require('./controllers/subscriptionController')))



const router = new Router();
api.use(respond())
//api.use(router.routes())
api.use(routes.routes())
api.use(router.allowedMethods())


const port = 3000;
api.listen(port, () => console.log(`Running at port ${port}`))