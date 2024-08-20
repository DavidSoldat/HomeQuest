export default function Settings() {
  return (
    <main className='w-full h-screen md:max-w-6xl lg:mx-auto md:px-8 px-4 py-4  flex flex-col'>
      <h1 className='text-2xl my-10 font-semibold'>Settings</h1>
      <div className='md:w-2/5 w-full'>
        <form className='w-full  mx-auto' action=''>
          <div className='mb-5'>
            <label
              htmlFor='name'
              className='block mb-2 text-md font-medium text-gray-900'
            >
              Name
            </label>
            <input
              type='name'
              id='name'
              className='bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg   block w-full p-2.5'
              placeholder='Enter name'
              required
            />
            <p className='text-gray-400 text-sm mt-2'>Your public username</p>
          </div>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm   px-5 py-2.5 text-center w-2/5'
          >
            Change
          </button>
        </form>
      </div>
    </main>
  );
}
