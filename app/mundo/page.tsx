import Link from "next/link";

export default function Mundo() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* TITULO */}
        <h1 className="text-6xl font-bold text-center mb-6">
          Mundo de Elyndor
        </h1>

        <p className="text-zinc-400 text-center text-lg mb-16 max-w-2xl mx-auto">
          Explora los dioses, razas, magia, regiones y secretos
          del mundo de Elyndor.
        </p>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Link href="/historia">
            <div className="p-8 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition cursor-pointer">
              <h2 className="text-3xl font-bold mb-2">Historia</h2>
              <p className="text-zinc-400">
                Descubre el origen y la caída de Elyndor.
              </p>
            </div>
          </Link>

          <Link href="/dioses">
            <div className="p-8 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition cursor-pointer">
              <h2 className="text-3xl font-bold mb-2">Dioses</h2>
              <p className="text-zinc-400">
                Conoce a Elyndra y a los Siete.
              </p>
            </div>
          </Link>

          <div className="p-8 rounded-2xl bg-zinc-900">
            <h2 className="text-3xl font-bold mb-2">Razas</h2>
            <p className="text-zinc-400">
              Próximamente.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900">
            <h2 className="text-3xl font-bold mb-2">Magia</h2>
            <p className="text-zinc-400">
              Próximamente.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900">
            <h2 className="text-3xl font-bold mb-2">Geografía</h2>
            <p className="text-zinc-400">
              Próximamente.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900">
            <h2 className="text-3xl font-bold mb-2">Bestiario</h2>
            <p className="text-zinc-400">
              Próximamente.
            </p>
          </div>

        </div>

        {/* MENU INFERIOR */}
        <div className="flex flex-wrap justify-center gap-4 mt-20">

          <button className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition">
            FAQ
          </button>

          <button className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition">
            Comunidad
          </button>

          <button className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition">
            Fan Art
          </button>

          <button className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition">
            Crónicas de la Comunidad
          </button>

          <button className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition">
            Soporte
          </button>

          <button className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition">
            Apoya Elyndor
          </button>

        </div>

      </div>
    </div>
  );
}