import { Form, Formik } from "formik"
import React, { FunctionComponent } from "react"
import { FormContainer } from "./styles"

interface Props {}

export const FancyForm: FunctionComponent<Props> = () => {
  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={onSubmit}
        enableReinitialize
        innerRef={innerRef}>
        {({ submitForm, isSubmitting }) => (
          <Form className="formikForm" autoComplete="off">
            {children}
            {(useSubmitButton || onCancel) && (
              <FormButtonsContainer>
                {onCancel && (
                  <FormButton
                    type="reset"
                    disabled={disableForm || isSubmitting}
                    onClick={() => {
                      onCancel()
                    }}
                  />
                )}
                {useSubmitButton && (
                  <FormButton
                    type="submit"
                    disabled={disableForm || isSubmitting}
                    onClick={() => {
                      submitForm()
                    }}
                  />
                )}
              </FormButtonsContainer>
            )}
          </Form>
        )}
      </Formik>
    </FormContainer>
  )
}
