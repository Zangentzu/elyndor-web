import Link from "next/link";
import Image from "next/image";

export default function Vaelkor() {
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
          Vaelkor
        </h1>

        {/* Subtítulo */}
        <p className="text-center text-zinc-400 text-lg mb-10">
          Señor del Vacío — la ausencia de existencia, memoria y significado.
        </p>

        {/* IMAGEN */}
        <div className="my-10 flex justify-center">
          <Image
            src="/dioses/vaelkor.png"
            alt="Vaelkor, Señor del Vacío"
            width={800}
            height={1000}
            className="rounded-2xl border border-zinc-800 shadow-lg"
            priority
          />
        </div>

        {/* LORE */}
        <div className="text-zinc-300 text-lg leading-relaxed space-y-8">

          <p>
            Vaelkor es la manifestación del vacío absoluto, la aniquilación y el silencio eterno. Entre los Siete, fue el más distante de la creación y el único que jamás desarrolló apego alguno por Elyndor o sus habitantes. Donde otros dioses veían vida, evolución o equilibrio, Vaelkor solo percibía imperfección, ruido y sufrimiento inevitable.
          </p>

          <p>
            Para él, la existencia misma era un error. No odiaba al mundo, no sentía ira ni desprecio. Simplemente creía que todo debía terminar.
          </p>

          <p>
            Su presencia no destruye como el fuego ni corrompe como la plaga. El Vacío consume algo mucho peor: significado, memoria y realidad. Allí donde Vaelkor toca el mundo, la existencia comienza a deshacerse lentamente. La luz pierde intensidad. Los sonidos desaparecen. Las emociones se vuelven distantes. Incluso el tiempo parece olvidar que algo estuvo allí.
          </p>

          <p>
            Durante la Traición, Vaelkor fue quien utilizó el Vacío para borrar fragmentos enteros de la existencia de Elyndra. No buscó herirla físicamente; buscó eliminar todo rastro de que alguna vez hubiera existido.
          </p>

          <p>
            Tras la caída de Elyndra, Vaelkor terminó parcialmente sellado dentro de una dimensión fracturada más allá de la realidad conocida. Sin embargo, el sello nunca fue perfecto. Fragmentos de su influencia continúan filtrándose hacia Elyndor a través de grietas invisibles en el tejido del mundo.
          </p>

          <p>
            En ciertas regiones malditas, el sonido deja de existir por completo. La magia falla. Las sombras no reaccionan a la luz. Y las criaturas vivientes sienten un terror imposible de describir, como si la realidad misma estuviera incompleta.
          </p>

          <p>
            Las entidades nacidas de su influencia no devoran carne ni almas: devoran existencia. Allí donde pasan, recuerdos desaparecen, nombres son olvidados y lugares enteros parecen haber sido arrancados de la historia.
          </p>

          <p>
            Algunos mortales comenzaron a venerarlo en secreto. Los cultos de Vaelkor creen que toda vida conduce inevitablemente al dolor y que el verdadero acto de misericordia es permitir que el universo termine.
          </p>

          <p>
            Sus seguidores buscan acelerar el “Silencio Final”, destruyendo conocimiento, ciudades y vínculos espirituales para debilitar la resistencia del mundo contra el Vacío.
          </p>

          <p>
            A diferencia de otros dioses oscuros, Vaelkor no promete poder, gloria ni salvación. Solo descanso absoluto.
          </p>

          <p>
            Y aunque permanece sellado, muchos sabios temen una verdad peor que su regreso: que el Vacío nunca estuvo realmente encerrado.
          </p>

        </div>

        {/* RUNA */}
        <div className="mt-20 text-zinc-300 text-lg leading-relaxed space-y-6">

          <h2 className="text-3xl font-bold text-center text-white mb-8">
            ⟡ RUNA DE VAELKOR ⟡
          </h2>

          <p>
            <strong>Nombre antiguo:</strong> Væ’Kor Nul’Thar
          </p>

          <p>
            <strong>Significado literal:</strong> “Donde el Vacío observa, incluso la existencia duda de sí misma.”
          </p>

          <p>
            <strong>Significado real dentro del mundo:</strong> La Runa de Vaelkor no es un sello de protección ni de dominio. Es una marca de ANULACIÓN EXISTENCIAL INCOMPLETA.
          </p>

          <p>
            Cuando aparece, significa una de estas tres cosas:
          </p>

          <p>
            <strong>1. Filtración del Vacío:</strong> La presencia de Vaelkor ha tocado el lugar recientemente o su influencia está desbordándose desde la grieta sellada. El entorno comienza a “olvidarse a sí mismo”.
          </p>

          <p>
            <strong>2. Zona de desrealización:</strong> El área ha perdido estabilidad ontológica. El sonido puede desaparecer, la magia falla o se apaga, la memoria inmediata se degrada y el tiempo se vuelve inconsistente.
          </p>

          <p>
            <strong>3. Marca de consumo pasivo:</strong> El lugar ya ha sido parcialmente “comido” por el Vacío. No está destruido: está sin registro en la realidad plena.
          </p>

          <p>
            <strong>Efecto espiritual (no físico):</strong> provoca pérdida de memoria a corto plazo en seres vivos cercanos, sensación de ausencia incluso en plena visión del lugar, emociones planas o desconectadas, dificultad para recordar nombres y conceptos, y un silencio “pesado” como si tuviera masa.
          </p>

          <p>
            <strong>Interacción con magia:</strong> los hechizos de creación se desvanecen al activarse, los conjuros de protección pierden coherencia estructural y la energía mágica “olvida su forma”.
          </p>

          <p>
            <strong>Advertencia antigua:</strong> “Donde la Runa de Vaelkor permanece, el mundo no ha sido destruido… solo ha dejado de recordar que existe.”
          </p>

          <p>
            <strong>Atributo clave:</strong> No protege. No domina. No corrompe. Simplemente reduce la realidad a algo incompleto hasta que deja de sostenerse.
          </p>

        </div>

        {/* IMAGEN RUNA (NUEVA - AL FINAL) */}
        <div className="mt-16 flex justify-center">
          <Image
            src="/dioses/runa-vaelkor.png"
            alt="Runa de Vaelkor"
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