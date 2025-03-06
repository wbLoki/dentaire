import React from 'react';
import GoogleReviews from '../GoogleReviews';
import { useLocale } from 'next-intl';
import { getLocale } from 'next-intl/server';

type Testimonial = { name: string; text: string; rating: number };

async function fetchReviews(locale: string) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/reviews?language=${locale}`;
  console.log(apiUrl);
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Error fetching reviews');
  }
  const data = await response.json();
  return data.reviews || [];
}

async function Reviews() {
  let reviews: any[] = [];
  let error: string | null = null;

  try {
    const locale = await getLocale();
    reviews = await fetchReviews(locale);
  } catch (err) {
    console.log(err);
    error = `${err}`;
  }

  return (
    <div className="flex flex-col w-full max-w-5xl bg-background rounded-2xl p-4 md:p-6 lg:px-14 text-xs gap-8 lg:gap-16">
      <span className="uppercase text-xs -ml-4">testimonial</span>
      <h2 className="text-3xl pl-3 -ml-4">Ce que pensent les gens de nous.</h2>

      <GoogleReviews
        reviews={reviews}
        error={error}
      />
    </div>
  );
}

export default Reviews;
