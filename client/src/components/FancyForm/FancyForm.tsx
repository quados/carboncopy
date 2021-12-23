import { Form, Formik, FormikHelpers, FormikValues } from "formik"
import React, { FunctionComponent, RefObject } from "react"
import * as yup from "yup"
import { FormContainer } from "./styles"
interface Props {
  initialValues: FormikValues
  validationSchema?: yup.ObjectSchema<any>
  onSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void | Promise<any>
  innerRef?: RefObject<any>
}

export const FancyForm: FunctionComponent<Props> = ({
  initialValues,
  validationSchema,
  onSubmit,
  innerRef,
  children
}) => {
  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={onSubmit}
        enableReinitialize
        innerRef={innerRef}
      >
        <Form className="formikForm" autoComplete="off">
          {children}
        </Form>
      </Formik>
    </FormContainer>
  )
}
