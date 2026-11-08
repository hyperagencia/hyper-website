import { notFound } from 'next/navigation';

// Captura cualquier URL sin ruta para que se renderice el 404 con el layout (header/footer) del locale.
export default function CatchAllPage() {
  notFound();
}
