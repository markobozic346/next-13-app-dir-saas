import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">next saas starter</h1>

      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
