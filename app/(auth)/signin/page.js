import SignInForm from "@/app/_components/SignInForm";
import SignInGithub from "@/app/_components/SignInGithub";
import SignInGoogle from "@/app/_components/SignInGoogle";
import getSession from "@/app/_lib/getSession";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Login",
};

export default async function SignIn() {
  const session = await getSession();
  const user = session?.user;
  if (user) redirect("/");

  return (
    <div className="flex flex-col">
      <SignInForm />
      <div className="flex w-full flex-col border-t pt-4">
        <h2 className="self-center">Or connect with:</h2>
        <div className="my-4 flex flex-col gap-3">
          <SignInGoogle />
          <SignInGithub />
        </div>
      </div>
    </div>
  );
}
