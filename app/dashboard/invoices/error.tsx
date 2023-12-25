'use client';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className='flex h-full flex-col items-center justify-center'>
      <h2 className='text-center'>{error.message} !</h2>

      <button
        className='mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400'
        // Attempt to recover by trying to re-render the invoices route
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
