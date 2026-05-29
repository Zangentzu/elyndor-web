import Link from "next/link";
import Image from "next/image";

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

        {/* 🔥 TRAICIÓN */}
        <div className="text-zinc-300 text-lg leading-relaxed space-y-8 mb-24">

          <h2 className="text-4xl font-bold text-center text-white mb-10">
            LA TRAICIÓN
          </h2>

          <p>
            Hubo un tiempo en que los Siete gobernaban Elyndor como fuerzas absolutas del equilibrio primordial. No eran simples dioses: eran los pilares sobre los que descansaba la existencia misma. Y entre ellos, Elyndra era el centro. No como reina. No como conquistadora. Sino como el vínculo que mantenía unido el orden de la creación.
          </p>

          <p>
            Pero incluso entre entidades eternas, el miedo puede nacer. El miedo al equilibrio, a la verdad absoluta. El miedo a un poder que jamás podría ser controlado. Y así, cuatro de los Siete se alzaron contra ella.
          </p>

          <p>
            Vaelkor, Señor del Vacío. Tharos, Dios de la Guerra Eterna. Nysera, Portadora de la Corrupción. Y Kaelion, Guardián del Destino.
          </p>

          <p>
            Kaelion fue quien lideró la traición. No porque fuera el más fuerte. Sino porque fue el único capaz de comprender lo que Elyndra realmente representaba. Mientras los otros veían una diosa, Kaelion vio una verdad imposible de contener. Y decidió que debía desaparecer.
          </p>

          <p>
            El plan no consistía en matar a Elyndra. Ni siquiera los dioses podían destruir completamente a una entidad primordial. Debían hacer algo peor. Aislarla, fragmentarla. Dispersar su esencia fuera del alcance del tiempo, la memoria y la existencia misma.
          </p>

          <p>
            Cada traidor cumplió un propósito dentro de la caída. Vaelkor utilizó el Vacío para borrar rastros de su existencia. Tharos destruyó su forma divina mediante guerra celestial. Nysera contaminó fragmentos de su esencia para impedir que pudiera reunificarse intacta. Y Kaelion alteró el tejido del destino para asegurar que jamás pudiera regresar.
          </p>

          <p>
            Sin embargo, no todos los Siete participaron en la traición. Solmyr, Guardián del Tiempo, observó la caída y decidió no intervenir. No por crueldad ni por cobardía. Sino porque comprendió que alterar aquel momento rompería la estructura completa del tiempo y arrastraría a Elyndor hacia un colapso absoluto.
          </p>

          <p>
            Y entonces estuvo Lirael. Diosa de la Luz, los Juramentos y la Esperanza. Lirael desafió el destino en secreto. Mientras los traidores fragmentaban a Elyndra, ella logró rescatar un fragmento puro de su alma antes de que desapareciera completamente.
          </p>

          <p>
            Lo ocultó más allá del alcance de los dioses traidores. Más allá de la corrupción. Más allá del destino mismo. Y ese fragmento renacería siglos después como Arya. La caída de Elyndra no terminó con su muerte. Porque Elyndra nunca murió realmente. Fue fragmentada. Su conciencia fue destruida, su historia fue borrada. Su nombre verdadero desapareció del mundo.
          </p>

          <p>
            El universo fue reescrito. Civilizaciones enteras olvidaron su existencia. Los registros desaparecieron. Los templos fueron consumidos por el tiempo. Y aquello que una vez fue el corazón de la creación terminó convertido primero en mito y luego en nada. Pero el destino jamás logró destruirlo todo. Porque incluso fragmentada Elyndra dejó ecos. Y algunos ecos se niegan a morir.
          </p>

        </div>

        <h2 className="text-4xl font-bold text-center mb-12">
          Los Siete
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Link href="/dioses/elyndra">
            <div className="bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-8 border border-zinc-800 cursor-pointer h-[170px] flex items-center justify-between">

              <div className="pr-6">
                <h2 className="text-3xl font-semibold mb-3">
                  Elyndra
                </h2>

                <p className="text-zinc-400">
                  La conciencia primordial y origen de los Siete.
                </p>
              </div>

              <Image
                src="/dioses/runa-elyndra.png"
                alt="Runa de Elyndra"
                width={95}
                height={95}
                className="opacity-90 flex-shrink-0 object-contain"
              />

            </div>
          </Link>

          <Link href="/dioses/vaelkor">
            <div className="bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-8 border border-zinc-800 cursor-pointer h-[170px] flex items-center justify-between">

              <div className="pr-6">
                <h2 className="text-3xl font-semibold mb-3">
                  Vaelkor
                </h2>

                <p className="text-zinc-400">
                  Dios de la guerra y la destrucción.
                </p>
              </div>

              <Image
                src="/dioses/runa-vaelkor.png"
                alt="Runa de Vaelkor"
                width={95}
                height={95}
                className="opacity-90 flex-shrink-0 object-contain"
              />

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