export type ControllerRequest = {
  body: any,
  params: any,
  query: any
};

export interface IController {
  get(request: ControllerRequest): Promise<void>
  post(request: ControllerRequest): Promise<void>
}

export default abstract class Controller<T> implements IController {
  public data: T[] = [];

  abstract get(_request: ControllerRequest): Promise<void>;

  abstract post(req:ControllerRequest): Promise<void>;
}
