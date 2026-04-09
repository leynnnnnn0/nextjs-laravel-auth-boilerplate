'use client';
 
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
 
export default function RegisterPage() {
    const router = useRouter();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
 
   async function handleRegister(e: FormEvent<HTMLFormElement>) {
     e.preventDefault();
     const form = new FormData(e.currentTarget);

     await api("/register", {
       method: "POST",
       body: JSON.stringify({
         name: form.get("name"),
         email: form.get("email"),
         password: form.get("password"),
         password_confirmation: form.get("password_confirmation"),
       }),
     });

     router.push("/dashboard");
   }

 
    return <><h1>Register</h1></>;
}
