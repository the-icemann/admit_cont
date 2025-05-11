import * as yup from 'yup';

export const mySchema =yup.object().shape({
    email:yup.string().email("Please enter a valid email address!!!").required("This field is required"),
    password:yup.string().min(5, "Password should be atleast 8 characters").required("Please enter a password")
})