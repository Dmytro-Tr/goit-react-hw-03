import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const ContactForm = ({ addContact }) => {
  const nameId = useId();
  const numberId = useId();

  const feedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Мінімум 3 символи!")
      .max(50, "Максимум 50 символів!")
      .required("Обов'язково введить Ваше ім'я!"),
    number: Yup.string()
      .min(3, "Мінімум 3 символи!")
      .max(50, "Максимум 50 символів!")
      .required("Обов'язково введить Ваш номер телефона!"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "", id: "" }}
      onSubmit={addContact}
      validationSchema={feedbackSchema}
    >
      <Form>
        <label htmlFor={nameId}>Name: </label>
        <Field
          type="text"
          name="name"
          id={nameId}
        />
        <ErrorMessage
          name="name"
          component="span"
        />

        <label htmlFor={numberId}>Number: </label>
        <Field
          type="tel"
          name="number"
          id={numberId}
        />
        <ErrorMessage
          name="number"
          component="span"
        />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
