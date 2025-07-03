import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      console.log(data);

      if (data.status === 'error') {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');

    } catch (error) {
      console.error('Error during signup:', error);
      setError(error.message || 'Something went wrong. Please try again later.');
      setLoading(false);
    } 
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-md mt-10">
    <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h1>
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
          placeholder="Your username"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
          placeholder="you@example.com"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
          placeholder="••••••••"
          onChange={handleChange}
        />
      </div>

      <button
        disabled={loading}
        type="submit"
        className="w-full bg-slate-700 hover:bg-slate-800 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Signing Up...' : 'Sign Up'}
      </button>
    </form>

    <div className="mt-4 text-center">
      <p className="text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-slate-700 hover:underline font-medium">
          Sign In
        </Link>
      </p>
    </div>
  </div>
  )
}

export default SignUp