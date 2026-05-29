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

        {/* Subtítulo */}
        <p className="text-center text-zinc-400 text-lg mb-10">
          La Diosa Primordial — origen de la creación, el equilibrio y la verdad absoluta.
        </p>

        {/* Imagen */}
        <div className="my-10 flex justify-center">
          <Image
            src="/dioses/elyndra.png"
            alt="Elyndra, Diosa Primordial"
            width={800}
            height={1000}
            className="rounded-2xl border border-zinc-800 shadow-lg"
            priority
          />
        </div>

        {/* LORE */}
        <div className="text-zinc-300 text-lg leading-relaxed space-y-8">

          <p>
            Antes de las eras conocidas, antes de los reinos mortales y antes incluso del nacimiento de las primeras razas conscientes, Elyndor no era un mundo completo. No existían fronteras, estaciones ni civilizaciones. El tiempo aún no avanzaba como lo hace ahora y la realidad permanecía dormida bajo mares eternos, cielos inmóviles y corrientes primordiales que fluían sin forma definida.
          </p>

          <p>
            En aquel origen remoto existía únicamente Elyndra, la conciencia primordial del mundo. No era una diosa en el sentido mortal de la palabra, sino la voluntad viva del propio equilibrio. La montaña, el océano, el fuego, la tormenta, la memoria y el vacío coexistían dentro de ella como partes de una única existencia perfecta.
          </p>

          <p>
            Sin embargo, el equilibrio absoluto también significaba inmovilidad. Y del mismo modo en que una estrella termina por arder para no desaparecer en la oscuridad, Elyndra fragmentó partes de su propia esencia para dar origen a los Siete.
          </p>

          <p>
            Cada uno nació como manifestación de un principio fundamental de la existencia. No eran simples dioses elementales ni gobernantes de un único dominio. Eran conceptos vivos capaces de alterar la realidad misma con su voluntad.
          </p>

          <p>
            Uno representaba la guerra y la voluntad de avanzar. Otro, la memoria y la verdad. Otro, el destino y el orden inevitable. Existían también aquellos ligados al fuego primordial, al equilibrio natural, a los cielos eternos y a la muerte de las eras.
          </p>

          <p>
            Durante incontables milenios, los Siete caminaron juntos y moldearon Elyndor. Levantaron montañas, abrieron océanos, despertaron bosques conscientes. Guiaron el nacimiento de gigantes, dragones y espíritus primordiales. Encendieron el flujo de la magia y permitieron que la vida evolucionara bajo distintas formas.
          </p>

          <p>
            Pero con el paso de las eras, los Siete comenzaron a separarse. Algunos creían que Elyndor debía mantenerse en equilibrio eterno. Otros comenzaron a pensar que el mundo era imperfecto y necesitaba ser guiado, controlado o reconstruido. La diferencia entre proteger el mundo y gobernarlo terminó convirtiéndose en una guerra silenciosa.
          </p>

          <p>
            El primero en romper la armonía fue Vaelkor, quien llegó a creer que la paz volvía débiles a las razas mortales. Para él, únicamente el conflicto permitía evolucionar. Donde otros dioses veían equilibrio, Vaelkor veía estancamiento.
          </p>

          <p>
            Kaelion, guardián del destino y el orden absoluto, también comenzó a apartarse de Elyndra. Estaba convencido de que la libertad inevitablemente conduciría al caos, y que el futuro debía permanecer bajo control divino.
          </p>

          <p>
            La fractura entre los Siete creció durante siglos hasta convertirse en el evento más devastador de toda la historia conocida: La Caída de Elyndra.
          </p>

          <p>
            Se dice que los cielos ardieron durante meses. Montañas completas desaparecieron bajo mares recién nacidos. Continentes fueron divididos. Criaturas imposibles escaparon desde planos desconocidos. La magia perdió estabilidad y comenzó a fragmentarse en distintas formas.
          </p>

          <p>
            En medio del conflicto, Elyndra intentó detener a los Siete. Pero para entonces la división ya era irreversible. La guerra alcanzó incluso el núcleo espiritual del mundo. Y Elyndra cayó.
          </p>

          <p>
            Algunas leyendas afirman que fue asesinada por los propios dioses traidores. Otras aseguran que se sacrificó para evitar la destrucción total de Elyndor. Existen incluso relatos prohibidos que afirman que Elyndra aún vive, fragmentada dentro del mundo mismo, observando en silencio a través de sueños, ecos y lugares donde la realidad se vuelve inestable.
          </p>

          <p>
            Los Fey afirman escucharla en sueños antiguos. Los gigantes creen que su voz aún vive bajo las montañas. Los Thalassyr aseguran que el océano conserva sus memorias. Y los dragones más antiguos recuerdan momentos en los que el mundo entero parecía respirar con una sola conciencia.
          </p>

          <p>
            Existen lugares donde la presencia de Elyndra aún puede sentirse. Bosques donde el tiempo se distorsiona. Ruinas donde las heridas cicatrizan demasiado rápido. Mares silenciosos donde las emociones quedan grabadas en el agua. Templos olvidados donde las runas reaccionan sin ser tocadas.
          </p>

        </div>

        {/* RUNA */}
        <div className="border-t border-zinc-800 mt-20 pt-20 text-zinc-300 text-lg leading-relaxed space-y-6">

          <h2 className="text-3xl font-bold text-center text-white mb-8">
            ⟡ RUNA DE ELYNDRA ⟡
          </h2>

          <div className="text-center mb-10">
            <p className="text-2xl text-white mb-4">
              Æl’Nythra Veylor
            </p>

            <p className="text-zinc-400 italic text-lg">
              “Donde la conciencia primordial permanece, nada puede romper lo que existe bajo su mirada.”
            </p>
          </div>

          <p>
            <strong>Significado real dentro del mundo:</strong> La Runa de Elyndra no es un símbolo de protección común. Es una marca de PRESENCIA DIVINA ACTIVA.
          </p>

          <p>
            Cuando aparece, significa una de estas tres cosas:
          </p>

          <p>
            <strong>1. Presencia residual:</strong> Elyndra estuvo ahí recientemente o su esencia aún permea el lugar. El espacio todavía “respira” como ella.
          </p>

          <p>
            <strong>2. Dominio de realidad:</strong> El área está dentro de una zona donde las leyes del mundo están ancladas a su voluntad. La magia, el tiempo o la corrupción no pueden alterar ese lugar de forma normal.
          </p>

          <p>
            <strong>3. Sello de templo o reliquia primordial:</strong> Indica que el lugar contiene fragmentos de su esencia, memorias del mundo antes de los Siete o artefactos imposibles creados por la diosa.
          </p>

          <p>
            <strong>Efecto espiritual (no físico):</strong> reduce la violencia dentro del área, disuelve magia inestable o corrupta, provoca “silencio mental” en entidades caóticas y genera sensación de ser observado desde todas partes.
          </p>

          <p>
            <strong>Advertencia antigua:</strong> “Quien rompe la Runa de Elyndra, no rompe piedra… rompe un recuerdo vivo del mundo.”
          </p>

          <p>
            <strong>Atributo clave:</strong> No protege el lugar. El lugar es protegido porque Elyndra aún lo está mirando.
          </p>

        </div>

        {/* IMAGEN DE LA RUNA */}
        <div className="mt-16 flex justify-center">
          <Image
            src="/dioses/runa-elyndra.png"
            alt="Runa de Elyndra"
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