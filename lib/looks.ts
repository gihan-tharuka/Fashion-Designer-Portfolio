export type Look = {
  number: string;
  slug: string;
  name: string;
  description: string;
  tags: string[];
  image?: string;
  modelImage?: string;
  finalImage?: string;
};

export const looks: Look[] = [
  {
    number: "01",
    slug: "look-01",
    name: "The Cocooned Self",
    description:
      "A layered draped jacket and trouser look exploring protection, confinement, and the beginning of transformation. The cocoon-like sleeve structure and warm brown batik surface represent the movement from darkness towards light.",
    tags: ["Draped Jacket", "Batik Texture", "Cocoon Sleeve", "Trouser"],
    image: "/images/website/look1.jpg",
    modelImage: "/images/website/look1model.png",
    finalImage: "/images/website/look1dummy.jpg",
  },
  {
    number: "02",
    slug: "look-02",
    name: "Fractured Light",
    description:
      "A look exploring the first break from darkness through textured surfaces, layered colour, and emotional contrast.",
    tags: ["Textile Surface", "Layering", "Contrast", "Transformation"],
    image: "/images/website/look2.jpg",
    modelImage: "/images/website/look2model.png",
    finalImage: "/images/website/look2dummy.jpg",
  },
  {
    number: "03",
    slug: "look-03",
    name: "Soft Emergence",
    description:
      "A soft and fluid look representing growth, opening, and the beginning of emotional release.",
    tags: ["Draping", "Soft Volume", "Fluid Form", "Growth"],
    image: "/images/website/look3.jpg",
    modelImage: "/images/website/look3model.png",
    finalImage: "/images/website/look3dummy.jpg",
  },
  {
    number: "04",
    slug: "look-04",
    name: "Wing Memory",
    description:
      "A butterfly-inspired look using surface detail and fabric movement to express memory, fragility, and strength.",
    tags: ["Butterfly Motif", "Surface Detail", "Movement", "Femininity"],
    image: "/images/website/look4.jpg",
    modelImage: "/images/website/look4model.png",
    finalImage: "/images/website/look4dummy.jpg",
  },
  {
    number: "05",
    slug: "look-05",
    name: "Liberation Form",
    description:
      "A more open and expressive silhouette symbolising confidence, movement, and personal freedom.",
    tags: ["Flowing Silhouette", "Liberation", "Statement Shape", "Movement"],
    image: "/images/website/look5.jpg",
    modelImage: "/images/website/look5model.png",
    finalImage: "/images/website/look5dummy.jpg",
  },
  {
    number: "06",
    slug: "look-06",
    name: "Afterlight",
    description:
      "The final look of the collection, representing calmness, rebirth, and quiet feminine power.",
    tags: ["Final Look", "Rebirth", "Elegance", "Serenity"],
    image: "/images/website/look6.jpg",
    modelImage: "/images/website/look6model.png",
    finalImage: "/images/website/look6dummy.jpg",
  },
];

export function getLook(slug: string) {
  return looks.find((look) => look.slug === slug);
}

export function getAdjacentLooks(slug: string) {
  const index = looks.findIndex((look) => look.slug === slug);

  return {
    previous: index > 0 ? looks[index - 1] : null,
    next: index >= 0 && index < looks.length - 1 ? looks[index + 1] : null,
  };
}
