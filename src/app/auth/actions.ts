import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  'use server';
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) redirect('/login?error=Could not authenticate user');
  
  redirect('/');
}

export async function signup(formData: FormData) {
  'use server';
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signUp({ email, password });

  if (error) redirect('/login?error=Could not create user');

  redirect('/login?message=Check your email to confirm registration');
}

export async function signOut() {
  'use server';
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect('/login');
}