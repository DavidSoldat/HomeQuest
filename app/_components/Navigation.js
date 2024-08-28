import Link from "next/link";
import getSession from "../_lib/getSession";
import UserButton from "./UserButton";

export default async function Navigation() {
  const session = await getSession();
  const user = session?.user;

  return (
    <nav>
      <div className="mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex items-center">
              <Link
                className="text-primary-darkGray px-4 py-2 text-lg hover:text-blue-600"
                href="/buy"
              >
                Buy
              </Link>
              <Link
                className="text-primary-darkGray px-4 py-2 text-lg hover:text-blue-600"
                href="/rent"
              >
                Rent
              </Link>
              <Link
                className="text-primary-darkGray px-4 py-2 text-lg hover:text-blue-600"
                href="/sell"
              >
                Sell
              </Link>
              <Link
                className="text-primary-darkGray px-4 py-2 text-lg hover:text-blue-600"
                href="/agents"
              >
                Agents
              </Link>

              {user ? (
                <UserButton user={user} />
              ) : (
                <Link
                  className="rounded-lg bg-blue-700 px-4 py-2 text-lg text-white hover:bg-blue-800"
                  href="/signin"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
