import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-7xl font-bold">404</h1>

        <p className="mt-4 text-gray-600">
          The page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-black px-8 py-4 text-white"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}