import axios from "axios"
import { Button } from "components/Button"
import { FancyForm } from "components/FancyForm"
import { FormInput } from "components/FancyForm/components/FormInput"
import { FormError } from "components/FancyForm/components/styles"
import { AES, enc } from "crypto-js"
import { format } from "date-fns"
import { Field, FormikValues } from "formik"
import React, { FunctionComponent, useEffect, useState } from "react"
import { useMatch } from "react-router-dom"
import { SubmitTitle } from "views/CreateCarbonCopy/styles"
import {
  DecryptedContainer,
  DecryptedContent,
  OpenCarbonCopyContainer,
  OpenFormContainer
} from "./styles"

interface Prediction {
  id: number
  encoded_prediction: string
  hash: string
  date: string
}
interface Props {}

export const OpenCarbonCopy: FunctionComponent<Props> = () => {
  const match = useMatch("/prediction/:hash")
  const hash = match?.params.hash
  const [prediction, setPrediction] = useState<undefined | Prediction>(undefined)
  const [decryptedMessage, setDecryptedMessage] = useState<undefined | string>(undefined)
  const [dateTime, setDateTime] = useState<undefined | string>(undefined)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    if (!hash) return
    const fetchPrediction = async () => {
      const response = await axios.get(`/predictions/${hash}`)
      setPrediction(response.data)
    }
    fetchPrediction()
  }, [hash])

  const onSubmit = async (values: FormikValues, actions: any) => {
    if (!prediction) return
    const bytes = AES.decrypt(prediction?.encoded_prediction, values.passphrase)
    const decrypted = bytes.toString(enc.Utf8)
    if (!decrypted) {
      setError(true)
    } else {
      setError(false)
      const date = new Date(prediction.date)
      const formattedDate = format(date, "LLLL do yyyy")
      const formattedTime = format(date, "HH:mm:ss")
      setDateTime(formattedDate + " at " + formattedTime)
      setDecryptedMessage(decrypted)
    }
  }
  return (
    <OpenCarbonCopyContainer>
      {decryptedMessage ? (
        <DecryptedContainer>
          <SubmitTitle>Your prediction was made on {dateTime} (UTC): </SubmitTitle>
          <DecryptedContent>{decryptedMessage}</DecryptedContent>
        </DecryptedContainer>
      ) : (
        <OpenFormContainer>
          <FancyForm initialValues={{}} onSubmit={onSubmit}>
            <FormInput name="passphrase" title="Enter your passphrase:" />
            <FormError>{error && "Wrong passphrase!"}</FormError>
            <Field name="submit">
              {({ submitForm }) => (
                <Button onClick={submitForm} type="submit">
                  Submit
                </Button>
              )}
            </Field>
          </FancyForm>
        </OpenFormContainer>
      )}
    </OpenCarbonCopyContainer>
  )
}
