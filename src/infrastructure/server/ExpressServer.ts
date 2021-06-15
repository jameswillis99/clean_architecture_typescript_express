import express, { Express } from 'express';
import Dogs from '../../interfaces/routes/DogsRoute';


export default class ExpressServer {

    private static express: ExpressServer;

    public app: Express;

    private constructor() {
        this.app = this.startupServer()
    }

    public static getInstance(): ExpressServer {
        if (!ExpressServer.express) {
            ExpressServer.express = new ExpressServer();
        }
        return ExpressServer.express;
    }


    private startupServer(): Express {
        const app = express();

        app.get('/', (req, res) => {
            res.send('Hello Worldddd!')
        })
        
        app.use('/dogs', Dogs);
        return app;
    }

    public listen(): void {
        this.app.listen(9000, () => {
            console.log('Startup cofffmplete.')
        });
    }
}