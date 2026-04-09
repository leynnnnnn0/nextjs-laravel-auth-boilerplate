'use client';
 
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
 
export default function LoginPage() {
    const router = useRouter();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
 
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(''); setLoading(true);
 
        const form = new FormData(e.currentTarget);
 
        try {
            await api('/login', {
                method: 'POST',
                body: JSON.stringify({
                    email:    form.get('email'),
                    password: form.get('password'),
                }),
            });
            router.push('/dashboard');
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : 'Login failed');
        } finally {
            setLoading(false);
        }
    }
 
    return <><h1>Login</h1></>;
}
