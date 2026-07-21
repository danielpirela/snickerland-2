import { writeQuests } from './quest-template.mjs';

const quests = [
  // ========== DAYS 1-5: Aprendiz de obra ==========
  {
    day: 1, title: "DIA 1 - Primeros materiales", reward: 65,
    tasks: [
      { item: "minecraft:oak_planks", amount: 4, title: "Recolecta madera de roble x4" },
      { item: "minecraft:stone", amount: 8, title: "Pica piedra lisa x8" },
      { item: "minecraft:crafting_table", amount: 1, title: "Fabrica mesa de crafteo" },
      { item: "minecraft:furnace", amount: 1, title: "Construye un horno" },
      { item: "minecraft:stick", amount: 8, title: "Craftea palos x8" },
    ],
  },
  {
    day: 2, title: "DIA 2 - Herramientas básicas", reward: 75,
    tasks: [
      { item: "minecraft:cobblestone", amount: 8, title: "Recolecta roca x8" },
      { item: "minecraft:stone_pickaxe", amount: 1, title: "Fabrica pico de piedra" },
      { item: "minecraft:stone_axe", amount: 1, title: "Fabrica hacha de piedra" },
      { item: "minecraft:coal", amount: 4, title: "Encuentra carbón x4" },
      { item: "minecraft:stone_bricks", amount: 4, title: "Fabrica ladrillos de piedra x4" },
    ],
  },
  {
    day: 3, title: "DIA 3 - Carpintería inicial", reward: 85,
    tasks: [
      { item: "minecraft:oak_stairs", amount: 4, title: "Craftea escaleras de roble x4" },
      { item: "minecraft:oak_slab", amount: 4, title: "Craftea losas de roble x4" },
      { item: "minecraft:oak_fence", amount: 4, title: "Fabrica valla de roble x4" },
      { item: "minecraft:oak_door", amount: 1, title: "Construye puerta de roble" },
      { item: "minecraft:spruce_planks", amount: 4, title: "Recolecta madera de abeto x4" },
    ],
  },
  {
    day: 4, title: "DIA 4 - Fundición y vidrio", reward: 98,
    tasks: [
      { item: "minecraft:smooth_stone", amount: 4, title: "Funde piedra lisa x4" },
      { item: "minecraft:glass", amount: 4, title: "Fabrica bloques de vidrio x4" },
      { item: "minecraft:glass_pane", amount: 8, title: "Fabrica paneles de vidrio x8" },
      { item: "minecraft:torch", amount: 4, title: "Craftea antorchas x4" },
      { item: "minecraft:campfire", amount: 1, title: "Prepara una fogata" },
    ],
  },
  {
    day: 5, title: "DIA 5 - Mi primera casa", reward: 110,
    tasks: [
      { item: "minecraft:spruce_stairs", amount: 4, title: "Escaleras de abeto x4" },
      { item: "minecraft:spruce_slab", amount: 4, title: "Losas de abeto x4" },
      { item: "minecraft:spruce_fence", amount: 4, title: "Valla de abeto x4" },
      { item: "minecraft:spruce_door", amount: 1, title: "Puerta de abeto x1" },
      { item: "minecraft:chest", amount: 2, title: "Fabrica cofres x2" },
    ],
  },

  // ========== DAYS 6-10: Constructor ==========
  {
    day: 6, title: "DIA 6 - Cantería con Stoneworks", reward: 120,
    tasks: [
      { item: "minecraft:andesite", amount: 8, title: "Recolecta andesita x8" },
      { item: "minecraft:granite", amount: 8, title: "Recolecta granito x8" },
      { item: "minecraft:diorite", amount: 8, title: "Recolecta diorita x8" },
      { item: "minecraft:stonecutter", amount: 1, title: "Fabrica cortapiedras" },
      { item: "minecraft:chiseled_stone_bricks", amount: 4, title: "Piedra labrada cincelada x4" },
    ],
  },
  {
    day: 7, title: "DIA 7 - Variantes de piedra", reward: 135,
    tasks: [
      { item: "minecraft:calcite", amount: 8, title: "Recolecta calcita x8" },
      { item: "minecraft:tuff", amount: 8, title: "Recolecta toba x8" },
      { item: "minecraft:dripstone_block", amount: 4, title: "Recolecta espeleotema x4" },
      { item: "minecraft:polished_andesite", amount: 4, title: "Andesita pulida x4" },
      { item: "minecraft:polished_diorite", amount: 4, title: "Diorita pulida x4" },
    ],
  },
  {
    day: 8, title: "DIA 8 - Pizarra profunda", reward: 155,
    tasks: [
      { item: "minecraft:polished_deepslate", amount: 8, title: "Pizarra profunda pulida x8" },
      { item: "minecraft:deepslate_tiles", amount: 8, title: "Baldosas de pizarra x8" },
      { item: "minecraft:deepslate_bricks", amount: 8, title: "Ladrillos de pizarra x8" },
      { item: "minecraft:cracked_stone_bricks", amount: 4, title: "Ladrillos agrietados x4" },
      { item: "minecraft:mossy_stone_bricks", amount: 4, title: "Ladrillos musgosos x4" },
    ],
  },
  {
    day: 9, title: "DIA 9 - Techos y marcos", reward: 170,
    tasks: [
      { item: "minecraft:brick_stairs", amount: 8, title: "Escaleras de ladrillo x8" },
      { item: "minecraft:terracotta", amount: 8, title: "Recolecta terracota x8" },
      { item: "minecraft:oak_trapdoor", amount: 4, title: "Trampillas de roble x4" },
      { item: "minecraft:spruce_trapdoor", amount: 4, title: "Trampillas de abeto x4" },
      { item: "minecraft:brick_slab", amount: 4, title: "Losas de ladrillo x4" },
    ],
  },
  {
    day: 10, title: "DIA 10 - Muros y portones", reward: 190,
    tasks: [
      { item: "minecraft:stone_brick_wall", amount: 8, title: "Muro de piedra labrada x8" },
      { item: "minecraft:cobblestone_wall", amount: 8, title: "Muro de roca x8" },
      { item: "minecraft:iron_door", amount: 1, title: "Puerta de hierro x1" },
      { item: "minecraft:iron_bars", amount: 4, title: "Barrotes de hierro x4" },
      { item: "minecraft:smooth_stone_slab", amount: 4, title: "Losas de piedra lisa x4" },
    ],
  },

  // ========== DAYS 11-15: Decorador ==========
  {
    day: 11, title: "DIA 11 - Decoración interior", reward: 210,
    tasks: [
      { item: "minecraft:painting", amount: 2, title: "Cuelga cuadros x2" },
      { item: "minecraft:item_frame", amount: 2, title: "Coloca marcos x2" },
      { item: "minecraft:flower_pot", amount: 2, title: "Fabrica macetas x2" },
      { item: "minecraft:bookshelf", amount: 2, title: "Estanterías x2" },
      { item: "minecraft:white_carpet", amount: 4, title: "Alfombra blanca x4" },
    ],
  },
  {
    day: 12, title: "DIA 12 - Iluminación artística", reward: 230,
    tasks: [
      { item: "minecraft:lantern", amount: 4, title: "Fabrica faroles x4" },
      { item: "minecraft:soul_lantern", amount: 2, title: "Farol de almas x2" },
      { item: "minecraft:candle", amount: 4, title: "Craftea velas x4" },
      { item: "minecraft:sea_lantern", amount: 2, title: "Linterna marina x2" },
      { item: "minecraft:glowstone", amount: 4, title: "Piedra luminosa x4" },
    ],
  },
  {
    day: 13, title: "DIA 13 - Estaciones de trabajo", reward: 255,
    tasks: [
      { item: "minecraft:loom", amount: 1, title: "Fabrica telar" },
      { item: "minecraft:smithing_table", amount: 1, title: "Mesa de herrería" },
      { item: "minecraft:fletching_table", amount: 1, title: "Mesa de flechas" },
      { item: "minecraft:cartography_table", amount: 1, title: "Mesa de cartografía" },
      { item: "minecraft:grindstone", amount: 1, title: "Afiladora" },
    ],
  },
  {
    day: 14, title: "DIA 14 - Estandartes y cadenas", reward: 275,
    tasks: [
      { item: "minecraft:white_banner", amount: 2, title: "Craftea estandartes x2" },
      { item: "minecraft:bell", amount: 1, title: "Fabrica campana" },
      { item: "minecraft:chain", amount: 8, title: "Craftea cadenas x8" },
      { item: "minecraft:lightning_rod", amount: 2, title: "Pararrayos x2" },
      { item: "minecraft:armor_stand", amount: 1, title: "Soporte de armadura" },
    ],
  },
  {
    day: 15, title: "DIA 15 - Jardinería ornamental", reward: 300,
    tasks: [
      { item: "minecraft:composter", amount: 1, title: "Fabrica compostador" },
      { item: "minecraft:azalea", amount: 4, title: "Consigue azalea x4" },
      { item: "minecraft:flowering_azalea_leaves", amount: 4, title: "Azalea floreciente x4" },
      { item: "minecraft:moss_block", amount: 4, title: "Bloque de musgo x4" },
      { item: "minecraft:moss_carpet", amount: 4, title: "Alfombra de musgo x4" },
    ],
  },

  // ========== DAYS 16-20: Arquitecto de biomas ==========
  {
    day: 16, title: "DIA 16 - Cerezo en flor", reward: 330,
    tasks: [
      { item: "minecraft:cherry_planks", amount: 8, title: "Madera de cerezo x8" },
      { item: "minecraft:cherry_stairs", amount: 4, title: "Escaleras de cerezo x4" },
      { item: "minecraft:cherry_slab", amount: 4, title: "Losas de cerezo x4" },
      { item: "minecraft:cherry_door", amount: 1, title: "Puerta de cerezo x1" },
      { item: "minecraft:pink_petals", amount: 4, title: "Pétalos rosas x4" },
    ],
  },
  {
    day: 17, title: "DIA 17 - Paraíso tropical", reward: 355,
    tasks: [
      { item: "minecraft:jungle_planks", amount: 8, title: "Madera de jungla x8" },
      { item: "minecraft:bamboo_block", amount: 4, title: "Bloque de bambú x4" },
      { item: "minecraft:jungle_stairs", amount: 4, title: "Escaleras de jungla x4" },
      { item: "minecraft:jungle_slab", amount: 4, title: "Losas de jungla x4" },
      { item: "minecraft:vine", amount: 4, title: "Enredaderas x4" },
    ],
  },
  {
    day: 18, title: "DIA 18 - Mansión de caoba", reward: 380,
    tasks: [
      { item: "minecraft:dark_oak_planks", amount: 8, title: "Madera de roble oscuro x8" },
      { item: "minecraft:dark_oak_stairs", amount: 4, title: "Escaleras oscuras x4" },
      { item: "minecraft:dark_oak_slab", amount: 4, title: "Losas oscuras x4" },
      { item: "minecraft:dark_oak_fence", amount: 4, title: "Valla de roble oscuro x4" },
      { item: "minecraft:dark_oak_door", amount: 1, title: "Puerta de roble oscuro" },
    ],
  },
  {
    day: 19, title: "DIA 19 - Refugio alpino", reward: 405,
    tasks: [
      { item: "minecraft:birch_planks", amount: 8, title: "Madera de abedul x8" },
      { item: "minecraft:birch_stairs", amount: 4, title: "Escaleras de abedul x4" },
      { item: "minecraft:birch_slab", amount: 4, title: "Losas de abedul x4" },
      { item: "minecraft:spruce_log", amount: 4, title: "Tronco de abeto x4" },
      { item: "minecraft:campfire", amount: 2, title: "Hogueras x2" },
    ],
  },
  {
    day: 20, title: "DIA 20 - Arte en hormigón", reward: 430,
    tasks: [
      { item: "minecraft:white_concrete", amount: 8, title: "Hormigón blanco x8" },
      { item: "minecraft:light_blue_concrete", amount: 4, title: "Hormigón celeste x4" },
      { item: "minecraft:cyan_concrete", amount: 4, title: "Hormigón cian x4" },
      { item: "minecraft:gray_concrete", amount: 8, title: "Hormigón gris x8" },
      { item: "minecraft:black_concrete", amount: 4, title: "Hormigón negro x4" },
    ],
  },

  // ========== DAYS 21-25: Ingeniero estructural ==========
  {
    day: 21, title: "DIA 21 - Fuente y acueducto", reward: 455,
    tasks: [
      { item: "minecraft:prismarine_bricks", amount: 8, title: "Ladrillos de prismarina x8" },
      { item: "minecraft:dark_prismarine", amount: 4, title: "Prismarina oscura x4" },
      { item: "minecraft:sea_lantern", amount: 4, title: "Linternas marinas x4" },
      { item: "minecraft:prismarine", amount: 8, title: "Prismarina x8" },
      { item: "minecraft:water_bucket", amount: 1, title: "Cubo de agua x1" },
    ],
  },
  {
    day: 22, title: "DIA 22 - El gran puente", reward: 490,
    tasks: [
      { item: "minecraft:polished_blackstone_bricks", amount: 8, title: "Piedra negra pulida x8" },
      { item: "minecraft:blackstone_wall", amount: 8, title: "Muro de piedra negra x8" },
      { item: "minecraft:stone_brick_stairs", amount: 8, title: "Escaleras de piedra x8" },
      { item: "minecraft:chain", amount: 8, title: "Cadenas tensadas x8" },
      { item: "minecraft:iron_bars", amount: 4, title: "Barrotes de hierro x4" },
    ],
  },
  {
    day: 23, title: "DIA 23 - Torre de vigilancia", reward: 525,
    tasks: [
      { item: "minecraft:smooth_stone", amount: 8, title: "Piedra lisa pulida x8" },
      { item: "minecraft:cobblestone_wall", amount: 4, title: "Muro de roca x4" },
      { item: "minecraft:ladder", amount: 4, title: "Escaleras de mano x4" },
      { item: "minecraft:oak_fence_gate", amount: 2, title: "Puerta de valla x2" },
      { item: "minecraft:lightning_rod", amount: 2, title: "Pararrayos en torre x2" },
    ],
  },
  {
    day: 24, title: "DIA 24 - Puertas mecánicas", reward: 570,
    tasks: [
      { item: "minecraft:sticky_piston", amount: 4, title: "Pistón pegajoso x4" },
      { item: "minecraft:redstone_block", amount: 2, title: "Bloque de redstone x2" },
      { item: "minecraft:observer", amount: 2, title: "Observador x2" },
      { item: "minecraft:note_block", amount: 4, title: "Bloque musical x4" },
      { item: "minecraft:iron_door", amount: 2, title: "Puertas de hierro x2" },
    ],
  },
  {
    day: 25, title: "DIA 25 - Arco del triunfo", reward: 620,
    tasks: [
      { item: "minecraft:polished_andesite", amount: 8, title: "Andesita pulida x8" },
      { item: "minecraft:chiseled_stone_bricks", amount: 4, title: "Piedra cincelada x4" },
      { item: "minecraft:smooth_quartz", amount: 8, title: "Cuarzo liso x8" },
      { item: "minecraft:glowstone", amount: 4, title: "Piedra luminosa x4" },
      { item: "minecraft:smooth_sandstone", amount: 4, title: "Arenisca lisa x4" },
    ],
  },

  // ========== DAYS 26-30: Maestro arquitecto ==========
  {
    day: 26, title: "DIA 26 - Fortaleza medieval", reward: 690,
    tasks: [
      { item: "minecraft:stone_bricks", amount: 16, title: "Ladrillos de piedra x16" },
      { item: "minecraft:mossy_stone_bricks", amount: 8, title: "Piedra musgosa x8" },
      { item: "minecraft:cracked_stone_bricks", amount: 8, title: "Piedra agrietada x8" },
      { item: "minecraft:stone_brick_wall", amount: 8, title: "Almenas x8" },
      { item: "minecraft:iron_bars", amount: 8, title: "Barrotes defensivos x8" },
    ],
  },
  {
    day: 27, title: "DIA 27 - Catedral de vitrales", reward: 800,
    tasks: [
      { item: "minecraft:purple_stained_glass", amount: 8, title: "Vitral púrpura x8" },
      { item: "minecraft:magenta_stained_glass", amount: 4, title: "Vitral magenta x4" },
      { item: "minecraft:blue_stained_glass", amount: 4, title: "Vitral azul x4" },
      { item: "minecraft:cyan_stained_glass", amount: 4, title: "Vitral cian x4" },
      { item: "minecraft:quartz_pillar", amount: 8, title: "Pilar de cuarzo x8" },
    ],
  },
  {
    day: 28, title: "DIA 28 - Villa moderna minimalista", reward: 940,
    tasks: [
      { item: "minecraft:quartz_block", amount: 8, title: "Bloque de cuarzo x8" },
      { item: "minecraft:quartz_stairs", amount: 8, title: "Escaleras de cuarzo x8" },
      { item: "minecraft:quartz_slab", amount: 8, title: "Losas de cuarzo x8" },
      { item: "minecraft:white_concrete", amount: 8, title: "Hormigón blanco x8" },
      { item: "minecraft:tinted_glass", amount: 8, title: "Vidrio opaco moderno x8" },
    ],
  },
  {
    day: 29, title: "DIA 29 - Fortaleza del Nether", reward: 1100,
    tasks: [
      { item: "minecraft:nether_bricks", amount: 16, title: "Ladrillos del Nether x16" },
      { item: "minecraft:red_nether_bricks", amount: 8, title: "Ladrillos rojos infernales x8" },
      { item: "minecraft:nether_brick_stairs", amount: 8, title: "Escaleras infernales x8" },
      { item: "minecraft:nether_brick_fence", amount: 8, title: "Valla infernal x8" },
      { item: "minecraft:shroomlight", amount: 4, title: "Luz de champiñón x4" },
    ],
  },
  {
    day: 30, title: "DIA 30 - Ciudadela del End", reward: 1300,
    tasks: [
      { item: "minecraft:end_stone_bricks", amount: 16, title: "Ladrillos de piedra del End x16" },
      { item: "minecraft:purpur_block", amount: 8, title: "Bloque de purpur x8" },
      { item: "minecraft:purpur_pillar", amount: 8, title: "Pilar de purpur x8" },
      { item: "minecraft:purpur_stairs", amount: 8, title: "Escaleras de purpur x8" },
      { item: "minecraft:end_rod", amount: 8, title: "Varillas del End x8" },
    ],
  },
];

writeQuests('arquitecto', 'Arquitecto', quests);
