import Link from "next/link";

export default function Mundo() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-4">
          Elyndor
        </h1>

        <p className="text-center text-zinc-400 text-lg mb-16">
          Explora los secretos, razas, dioses y fuerzas que moldean el mundo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Link href="/historia">
            <div className="bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-8 cursor-pointer border border-zinc-800">
              <h2 className="text-2xl font-semibold mb-3">
                Historia
              </h2>

              <p className="text-zinc-400">
                Descubre los eventos, secretos y guerras que marcaron Elyndor.
              </p>
            </div>
          </Link>

          <Link href="/personajes">
            <div className="bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-8 cursor-pointer border border-zinc-800">
              <h2 className="text-2xl font-semibold mb-3">
                Personajes
              </h2>

              <p className="text-zinc-400">
                Conoce a las figuras que alterarán el destino del mundo.
              </p>
            </div>
          </Link>

          <Link href="/razas">
            <div className="bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-8 cursor-pointer border border-zinc-800">
              <h2 className="text-2xl font-semibold mb-3">
                Razas
              </h2>

              <p className="text-zinc-400">
                Explora las distintas civilizaciones y especies de Elyndor.
              </p>
            </div>
          </Link>

          <Link href="/dioses">
            <div className="bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-8 cursor-pointer border border-zinc-800">
              <h2 className="text-2xl font-semibold mb-3">
                Dioses
              </h2>

              <p className="text-zinc-400">
                Entidades antiguas que observan y manipulan el destino.
              </p>
            </div>
          </Link>

          <Link href="/geografia">
            <div className="bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-8 cursor-pointer border border-zinc-800">
              <h2 className="text-2xl font-semibold mb-3">
                Geografía
              </h2>

              <p className="text-zinc-400">
                Reinos, regiones, ciudades perdidas y territorios prohibidos.
              </p>
            </div>
          </Link>

          <Link href="/magia">
            <div className="bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-8 cursor-pointer border border-zinc-800">
              <h2 className="text-2xl font-semibold mb-3">
                Sistema de Magia
              </h2>

              <p className="text-zinc-400">
                Descubre cómo funcionan las fuerzas y poderes de Elyndor.
              </p>
            </div>
          </Link>

          <Link href="/bestiario">
            <div className="bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-8 cursor-pointer border border-zinc-800">
              <h2 className="text-2xl font-semibold mb-3">
                Bestiario
              </h2>

              <p className="text-zinc-400">
                Criaturas, monstruos y entidades que habitan Elyndor.
              </p>
            </div>
          </Link>

          <Link href="/reliquias">
            <div className="bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-8 cursor-pointer border border-zinc-800">
              <h2 className="text-2xl font-semibold mb-3">
                Reliquias
              </h2>

              <p className="text-zinc-400">
                Artefactos, armas legendarias y objetos prohibidos.
              </p>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}