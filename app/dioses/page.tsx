import Link from "next/link";

export default function Dioses() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-6xl mx-auto">

        <Link href="/mundo">
          <button className="mb-10 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition">
            ← Volver al Mundo
          </button>
        </Link>

        <h1 className="text-5xl font-bold text-center mb-12">
          Los Dioses de Elyndor
        </h1>

        <div className="text-zinc-300 text-lg leading-relaxed space-y-8 mb-24">

          <p>
            Antes de las eras conocidas, antes de los reinos mortales y antes incluso
            del nacimiento de las primeras razas conscientes, Elyndor no era un mundo completo.
          </p>

          <p>
            En aquel origen remoto existía únicamente Elyndra, la conciencia primordial del mundo.
            No era una diosa en el sentido mortal de la palabra, sino la voluntad viva del propio equilibrio.
          </p>

          <p>
            Sin embargo, el equilibrio absoluto también significaba inmovilidad.
            Y Elyndra fragmentó partes de su propia esencia para dar origen a los Siete.
          </p>

          <p>
            Cada uno nació como manifestación de un principio fundamental de la existencia.
          </p>

          <p>
            La fractura entre los Siete creció durante siglos hasta convertirse
            en el evento más devastador de toda la historia conocida:
            La Caída de Elyndra.
          </p>

        </div>

        <h2 className="text-4xl font-bold text-center mb-12">
          Los Siete
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Link href="/dioses/elyndra">
            <div className="bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-8 border border-zinc-800 cursor-pointer">
              <h2 className="text-3xl font-semibold mb-3">
                Elyndra
              </h2>

              <p className="text-zinc-400">
                La conciencia primordial y origen de los Siete.
              </p>
            </div>
          </Link>

          <Link href="/dioses/vaelkor">
            <div className="bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-8 border border-zinc-800 cursor-pointer">
              <h2 className="text-3xl font-semibold mb-3">
                Vaelkor
              </h2>

              <p className="text-zinc-400">
                Dios de la guerra y la destrucción.
              </p>
            </div>
          </Link>

          <Link href="/dioses/kaelion">
            <div className="bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-8 border border-zinc-800 cursor-pointer">
              <h2 className="text-3xl font-semibold mb-3">
                Kaelion
              </h2>

              <p className="text-zinc-400">
                Guardián del destino y el orden absoluto.
              </p>
            </div>
          </Link>

          <Link href="/dioses/tharos">
            <div className="bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-8 border border-zinc-800 cursor-pointer">
              <h2 className="text-3xl font-semibold mb-3">
                Tharos
              </h2>

              <p className="text-zinc-400">
                Portador del fuego primordial.
              </p>
            </div>
          </Link>

          <Link href="/dioses/nysera">
            <div className="bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-8 border border-zinc-800 cursor-pointer">
              <h2 className="text-3xl font-semibold mb-3">
                Nysera
              </h2>

              <p className="text-zinc-400">
                Señora de la memoria y secretos olvidados.
              </p>
            </div>
          </Link>

          <Link href="/dioses/solmyr">
            <div className="bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-8 border border-zinc-800 cursor-pointer">
              <h2 className="text-3xl font-semibold mb-3">
                Solmyr
              </h2>

              <p className="text-zinc-400">
                Vigilante de los cielos eternos.
              </p>
            </div>
          </Link>

        </div>

        {/* LIRAEL CENTRADA */}
        <div className="flex justify-center mt-6">

          <div className="w-full md:w-1/2">
            <Link href="/dioses/lirael">
              <div className="bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-8 border border-zinc-800 cursor-pointer">

                <h2 className="text-3xl font-semibold mb-3">
                  Lirael
                </h2>

                <p className="text-zinc-400">
                  Guardiana del equilibrio natural.
                </p>

              </div>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}