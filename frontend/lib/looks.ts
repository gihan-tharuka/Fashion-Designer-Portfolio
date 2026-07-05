export type Look = {
  number: string;
  slug: string;
  name: string;
  description: string;
  subtitle?: string;
  tags: string[];
  concept?: string;
  designDevelopment?: string;
  problemsAndImprovements?: string;
  outcomeAndReflection?: string;
  materials?: [string, string][];
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
    subtitle:
      "A draped contemporary womenswear look exploring confinement, protection, and the beginning of emotional transformation.",
    tags: [
      "Draped Jacket",
      "Batik-Inspired Surface",
      "Cocoon Sleeve",
      "Wide-Leg Trouser",
      "Emotional Design",
    ],
    concept:
      "Look 01, titled The Cocooned Self, represents the first stage of emotional transformation. The look explores the feeling of being protected, hidden, and contained before growth begins. The layered draped sleeve symbolises the cocoon shape, while the warm brown and burnt-orange surface suggests the transition from darkness towards light. The garment combines softness and structure, showing both vulnerability and strength.",
    designDevelopment:
      "The design started from an illustrated concept sketch and developed through toile experimentation, draping, fitting, and final garment construction. During the development process, the draped jacket was one of the most challenging parts because the sleeve structure needed to create a cocoon-like shape while still sitting naturally on the body. The original trouser shape did not fully achieve the planned outcome, so it was refined during the development stage.",
    problemsAndImprovements:
      "During the construction process, several issues were identified. The neck of the under-top appeared longer than expected, which affected the final proportion of the look. The trouser shape also changed from the original plan because the first version did not achieve the intended structure. These issues became part of the learning process and helped me understand the importance of toile testing, fitting, proportion checking, and construction refinement before final garment completion.",
    outcomeAndReflection:
      "The final outcome successfully communicates the idea of a cocooned body beginning to transform. The draped sleeve creates a protective layered shape, while the brown and burnt-orange surface supports the dark-to-light concept of the collection. This look helped me improve my understanding of draping, garment proportion, surface placement, and the relationship between concept and construction. It also became one of the strongest looks in the collection because it clearly connects the visual form with the emotional meaning of LUMENÉ.",
    materials: [
      ["Main garment", "Draped jacket and trouser"],
      ["Fabric direction", "Brown-toned fabric with batik-inspired texture"],
      ["Surface technique", "Texture lines inspired by chrysalis and batik"],
      ["Key technique", "Draping, layering, sleeve shaping, surface placement"],
      ["Colour story", "Brown, burnt orange, dark-to-light tonal movement"],
      ["Symbolism", "Cocoon, protection, emotional confinement, transformation"],
    ],
    image: "/images/website/look1.jpg",
    modelImage: "/images/website/look1model.png",
    finalImage: "/images/website/look1dummy.jpg",
  },
  {
    number: "02",
    slug: "look-02",
    name: "Wrapped in Shadow",
    description:
      "A layered look built around the feeling of being enclosed, protected, and held before transformation. The draped hooded form, deep blue surface pattern, orange wrap skirt, and detachable leg cuffs create a cocoon-like silhouette.",
    subtitle:
      "A protective layered look that explores how the body can be wrapped, hidden, and prepared for emotional transformation.",
    tags: [
      "Draped Hoodie",
      "Cocoon Form",
      "Batik Surface",
      "Wrapped Skirt",
      "Detachable Cuffs",
      "Protective Silhouette",
    ],
    concept:
      "Look 02 represents the stage of emotional protection within the LUMENÉ collection. The draped hooded upper form suggests a cocoon wrapping around the body, creating a sense of shelter, privacy, and inner reflection. The deep blue batik-inspired surface carries a darker emotional tone, while the orange skirt introduces warmth and movement. Together, the look expresses the moment before release, when the wearer is still protected but beginning to shift towards growth.",
    designDevelopment:
      "The look developed through experimentation with wrapping, draping, and constructed garment elements. The upper garment was shaped to cover the head and body, creating the feeling of a cocoon around the wearer. The orange skirt was adjusted after the toile stage because the original fit did not sit correctly on the mannequin. Detachable leg cuffs were added to extend the wrapped language of the look, while snap buttons were used to help hold the fabric in place. The final design combines soft draping with practical construction details.",
    problemsAndImprovements:
      "The main development challenge was controlling the fit of the skirt and the coverage of the hooded jacket. In the toile stage, the skirt did not fit the mannequin as intended, and the hood did not cover the head and face strongly enough. These issues were improved by adjusting the skirt layers and expanding the length of the draped hood section. Further refinement could focus on improving the stability of the wrapped fabric, making the detachable cuffs more secure, and ensuring the hood keeps its sculptural shape during movement.",
    outcomeAndReflection:
      "The final outcome successfully communicates the feeling of being wrapped inside a cocoon. The look has a strong emotional presence because it combines darkness, protection, and softness in one silhouette. Through this design, the designer explored how draping can create both visual drama and symbolic meaning. It also developed the designer's understanding of fit, fabric control, and how layered construction can support the concept of emotional transformation.",
    materials: [
      ["Main garment", "Draped hooded jacket, wrapped orange skirt, leggings, and detachable leg cuffs"],
      ["Fabric direction", "Printed dark blue textile, textured orange fabric, soft underlayer fabric, and structured cuff material"],
      ["Surface technique", "Batik-inspired line work and textile surface pattern"],
      ["Key technique", "Draping, wrapping, snap-button fastening, detachable garment detail, and layered construction"],
      ["Colour story", "Deep navy, black, blue, burnt orange, peach, and warm gold tones"],
      ["Symbolism", "Cocoon, protection, concealment, emotional darkness, preparation, and inner transformation"],
    ],
    image: "/images/website/look2.jpg",
    modelImage: "/images/website/look2model.png",
    finalImage: "/images/website/look2dummy.jpg",
  },
  {
    number: "03",
    slug: "look-03",
    name: "Soft Emergence",
    description:
      "A sculptural womenswear look exploring the moment of release from the chrysalis. Soft blush volume, translucent tulle layering, and warm copper surfaces create a balance between protection, fragility, and quiet strength.",
    subtitle:
      "A soft sculptural look that captures the fragile moment of breaking through protection and moving towards emotional lightness.",
    tags: [
      "Chrysalis Skirt",
      "Tulle Collar",
      "Sculptural Sleeve",
      "Batik Surface",
      "Soft Volume",
      "Emotional Design",
    ],
    concept:
      "Look 03 represents the delicate stage of emergence within the LUMENÉ collection. The silhouette reflects the body moving out of emotional confinement, with the soft pink skirt suggesting a chrysalis form beginning to open. The translucent tulle collar frames the upper body like a fragile layer being shed, while the structured copper jacket adds a feeling of protection and strength. Through contrast between softness and structure, this look expresses the transition from vulnerability to quiet confidence.",
    designDevelopment:
      "The look developed through sketching, toile experimentation, and several silhouette refinements. The original skirt shape was adjusted after the first development stage, as the designer wanted the lower form to read more clearly as a chrysalis-inspired shape. The final skirt became softer, fuller, and more sculptural, with an asymmetrical fall that gives the garment movement. The jacket sleeves were also refined into a curved, shaped form, adding volume while keeping the garment balanced. The sheer tulle collar was introduced as a symbolic layer, suggesting the moment of breaking and coming out from the cocoon.",
    problemsAndImprovements:
      "During development, the main challenge was achieving the correct balance between the skirt volume and the jacket structure. The first skirt did not communicate the intended chrysalis shape strongly enough, so its proportion and drape were reconsidered. The sleeve shape also required improvement to feel more intentional and connected to the overall silhouette. Further refinement could focus on controlling the skirt's asymmetrical hem, improving the stability of the tulle collar, and ensuring the jacket sleeve keeps its curved structure while remaining comfortable to wear.",
    outcomeAndReflection:
      "The final outcome communicates the collection's theme of emotional transformation in a clear and poetic way. The look combines softness, protection, and release through fabric contrast, colour, and silhouette. It shows how design decisions can evolve through problem-solving, especially when translating a symbolic idea into a wearable garment. This look helped strengthen the designer's understanding of proportion, fabric behaviour, and how sculptural details can carry emotional meaning within contemporary womenswear.",
    materials: [
      ["Main garment", "Structured cropped jacket, printed high-neck inner top, translucent tulle collar, and blush asymmetrical chrysalis skirt"],
      ["Fabric direction", "Lightweight sheer tulle, soft blush fabric for the skirt, printed textile surface for the inner top, and warm copper/brown textured fabric for the jacket"],
      ["Surface technique", "Batik-inspired printed and hand-drawn surface textures"],
      ["Key technique", "Draping, curved sleeve shaping, layered collar construction, and skirt silhouette refinement"],
      ["Colour story", "Soft blush pink, copper brown, burnt orange, deep green, red, and warm earthy tones"],
      ["Symbolism", "Chrysalis, emergence, protection, softness, emotional release, and transformation from darkness to light"],
    ],
    image: "/images/website/look3.jpg",
    modelImage: "/images/website/look3model.png",
    finalImage: "/images/website/look3dummy.jpg",
  },
  {
    number: "04",
    slug: "look-04",
    name: "Winged Resolve",
    description:
      "A structured look that uses a hooded upper form, sculptural orange panels, printed lower layers, and a butterfly-wing back detail. The design explores strength, transformation, and the body preparing to open outward.",
    subtitle:
      "A bold transitional look where protective structure begins to open into butterfly-like movement and visual freedom.",
    tags: [
      "Butterfly Panel",
      "Hooded Jacket",
      "Sculptural Waist",
      "Printed Textile",
      "Flared Lower Shape",
      "Transformation",
    ],
    concept:
      "Look 04 represents a stronger and more outward stage of transformation. The hooded upper section still carries the feeling of protection, but the back panel introduces a butterfly-wing reference, suggesting that release is beginning. The orange structured waist panels create a powerful centre, while the printed lower garment adds movement and colour. This look reflects feminine strength: still protected, but no longer hidden.",
    designDevelopment:
      "The design began from sketch development and was translated into a constructed garment with a hooded top, shaped waist panels, and printed flowing lower sections. The back design became an important feature, with an attached panel shaped to suggest butterfly wings. The scalloped edge helped strengthen this butterfly reference. During development, the flared lower section was made larger than the toile, giving the final garment more movement and visual impact.",
    problemsAndImprovements:
      "One key issue appeared in the back fastening area, where the lace-up panel was too wide and needed to be reduced so it could be tied securely with the cord. This was an important practical adjustment because the back detail needed to function as well as look symbolic. Further improvements could include refining the tension of the lace-up panel, balancing the weight of the back wing detail, and improving the finish of the scalloped edge so it remains crisp while worn.",
    outcomeAndReflection:
      "The final look presents a confident relationship between structure and symbolism. The butterfly-inspired back panel gives the garment a clear conceptual identity, while the orange and printed fabrics connect it to the wider LUMENÉ colour story. This look helped the designer understand how a symbolic detail can become both decorative and functional. It also developed awareness of back-view design, fastening placement, and proportion across the full body.",
    materials: [
      ["Main garment", "Hooded structured upper garment, shaped waist panel, printed lower garment, and butterfly-inspired back panel"],
      ["Fabric direction", "Textured orange fabric, printed batik-inspired fabric, soft underlayer fabric, and structured panel fabric"],
      ["Surface technique", "Batik-inspired print, line drawing, and scalloped edge detail"],
      ["Key technique", "Pattern adjustment, lace-up fastening, panel shaping, hood construction, and flared lower silhouette"],
      ["Colour story", "Burnt orange, deep green, red, navy, earthy brown, and muted warm tones"],
      ["Symbolism", "Butterfly wings, opening, strength, transition, empowerment, and emotional release"],
    ],
    image: "/images/website/look4.jpg",
    modelImage: "/images/website/look4model.png",
    finalImage: "/images/website/look4dummy.jpg",
  },
  {
    number: "05",
    slug: "look-05",
    name: "Unfolded Path",
    description:
      "A layered look combining a soft tie-front printed dress element with bold orange barrel trousers. The design explores movement, adjustment, and the process of finding balance through transformation.",
    subtitle:
      "A transitional look that combines soft printed layers and sculptural trousers to express movement, trial, and self-redefinition.",
    tags: [
      "Tie-Front Detail",
      "Barrel Trouser",
      "Printed Layer",
      "Draped Panels",
      "Surface Texture",
      "Contemporary Womenswear",
    ],
    concept:
      "Look 05 reflects the stage of transformation where the body begins to move with more confidence. The printed outer layer wraps and falls around the figure, while the orange barrel trousers introduce a stronger contemporary silhouette. The front tie detail suggests connection and adjustment, as if the garment is being pulled into balance. Within the collection, this look represents the active process of reshaping the self after emotional confinement.",
    designDevelopment:
      "The design developed through experimentation with fabric, tie-front construction, and trouser silhouette. The printed dress layer was refined after the original train was considered too long, allowing the final garment to feel more wearable and controlled. The trousers also changed during development, as the first fabric choice did not create the desired barrel shape. Linen was later used to achieve a fuller, more structured trouser form. The front tie-up detail was adjusted in the pattern so the panels could be tied more effectively.",
    problemsAndImprovements:
      "The main challenges in this look were fabric selection, train length, and front fastening. The trouser silhouette did not work as planned at first because the fabric did not support the desired shape. The train of the dress also needed to be reduced to improve proportion and practicality. The front tie-up panels were too close together, making the fastening difficult, so the pattern was corrected. Further refinement could focus on keeping the barrel trouser volume even on both sides and improving the fall of the printed outer layer.",
    outcomeAndReflection:
      "The final look shows how design can improve through testing and honest evaluation. The corrected trouser shape gives the garment a more contemporary identity, while the printed layer keeps the poetic and emotional direction of LUMENÉ. The look demonstrates the importance of choosing fabric according to silhouette, not only appearance. It also shows the designer's ability to respond to construction issues and make stronger final design decisions.",
    materials: [
      ["Main garment", "Printed tie-front dress layer with orange barrel trousers"],
      ["Fabric direction", "Printed lightweight fabric for the draped layer and linen or structured fabric for the barrel trousers"],
      ["Surface technique", "Batik-inspired printed textile and visible surface line detail"],
      ["Key technique", "Pattern correction, tie-front fastening, trouser shaping, train reduction, and silhouette balancing"],
      ["Colour story", "Burnt orange, olive green, muted blue, brown, blush pink, and earthy textile tones"],
      ["Symbolism", "Movement, self-adjustment, renewal, balance, and the journey from uncertainty to confidence"],
    ],
    image: "/images/website/look5.jpg",
    modelImage: "/images/website/look5model.png",
    finalImage: "/images/website/look5dummy.jpg",
  },
  {
    number: "06",
    slug: "look-06",
    name: "Final Release",
    description:
      "A fully draped final look that expresses the butterfly's release from the chrysalis. The one-shoulder printed dress and flowing fabric movement bring the collection to a soft, liberated conclusion.",
    subtitle:
      "A fluid closing look that symbolises release, lightness, and the emotional freedom found at the end of transformation.",
    tags: [
      "Full Draping",
      "One-Shoulder Dress",
      "Batik Surface",
      "Flowing Silhouette",
      "Final Look",
      "Liberation",
    ],
    concept:
      "Look 06 is the final expression of the LUMENÉ collection and represents liberation. After the stages of protection, struggle, and emergence, this look shows the butterfly finally coming out from the chrysalis. The body is no longer enclosed by heavy structure; instead, the fabric flows around it with softness and ease. The one-shoulder drape gives the garment a sense of freedom, while the batik-inspired surface connects the final piece back to the emotional textures of the collection.",
    designDevelopment:
      "This dress was developed mainly through draping, allowing the fabric to guide the silhouette directly on the form. The printed textile was arranged across the body to create natural movement and visual rhythm. The waist area became an important focus during development, as the first drape did not feel soft or fluid enough. In the final garment, the waist drape was changed to create a more flowing result. The full-length shape and train give the dress a graceful ending, while the asymmetrical neckline adds modern femininity.",
    problemsAndImprovements:
      "The key challenge was controlling the drape around the waist. In the first stage, the fabric did not fall with the desired softness, so the drape was adjusted to feel more natural and fluid. Further improvements could include refining the inner support of the one-shoulder neckline, improving the train finish for cleaner movement, and controlling the placement of the printed surface so the strongest visual areas remain balanced across the body. These refinements would make the garment more polished while keeping its emotional softness.",
    outcomeAndReflection:
      "The final look successfully closes the collection with a feeling of release and emotional lightness. It is less protective than the earlier looks and more open, fluid, and expressive. Through this piece, the designer explored how draping can communicate freedom without relying on heavy construction. The outcome reflects the collection's journey from darkness to light and shows growth in fabric handling, surface placement, and poetic silhouette development.",
    materials: [
      ["Main garment", "One-shoulder full-length draped dress with flowing train"],
      ["Fabric direction", "Lightweight printed fabric with soft movement and fluid fall"],
      ["Surface technique", "Batik-inspired print with organic colour movement and line detail"],
      ["Key technique", "Full draping, asymmetrical neckline shaping, waist drape refinement, and train control"],
      ["Colour story", "Olive green, warm brown, muted orange, soft blue, blush pink, cream, and earthy tones"],
      ["Symbolism", "Butterfly release, liberation, emotional healing, softness, freedom, and transformation completed"],
    ],
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
