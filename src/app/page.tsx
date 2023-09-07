import { UserButton, currentUser } from "@clerk/nextjs";
import { serverClient } from "./_trpc/serverClient";
import Link from "next/link";

export default async function Home() {
  const user = await currentUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">next saas starter</h1>

      <div>
        {user ? (
          <UserButton />
        ) : (
          <div className="text-center">
            Please <Link href="/sign-in">sign in</Link>
          </div>
        )}
      </div>
    </main>
  );
}
