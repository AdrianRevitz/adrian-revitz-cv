// Hand-written alt text per gallery photo, keyed by the photo `id` from the
// generated src/data/photos.js (which must not be hand-edited). A photo
// without an entry here falls back to the generic `photoAlt` string.
export const photoAlts = {
  img_1530: {
    en: 'A neon-lit restaurant front at night, with red taxis parked outside',
    da: 'En neonoplyst restaurantfacade om aftenen med røde taxaer parkeret udenfor',
  },
  img_1644: {
    en: 'Neon signs, including one for Swan Lake Sauna, on an apartment block at dusk',
    da: 'Neonskilte, blandt andet for Swan Lake Sauna, på en boligblok i skumringen',
  },
  img_1705: {
    en: 'A person tending a small fire on the pavement of a dark city street',
    da: 'En person, der passer et lille bål på fortovet i en mørk bygade',
  },
  img_1945: {
    en: 'The rusted hull of a Maersk container ship, with a suspension bridge across the water behind it',
    da: 'Det rustne skrog på et Maersk-containerskib med en hængebro over vandet bagved',
  },
  img_3386: {
    en: 'A man leaning back in a racing-game seat in a brightly lit arcade',
    da: 'En mand, der læner sig tilbage i et racerspilsæde i en stærkt oplyst spillehal',
  },
  img_3420: {
    en: 'A man sitting on the steps of a shopping street at night, with kittens in cages beside him',
    da: 'En mand, der sidder på trappen ved en indkøbsgade om aftenen med killinger i bure ved siden af sig',
  },
  img_3638: {
    en: 'Honour guards in white uniforms marching up the steps of Chiang Kai-shek Memorial Hall in Taipei',
    da: 'Æresvagter i hvide uniformer, der marcherer op ad trappen til Chiang Kai-shek Memorial Hall i Taipei',
  },
  img_3863: {
    en: 'Taipei 101 and the city skyline at dusk, with mountains on the horizon',
    da: 'Taipei 101 og byens skyline i skumringen med bjerge i horisonten',
  },
  img_4114: {
    en: 'A crowded night-market alley under red paper lanterns, with a green frog plush toy in the foreground',
    da: 'En tætpakket natmarkedsgyde under røde papirlamper med et grønt frø-tøjdyr i forgrunden',
  },
  img_4409: {
    en: 'The front of Guilin West Railway Station under a pale sky',
    da: 'Facaden på Guilin West Railway Station under en bleg himmel',
  },
  img_4593: {
    en: 'A scooter rider under a pink umbrella on a road through rice fields and karst mountains',
    da: 'En scooterkører under en lyserød paraply på en vej gennem rismarker og karstbjerge',
  },
  img_4926: {
    en: 'A small house among green fields, with karst peaks behind it under grey clouds',
    da: 'Et lille hus mellem grønne marker med karsttoppe bagved under grå skyer',
  },
  img_5619: {
    en: 'A city intersection with painted crossings and a white car, under an overcast sky',
    da: 'Et vejkryds i byen med malede fodgængerfelter og en hvid bil under en overskyet himmel',
  },
  img_5933: {
    en: 'A wide avenue between skyscrapers, with evening traffic heading into the city',
    da: 'En bred allé mellem skyskrabere med aftentrafik på vej ind mod byen',
  },
  img_5952: {
    en: 'A city skyline under dark storm clouds, with traffic on the road below',
    da: 'En skyline under mørke uvejrsskyer med trafik på vejen nedenfor',
  },
  img_8172: {
    en: 'A harbour and city lights seen from a hillside just after sunset',
    da: 'En havn og byens lys set fra en bjergskråning lige efter solnedgang',
  },
  img_8785: {
    en: 'A coastal skyline across the water, with red-roofed houses and trees in the foreground',
    da: 'En skyline ved kysten på den anden side af vandet med røde tage og træer i forgrunden',
  },
  img_9502: {
    en: 'A stone house in a mountain village under a blue sky with clouds',
    da: 'Et stenhus i en bjerglandsby under en blå himmel med skyer',
  },
  img_9546: {
    en: 'Snow-capped mountains behind a wooden railing, with a Chinese flag flying',
    da: 'Snedækkede bjerge bag et trærækværk med et kinesisk flag, der vajer',
  },
}

export function getPhotoAlt(photo, fallback, lang) {
  return photoAlts[photo.id]?.[lang] ?? fallback
}
