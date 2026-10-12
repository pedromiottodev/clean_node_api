import { IHttpResponse } from "../protocols/http.js"

export const badRequest = (error: Error): IHttpResponse => {
    return {
        statusCode: 400,
        body: error
    }
}