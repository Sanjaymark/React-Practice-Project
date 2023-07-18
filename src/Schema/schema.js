import * as yup from "yup";

export const studentSchema = yup.object(
    {
        name : yup.string().required("Please give your name"),
        batch : yup.string().required("Please provide your batch"),
        phone : yup.string(),
        email : yup.string().email().required("Please give your email"),
        qualification : yup.string().required("Provide your qualification")
         .min(2, "min 2 value required").max(10,"max length exceeded")
    }
);

export const teacherSchema = yup.object(
    {
        name : yup.string().required("Please give your name"),
        batch : yup.string().required("Please provide your batch"),
        phone : yup.string(),
        email : yup.string().email().required("Please give your email"),
        qualification : yup.string().required("Provide your qualification")
         .min(2, "min 2 value required").max(10,"max length exceeded")
    }
);