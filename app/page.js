import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">
            Welcome to the Quiz App
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            Test your knowledge with our interactive quizzes!
          </p>
          <Link href="/questions">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Start Quiz
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
