'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { trpc } from '@/app/_trpc/client';
import { deleteCookie } from '../../lib/cookie';

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

  // Use the mutation for login
  const loginMutation = trpc.auth.login.useMutation({
    onSuccess: (data) => {
      // Delete the existing userId cookie if it exists
      deleteCookie('userId');

      // Set the new cookie from the response
      if (data.cookieHeader) {
        document.cookie = data.cookieHeader;
      }
      router.push(`/feed?userId=${data.userId}`);
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error('Login failed:', error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Call the login mutation
    loginMutation.mutate(formData);
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
        disabled={loginMutation.isLoading}
        className="p-2 bg-orangeAccent w-full text-white font-semibold"
      >
        {loginMutation.isLoading ? 'Logging in...' : 'Login'}
      </button>

      {loginMutation.error && (
        <p style={{ color: 'red' }}>{loginMutation.error.message}</p>
      )}
    </form>
  );
};
