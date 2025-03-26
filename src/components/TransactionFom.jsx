import React, { useState } from "react";
import { CustomInput } from "./CustomInput";
import useForm from "../hooks/useForm";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
const initialState = {
  type: "", //income or expenses
  title: "", //salary , expenses
  amount: "",
  tdate: "", // transaction date
};

export const TransactionFom = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const fields = [
    // {
    //   label: "Type",
    //   placeholder: "",
    //   required: true,
    //   type: "text",
    //   name: "name",
    // },
    {
      label: "Title",
      placeholder: "Salary",
      required: true,
      type: "text",
      name: "title",
      value: form.title,
    },

    {
      label: "Amount",
      placeholder: "44",
      required: true,
      type: "number",
      name: "amount",
      value: form.amount,
    },
    {
      label: "Transaction Date",
      required: true,
      type: "date",
      name: "tdate",
      value: form.tdate,
    },
  ];
  return (
    <div className="border rounded p-4">
      <h4 className="mb-5">Add your transaction!</h4>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Transaction type</Form.Label>
          <Form.Select name="type" onChange={handleOnChange} required>
            <option value="">-- select --</option>
            <option value="income">Income</option>
            <option value="expenses">Expenses</option>
          </Form.Select>
        </Form.Group>

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
