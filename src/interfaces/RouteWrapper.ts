import { Request, Response } from "express";
import { ControllerRequest } from "./controllers/Controller";
import  {Exception,  StatusCode } from './exception/Exception'

function RouteWrapper(controller:Function) {

    return async function(req:Request,res:Response) {
        const {body, params,query} = req;
        const request: ControllerRequest = {body, params, query};
        try{
            res.send(await controller(request))

        } catch(err) {
            console.log(err instanceof Exception)
            if (err) {
                console.log(err)
                const {statusCode }: Exception = err
                res.status(statusCode).json(err.message)
            } else {

                res.status(500).json(err.message)
            }
        }
    }


}

export default RouteWrapper;