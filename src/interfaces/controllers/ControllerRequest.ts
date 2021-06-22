export default class ControllerRequest {
  constructor(
    public body: any,
    public params: Record<string, unknown>,
    public query: Record<string, unknown>,
  ) { }
}
