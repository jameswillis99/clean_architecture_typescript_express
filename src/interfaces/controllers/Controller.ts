export type ControllerRequest = {
  body: any,
  params: any,
  query: any
};

export interface IController {
  get(request: ControllerRequest): Promise<void>
  post(request: ControllerRequest): Promise<void>
}

/**
 * Template Method Design Pattern
 */
export default abstract class Controller<T> implements IController {
  // accessable from subclasses but don't have to be overridden.
  public data: T[] = [];

  /**
   * These methods have to be implemented in subclasses
   */
  abstract get(req: ControllerRequest): Promise<void>;

  abstract post(req:ControllerRequest): Promise<void>;
}
