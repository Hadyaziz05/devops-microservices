import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../api/users';

function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signupUser(form.name, form.email, form.password);
      navigate('/products');
    } catch (err) {
      setError('Signup failed');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br /><br />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br /><br />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required /><br /><br />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default SignupPage;
