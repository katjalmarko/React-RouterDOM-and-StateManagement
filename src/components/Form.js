import "./Form.css"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
// import "all" as yup

const Form = () => {

  // for validation
  const schema = yup.object().shape({
    fullName: yup.string()
    .required("Your Full Name is Required!"),
    // must be string, cannot leave blank input
    email: yup.string().email()
    .required("Email is Required!"),
    // must be string, and email format is required
    age: yup.number().positive().integer().min(18)
    .required("Age must be Greater than or Equal to 18"),
    // must be number, cannot be -1, cannot be 1.5
    password: yup.string().min(4).max(20)
    .required("Password must be at least 4 characters!"),
    // string, min letter 4 max 20
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords Don't Match!")
    .required("Confirm Password is a Required field!"),
    // taking value from "password" and null value only to say that "password is the only thing I need"
  })

  const {register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
    // final format of our Form
    // resolver specifies how our schema will look like
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form 
    className="forminprofile"
    onSubmit={handleSubmit(onSubmit)}>

      <input 
      type="text" 
      placeholder="Full name..."
      {...register("fullName")} />
      <p>{errors.fullName?.message}</p>

      <input 
      type="text" 
      placeholder="Email..." {...register("email")} />
      <p>{errors.email?.message}</p>

      <input 
      type="number" 
      placeholder="Age..." {...register("age")} />
      <p>{errors.age?.message}</p>

      <input 
      type="password" 
      placeholder="Password..." {...register("password")} />
      <p>{errors.password?.message}</p>

      <input 
      type="password" 
      placeholder="Confirm Password..." {...register("confirmPassword")} />
      <p>{errors.confirmPassword?.message}</p>

      <input type="submit" />
    </form>
  )
}

export default Form