import { getSession } from '@auth0/nextjs-auth0';

export default async function Home() {
  const { user } = (await getSession()) ?? {};
  return (
    <div>
      Hello {user?.name} {user?.email}
    </div>
  );
}
