function Content() {
  return (
    <div className='py-12  flex flex-col gap-3  md:max-w-6xl lg:mx-auto items-center '>
      <h1 className='text-5xl font-semibold text-primary-darkGray leading-tight text-center px-3'>
        Why HomeFinder Stands Out
      </h1>
      <p className='text-xl text-gray-500 px-2 text-center'>
        Our platform has successfully connected thousands of buyers with their
        dream homes. See why Home Quest is trusted by so many.
      </p>
      <div className='my-5 border border-gray-200 rounded-lg boxShadow flex flex-col md:flex-row w-full items-center divide-y-2 divide-gray-200 md:divide-y-0 md:divide-x-2 '>
        <div className='flex flex-col items-center w-full py-4 '>
          <h1 className='text-3xl font-semibold text-primary-darkGray'>
            5,000
          </h1>
          <p className='text-gray-500'>Happy Clients</p>
        </div>
        <div className='flex flex-col items-center w-full py-4'>
          <h1 className='text-3xl font-semibold  text-primary-darkGray'>300</h1>
          <p className='text-gray-500'>Agents Available</p>
        </div>
        <div className='flex flex-col items-center w-full py-4'>
          <h1 className='text-3xl font-semibold  text-primary-darkGray'>
            10,000
          </h1>
          <p className='text-gray-500'>Listings Added</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
