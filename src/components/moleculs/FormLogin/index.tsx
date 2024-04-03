'use client'
import TextInput from '@components/atoms/TextInput';
import { yupResolver } from '@hookform/resolvers/yup';
import apiLogin from '@services/api/apiLogin';
import { setStorage } from '@store/storage';
import { encryptAES } from '@utils/crypto';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from "yup";

type Login = {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup
      .string()
      .email("Format Email tidak sesuai")
      .required("Email harus di isi")
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i, "format email tidak valid"),
  password: yup
      .string()
      .required("password harus diisi"),
})

export default function FormLogin() {
  const router = useRouter();
  
  const form = useForm<Login>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
    mode: "onChange", // kapan ketika validasi itu akan dipanggil
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = form;

  const onSubmited = async (data: Login) => {
    console.log("SUBMITED", data.email);
    const emailEncrypted = encryptAES(data.email);
    const passwordEncrypted = encryptAES(data.password);

    const login = {
      email: emailEncrypted, 
      password: passwordEncrypted, 
    }

    apiLogin(login)
      .then(res => {
        setStorage('user', JSON.stringify(res.data))
        router.push('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <p className="mb-10 text-3xl font-bold lg:text-4xl">Login</p>
      <form onSubmit={handleSubmit(onSubmited)}>
        <div className="mb-6">
          <TextInput
            title="email"
            type="email"
            placeholder="email"
            {...register("email")}
            error={errors.email?.message}
          />
        </div>
        <div className="mb-6">
          <TextInput
            title="password"
            type="password"
            placeholder="password"
            {...register("password")}
            error={errors.password?.message}
          />
        </div>
        <div className="mb-10 flex items-center lg:mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded-md border border-[#C2C2C2] bg-gray-50"
            />
          </div>
          <label className="ms-2">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="w-full justify-center rounded-full bg-[#789461] p-2 text-white"
        >
          Login
        </button>
      </form>
    </div>
  )
}
