import axios from "axios"
import { Button } from "components/Button"
import { CopyBox } from "components/CopyBox"
import { FancyForm } from "components/FancyForm"
import { FormTextArea } from "components/FancyForm/components/FormTextArea"
import { AES, SHA256 } from "crypto-js"
import { Field, FormikValues } from "formik"
import { getRandomPassPhrase } from "helpers/PassPhraseGenerator/PassPhraseGenerator"
import React, { FunctionComponent, useMemo, useState } from "react"
import {
  CreateCarbonCopyContainer,
  CreateFormContainer,
  LinkStyle,
  PassPhrase,
  SubmittedContainer,
  SubmitTitle
} from "./styles"

export const CreateCarbonCopy: FunctionComponent = () => {
  const [passPhrase, setPassPhrase] = useState<undefined | string>(undefined)
  const [hash, setHash] = useState<undefined | string>(undefined)
  const initialValues = {}

  const onSubmit = async (values: FormikValues, actions: any) => {
    const generatedPhrase = getRandomPassPhrase()
    const generatedCipher = AES.encrypt(values.prediction, generatedPhrase).toString()
    const generatedHash = SHA256(generatedCipher).toString()

    await axios.post("/predictions", {
      encoded_prediction: generatedCipher,
      hash: generatedHash
    })

    setPassPhrase(generatedPhrase)
    setHash(generatedHash)
  }

  const generatedLink = useMemo(() => {
    return `http://localhost:3000/prediction/${hash}`
  }, [hash])
  return (
    <CreateCarbonCopyContainer>
      {passPhrase ? (
        <SubmittedContainer>
          <SubmitTitle>The link to your prediction:</SubmitTitle>
          <CopyBox textToCopy={generatedLink}>
            <LinkStyle href={generatedLink} target="_blank">
              {generatedLink}
            </LinkStyle>
          </CopyBox>
          <SubmitTitle>The passphrase to decipher your prediction:</SubmitTitle>
          <CopyBox textToCopy={passPhrase}>
            <PassPhrase>{passPhrase}</PassPhrase>
          </CopyBox>
        </SubmittedContainer>
      ) : (
        <CreateFormContainer>
          <FancyForm initialValues={initialValues} onSubmit={onSubmit}>
            <FormTextArea
              title="Write your prediction!"
              name="prediction"
              maxLength={424}
            />
            <Field name="submit">
              {({ submitForm }) => (
                <Button onClick={submitForm} type="submit">
                  Submit
                </Button>
              )}
            </Field>
          </FancyForm>
        </CreateFormContainer>
      )}
    </CreateCarbonCopyContainer>
  )
}
