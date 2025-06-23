import React, { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

//objectification

const schema = z.object({
 
  //age: z.number().min(18),
  ip: z.string().regex(/^(25[0-5]|2[0-4][0-9]|1?[0-9]{1,2})(\.(25[0-5]|2[0-4][0-9]|1?[0-9]{1,2})){3}$/, 
    {message: 'Invalid IP Address'}
  )
});

type formdata = z.infer<typeof schema>;

const ModuleNine = () => {
//   const Form = useForm();
//   console.log(Form);
//   const address = useRef<HTMLInputElement>(null);
//   const [IP_Value, setIP_Value] = useState({
//   ip: "",
//   });

  const {register, handleSubmit, formState: {errors, isValid},
} = useForm<formdata>({resolver: zodResolver(schema)});

const onSubmit = (data: formdata) => {
    console.log('Submitted Data', data);
};
  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   if (address.current !== null) IP_Value.ip = address.current.value;
  //   console.log(IP_Value.ip);
  // };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="ip" className="form-label">
          IP Address
        </label>
    <input
          {...register("ip")}
          id="name"
          //ref={address}
          type="text"
          //pattern="^(25[0-5]|2[0-4][0-9]|1?[0-9]{1,2})(\.(25[0-5]|2[0-4][0-9]|1?[0-9]{1,2})){3}$"
          className="form-control"
        />
        {errors.ip && (<p className='text-danger'>{errors.ip.message}</p>)}
      </div>
      <button disabled = {!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ModuleNine;

