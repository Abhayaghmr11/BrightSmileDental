"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@/components/atom/Input";
import Text from "@/components/atom/Text";
import Button from "@/components/atom/Button";

const ContactUsForm = () => {
  const contactUsSchema = useFormik({
    initialValues: {
      name: "",
      email: "",
      service: "",
      message: "",
      address: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      service: Yup.string().required("Service is required"),
      message: Yup.string().required("Message is required"),
      address: Yup.string().required("Address is required"),
      number: Yup.string()
        .matches(/^[0-9]{10}$/, "number number must be 10 digits")
        .required("number is required"),
    }),
    onSubmit: (value) => {
      console.log(value);
    },
  });
  return (
    <form
      className=" w-full flex flex-col gap-[25px]"
      onSubmit={contactUsSchema.handleSubmit}
    >
      <div className=" flex lg:flex-row flex-col gap-[25px] lg:gap-[10px]">
        <div className=" w-full flex flex-col gap-2">
          <Text variant="span" className="font-normal">
            Name
          </Text>
          <Input
            name="name"
            id="name"
            placeholder="Enter your name"
            value={contactUsSchema.values.name}
            onChange={contactUsSchema.handleChange}
            onBlur={contactUsSchema.handleBlur}
            className="w-full"
          />
          {contactUsSchema.touched.name && contactUsSchema.errors.name && (
            <p className="text-red-500 text-sm ">
              {contactUsSchema.errors.name}
            </p>
          )}
        </div>
        <div className=" w-full flex flex-col gap-2">
          <Text variant="span" className="font-normal">
            Email
          </Text>
          <Input
            name="email"
            placeholder="Enter your email"
            id="email"
            value={contactUsSchema.values.email}
            onChange={contactUsSchema.handleChange}
            onBlur={contactUsSchema.handleBlur}
            className="w-full"
          />
          {contactUsSchema.touched.email && contactUsSchema.errors.email && (
            <p className="text-red-500 text-sm ">
              {contactUsSchema.errors.email}
            </p>
          )}
        </div>
      </div>

      <div className=" w-full flex flex-col gap-2">
        <Text variant="span" className="font-normal">
          Phone Number
        </Text>
        <Input
          name="number"
          id="number"
          placeholder="Enter your Phone number"
          value={contactUsSchema.values.number}
          onChange={contactUsSchema.handleChange}
          onBlur={contactUsSchema.handleBlur}
          className="w-full"
        />
        {contactUsSchema.touched.number && contactUsSchema.errors.number && (
          <p className="text-red-500 text-sm ">
            {contactUsSchema.errors.number}
          </p>
        )}
      </div>

      <div className=" w-full flex flex-col gap-2">
        <Text variant="span" className="font-normal">
          Select Service
        </Text>
        <Input
          name="service"
          id="service"
          value={contactUsSchema.values.service}
          onChange={contactUsSchema.handleChange}
          onBlur={contactUsSchema.handleBlur}
          className="w-full"
        />
        {contactUsSchema.touched.service && contactUsSchema.errors.service && (
          <p className="text-red-500 text-sm ">
            {contactUsSchema.errors.service}
          </p>
        )}
      </div>

      <div className=" w-full flex flex-col gap-2">
        <Text variant="span" className="font-normal">
          Address
        </Text>
        <Input
          name="address"
          id="address"
          value={contactUsSchema.values.address}
          placeholder="Enter your address"
          onChange={contactUsSchema.handleChange}
          onBlur={contactUsSchema.handleBlur}
          className="w-full"
        />
        {contactUsSchema.touched.address && contactUsSchema.errors.address && (
          <p className="text-red-500 text-sm ">
            {contactUsSchema.errors.address}
          </p>
        )}
      </div>

      <div className=" w-full flex flex-col gap-2">
        <Text variant="span" className="font-normal">
          Message
        </Text>
        <textarea
          className="border border-neutral-200 text-[14px] rounded-[10px] py-2 px-3 h-[90px] w-full focus:outline-none"
          placeholder="Enter your message"
          name="message"
          id="message"
          value={contactUsSchema.values.message}
          onChange={contactUsSchema.handleChange}
          onBlur={contactUsSchema.handleBlur}
        />
        {contactUsSchema.touched.message && contactUsSchema.errors.message && (
          <p className="text-red-500 text-sm ">
            {contactUsSchema.errors.message}
          </p>
        )}
      </div>
      <div>
        <Button type="submit" variant="default">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactUsForm;
