import { Field } from "formik"
import React, { FunctionComponent } from "react"
import { FormComponentTitle, FormError } from "../styles"
import { FormTextAreaContainer, FormTextAreaCount, FormTextAreaStyle } from "./styles"

interface Props {
  name: string
  title?: string
  placeholder?: string
  disabled?: boolean
  maxLength?: number
}
export const FormTextArea: FunctionComponent<Props> = ({
  name,
  title,
  placeholder,
  disabled,
  maxLength
}) => {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <FormTextAreaContainer>
          {title && <FormComponentTitle>{title}</FormComponentTitle>}
          <FormTextAreaStyle
            {...field}
            type="text"
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
          />
          <FormError>{meta.error}</FormError>
          {maxLength && (
            <FormTextAreaCount>
              {(field.value && field.value.length) || 0}/{maxLength}
            </FormTextAreaCount>
          )}
        </FormTextAreaContainer>
      )}
    </Field>
  )
}
