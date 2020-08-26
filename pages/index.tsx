import { Formik, Form, Field, ErrorMessage } from "formik";
import FormikDetails from "../api/formik";
import {
  TextField,
  MenuItem,
  FormGroup,
  Box,
  FormControl,
  Button
} from "@material-ui/core";
import { object, string, number } from "yup";

const initialValues: FormikDetails = {
  winery: "",
  type: " ",
  label: "",
  vintage: 0,
  description: "",
  price: 0,
};

export default function Home() {
  return (
    <div className="formik">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          console.log(formikHelpers);
        }}
        validationSchema={object({
          winery: string().required().min(2).max(100),
          type: string().required().min(2),
          label: string().required().max(100),
          vintage: number().required(),
          description: string().required().min(5).max(1000),
          price: number().required().min(100),
        })}
      >
        {({ values, errors, isSubmitting, isValidating }) => (
          <Form>
            <Box marginBottom={1}>
              <FormControl fullWidth={true}>
                <Field name="winery" as={TextField} label="Winery" />
                <ErrorMessage name="winery" />
              </FormControl>
            </Box>

            <Box marginBottom={1}>
              <FormControl fullWidth={true}>
                <FormGroup>
                  <Field name="type" as={TextField} select>
                    <MenuItem value=" ">Select...</MenuItem>
                    <MenuItem value="red">Red</MenuItem>
                    <MenuItem value="white">White</MenuItem>
                    <MenuItem value="rose">Rose</MenuItem>
                  </Field>
                  <ErrorMessage name="type" />
                </FormGroup>
              </FormControl>
            </Box>

            <Box marginBottom={1}>
              <FormControl>
                <Field name="label" as={TextField} label="Label" />
                <ErrorMessage name="label" />
              </FormControl>
            </Box>

            <Box marginBottom={1}>
              <FormControl>
                <Field name="vintage" as={TextField} label="Vintage" />
                <ErrorMessage name="vintage" />
              </FormControl>
            </Box>

            <Box marginBottom={1}>
              <FormControl>
                <Field
                  name="description"
                  as={TextField}
                  label="Description"
                  multiline
                  rows={3}
                  rowsMax={6}
                />
                <ErrorMessage name="description" />
              </FormControl>
            </Box>

            <Box>
              <FormControl>
                <Field
                  name="price"
                  type="number"
                  as={TextField}
                  label="Price"
                />
                <ErrorMessage name="price" />
              </FormControl>
            </Box>

            <Button type="submit" disabled={isSubmitting || isValidating}>Submit</Button>

            <pre>{JSON.stringify(errors, null, 4)}</pre>
            <pre>{JSON.stringify(values, null, 4)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
}
