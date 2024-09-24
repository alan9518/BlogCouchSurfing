'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface FormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (result?.error) {
        setError(result.error);
      }

      if (result?.ok) {
        router.push('/feed');
      }
    } catch {
      setError('error signin in');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-start my-4">
        <label htmlFor="emailField">Email:</label>
        <input
          className="p-2 border border-gray-200"
          type="email"
          id="email"
          name="emailField"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col justify-start my-4">
        <label htmlFor="passwordField">Password:</label>
        <input
          className="p-2 border border-gray-200"
          type="password"
          id="password"
          name="passwordField"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="p-2 bg-orangeAccent w-full text-white font-semibold"
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};
