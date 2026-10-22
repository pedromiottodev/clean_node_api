import { IHttpRequest, IHttpResponse } from "../protocols/http.js"
import { IController } from "../protocols/controller.js"
import { MissingParamError, InvalidParamError } from "../errors/index.js"
import { badRequest, serverError } from "../helpers/http-helper.js"
import { EmailValidator } from "../protocols/email-validator.js"


export class SignUpController implements IController {
    private readonly emailValidator: EmailValidator

    //constructor serve para inicializar a classe com dependências externas
    constructor(emailValidator: EmailValidator) {
        this.emailValidator = emailValidator
    }

    handle(httpRequest: IHttpRequest): IHttpResponse {

        try {
            const requiredFields = ["name", "email", "password", "passwordConfirmation"]

            for (const field of requiredFields) {

                if (!httpRequest.body[field]) {
                    return badRequest(new MissingParamError(field))
                }
            }

            const isValid = this.emailValidator.isValid(httpRequest.body.email)

            if (!isValid) {
                return badRequest(new InvalidParamError("email"))
            }

            return {
                statusCode: 200,
                body: "Success"
            }
        }
        catch (error) {
            return serverError()
        }
    }
}