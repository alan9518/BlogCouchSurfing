'use client';

export const getCookie = (name: string) => {
  if (typeof document === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop()!.split(';').shift() || null; // Using '!' for non-null assertion
  }
  return null;
};

export const deleteCookie = (name: string) => {
  if (typeof document !== 'undefined')
    document.cookie = `${name}=; Max-Age=0; Path=/;`;
};
