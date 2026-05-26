import Link from "next/link";

export default function Historia() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-4xl mx-auto">

        <Link href="/mundo">
          <button className="mb-10 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition">
            ← Volver al Mundo
          </button>
        </Link>

        <h1 className="text-5xl font-bold text-center mb-12">
          Historia de Elyndor
        </h1>

        <div className="text-zinc-300 text-lg leading-relaxed space-y-8">

          <p>
            Elyndor es un mundo antiguo marcado por fuerzas primordiales, guerras eternas,
            entidades olvidadas y poderes que exigen un precio real. La magia no es gratuita.
            Los dioses no son benevolentes. Y el destino mismo ha sido manipulado desde las sombras.
          </p>

          <p>
            Civilizaciones enteras han surgido y caído bajo la influencia de fuerzas que muchos
            ni siquiera comprenden. Reinos prosperan mientras otros desaparecen consumidos por guerra,
            corrupción o fenómenos imposibles de explicar.
          </p>

          <p>
            El equilibrio del mundo es frágil. Bajo la superficie de la realidad existen secretos
            borrados de la historia, dioses que continúan actuando desde las sombras y anomalías
            capaces de alterar el curso de toda existencia.
          </p>

          <p>
            Existen regiones donde las leyes de la realidad dejaron de comportarse correctamente.
            Lugares donde el tiempo se fragmenta, donde la muerte no siempre es definitiva y donde
            antiguas presencias observan desde planos imposibles de comprender.
          </p>

          <p>
            Algunas zonas del mundo fueron marcadas por eventos tan catastróficos que incluso los dioses
            evitaron volver a nombrarlas. Otras simplemente desaparecieron de toda memoria,
            como si Elyndor mismo hubiera intentado borrarlas.
          </p>

          <p>
            Durante eras, el mundo logró mantenerse al borde del colapso sin terminar de caer.
            Pero algo comenzó a cambiar. Las antiguas fuerzas volvieron a moverse.
            Los sellos empezaron a debilitarse. Y aquello que una vez fue condenado
            a permanecer olvidado comenzó a despertar.
          </p>

          <p className="text-white font-semibold text-xl">
            En medio de ese mundo existe Arya.
            Y su sola existencia representa algo que jamás debió ocurrir.
          </p>

        </div>
      </div>
    </div>
  );
}