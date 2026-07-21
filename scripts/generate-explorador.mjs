import { writeQuests } from './quest-template.mjs';

const quests = [
  // ══════ TROTAMUNDOS (D1-D5) — Surface exploration ══════
  {
    day: 1, title: 'DÍA 1 - Trotamundos principiante', reward: 65,
    tasks: [
      { item: 'minecraft:torch', amount: 2, title: 'Craftea antorchas x2' },
      { item: 'minecraft:oak_boat', amount: 2, title: 'Fabrica bote de roble x2' },
      { item: 'minecraft:compass', amount: 1, title: 'Consigue brújula x1' },
      { item: 'minecraft:map', amount: 1, title: 'Crea mapa x1' },
      { item: 'minecraft:bread', amount: 1, title: 'Pan para el viaje x1' },
    ],
  },
  {
    day: 2, title: 'DÍA 2 - Navegante de ríos', reward: 75,
    tasks: [
      { item: 'minecraft:spruce_boat', amount: 1, title: 'Fabrica bote de abeto x1' },
      { item: 'minecraft:sugar_cane', amount: 3, title: 'Recolecta caña de azúcar x3' },
      { item: 'minecraft:clay_ball', amount: 4, title: 'Excava arcilla del río x4' },
      { item: 'minecraft:salmon', amount: 2, title: 'Pesca salmón x2' },
      { item: 'minecraft:lily_pad', amount: 3, title: 'Recoge nenúfares x3' },
    ],
  },
  {
    day: 3, title: 'DÍA 3 - Descubridor de aldeas', reward: 85,
    tasks: [
      { item: 'minecraft:wheat_seeds', amount: 4, title: 'Recolecta semillas de trigo x4' },
      { item: 'minecraft:leather', amount: 3, title: 'Consigue cuero x3' },
      { item: 'minecraft:white_wool', amount: 4, title: 'Esquila ovejas blancas x4' },
      { item: 'minecraft:bell', amount: 1, title: 'Encuentra campana de aldea x1' },
      { item: 'minecraft:oak_sapling', amount: 4, title: 'Planta robles jóvenes x4' },
    ],
  },
  {
    day: 4, title: 'DÍA 4 - Guardabosques', reward: 95,
    tasks: [
      { item: 'minecraft:oak_log', amount: 5, title: 'Tala roble x5' },
      { item: 'minecraft:birch_log', amount: 5, title: 'Tala abedul x5' },
      { item: 'minecraft:spruce_log', amount: 5, title: 'Tala abeto x5' },
      { item: 'minecraft:apple', amount: 3, title: 'Recolecta manzanas x3' },
      { item: 'minecraft:sweet_berries', amount: 6, title: 'Cosecha bayas dulces x6' },
    ],
  },
  {
    day: 5, title: 'DÍA 5 - Montañista audaz', reward: 110,
    tasks: [
      { item: 'minecraft:stone_pickaxe', amount: 1, title: 'Fabrica pico de piedra x1' },
      { item: 'minecraft:coal', amount: 6, title: 'Mina carbón de montaña x6' },
      { item: 'minecraft:raw_iron', amount: 4, title: 'Extrae hierro de altura x4' },
      { item: 'minecraft:ladder', amount: 8, title: 'Craftea escaleras x8' },
      { item: 'minecraft:goat_horn', amount: 1, title: 'Consigue cuerno de cabra x1' },
    ],
  },

  // ══════ ESPELEÓLOGO (D6-D10) — Cave diving ══════
  {
    day: 6, title: 'DÍA 6 - Descenso a las profundidades', reward: 125,
    tasks: [
      { item: 'minecraft:iron_pickaxe', amount: 1, title: 'Fabrica pico de hierro x1' },
      { item: 'minecraft:raw_iron', amount: 5, title: 'Mina hierro en cuevas x5' },
      { item: 'minecraft:torch', amount: 32, title: 'Craftea 32 antorchas' },
      { item: 'minecraft:stone_sword', amount: 1, title: 'Fabrica espada de piedra x1' },
      { item: 'minecraft:cooked_beef', amount: 4, title: 'Cocina carne para la mina x4' },
    ],
  },
  {
    day: 7, title: 'DÍA 7 - Mina abandonada', reward: 140,
    tasks: [
      { item: 'minecraft:minecart', amount: 1, title: 'Encuentra vagoneta x1' },
      { item: 'minecraft:rail', amount: 16, title: 'Recolecta raíles x16' },
      { item: 'minecraft:cobweb', amount: 3, title: 'Corta telarañas x3' },
      { item: 'minecraft:string', amount: 5, title: 'Hilo de las profundidades x5' },
      { item: 'minecraft:lantern', amount: 2, title: 'Fabrica linternas x2' },
    ],
  },
  {
    day: 8, title: 'DÍA 8 - Corazón de la tierra', reward: 155,
    tasks: [
      { item: 'minecraft:diamond', amount: 1, title: '¡Encuentra un diamante! x1' },
      { item: 'minecraft:redstone', amount: 8, title: 'Recolecta redstone x8' },
      { item: 'minecraft:lapis_lazuli', amount: 4, title: 'Mina lapislázuli x4' },
      { item: 'minecraft:gold_ingot', amount: 2, title: 'Funde oro x2' },
      { item: 'minecraft:obsidian', amount: 2, title: 'Extrae obsidiana x2' },
    ],
  },
  {
    day: 9, title: 'DÍA 9 - Mazmorra hostil', reward: 170,
    tasks: [
      { item: 'minecraft:rotten_flesh', amount: 5, title: 'Derrota zombis x5' },
      { item: 'minecraft:bone', amount: 5, title: 'Derrota esqueletos x5' },
      { item: 'minecraft:gunpowder', amount: 3, title: 'Derrota creepers x3' },
      { item: 'minecraft:spider_eye', amount: 3, title: 'Derrota arañas x3' },
      { item: 'minecraft:music_disc_13', amount: 1, title: 'Encuentra disco de música x1' },
    ],
  },
  {
    day: 10, title: 'DÍA 10 - Geoda y tesoros', reward: 190,
    tasks: [
      { item: 'minecraft:emerald', amount: 3, title: 'Consigue esmeraldas x3' },
      { item: 'minecraft:name_tag', amount: 1, title: 'Encuentra etiqueta x1' },
      { item: 'minecraft:saddle', amount: 1, title: 'Encuentra montura x1' },
      { item: 'minecraft:golden_apple', amount: 1, title: 'Encuentra manzana dorada x1' },
      { item: 'minecraft:amethyst_shard', amount: 4, title: 'Cosecha geoda de amatista x4' },
    ],
  },

  // ══════ AVENTURERO (D11-D15) — Structures & oceans ══════
  {
    day: 11, title: 'DÍA 11 - Monumento oceánico', reward: 210,
    tasks: [
      { item: 'minecraft:prismarine_shard', amount: 5, title: 'Recolecta fragmento prismarino x5' },
      { item: 'minecraft:prismarine_crystals', amount: 3, title: 'Recolecta cristal prismarino x3' },
      { item: 'minecraft:sea_lantern', amount: 2, title: 'Rompe linterna marina x2' },
      { item: 'minecraft:sponge', amount: 2, title: 'Recolecta esponja x2' },
      { item: 'minecraft:heart_of_the_sea', amount: 1, title: 'Encuentra corazón del mar x1' },
    ],
  },
  {
    day: 12, title: 'DÍA 12 - Naufragio y tesoro enterrado', reward: 230,
    tasks: [
      { item: 'minecraft:iron_ingot', amount: 4, title: 'Lingotes del naufragio x4' },
      { item: 'minecraft:emerald', amount: 3, title: 'Esmeraldas del cofre x3' },
      { item: 'minecraft:paper', amount: 5, title: 'Papel del naufragio x5' },
      { item: 'minecraft:feather', amount: 4, title: 'Plumas del cofre x4' },
      { item: 'minecraft:filled_map', amount: 1, title: 'Desentierra mapa de tesoro x1' },
    ],
  },
  {
    day: 13, title: 'DÍA 13 - Tumba del desierto', reward: 255,
    tasks: [
      { item: 'minecraft:sand', amount: 16, title: 'Arena del desierto x16' },
      { item: 'minecraft:sandstone', amount: 8, title: 'Arenisca del templo x8' },
      { item: 'minecraft:tnt', amount: 2, title: 'TNT de la cámara oculta x2' },
      { item: 'minecraft:golden_apple', amount: 1, title: 'Manzana dorada del sarcófago x1' },
      { item: 'minecraft:bone', amount: 8, title: 'Huesos de la tumba x8' },
    ],
  },
  {
    day: 14, title: 'DÍA 14 - Templo de la jungla', reward: 280,
    tasks: [
      { item: 'minecraft:bamboo', amount: 8, title: 'Corta bambú x8' },
      { item: 'minecraft:cocoa_beans', amount: 4, title: 'Cosecha cacao x4' },
      { item: 'minecraft:melon_slice', amount: 8, title: 'Recolecta melón x8' },
      { item: 'minecraft:jungle_boat', amount: 1, title: 'Fabrica bote de jungla x1' },
      { item: 'minecraft:emerald', amount: 3, title: 'Esmeraldas del templo x3' },
    ],
  },
  {
    day: 15, title: 'DÍA 15 - Ruinas arqueológicas', reward: 300,
    tasks: [
      { item: 'minecraft:brush', amount: 1, title: 'Fabrica pincel arqueológico x1' },
      { item: 'minecraft:pottery_sherd_archer', amount: 1, title: 'Excava fragmento cerámico x1' },
      { item: 'minecraft:suspicious_sand', amount: 1, title: 'Desentierra arena sospechosa x1' },
      { item: 'minecraft:iron_ingot', amount: 3, title: 'Lingotes de las ruinas x3' },
      { item: 'minecraft:brick', amount: 8, title: 'Ladrillos de las ruinas x8' },
    ],
  },

  // ══════ EXPLORADOR DEL NETHER (D16-D20) — Nether biomes ══════
  {
    day: 16, title: 'DÍA 16 - Portal al inframundo', reward: 330,
    tasks: [
      { item: 'minecraft:crying_obsidian', amount: 3, title: 'Obsidiana llorosa del portal x3' },
      { item: 'minecraft:flint_and_steel', amount: 1, title: 'Fabrica encendedor x1' },
      { item: 'minecraft:golden_boots', amount: 1, title: 'Botas de oro para piglins x1' },
      { item: 'minecraft:iron_sword', amount: 1, title: 'Espada de hierro x1' },
      { item: 'minecraft:cooked_porkchop', amount: 5, title: 'Chuletas para la travesía x5' },
    ],
  },
  {
    day: 17, title: 'DÍA 17 - Bosque carmesí', reward: 360,
    tasks: [
      { item: 'minecraft:crimson_stem', amount: 6, title: 'Tala tallo carmesí x6' },
      { item: 'minecraft:nether_wart_block', amount: 3, title: 'Recolecta bloque de verruga x3' },
      { item: 'minecraft:weeping_vines', amount: 4, title: 'Enredadera llorona x4' },
      { item: 'minecraft:gold_ingot', amount: 5, title: 'Lingotes para trueque piglin x5' },
      { item: 'minecraft:crimson_fungus', amount: 2, title: 'Hongo carmesí x2' },
    ],
  },
  {
    day: 18, title: 'DÍA 18 - Valle de almas', reward: 390,
    tasks: [
      { item: 'minecraft:soul_sand', amount: 8, title: 'Arena de almas x8' },
      { item: 'minecraft:soul_soil', amount: 4, title: 'Tierra de almas x4' },
      { item: 'minecraft:bone_block', amount: 4, title: 'Bloque de hueso x4' },
      { item: 'minecraft:soul_torch', amount: 4, title: 'Antorchas de almas x4' },
      { item: 'minecraft:ghast_tear', amount: 1, title: 'Derrota ghast x1' },
    ],
  },
  {
    day: 19, title: 'DÍA 19 - Deltas de basalto', reward: 410,
    tasks: [
      { item: 'minecraft:basalt', amount: 8, title: 'Recolecta basalto x8' },
      { item: 'minecraft:blackstone', amount: 8, title: 'Recolecta piedra negra x8' },
      { item: 'minecraft:magma_cream', amount: 3, title: 'Derrota cubo de magma x3' },
      { item: 'minecraft:quartz', amount: 6, title: 'Mina cuarzo del Nether x6' },
      { item: 'minecraft:glowstone_dust', amount: 4, title: 'Rompe glowstone x4' },
    ],
  },
  {
    day: 20, title: 'DÍA 20 - Fortaleza del Nether', reward: 430,
    tasks: [
      { item: 'minecraft:blaze_rod', amount: 3, title: 'Derrota blazes x3' },
      { item: 'minecraft:nether_wart', amount: 5, title: 'Cosecha verruga del Nether x5' },
      { item: 'minecraft:wither_skeleton_skull', amount: 1, title: 'Cráneo de wither x1' },
      { item: 'minecraft:block_of_gold', amount: 1, title: 'Bloque de oro de la fortaleza x1' },
      { item: 'minecraft:fire_charge', amount: 2, title: 'Fabrica carga ígnea x2' },
    ],
  },

  // ══════ CONQUISTADOR DEL END (D21-D25) — End exploration ══════
  {
    day: 21, title: 'DÍA 21 - Preparación para el End', reward: 460,
    tasks: [
      { item: 'minecraft:ender_pearl', amount: 6, title: 'Perlas de enderman x6' },
      { item: 'minecraft:blaze_powder', amount: 4, title: 'Polvo de blaze x4' },
      { item: 'minecraft:ender_eye', amount: 3, title: 'Fabrica ojos de ender x3' },
      { item: 'minecraft:bow', amount: 1, title: 'Fabrica arco x1' },
      { item: 'minecraft:shield', amount: 1, title: 'Fabrica escudo x1' },
    ],
  },
  {
    day: 22, title: 'DÍA 22 - La fortaleza', reward: 495,
    tasks: [
      { item: 'minecraft:ender_eye', amount: 6, title: 'Activa el portal x6' },
      { item: 'minecraft:bookshelf', amount: 4, title: 'Estanterías de la biblioteca x4' },
      { item: 'minecraft:iron_door', amount: 1, title: 'Puerta de hierro de la fortaleza x1' },
      { item: 'minecraft:iron_sword', amount: 1, title: 'Espada de hierro x1' },
      { item: 'minecraft:filled_map', amount: 1, title: 'Mapa de la fortaleza x1' },
    ],
  },
  {
    day: 23, title: 'DÍA 23 - Cazador del dragón', reward: 530,
    tasks: [
      { item: 'minecraft:diamond_sword', amount: 1, title: 'Forja espada de diamante x1' },
      { item: 'minecraft:arrow', amount: 32, title: 'Flechas para el combate x32' },
      { item: 'minecraft:golden_apple', amount: 3, title: 'Manzanas doradas x3' },
      { item: 'minecraft:ender_pearl', amount: 8, title: 'Perlas para maniobrar x8' },
      { item: 'minecraft:dragon_breath', amount: 1, title: 'Aliento del dragón x1' },
    ],
  },
  {
    day: 24, title: 'DÍA 24 - Las islas exteriores', reward: 570,
    tasks: [
      { item: 'minecraft:chorus_fruit', amount: 6, title: 'Cosecha fruta chorus x6' },
      { item: 'minecraft:end_stone', amount: 16, title: 'Piedra del End x16' },
      { item: 'minecraft:purpur_block', amount: 8, title: 'Bloque de purpur x8' },
      { item: 'minecraft:end_rod', amount: 2, title: 'Varilla del End x2' },
      { item: 'minecraft:shulker_shell', amount: 4, title: 'Caparazón de shulker x4' },
    ],
  },
  {
    day: 25, title: 'DÍA 25 - Ciudad del End', reward: 620,
    tasks: [
      { item: 'minecraft:elytra', amount: 1, title: '¡Consigue élitros! x1' },
      { item: 'minecraft:dragon_head', amount: 1, title: 'Cabeza de dragón del barco x1' },
      { item: 'minecraft:end_crystal', amount: 1, title: 'Fabrica cristal del End x1' },
      { item: 'minecraft:diamond_chestplate', amount: 1, title: 'Pechera de diamante del cofre x1' },
      { item: 'minecraft:enchanted_book', amount: 1, title: 'Libro encantado del botín x1' },
    ],
  },

  // ══════ CARTÓGRAFO LEGENDARIO (D26-D30) — Master mapping ══════
  {
    day: 26, title: 'DÍA 26 - Buscador de netherita', reward: 690,
    tasks: [
      { item: 'minecraft:ancient_debris', amount: 4, title: 'Excava escombros ancestrales x4' },
      { item: 'minecraft:netherite_scrap', amount: 4, title: 'Funde chatarra de netherita x4' },
      { item: 'minecraft:netherite_ingot', amount: 1, title: 'Forja lingote de netherita x1' },
      { item: 'minecraft:gold_block', amount: 4, title: 'Bloques de oro x4' },
      { item: 'minecraft:diamond_pickaxe', amount: 1, title: 'Pico de diamante x1' },
    ],
  },
  {
    day: 27, title: 'DÍA 27 - Maestro de biomas', reward: 790,
    tasks: [
      { item: 'minecraft:cactus', amount: 4, title: 'Cactus del desierto x4' },
      { item: 'minecraft:snowball', amount: 8, title: 'Bolas de nieve de la tundra x8' },
      { item: 'minecraft:tropical_fish', amount: 3, title: 'Pez tropical del arrecife x3' },
      { item: 'minecraft:podzol', amount: 4, title: 'Podsol de la taiga x4' },
      { item: 'minecraft:moss_block', amount: 4, title: 'Musgo de cueva exuberante x4' },
    ],
  },
  {
    day: 28, title: 'DÍA 28 - Conquistador de estructuras', reward: 950,
    tasks: [
      { item: 'minecraft:totem_of_undying', amount: 1, title: 'Totem de la mansión x1' },
      { item: 'minecraft:trident', amount: 1, title: 'Tridente del océano x1' },
      { item: 'minecraft:echo_shard', amount: 3, title: 'Fragmento de eco x3' },
      { item: 'minecraft:disc_fragment_5', amount: 1, title: 'Fragmento de disco antiguo x1' },
      { item: 'minecraft:lodestone', amount: 1, title: 'Fabrica magnetita x1' },
    ],
  },
  {
    day: 29, title: 'DÍA 29 - Cartógrafo legendario', reward: 1100,
    tasks: [
      { item: 'minecraft:recovery_compass', amount: 1, title: 'Brújula de recuperación x1' },
      { item: 'minecraft:filled_map', amount: 4, title: 'Mapas completados x4' },
      { item: 'minecraft:spyglass', amount: 1, title: 'Catalejo x1' },
      { item: 'minecraft:clock', amount: 1, title: 'Reloj x1' },
      { item: 'minecraft:white_banner', amount: 2, title: 'Estandartes de marcado x2' },
    ],
  },
  {
    day: 30, title: 'DÍA 30 - El cartógrafo supremo', reward: 1300,
    tasks: [
      { item: 'minecraft:beacon', amount: 1, title: 'Construye un faro x1' },
      { item: 'minecraft:conduit', amount: 1, title: 'Construye un conducto x1' },
      { item: 'minecraft:respawn_anchor', amount: 1, title: 'Ancla de reaparición x1' },
      { item: 'minecraft:ender_chest', amount: 1, title: 'Cofre de ender x1' },
      { item: 'minecraft:lodestone', amount: 1, title: 'Magnetita final x1' },
    ],
  },
];

writeQuests('explorador', 'Explorador', quests);
