const data = [
  {
    brandId: 1,
    modelName: "Submariner",
    movement: "AUTOMATIC",
    gender: "UNISEX",
    powerReserve: '50',
    caseMaterial: "Stainless Steel",
    caseDiameter: '40',
    crystal: "Sapphire",
    dial: "Black",
    braceletMaterial: "Stainless Steel",
    braceletColor: "Silver",
    description: "The iconic dive watch from Rolex.",
  },
  {
    brandId: 2,
    modelName: "Speedmaster Professional",
    movement: "AUTOMATIC",
    gender: "UNISEX",
    powerReserve: '48',
    caseMaterial: "Stainless Steel",
    caseDiameter: '42',
    crystal: "Hesalite",
    dial: "Black",
    braceletMaterial: "Stainless Steel",
    braceletColor: "Silver",
    description: "The first watch worn on the moon.",
  },
  {
    brandId: 3,
    modelName: "Prospex Diver",
    movement: "AUTOMATIC",
    gender: "MALE",
    powerReserve: '60',
    caseMaterial: "Stainless Steel",
    caseDiameter: '44',
    crystal: "Hardlex",
    dial: "Blue",
    braceletMaterial: "Rubber",
    braceletColor: "Black",
    description: "A reliable and rugged diver watch from Seiko.",
  },
  {
    brandId: 4,
    modelName: "Tank Solo",
    movement: "QUARTZ",
    gender: "FEMALE",
    powerReserve: '24',
    caseMaterial: "Stainless Steel",
    caseDiameter: '27',
    crystal: "Sapphire",
    dial: "Silver",
    braceletMaterial: "Leather",
    braceletColor: "Black",
    description: "A classic and elegant watch from Cartier.",
  },
  {
    brandId: 5,
    modelName: "Big Bang",
    movement: "AUTOMATIC",
    gender: "UNISEX",
    powerReserve: '72',
    caseMaterial: "Titanium",
    caseDiameter: '45',
    crystal: "Sapphire",
    dial: "Black",
    braceletMaterial: "Rubber",
    braceletColor: "Black",
    description: "A bold and luxurious watch from Hublot.",
  },
  {
    brandId: 6,
    modelName: "G-Shock GA-2100",
    movement: "QUARTZ",
    gender: "UNISEX",
    powerReserve: '12',
    caseMaterial: "Resin",
    caseDiameter: '48',
    crystal: "Mineral",
    dial: "Black",
    braceletMaterial: "Resin",
    braceletColor: "Black",
    description: "A durable and versatile watch from Casio.",
  },
  {
    brandId: 1,
    modelName: "GMT-Master II",
    movement: "AUTOMATIC",
    gender: "UNISEX",
    powerReserve: '48',
    caseMaterial: "Stainless Steel",
    caseDiameter: '40',
    crystal: "Sapphire",
    dial: "Black",
    braceletMaterial: "Stainless Steel",
    braceletColor: "Silver",
    description: "A versatile watch with dual timezone functionality.",
  },
  {
    brandId: 2,
    modelName: "Seamaster Planet Ocean",
    movement: "AUTOMATIC",
    gender: "MALE",
    powerReserve: '60',
    caseMaterial: "Stainless Steel",
    caseDiameter: '43',
    crystal: "Sapphire",
    dial: "Blue",
    braceletMaterial: "Stainless Steel",
    braceletColor: "Silver",
    description: "A professional dive watch with exceptional performance.",
  },
  {
    brandId: 3,
    modelName: "Presage Cocktail Time",
    movement: "AUTOMATIC",
    gender: "MALE",
    powerReserve: '41',
    caseMaterial: "Stainless Steel",
    caseDiameter: '40',
    crystal: "Hardlex",
    dial: "White",
    braceletMaterial: "Leather",
    braceletColor: "Brown",
    description: "A stylish and dressy watch inspired by cocktails.",
  },
  {
    brandId: 4,
    modelName: "Ballon Bleu de Cartier",
    movement: "AUTOMATIC",
    gender: "FEMALE",
    powerReserve: '48',
    caseMaterial: "Stainless Steel",
    caseDiameter: '36',
    crystal: "Sapphire",
    dial: "Silver",
    braceletMaterial: "Stainless Steel",
    braceletColor: "Silver",
    description: "A distinctive and elegant watch with a unique case shape.",
  },
  {
    brandId: 5,
    modelName: "Classic Fusion",
    movement: "AUTOMATIC",
    gender: "UNISEX",
    powerReserve: '42',
    caseMaterial: "Titanium",
    caseDiameter: '38',
    crystal: "Sapphire",
    dial: "Black",
    braceletMaterial: "Rubber",
    braceletColor: "Black",
    description:
      "An elegant and contemporary watch with a fusion of materials.",
  },
  {
    brandId: 6,
    modelName: "Edifice EQB-1000",
    movement: "QUARTZ",
    gender: "MALE",
    powerReserve: '24',
    caseMaterial: "Stainless Steel",
    caseDiameter: '44',
    crystal: "Mineral",
    dial: "Black",
    braceletMaterial: "Stainless Steel",
    braceletColor: "Silver",
    description: "A sleek and connected watch with smartphone integration.",
  },
  {
    brandId: 1,
    modelName: "Yacht-Master",
    movement: "AUTOMATIC",
    gender: "UNISEX",
    powerReserve: '72',
    caseMaterial: "Stainless Steel",
    caseDiameter: '37',
    crystal: "Sapphire",
    dial: "White",
    braceletMaterial: "Stainless Steel",
    braceletColor: "Silver",
    description:
      "A luxurious and sporty watch designed for sailing enthusiasts.",
  },
  {
    brandId: 2,
    modelName: "Constellation",
    movement: "QUARTZ",
    gender: "FEMALE",
    powerReserve: '24',
    caseMaterial: "Stainless Steel",
    caseDiameter: '28',
    crystal: "Sapphire",
    dial: "White",
    braceletMaterial: "Stainless Steel",
    braceletColor: "Silver",
    description: 'A sophisticated and elegant watch with the iconic "claws".',
  },
  {
    brandId: 3,
    modelName: "Presage Enamel Dial",
    movement: "AUTOMATIC",
    gender: "MALE",
    powerReserve: '45',
    caseMaterial: "Stainless Steel",
    caseDiameter: '39',
    crystal: "Sapphire",
    dial: "Blue",
    braceletMaterial: "Leather",
    braceletColor: "Black",
    description:
      "A refined and traditional watch with a beautiful enamel dial.",
  },
  {
    brandId: 4,
    modelName: "Panthère de Cartier",
    movement: "QUARTZ",
    gender: "FEMALE",
    powerReserve: '24',
    caseMaterial: "Stainless Steel",
    caseDiameter: '22',
    crystal: "Sapphire",
    dial: "Silver",
    braceletMaterial: "Stainless Steel",
    braceletColor: "Silver",
    description: "An iconic and timeless watch with a distinctive design.",
  },
  {
    brandId: 5,
    modelName: "Spirit of Big Bang",
    movement: "AUTOMATIC",
    gender: "UNISEX",
    powerReserve: '72',
    caseMaterial: "Carbon",
    caseDiameter: '45',
    crystal: "Sapphire",
    dial: "Skeleton",
    braceletMaterial: "Rubber",
    braceletColor: "Black",
    description:
      "A bold and innovative watch with a unique barrel-shaped case.",
  },
  {
    brandId: 6,
    modelName: "Oceanus OCW-S5000",
    movement: "QUARTZ",
    gender: "MALE",
    powerReserve: '0',
    caseMaterial: "Titanium",
    caseDiameter: '43',
    crystal: "Sapphire",
    dial: "Black",
    braceletMaterial: "Titanium",
    braceletColor: "Silver",
    description: "A sophisticated and high-tech watch powered by solar energy.",
  },
  {
    brandId: 1,
    modelName: "Daytona",
    movement: "AUTOMATIC",
    gender: "UNISEX",
    powerReserve: '72',
    caseMaterial: "Stainless Steel",
    caseDiameter: '40',
    crystal: "Sapphire",
    dial: "Black",
    braceletMaterial: "Stainless Steel",
    braceletColor: "Silver",
    description:
      "An iconic chronograph watch from Rolex, known for its racing heritage.",
  },
  {
    brandId: 2,
    modelName: "Aqua Terra",
    movement: "AUTOMATIC",
    gender: "UNISEX",
    powerReserve: '55',
    caseMaterial: "Stainless Steel",
    caseDiameter: '41',
    crystal: "Sapphire",
    dial: "Blue",
    braceletMaterial: "Stainless Steel",
    braceletColor: "Silver",
    description: "A versatile and elegant watch suitable for any occasion.",
  },
  {
    brandId: 3,
    modelName: "Prospex Street Series",
    movement: "AUTOMATIC",
    gender: "MALE",
    powerReserve: '60',
    caseMaterial: "Stainless Steel",
    caseDiameter: '42',
    crystal: "Hardlex",
    dial: "Black",
    braceletMaterial: "Silicone",
    braceletColor: "Black",
    description: "A tough and stylish watch designed for urban adventures.",
  },
  {
    brandId: 4,
    modelName: "Santos de Cartier",
    movement: "AUTOMATIC",
    gender: "UNISEX",
    powerReserve: '48',
    caseMaterial: "Stainless Steel",
    caseDiameter: '35',
    crystal: "Sapphire",
    dial: "Silver",
    braceletMaterial: "Stainless Steel",
    braceletColor: "Silver",
    description: "A classic and timeless watch with a distinctive square case.",
  },
  {
    brandId: 5,
    modelName: "MP Collection",
    movement: "AUTOMATIC",
    gender: "MALE",
    powerReserve: '72',
    caseMaterial: "Titanium",
    caseDiameter: '47',
    crystal: "Sapphire",
    dial: "Black",
    braceletMaterial: "Rubber",
    braceletColor: "Black",
    description:
      "A high-performance watch designed for extreme sports and adventures.",
  },
  {
    brandId: 6,
    modelName: "Master of G Mudmaster",
    movement: "QUARTZ",
    gender: "UNISEX",
    powerReserve: '24',
    caseMaterial: "Resin",
    caseDiameter: '56',
    crystal: "Mineral",
    dial: "Black",
    braceletMaterial: "Resin",
    braceletColor: "Black",
    description:
      "A rugged and durable watch built to withstand harsh environments.",
  },
];

module.exports.productData = data.map((e) => {
  delete e.id
return {
  ...e,
  watchImage:
    "https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096_1280.jpg",
};
});
