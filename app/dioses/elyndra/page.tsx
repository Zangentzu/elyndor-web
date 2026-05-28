import Link from "next/link";
import Image from "next/image";

export default function Elyndra() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">

        {/* Botón regreso */}
        <Link href="/dioses">
          <button className="mb-10 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition">
            ← Volver a los Dioses
          </button>
        </Link>

        {/* Título */}
        <h1 className="text-5xl font-bold text-center mb-3">
          Elyndra
        </h1>

        {/* SUBTÍTULO (asegurado visible en web) */}
        <p className="text-center text-zinc-400 text-lg mb-10">
          La Diosa Primordial — origen de la creación, el equilibrio y la verdad absoluta.
        </p>

        {/* IMAGEN (versión segura para Vercel) */}
        <div className="my-10 flex justify-center">
          <Image
            src="/dioses/elyndra.png"
            alt="Elyndra, Diosa Primordial"
            width={800}
            height={1000}
            className="rounded-2xl border border-zinc-800 shadow-lg"
            priority
            unoptimized
          />
        </div>

        {/* LORE */}
        <div className="text-zinc-300 text-lg leading-relaxed space-y-8">

          <p>
            Antes de las eras conocidas...
          </p>

          <p>
            En aquel origen remoto existía únicamente Elyndra...
          </p>

          {/* resto igual */}
        </div>

      </div>
    </div>
  );
}