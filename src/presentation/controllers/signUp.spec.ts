import { SignUpController } from "./signUp.js"
import { MissingParamError } from "../errors/missing-param-error.js"

//factory
//tirando a respponsabilidade da classe de instânciar o que está sendo testado
const makeSut = (): SignUpController => {
    return makeSut()
}

describe("SignUp Controller", () => {

    test("Should return 400 if no name is provided", () => {
        //1° criar uma instância da classe que está sendo testada (SignUpController)
        //a instância da classe é chamada de sut = system under test

        const sut = makeSut()
        const httpRequest = {
            body: {
                email: "any_email@gmail.com",
                password: "any_password",
                passwordConfirmation: "any_password"
            }
        }

        const httpResponse = sut.handle(httpRequest)

        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError("name"))
    })

    test("Should return 400 if no email is provided", () => {

        const sut = makeSut()
        const httpRequest = {
            body: {
                name: "any name",
                password: "any_password",
                passwordConfirmation: "any_password"
            }
        }

        const httpResponse = sut.handle(httpRequest)

        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError("email"))

    })

    test("Should return 400 if no password is provided", () => {

        const sut = makeSut()
        const httpRequest = {
            body: {
                name: "any name",
                email: "any_email@gmail.com",
                passwordConfirmation: "any_password"
            }
        }

        const httpResponse = sut.handle(httpRequest)

        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError("password"))

    })

    test("Should return 400 if no passwordConfirmation is provided", () => {

        const sut = makeSut()
        const httpRequest = {
            body: {
                name: "any name",
                email: "any_email@gmail.com",
                password: "any_password",
            }
        }

        const httpResponse = sut.handle(httpRequest)

        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError("passwordConfirmation"))

    })
})