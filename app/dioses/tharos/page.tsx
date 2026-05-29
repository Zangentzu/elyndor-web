import Link from "next/link";
import Image from "next/image";

export default function Tharos() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-4xl mx-auto">

        {/* BOTÓN */}
        <Link href="/dioses">
          <button className="mb-10 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition">
            ← Volver a Dioses
          </button>
        </Link>

        {/* TÍTULO */}
        <h1 className="text-5xl font-bold text-center mb-4">
          Tharos
        </h1>

        {/* SUBTÍTULO */}
        <p className="text-center text-zinc-400 text-xl mb-14">
          Dios de la Guerra — la conquista, la violencia y la voluntad absoluta.
        </p>

        {/* IMAGEN */}
        <div className="my-10 flex justify-center">
          <Image
            src="/dioses/tharos.png"
            alt="Tharos"
            width={800}
            height={1000}
            className="rounded-2xl border border-zinc-800 shadow-lg"
            priority
          />
        </div>

        {/* LORE */}
        <div className="text-zinc-300 text-lg leading-relaxed space-y-8">

          <p>
            Tharos es la encarnación absoluta de la guerra, la conquista y la destrucción nacida del conflicto.
            Entre los Siete, fue quien más admiró la fuerza bruta de los mortales,
            no por compasión, sino porque veía en la violencia la forma más honesta de existencia.
          </p>

          <p>
            Para Tharos, la paz jamás fue un ideal.
            La paz era estancamiento, debilidad.
            Una mentira temporal entre guerras inevitables.
          </p>

          <p>
            Él creía que solo el conflicto podía revelar la verdadera naturaleza de un ser.
            Los reinos caían, los héroes morían y las civilizaciones ardían,
            pero de las guerras surgían conquistadores, leyendas y voluntad inquebrantable.
            Para Tharos, eso era belleza.
          </p>

          <p>
            Durante la Traición, fue quien destrozó la forma divina de Elyndra mediante fuerza absoluta.
            Mientras Vaelkor intentaba borrar su existencia y Nysera corrompía su esencia,
            Tharos convirtió la guerra misma en un arma contra la Diosa Primordial.
          </p>

          <p>
            Los cielos ardieron, continentes temblaron y ejércitos enteros fueron consumidos
            en una batalla que ninguna mente mortal podría comprender completamente.
          </p>

          <p>
            A diferencia de otros dioses caídos, Tharos nunca fue sellado por completo.
            Parte de su esencia permanece activa dentro de Elyndor a través de avatares mortales:
            guerreros, conquistadores y campeones cuya presencia altera el curso de la historia.
          </p>

          <p>
            Son individuos aparentemente imposibles de derrotar,
            capaces de sobrevivir heridas mortales,
            levantar imperios o convertir naciones enteras en máquinas de guerra.
          </p>

          <p>
            Muchos ni siquiera saben que son tocados por Tharos.
            Solo sienten la necesidad constante de conquistar.
          </p>

          <p>
            Donde su influencia crece, la guerra deja de ser un evento
            y se convierte en estado natural.
            Imperios expansionistas surgen sin descanso.
            Generaciones enteras nacen dentro de conflictos interminables.
          </p>

          <p>
            Los campos de batalla quedan impregnados con ecos espirituales tan violentos
            que incluso siglos después pueden escucharse gritos durante la noche.
          </p>

          <p>
            Algunas culturas veneran abiertamente a Tharos
            como símbolo de honor, fuerza y supremacía.
            Otras lo temen como el dios que transforma héroes
            en monstruos incapaces de vivir fuera de la guerra.
          </p>

          <p>
            Sus seguidores creen que la existencia pertenece únicamente
            a quienes poseen la fuerza necesaria para imponer su voluntad.
            La compasión es debilidad.
            La paz es ilusión.
            Y el mundo solo avanza cuando alguien lo conquista.
          </p>

          <p>
            Sin embargo, el aspecto más aterrador de Tharos no es su violencia.
            Es que, en cierta forma, parte de él tiene razón.
          </p>

          <p className="text-white text-2xl font-semibold text-center">
            Porque incluso en las eras más pacíficas de Elyndor,
            la guerra siempre termina regresando.
          </p>

        </div>

        {/* RUNA */}
        <div className="border-t border-zinc-800 pt-20 mt-24">

          <h2 className="text-4xl font-bold text-center mb-10">
            ⟡ RUNA DE THAROS ⟡
          </h2>

          <div className="text-center mb-12">

            <p className="text-2xl text-white mb-4">
              Thar’Korr Valdyr
            </p>

            <p className="text-zinc-400 italic text-lg">
              “Donde la guerra es aceptada, la voluntad del débil se rompe.”
            </p>

          </div>

          <div className="text-zinc-300 text-lg leading-relaxed space-y-8">

            <p>
              La Runa de Tharos no representa únicamente combate.
              Es una marca de DOMINIO A TRAVÉS DEL CONFLICTO.
            </p>

            <p>
              Cuando aparece, significa una de estas tres cosas:
            </p>

            <div className="space-y-6">

              <div>
                <h3 className="text-white text-2xl font-semibold mb-2">
                  1. PRESENCIA DEL CONQUISTADOR
                </h3>

                <p>
                  Tharos ha bendecido directa o indirectamente
                  a un guerrero, ejército o campeón.
                  La guerra en ese lugar ya no puede detenerse fácilmente.
                </p>
              </div>

              <div>
                <h3 className="text-white text-2xl font-semibold mb-2">
                  2. TERRITORIO DE GUERRA ABSOLUTA
                </h3>

                <p>
                  El área ha sido marcada por conflictos tan intensos
                  que la violencia quedó impregnada en la realidad misma.
                  Los ecos de batalla permanecen vivos incluso siglos después.
                </p>
              </div>

              <div>
                <h3 className="text-white text-2xl font-semibold mb-2">
                  3. ASCENSO DEL AVATAR
                </h3>

                <p>
                  La runa puede manifestarse cerca de individuos tocados por Tharos:
                  conquistadores, generales, héroes de guerra
                  o tiranos destinados a alterar la historia mediante fuerza absoluta.
                </p>
              </div>

            </div>

            <p>
              Su efecto espiritual no es físico.
              Incrementa agresividad y deseo de dominación.
              Debilita el miedo durante combate.
              Provoca euforia violenta en ejércitos prolongadamente expuestos.
              Vuelve más difícil sentir compasión o duda.
              Las emociones pacíficas comienzan a sentirse “antinaturales”.
            </p>

            <p>
              Su efecto sobre el entorno altera incluso los restos de antiguas guerras.
              Armas y armaduras duran más de lo normal.
              Los campos de batalla conservan ecos espirituales.
              Durante la noche pueden escucharse gritos,
              acero chocando o tambores inexistentes.
              Las heridas sufridas bajo la runa sangran más tiempo.
            </p>

            <p>
              Su interacción con la magia fortalece todo aquello ligado a destrucción.
              La magia ofensiva aumenta su intensidad.
              Los hechizos defensivos pierden estabilidad durante conflictos masivos.
              Los conjuros emocionales o de calma se debilitan severamente.
            </p>

            <p className="italic text-zinc-400 border-l-2 border-zinc-700 pl-6">
              “La Runa de Tharos no inicia guerras.
              Solo revela que el corazón de los hombres
              siempre quiso una.”
            </p>

            <p className="text-white text-xl font-semibold text-center">
              No obliga a luchar.
              Hace que la guerra parezca la única verdad posible.
            </p>

          </div>

        </div>

        {/* IMAGEN RUNA */}
        <div className="mt-16 flex justify-center">
          <Image
            src="/dioses/runa-tharos.png"
            alt="Runa de Tharos"
            width={600}
            height={600}
            className="rounded-2xl border border-zinc-800 shadow-lg"
            priority
          />
        </div>

      </div>
    </div>
  );
}