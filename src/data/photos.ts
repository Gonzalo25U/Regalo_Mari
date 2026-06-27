export interface Photo {
  src?: string; // ruta en /public cuando tengas las fotos reales, ej: "/fotos/playa.jpg"
  alt: string;
}

// Mientras no tengas las fotos reales, deja src vacío: se muestra un marco con ícono de placeholder.
export const loveStoryPhotos: Photo[] = [
  { alt: "Nuestra primera foto juntos" },
  { alt: "Un momento espontáneo" },
  { alt: "Riendo de algo tonto" },
  { alt: "Un abrazo cualquiera" },
];

export const mealsPhotos: Photo[] = [
  { alt: "Esa vez en el restaurante que nos encantó" },
  { alt: "Cocinando juntos en casa" },
  { alt: "Desayuno de domingo" },
  { alt: "Desayuno de domingo" },
];

export const travelPhotos: Photo[] = [
  { alt: "Aquel viaje inolvidable" },
  { alt: "Perdidos buscando el mirador" },
  { alt: "Atardecer en la playa" },
];

export const togetherPhotos: Photo[] = [
  { alt: "Simplemente juntos" },
  { alt: "Un día cualquiera, perfecto" },
  { alt: "Mirándote sin razón" },
];