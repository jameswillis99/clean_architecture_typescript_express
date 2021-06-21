import { Request, Response } from "express";
import Controller, { ControllerRequest } from "./controllers/Controller";
import  {Exception,  StatusCode } from './exception/Exception'

/**
 * Decorator pattern
 */
class RouteWrapper extends Controller<unknown>{

    public request:ControllerRequest;

    constructor(private req: Request, private res: Response, protected Controller: Controller<unknown>) {
        super();
        const {body, params,query} = this.req;
        this.request = {body, params, query};
    }

    async get(): Promise<void> {
        await this.call(this.Controller.get)
    }

    async post(): Promise<void> {
        await this.call(this.Controller.post)
    }

    private async call(controller: (x: ControllerRequest)=> Promise<void>) {
        try{
            await controller(this.request);
            this.res.send(this.Controller.data);

        } catch(err) {
            if (err) {
                console.log(err)
                const {statusCode }: Exception = err
                this.res.status(statusCode).json(err.message)
            } else {
                this.res.status(500).json(err.message)
            }
        }
    
    
    }

}



export default RouteWrapper;