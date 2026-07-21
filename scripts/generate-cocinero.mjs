/**
 * Generates 30 progressive, non-repetitive Cocinero quests.
 * Each day introduces NEW dishes, techniques, or tools — never just "more of the same."
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

// ──────────────────────────────────────
// Progressive reward curve (monedas)
// Day 1: 65 → Day 5: 110 → Day 10: 190 → Day 15: 300 → Day 20: 430 → Day 25: 620 → Day 30: 1300
// ──────────────────────────────────────
const quests = [
  // ═══════════════ DAYS 1-5: PINCHE DE COCINA — Basic survival food & starter tools ═══════════════
  {
    day: 1, title: 'DIA 1 - Pinche: Primer horno', reward: 65,
    tasks: [
      { item: 'minecraft:bread', amount: 3, title: 'Hornea pan x3' },
      { item: 'minecraft:baked_potato', amount: 3, title: 'Hornea patatas x3' },
      { item: 'minecraft:cooked_beef', amount: 2, title: 'Cocina filetes x2' },
      { item: 'minecraft:coal', amount: 4, title: 'Consigue carbon x4' },
      { item: 'minecraft:furnace', amount: 1, title: 'Fabrica un horno' },
    ],
  },
  {
    day: 2, title: 'DIA 2 - Pinche: Recolección básica', reward: 76,
    tasks: [
      { item: 'minecraft:wheat', amount: 6, title: 'Cosecha trigo x6' },
      { item: 'minecraft:egg', amount: 3, title: 'Recolecta huevos x3' },
      { item: 'minecraft:milk_bucket', amount: 1, title: 'Ordeña vaca x1' },
      { item: 'minecraft:sugar', amount: 2, title: 'Fabrica azucar x2' },
      { item: 'minecraft:cooked_chicken', amount: 2, title: 'Cocina pollo x2' },
    ],
  },
  {
    day: 3, title: 'DIA 3 - Pinche: Herramientas del oficio', reward: 87,
    tasks: [
      { item: 'farmersdelight:flint_knife', amount: 1, title: 'Fabrica cuchillo de pedernal x1' },
      { item: 'farmersdelight:cutting_board', amount: 1, title: 'Fabrica tabla de cortar x1' },
      { item: 'minecraft:bowl', amount: 3, title: 'Fabrica cuencos x3' },
      { item: 'minecraft:cooked_porkchop', amount: 2, title: 'Cocina chuletas x2' },
      { item: 'minecraft:carrot', amount: 4, title: 'Cosecha zanahorias x4' },
    ],
  },
  {
    day: 4, title: 'DIA 4 - Pinche: Sopas de campo', reward: 98,
    tasks: [
      { item: 'minecraft:mushroom_stew', amount: 2, title: 'Prepara estofado de champiñones x2' },
      { item: 'minecraft:beetroot_soup', amount: 1, title: 'Prepara sopa de remolacha x1' },
      { item: 'minecraft:brown_mushroom', amount: 3, title: 'Recolecta hongos marrones x3' },
      { item: 'minecraft:red_mushroom', amount: 3, title: 'Recolecta hongos rojos x3' },
      { item: 'minecraft:beetroot', amount: 6, title: 'Cosecha remolacha x6' },
    ],
  },
  {
    day: 5, title: 'DIA 5 - Pinche: Cocina variada', reward: 110,
    tasks: [
      { item: 'minecraft:cooked_mutton', amount: 3, title: 'Cocina cordero x3' },
      { item: 'minecraft:cooked_rabbit', amount: 2, title: 'Cocina conejo x2' },
      { item: 'minecraft:cooked_cod', amount: 3, title: 'Cocina bacalao x3' },
      { item: 'minecraft:rabbit_stew', amount: 1, title: 'Prepara estofado de conejo x1' },
      { item: 'farmersdelight:stove', amount: 1, title: 'Fabrica cocina FD x1' },
    ],
  },

  // ═══════════════ DAYS 6-10: COCINERO — FarmersDelight cooking pot, skillet, rice ═══════════════
  {
    day: 6, title: 'DIA 6 - Cocinero: El huerto', reward: 126,
    tasks: [
      { item: 'farmersdelight:cabbage', amount: 4, title: 'Cosecha repollo x4' },
      { item: 'farmersdelight:tomato', amount: 4, title: 'Cosecha tomates x4' },
      { item: 'farmersdelight:onion', amount: 4, title: 'Cosecha cebollas x4' },
      { item: 'farmersdelight:rice_panicle', amount: 2, title: 'Cosecha espigas de arroz x2' },
      { item: 'farmersdelight:iron_knife', amount: 1, title: 'Fabrica cuchillo de hierro x1' },
    ],
  },
  {
    day: 7, title: 'DIA 7 - Cocinero: Preparación', reward: 142,
    tasks: [
      { item: 'farmersdelight:rice', amount: 4, title: 'Procesa arroz x4' },
      { item: 'farmersdelight:straw', amount: 6, title: 'Recolecta paja x6' },
      { item: 'farmersdelight:rope', amount: 2, title: 'Fabrica cuerda x2' },
      { item: 'farmersdelight:cooking_pot', amount: 1, title: 'Fabrica olla de cocina x1' },
      { item: 'minecraft:cooked_salmon', amount: 2, title: 'Cocina salmon x2' },
    ],
  },
  {
    day: 8, title: 'DIA 8 - Cocinero: Sopas y caldos', reward: 158,
    tasks: [
      { item: 'farmersdelight:vegetable_soup', amount: 2, title: 'Prepara sopa de verduras x2' },
      { item: 'farmersdelight:bone_broth', amount: 1, title: 'Prepara caldo de huesos x1' },
      { item: 'minecraft:bone', amount: 3, title: 'Consigue huesos x3' },
      { item: 'farmersdelight:tomato_sauce', amount: 2, title: 'Prepara salsa de tomate x2' },
      { item: 'farmersdelight:organic_compost', amount: 2, title: 'Fabrica compost x2' },
    ],
  },
  {
    day: 9, title: 'DIA 9 - Cocinero: Arroces y sarten', reward: 174,
    tasks: [
      { item: 'farmersdelight:fried_rice', amount: 2, title: 'Prepara arroz frito x2' },
      { item: 'farmersdelight:mushroom_rice', amount: 1, title: 'Prepara arroz con setas x1' },
      { item: 'farmersdelight:skillet', amount: 1, title: 'Fabrica sarten x1' },
      { item: 'farmersdelight:fried_egg', amount: 2, title: 'Frie huevos x2' },
      { item: 'farmersdelight:bacon', amount: 2, title: 'Frie tocino x2' },
    ],
  },
  {
    day: 10, title: 'DIA 10 - Cocinero: Ensaladas', reward: 190,
    tasks: [
      { item: 'farmersdelight:mixed_salad', amount: 2, title: 'Prepara ensalada mixta x2' },
      { item: 'farmersdelight:barbecued_onion', amount: 2, title: 'Prepara cebolla asada x2' },
      { item: 'farmersdelight:pumpkin_soup', amount: 1, title: 'Prepara sopa de calabaza x1' },
      { item: 'minecraft:pumpkin', amount: 2, title: 'Cosecha calabazas x2' },
      { item: 'farmersdelight:fruit_salad', amount: 1, title: 'Prepara ensalada de frutas x1' },
    ],
  },

  // ═══════════════ DAYS 11-15: CHEF DE PARTIE — Feast dishes, baking, pastas ═══════════════
  {
    day: 11, title: 'DIA 11 - Chef: Pastas artesanales', reward: 210,
    tasks: [
      { item: 'farmersdelight:pasta_with_meatballs', amount: 2, title: 'Prepara pasta con albondigas x2' },
      { item: 'farmersdelight:meatballs', amount: 2, title: 'Prepara albondigas x2' },
      { item: 'farmersdelight:squid_ink_pasta', amount: 1, title: 'Prepara pasta con tinta de calamar x1' },
      { item: 'minecraft:ink_sac', amount: 2, title: 'Consigue tinta de calamar x2' },
      { item: 'farmersdelight:ratatouille', amount: 1, title: 'Prepara ratatouille x1' },
    ],
  },
  {
    day: 12, title: 'DIA 12 - Chef: Pescados nobles', reward: 230,
    tasks: [
      { item: 'farmersdelight:baked_cod_stew', amount: 2, title: 'Prepara estofado de bacalao x2' },
      { item: 'farmersdelight:grilled_salmon', amount: 2, title: 'Prepara salmon a la parrilla x2' },
      { item: 'farmersdelight:cod_slice', amount: 2, title: 'Filetea bacalao x2' },
      { item: 'farmersdelight:salmon_slice', amount: 2, title: 'Filetea salmon x2' },
      { item: 'farmersdelight:diamond_knife', amount: 1, title: 'Fabrica cuchillo de diamante x1' },
    ],
  },
  {
    day: 13, title: 'DIA 13 - Chef: Repostería', reward: 250,
    tasks: [
      { item: 'minecraft:cake', amount: 1, title: 'Hornea tarta x1' },
      { item: 'minecraft:cookie', amount: 8, title: 'Hornea galletas x8' },
      { item: 'minecraft:pumpkin_pie', amount: 2, title: 'Hornea pastel de calabaza x2' },
      { item: 'farmersdelight:apple_pie', amount: 1, title: 'Hornea tarta de manzana x1' },
      { item: 'minecraft:honey_bottle', amount: 2, title: 'Recolecta miel x2' },
    ],
  },
  {
    day: 14, title: 'DIA 14 - Chef: Bebidas', reward: 275,
    tasks: [
      { item: 'farmersdelight:hot_cocoa', amount: 3, title: 'Prepara chocolate caliente x3' },
      { item: 'farmersdelight:apple_cider', amount: 2, title: 'Prepara sidra de manzana x2' },
      { item: 'minecraft:apple', amount: 6, title: 'Cosecha manzanas x6' },
      { item: 'minecraft:cocoa_beans', amount: 4, title: 'Cosecha cacao x4' },
      { item: 'farmersdelight:melon_juice', amount: 2, title: 'Prepara jugo de melon x2' },
    ],
  },
  {
    day: 15, title: 'DIA 15 - Chef: Platos festivos', reward: 300,
    tasks: [
      { item: 'farmersdelight:roast_chicken', amount: 1, title: 'Prepara pollo asado festivo x1' },
      { item: 'farmersdelight:stuffed_pumpkin', amount: 1, title: 'Prepara calabaza rellena x1' },
      { item: 'farmersdelight:honey_glazed_ham', amount: 1, title: 'Prepara jamon glaseado x1' },
      { item: 'farmersdelight:shepherd_pie', amount: 1, title: 'Prepara pastel de pastor x1' },
      { item: 'farmersdelight:canvas', amount: 2, title: 'Fabrica lienzo x2' },
    ],
  },

  // ═══════════════ DAYS 16-20: SOUS CHEF — Cheese, peanut butter, juices, international ═══════════════
  {
    day: 16, title: 'DIA 16 - Sous: Quesos y patatas', reward: 326,
    tasks: [
      { item: 'expandeddelight:cheese', amount: 2, title: 'Fabrica queso x2' },
      { item: 'minecraft:milk_bucket', amount: 3, title: 'Ordeña vacas x3' },
      { item: 'farmersdelight:stuffed_potato', amount: 2, title: 'Prepara papas rellenas x2' },
      { item: 'farmersdelight:steak_and_potatoes', amount: 1, title: 'Prepara filete con papas x1' },
      { item: 'farmersdelight:rich_soil', amount: 4, title: 'Fabrica tierra fertil x4' },
    ],
  },
  {
    day: 17, title: 'DIA 17 - Sous: Dulces FD', reward: 352,
    tasks: [
      { item: 'farmersdelight:sweet_berry_cheesecake', amount: 1, title: 'Prepara tarta de queso con bayas x1' },
      { item: 'farmersdelight:chocolate_pie', amount: 1, title: 'Prepara pastel de chocolate x1' },
      { item: 'farmersdelight:melon_popsicle', amount: 2, title: 'Prepara paleta de melon x2' },
      { item: 'farmersdelight:glow_berry_custard', amount: 1, title: 'Prepara natillas de bayas luminosas x1' },
      { item: 'minecraft:glow_berries', amount: 4, title: 'Recolecta bayas luminosas x4' },
    ],
  },
  {
    day: 18, title: 'DIA 18 - Sous: Untables', reward: 378,
    tasks: [
      { item: 'expandeddelight:peanut_butter', amount: 2, title: 'Fabrica mantequilla de mani x2' },
      { item: 'expandeddelight:sweet_berry_jam', amount: 2, title: 'Fabrica mermelada de bayas x2' },
      { item: 'minecraft:sweet_berries', amount: 4, title: 'Recolecta bayas dulces x4' },
      { item: 'farmersdelight:tree_bark', amount: 2, title: 'Recolecta corteza de arbol x2' },
      { item: 'farmersdelight:netherite_knife', amount: 1, title: 'Fabrica cuchillo de netherita x1' },
    ],
  },
  {
    day: 19, title: 'DIA 19 - Sous: Ingredientes exóticos', reward: 404,
    tasks: [
      { item: 'ecologics:coconut', amount: 3, title: 'Recolecta cocos x3' },
      { item: 'ecologics:walnut', amount: 3, title: 'Recolecta nueces x3' },
      { item: 'farmersdelight:rice', amount: 8, title: 'Procesa arroz x8' },
      { item: 'farmersdelight:grilled_salmon', amount: 3, title: 'Prepara salmon a la parrilla x3' },
      { item: 'farmersdelight:mushroom_rice', amount: 2, title: 'Prepara arroz con setas x2' },
    ],
  },
  {
    day: 20, title: 'DIA 20 - Sous: Cocina mediterránea', reward: 430,
    tasks: [
      { item: 'farmersdelight:ratatouille', amount: 2, title: 'Prepara ratatouille x2' },
      { item: 'farmersdelight:pasta_with_meatballs', amount: 2, title: 'Prepara pasta con albondigas x2' },
      { item: 'farmersdelight:mixed_salad', amount: 3, title: 'Prepara ensalada mixta x3' },
      { item: 'expandeddelight:apple_juice', amount: 2, title: 'Prepara jugo de manzana x2' },
      { item: 'farmersdelight:squid_ink_pasta', amount: 2, title: 'Prepara pasta con tinta de calamar x2' },
    ],
  },

  // ═══════════════ DAYS 21-25: CHEF EJECUTIVO — Gourmet, kitchen building, plating ═══════════════
  {
    day: 21, title: 'DIA 21 - Ejecutivo: Barra de bebidas', reward: 468,
    tasks: [
      { item: 'expandeddelight:berry_smoothie', amount: 2, title: 'Prepara smoothie de bayas x2' },
      { item: 'expandeddelight:melon_juice', amount: 2, title: 'Prepara jugo de melon x2' },
      { item: 'expandeddelight:sweet_berry_juice', amount: 2, title: 'Prepara jugo de bayas x2' },
      { item: 'farmersdelight:hot_cocoa', amount: 4, title: 'Prepara chocolate caliente x4' },
      { item: 'farmersdelight:cooking_pot', amount: 2, title: 'Fabrica mas ollas x2' },
    ],
  },
  {
    day: 22, title: 'DIA 22 - Ejecutivo: Cocina profesional', reward: 506,
    tasks: [
      { item: 'farmersdelight:stove', amount: 3, title: 'Fabrica cocinas profesionales x3' },
      { item: 'farmersdelight:skillet', amount: 2, title: 'Fabrica sartenes x2' },
      { item: 'farmersdelight:cutting_board', amount: 2, title: 'Fabrica tablas de cortar x2' },
      { item: 'farmersdelight:diamond_knife', amount: 2, title: 'Fabrica cuchillos de diamante x2' },
      { item: 'farmersdelight:organic_compost', amount: 4, title: 'Fabrica compost x4' },
    ],
  },
  {
    day: 23, title: 'DIA 23 - Ejecutivo: Banquete de carnes', reward: 544,
    tasks: [
      { item: 'farmersdelight:roast_chicken', amount: 2, title: 'Prepara pollo asado festivo x2' },
      { item: 'farmersdelight:honey_glazed_ham', amount: 2, title: 'Prepara jamon glaseado x2' },
      { item: 'farmersdelight:steak_and_potatoes', amount: 2, title: 'Prepara filete con papas x2' },
      { item: 'farmersdelight:bacon', amount: 4, title: 'Frie tocino x4' },
      { item: 'farmersdelight:fried_egg', amount: 4, title: 'Frie huevos x4' },
    ],
  },
  {
    day: 24, title: 'DIA 24 - Ejecutivo: Maridajes', reward: 582,
    tasks: [
      { item: 'farmersdelight:grilled_salmon', amount: 3, title: 'Prepara salmon a la parrilla x3' },
      { item: 'farmersdelight:apple_cider', amount: 3, title: 'Prepara sidra de manzana x3' },
      { item: 'expandeddelight:cheese', amount: 3, title: 'Fabrica queso x3' },
      { item: 'minecraft:item_frame', amount: 4, title: 'Fabrica marcos para presentacion x4' },
      { item: 'farmersdelight:fruit_salad', amount: 3, title: 'Prepara ensalada de frutas x3' },
    ],
  },
  {
    day: 25, title: 'DIA 25 - Ejecutivo: Repostería maestra', reward: 620,
    tasks: [
      { item: 'farmersdelight:sweet_berry_cheesecake', amount: 2, title: 'Prepara tarta de queso con bayas x2' },
      { item: 'farmersdelight:apple_pie', amount: 2, title: 'Hornea tarta de manzana x2' },
      { item: 'farmersdelight:chocolate_pie', amount: 2, title: 'Prepara pastel de chocolate x2' },
      { item: 'farmersdelight:glow_berry_custard', amount: 2, title: 'Prepara natillas de bayas x2' },
      { item: 'minecraft:cake', amount: 2, title: 'Hornea tartas x2' },
    ],
  },

  // ═══════════════ DAYS 26-30: CHEF ESTRELLA — Legendary feasts, signature dishes ═══════════════
  {
    day: 26, title: 'DIA 26 - Estrella: Pasta suprema', reward: 730,
    tasks: [
      { item: 'farmersdelight:pasta_with_meatballs', amount: 3, title: 'Prepara pasta con albondigas x3' },
      { item: 'farmersdelight:squid_ink_pasta', amount: 3, title: 'Prepara pasta con tinta de calamar x3' },
      { item: 'farmersdelight:meatballs', amount: 4, title: 'Prepara albondigas x4' },
      { item: 'farmersdelight:tomato_sauce', amount: 4, title: 'Prepara salsa de tomate x4' },
      { item: 'expandeddelight:cheese', amount: 4, title: 'Fabrica queso x4' },
    ],
  },
  {
    day: 27, title: 'DIA 27 - Estrella: Menú degustación', reward: 840,
    tasks: [
      { item: 'farmersdelight:shepherd_pie', amount: 2, title: 'Prepara pastel de pastor x2' },
      { item: 'farmersdelight:stuffed_pumpkin', amount: 2, title: 'Prepara calabaza rellena x2' },
      { item: 'farmersdelight:baked_cod_stew', amount: 2, title: 'Prepara estofado de bacalao x2' },
      { item: 'farmersdelight:mixed_salad', amount: 4, title: 'Prepara ensalada mixta x4' },
      { item: 'expandeddelight:berry_smoothie', amount: 3, title: 'Prepara smoothie de bayas x3' },
    ],
  },
  {
    day: 28, title: 'DIA 28 - Estrella: Cocina latinoamericana', reward: 950,
    tasks: [
      { item: 'ecologics:coconut', amount: 5, title: 'Recolecta cocos x5' },
      { item: 'ecologics:walnut', amount: 4, title: 'Recolecta nueces x4' },
      { item: 'farmersdelight:rice', amount: 12, title: 'Procesa arroz x12' },
      { item: 'farmersdelight:tomato_sauce', amount: 5, title: 'Prepara salsa de tomate x5' },
      { item: 'farmersdelight:stuffed_potato', amount: 4, title: 'Prepara papas rellenas x4' },
    ],
  },
  {
    day: 29, title: 'DIA 29 - Estrella: El gran banquete', reward: 1100,
    tasks: [
      { item: 'farmersdelight:roast_chicken', amount: 3, title: 'Prepara pollo asado festivo x3' },
      { item: 'farmersdelight:honey_glazed_ham', amount: 3, title: 'Prepara jamon glaseado x3' },
      { item: 'farmersdelight:steak_and_potatoes', amount: 3, title: 'Prepara filete con papas x3' },
      { item: 'farmersdelight:fruit_salad', amount: 4, title: 'Prepara ensalada de frutas x4' },
      { item: 'expandeddelight:apple_juice', amount: 4, title: 'Prepara jugo de manzana x4' },
    ],
  },
  {
    day: 30, title: 'DIA 30 - Estrella: Leyenda culinaria', reward: 1300,
    tasks: [
      { item: 'farmersdelight:ratatouille', amount: 4, title: 'Prepara ratatouille suprema x4' },
      { item: 'farmersdelight:sweet_berry_cheesecake', amount: 3, title: 'Prepara tarta de queso suprema x3' },
      { item: 'farmersdelight:pasta_with_meatballs', amount: 4, title: 'Prepara pasta suprema x4' },
      { item: 'expandeddelight:berry_smoothie', amount: 4, title: 'Prepara smoothie supremo x4' },
      { item: 'expandeddelight:cheese', amount: 5, title: 'Fabrica queso supremo x5' },
    ],
  },
];

writeQuests('cocinero', 'Cocinero', quests);
console.log('\nResumen:');
console.log('  Rango de recompensas: 65 → 1300 monedas');
console.log('  Día 30 highlight: 4x ratatouille suprema + 3x cheesecake + 4x pasta + 4x smoothie + 5x queso');
console.log('\nEjemplos:');
console.log('  Día 1: Pan, patata asada, filete, carbon, horno (supervivencia básica)');
console.log('  Día 10: Ensalada mixta, cebolla asada, sopa de calabaza (platos FD)');
console.log('  Día 15: Pollo asado festivo, calabaza rellena, jamón glaseado (feast dishes)');
