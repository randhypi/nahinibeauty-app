import React, { useState } from "react";

interface FormPost {
  name?: string;
  email?: string;
}

export default function Form() {
  const [state, setState] = useState<FormPost>();
  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();

    setState({
      ...state,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  console.log(state);

  return (
    <>
      <form className="w-fit">
        <div className="flex flex-col w-fit  gap-y-10">
          <div className="flex flex-row w-fit items-center gap-x-10 w-[100%] h-[20%] ">
            <label htmlFor="name" className="mb-2 h-ful w-fit  ">
              Name
            </label>
            <input
              className="mb-4 border-b-2 w-full h-full p-5"
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              onChange={handleForm}
              required
            />
          </div>

          <div className="flex flex-row w-fit items-centerw-[50%] h-[20%] gap-x-10">
            <label htmlFor="email" className="mb-2 h-ful w-fit">
              Email
            </label>
            <input
              className="mb-4 border-b-2 w-full h-full p-5"
              id="email"
              name="email"
              type="text"
              autoComplete="email"
              onChange={handleForm}
              required
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
