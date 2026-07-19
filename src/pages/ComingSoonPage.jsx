import logo from '../assets/logo.svg';
import heroMobile from '../assets/hero-mobile.jpg';
import iconArrow from '../assets/icon-arrow.svg';
import { useState } from 'react';

function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    if (trimmedEmail === '') {
      setError('Please provide a valid email');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError('Please provide a valid email');
      return;
    }
    console.log('Email submitted:', trimmedEmail);
    setEmail('');
    setError('');
  };

  return (
    <main className="flex flex-col">
      <header className="m-card-400">
        <img src={logo} alt="Base apparel logo" className="w-[101px]" />
      </header>

      <section
        aria-label="Coming soon announcement"
        className="flex flex-col gap-card-800"
      >
        <picture>
          <img src={heroMobile} alt="Hero image for mobile devices" />
        </picture>
        <div className="mx-8 text-center">
          <h1 className="mb-card-200 text-preset-light-2 text-pink-400">
            We're{' '}
            <span className="text-preset-semibold-2 text-gray-900">
              coming soon
            </span>
          </h1>
          <p className="mb-card-400 text-preset-regular-4 text-pink-400">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form
            onSubmit={handleSubmit}
            className="relative"
            noValidate
            autoComplete="off"
          >
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              placeholder="Email Address"
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={Boolean(error)}
              aria-describedby="email-error"
              className={`mb-card-100 h-12 w-full rounded-[28px] border px-card-300 py-card-100 pr-24 text-pink-400/95 focus:outline-2 focus:outline-offset-2 focus:outline-pink-400 ${error ? 'border-red-400' : 'border-pink-400 '}`}
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="absolute top-0 right-0 flex h-12 w-[64px] items-center justify-center rounded-[28px] bg-linear-135 from-gradient-start-1 to-gradient-end-1 shadow-[0_15px_20px_0_rgba(198,110,110,0.25)] focus:outline-2 focus:outline-offset-2 focus:outline-pink-400"
            >
              <img src={iconArrow} alt="" className="h-5 w-3" />
            </button>
            <p
              role="alert"
              id="email-error"
              className="justify-self-start pl-card-300 text-preset-regular-5 text-red-400"
            >
              {error}
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ComingSoonPage;
