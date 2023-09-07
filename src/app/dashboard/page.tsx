import { serverClient } from "../_trpc/serverClient";

export default async function Dashboard() {
  const trpcServer = await serverClient();

  const data = await trpcServer.demo();
  return <div>{data?.message}</div>;
}
