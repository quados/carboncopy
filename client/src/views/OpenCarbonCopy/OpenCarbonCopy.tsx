import axios from "axios"
import { Button } from "components/Button"
import { FancyForm } from "components/FancyForm"
import { FormInput } from "components/FancyForm/components/FormInput"
import { FormTextArea } from "components/FancyForm/components/FormTextArea"
import { FormError } from "components/FancyForm/components/styles"
import { AES, enc } from "crypto-js"
import { format } from "date-fns"
import { Field, FormikValues } from "formik"
import React, { FunctionComponent, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { OpenCarbonCopyContainer, OpenFormContainer } from "./styles"

interface Prediction {
  id: number
  encoded_prediction: string
  hash: string
  date: string
}
interface Props {}

export const OpenCarbonCopy: FunctionComponent<Props> = () => {
  const { hash, passphrase } = useParams()
  const [prediction, setPrediction] = useState<undefined | Prediction>(undefined)
  const [decryptedMessage, setDecryptedMessage] = useState<undefined | string>(undefined)
  const [dateTime, setDateTime] = useState<undefined | string>(undefined)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    if (!hash) return
    const fetchPrediction = async () => {
      const response = await axios.get(`/predictions/${hash}`)
      const predictionResponse: Prediction = response.data
      setPrediction(predictionResponse)
      if (passphrase) {
        const decrypted = decryptPrediction(
          predictionResponse.encoded_prediction,
          passphrase
        )
        getFormattedTime(predictionResponse.date)
        setDecryptedMessage(decrypted)
      }
    }
    fetchPrediction()
  }, [hash, passphrase])

  const decryptPrediction = (encodedPrediction: string, pass: string): string => {
    const bytes = AES.decrypt(encodedPrediction, pass)
    const decrypted = bytes.toString(enc.Utf8)
    return decrypted
  }

  const getFormattedTime = (time: string) => {
    const date = new Date(time)
    const formattedDate = format(date, "LLLL do yyyy")
    const formattedTime = format(date, "HH:mm:ss")
    setDateTime(formattedDate + " at " + formattedTime)
  }
  const onSubmit = async (values: FormikValues, actions: any) => {
    if (!prediction) return
    const decrypted = decryptPrediction(prediction.encoded_prediction, values.passphrase)
    if (!decrypted) {
      setError(true)
    } else {
      setError(false)
      getFormattedTime(prediction.date)
      setDecryptedMessage(decrypted)
    }
  }
  return (
    <OpenCarbonCopyContainer>
      <OpenFormContainer>
        <FancyForm
          initialValues={{
            decryptedMessage: decryptedMessage
          }}
          onSubmit={onSubmit}
        >
          {decryptedMessage ? (
            <FormTextArea
              name="decryptedMessage"
              title={`Your prediction was made on ${dateTime} (UTC):`}
              disabled={true}
            />
          ) : (
            <>
              <FormInput name="passphrase" title="Enter your passphrase:" />
              <FormError>{error && "Wrong passphrase!"}</FormError>
              <Field name="submit">
                {({ submitForm }) => (
                  <Button onClick={submitForm} type="submit">
                    Submit
                  </Button>
                )}
              </Field>
            </>
          )}
        </FancyForm>
      </OpenFormContainer>
    </OpenCarbonCopyContainer>
  )
}
