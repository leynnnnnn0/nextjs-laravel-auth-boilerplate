'use client';

import AppLogo from "@/components/ui/AppLogo";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const form = new FormData(e.currentTarget);

    try {
      await api("/api/register", {
        method: "POST",
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          password: form.get("password"),
          password_confirmation: form.get("password_confirmation"),
        }),
      });

      router.push("/dashboard");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen w-screen dark:bg-[#F1F1F1] flex items-center justify-center">
      <div className="h-fit w-110 rounded-lg shadow-lg dark:bg-white space-y-4 p-5 flex justify-center items-center flex-col">
        <AppLogo />
        <div className="text-center">
          <h3 className="text-xl font-bold">Create an account</h3>
          <h6 className="text-black/40 text-sm">
            Fill in the details below to get started
          </h6>
        </div>

        <form onSubmit={handleRegister} className="w-full space-y-4">
          <div className="space-y-2 flex flex-col items-start w-full">
            <Label>Name</Label>
            <Input name="name" type="text" placeholder="Juan dela Cruz" required />
          </div>

          <div className="space-y-2 flex flex-col items-start w-full">
            <Label>Email</Label>
            <Input name="email" type="email" placeholder="email@example.com" required />
          </div>

          <div className="space-y-2 flex flex-col items-start w-full">
            <Label>Password</Label>
            <Input name="password" type="password" placeholder="••••••••" required />
          </div>

          <div className="space-y-2 flex flex-col items-start w-full">
            <Label>Confirm Password</Label>
            <Input name="password_confirmation" type="password" placeholder="••••••••" required />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </Button>
        </form>

        <p className="text-sm text-black/40">
          Already have an account?{" "}
          <Link href="/login" className="text-black font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}