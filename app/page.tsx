import { LoginForm } from '@/components/LoginForm';

export default async function Home() {
  return (
    <main className="flex h-dvh flex-col items-center justify-center">
      <h2 className="text-xl font-semibold text-black mb-4">Blog </h2>

      <LoginForm />
    </main>
  );
}
