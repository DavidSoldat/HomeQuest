'use client';
import Image from 'next/image';
import { useState } from 'react';
import SignInButton from '../_components/SignInButton';

function SignIn() {
  const [signIn, setSignIn] = useState(true);

  return (
    <div className='w-full my-36 flex flex-col items-center justify-center'>
      <div className='border border-gray-200 rounded-lg flex flex-col items-start px-9 w-5/6 py-12 boxShadow sm:max-w-md lg:mx-auto '>
        <h1 className='text-primary-navy font-bold text-2xl self-center '>
          Welcome to Home Quest
        </h1>
        <div className='my-4 w-full flex border-b border-gray-200'>
          <button
            onClick={() => setSignIn(true)}
            className={`px-3 py-2 ${
              signIn ? 'border-b-4 pb-1 border-blue-700' : ''
            }`}
          >
            Sign in
          </button>
          <button
            onClick={() => setSignIn(false)}
            className={`px-3 py-2 ${
              !signIn ? 'border-b-4 pb-1 border-blue-700' : ''
            }`}
          >
            New account
          </button>
        </div>
        <div className='w-full pb-7 border-b'>
          {signIn ? (
            <form className='w-full  mx-auto'>
              <div className='mb-5'>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  className='bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg   block w-full p-2.5'
                  placeholder='Enter email'
                  required
                />
              </div>
              <div className='mb-5'>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Your password
                </label>
                <input
                  type='password'
                  id='password'
                  className='bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg   block w-full p-2.5'
                  placeholder='Enter password'
                  required
                />
              </div>

              <button
                type='submit'
                className='text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center'
              >
                Sign in
              </button>
            </form>
          ) : (
            <form className='w-full  mx-auto'>
              <div className='mb-5'>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  className='bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg   block w-full p-2.5'
                  placeholder='Enter email'
                  required
                />
              </div>
              <div className='mb-5'>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Your password
                </label>
                <input
                  type='password'
                  id='password'
                  className='bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg   block w-full p-2.5'
                  placeholder='Create password'
                  required
                />
                <div className='px-5 flex flex-col gap-0.5 pt-1'>
                  <p className='text-xs text-gray-500'>At least 8 characters</p>
                  <p className='text-xs text-gray-500'>
                    Mix of letters and numbers
                  </p>
                  <p className='text-xs text-gray-500'>
                    At least 1 special character
                  </p>
                  <p className='text-xs text-gray-500'>
                    At least 1 lowercase letter and 1 uppercase letter
                  </p>
                </div>
              </div>

              <button
                type='submit'
                className='text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center'
              >
                Register
              </button>
            </form>
          )}
        </div>
        <div className='mt-4 w-full flex flex-col'>
          <h2 className='self-center'>Or connect with:</h2>
          <form action='' className='my-4 flex flex-col gap-3'>
            <SignInButton provider={'google'} />
            <button className='px-4 py-3 text-center text-primary-navy  border border-gray-200 hover:bg-blue-50 hover:border-blue-300 rounded-lg flex gap-3 items-center justify-center w-full'>
              <Image
                src='https://authjs.dev/img/providers/facebook.svg'
                alt='Google logo'
                height='20'
                width='20'
              />
              <span className='font-semibold '>Continue with Facebook</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
