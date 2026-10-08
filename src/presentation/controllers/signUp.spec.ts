import { SignUpController } from "./signUp.js"

describe("SignUp Controller", () => {
    test("Should return 400 if no name is provided", () => {
        //1° criar uma instância da classe que está sendo testada (SignUpController)
        //a instância da classe é chamada de sut = system under test

        const sut = new SignUpController()
        const httpRequest = {
            body: {
                email: "any_email@gmail.com",
                password: "any_password",
                passwordConfirmation: "any_password"
            }
        }

        const httpResponse = sut.handle(httpRequest)

        expect(httpResponse.statusCode).toBe(400)
    })
})