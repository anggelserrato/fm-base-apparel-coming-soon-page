import logo from '../assets/logo.svg';
import heroMobile from '../assets/hero-mobile.jpg';
import iconArrow from '../assets/icon-arrow.svg';
import { useState } from 'react';

function ComingSoonPage() {
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <main className="flex flex-col">
      <header className="m-card-400">
        <img src={logo} alt="Base apparel logo" className="w-[101px]" />
      </header>

      <article className="flex flex-col gap-card-800">
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
          <form action="" className="relative">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              required
              aria-required="true"
              aria-invalid="false"
              aria-describedby="email-error"
              className="h-12 w-full rounded-[28px] border border-pink-400 px-card-300 py-card-100 pr-24 text-pink-400/95"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              onClick={handleSubmit}
              className="absolute top-0 right-0 flex h-12 w-[64px] items-center justify-center rounded-[28px] bg-linear-135 from-gradient-start-1 to-gradient-end-1 shadow-[0_15px_20px_0_rgba(198,110,110,0.25)]"
            >
              <img src={iconArrow} alt="" className="h-3 w-3" />
            </button>
          </form>
        </div>

        {error && (
          <p
            id="form-message"
            role="alert"
            className={`pl-card-300 text-preset-regular-4 ${
              error ? 'text-red-400' : 'text-gray-900'
            }`}
          >
            {error}
          </p>
        )}
      </article>
    </main>
  );
}

export default ComingSoonPage;
