import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const HERACLES_QUESTS = '/Users/daniel/Documents/prueba-server/config/heracles/quests';
const OUTPUT = join(__dirname, '..', 'src', 'data');

// Role metadata — emoji, color, and display name
const ROLE_META = {
  agricultor: { emoji: '🌾', color: '#7CB342', name: 'Agricultor' },
  alquimista: { emoji: '🧪', color: '#AB47BC', name: 'Alquimista' },
  arquitecto: { emoji: '🏗️', color: '#78909C', name: 'Arquitecto' },
  cocinero:   { emoji: '🍳', color: '#FF7043', name: 'Cocinero' },
  explorador: { emoji: '🗺️', color: '#42A5F5', name: 'Explorador' },
  ganadero:   { emoji: '🐄', color: '#8D6E63', name: 'Ganadero' },
  general:    { emoji: '⚔️', color: '#E53935', name: 'General' },
  herrero:    { emoji: '🔨', color: '#FFA726', name: 'Herrero' },
  ingeniero:  { emoji: '🔧', color: '#26C6DA', name: 'Ingeniero' },
  lenador:    { emoji: '🪓', color: '#66BB6A', name: 'Leñador' },
  minero:     { emoji: '⛏️', color: '#8D6E63', name: 'Minero' },
  pescador:   { emoji: '🎣', color: '#29B6F6', name: 'Pescador' },
  tabernero:  { emoji: '🍺', color: '#FFCA28', name: 'Tabernero' },
  mecanico:   { emoji: '🏎️', color: '#E53935', name: 'Mecánico' },
};

function extractRole(roleDir) {
  const roleId = roleDir.toLowerCase();
  const meta = ROLE_META[roleId] || { emoji: '📋', color: '#9E9E9E', name: roleDir };
  const days = [];
  
  const files = readdirSync(join(HERACLES_QUESTS, roleDir))
    .filter(f => f.endsWith('.json'))
    .sort((a, b) => {
      const numA = parseInt(a.match(/dia_(\d+)/)?.[1] || '0');
      const numB = parseInt(b.match(/dia_(\d+)/)?.[1] || '0');
      return numA - numB;
    });

  for (const file of files) {
    const raw = readFileSync(join(HERACLES_QUESTS, roleDir, file), 'utf-8');
    const json = JSON.parse(raw);
    
    const dayMatch = file.match(/dia_(\d+)/);
    const day = dayMatch ? parseInt(dayMatch[1]) : 0;
    
    const tasks = Object.values(json.tasks || {}).map(t => ({
      title: t.title || '',
      item: t.item || '',
      amount: t.amount || 1,
      icon: t.icon?.item?.id || t.item || 'minecraft:paper',
    }));

    // Extract reward — look for "pago" key first, then first reward
    const rewardEntry = json.rewards?.pago || Object.values(json.rewards || {})[0];
    let reward = { title: '0 monedas', amount: 0, icon: 'minecraft:paper' };
    
    if (rewardEntry) {
      const title = rewardEntry.title || '';
      // Try to extract numeric amount from title or item count
      let amount = 0;
      const titleMatch = title.match(/(\d+)/);
      if (titleMatch) amount = parseInt(titleMatch[1]);
      else if (rewardEntry.item?.count) amount = rewardEntry.item.count;
      
      reward = {
        title,
        amount,
        icon: rewardEntry.icon?.item?.id || rewardEntry.item?.id || 'minecraft:paper',
      };
    }

    const displayTitle = json.display?.title?.text || `DÍA ${day}`;

    days.push({
      day,
      title: displayTitle,
      tasks,
      reward,
    });
  }

  return {
    id: roleId,
    name: meta.name,
    emoji: meta.emoji,
    color: meta.color,
    days,
  };
}

function main() {
  if (!existsSync(HERACLES_QUESTS)) {
    console.error(`Heracles quests not found at: ${HERACLES_QUESTS}`);
    process.exit(1);
  }

  const roleDirs = readdirSync(HERACLES_QUESTS, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  const roles = roleDirs.map(extractRole);

  // Count total quests
  const totalDays = roles.reduce((sum, r) => sum + r.days.length, 0);
  console.log(`Extracted ${roles.length} roles, ${totalDays} total days of quests`);

  // Generate TypeScript file
  const tsContent = `// Auto-generated from Heracles quest configs — do not edit manually
// Roles: ${roles.map(r => r.name).join(', ')}

export interface QuestTask {
  title: string;
  item: string;
  amount: number;
  icon: string;
}

export interface QuestReward {
  title: string;
  amount: number;
  icon: string;
}

export interface DayQuest {
  day: number;
  title: string;
  tasks: QuestTask[];
  reward: QuestReward;
}

export interface Role {
  id: string;
  name: string;
  emoji: string;
  color: string;
  days: DayQuest[];
}

export const roles: Role[] = ${JSON.stringify(roles, null, 2)};

export function getRoleById(id: string): Role | undefined {
  return roles.find(r => r.id === id);
}

export function getWeekDay(day: number): string {
  // Map days 1-30 to weeks. Day 1 = Monday of week 1
  const dayNames = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  return dayNames[(day - 1) % 7];
}

export function getWeekNumber(day: number): number {
  return Math.ceil(day / 7);
}
`;

  if (!existsSync(OUTPUT)) {
    mkdirSync(OUTPUT, { recursive: true });
  }

  writeFileSync(join(OUTPUT, 'quests.ts'), tsContent, 'utf-8');
  console.log(`Written to ${join(OUTPUT, 'quests.ts')}`);
}

main();
