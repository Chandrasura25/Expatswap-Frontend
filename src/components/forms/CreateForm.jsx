import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserValidation } from "@/lib/validations/user";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import * as z from "zod";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const CreateForm = () => {
  const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  const fieldMappings = {
    firstname: "First Name",
    lastname: "Last Name",
    phone_number: "Phone Number",
  };

  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      lastname: "",
      firstname: "",
      email: "",
      password:"",
      phone_number: "",
      dob: "",
    },
  });

  const onSubmit = async (values) => {
    setLoading(true);
     try {
      const response = await axios.post('http://localhost:3000/api/users', values); 
      if (response.status === 201) {
        setLoading(false);
        toast.success('User Creation is successful');
        navigate('/users');
       }
    } catch (error) {
      setLoading(false);
      toast.error("Error", error.message);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel
                className="text-base-semibold text-dark-2"
              >
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  className="account-form_input no-focus"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel
              className="text-base-semibold text-dark-2"
              >
                Password
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  className="account-form_input no-focus"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {[
          "lastname",
          "firstname",
          "phone_number",
        ].map((child) => (
          <FormField
            control={form.control}
            name={child}
            key={child}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-3 w-full">
                <FormLabel
                  className="text-base-semibold text-dark-2"
                >
                  {fieldMappings[child]}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="account-form_input no-focus"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel
              className="text-base-semibold text-dark-2"
              >
                Date of Birth
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="date"
                  className="account-form_input no-focus"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-[#150B62] flex gap-4">
          Submit
          {loading && (
            <div className="text-right">
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-5 h-5 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          )}
        </Button>
      </form>
    </Form>
  );
};
export default CreateForm;
