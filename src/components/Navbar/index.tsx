'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../Button';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

export const Navbar = () => {
  const router = useRouter();
  const { user, isLoading, error } = useUser();
  return (
    <nav className="h-16 w-full bg-blue-900 px-5 md:px-40 text-white flex items-center justify-between">
      <Link href="/">
        <span className="text-xl font-davidLibre font-medium">
          Booking.com{' '}
        </span>
      </Link>
      <div className="flex flex-row gap-4">
        {!user && !isLoading && !error && (
          <>
            {' '}
            <Button onClick={() => router.push('/api/auth/login')}>
              Register{' '}
            </Button>
            <Button>Sign In</Button>
          </>
        )}
        {user && (
          <Button onClick={() => router.push('/api/auth/logout')}>
            Logout
          </Button>
        )}
      </div>
    </nav>
  );
};
