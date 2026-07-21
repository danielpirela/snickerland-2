/**
 * Generates 30 progressive, non-repetitive Herrero quests.
 * Each day introduces NEW items — never the same item_id twice.
 *
 * Progressive: Stone tools → Iron → Gold → Diamond → Netherite.
 * Basic smelting → Alloy creation → Legendary forge.
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const BASE_DIR = '/Users/daniel/Documents/prueba-server/config/heracles/quests';

function getRewardItem(amount) {
  const count = Math.ceil(amount / 100);
  return { id: 'saros__money_mod:euro_100', count };
}

function writeQuests(roleDir, roleName, quests) {
  const outDir = join(BASE_DIR, roleDir);
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  for (const quest of quests) {
    const { day, title, reward, tasks } = quest;

    const tasksObj = {};
    tasks.forEach((t, i) => {
      const key = `t${i + 1}`;
      const iconId = t.icon || t.item;
      tasksObj[key] = {
        type: 'heracles:item',
        item: t.item,
        amount: t.amount,
        collection: 'AUTOMATIC',
        title: t.title,
        icon: {
          item: { id: iconId, count: 1 },
          type: 'heracles:item',
        },
      };
    });

    const rewardItem = getRewardItem(reward);

    const json = {
      dependencies: [],
      tasks: tasksObj,
      rewards: {
        pago: {
          title: `${reward} monedas`,
          icon: { item: rewardItem, type: 'heracles:item' },
          item: rewardItem,
          type: 'heracles:item',
        },
      },
      display: {
        subtitle: { text: '' },
        description: [''],
        groups: {
          [roleName]: {
            position: [-32, -(43 + (day - 1) * 15)],
          },
        },
        icon: {
          item: { id: 'minecraft:map', count: 1 },
          type: 'heracles:item',
        },
        icon_background: 'heracles:textures/gui/quest_backgrounds/default.png',
        title: { text: title },
      },
      settings: {
        showDependencyArrow: true,
        repeatable: false,
        autoClaimRewards: false,
        individual_progress: false,
        hidden: 'LOCKED',
        unlockNotification: false,
      },
    };

    const filename = `${roleDir}_dia_${day}.json`;
    writeFileSync(join(outDir, filename), JSON.stringify(json, null, 2), 'utf-8');
  }

  console.log(`✅ ${roleDir}: ${quests.length} quests escritos`);
}

// ──────────────────────────────────────────────────────────
// 150 UNIQUE item_ids — each used exactly ONCE across 30 days.
// Reward curve: D1 65 → D5 110 → D10 190 → D15 300 → D20 430 → D25 620 → D30 1300
// ──────────────────────────────────────────────────────────
const quests = [
  // ═══════ D1-D5: APRENDIZ DE FORJA — furnace, stone & iron tools, first smelts ═══════
  {
    day: 1, title: 'DIA 1 - Fundición inicial', reward: 65,
    tasks: [
      { item: 'minecraft:coal', amount: 3, title: 'Recolecta carbón x3' },
      { item: 'minecraft:furnace', amount: 1, title: 'Fabrica un horno x1' },
      { item: 'minecraft:iron_ore', amount: 4, title: 'Mina mineral de hierro x4' },
      { item: 'minecraft:copper_ore', amount: 3, title: 'Mina mineral de cobre x3' },
      { item: 'minecraft:stone_pickaxe', amount: 1, title: 'Fabrica pico de piedra x1' },
    ],
  },
  {
    day: 2, title: 'DIA 2 - Herramientas de piedra', reward: 75,
    tasks: [
      { item: 'minecraft:stone_axe', amount: 1, title: 'Fabrica hacha de piedra x1' },
      { item: 'minecraft:stone_shovel', amount: 1, title: 'Fabrica pala de piedra x1' },
      { item: 'minecraft:stone_hoe', amount: 1, title: 'Fabrica azada de piedra x1' },
      { item: 'minecraft:stone_sword', amount: 1, title: 'Fabrica espada de piedra x1' },
      { item: 'minecraft:charcoal', amount: 4, title: 'Fabrica carbón vegetal x4' },
    ],
  },
  {
    day: 3, title: 'DIA 3 - Hierro crudo', reward: 85,
    tasks: [
      { item: 'minecraft:raw_iron', amount: 5, title: 'Recolecta hierro crudo x5' },
      { item: 'minecraft:raw_copper', amount: 4, title: 'Recolecta cobre crudo x4' },
      { item: 'minecraft:raw_gold', amount: 3, title: 'Recolecta oro crudo x3' },
      { item: 'minecraft:iron_ingot', amount: 3, title: 'Funde lingotes de hierro x3' },
      { item: 'minecraft:raw_iron_block', amount: 1, title: 'Compacta bloque de hierro crudo x1' },
    ],
  },
  {
    day: 4, title: 'DIA 4 - Mesa de herrería', reward: 95,
    tasks: [
      { item: 'minecraft:smithing_table', amount: 1, title: 'Fabrica mesa de herrería x1' },
      { item: 'minecraft:iron_sword', amount: 1, title: 'Forja espada de hierro x1' },
      { item: 'minecraft:iron_pickaxe', amount: 1, title: 'Forja pico de hierro x1' },
      { item: 'minecraft:iron_axe', amount: 1, title: 'Forja hacha de hierro x1' },
      { item: 'minecraft:copper_ingot', amount: 3, title: 'Funde lingotes de cobre x3' },
    ],
  },
  {
    day: 5, title: 'DIA 5 - Primera armadura', reward: 110,
    tasks: [
      { item: 'minecraft:iron_helmet', amount: 1, title: 'Forja casco de hierro x1' },
      { item: 'minecraft:iron_chestplate', amount: 1, title: 'Forja pechera de hierro x1' },
      { item: 'minecraft:iron_leggings', amount: 1, title: 'Forja grebas de hierro x1' },
      { item: 'minecraft:iron_boots', amount: 1, title: 'Forja botas de hierro x1' },
      { item: 'minecraft:iron_block', amount: 1, title: 'Compacta bloque de hierro x1' },
    ],
  },

  // ═══════ D6-D10: HERRERO ARTESANO — iron utilities, blast furnace, rails ═══════
  {
    day: 6, title: 'DIA 6 - Utensilios de hierro', reward: 125,
    tasks: [
      { item: 'minecraft:shears', amount: 1, title: 'Forja tijeras x1' },
      { item: 'minecraft:bucket', amount: 2, title: 'Forja cubos x2' },
      { item: 'minecraft:flint_and_steel', amount: 1, title: 'Forja mechero x1' },
      { item: 'minecraft:iron_door', amount: 2, title: 'Forja puertas de hierro x2' },
      { item: 'minecraft:iron_shovel', amount: 1, title: 'Forja pala de hierro x1' },
    ],
  },
  {
    day: 7, title: 'DIA 7 - Barras y trampas', reward: 140,
    tasks: [
      { item: 'minecraft:iron_bars', amount: 8, title: 'Forja barrotes de hierro x8' },
      { item: 'minecraft:iron_trapdoor', amount: 2, title: 'Forja trampillas de hierro x2' },
      { item: 'minecraft:tripwire_hook', amount: 3, title: 'Forja ganchos de cuerda x3' },
      { item: 'minecraft:heavy_weighted_pressure_plate', amount: 1, title: 'Forja placa de presión pesada x1' },
      { item: 'minecraft:iron_hoe', amount: 1, title: 'Forja azada de hierro x1' },
    ],
  },
  {
    day: 8, title: 'DIA 8 - Combustible avanzado', reward: 155,
    tasks: [
      { item: 'minecraft:blast_furnace', amount: 1, title: 'Fabrica alto horno x1' },
      { item: 'minecraft:lava_bucket', amount: 1, title: 'Recolecta cubo de lava x1' },
      { item: 'minecraft:coal_block', amount: 1, title: 'Compacta bloque de carbón x1' },
      { item: 'minecraft:smooth_stone', amount: 16, title: 'Funde piedra lisa x16' },
      { item: 'minecraft:glass', amount: 8, title: 'Funde vidrio x8' },
    ],
  },
  {
    day: 9, title: 'DIA 9 - Cadenas y raíles', reward: 170,
    tasks: [
      { item: 'minecraft:chain', amount: 8, title: 'Forja cadenas x8' },
      { item: 'minecraft:rail', amount: 16, title: 'Forja raíles x16' },
      { item: 'minecraft:minecart', amount: 1, title: 'Forja vagoneta x1' },
      { item: 'minecraft:hopper', amount: 1, title: 'Forja tolva x1' },
      { item: 'minecraft:powered_rail', amount: 6, title: 'Forja raíles propulsores x6' },
    ],
  },
  {
    day: 10, title: 'DIA 10 - Artesano completo', reward: 190,
    tasks: [
      { item: 'minecraft:grindstone', amount: 1, title: 'Fabrica piedra de afilar x1' },
      { item: 'minecraft:lantern', amount: 4, title: 'Forja faroles x4' },
      { item: 'minecraft:compass', amount: 1, title: 'Forja brújula x1' },
      { item: 'minecraft:detector_rail', amount: 4, title: 'Forja raíles detectores x4' },
      { item: 'minecraft:activator_rail', amount: 4, title: 'Forja raíles activadores x4' },
    ],
  },

  // ═══════ D11-D15: MAESTRO HERRERO — gold tools/armor, diamond era, anvil ═══════
  {
    day: 11, title: 'DIA 11 - El brillo del oro', reward: 210,
    tasks: [
      { item: 'minecraft:gold_ore', amount: 5, title: 'Mina mineral de oro x5' },
      { item: 'minecraft:gold_ingot', amount: 5, title: 'Funde lingotes de oro x5' },
      { item: 'minecraft:gold_block', amount: 1, title: 'Compacta bloque de oro x1' },
      { item: 'minecraft:gold_sword', amount: 1, title: 'Forja espada de oro x1' },
      { item: 'minecraft:netherrack', amount: 16, title: 'Recolecta netherrack x16' },
    ],
  },
  {
    day: 12, title: 'DIA 12 - Herramientas doradas', reward: 230,
    tasks: [
      { item: 'minecraft:gold_pickaxe', amount: 1, title: 'Forja pico de oro x1' },
      { item: 'minecraft:gold_axe', amount: 1, title: 'Forja hacha de oro x1' },
      { item: 'minecraft:gold_shovel', amount: 1, title: 'Forja pala de oro x1' },
      { item: 'minecraft:gold_hoe', amount: 1, title: 'Forja azada de oro x1' },
      { item: 'minecraft:raw_gold_block', amount: 1, title: 'Compacta bloque de oro crudo x1' },
    ],
  },
  {
    day: 13, title: 'DIA 13 - La era del diamante', reward: 250,
    tasks: [
      { item: 'minecraft:diamond_ore', amount: 3, title: 'Mina mineral de diamante x3' },
      { item: 'minecraft:diamond', amount: 3, title: 'Recolecta diamantes x3' },
      { item: 'minecraft:diamond_pickaxe', amount: 1, title: 'Forja pico de diamante x1' },
      { item: 'minecraft:diamond_sword', amount: 1, title: 'Forja espada de diamante x1' },
      { item: 'minecraft:deepslate_diamond_ore', amount: 3, title: 'Mina diamante en pizarra x3' },
    ],
  },
  {
    day: 14, title: 'DIA 14 - Armadura diamantina', reward: 275,
    tasks: [
      { item: 'minecraft:diamond_helmet', amount: 1, title: 'Forja casco de diamante x1' },
      { item: 'minecraft:diamond_chestplate', amount: 1, title: 'Forja pechera de diamante x1' },
      { item: 'minecraft:diamond_leggings', amount: 1, title: 'Forja grebas de diamante x1' },
      { item: 'minecraft:diamond_boots', amount: 1, title: 'Forja botas de diamante x1' },
      { item: 'minecraft:gold_helmet', amount: 1, title: 'Forja casco de oro x1' },
    ],
  },
  {
    day: 15, title: 'DIA 15 - Reparación y encantamiento', reward: 300,
    tasks: [
      { item: 'minecraft:anvil', amount: 1, title: 'Fabrica yunque x1' },
      { item: 'minecraft:diamond_axe', amount: 1, title: 'Forja hacha de diamante x1' },
      { item: 'minecraft:diamond_shovel', amount: 1, title: 'Forja pala de diamante x1' },
      { item: 'minecraft:diamond_hoe', amount: 1, title: 'Forja azada de diamante x1' },
      { item: 'minecraft:emerald_ore', amount: 3, title: 'Mina mineral de esmeralda x3' },
    ],
  },

  // ═══════ D16-D20: FORJADOR DEL NETHER — ancient debris, netherite scrap/ingot/tools ═══════
  {
    day: 16, title: 'DIA 16 - El Nether llama', reward: 325,
    tasks: [
      { item: 'minecraft:gold_nugget', amount: 15, title: 'Recolecta pepitas de oro x15' },
      { item: 'minecraft:nether_quartz_ore', amount: 8, title: 'Mina mineral de cuarzo x8' },
      { item: 'minecraft:nether_quartz', amount: 8, title: 'Recolecta cuarzo del Nether x8' },
      { item: 'minecraft:quartz_block', amount: 2, title: 'Compacta bloque de cuarzo x2' },
      { item: 'minecraft:gold_chestplate', amount: 1, title: 'Forja pechera de oro x1' },
    ],
  },
  {
    day: 17, title: 'DIA 17 - Escombros antiguos', reward: 350,
    tasks: [
      { item: 'minecraft:ancient_debris', amount: 2, title: 'Mina escombros antiguos x2' },
      { item: 'minecraft:netherite_scrap', amount: 2, title: 'Funde chatarra de netherita x2' },
      { item: 'minecraft:magma_cream', amount: 4, title: 'Recolecta crema de magma x4' },
      { item: 'minecraft:nether_bricks', amount: 12, title: 'Fabrica ladrillos del Nether x12' },
      { item: 'minecraft:gold_boots', amount: 1, title: 'Forja botas de oro x1' },
    ],
  },
  {
    day: 18, title: 'DIA 18 - Lingote de netherita', reward: 375,
    tasks: [
      { item: 'minecraft:netherite_ingot', amount: 1, title: 'Forja lingote de netherita x1' },
      { item: 'minecraft:deepslate_gold_ore', amount: 4, title: 'Mina oro en pizarra profunda x4' },
      { item: 'minecraft:deepslate_iron_ore', amount: 5, title: 'Mina hierro en pizarra profunda x5' },
      { item: 'minecraft:deepslate_copper_ore', amount: 3, title: 'Mina cobre en pizarra profunda x3' },
      { item: 'minecraft:chipped_anvil', amount: 1, title: 'Fabrica yunque mellado x1' },
    ],
  },
  {
    day: 19, title: 'DIA 19 - Mejora a netherita', reward: 400,
    tasks: [
      { item: 'minecraft:netherite_upgrade_smithing_template', amount: 1, title: 'Consigue plantilla de mejora x1' },
      { item: 'minecraft:netherite_pickaxe', amount: 1, title: 'Mejora pico a netherita x1' },
      { item: 'minecraft:netherite_sword', amount: 1, title: 'Mejora espada a netherita x1' },
      { item: 'minecraft:obsidian', amount: 8, title: 'Recolecta obsidiana x8' },
      { item: 'minecraft:nether_gold_ore', amount: 8, title: 'Mina mineral de oro del Nether x8' },
    ],
  },
  {
    day: 20, title: 'DIA 20 - Armadura de netherita I', reward: 430,
    tasks: [
      { item: 'minecraft:netherite_helmet', amount: 1, title: 'Mejora casco a netherita x1' },
      { item: 'minecraft:netherite_boots', amount: 1, title: 'Mejora botas a netherita x1' },
      { item: 'minecraft:crying_obsidian', amount: 4, title: 'Recolecta obsidiana llorosa x4' },
      { item: 'minecraft:blaze_rod', amount: 4, title: 'Recolecta varas de blaze x4' },
      { item: 'minecraft:gold_leggings', amount: 1, title: 'Forja grebas de oro x1' },
    ],
  },

  // ═══════ D21-D25: HERRERO DE ÉLITE — full netherite, armor trims, legendary anvil ═══════
  {
    day: 21, title: 'DIA 21 - Armadura de netherita II', reward: 465,
    tasks: [
      { item: 'minecraft:netherite_chestplate', amount: 1, title: 'Mejora pechera a netherita x1' },
      { item: 'minecraft:netherite_leggings', amount: 1, title: 'Mejora grebas a netherita x1' },
      { item: 'minecraft:netherite_axe', amount: 1, title: 'Mejora hacha a netherita x1' },
      { item: 'minecraft:netherite_shovel', amount: 1, title: 'Mejora pala a netherita x1' },
      { item: 'minecraft:netherite_hoe', amount: 1, title: 'Mejora azada a netherita x1' },
    ],
  },
  {
    day: 22, title: 'DIA 22 - Plantillas de herrería I', reward: 500,
    tasks: [
      { item: 'minecraft:sentry_armor_trim_smithing_template', amount: 1, title: 'Consigue molde de centinela x1' },
      { item: 'minecraft:dune_armor_trim_smithing_template', amount: 1, title: 'Consigue molde de duna x1' },
      { item: 'minecraft:coast_armor_trim_smithing_template', amount: 1, title: 'Consigue molde de costa x1' },
      { item: 'minecraft:wild_armor_trim_smithing_template', amount: 1, title: 'Consigue molde salvaje x1' },
      { item: 'minecraft:ward_armor_trim_smithing_template', amount: 1, title: 'Consigue molde de warden x1' },
    ],
  },
  {
    day: 23, title: 'DIA 23 - Plantillas de herrería II', reward: 535,
    tasks: [
      { item: 'minecraft:eye_armor_trim_smithing_template', amount: 1, title: 'Consigue molde de ojo x1' },
      { item: 'minecraft:vex_armor_trim_smithing_template', amount: 1, title: 'Consigue molde de vex x1' },
      { item: 'minecraft:tide_armor_trim_smithing_template', amount: 1, title: 'Consigue molde de marea x1' },
      { item: 'minecraft:snout_armor_trim_smithing_template', amount: 1, title: 'Consigue molde de hocico x1' },
      { item: 'minecraft:rib_armor_trim_smithing_template', amount: 1, title: 'Consigue molde de costilla x1' },
    ],
  },
  {
    day: 24, title: 'DIA 24 - Plantillas de herrería III', reward: 575,
    tasks: [
      { item: 'minecraft:spire_armor_trim_smithing_template', amount: 1, title: 'Consigue molde de aguja x1' },
      { item: 'minecraft:wayfinder_armor_trim_smithing_template', amount: 1, title: 'Consigue molde de guía x1' },
      { item: 'minecraft:raiser_armor_trim_smithing_template', amount: 1, title: 'Consigue molde de elevación x1' },
      { item: 'minecraft:shaper_armor_trim_smithing_template', amount: 1, title: 'Consigue molde de moldeador x1' },
      { item: 'minecraft:host_armor_trim_smithing_template', amount: 1, title: 'Consigue molde de anfitrión x1' },
    ],
  },
  {
    day: 25, title: 'DIA 25 - Yunque legendario', reward: 620,
    tasks: [
      { item: 'minecraft:damaged_anvil', amount: 1, title: 'Fabrica yunque dañado x1' },
      { item: 'minecraft:silence_armor_trim_smithing_template', amount: 1, title: 'Consigue molde de silencio x1' },
      { item: 'minecraft:emerald', amount: 4, title: 'Recolecta esmeraldas x4' },
      { item: 'minecraft:diamond_block', amount: 2, title: 'Compacta bloques de diamante x2' },
      { item: 'minecraft:lapis_lazuli', amount: 16, title: 'Recolecta lapislázuli x16' },
    ],
  },

  // ═══════ D26-D30: FORJADOR LEGENDARIO — beacon forge, enchanting, ultimate collection ═══════
  {
    day: 26, title: 'DIA 26 - La forja del beacon', reward: 710,
    tasks: [
      { item: 'minecraft:beacon', amount: 1, title: 'Fabrica faro x1' },
      { item: 'minecraft:nether_star', amount: 1, title: 'Consigue estrella del Nether x1' },
      { item: 'minecraft:emerald_block', amount: 2, title: 'Compacta bloques de esmeralda x2' },
      { item: 'minecraft:amethyst_block', amount: 2, title: 'Compacta bloques de amatista x2' },
      { item: 'minecraft:lapis_block', amount: 3, title: 'Compacta bloques de lapislázuli x3' },
    ],
  },
  {
    day: 27, title: 'DIA 27 - Metales preciosos', reward: 830,
    tasks: [
      { item: 'minecraft:copper_block', amount: 4, title: 'Compacta bloques de cobre x4' },
      { item: 'minecraft:redstone_block', amount: 3, title: 'Compacta bloques de redstone x3' },
      { item: 'minecraft:lightning_rod', amount: 2, title: 'Forja pararrayos x2' },
      { item: 'minecraft:spyglass', amount: 1, title: 'Forja catalejo x1' },
      { item: 'minecraft:brush', amount: 1, title: 'Forja pincel arqueológico x1' },
    ],
  },
  {
    day: 28, title: 'DIA 28 - Infraestructura de forja', reward: 980,
    tasks: [
      { item: 'minecraft:enchanting_table', amount: 1, title: 'Fabrica mesa de encantamientos x1' },
      { item: 'minecraft:bookshelf', amount: 15, title: 'Fabrica estanterías x15' },
      { item: 'minecraft:cauldron', amount: 2, title: 'Forja calderos x2' },
      { item: 'minecraft:shield', amount: 1, title: 'Forja escudo x1' },
      { item: 'minecraft:piston', amount: 4, title: 'Forja pistones x4' },
    ],
  },
  {
    day: 29, title: 'DIA 29 - Armaduras especiales', reward: 1130,
    tasks: [
      { item: 'minecraft:iron_horse_armor', amount: 1, title: 'Forja armadura de caballo de hierro x1' },
      { item: 'minecraft:golden_horse_armor', amount: 1, title: 'Forja armadura de caballo de oro x1' },
      { item: 'minecraft:diamond_horse_armor', amount: 1, title: 'Forja armadura de caballo de diamante x1' },
      { item: 'minecraft:leather_horse_armor', amount: 1, title: 'Consigue armadura de caballo de cuero x1' },
      { item: 'minecraft:saddle', amount: 1, title: 'Consigue montura x1' },
    ],
  },
  {
    day: 30, title: 'DIA 30 - Forjador legendario', reward: 1300,
    tasks: [
      { item: 'minecraft:netherite_block', amount: 2, title: 'Compacta bloques de netherita x2' },
      { item: 'minecraft:crossbow', amount: 1, title: 'Forja ballesta x1' },
      { item: 'minecraft:name_tag', amount: 3, title: 'Forja etiquetas x3' },
      { item: 'minecraft:lead', amount: 2, title: 'Forja riendas x2' },
      { item: 'minecraft:bell', amount: 1, title: 'Forja campana x1' },
    ],
  },
];

// ─── Validate no duplicate item IDs ───
const allItems = quests.flatMap(q => q.tasks.map(t => t.item));
const dupes = allItems.filter((item, index) => allItems.indexOf(item) !== index);
if (dupes.length > 0) {
  console.error(`❌ DUPLICATE ITEMS FOUND: ${[...new Set(dupes)].join(', ')}`);
  console.error(`   Total duplicates: ${dupes.length}`);
} else {
  console.log('✅ All 150 items are unique. No duplicates.');
}

writeQuests('herrero', 'Herrero', quests);
console.log('\nResumen:');
console.log('  Rango de recompensas: 65 → 1300 monedas');
console.log('  Día 30 highlight: 2x bloque de netherita + ballesta + etiquetas + riendas + campana');
console.log('\nEjemplos:');
console.log('  Día 1: Carbón, horno, mineral de hierro/cobre, pico de piedra (fundición inicial)');
console.log('  Día 10: Piedra de afilar, faroles, brújula, raíles detectores y activadores (artesano)');
console.log('  Día 18: Lingote de netherita, minería en pizarra profunda, yunque mellado (Nether)');
