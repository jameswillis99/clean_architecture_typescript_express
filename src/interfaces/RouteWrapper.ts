import { Request, Response } from 'express';
import Controller, { ControllerRequest } from './controllers/Controller';
import { Exception } from './exception/Exception';

/**
 * Decorator pattern
 */
class RouteWrapper extends Controller<unknown> {
  public request:ControllerRequest;

  constructor(private req: Request,
    private res: Response,
    protected Cont: Controller<unknown>) {
    super();
    const { body, params, query } = this.req;
    this.request = { body, params, query };
  }

  async get(): Promise<void> {
    await this.call(this.Cont.get);
  }

  async post(): Promise<void> {
    await this.call(this.Cont.post);
  }

  private async call(controller: (x: ControllerRequest)=> Promise<void>) {
    try {
      await controller(this.request);
      this.res.send(this.Cont.data);
    } catch (err) {
      if (err) {
        const { statusCode }: Exception = err;
        this.res.status(statusCode).json(err.message);
      } else {
        this.res.status(500).json(err.message);
      }
    }
  }
}

export default RouteWrapper;
