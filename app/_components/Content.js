function Content() {
  return (
    <div className="flex flex-col items-center px-4 py-12 md:max-w-6xl lg:mx-auto">
      <h1 className="text-primary-darkGray px-3 text-center text-5xl font-semibold leading-tight">
        Why HomeFinder Stands Out
      </h1>
      <p className="px-2 text-center text-xl text-gray-500">
        Our platform has successfully connected thousands of buyers with their
        dream homes. See why Home Quest is trusted by so many.
      </p>
      <div className="boxShadow my-5 flex w-full flex-col items-center divide-y-2 divide-gray-200 rounded-lg border border-gray-200 md:flex-row md:divide-x-2 md:divide-y-0">
        <div className="flex w-full flex-col items-center py-4">
          <h1 className="text-primary-darkGray text-3xl font-semibold">
            5,000
          </h1>
          <p className="text-gray-500">Happy Clients</p>
        </div>
        <div className="flex w-full flex-col items-center py-4">
          <h1 className="text-primary-darkGray text-3xl font-semibold">300</h1>
          <p className="text-gray-500">Agents Available</p>
        </div>
        <div className="flex w-full flex-col items-center py-4">
          <h1 className="text-primary-darkGray text-3xl font-semibold">
            10,000
          </h1>
          <p className="text-gray-500">Listings Added</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
