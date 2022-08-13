import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number, date } from 'yup';

const schema = object({
    login: string().required(),
    password: string().min(6).max(32).required(),
  age: number().required().positive().integer(),
  email: string().email(),
  website: string().url().nullable(),
  createdOn: date().default(() => new Date()),
});

const initialValues = {
    login: '',
    password: '',
}

export const LoginForm = () => {
    const handleSubmit = (values, {resetForm}) => {
        console.log(values);
        resetForm();
    }
    return (
        <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
        <Form autoComplete="off">
            <label htmlFor="login">Login
                    <Field type="text" name="login" />
                    <ErrorMessage name='login' />
            </label>
            <label htmlFor="password">Password
                    <Field type="text" name="password" /></label>
                <ErrorMessage name='password' />
            <button type="submit">Submit</button>
            </Form>
            </Formik>
    )
}