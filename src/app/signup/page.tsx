"use client";

import * as Form from "@radix-ui/react-form";
import { useDispatch } from "react-redux";

import { basicLogin } from "@/redux/slices/auth/thunks";
import { useRouter } from "next/navigation";
import "./index.scss";

export default function SignUp() {
  const dispatch = useDispatch<any>();

  const router = useRouter();

  return (
    <section>
      <div className="login signUp">
        <div className="form">
          <div className="title">
            <h1>Register new Beincom</h1>
          </div>

          <Form.Root
            className="FormRoot"
            onSubmit={(event) => {
              // prevent default form submission
              event.preventDefault();

              const { email, password } = Object.fromEntries(
                new FormData(event.currentTarget)
              );
              if (email && password) {
                router.push("/login");
              }
            }}
          >
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
                Invalid email format
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
                Please enter the password
              </Form.Message>
            </Form.Field>
            <Form.Submit asChild>
              <button
                type="submit"
                className="Button mt-2.5 cursor-pointer btLogin"
              >
                Register
              </button>
            </Form.Submit>
          </Form.Root>
        </div>
      </div>
    </section>
  );
}
