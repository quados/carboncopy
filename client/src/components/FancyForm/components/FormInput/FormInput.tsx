import { Field } from "formik"
import React, { FunctionComponent } from "react"
import { FormComponentContainer, FormComponentTitle } from "../styles"
import { FormInputStyles } from "./styles"

interface Props {
  name: string
  title?: string
  info?: string
  placeholder?: string
  disabled?: boolean
  validate?: (value: string, name: string) => Promise<string | undefined>
}

export const FormInput: FunctionComponent<Props> = ({
  name,
  title,
  info,
  placeholder,
  disabled,
  validate
}) => {
  return (
    <Field
      name={name}
      validate={async (value: string) => {
        if (!validate) return
        return validate(value, name)
      }}
    >
      {({ field, meta }) => (
        <FormComponentContainer>
          {title && <FormComponentTitle>{title}</FormComponentTitle>}
          <FormInputStyles
            {...field}
            type="text"
            placeholder={placeholder}
            disabled={disabled}
            spellCheck={false}
          />
        </FormComponentContainer>
      )}
    </Field>
  )
}
