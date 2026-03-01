import Home from '@/component/Home';
import React from 'react';

const Page = () => {
  return (
    <div>
      <Home/>
      // src/app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-indigo-600">
        Welcome to RankingPost Site
      </h1>
      <p className="mt-4 text-gray-500">
        Apni Raah edtech: Where dreams find a direction.
      </p>
      <button className="mt-6 px-6 py-2 bg-black text-white rounded-lg">
        Explore Blogs
      </button>
    </main>
  );
}
    </div>
  );
}

export default Page;
