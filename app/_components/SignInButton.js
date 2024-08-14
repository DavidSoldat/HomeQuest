import Image from 'next/image';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function SignInButton({ provider }) {
  const capitalizedProvider = capitalize(provider);
  return (
    <form action=''>
      <button className='px-4 py-3 text-center text-primary-navy  border border-gray-200 hover:bg-blue-50 hover:border-blue-300 rounded-lg flex gap-3 items-center  justify-center w-full'>
        <Image
          src={`https://authjs.dev/img/providers/${provider}.svg`}
          alt={`${capitalizedProvider} logo`}
          height='20'
          width='20'
        />
        <span className='font-semibold '>
          Continue with {capitalizedProvider}
        </span>
      </button>
    </form>
  );
}

export default SignInButton;
