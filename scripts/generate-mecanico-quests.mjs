import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const OUT_DIR = '/Users/daniel/Documents/prueba-server/config/heracles/quests/mecanico';

// Quest definitions for 30 days
// Each day: array of 5 tasks { item, amount, title } + reward amount
const QUESTS = [
  // ─── WEEK 1: EL TALLER ───────────────────────────
  {
    day: 1, reward: 65, title: 'DIA 1 - Bienvenido al taller',
    tasks: [
      { item: 'minecraft:iron_ingot', amount: 2, title: 'Consigue hierro x2' },
      { item: 'minecraft:coal', amount: 3, title: 'Mina carbón x3' },
      { item: 'minecraft:redstone', amount: 2, title: 'Recolecta redstone x2' },
      { item: 'minecraft:crafting_table', amount: 1, title: 'Fabrica mesa de trabajo' },
      { item: 'minecraft:furnace', amount: 1, title: 'Construye un horno' },
    ],
  },
  {
    day: 2, reward: 75, title: 'DIA 2 - Herramientas básicas',
    tasks: [
      { item: 'minecraft:iron_pickaxe', amount: 1, title: 'Fabrica pico de hierro' },
      { item: 'minecraft:iron_axe', amount: 1, title: 'Fabrica hacha de hierro' },
      { item: 'minecraft:iron_shovel', amount: 1, title: 'Fabrica pala de hierro' },
      { item: 'automobility:crowbar', amount: 1, title: 'Fabrica palanca de mecánico' },
      { item: 'minecraft:stone', amount: 16, title: 'Reúne piedra x16' },
    ],
  },
  {
    day: 3, reward: 85, title: 'DIA 3 - Montando el taller',
    tasks: [
      { item: 'automobility:auto_mechanic_table', amount: 1, title: 'Fabrica Mesa de Mecánico' },
      { item: 'minecraft:iron_block', amount: 1, title: 'Compacta hierro en bloque' },
      { item: 'minecraft:chest', amount: 2, title: 'Fabrica cofres x2' },
      { item: 'minecraft:iron_ingot', amount: 5, title: 'Funde hierro x5' },
      { item: 'minecraft:anvil', amount: 1, title: 'Construye un yunque' },
    ],
  },
  {
    day: 4, reward: 100, title: 'DIA 4 - Primeras piezas',
    tasks: [
      { item: 'automobility:automobile_frame', amount: 1, title: 'Fabrica bastidor de coche' },
      { item: 'automobility:wheel', amount: 2, title: 'Fabrica ruedas x2' },
      { item: 'minecraft:iron_ingot', amount: 4, title: 'Refina hierro x4' },
      { item: 'minecraft:leather', amount: 3, title: 'Consigue cuero x3' },
      { item: 'minecraft:slime_ball', amount: 2, title: 'Consigue slime x2' },
    ],
  },
  {
    day: 5, reward: 110, title: 'DIA 5 - El motor',
    tasks: [
      { item: 'automobility:engine', amount: 1, title: 'Fabrica el primer motor' },
      { item: 'automobility:wheel', amount: 2, title: 'Fabrica ruedas extra x2' },
      { item: 'minecraft:gold_ingot', amount: 2, title: 'Funde oro x2' },
      { item: 'minecraft:redstone_block', amount: 1, title: 'Compacta redstone en bloque' },
      { item: 'minecraft:piston', amount: 2, title: 'Fabrica pistones x2' },
    ],
  },
  {
    day: 6, reward: 125, title: 'DIA 6 - Ensamblaje',
    tasks: [
      { item: 'automobility:automobile_assembler', amount: 1, title: 'Fabrica Ensamblador de Coches' },
      { item: 'automobility:automobile_frame', amount: 1, title: 'Prepara otro bastidor' },
      { item: 'minecraft:iron_ingot', amount: 6, title: 'Funde hierro x6' },
      { item: 'minecraft:observer', amount: 1, title: 'Fabrica observador' },
      { item: 'minecraft:dispenser', amount: 1, title: 'Fabrica dispensador' },
    ],
  },
  {
    day: 7, reward: 140, title: 'DIA 7 - ¡Tu primer coche!',
    tasks: [
      { item: 'automobility:engine', amount: 1, title: 'Fabrica motor mejorado' },
      { item: 'automobility:wheel', amount: 4, title: 'Fabrica juego completo de ruedas' },
      { item: 'automobility:automobile_frame', amount: 1, title: 'Bastidor de competición' },
      { item: 'minecraft:diamond', amount: 1, title: 'Consigue un diamante' },
      { item: 'automobility:crowbar', amount: 1, title: 'Palanca de repuesto' },
    ],
  },
  // ─── WEEK 2: LA PISTA ────────────────────────────
  {
    day: 8, reward: 160, title: 'DIA 8 - Construyendo la pista',
    tasks: [
      { item: 'automobility:dash_panel', amount: 4, title: 'Fabrica paneles de pista x4' },
      { item: 'automobility:slope', amount: 3, title: 'Fabrica rampas x3' },
      { item: 'automobility:off_road', amount: 4, title: 'Fabrica baldosas off-road x4' },
      { item: 'minecraft:stone_bricks', amount: 16, title: 'Ladrillos de piedra x16' },
      { item: 'minecraft:glowstone', amount: 2, title: 'Iluminación de pista' },
    ],
  },
  {
    day: 9, reward: 175, title: 'DIA 9 - Trazado del circuito',
    tasks: [
      { item: 'automobility:dash_panel', amount: 6, title: 'Paneles de pista x6' },
      { item: 'automobility:slope', amount: 5, title: 'Rampas para curvas x5' },
      { item: 'minecraft:white_wool', amount: 8, title: 'Marca la línea de meta' },
      { item: 'minecraft:redstone_lamp', amount: 4, title: 'Semáforos de carrera' },
      { item: 'minecraft:iron_bars', amount: 6, title: 'Barreras de seguridad' },
    ],
  },
  {
    day: 10, reward: 190, title: 'DIA 10 - Primera vuelta',
    tasks: [
      { item: 'minecraft:iron_ingot', amount: 8, title: 'Repuestos de hierro x8' },
      { item: 'automobility:engine', amount: 1, title: 'Motor de prueba' },
      { item: 'minecraft:coal_block', amount: 2, title: 'Bloque de carbón (combustible)' },
      { item: 'automobility:wheel', amount: 2, title: 'Ruedas de repuesto' },
      { item: 'minecraft:golden_carrot', amount: 3, title: 'Snack de carreras x3' },
    ],
  },
  {
    day: 11, reward: 210, title: 'DIA 11 - Ajustes y mejoras',
    tasks: [
      { item: 'minecraft:diamond', amount: 2, title: 'Diamantes para mejoras x2' },
      { item: 'minecraft:obsidian', amount: 4, title: 'Obsidiana reforzada x4' },
      { item: 'automobility:dash_panel', amount: 8, title: 'Extensión de pista x8' },
      { item: 'minecraft:powered_rail', amount: 6, title: 'Rieles impulsores x6' },
      { item: 'minecraft:note_block', amount: 2, title: 'Bocina de carrera' },
    ],
  },
  {
    day: 12, reward: 230, title: 'DIA 12 - Velocidad punta',
    tasks: [
      { item: 'automobility:engine', amount: 2, title: 'Motores mejorados x2' },
      { item: 'minecraft:gold_block', amount: 1, title: 'Bloque de oro (turbo)' },
      { item: 'minecraft:nether_quartz', amount: 4, title: 'Cuarzo del Nether x4' },
      { item: 'automobility:wheel', amount: 4, title: 'Ruedas de alto rendimiento' },
      { item: 'minecraft:fire_charge', amount: 2, title: 'Carga ígnea (nitro)' },
    ],
  },
  {
    day: 13, reward: 250, title: 'DIA 13 - Pit Stop',
    tasks: [
      { item: 'minecraft:iron_block', amount: 2, title: 'Bloques de hierro x2' },
      { item: 'automobility:crowbar', amount: 2, title: 'Palancas de pits x2' },
      { item: 'automobility:auto_mechanic_table', amount: 1, title: 'Mesa en boxes' },
      { item: 'minecraft:hopper', amount: 3, title: 'Tolvas de suministros x3' },
      { item: 'minecraft:ender_chest', amount: 1, title: 'Cofre de repuestos' },
    ],
  },
  {
    day: 14, reward: 275, title: 'DIA 14 - Gran Premio de prueba',
    tasks: [
      { item: 'automobility:dash_panel', amount: 10, title: 'Circuito completo x10' },
      { item: 'automobility:off_road', amount: 6, title: 'Zona de grava x6' },
      { item: 'minecraft:beacon', amount: 1, title: 'Torre de control' },
      { item: 'minecraft:diamond_block', amount: 1, title: 'Trofeo de prueba' },
      { item: 'automobility:engine', amount: 1, title: 'Motor de reserva' },
    ],
  },
  // ─── WEEK 3: INGENIERÍA DE CARRERAS ──────────────
  {
    day: 15, reward: 300, title: 'DIA 15 - Aerodinámica',
    tasks: [
      { item: 'minecraft:iron_block', amount: 3, title: 'Carrocería reforzada x3' },
      { item: 'minecraft:slime_block', amount: 2, title: 'Bloques elásticos x2' },
      { item: 'automobility:slope', amount: 6, title: 'Rampas aerodinámicas x6' },
      { item: 'minecraft:light_weighted_pressure_plate', amount: 2, title: 'Sensor de peso' },
      { item: 'minecraft:phantom_membrane', amount: 2, title: 'Membrana de alerón' },
    ],
  },
  {
    day: 16, reward: 325, title: 'DIA 16 - Neumáticos de competición',
    tasks: [
      { item: 'automobility:wheel', amount: 6, title: 'Ruedas slick x6' },
      { item: 'minecraft:black_wool', amount: 4, title: 'Goma quemada x4' },
      { item: 'minecraft:coal_block', amount: 3, title: 'Carbón para caucho x3' },
      { item: 'minecraft:iron_ingot', amount: 10, title: 'Llanta de aleación x10' },
      { item: 'minecraft:slime_ball', amount: 4, title: 'Compuesto adhesivo x4' },
    ],
  },
  {
    day: 17, reward: 350, title: 'DIA 17 - Sistema de escape',
    tasks: [
      { item: 'minecraft:furnace', amount: 3, title: 'Tubos de escape x3' },
      { item: 'minecraft:iron_bars', amount: 4, title: 'Rejilla de ventilación x4' },
      { item: 'automobility:engine', amount: 2, title: 'Motores turbo x2' },
      { item: 'minecraft:blast_furnace', amount: 1, title: 'Alto horno (fundición)' },
      { item: 'minecraft:nether_bricks', amount: 8, title: 'Ladrillos refractarios' },
    ],
  },
  {
    day: 18, reward: 375, title: 'DIA 18 - Electrónica de a bordo',
    tasks: [
      { item: 'minecraft:redstone_block', amount: 2, title: 'Centralita electrónica' },
      { item: 'minecraft:comparator', amount: 2, title: 'Comparadores x2' },
      { item: 'minecraft:daylight_detector', amount: 1, title: 'Sensor de luz' },
      { item: 'minecraft:repeater', amount: 4, title: 'Repetidores de señal x4' },
      { item: 'minecraft:target', amount: 2, title: 'Sensor de proximidad' },
    ],
  },
  {
    day: 19, reward: 400, title: 'DIA 19 - Clasificación',
    tasks: [
      { item: 'automobility:dash_panel', amount: 12, title: 'Pista de clasificación' },
      { item: 'minecraft:redstone_lamp', amount: 6, title: 'Panel de tiempos x6' },
      { item: 'minecraft:clock', amount: 2, title: 'Cronómetros x2' },
      { item: 'automobility:engine', amount: 1, title: 'Motor de clasificación' },
      { item: 'minecraft:emerald', amount: 2, title: 'Premio pole position' },
    ],
  },
  {
    day: 20, reward: 430, title: 'DIA 20 - Pole Position',
    tasks: [
      { item: 'automobility:off_road', amount: 8, title: 'Escapatorias x8' },
      { item: 'minecraft:sea_lantern', amount: 4, title: 'Iluminación LED x4' },
      { item: 'automobility:wheel', amount: 4, title: 'Ruedas de clasificación' },
      { item: 'minecraft:lapis_block', amount: 2, title: 'Patrocinador azul' },
      { item: 'minecraft:diamond', amount: 3, title: 'Contrato de patrocinio' },
    ],
  },
  {
    day: 21, reward: 460, title: 'DIA 21 - Safety Car',
    tasks: [
      { item: 'minecraft:gold_block', amount: 2, title: 'Coche de seguridad' },
      { item: 'minecraft:orange_wool', amount: 6, title: 'Banderas naranjas x6' },
      { item: 'minecraft:redstone_torch', amount: 4, title: 'Luces de advertencia' },
      { item: 'automobility:dash_panel', amount: 6, title: 'Zona de safety car' },
      { item: 'minecraft:iron_trapdoor', amount: 4, title: 'Barrera móvil x4' },
    ],
  },
  // ─── WEEK 4: CAMPEONATO ──────────────────────────
  {
    day: 22, reward: 500, title: 'DIA 22 - Coche de reserva',
    tasks: [
      { item: 'automobility:automobile_frame', amount: 2, title: 'Bastidores x2' },
      { item: 'automobility:engine', amount: 2, title: 'Motores de reserva x2' },
      { item: 'automobility:wheel', amount: 8, title: 'Ruedas completas x8' },
      { item: 'automobility:automobile_assembler', amount: 1, title: 'Segundo ensamblador' },
      { item: 'minecraft:iron_block', amount: 4, title: 'Refuerzos de chasis x4' },
    ],
  },
  {
    day: 23, reward: 540, title: 'DIA 23 - Gran Premio Sprint',
    tasks: [
      { item: 'automobility:slope', amount: 8, title: 'Curvas técnicas x8' },
      { item: 'minecraft:gold_ingot', amount: 6, title: 'Medallas de sprint x6' },
      { item: 'automobility:dash_panel', amount: 10, title: 'Circuito sprint x10' },
      { item: 'minecraft:emerald_block', amount: 1, title: 'Trofeo de etapa' },
      { item: 'automobility:engine', amount: 1, title: 'Motor sprint' },
    ],
  },
  {
    day: 24, reward: 580, title: 'DIA 24 - Resistencia',
    tasks: [
      { item: 'automobility:off_road', amount: 10, title: 'Tramo de resistencia' },
      { item: 'minecraft:coal_block', amount: 5, title: 'Combustible extra x5' },
      { item: 'automobility:wheel', amount: 6, title: 'Ruedas de larga distancia' },
      { item: 'minecraft:gapple', amount: 3, title: 'Manzanas doradas (avituallamiento)' },
      { item: 'automobility:auto_mechanic_table', amount: 1, title: 'Box móvil' },
    ],
  },
  {
    day: 25, reward: 620, title: 'DIA 25 - Lluvia y adversidad',
    tasks: [
      { item: 'minecraft:water_bucket', amount: 3, title: 'Simulación de lluvia x3' },
      { item: 'automobility:wheel', amount: 4, title: 'Ruedas de lluvia x4' },
      { item: 'minecraft:sponge', amount: 2, title: 'Drenaje de pista x2' },
      { item: 'minecraft:soul_torch', amount: 4, title: 'Antorchas de visibilidad' },
      { item: 'automobility:dash_panel', amount: 8, title: 'Pista mojada x8' },
    ],
  },
  {
    day: 26, reward: 680, title: 'DIA 26 - Gran Premio Nocturno',
    tasks: [
      { item: 'minecraft:sea_lantern', amount: 8, title: 'Iluminación nocturna x8' },
      { item: 'minecraft:glowstone', amount: 6, title: 'Faros de pista x6' },
      { item: 'automobility:dash_panel', amount: 12, title: 'Circuito iluminado x12' },
      { item: 'minecraft:ender_eye', amount: 2, title: 'Visión nocturna' },
      { item: 'minecraft:nether_star', amount: 1, title: 'Trofeo estelar' },
    ],
  },
  {
    day: 27, reward: 750, title: 'DIA 27 - Semifinal',
    tasks: [
      { item: 'automobility:engine', amount: 3, title: 'Motores de competición x3' },
      { item: 'minecraft:diamond_block', amount: 1, title: 'Patrocinador diamante' },
      { item: 'automobility:wheel', amount: 8, title: 'Ruedas premium x8' },
      { item: 'minecraft:beacon', amount: 1, title: 'Trofeo de semifinal' },
      { item: 'automobility:automobile_frame', amount: 1, title: 'Chasis de campeonato' },
    ],
  },
  {
    day: 28, reward: 850, title: 'DIA 28 - La Gran Final',
    tasks: [
      { item: 'automobility:dash_panel', amount: 16, title: 'Circuito del campeonato' },
      { item: 'automobility:slope', amount: 10, title: 'Curvas definitivas x10' },
      { item: 'minecraft:diamond_block', amount: 2, title: 'Trofeo de campeón' },
      { item: 'automobility:engine', amount: 2, title: 'Motores de la final' },
      { item: 'minecraft:emerald_block', amount: 3, title: 'Contratos de F1' },
    ],
  },
  // ─── WEEK 5: LEYENDA ─────────────────────────────
  {
    day: 29, reward: 1000, title: 'DIA 29 - Salón de la Fama',
    tasks: [
      { item: 'minecraft:emerald_block', amount: 4, title: 'Museo del motor' },
      { item: 'minecraft:item_frame', amount: 8, title: 'Expositor de trofeos x8' },
      { item: 'automobility:automobile_frame', amount: 2, title: 'Coches de exhibición' },
      { item: 'minecraft:netherite_ingot', amount: 1, title: 'Placa conmemorativa' },
      { item: 'minecraft:beacon', amount: 2, title: 'Columnas de la fama x2' },
    ],
  },
  {
    day: 30, reward: 1300, title: 'DIA 30 - Leyenda de Snickerland',
    tasks: [
      { item: 'automobility:dash_panel', amount: 20, title: 'Autódromo Snickerland' },
      { item: 'automobility:engine', amount: 4, title: 'Motores legendarios x4' },
      { item: 'minecraft:netherite_block', amount: 1, title: 'Trofeo de Leyenda' },
      { item: 'automobility:wheel', amount: 10, title: 'Ruedas supremas x10' },
      { item: 'minecraft:enchanted_golden_apple', amount: 2, title: 'Celebración del campeón' },
    ],
  },
];

