import {
  Heading,
  Flex,
  Spacer,
  IconButton,
  useColorMode,
  Input,
  Button,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { useStore } from "store";

const PositionField = ({ position }: { position: string }) => {
  return (
    <Field name={`position.${position}`}>
      {({ field, form }: any) => (
        <FormControl
          isInvalid={
            form.errors.position &&
            form.touched.position &&
            form.errors.position[position] &&
            form.touched.position[position]
          }
        >
          <Input {...field} placeholder="0" />
          <FormErrorMessage>
            {form.errors.position ? form.errors.position[position] : ""}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

const BoxForm = () => {
  const store = useStore();
  return (
    <Formik
      initialValues={{
        name: "",
        position: {
          x: 0,
          y: 0,
          z: 0,
        },
      }}
      validationSchema={Yup.object({
        name: Yup.string(),
        position: Yup.object({
          x: Yup.number(),
        }),
      })}
      onSubmit={(values) => {
        // store.addBox(values.name, [
        //   values.position.x,
        //   values.position.y,
        //   values.position.z,
        // ]);
      }}
    >
      {(formik) => {
        return (
          <Form>
            <Field name="name">
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input {...field} placeholder="Name" />
                  <FormErrorMessage>
                    {form.errors.name ? form.errors.name : ""}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <FormControl>
              <FormLabel htmlFor="position">Position</FormLabel>
              <PositionField position="x" />
              <PositionField position="y" />
              <PositionField position="z" />
            </FormControl>
            <Button type="submit">Submit</Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default BoxForm;
