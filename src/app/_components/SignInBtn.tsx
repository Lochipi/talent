import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

const SignInBtn = async () => {
  const session = await getServerAuthSession();
  return (
    <div>
      <Link
        href={session ? "/api/auth/signout" : "/api/auth/signin"}
        className="rounded-3xl border-2 border-green-400 bg-white px-4 py-2 font-medium text-green-400"
      >
        {session ? "Sign out" : "Sign in"}
      </Link>
    </div>
  );
};

export default SignInBtn;


