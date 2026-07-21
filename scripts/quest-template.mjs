/**
 * Shared quest generator — used by sub-agents to create Heracles quest JSONs.
 * 
 * Each sub-agent calls `writeQuests(roleDir, roleName, quests)` where `quests`
 * is an array of 30 day objects:
 * 
 * {
 *   day: number,
 *   title: string,           // e.g. "DIA 1 - Primeros pasos"
 *   reward: number,          // monedas amount (scales 65→1300 over 30 days)
 *   tasks: [
 *     { item: "modid:item_id", amount: number, title: "Tarea en español" },
 *     ... (exactly 5 tasks)
 *   ]
 * }
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const BASE_DIR = '/Users/daniel/Documents/prueba-server/config/heracles/quests';

function getRewardItem(amount) {
  if (amount <= 100) return { id: 'saros__money_mod:euro_100', count: 1 };
  const count = Math.ceil(amount / 100);
  return { id: 'saros__money_mod:euro_100', count };
}

export function writeQuests(roleDir, roleName, quests) {
  const outDir = join(BASE_DIR, roleDir);
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  for (const quest of quests) {
    const { day, title, reward, tasks } = quest;
    
    // Optional: allow tasks to have icon override
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
