export interface IHttpRequest {
    //opcional pois podemos fazer um request para um get
    body?: any
}

export interface IHttpResponse {
    statusCode: number,
    body: any
}