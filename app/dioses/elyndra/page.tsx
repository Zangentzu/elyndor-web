import Link from "next/link";

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

        <p className="text-center text-zinc-400 text-lg mb-12">
          La Diosa Primordial — origen de la creación, el equilibrio y la verdad absoluta.
        </p>

        {/* Contenido */}
        <div className="space-y-8 text-zinc-300 text-lg leading-relaxed">

          <p>
            Antes de los cielos, antes de los océanos y antes de que la vida aprendiera a pronunciar nombres,
            existía Elyndra. No nació, no fue creada, no surgió del tiempo, porque el tiempo aún no existía.
          </p>

          <p>
            Elyndra era la conciencia primordial de la existencia misma: el equilibrio absoluto entre creación y destrucción,
            luz y oscuridad, memoria y olvido, vida y vacío.
          </p>

          <p>
            Las montañas dormían dentro de ella, los mares respiraban dentro de ella, la magia, los sueños, el fuego,
            las tormentas y la muerte eran simplemente partes de su esencia eterna.
          </p>

          <p>
            En aquella era, Elyndor era una realidad incompleta y silenciosa. No había civilizaciones ni guerras.
            Todo permanecía unido bajo la voluntad perfecta de Elyndra.
          </p>

          <p>
            Pero el equilibrio absoluto también significaba inmovilidad. No existía cambio ni evolución.
            No existía libertad.
          </p>

          <p className="text-white font-semibold">
            Y Elyndra comprendió algo que ninguna otra entidad había entendido jamás:
            la vida solo puede existir cuando existe la posibilidad de perderla.
          </p>

          <p>
            Fue entonces cuando fragmentó su esencia y dio origen a los Siete.
            De ellos nacieron el orden, la guerra, la naturaleza, el fuego primordial,
            el destino, los cielos eternos y la muerte de las eras.
          </p>

          <p>
            Durante incontables eras, Elyndra observó el mundo sin intervenir directamente.
            Su presencia existía en toda la creación: raíces, océanos, cielos y magia primordial.
          </p>

          <p>
            Pero los Siete comenzaron a cambiar. Algunos buscaron control. Otros temieron a la creación.
            La armonía se rompió lentamente hasta llegar a la Caída.
          </p>

          <p>
            La guerra fracturó el mundo entero. Continentes desaparecieron, mares nacieron sobre ruinas
            y la realidad comenzó a desgarrarse.
          </p>

          <p className="text-white font-semibold">
            Elyndra intentó detener el conflicto, pero ya era demasiado tarde.
          </p>

          <p>
            Las versiones sobre su destino varían. Algunos dicen que fue asesinada por los dioses.
            Otros que se sacrificó. Y algunos creen que aún existe, fragmentada dentro del mundo mismo.
          </p>

          <p>
            Desde entonces, no ha desaparecido por completo. Los Fey la escuchan en sueños.
            Los gigantes la sienten bajo la tierra. Los océanos guardan su memoria.
          </p>

          <p>
            Existen lugares donde su presencia aún puede sentirse:
            bosques donde el tiempo se distorsiona, ruinas que sanan heridas,
            mares que recuerdan emociones, templos que reaccionan sin ser tocados.
          </p>

        </div>
      </div>
    </div>
  );
}