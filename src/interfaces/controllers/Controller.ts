import { Timestamp } from "typeorm";

export type ControllerRequest = {
    body: any,
    params: any,
    query: any
}

export interface IController {
    get(request: ControllerRequest): Promise<void>
    post(request: ControllerRequest): Promise<void>
}

export default class Controller<T> implements IController {

    public data: T[] = []

    get(_request: ControllerRequest): Promise<void> {
        throw new Error("Method not implemented.");
    }

    post(req:ControllerRequest): Promise<void> {
        throw new Error("Method not implemented.");
    }

}