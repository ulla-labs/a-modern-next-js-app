# Next.js + Supabase Starter

This is a modern full-stack starter template using Next.js 14 (App Router), Supabase for authentication and database, Tailwind CSS for styling, and TypeScript.

## Setup Instructions

1.  **Clone the repository**
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Environment Variables:**
    - Copy `.env.example` to `.env.local`.
    - Fill in `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` from your Supabase Project Settings.
4.  **Run the development server:**
    ```bash
    npm run dev
    ```

## Features
- ✅ SSR Support with `@supabase/ssr`
- ✅ Server Actions for Authentication
- ✅ Protected Routes via Middleware
- ✅ Tailwind CSS Pre-configured
- ✅ TypeScript Support