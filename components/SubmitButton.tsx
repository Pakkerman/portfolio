import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export default function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="h-[3rem] w-[8rem] bg-gray-900 rounded-full outline-none transition-all flex items-center gap-2 justify-center text-white group focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65 dark:bg-slate-800 borderBlack">
      {pending ? (
        <div className="w-5 h-5 border-b-2 border-white rounded-full animate-spin" />
      ) : (
        <>
          Submit{' '}
          <FaPaperPlane className="text-xs transition-all opacity-70 group-hover:scale-125 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
        </>
      )}
    </button>
  )
}
