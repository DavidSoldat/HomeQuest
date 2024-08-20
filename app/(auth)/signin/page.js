import SignInGithub from '@/app/_components/SignInGithub';
import SignInGoogle from '@/app/_components/SignInGoogle';

export const metadata = {
  title: 'Login',
};

export default function SignIn() {
  return (
    <>
      <form className='w-full  mx-auto' action=''>
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
      <div className='mt-4 w-full flex flex-col'>
        <h2 className='self-center'>Or connect with:</h2>
        <div className='my-4 flex flex-col gap-3'>
          <SignInGoogle />
          <SignInGithub />
        </div>
      </div>
    </>
  );
}
