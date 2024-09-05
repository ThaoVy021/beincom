import * as Form from "@radix-ui/react-form";
import GoogleIcon from "../../asset/icons/google.svg";
import FacebookIcon from "../../asset/icons/facebook.svg";
import "./index.scss";

export default function Login() {
  return (
    <section>
      <div className="login">
        <div className="form">
          <div className="title">
            <h1>Login to Beincom</h1>
            <span>The future of community engagement</span>
          </div>
          <div className="form-login">
            <button
              className="Button violet google gap-2"
              style={{ marginTop: 10 }}
            >
              <GoogleIcon />
              Google
            </button>
            <button
              className="Button violet google gap-2"
              style={{ marginTop: 10 }}
            >
              <FacebookIcon />
              Google
            </button>
          </div>
          <span className="divider">
            <hr />
            <span>or</span>
            <hr />
          </span>
          <Form.Root className="FormRoot">
            <Form.Field className="FormField" name="email">
              <div className="flex items-baseline justify-between">
                <Form.Label className="FormLabel">Email</Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="Input"
                  type="email"
                  placeholder="Email"
                  required
                />
              </Form.Control>
              <Form.Message
                className="FormMessage text-red-600"
                match="valueMissing"
              >
                Please enter your email
              </Form.Message>
              <Form.Message
                className="FormMessage text-red-600"
                match="typeMismatch"
              >
                Please provide a valid email
              </Form.Message>
            </Form.Field>
            <Form.Field className="FormField" name="password">
              <div className="flex items-baseline justify-between">
                <Form.Label className="FormLabel">Password</Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="Input"
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Control>
              <Form.Message
                match="valueMissing"
                className="FormPassword text-red-600"
              >
                Please enter a password.
              </Form.Message>
            </Form.Field>
            <Form.Submit asChild>
              <button type="submit" className="Button mt-2.5 btLogin">
                Login
              </button>
            </Form.Submit>
          </Form.Root>
          <div className="flex justify-center mt-2 agreePolicy">
            <span>By logging in, you agree to our &nbsp;</span>
            <a
              href="https://group.beincom.com/en/privacy&terms"
              className="underline"
            >
              Privacy & Terms
            </a>
          </div>
          <div className="flex justify-center mt-2 agreePolicy">
            <span className="forgotPassword cursor-pointer hover:underline text-blue-50">
              Forgot password?
            </span>
          </div>
          <div className="flex justify-center mt-2 footer">
            <span>Don’t have an account? &nbsp;</span>
            <span className="signUp hover:underline">Sign Up</span>
          </div>
        </div>
      </div>
    </section>
  );
}
