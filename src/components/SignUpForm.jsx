import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "./CustomInput";
import { toast } from "react-toastify";
import { postNewUser } from "../../helpers/axiosHelper";
export const SignUpForm = () => {
  const [form, setForm] = useState({});
  const fields = [
    {
      label: "Name",
      placeholder: "John Smith",
      required: true,
      type: "text",
      name: "name",
    },
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
    {
      label: "Confirm Password",
      placeholder: "********",
      required: true,
      type: "password",
      name: "confirmPassword",
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return toast.error("Password does not match");
    }
    const { status, message } = await postNewUser(rest);
    toast[status](message); //responding back from server router
  };
  return (
    <div className="border rounded p-4">
      <h4 className="mb-5">Sign up now!</h4>
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
