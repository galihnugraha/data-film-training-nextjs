/* eslint-disable react/display-name */
'use client'
import React, { forwardRef } from "react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string
  error?: string
  type?: string
  placeholder?: string
}

const TextInput = forwardRef<HTMLInputElement, InputProps>(
  ({ title, type, placeholder, error, ...props }, ref) => (
    <>
      <label htmlFor={title} className="mb-1 block">
        {title}
      </label>
      <input
        ref={ref}
        type={type}
        className="w-full rounded-lg border border-[#C2C2C2] p-3 font-semibold outline outline-0 focus:outline-0"
        placeholder={placeholder}
        autoComplete="off"
        {...props}
      />
      <p className="mt-1 text-sm text-red-700">{error}</p>
    </>
  ),
)

export default TextInput
