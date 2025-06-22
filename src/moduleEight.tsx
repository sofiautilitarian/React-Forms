import React, { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

//objectification

const schema = z.object({
  name: z.string().min(11),
  age: z.number().min(18)
});

type formdata = z.infer<typeof schema>;

const moduleEight = () => {
  const Form = useForm();
  console.log(Form);
  const address = useRef<HTMLInputElement>(null);
  const [IP_Value, setIP_Value] = useState({
  ip: "",
  });

  const {register, handleSubmit, formState: {errors},
} = useForm<formdata>({resolver: zodResolver(schema)});

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   if (address.current !== null) IP_Value.ip = address.current.value;
  //   console.log(IP_Value.ip);
  // };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          IP Address
        </label>
    <input
          onChange={(event) =>
            setIP_Value({ ...IP_Value, ip: event.target.value })
          }
          value={IP_Value.ip}
          id="name"
          ref={address}
          type="text"
          //pattern="^(25[0-5]|2[0-4][0-9]|1?[0-9]{1,2})(\.(25[0-5]|2[0-4][0-9]|1?[0-9]{1,2})){3}$"
          className="form-control"
        />
        {errors.name && (<p className='text-danger'>{errors.name.message}</p>)}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default moduleEight;
