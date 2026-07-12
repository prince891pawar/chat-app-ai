import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AxiosInstance from '../config/axios';
import { userContext } from '../context/UserContext.jsx';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  // Context
  const { setUser } = useContext(userContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await AxiosInstance.post('/users/login', formData);

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);

        // Save user in Context
        setUser(response.data.user);

        navigate('/');
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message || 'Something went wrong'
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-4 py-12 text-slate-100">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur">

        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Welcome Back
          </p>

          <h1 className="mt-2 text-3xl font-semibold">
            Login
          </h1>

          <p className="mt-3 text-sm text-slate-400">
            Login to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label htmlFor="email" className="mb-2 block text-sm">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3"
              placeholder="Enter Email"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm">
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3"
              placeholder="Enter Password"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-black hover:bg-cyan-400"
          >
            Login
          </button>

        </form>

        {message && (
          <p className="mt-4 text-center text-red-400">
            {message}
          </p>
        )}

        <p className="mt-6 text-center text-sm text-slate-400">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;