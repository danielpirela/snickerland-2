import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const BASE_DIR = '/Users/daniel/Documents/prueba-server/config/heracles/quests';

function getRewardItem(amount) {
  if (amount <= 100) return { id: 'saros__money_mod:euro_100', count: 1 };
  const count = Math.ceil(amount / 100);
  return { id: 'saros__money_mod:euro_100', count };
}

const CHECKPOINTS = [
  [1, 65], [5, 110], [10, 190], [15, 300],
  [20, 430], [25, 620], [30, 1300],
];

function calcReward(day) {
  for (let i = 0; i < CHECKPOINTS.length - 1; i++) {
    const [d1, r1] = CHECKPOINTS[i];
    const [d2, r2] = CHECKPOINTS[i + 1];
    if (day >= d1 && day <= d2) {
      const t = (day - d1) / (d2 - d1);
      return Math.round(r1 + t * (r2 - r1));
    }
  }
  return 1300;
}

export function writeQuests(roleDir, roleName, quests) {
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
            position: [-32, -(43 + (day - 1) * 16)],
          },
        },
        icon: {
          item: { id: 'minecraft:diamond_pickaxe', count: 1 },
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

  console.log(`\u2705 ${roleDir}: ${quests.length} quests escritos`);
}

// ======== 30 DAYS OF MINERO ========

