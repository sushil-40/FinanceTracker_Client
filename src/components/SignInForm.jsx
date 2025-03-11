import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "./CustomInput";
import { toast } from "react-toastify";
import { loginUser, postNewUser } from "../../helpers/axiosHelper";
import useForm from "../hooks/useForm";

const initialState = {
  email: "",
  password: "",
};
export const SignInForm = () => {
  const { form, handleOnChange } = useForm({ initialState });
  // const [form, setForm] = useState({});
  const fields = [
    {
      label: "Email",
      placeholder: "John@email.com",
      required: true,
      type: "email",
      name: "email",
    },

    {
      label: "Password",
      placeholder: "********",
      required: true,
      type: "password",
      name: "password",
    },
  ];
  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   console.log(name, value);
  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  // };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    const { status, message, user, accessJWT } = await loginUser(form);
    toast[status](message);
    console.log(user, accessJWT);
  };
  return (
    <div className="border rounded p-4">
      <h4 className="mb-5">Sign In now!</h4>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        {fields.map((input) => {
          return (
            <CustomInput
              key={input.name}
              {...input}
              onChange={handleOnChange}
            />
          );
        })}

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
