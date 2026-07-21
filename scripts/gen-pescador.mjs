/**
 * Generate 30 progressive, non-repetitive Heracles quests for PESCADOR.
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const BASE_DIR = '/Users/daniel/Documents/prueba-server/config/heracles/quests';

function getRewardItem(amount) {
  if (amount <= 100) return { id: 'saros__money_mod:euro_100', count: 1 };
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

  console.log(`${roleDir}: ${quests.length} quests escritos`);
}

// ─── 30 progressive PESCADOR quests ──────────────────────────────────────────

const quests = [
  // ═══ D1–5: PESCADOR NOVATO ═════════════════════════════════════════════════
  {
    day: 1, reward: 65, title: 'DIA 1 - Pescador novato',
    tasks: [
      { item: 'minecraft:fishing_rod',  amount: 2, title: 'Fabrica caña x2' },
      { item: 'minecraft:cod',          amount: 2, title: 'Pesca bacalao x2' },
      { item: 'minecraft:salmon',       amount: 1, title: 'Pesca salmón x1' },
      { item: 'minecraft:tropical_fish',amount: 1, title: 'Pesca tropical x1' },
      { item: 'minecraft:pufferfish',   amount: 1, title: 'Pesca globo x1' },
    ]
  },
  {
    day: 2, reward: 75, title: 'DIA 2 - Río arriba',
    tasks: [
      { item: 'minecraft:oak_boat',     amount: 1, title: 'Fabrica bote de roble' },
      { item: 'minecraft:cod',          amount: 3, title: 'Bacalao de río x3' },
      { item: 'minecraft:salmon',       amount: 2, title: 'Salmón de corriente x2' },
      { item: 'minecraft:string',       amount: 3, title: 'Recoge hilo x3' },
      { item: 'minecraft:bone',         amount: 2, title: 'Huesos del río x2' },
    ]
  },
  {
    day: 3, reward: 85, title: 'DIA 3 - La fogata',
    tasks: [
      { item: 'minecraft:campfire',     amount: 2, title: 'Prepara fogata x2' },
      { item: 'minecraft:cooked_cod',   amount: 3, title: 'Cocina bacalao x3' },
      { item: 'minecraft:cooked_salmon',amount: 2, title: 'Cocina salmón x2' },
      { item: 'minecraft:barrel',       amount: 2, title: 'Fabrica barril x2' },
      { item: 'minecraft:cod',          amount: 2, title: 'Pescado fresco extra x2' },
    ]
  },
  {
    day: 4, reward: 100, title: 'DIA 4 - Construye tu muelle',
    tasks: [
      { item: 'minecraft:oak_planks',   amount: 16, title: 'Tablones para muelle x16' },
      { item: 'minecraft:oak_fence',    amount: 8, title: 'Baranda del muelle x8' },
      { item: 'minecraft:oak_boat',     amount: 1, title: 'Bote amarrado x1' },
      { item: 'minecraft:cod',          amount: 3, title: 'Pesca desde el muelle x3' },
      { item: 'minecraft:salmon',       amount: 2, title: 'Salmón del muelle x2' },
    ]
  },
  {
    day: 5, reward: 110, title: 'DIA 5 - Peces de colores',
    tasks: [
      { item: 'minecraft:water_bucket',        amount: 2, title: 'Balde de agua x2' },
      { item: 'minecraft:tropical_fish_bucket',amount: 1, title: 'Atrapa pez tropical vivo' },
      { item: 'minecraft:cod_bucket',          amount: 1, title: 'Atrapa bacalao vivo' },
      { item: 'minecraft:kelp',                amount: 5, title: 'Recoge kelp x5' },
      { item: 'minecraft:tropical_fish',       amount: 2, title: 'Pez tropical x2' },
    ]
  },

  // ═══ D6–10: PESCADOR DE AGUA DULCE ═════════════════════════════════════════
  {
    day: 6, reward: 125, title: 'DIA 6 - Acuario principiante',
    tasks: [
      { item: 'minecraft:glass',             amount: 8, title: 'Vidrio para acuario x8' },
      { item: 'minecraft:glass_pane',        amount: 4, title: 'Panel de vidrio x4' },
      { item: 'minecraft:salmon_bucket',     amount: 1, title: 'Atrapa salmón vivo' },
      { item: 'minecraft:tropical_fish',     amount: 3, title: 'Pez tropical x3' },
      { item: 'minecraft:seagrass',          amount: 5, title: 'Hierba marina x5' },
    ]
  },
  {
    day: 7, reward: 140, title: 'DIA 7 - Pantano misterioso',
    tasks: [
      { item: 'minecraft:spruce_boat',   amount: 1, title: 'Fabrica bote de abeto' },
      { item: 'minecraft:tropical_fish', amount: 2, title: 'Pez de pantano x2' },
      { item: 'minecraft:pufferfish',    amount: 2, title: 'Pez globo x2' },
      { item: 'minecraft:lily_pad',      amount: 3, title: 'Hoja de nenúfar x3' },
      { item: 'minecraft:cod',           amount: 3, title: 'Bacalao de laguna x3' },
    ]
  },
  {
    day: 8, reward: 160, title: 'DIA 8 - Fertilizante marino',
    tasks: [
      { item: 'minecraft:composter',    amount: 2, title: 'Fabrica compostador x2' },
      { item: 'minecraft:bone_meal',    amount: 4, title: 'Fertilizante x4' },
      { item: 'minecraft:dried_kelp',   amount: 5, title: 'Kelp seco x5' },
      { item: 'minecraft:cod',          amount: 3, title: 'Bacalao x3' },
      { item: 'minecraft:salmon',       amount: 2, title: 'Salmón x2' },
    ]
  },
  {
    day: 9, reward: 175, title: 'DIA 9 - Jungla profunda',
    tasks: [
      { item: 'minecraft:birch_boat',        amount: 1, title: 'Fabrica bote de abedul' },
      { item: 'minecraft:tropical_fish',     amount: 4, title: 'Pez tropical exótico x4' },
      { item: 'minecraft:pufferfish_bucket', amount: 1, title: 'Atrapa pez globo vivo' },
      { item: 'minecraft:bamboo',            amount: 8, title: 'Bambú de jungla x8' },
      { item: 'minecraft:lantern',           amount: 2, title: 'Linterna de pesca x2' },
    ]
  },
  {
    day: 10, reward: 190, title: 'DIA 10 - Tesoros del agua',
    tasks: [
      { item: 'minecraft:bow',          amount: 1, title: 'Arco del mar x1' },
      { item: 'minecraft:name_tag',     amount: 1, title: 'Etiqueta perdida x1' },
      { item: 'minecraft:saddle',       amount: 1, title: 'Montura hundida x1' },
      { item: 'minecraft:leather',      amount: 2, title: 'Cuero marino x2' },
      { item: 'minecraft:cooked_cod',   amount: 3, title: 'Bacalao ahumado x3' },
    ]
  },

  // ═══ D11–15: PESCADOR DE MAR ═══════════════════════════════════════════════
  {
    day: 11, reward: 210, title: 'DIA 11 - Océano abierto',
    tasks: [
      { item: 'minecraft:oak_chest_boat',amount: 1, title: 'Bote con cofre x1' },
      { item: 'minecraft:cod',           amount: 3, title: 'Bacalao oceánico x3' },
      { item: 'minecraft:salmon',        amount: 2, title: 'Salmón ártico x2' },
      { item: 'minecraft:tropical_fish', amount: 3, title: 'Pez tropical x3' },
      { item: 'minecraft:ink_sac',       amount: 3, title: 'Bolsa de tinta x3' },
    ]
  },
  {
    day: 12, reward: 235, title: 'DIA 12 - Naufragio',
    tasks: [
      { item: 'minecraft:compass',      amount: 1, title: 'Brújula del naufragio x1' },
      { item: 'minecraft:paper',        amount: 5, title: 'Papel del cofre x5' },
      { item: 'minecraft:iron_ingot',   amount: 3, title: 'Lingote hundido x3' },
      { item: 'minecraft:cod',          amount: 3, title: 'Bacalao del naufragio x3' },
      { item: 'minecraft:bone',         amount: 3, title: 'Restos del marino x3' },
    ]
  },
  {
    day: 13, reward: 255, title: 'DIA 13 - Delfín amigo',
    tasks: [
      { item: 'minecraft:oak_boat',      amount: 1, title: 'Bote veloz x1' },
      { item: 'minecraft:cod',           amount: 4, title: 'Bacalao x4' },
      { item: 'minecraft:salmon',        amount: 3, title: 'Salmón x3' },
      { item: 'minecraft:tropical_fish', amount: 2, title: 'Pez de arrecife x2' },
      { item: 'minecraft:nautilus_shell',amount: 1, title: 'Caparazón nautilo x1' },
    ]
  },
  {
    day: 14, reward: 280, title: 'DIA 14 - Playa de tortugas',
    tasks: [
      { item: 'minecraft:turtle_egg',    amount: 1, title: 'Huevo de tortuga x1' },
      { item: 'minecraft:seagrass',      amount: 8, title: 'Hierba marina x8' },
      { item: 'minecraft:cod',           amount: 3, title: 'Bacalao costero x3' },
      { item: 'minecraft:string',        amount: 3, title: 'Hilo x3' },
      { item: 'minecraft:leather',       amount: 2, title: 'Cuero de playa x2' },
    ]
  },
  {
    day: 15, reward: 300, title: 'DIA 15 - Materiales del conducto',
    tasks: [
      { item: 'minecraft:heart_of_the_sea', amount: 1, title: 'Corazón del mar x1' },
      { item: 'minecraft:nautilus_shell',   amount: 4, title: 'Nautilos x4' },
      { item: 'minecraft:prismarine',       amount: 8, title: 'Prismarina x8' },
      { item: 'minecraft:prismarine_bricks',amount: 4, title: 'Ladrillo prismarino x4' },
      { item: 'minecraft:sea_lantern',      amount: 2, title: 'Linterna marina x2' },
    ]
  },

  // ═══ D16–20: BIÓLOGO MARINO ════════════════════════════════════════════════
  {
    day: 16, reward: 325, title: 'DIA 16 - Activa el conducto',
    tasks: [
      { item: 'minecraft:conduit',          amount: 1, title: 'Fabrica conducto x1' },
      { item: 'minecraft:prismarine',       amount: 4, title: 'Prismarina x4' },
      { item: 'minecraft:dark_prismarine',  amount: 4, title: 'Prismarina oscura x4' },
      { item: 'minecraft:tropical_fish',    amount: 2, title: 'Pez tropical x2' },
      { item: 'minecraft:cooked_salmon',    amount: 3, title: 'Salmón cocido x3' },
    ]
  },
  {
    day: 17, reward: 350, title: 'DIA 17 - Cazador de ajolotes',
    tasks: [
      { item: 'minecraft:axolotl_bucket',      amount: 2, title: 'Cubo con ajolote x2' },
      { item: 'minecraft:tropical_fish_bucket',amount: 2, title: 'Carnada viva tropical x2' },
      { item: 'minecraft:water_bucket',        amount: 2, title: 'Balde de agua x2' },
      { item: 'minecraft:glow_ink_sac',        amount: 3, title: 'Tinta brillante x3' },
      { item: 'minecraft:glow_lichen',         amount: 5, title: 'Liquen brillante x5' },
    ]
  },
  {
    day: 18, reward: 380, title: 'DIA 18 - Criador de tortugas',
    tasks: [
      { item: 'minecraft:scute',         amount: 1, title: 'Escama de tortuga x1' },
      { item: 'minecraft:turtle_egg',    amount: 2, title: 'Huevo de tortuga x2' },
      { item: 'minecraft:seagrass',      amount: 8, title: 'Alimento para tortugas x8' },
      { item: 'minecraft:sand',          amount: 16, title: 'Arena de playa x16' },
      { item: 'minecraft:water_bucket',  amount: 2, title: 'Agua para cría x2' },
    ]
  },
  {
    day: 19, reward: 405, title: 'DIA 19 - Arrecife de coral',
    tasks: [
      { item: 'minecraft:tube_coral',       amount: 3, title: 'Coral tubo x3' },
      { item: 'minecraft:brain_coral_block',amount: 3, title: 'Bloque coral cerebro x3' },
      { item: 'minecraft:fire_coral_fan',   amount: 3, title: 'Abanico coral fuego x3' },
      { item: 'minecraft:tropical_fish',    amount: 3, title: 'Pez de arrecife x3' },
      { item: 'minecraft:cooked_cod',       amount: 3, title: 'Bacalao cocido x3' },
    ]
  },
  {
    day: 20, reward: 430, title: 'DIA 20 - Esponjas del océano',
    tasks: [
      { item: 'minecraft:sponge',               amount: 3, title: 'Esponja x3' },
      { item: 'minecraft:prismarine_shard',     amount: 4, title: 'Fragmento prismarino x4' },
      { item: 'minecraft:prismarine_crystals',  amount: 3, title: 'Cristal prismarino x3' },
      { item: 'minecraft:dark_prismarine',      amount: 4, title: 'Prismarina oscura x4' },
      { item: 'minecraft:sea_lantern',          amount: 3, title: 'Linterna marina x3' },
    ]
  },

  // ═══ D21–25: MAESTRO PESCADOR ══════════════════════════════════════════════
  {
    day: 21, reward: 470, title: 'DIA 21 - Pesca bajo la lluvia',
    tasks: [
      { item: 'minecraft:cauldron',      amount: 2, title: 'Caldero para lluvia x2' },
      { item: 'minecraft:water_bucket',  amount: 3, title: 'Balde de agua x3' },
      { item: 'minecraft:cod',           amount: 4, title: 'Bacalao de lluvia x4' },
      { item: 'minecraft:salmon',        amount: 3, title: 'Salmón de lluvia x3' },
      { item: 'minecraft:pufferfish',    amount: 2, title: 'Pez globo x2' },
    ]
  },
  {
    day: 22, reward: 505, title: 'DIA 22 - Encantamiento marino',
    tasks: [
      { item: 'minecraft:enchanted_book',   amount: 2, title: 'Libro encantado x2' },
      { item: 'minecraft:fishing_rod',      amount: 1, title: 'Caña nueva x1' },
      { item: 'minecraft:lapis_lazuli',     amount: 5, title: 'Lapislázuli x5' },
      { item: 'minecraft:cod',              amount: 3, title: 'Bacalao x3' },
      { item: 'minecraft:experience_bottle',amount: 3, title: 'Frasco de experiencia x3' },
    ]
  },
  {
    day: 23, reward: 545, title: 'DIA 23 - Tormenta perfecta',
    tasks: [
      { item: 'minecraft:lightning_rod', amount: 2, title: 'Pararrayos x2' },
      { item: 'minecraft:cod',           amount: 4, title: 'Bacalao tormentoso x4' },
      { item: 'minecraft:salmon',        amount: 3, title: 'Salmón eléctrico x3' },
      { item: 'minecraft:pufferfish',    amount: 2, title: 'Pez globo x2' },
      { item: 'minecraft:string',        amount: 5, title: 'Hilo de tormenta x5' },
    ]
  },
  {
    day: 24, reward: 580, title: 'DIA 24 - Paraíso de nenúfares',
    tasks: [
      { item: 'minecraft:lily_pad',       amount: 6, title: 'Nenúfar x6' },
      { item: 'minecraft:spruce_boat',    amount: 1, title: 'Bote de abeto x1' },
      { item: 'minecraft:tropical_fish',  amount: 3, title: 'Pez de pantano x3' },
      { item: 'minecraft:pufferfish',     amount: 2, title: 'Pez globo x2' },
      { item: 'minecraft:cooked_salmon',  amount: 3, title: 'Salmón cocido x3' },
    ]
  },
  {
    day: 25, reward: 620, title: 'DIA 25 - Villa pesquera',
    tasks: [
      { item: 'minecraft:barrel',        amount: 4, title: 'Barril de pescado x4' },
      { item: 'minecraft:campfire',      amount: 3, title: 'Fogata del muelle x3' },
      { item: 'minecraft:chain',         amount: 4, title: 'Cadena de amarre x4' },
      { item: 'minecraft:lantern',       amount: 4, title: 'Linterna del puerto x4' },
      { item: 'minecraft:cod',           amount: 5, title: 'Pescado del día x5' },
    ]
  },

  // ═══ D26–30: LEYENDA DEL MAR ═══════════════════════════════════════════════
  {
    day: 26, reward: 755, title: 'DIA 26 - Cofre del océano',
    tasks: [
      { item: 'minecraft:heart_of_the_sea', amount: 1, title: 'Corazón del mar x1' },
      { item: 'minecraft:diamond',          amount: 1, title: 'Diamante hundido x1' },
      { item: 'minecraft:enchanted_book',   amount: 3, title: 'Libro encantado x3' },
      { item: 'minecraft:nautilus_shell',   amount: 3, title: 'Nautilo x3' },
      { item: 'minecraft:name_tag',         amount: 3, title: 'Etiquetas antiguas x3' },
    ]
  },
  {
    day: 27, reward: 890, title: 'DIA 27 - Acuario legendario',
    tasks: [
      { item: 'minecraft:tropical_fish_bucket', amount: 4, title: 'Cubo pez tropical x4' },
      { item: 'minecraft:axolotl_bucket',       amount: 2, title: 'Cubo ajolote x2' },
      { item: 'minecraft:glow_ink_sac',         amount: 4, title: 'Tinta brillante x4' },
      { item: 'minecraft:sea_lantern',          amount: 4, title: 'Linterna marina x4' },
      { item: 'minecraft:glass',                amount: 12, title: 'Vitrina marina x12' },
    ]
  },
  {
    day: 28, reward: 1030, title: 'DIA 28 - Redes llenas',
    tasks: [
      { item: 'minecraft:cod',            amount: 8, title: 'Red de bacalao x8' },
      { item: 'minecraft:salmon',         amount: 6, title: 'Red de salmón x6' },
      { item: 'minecraft:tropical_fish',  amount: 6, title: 'Red de tropicales x6' },
      { item: 'minecraft:pufferfish',     amount: 4, title: 'Red de globo x4' },
      { item: 'minecraft:cooked_cod',     amount: 5, title: 'Bacalao ahumado x5' },
    ]
  },
  {
    day: 29, reward: 1165, title: 'DIA 29 - Biblioteca marina',
    tasks: [
      { item: 'minecraft:enchanted_book',  amount: 4, title: 'Libro encantado x4' },
      { item: 'minecraft:bow',             amount: 2, title: 'Arco del marino x2' },
      { item: 'minecraft:fishing_rod',     amount: 2, title: 'Caña legendaria x2' },
      { item: 'minecraft:saddle',          amount: 2, title: 'Montura x2' },
      { item: 'minecraft:name_tag',        amount: 3, title: 'Etiquetas x3' },
    ]
  },
  {
    day: 30, reward: 1300, title: 'DIA 30 - Leyenda del mar',
    tasks: [
      { item: 'minecraft:heart_of_the_sea',  amount: 1, title: 'Corazón del mar x1' },
      { item: 'minecraft:conduit',           amount: 1, title: 'Conducto definitivo x1' },
      { item: 'minecraft:tropical_fish',     amount: 10, title: 'Colección tropical x10' },
      { item: 'minecraft:pufferfish',        amount: 6, title: 'Pez globo maestro x6' },
      { item: 'minecraft:axolotl_bucket',    amount: 3, title: 'Ajolote coleccionista x3' },
    ]
  },
];

writeQuests('pescador', 'Pescador', quests);
