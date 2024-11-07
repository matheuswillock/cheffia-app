import React, { useState } from 'react';
import { useRouter } from 'next/router';
import "../styles/login.css";

const Login = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "usuario@exemplo.com" && password === "123456") {
      router.push("/");
    } else {
      alert("Credenciais incorretas, tente novamente.");
    }
  };

  return (
    <div className='login-container'>
      <h1 className='login-title'>Login</h1>
      <form onSubmit={handleSubmit} className='login-form'>
        <label htmlFor="email" className='login-label'>Email</label>
        <input
          type='email'
          id='email'
          className='login-input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password" className='login-label'>Senha</label>
        <input
          type='password'
          id='password'
          className='login-input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type='submit' className='login-button'>Entrar</button>
      </form>
    </div>
  );
};

export default Login; 