// Rewards use the saros money mod
const MONEY_ICONS = {
  50: { id: 'saros__money_mod:euro_50', count: 1 },
  100: { id: 'saros__money_mod:euro_100', count: 1 },
  200: { id: 'saros__money_mod:euro_200', count: 1 },
  500: { id: 'saros__money_mod:euro_500', count: 1 },
};

function getRewardItem(amount) {
  // Use the appropriate bill denominations
  if (amount <= 50) return { id: 'saros__money_mod:euro_50', count: 1 };
  if (amount <= 100) return { id: 'saros__money_mod:euro_100', count: 1 };
  if (amount <= 500) return { id: 'saros__money_mod:euro_200', count: Math.ceil(amount / 200) };
  // For larger amounts use euro_100 with multiple count
  const count = Math.ceil(amount / 100);
  return { id: 'saros__money_mod:euro_100', count };
}

if (!existsSync(OUT_DIR)) {
  mkdirSync(OUT_DIR, { recursive: true });
}

for (const quest of QUESTS) {
  const { day, reward, title, tasks } = quest;

  // Build tasks object
  const tasksObj = {};
  tasks.forEach((t, i) => {
    const key = `t${i + 1}`;
    tasksObj[key] = {
      type: 'heracles:item',
      item: t.item,
      amount: t.amount,
      collection: 'AUTOMATIC',
      title: t.title,
      icon: {
        item: {
          id: t.item,
          count: 1,
        },
        type: 'heracles:item',
      },
    };
  });

  const rewardItem = getRewardItem(reward);

  const questJson = {
    dependencies: [],
    tasks: tasksObj,
    rewards: {
      pago: {
        title: `${reward} monedas`,
        icon: {
          item: rewardItem,
          type: 'heracles:item',
        },
        item: rewardItem,
        type: 'heracles:item',
      },
    },
    display: {
      subtitle: { text: '' },
      description: [''],
      groups: {
        Mecanico: {
          position: [
            -32,
            -(43 + (day - 1) * 15),
          ],
        },
      },
      icon: {
        item: {
          id: 'minecraft:map',
          count: 1,
        },
        type: 'heracles:item',
      },
      icon_background: 'heracles:textures/gui/quest_backgrounds/default.png',
      title: {
        text: title,
      },
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

  const filename = `mecanico_dia_${day}.json`;
  writeFileSync(join(OUT_DIR, filename), JSON.stringify(questJson, null, 2), 'utf-8');
  console.log(`  ✓ ${filename} — ${title} (${reward} monedas)`);
}

console.log(`\n✅ ${QUESTS.length} quests creados en ${OUT_DIR}`);
