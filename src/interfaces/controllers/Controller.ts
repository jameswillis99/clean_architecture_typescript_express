export type ControllerRequest = {
    body: any,
    params: any,
    query: any
}

export default interface Controller<T> {
    get(request: ControllerRequest): T[]
}