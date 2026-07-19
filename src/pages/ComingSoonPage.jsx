import logo from '../assets/logo.svg';
import heroMobile from '../assets/hero-mobile.jpg';
import heroTablet from '../assets/hero-tablet.jpg';
import heroDesktop from '../assets/hero-desktop.jpg';
import iconArrow from '../assets/icon-arrow.svg';
import iconError from '../assets/icon-error.svg';
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
      <header className="m-card-400 self-start md:ml-card-1000">
        <img src={logo} alt="Base apparel logo" className="w-[101px]" />
      </header>

      <picture>
        <source media="(min-width: 1024px)" srcSet={heroDesktop} />
        <source media="(min-width: 768px)" srcSet={heroTablet} />
        <img
          src={heroMobile}
          alt="Hero image for mobile devices"
          className="mb-card-800 w-full"
        />
      </picture>

      <section
        aria-label="Coming soon announcement"
        className="flex flex-col items-center gap-card-800"
      >
        <div className="mx-8 max-w-[312px] text-center md:max-w-[445px]">
          <h1 className="mb-card-200 text-preset-light-2 text-pink-400 md:mb-card-400 md:text-preset-light-1">
            We're{' '}
            <span className="text-preset-semibold-2 text-gray-900 md:text-preset-semibold-1">
              coming soon
            </span>
          </h1>
          <p className="mb-card-400 text-preset-regular-4 text-pink-400 md:text-preset-regular-3">
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
              className={`mb-card-100 h-12 w-full rounded-[28px] border px-card-300 py-card-100 pr-[102px] text-pink-400/95 focus:outline-2 focus:outline-offset-2 focus:outline-pink-400 ${error ? 'border-red-400' : 'border-pink-400 '}`}
            />
            <div className="absolute top-0 right-0 flex h-12 items-center gap-card-100">
              {error && <img src={iconError} alt="" className="h-6 w-6" />}
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-12 w-16 items-center justify-center rounded-[28px] bg-linear-135 from-gradient-start-1 to-gradient-end-1 shadow-[0_15px_20px_0_rgba(198,110,110,0.25)] focus:outline-2 focus:outline-offset-2 focus:outline-pink-400"
              >
                <img src={iconArrow} alt="" className="h-5 w-3" />
              </button>
            </div>
            <p
              role="alert"
              id="email-error"
              className="pl-card-300 text-left text-preset-regular-5 text-red-400"
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
