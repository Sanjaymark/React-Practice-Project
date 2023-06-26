import * as yup from "yup";

export const studentSchema = yup.object({
    name : yup.string().required("Please give your Name"),
    batch : yup.string().required("Please add your Bacth"),
    phone : yup.string(),
    email : yup.string().email().required("please give your email"),
    qualification : yup.string().required("Provide your qualification").min(2,"min 2 value required").max(10,"max length exceeded")
});