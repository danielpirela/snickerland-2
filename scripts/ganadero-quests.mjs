import { writeQuests } from './quest-template.mjs';

const quests = [
  // ===== FASE 1: CUIDADOR NOVATO (D1-D5) =====
  {
    day: 1, title: 'DIA 1 - Primeros pasos', reward: 65,
    tasks: [
      { item: 'minecraft:leather', amount: 2, title: 'Recolecta cuero x2' },
      { item: 'minecraft:beef', amount: 2, title: 'Carne de res x2' },
      { item: 'minecraft:white_wool', amount: 1, title: 'Esquila una oveja' },
      { item: 'minecraft:chicken', amount: 1, title: 'Consigue pollo crudo' },
      { item: 'minecraft:porkchop', amount: 1, title: 'Consigue chuleta de cerdo' },
    ],
  },
  {
    day: 2, title: 'DIA 2 - Productos del corral', reward: 75,
    tasks: [
      { item: 'minecraft:egg', amount: 3, title: 'Recolecta huevos x3' },
      { item: 'minecraft:feather', amount: 3, title: 'Recolecta plumas x3' },
      { item: 'minecraft:mutton', amount: 2, title: 'Carne de cordero x2' },
      { item: 'minecraft:milk_bucket', amount: 1, title: 'Ordeña una vaca' },
      { item: 'minecraft:wheat', amount: 8, title: 'Cultiva trigo para animales' },
    ],
  },
  {
    day: 3, title: 'DIA 3 - Lana de colores', reward: 85,
    tasks: [
      { item: 'minecraft:shears', amount: 1, title: 'Fabrica tijeras de esquilar' },
      { item: 'minecraft:black_wool', amount: 1, title: 'Lana negra de oveja' },
      { item: 'minecraft:brown_wool', amount: 1, title: 'Lana marrón de oveja' },
      { item: 'minecraft:gray_wool', amount: 1, title: 'Lana gris de oveja' },
      { item: 'minecraft:bone', amount: 3, title: 'Recolecta huesos' },
    ],
  },
  {
    day: 4, title: 'DIA 4 - Alimentación variada', reward: 100,
    tasks: [
      { item: 'minecraft:wheat_seeds', amount: 8, title: 'Semillas para pollos' },
      { item: 'minecraft:carrot', amount: 6, title: 'Zanahorias para cerdos' },
      { item: 'minecraft:potato', amount: 6, title: 'Papas para cerdos' },
      { item: 'minecraft:beetroot', amount: 6, title: 'Remolacha para cerdos' },
      { item: 'minecraft:apple', amount: 3, title: 'Manzanas para caballos' },
    ],
  },
  {
    day: 5, title: 'DIA 5 - Primer establo', reward: 110,
    tasks: [
      { item: 'minecraft:oak_fence', amount: 16, title: 'Construye vallas x16' },
      { item: 'minecraft:oak_fence_gate', amount: 2, title: 'Puertas de valla x2' },
      { item: 'minecraft:lead', amount: 1, title: 'Fabrica un lazo' },
      { item: 'minecraft:hay_block', amount: 3, title: 'Bloques de heno x3' },
      { item: 'minecraft:composter', amount: 1, title: 'Fabrica un compostador' },
    ],
  },

  // ===== FASE 2: CRIADOR (D6-D10) =====
  {
    day: 6, title: 'DIA 6 - Cría de vacas', reward: 125,
    tasks: [
      { item: 'minecraft:wheat', amount: 16, title: 'Trigo para alimentar vacas' },
      { item: 'minecraft:leather', amount: 5, title: 'Cuero de vacas criadas x5' },
      { item: 'minecraft:beef', amount: 5, title: 'Carne de res fresca x5' },
      { item: 'minecraft:milk_bucket', amount: 2, title: 'Ordeña 2 vacas' },
      { item: 'minecraft:cake', amount: 1, title: 'Pastel con leche y huevo' },
    ],
  },
  {
    day: 7, title: 'DIA 7 - Cría de ovejas', reward: 140,
    tasks: [
      { item: 'minecraft:wheat', amount: 16, title: 'Trigo para ovejas' },
      { item: 'minecraft:mutton', amount: 4, title: 'Carne de cordero x4' },
      { item: 'minecraft:pink_wool', amount: 1, title: 'Lana rosada esquilada' },
      { item: 'minecraft:light_blue_wool', amount: 1, title: 'Lana celeste esquilada' },
      { item: 'minecraft:shears', amount: 1, title: 'Tijeras para esquilar' },
    ],
  },
  {
    day: 8, title: 'DIA 8 - Cría de cerdos', reward: 155,
    tasks: [
      { item: 'minecraft:carrot', amount: 12, title: 'Zanahorias para cerdos' },
      { item: 'minecraft:potato', amount: 8, title: 'Papas para cerdos' },
      { item: 'minecraft:porkchop', amount: 5, title: 'Chuletas de cerdo x5' },
      { item: 'minecraft:cooked_porkchop', amount: 3, title: 'Cerdo cocinado x3' },
      { item: 'minecraft:saddle', amount: 1, title: 'Montura para cerdo' },
    ],
  },
  {
    day: 9, title: 'DIA 9 - Granja avícola', reward: 175,
    tasks: [
      { item: 'minecraft:wheat_seeds', amount: 16, title: 'Semillas para pollos' },
      { item: 'minecraft:egg', amount: 6, title: 'Huevos recolectados x6' },
      { item: 'minecraft:feather', amount: 6, title: 'Plumas recolectadas x6' },
      { item: 'minecraft:chicken', amount: 4, title: 'Pollo crudo x4' },
      { item: 'minecraft:cooked_chicken', amount: 3, title: 'Pollo cocinado x3' },
    ],
  },
  {
    day: 10, title: 'DIA 10 - Granja de conejos', reward: 190,
    tasks: [
      { item: 'minecraft:rabbit_hide', amount: 3, title: 'Piel de conejo x3' },
      { item: 'minecraft:rabbit', amount: 2, title: 'Carne de conejo x2' },
      { item: 'minecraft:rabbit_foot', amount: 1, title: 'Pata de conejo de la suerte' },
      { item: 'minecraft:carrot', amount: 12, title: 'Zanahorias para conejos' },
      { item: 'minecraft:dandelion', amount: 3, title: 'Dientes de león para conejos' },
    ],
  },

  // ===== FASE 3: RANCHERO (D11-D15) =====
  {
    day: 11, title: 'DIA 11 - Domador de caballos', reward: 210,
    tasks: [
      { item: 'minecraft:saddle', amount: 1, title: 'Montura para caballo' },
      { item: 'minecraft:apple', amount: 5, title: 'Domestica con manzanas' },
      { item: 'minecraft:golden_apple', amount: 1, title: 'Manzana dorada de cría' },
      { item: 'minecraft:hay_block', amount: 4, title: 'Heno para caballos' },
      { item: 'minecraft:leather', amount: 6, title: 'Cuero acumulado del rancho' },
    ],
  },
  {
    day: 12, title: 'DIA 12 - Armadura equina', reward: 235,
    tasks: [
      { item: 'minecraft:iron_horse_armor', amount: 1, title: 'Armadura de hierro equina' },
      { item: 'minecraft:golden_horse_armor', amount: 1, title: 'Armadura dorada equina' },
      { item: 'minecraft:iron_ingot', amount: 4, title: 'Hierro para herraduras' },
      { item: 'minecraft:golden_carrot', amount: 2, title: 'Zanahoria dorada de cría' },
      { item: 'minecraft:name_tag', amount: 1, title: 'Etiqueta para tu caballo' },
    ],
  },
  {
    day: 13, title: 'DIA 13 - Caravana de llamas', reward: 255,
    tasks: [
      { item: 'minecraft:lead', amount: 2, title: 'Lazos para caravana' },
      { item: 'minecraft:white_carpet', amount: 3, title: 'Alfombras para llamas' },
      { item: 'minecraft:chest', amount: 1, title: 'Cofre en llama de carga' },
      { item: 'minecraft:leather', amount: 8, title: 'Cuero de llamas y vacas' },
      { item: 'minecraft:string', amount: 3, title: 'Hilo para lazos y alfombras' },
    ],
  },
  {
    day: 14, title: 'DIA 14 - Compañero fiel', reward: 280,
    tasks: [
      { item: 'minecraft:bone', amount: 8, title: 'Huesos para domesticar lobos' },
      { item: 'minecraft:cooked_beef', amount: 4, title: 'Carne para alimentar lobos' },
      { item: 'minecraft:rabbit', amount: 4, title: 'Carne para criar lobos' },
      { item: 'minecraft:lead', amount: 1, title: 'Lazo para pasear lobo' },
      { item: 'minecraft:string', amount: 3, title: 'Juguete de hilo para lobo' },
    ],
  },
  {
    day: 15, title: 'DIA 15 - Compañía felina', reward: 300,
    tasks: [
      { item: 'minecraft:cod', amount: 6, title: 'Bacalao para gatos' },
      { item: 'minecraft:salmon', amount: 4, title: 'Salmón para gatos' },
      { item: 'minecraft:tropical_fish', amount: 2, title: 'Pez tropical para gatos' },
      { item: 'minecraft:rabbit_foot', amount: 1, title: 'Pata de conejo de la suerte' },
      { item: 'minecraft:lead', amount: 1, title: 'Pasea a tu mascota' },
    ],
  },

  // ===== FASE 4: VETERINARIO (D16-D20) =====
  {
    day: 16, title: 'DIA 16 - Criadero de ajolotes', reward: 325,
    tasks: [
      { item: 'minecraft:tropical_fish_bucket', amount: 2, title: 'Cubo con pez tropical' },
      { item: 'minecraft:water_bucket', amount: 2, title: 'Cubo de agua' },
      { item: 'minecraft:axolotl_bucket', amount: 1, title: 'Captura un ajolote' },
      { item: 'minecraft:tropical_fish', amount: 4, title: 'Alimenta ajolotes' },
      { item: 'minecraft:kelp', amount: 6, title: 'Kelp para acuario' },
    ],
  },
  {
    day: 17, title: 'DIA 17 - Protección de tortugas', reward: 355,
    tasks: [
      { item: 'minecraft:turtle_egg', amount: 1, title: 'Recolecta huevo de tortuga' },
      { item: 'minecraft:turtle_scute', amount: 2, title: 'Escama de tortuga bebé' },
      { item: 'minecraft:seagrass', amount: 8, title: 'Alimenta y cría tortugas' },
      { item: 'minecraft:turtle_helmet', amount: 1, title: 'Casco de tortuga' },
      { item: 'minecraft:sand', amount: 16, title: 'Arena para nido' },
    ],
  },
  {
    day: 18, title: 'DIA 18 - Pantano viviente', reward: 380,
    tasks: [
      { item: 'minecraft:slime_ball', amount: 3, title: 'Bolas de slime para ranas' },
      { item: 'minecraft:water_bucket', amount: 1, title: 'Agua para ranas' },
      { item: 'minecraft:lily_pad', amount: 3, title: 'Hojas de nenúfar' },
      { item: 'minecraft:string', amount: 2, title: 'Hilo del pantano' },
      { item: 'minecraft:bone_meal', amount: 4, title: 'Fertiliza el hábitat' },
    ],
  },
  {
    day: 19, title: 'DIA 19 - Apicultor', reward: 405,
    tasks: [
      { item: 'minecraft:honeycomb', amount: 3, title: 'Panal de abejas' },
      { item: 'minecraft:honey_bottle', amount: 2, title: 'Botella de miel' },
      { item: 'minecraft:campfire', amount: 1, title: 'Fogata para cosecha segura' },
      { item: 'minecraft:glass_bottle', amount: 4, title: 'Botellas para miel' },
      { item: 'minecraft:shears', amount: 1, title: 'Tijeras para panal' },
    ],
  },
  {
    day: 20, title: 'DIA 20 - Transporte animal', reward: 430,
    tasks: [
      { item: 'minecraft:lead', amount: 2, title: 'Lazos para transporte' },
      { item: 'minecraft:oak_boat', amount: 2, title: 'Barcas para animales' },
      { item: 'minecraft:hay_block', amount: 4, title: 'Heno para atraer' },
      { item: 'minecraft:water_bucket', amount: 1, title: 'Canal de agua' },
      { item: 'minecraft:chest', amount: 2, title: 'Cofres de transporte' },
    ],
  },

  // ===== FASE 5: MAESTRO GANADERO (D21-D25) =====
  {
    day: 21, title: 'DIA 21 - Viajero del Nether', reward: 470,
    tasks: [
      { item: 'minecraft:warped_fungus', amount: 4, title: 'Hongo distorsionado' },
      { item: 'minecraft:warped_fungus_on_a_stick', amount: 1, title: 'Caña con hongo' },
      { item: 'minecraft:saddle', amount: 1, title: 'Montura para strider' },
      { item: 'minecraft:string', amount: 4, title: 'Hilo para caña' },
      { item: 'minecraft:fishing_rod', amount: 1, title: 'Caña de pescar base' },
    ],
  },
  {
    day: 22, title: 'DIA 22 - Bestia del Nether', reward: 505,
    tasks: [
      { item: 'minecraft:crimson_fungus', amount: 4, title: 'Hongo carmesí' },
      { item: 'minecraft:porkchop', amount: 6, title: 'Carne de cerdo del Nether' },
      { item: 'minecraft:cooked_porkchop', amount: 4, title: 'Cerdo cocinado x4' },
      { item: 'minecraft:leather', amount: 6, title: 'Cuero de hoglins' },
      { item: 'minecraft:gold_ingot', amount: 2, title: 'Oro para ahuyentar hoglins' },
    ],
  },
  {
    day: 23, title: 'DIA 23 - Fauna ártica', reward: 545,
    tasks: [
      { item: 'minecraft:salmon', amount: 6, title: 'Salmón para osos polares' },
      { item: 'minecraft:sweet_berries', amount: 8, title: 'Bayas para criar zorros' },
      { item: 'minecraft:wheat', amount: 12, title: 'Trigo para criar cabras' },
      { item: 'minecraft:goat_horn', amount: 1, title: 'Cuerno de cabra' },
      { item: 'minecraft:snow_block', amount: 8, title: 'Hábitat nevado' },
    ],
  },
  {
    day: 24, title: 'DIA 24 - Jungla exótica', reward: 580,
    tasks: [
      { item: 'minecraft:bamboo', amount: 16, title: 'Bambú para alimentar pandas' },
      { item: 'minecraft:wheat_seeds', amount: 8, title: 'Semillas para loros' },
      { item: 'minecraft:melon_slice', amount: 6, title: 'Sandía para enriquecimiento' },
      { item: 'minecraft:cocoa_beans', amount: 3, title: 'Cacao de la jungla' },
      { item: 'minecraft:vine', amount: 4, title: 'Lianas para hábitat selvático' },
    ],
  },
  {
    day: 25, title: 'DIA 25 - Caravana del desierto', reward: 620,
    tasks: [
      { item: 'minecraft:cactus', amount: 8, title: 'Cactus para camellos' },
      { item: 'minecraft:saddle', amount: 1, title: 'Montura para camello' },
      { item: 'minecraft:sand', amount: 16, title: 'Arena para hábitat desértico' },
      { item: 'minecraft:dead_bush', amount: 4, title: 'Arbustos secos' },
      { item: 'minecraft:rabbit_hide', amount: 3, title: 'Piel de conejo del desierto' },
    ],
  },

  // ===== FASE 6: LEYENDA DEL RANCHO (D26-D30) =====
  {
    day: 26, title: 'DIA 26 - Fósiles vivientes', reward: 755,
    tasks: [
      { item: 'minecraft:sniffer_egg', amount: 1, title: 'Huevo de sniffer' },
      { item: 'minecraft:torchflower_seeds', amount: 4, title: 'Semillas de flor antorcha' },
      { item: 'minecraft:pitcher_pod', amount: 2, title: 'Vaina de jarra' },
      { item: 'minecraft:moss_block', amount: 8, title: 'Musgo prehistórico' },
      { item: 'minecraft:bone', amount: 6, title: 'Fósiles para el sniffer' },
    ],
  },
  {
    day: 27, title: 'DIA 27 - Manada de lobos', reward: 890,
    tasks: [
      { item: 'minecraft:bone', amount: 16, title: 'Domestica 4+ lobos' },
      { item: 'minecraft:cooked_beef', amount: 10, title: 'Alimenta la manada' },
      { item: 'minecraft:lead', amount: 3, title: 'Lazos para la manada' },
      { item: 'minecraft:rotten_flesh', amount: 8, title: 'Protege de zombis' },
      { item: 'minecraft:name_tag', amount: 1, title: 'Nombra al lobo alfa' },
    ],
  },
  {
    day: 28, title: 'DIA 28 - Colección zoológica', reward: 1030,
    tasks: [
      { item: 'minecraft:name_tag', amount: 3, title: 'Nombra especies exóticas' },
      { item: 'minecraft:lead', amount: 4, title: 'Maneja tu colección' },
      { item: 'minecraft:golden_carrot', amount: 2, title: 'Cría equina de élite' },
      { item: 'minecraft:golden_apple', amount: 1, title: 'Cría equina suprema' },
      { item: 'minecraft:book', amount: 1, title: 'Registro de especies' },
    ],
  },
  {
    day: 29, title: 'DIA 29 - Rancho legendario', reward: 1165,
    tasks: [
      { item: 'minecraft:diamond_horse_armor', amount: 1, title: 'Armadura equina suprema' },
      { item: 'minecraft:hay_block', amount: 16, title: 'Heno para todo el rancho' },
      { item: 'minecraft:composter', amount: 3, title: 'Compost para pastizales' },
      { item: 'minecraft:water_bucket', amount: 3, title: 'Abrevaderos' },
      { item: 'minecraft:grass_block', amount: 8, title: 'Pasto para el rancho' },
    ],
  },
  {
    day: 30, title: 'DIA 30 - Leyenda del ganadero', reward: 1300,
    tasks: [
      { item: 'minecraft:diamond_horse_armor', amount: 1, title: 'Armadura equina diamantina' },
      { item: 'minecraft:golden_carrot', amount: 8, title: 'Cría equina perfecta' },
      { item: 'minecraft:saddle', amount: 2, title: 'Monturas supremas' },
      { item: 'minecraft:cake', amount: 2, title: 'Pastel de celebración' },
      { item: 'minecraft:name_tag', amount: 2, title: 'Bautiza a tus campeones' },
    ],
  },
];

writeQuests('ganadero', 'Ganadero', quests);