const quests = [
  // ── D1-5: Minero Novato ───────────────────────────────────────
  {
    day: 1,
    title: 'DIA 1 - Primer pico de piedra',
    reward: calcReward(1),
    tasks: [
      { item: 'minecraft:cobblestone', amount: 16, title: 'Pica piedra x16' },
      { item: 'minecraft:coal', amount: 8, title: 'Mina carbón x8' },
      { item: 'minecraft:stick', amount: 8, title: 'Fabrica palos x8' },
      { item: 'minecraft:stone_pickaxe', amount: 1, title: 'Fabrica pico de piedra' },
      { item: 'minecraft:torch', amount: 8, title: 'Fabrica antorchas x8' },
    ],
  },
  {
    day: 2,
    title: 'DIA 2 - El cobre reluciente',
    reward: calcReward(2),
    tasks: [
      { item: 'minecraft:copper_ore', amount: 12, title: 'Mina mena de cobre x12' },
      { item: 'minecraft:raw_copper', amount: 12, title: 'Recolecta cobre crudo x12' },
      { item: 'minecraft:coal', amount: 16, title: 'Mina carbón x16' },
      { item: 'minecraft:torch', amount: 16, title: 'Fabrica antorchas x16' },
      { item: 'minecraft:stone_pickaxe', amount: 3, title: 'Fabrica picos de piedra x3' },
    ],
  },
  {
    day: 3,
    title: 'DIA 3 - Fundición y hierro',
    reward: calcReward(3),
    tasks: [
      { item: 'minecraft:iron_ore', amount: 10, title: 'Mina mena de hierro x10' },
      { item: 'minecraft:raw_iron', amount: 10, title: 'Recolecta hierro crudo x10' },
      { item: 'minecraft:furnace', amount: 2, title: 'Fabrica hornos x2' },
      { item: 'minecraft:iron_ingot', amount: 3, title: 'Funde lingotes de hierro x3' },
      { item: 'minecraft:coal', amount: 24, title: 'Mina carbón x24' },
    ],
  },
  {
    day: 4,
    title: 'DIA 4 - Pico de hierro forjado',
    reward: calcReward(4),
    tasks: [
      { item: 'minecraft:iron_ingot', amount: 5, title: 'Funde lingotes de hierro x5' },
      { item: 'minecraft:iron_pickaxe', amount: 1, title: 'Fabrica pico de hierro' },
      { item: 'minecraft:raw_copper', amount: 24, title: 'Recolecta cobre crudo x24' },
      { item: 'minecraft:raw_iron', amount: 16, title: 'Recolecta hierro crudo x16' },
      { item: 'minecraft:torch', amount: 32, title: 'Fabrica antorchas x32' },
    ],
  },
  {
    day: 5,
    title: 'DIA 5 - Equipando la expedición',
    reward: calcReward(5),
    tasks: [
      { item: 'minecraft:chest', amount: 4, title: 'Fabrica cofres x4' },
      { item: 'minecraft:ladder', amount: 32, title: 'Fabrica escaleras x32' },
      { item: 'minecraft:torch', amount: 64, title: 'Fabrica antorchas x64' },
      { item: 'minecraft:iron_pickaxe', amount: 3, title: 'Fabrica picos de hierro x3' },
      { item: 'minecraft:iron_ingot', amount: 12, title: 'Funde lingotes de hierro x12' },
    ],
  },

  // ── D6-10: Minero de Profundidad ──────────────────────────────
  {
    day: 6,
    title: 'DIA 6 - Descenso a la pizarra profunda',
    reward: calcReward(6),
    tasks: [
      { item: 'minecraft:deepslate', amount: 48, title: 'Pica pizarra profunda x48' },
      { item: 'minecraft:deepslate_iron_ore', amount: 12, title: 'Mina hierro profundo x12' },
      { item: 'minecraft:raw_iron', amount: 24, title: 'Recolecta hierro crudo x24' },
      { item: 'minecraft:torch', amount: 80, title: 'Fabrica antorchas x80' },
      { item: 'minecraft:iron_pickaxe', amount: 4, title: 'Fabrica picos de hierro x4' },
    ],
  },
  {
    day: 7,
    title: 'DIA 7 - El azul del lapislázuli',
    reward: calcReward(7),
    tasks: [
      { item: 'minecraft:deepslate_lapis_ore', amount: 10, title: 'Mina lapislázuli profundo x10' },
      { item: 'minecraft:lapis_lazuli', amount: 48, title: 'Recolecta lapislázuli x48' },
      { item: 'minecraft:deepslate', amount: 64, title: 'Pica pizarra profunda x64' },
      { item: 'minecraft:coal', amount: 48, title: 'Mina carbón x48' },
      { item: 'minecraft:torch', amount: 96, title: 'Fabrica antorchas x96' },
    ],
  },
  {
    day: 8,
    title: 'DIA 8 - Oro en las profundidades',
    reward: calcReward(8),
    tasks: [
      { item: 'minecraft:deepslate_gold_ore', amount: 10, title: 'Mina oro profundo x10' },
      { item: 'minecraft:raw_gold', amount: 10, title: 'Recolecta oro crudo x10' },
      { item: 'minecraft:gold_ingot', amount: 5, title: 'Funde lingotes de oro x5' },
      { item: 'minecraft:deepslate_iron_ore', amount: 16, title: 'Mina hierro profundo x16' },
      { item: 'minecraft:lapis_lazuli', amount: 64, title: 'Recolecta lapislázuli x64' },
    ],
  },
  {
    day: 9,
    title: 'DIA 9 - El polvo rojo del ingenio',
    reward: calcReward(9),
    tasks: [
      { item: 'minecraft:deepslate_redstone_ore', amount: 12, title: 'Mina redstone profundo x12' },
      { item: 'minecraft:redstone', amount: 64, title: 'Recolecta redstone x64' },
      { item: 'minecraft:deepslate_lapis_ore', amount: 16, title: 'Mina lapislázuli profundo x16' },
      { item: 'minecraft:torch', amount: 128, title: 'Fabrica antorchas x128' },
      { item: 'minecraft:gold_ingot', amount: 8, title: 'Funde lingotes de oro x8' },
    ],
  },
  {
    day: 10,
    title: 'DIA 10 - Ramificación y diamantes',
    reward: calcReward(10),
    tasks: [
      { item: 'minecraft:deepslate_diamond_ore', amount: 4, title: 'Mina diamante profundo x4' },
      { item: 'minecraft:diamond', amount: 4, title: 'Recolecta diamantes x4' },
      { item: 'minecraft:diamond_pickaxe', amount: 1, title: 'Fabrica pico de diamante' },
      { item: 'minecraft:redstone', amount: 80, title: 'Recolecta redstone x80' },
      { item: 'minecraft:deepslate_redstone_ore', amount: 18, title: 'Mina redstone profundo x18' },
    ],
  },

  // ── D11-15: Espeleólogo ───────────────────────────────────────
  {
    day: 11,
    title: 'DIA 11 - Exploración de cavernas',
    reward: calcReward(11),
    tasks: [
      { item: 'minecraft:cobblestone', amount: 128, title: 'Pica piedra x128' },
      { item: 'minecraft:coal', amount: 96, title: 'Mina carbón x96' },
      { item: 'minecraft:torch', amount: 192, title: 'Fabrica antorchas x192' },
      { item: 'minecraft:ladder', amount: 64, title: 'Fabrica escaleras x64' },
      { item: 'minecraft:water_bucket', amount: 1, title: 'Fabrica cubo de agua' },
    ],
  },
  {
    day: 12,
    title: 'DIA 12 - Vías subterráneas',
    reward: calcReward(12),
    tasks: [
      { item: 'minecraft:rail', amount: 48, title: 'Fabrica raíles x48' },
      { item: 'minecraft:minecart', amount: 2, title: 'Fabrica vagonetas x2' },
      { item: 'minecraft:gold_ingot', amount: 8, title: 'Funde lingotes de oro x8' },
      { item: 'minecraft:iron_ingot', amount: 20, title: 'Funde lingotes de hierro x20' },
      { item: 'minecraft:redstone', amount: 48, title: 'Recolecta redstone x48' },
    ],
  },
  {
    day: 13,
    title: 'DIA 13 - Vías motorizadas',
    reward: calcReward(13),
    tasks: [
      { item: 'minecraft:powered_rail', amount: 20, title: 'Fabrica raíl propulsor x20' },
      { item: 'minecraft:gold_ingot', amount: 14, title: 'Funde lingotes de oro x14' },
      { item: 'minecraft:redstone', amount: 64, title: 'Recolecta redstone x64' },
      { item: 'minecraft:chest_minecart', amount: 2, title: 'Fabrica vagoneta con cofre x2' },
      { item: 'minecraft:rail', amount: 64, title: 'Fabrica raíles x64' },
    ],
  },
  {
    day: 14,
    title: 'DIA 14 - Fortificación minera',
    reward: calcReward(14),
    tasks: [
      { item: 'minecraft:cobblestone', amount: 192, title: 'Pica piedra x192' },
      { item: 'minecraft:torch', amount: 256, title: 'Fabrica antorchas x256' },
      { item: 'minecraft:diamond_pickaxe', amount: 2, title: 'Fabrica picos de diamante x2' },
      { item: 'minecraft:iron_ingot', amount: 28, title: 'Funde lingotes de hierro x28' },
      { item: 'minecraft:furnace_minecart', amount: 1, title: 'Fabrica vagoneta con horno' },
    ],
  },
  {
    day: 15,
    title: 'DIA 15 - Detección y control',
    reward: calcReward(15),
    tasks: [
      { item: 'minecraft:detector_rail', amount: 8, title: 'Fabrica raíl detector x8' },
      { item: 'minecraft:powered_rail', amount: 28, title: 'Fabrica raíl propulsor x28' },
      { item: 'minecraft:gold_ingot', amount: 18, title: 'Funde lingotes de oro x18' },
      { item: 'minecraft:redstone', amount: 96, title: 'Recolecta redstone x96' },
      { item: 'minecraft:diamond_pickaxe', amount: 3, title: 'Fabrica picos de diamante x3' },
    ],
  },

  // ── D16-20: Minero del Nether ─────────────────────────────────
  {
    day: 16,
    title: 'DIA 16 - Portal al inframundo',
    reward: calcReward(16),
    tasks: [
      { item: 'minecraft:obsidian', amount: 14, title: 'Mina obsidiana x14' },
      { item: 'minecraft:diamond_pickaxe', amount: 2, title: 'Fabrica picos de diamante x2' },
      { item: 'minecraft:diamond', amount: 6, title: 'Recolecta diamantes x6' },
      { item: 'minecraft:water_bucket', amount: 2, title: 'Fabrica cubos de agua x2' },
      { item: 'minecraft:flint_and_steel', amount: 1, title: 'Fabrica mechero' },
    ],
  },
  {
    day: 17,
    title: 'DIA 17 - Cuarzo del Nether',
    reward: calcReward(17),
    tasks: [
      { item: 'minecraft:nether_quartz_ore', amount: 20, title: 'Mina mena de cuarzo x20' },
      { item: 'minecraft:quartz', amount: 64, title: 'Recolecta cuarzo x64' },
      { item: 'minecraft:nether_gold_ore', amount: 16, title: 'Mina oro del Nether x16' },
      { item: 'minecraft:gold_nugget', amount: 40, title: 'Recolecta pepitas de oro x40' },
      { item: 'minecraft:glowstone', amount: 16, title: 'Mina glowstone x16' },
    ],
  },
  {
    day: 18,
    title: 'DIA 18 - Trueque y tesoros dorados',
    reward: calcReward(18),
    tasks: [
      { item: 'minecraft:gold_nugget', amount: 72, title: 'Recolecta pepitas de oro x72' },
      { item: 'minecraft:gold_ingot', amount: 10, title: 'Craftea lingotes de oro x10' },
      { item: 'minecraft:nether_quartz_ore', amount: 32, title: 'Mina mena de cuarzo x32' },
      { item: 'minecraft:gilded_blackstone', amount: 8, title: 'Mina piedra negra dorada x8' },
      { item: 'minecraft:glowstone', amount: 32, title: 'Mina glowstone x32' },
    ],
  },
  {
    day: 19,
    title: 'DIA 19 - Rescoldo de la antigüedad',
    reward: calcReward(19),
    tasks: [
      { item: 'minecraft:ancient_debris', amount: 4, title: 'Mina escombros ancestrales x4' },
      { item: 'minecraft:netherite_scrap', amount: 4, title: 'Recolecta fragmento de netherita x4' },
      { item: 'minecraft:gold_ingot', amount: 16, title: 'Craftea lingotes de oro x16' },
      { item: 'minecraft:nether_quartz_ore', amount: 40, title: 'Mina mena de cuarzo x40' },
      { item: 'minecraft:glowstone', amount: 40, title: 'Mina glowstone x40' },
    ],
  },
  {
    day: 20,
    title: 'DIA 20 - Nace la netherita',
    reward: calcReward(20),
    tasks: [
      { item: 'minecraft:ancient_debris', amount: 8, title: 'Mina escombros ancestrales x8' },
      { item: 'minecraft:netherite_scrap', amount: 8, title: 'Recolecta fragmento de netherita x8' },
      { item: 'minecraft:netherite_ingot', amount: 1, title: 'Fabrica lingote de netherita' },
      { item: 'minecraft:netherite_pickaxe', amount: 1, title: 'Fabrica pico de netherita' },
      { item: 'minecraft:gold_ingot', amount: 24, title: 'Craftea lingotes de oro x24' },
    ],
  },

  // ── D21-25: Minero de Élite ───────────────────────────────────
  {
    day: 21,
    title: 'DIA 21 - La mesa de encantamientos',
    reward: calcReward(21),
    tasks: [
      { item: 'minecraft:obsidian', amount: 16, title: 'Mina obsidiana x16' },
      { item: 'minecraft:diamond', amount: 10, title: 'Recolecta diamantes x10' },
      { item: 'minecraft:diamond_pickaxe', amount: 2, title: 'Fabrica picos de diamante x2' },
      { item: 'minecraft:lapis_lazuli', amount: 96, title: 'Recolecta lapislázuli x96' },
      { item: 'minecraft:enchanting_table', amount: 1, title: 'Fabrica mesa de encantamientos' },
    ],
  },
  {
    day: 22,
    title: 'DIA 22 - Fortuna en las vetas',
    reward: calcReward(22),
    tasks: [
      { item: 'minecraft:raw_iron', amount: 96, title: 'Recolecta hierro crudo x96' },
      { item: 'minecraft:raw_gold', amount: 48, title: 'Recolecta oro crudo x48' },
      { item: 'minecraft:redstone', amount: 160, title: 'Recolecta redstone x160' },
      { item: 'minecraft:lapis_lazuli', amount: 160, title: 'Recolecta lapislázuli x160' },
      { item: 'minecraft:diamond', amount: 12, title: 'Recolecta diamantes x12' },
    ],
  },
  {
    day: 23,
    title: 'DIA 23 - Esmeraldas de las montañas',
    reward: calcReward(23),
    tasks: [
      { item: 'minecraft:deepslate_emerald_ore', amount: 6, title: 'Mina esmeralda profunda x6' },
      { item: 'minecraft:emerald', amount: 6, title: 'Recolecta esmeraldas x6' },
      { item: 'minecraft:diamond', amount: 16, title: 'Recolecta diamantes x16' },
      { item: 'minecraft:raw_iron', amount: 80, title: 'Recolecta hierro crudo x80' },
      { item: 'minecraft:raw_copper', amount: 96, title: 'Recolecta cobre crudo x96' },
    ],
  },
  {
    day: 24,
    title: 'DIA 24 - Geodas y ecos antiguos',
    reward: calcReward(24),
    tasks: [
      { item: 'minecraft:amethyst_shard', amount: 48, title: 'Recolecta fragmentos de amatista x48' },
      { item: 'minecraft:echo_shard', amount: 6, title: 'Recolecta fragmentos de eco x6' },
      { item: 'minecraft:calcite', amount: 24, title: 'Mina calcita x24' },
      { item: 'minecraft:smooth_basalt', amount: 24, title: 'Mina basalto liso x24' },
      { item: 'minecraft:tuff', amount: 48, title: 'Mina toba x48' },
    ],
  },
  {
    day: 25,
    title: 'DIA 25 - Toque de seda',
    reward: calcReward(25),
    tasks: [
      { item: 'minecraft:coal_ore', amount: 12, title: 'Mina mena de carbón con seda x12' },
      { item: 'minecraft:deepslate_diamond_ore', amount: 6, title: 'Mina mena de diamante con seda x6' },
      { item: 'minecraft:deepslate_emerald_ore', amount: 4, title: 'Mina mena de esmeralda con seda x4' },
      { item: 'minecraft:deepslate_redstone_ore', amount: 10, title: 'Mina mena de redstone con seda x10' },
      { item: 'minecraft:lapis_ore', amount: 10, title: 'Mina mena de lapislázuli con seda x10' },
    ],
  },

  // ── D26-30: Leyenda Subterránea ───────────────────────────────
  {
    day: 26,
    title: 'DIA 26 - El gran vaciado',
    reward: calcReward(26),
    tasks: [
      { item: 'minecraft:raw_iron', amount: 160, title: 'Recolecta hierro crudo x160' },
      { item: 'minecraft:raw_copper', amount: 128, title: 'Recolecta cobre crudo x128' },
      { item: 'minecraft:raw_gold', amount: 64, title: 'Recolecta oro crudo x64' },
      { item: 'minecraft:diamond', amount: 24, title: 'Recolecta diamantes x24' },
      { item: 'minecraft:redstone', amount: 256, title: 'Recolecta redstone x256' },
    ],
  },
  {
    day: 27,
    title: 'DIA 27 - Bloques desde las profundidades',
    reward: calcReward(27),
    tasks: [
      { item: 'minecraft:iron_block', amount: 10, title: 'Craftea bloques de hierro x10' },
      { item: 'minecraft:gold_block', amount: 6, title: 'Craftea bloques de oro x6' },
      { item: 'minecraft:emerald_block', amount: 2, title: 'Craftea bloques de esmeralda x2' },
      { item: 'minecraft:diamond_block', amount: 2, title: 'Craftea bloques de diamante x2' },
      { item: 'minecraft:obsidian', amount: 32, title: 'Mina obsidiana x32' },
    ],
  },
  {
    day: 28,
    title: 'DIA 28 - Colección minera completa',
    reward: calcReward(28),
    tasks: [
      { item: 'minecraft:coal', amount: 320, title: 'Mina carbón x320' },
      { item: 'minecraft:raw_iron', amount: 192, title: 'Recolecta hierro crudo x192' },
      { item: 'minecraft:raw_copper', amount: 192, title: 'Recolecta cobre crudo x192' },
      { item: 'minecraft:raw_gold', amount: 80, title: 'Recolecta oro crudo x80' },
      { item: 'minecraft:diamond', amount: 32, title: 'Recolecta diamantes x32' },
    ],
  },
  {
    day: 29,
    title: 'DIA 29 - Netherita suprema',
    reward: calcReward(29),
    tasks: [
      { item: 'minecraft:ancient_debris', amount: 16, title: 'Mina escombros ancestrales x16' },
      { item: 'minecraft:netherite_scrap', amount: 16, title: 'Recolecta fragmento de netherita x16' },
      { item: 'minecraft:netherite_ingot', amount: 3, title: 'Fabrica lingotes de netherita x3' },
      { item: 'minecraft:gold_ingot', amount: 32, title: 'Craftea lingotes de oro x32' },
      { item: 'minecraft:netherite_block', amount: 1, title: 'Craftea bloque de netherita' },
    ],
  },
  {
    day: 30,
    title: 'DIA 30 - Leyenda subterránea',
    reward: calcReward(30),
    tasks: [
      { item: 'minecraft:netherite_pickaxe', amount: 3, title: 'Fabrica picos de netherita x3' },
      { item: 'minecraft:shulker_box', amount: 4, title: 'Fabrica cajas de shulker x4' },
      { item: 'minecraft:beacon', amount: 1, title: 'Construye un faro' },
      { item: 'minecraft:diamond_block', amount: 9, title: 'Craftea bloques de diamante x9' },
      { item: 'minecraft:emerald_block', amount: 4, title: 'Craftea bloques de esmeralda x4' },
    ],
  },
];

writeQuests('minero', 'Minero', quests);
