import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactUsPage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      subject: '',
      email: '',
      textarea: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Must be 3 characters or more")
        .required("Required"),
        subject: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .required('Required'),
        textarea: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values, {resetForm} )=> {
    alert("Thank you for your message!"); 
    resetForm();
    //console.log(values);
    },
    
  });
  return (
    <form onSubmit={formik.handleSubmit} className=" w-full flex flex-col  bg-gray-700 max-auto">
      <label htmlFor="firstName"
      className="text-white ml-[20px] text-[35px]" >Full Name</label>
      <input
        className=" m-[19px]  text-[35px]"
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="error">{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="subject"
      className="text-white ml-[20px] text-[35px]" >Subject</label>
      <input
        className=" m-[19px]  text-[35px]"
        id="subject"
        name="subject"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.subject}
      />
      {formik.touched.subject && formik.errors.subject ? (
        <div className="error">{formik.errors.subject}</div>
      ) : null}

      <label htmlFor="email"
      className="text-white ml-[20px] text-[35px]" >Email Adress</label>
      <input
        className=" m-[19px]  text-[35px]"
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="error">{formik.errors.email}</div>
      ) : null}

        <label htmlFor="textarea"
        className="text-white ml-[20px] text-[35px]" >How can we help you?</label>
        <input
        className=" m-[19px] text-[35px]"
        id="textarea"
        name="textarea"
        type="textarea"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.textarea}
       />
         {formik.touched.subject && formik.errors.textarea ? (
            <div className="error">{formik.errors.textarea}</div>
      ) : null}

        <button className='rounded-[5px] bg-white m-[20px] px-3.5 py-3.5 text-lg font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-800 hover:text-white hover:text-[37px]   mt-auto'
        type="submit"  >Submit</button>
    </form>
  );
};

export default ContactUsPage;