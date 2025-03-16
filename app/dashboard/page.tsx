import { Button } from '@/components/ui/button';
import { signOut } from '../utils/auth';
import verifyUserSession from '../utils/authVerify';

export default async function Dashboard() {
  const session = await verifyUserSession();
  return (
    <div>
      <p>Hello from the Dashboard Route</p>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <Button type="submit">Logout</Button>
      </form>
    </div>
  );
}
