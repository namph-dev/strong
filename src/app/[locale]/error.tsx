"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="absolute inset-0 z-100 flex h-screen w-full flex-col items-center justify-center bg-white p-10">
      <h2 className="text-center">Something went wrong!</h2>
      <h3 className="text-center">An error occurred: {error?.message}</h3>
      <div className="pt-8">
        <a href="/" className="rounded-lg bg-primary px-5 py-3 text-white">
          Return Home Page
        </a>
      </div>
    </div>
  );
}
