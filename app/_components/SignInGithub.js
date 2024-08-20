import Image from 'next/image';
import { signInGithub } from '../_lib/actions';

function SignInGithub() {
  return (
    <form action={signInGithub}>
      <button className='px-4 py-3 text-center text-primary-navy  border border-gray-200 hover:bg-blue-50 hover:border-blue-300 rounded-lg flex gap-3 items-center  justify-center w-full'>
        <Image
          src={`https://authjs.dev/img/providers/github.svg`}
          alt={`Github logo`}
          height='20'
          width='20'
        />
        <span className='font-semibold '>Continue with GitHub</span>
      </button>
    </form>
  );
}

export default SignInGithub;
