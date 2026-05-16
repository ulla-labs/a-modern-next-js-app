import { login, signup } from '@/app/auth/actions';

export default function LoginPage({ searchParams }: { searchParams: { message: string, error: string } }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <form className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground max-w-md">
        <label className="text-md" htmlFor="email">Email</label>
        <input className="rounded-md px-4 py-2 bg-inherit border mb-6" name="email" placeholder="you@example.com" required />
        <label className="text-md" htmlFor="password">Password</label>
        <input className="rounded-md px-4 py-2 bg-inherit border mb-6" type="password" name="password" placeholder="••••••••" required />
        <button formAction={login} className="bg-blue-600 rounded-md px-4 py-2 text-white mb-2">Sign In</button>
        <button formAction={signup} className="border border-blue-600 rounded-md px-4 py-2 text-blue-600 mb-2">Sign Up</button>
        {searchParams?.message && <p className="mt-4 p-4 bg-gray-100 text-center">{searchParams.message}</p>}
        {searchParams?.error && <p className="mt-4 p-4 bg-red-100 text-red-700 text-center">{searchParams.error}</p>}
      </form>
    </div>
  );
}