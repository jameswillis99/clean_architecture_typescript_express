import bodyParser from 'body-parser';
import express, { Express } from 'express';
import Dogs from '../../interfaces/routes/DogsRoute';

/**
 * Singleton
 */
export default class ExpressServer {
  private static express: ExpressServer;

  public app!: Express;

  private constructor() {
    this.startupServer();
  }

  public static getInstance(): ExpressServer {
    if (!ExpressServer.express) {
      ExpressServer.express = new ExpressServer();
    }
    return ExpressServer.express;
  }

  private startupServer(): void {
    const app = express();
    app.use(bodyParser.json());

    app.use('/dogs', Dogs);
    this.app = app;
  }

  public listen(): void {
    this.app.listen(9000, () => {
      console.log('Startup complete.');
    });
  }
}
