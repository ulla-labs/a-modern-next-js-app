import { createClient } from '@/utils/supabase/server';
import { signOut } from './auth/actions';

export default async function Index() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Supabase + Next.js</h1>
        {user ? (
          <div className="flex flex-col gap-4">
            <p>Logged in as: <strong>{user.email}</strong></p>
            <form action={signOut}>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
            </form>
          </div>
        ) : (
          <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded">Go to Login</a>
        )}
      </div>
    </main>
  );
}