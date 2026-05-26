import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      
      <div className="text-center space-y-6 px-6">

        <h1 className="text-5xl font-bold tracking-wide">
          Elyndor
        </h1>

        <p className="text-zinc-400 text-lg max-w-md mx-auto">
          Un mundo olvidado está despertando… y tú acabas de entrar en él.
        </p>

        <Link href="/mundo">
          <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition">
            Entrar al mundo
          </button>
        </Link>

      </div>
    </div>
  );
}