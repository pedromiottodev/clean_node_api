import { IHttpRequest, IHttpResponse } from "./http.js"

export interface IController {
    handle(httpRequest: IHttpRequest): IHttpResponse
}