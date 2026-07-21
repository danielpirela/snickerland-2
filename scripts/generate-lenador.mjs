import { writeQuests } from './quest-template.mjs';

const quests = [
  // ═══════════════════════════════════════════
  // D1-5: LEÑADOR NOVATO (65 → 110)
  // ═══════════════════════════════════════════
  {
    day: 1, title: 'DIA 1 - Primer contacto con el bosque', reward: 65,
    tasks: [
      { item: 'minecraft:oak_log', amount: 3, title: 'Tala roble x3' },
      { item: 'minecraft:birch_log', amount: 3, title: 'Tala abedul x3' },
      { item: 'minecraft:stick', amount: 4, title: 'Fabrica palos x4' },
      { item: 'minecraft:oak_planks', amount: 8, title: 'Fabrica tablones de roble x8' },
      { item: 'minecraft:oak_sapling', amount: 1, title: 'Recolecta brote de roble x1' },
    ],
  },
  {
    day: 2, title: 'DIA 2 - Herramientas básicas', reward: 76,
    tasks: [
      { item: 'minecraft:spruce_log', amount: 3, title: 'Tala abeto x3' },
      { item: 'minecraft:crafting_table', amount: 1, title: 'Fabrica mesa de crafteo x1' },
      { item: 'minecraft:wooden_axe', amount: 1, title: 'Fabrica hacha de madera x1' },
      { item: 'minecraft:wooden_pickaxe', amount: 1, title: 'Fabrica pico de madera x1' },
      { item: 'minecraft:spruce_sapling', amount: 1, title: 'Recolecta brote de abeto x1' },
    ],
  },
  {
    day: 3, title: 'DIA 3 - Almacenamiento forestal', reward: 87,
    tasks: [
      { item: 'minecraft:chest', amount: 1, title: 'Fabrica cofre x1' },
      { item: 'minecraft:oak_log', amount: 10, title: 'Tala roble x10' },
      { item: 'minecraft:stick', amount: 16, title: 'Fabrica palos x16' },
      { item: 'minecraft:wooden_sword', amount: 1, title: 'Fabrica espada de madera x1' },
      { item: 'minecraft:birch_sapling', amount: 1, title: 'Recolecta brote de abedul x1' },
    ],
  },
  {
    day: 4, title: 'DIA 4 - El primer vivero', reward: 98,
    tasks: [
      { item: 'minecraft:acacia_log', amount: 3, title: 'Tala acacia x3' },
      { item: 'minecraft:oak_planks', amount: 64, title: 'Fabrica tablones de roble x64 (1 stack)' },
      { item: 'minecraft:wooden_hoe', amount: 1, title: 'Fabrica azada de madera x1' },
      { item: 'minecraft:wooden_shovel', amount: 1, title: 'Fabrica pala de madera x1' },
      { item: 'minecraft:acacia_sapling', amount: 1, title: 'Recolecta brote de acacia x1' },
    ],
  },
  {
    day: 5, title: 'DIA 5 - El hacha de piedra', reward: 110,
    tasks: [
      { item: 'minecraft:dark_oak_log', amount: 5, title: 'Tala roble oscuro x5' },
      { item: 'minecraft:stone_axe', amount: 1, title: 'Fabrica hacha de piedra x1' },
      { item: 'minecraft:ladder', amount: 8, title: 'Fabrica escaleras x8' },
      { item: 'minecraft:fence', amount: 8, title: 'Fabrica vallas x8' },
      { item: 'minecraft:dark_oak_sapling', amount: 1, title: 'Recolecta brote de roble oscuro x1' },
    ],
  },

  // ═══════════════════════════════════════════
  // D6-10: TALADOR (126 → 190)
  // ═══════════════════════════════════════════
  {
    day: 6, title: 'DIA 6 - Expedición a la jungla', reward: 126,
    tasks: [
      { item: 'minecraft:jungle_log', amount: 8, title: 'Tala jungla x8' },
      { item: 'minecraft:cherry_log', amount: 3, title: 'Tala cerezo x3' },
      { item: 'minecraft:oak_log', amount: 64, title: 'Tala roble x64 (1 stack)' },
      { item: 'minecraft:oak_stairs', amount: 8, title: 'Fabrica escalones de roble x8' },
      { item: 'minecraft:jungle_sapling', amount: 2, title: 'Recolecta brote de jungla x2' },
    ],
  },
  {
    day: 7, title: 'DIA 7 - Construyendo la cabaña', reward: 142,
    tasks: [
      { item: 'minecraft:mangrove_log', amount: 5, title: 'Tala manglar x5' },
      { item: 'minecraft:oak_slab', amount: 16, title: 'Fabrica losas de roble x16' },
      { item: 'minecraft:birch_log', amount: 32, title: 'Tala abedul x32' },
      { item: 'minecraft:fence_gate', amount: 2, title: 'Fabrica puertas de valla x2' },
      { item: 'minecraft:mangrove_propagule', amount: 1, title: 'Recolecta propágulo de manglar x1' },
    ],
  },
  {
    day: 8, title: 'DIA 8 - Puertas del bosque', reward: 158,
    tasks: [
      { item: 'minecraft:spruce_log', amount: 32, title: 'Tala abeto x32' },
      { item: 'minecraft:oak_door', amount: 2, title: 'Fabrica puerta de roble x2' },
      { item: 'minecraft:spruce_door', amount: 1, title: 'Fabrica puerta de abeto x1' },
      { item: 'minecraft:birch_door', amount: 1, title: 'Fabrica puerta de abedul x1' },
      { item: 'minecraft:spruce_sapling', amount: 3, title: 'Recolecta brote de abeto x3' },
    ],
  },
  {
    day: 9, title: 'DIA 9 - Trampillas y carteles', reward: 174,
    tasks: [
      { item: 'minecraft:dark_oak_log', amount: 16, title: 'Tala roble oscuro x16' },
      { item: 'minecraft:oak_trapdoor', amount: 4, title: 'Fabrica trampilla de roble x4' },
      { item: 'minecraft:acacia_log', amount: 32, title: 'Tala acacia x32' },
      { item: 'minecraft:sign', amount: 3, title: 'Fabrica carteles x3' },
      { item: 'minecraft:dark_oak_sapling', amount: 3, title: 'Recolecta brote de roble oscuro x3' },
    ],
  },
  {
    day: 10, title: 'DIA 10 - La casa del árbol', reward: 190,
    tasks: [
      { item: 'minecraft:jungle_log', amount: 64, title: 'Tala jungla x64 (1 stack)' },
      { item: 'minecraft:spruce_planks', amount: 64, title: 'Fabrica tablones de abeto x64' },
      { item: 'minecraft:oak_fence', amount: 32, title: 'Fabrica vallas de roble x32' },
      { item: 'minecraft:ladder', amount: 16, title: 'Fabrica escaleras x16' },
      { item: 'minecraft:cherry_sapling', amount: 2, title: 'Recolecta brote de cerezo x2' },
    ],
  },

  // ═══════════════════════════════════════════
  // D11-15: CARPINTERO (212 → 300)
  // ═══════════════════════════════════════════
  {
    day: 11, title: 'DIA 11 - Herrero de carbón', reward: 212,
    tasks: [
      { item: 'minecraft:charcoal', amount: 8, title: 'Produce carbón vegetal x8' },
      { item: 'minecraft:torch', amount: 16, title: 'Fabrica antorchas x16' },
      { item: 'minecraft:campfire', amount: 2, title: 'Fabrica fogata x2' },
      { item: 'minecraft:oak_log', amount: 32, title: 'Tala roble x32' },
      { item: 'minecraft:iron_axe', amount: 1, title: 'Fabrica hacha de hierro x1' },
    ],
  },
  {
    day: 12, title: 'DIA 12 - Navegante maderero', reward: 234,
    tasks: [
      { item: 'minecraft:oak_boat', amount: 1, title: 'Fabrica bote de roble x1' },
      { item: 'minecraft:birch_boat', amount: 1, title: 'Fabrica bote de abedul x1' },
      { item: 'minecraft:spruce_boat', amount: 1, title: 'Fabrica bote de abeto x1' },
      { item: 'minecraft:mangrove_log', amount: 16, title: 'Tala manglar x16' },
      { item: 'minecraft:mangrove_propagule', amount: 3, title: 'Recolecta propágulo de manglar x3' },
    ],
  },
  {
    day: 13, title: 'DIA 13 - Toneles y composta', reward: 256,
    tasks: [
      { item: 'minecraft:barrel', amount: 2, title: 'Fabrica barril x2' },
      { item: 'minecraft:composter', amount: 2, title: 'Fabrica compostador x2' },
      { item: 'minecraft:bookshelf', amount: 3, title: 'Fabrica librería x3' },
      { item: 'minecraft:dark_oak_log', amount: 32, title: 'Tala roble oscuro x32' },
      { item: 'minecraft:cherry_log', amount: 16, title: 'Tala cerezo x16' },
    ],
  },
  {
    day: 14, title: 'DIA 14 - Música del bosque', reward: 278,
    tasks: [
      { item: 'minecraft:jukebox', amount: 1, title: 'Fabrica tocadiscos x1' },
      { item: 'minecraft:note_block', amount: 3, title: 'Fabrica bloque musical x3' },
      { item: 'minecraft:loom', amount: 1, title: 'Fabrica telar x1' },
      { item: 'minecraft:spruce_log', amount: 64, title: 'Tala abeto x64 (1 stack)' },
      { item: 'minecraft:acacia_sapling', amount: 5, title: 'Recolecta brote de acacia x5' },
    ],
  },
  {
    day: 15, title: 'DIA 15 - Mobiliario completo', reward: 300,
    tasks: [
      { item: 'minecraft:cartography_table', amount: 1, title: 'Fabrica mesa de cartografía x1' },
      { item: 'minecraft:fletching_table', amount: 1, title: 'Fabrica mesa de flechas x1' },
      { item: 'minecraft:smithing_table', amount: 1, title: 'Fabrica mesa de herrería x1' },
      { item: 'minecraft:hanging_sign', amount: 3, title: 'Fabrica letrero colgante x3' },
      { item: 'minecraft:cherry_log', amount: 32, title: 'Tala cerezo x32' },
    ],
  },

  // ═══════════════════════════════════════════
  // D16-20: EXPLORADOR FORESTAL (326 → 430)
  // ═══════════════════════════════════════════
  {
    day: 16, title: 'DIA 16 - Pinos gigantes', reward: 326,
    tasks: [
      { item: 'biomesoplenty:fir_log', amount: 10, title: 'Tala abeto BOP x10' },
      { item: 'biomesoplenty:redwood_log', amount: 8, title: 'Tala secuoya x8' },
      { item: 'biomesoplenty:fir_sapling', amount: 1, title: 'Recolecta brote de abeto BOP x1' },
      { item: 'biomesoplenty:redwood_sapling', amount: 1, title: 'Recolecta brote de secuoya x1' },
      { item: 'minecraft:oak_log', amount: 128, title: 'Tala roble x128 (2 stacks)' },
    ],
  },
  {
    day: 17, title: 'DIA 17 - Maderas exóticas', reward: 352,
    tasks: [
      { item: 'biomesoplenty:mahogany_log', amount: 8, title: 'Tala caoba x8' },
      { item: 'biomesoplenty:palm_log', amount: 8, title: 'Tala palmera x8' },
      { item: 'biomesoplenty:willow_log', amount: 8, title: 'Tala sauce x8' },
      { item: 'biomesoplenty:mahogany_sapling', amount: 1, title: 'Recolecta brote de caoba x1' },
      { item: 'biomesoplenty:palm_sapling', amount: 1, title: 'Recolecta brote de palmera x1' },
    ],
  },
  {
    day: 18, title: 'DIA 18 - Bosques místicos', reward: 378,
    tasks: [
      { item: 'biomesoplenty:magic_log', amount: 6, title: 'Tala madera mágica x6' },
      { item: 'biomesoplenty:dead_log', amount: 8, title: 'Tala madera muerta x8' },
      { item: 'biomesoplenty:hellbark_log', amount: 5, title: 'Tala corteza infernal x5' },
      { item: 'biomesoplenty:magic_sapling', amount: 1, title: 'Recolecta brote mágico x1' },
      { item: 'biomesoplenty:willow_sapling', amount: 1, title: 'Recolecta brote de sauce x1' },
    ],
  },
  {
    day: 19, title: 'DIA 19 - Jacarandá y bambú', reward: 404,
    tasks: [
      { item: 'biomesoplenty:jacaranda_log', amount: 8, title: 'Tala jacarandá x8' },
      { item: 'minecraft:bamboo', amount: 32, title: 'Recolecta bambú x32' },
      { item: 'biomesoplenty:jacaranda_sapling', amount: 2, title: 'Recolecta brote de jacarandá x2' },
      { item: 'minecraft:bamboo_block', amount: 4, title: 'Fabrica bloque de bambú x4' },
      { item: 'minecraft:cherry_log', amount: 32, title: 'Tala cerezo x32' },
    ],
  },
  {
    day: 20, title: 'DIA 20 - Colección de brotes', reward: 430,
    tasks: [
      { item: 'biomesoplenty:dead_sapling', amount: 1, title: 'Recolecta brote muerto x1' },
      { item: 'biomesoplenty:hellbark_sapling', amount: 1, title: 'Recolecta brote infernal x1' },
      { item: 'minecraft:cherry_sapling', amount: 5, title: 'Recolecta brote de cerezo x5' },
      { item: 'minecraft:bamboo', amount: 64, title: 'Recolecta bambú x64 (1 stack)' },
      { item: 'minecraft:dark_oak_log', amount: 64, title: 'Tala roble oscuro x64' },
    ],
  },

  // ═══════════════════════════════════════════
  // D21-25: MAESTRO MADERERO (468 → 620)
  // ═══════════════════════════════════════════
  {
    day: 21, title: 'DIA 21 - Granja de árboles', reward: 468,
    tasks: [
      { item: 'minecraft:oak_sapling', amount: 64, title: 'Recolecta brote de roble x64' },
      { item: 'minecraft:birch_sapling', amount: 32, title: 'Recolecta brote de abedul x32' },
      { item: 'minecraft:spruce_sapling', amount: 32, title: 'Recolecta brote de abeto x32' },
      { item: 'minecraft:composter', amount: 4, title: 'Fabrica compostador x4' },
      { item: 'minecraft:birch_log', amount: 128, title: 'Tala abedul x128 (2 stacks)' },
    ],
  },
  {
    day: 22, title: 'DIA 22 - Maderas del pantano', reward: 506,
    tasks: [
      { item: 'minecraft:mangrove_log', amount: 64, title: 'Tala manglar x64' },
      { item: 'minecraft:mangrove_roots', amount: 16, title: 'Recolecta raíces de manglar x16' },
      { item: 'minecraft:muddy_mangrove_roots', amount: 8, title: 'Recolecta raíces fangosas x8' },
      { item: 'minecraft:mangrove_propagule', amount: 8, title: 'Recolecta propágulo de manglar x8' },
      { item: 'minecraft:mangrove_boat', amount: 1, title: 'Fabrica bote de manglar x1' },
    ],
  },
  {
    day: 23, title: 'DIA 23 - Botes coleccionista', reward: 544,
    tasks: [
      { item: 'minecraft:jungle_boat', amount: 1, title: 'Fabrica bote de jungla x1' },
      { item: 'minecraft:acacia_boat', amount: 1, title: 'Fabrica bote de acacia x1' },
      { item: 'minecraft:dark_oak_boat', amount: 1, title: 'Fabrica bote de roble oscuro x1' },
      { item: 'minecraft:cherry_boat', amount: 1, title: 'Fabrica bote de cerezo x1' },
      { item: 'minecraft:acacia_log', amount: 64, title: 'Tala acacia x64' },
    ],
  },
  {
    day: 24, title: 'DIA 24 - El aserradero', reward: 582,
    tasks: [
      { item: 'minecraft:oak_log', amount: 256, title: 'Tala roble x256 (4 stacks)' },
      { item: 'minecraft:spruce_log', amount: 128, title: 'Tala abeto x128 (2 stacks)' },
      { item: 'minecraft:chest', amount: 4, title: 'Fabrica cofre x4' },
      { item: 'minecraft:charcoal', amount: 32, title: 'Produce carbón vegetal x32' },
      { item: 'minecraft:diamond_axe', amount: 1, title: 'Fabrica hacha de diamante x1' },
    ],
  },
  {
    day: 25, title: 'DIA 25 - Carpintería industrial', reward: 620,
    tasks: [
      { item: 'minecraft:oak_planks', amount: 256, title: 'Fabrica tablones de roble x256 (4 stacks)' },
      { item: 'minecraft:jungle_log', amount: 128, title: 'Tala jungla x128 (2 stacks)' },
      { item: 'minecraft:dark_oak_log', amount: 128, title: 'Tala roble oscuro x128 (2 stacks)' },
      { item: 'minecraft:stick', amount: 128, title: 'Fabrica palos x128' },
      { item: 'minecraft:barrel', amount: 8, title: 'Fabrica barril x8' },
    ],
  },

  // ═══════════════════════════════════════════
  // D26-30: LEYENDA DEL BOSQUE (756 → 1300)
  // ═══════════════════════════════════════════
  {
    day: 26, title: 'DIA 26 - Maderas del Nether', reward: 756,
    tasks: [
      { item: 'minecraft:crimson_stem', amount: 16, title: 'Tala tallo carmesí x16' },
      { item: 'minecraft:warped_stem', amount: 16, title: 'Tala tallo distorsionado x16' },
      { item: 'minecraft:crimson_fungus', amount: 3, title: 'Recolecta hongo carmesí x3' },
      { item: 'minecraft:warped_fungus', amount: 3, title: 'Recolecta hongo distorsionado x3' },
      { item: 'minecraft:netherite_axe', amount: 1, title: 'Fabrica hacha de netherita x1' },
    ],
  },
  {
    day: 27, title: 'DIA 27 - Colmenar del bosque', reward: 892,
    tasks: [
      { item: 'minecraft:bee_nest', amount: 1, title: 'Encuentra nido de abejas x1' },
      { item: 'minecraft:beehive', amount: 2, title: 'Fabrica colmena x2' },
      { item: 'minecraft:honeycomb', amount: 8, title: 'Recolecta panal x8' },
      { item: 'minecraft:birch_log', amount: 128, title: 'Tala abedul x128 (2 stacks)' },
      { item: 'minecraft:azalea', amount: 8, title: 'Recolecta azalea x8' },
    ],
  },
  {
    day: 28, title: 'DIA 28 - Árboles ornamentales', reward: 1028,
    tasks: [
      { item: 'minecraft:flowering_azalea', amount: 8, title: 'Recolecta azalea florecida x8' },
      { item: 'minecraft:moss_block', amount: 16, title: 'Recolecta bloque de musgo x16' },
      { item: 'minecraft:rooted_dirt', amount: 8, title: 'Recolecta tierra enraizada x8' },
      { item: 'minecraft:oak_leaves', amount: 64, title: 'Recolecta hojas de roble x64' },
      { item: 'minecraft:spore_blossom', amount: 2, title: 'Recolecta flor de esporas x2' },
    ],
  },
  {
    day: 29, title: 'DIA 29 - La colección definitiva', reward: 1164,
    tasks: [
      { item: 'biomesoplenty:fir_log', amount: 64, title: 'Tala abeto BOP x64' },
      { item: 'biomesoplenty:redwood_log', amount: 64, title: 'Tala secuoya x64' },
      { item: 'minecraft:oak_log', amount: 512, title: 'Tala roble x512 (8 stacks)' },
      { item: 'minecraft:soul_campfire', amount: 2, title: 'Fabrica fogata de almas x2' },
      { item: 'minecraft:scaffolding', amount: 32, title: 'Fabrica andamios x32' },
    ],
  },
  {
    day: 30, title: 'DIA 30 - Leyenda del bosque', reward: 1300,
    tasks: [
      { item: 'minecraft:crimson_stem', amount: 64, title: 'Tala tallo carmesí x64' },
      { item: 'minecraft:warped_stem', amount: 64, title: 'Tala tallo distorsionado x64' },
      { item: 'minecraft:oak_log', amount: 1024, title: 'Tala roble x1024 (16 stacks)' },
      { item: 'biomesoplenty:magic_log', amount: 32, title: 'Tala madera mágica x32' },
      { item: 'biomesoplenty:jacaranda_log', amount: 32, title: 'Tala jacarandá x32' },
    ],
  },
];

writeQuests('lenador', 'Lenador', quests);
