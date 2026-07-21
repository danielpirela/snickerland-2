/**
 * Genera 30 quests progresivos para INGENIERO en Snickerland 2.
 * Cada día enseña un circuito o máquina de redstone NUEVA.
 * No hay repetición — cada día es una combinación única de ítems.
 */

import { writeQuests } from './quest-template.mjs';

const quests = [
  // ═══════════════════════════════════════════
  // FASE 1: Aprendiz de redstone (D1-D5)
  // ═══════════════════════════════════════════

  {
    day: 1, title: 'DIA 1 - Jornada 1', reward: 65,
    tasks: [
      { item: 'minecraft:redstone', amount: 5, title: 'Mina redstone x5' },
      { item: 'minecraft:redstone_torch', amount: 2, title: 'Fabrica antorcha redstone x2' },
      { item: 'minecraft:lever', amount: 1, title: 'Craftea palanca x1' },
      { item: 'minecraft:redstone_lamp', amount: 2, title: 'Fabrica lámpara redstone x2' },
      { item: 'minecraft:stone', amount: 10, title: 'Mina piedra x10' },
    ],
  },
  {
    day: 2, title: 'DIA 2 - Jornada 2', reward: 76,
    tasks: [
      { item: 'minecraft:stone_button', amount: 2, title: 'Fabrica botón de piedra x2' },
      { item: 'minecraft:oak_pressure_plate', amount: 1, title: 'Craftea placa presión roble x1' },
      { item: 'minecraft:redstone', amount: 6, title: 'Mina redstone x6' },
      { item: 'minecraft:iron_door', amount: 1, title: 'Fabrica puerta de hierro x1' },
      { item: 'minecraft:stone', amount: 12, title: 'Mina piedra x12' },
    ],
  },
  {
    day: 3, title: 'DIA 3 - Jornada 3', reward: 87,
    tasks: [
      { item: 'minecraft:repeater', amount: 3, title: 'Craftea repetidor x3' },
      { item: 'minecraft:redstone', amount: 8, title: 'Mina redstone x8' },
      { item: 'minecraft:redstone_torch', amount: 4, title: 'Fabrica antorcha redstone x4' },
      { item: 'minecraft:stone', amount: 14, title: 'Mina piedra x14' },
      { item: 'minecraft:redstone_lamp', amount: 3, title: 'Fabrica lámpara redstone x3' },
    ],
  },
  {
    day: 4, title: 'DIA 4 - Jornada 4', reward: 99,
    tasks: [
      { item: 'minecraft:comparator', amount: 2, title: 'Craftea comparador x2' },
      { item: 'minecraft:repeater', amount: 2, title: 'Craftea repetidor x2' },
      { item: 'minecraft:redstone', amount: 10, title: 'Mina redstone x10' },
      { item: 'minecraft:quartz', amount: 4, title: 'Mina cuarzo del Nether x4' },
      { item: 'minecraft:chest', amount: 3, title: 'Fabrica cofre x3' },
    ],
  },
  {
    day: 5, title: 'DIA 5 - Jornada 5', reward: 110,
    tasks: [
      { item: 'minecraft:note_block', amount: 4, title: 'Craftea bloque musical x4' },
      { item: 'minecraft:redstone', amount: 12, title: 'Mina redstone x12' },
      { item: 'minecraft:repeater', amount: 3, title: 'Craftea repetidor x3' },
      { item: 'minecraft:lever', amount: 2, title: 'Craftea palanca x2' },
      { item: 'minecraft:redstone_torch', amount: 3, title: 'Fabrica antorcha redstone x3' },
    ],
  },

  // ═══════════════════════════════════════════
  // FASE 2: Mecánico (D6-D10)
  // ═══════════════════════════════════════════

  {
    day: 6, title: 'DIA 6 - Jornada 6', reward: 126,
    tasks: [
      { item: 'minecraft:piston', amount: 4, title: 'Fabrica pistón x4' },
      { item: 'minecraft:redstone', amount: 12, title: 'Mina redstone x12' },
      { item: 'minecraft:lever', amount: 2, title: 'Craftea palanca x2' },
      { item: 'minecraft:cobblestone', amount: 24, title: 'Mina roca x24' },
      { item: 'minecraft:redstone_torch', amount: 3, title: 'Fabrica antorcha redstone x3' },
    ],
  },
  {
    day: 7, title: 'DIA 7 - Jornada 7', reward: 142,
    tasks: [
      { item: 'minecraft:sticky_piston', amount: 4, title: 'Fabrica pistón pegajoso x4' },
      { item: 'minecraft:slime_ball', amount: 4, title: 'Consigue bola de slime x4' },
      { item: 'minecraft:redstone', amount: 15, title: 'Mina redstone x15' },
      { item: 'minecraft:repeater', amount: 4, title: 'Craftea repetidor x4' },
      { item: 'minecraft:piston', amount: 2, title: 'Fabrica pistón x2' },
    ],
  },
  {
    day: 8, title: 'DIA 8 - Jornada 8', reward: 158,
    tasks: [
      { item: 'minecraft:observer', amount: 4, title: 'Fabrica observador x4' },
      { item: 'minecraft:piston', amount: 3, title: 'Fabrica pistón x3' },
      { item: 'minecraft:redstone', amount: 16, title: 'Mina redstone x16' },
      { item: 'minecraft:quartz', amount: 4, title: 'Mina cuarzo del Nether x4' },
      { item: 'minecraft:cobblestone', amount: 32, title: 'Mina roca x32' },
    ],
  },
  {
    day: 9, title: 'DIA 9 - Jornada 9', reward: 174,
    tasks: [
      { item: 'minecraft:dispenser', amount: 3, title: 'Craftea dispensador x3' },
      { item: 'minecraft:redstone', amount: 14, title: 'Mina redstone x14' },
      { item: 'minecraft:dropper', amount: 2, title: 'Craftea soltador x2' },
      { item: 'minecraft:bow', amount: 1, title: 'Craftea arco x1' },
      { item: 'minecraft:arrow', amount: 16, title: 'Fabrica flechas x16' },
    ],
  },
  {
    day: 10, title: 'DIA 10 - Jornada 10', reward: 190,
    tasks: [
      { item: 'minecraft:hopper', amount: 5, title: 'Fabrica tolva x5' },
      { item: 'minecraft:dropper', amount: 3, title: 'Craftea soltador x3' },
      { item: 'minecraft:chest', amount: 4, title: 'Fabrica cofre x4' },
      { item: 'minecraft:redstone', amount: 15, title: 'Mina redstone x15' },
      { item: 'minecraft:iron_ingot', amount: 6, title: 'Funde lingote hierro x6' },
    ],
  },

  // ═══════════════════════════════════════════
  // FASE 3: Ingeniero de sistemas (D11-D15)
  // ═══════════════════════════════════════════

  {
    day: 11, title: 'DIA 11 - Jornada 11', reward: 212,
    tasks: [
      { item: 'minecraft:observer', amount: 4, title: 'Fabrica observador x4' },
      { item: 'minecraft:piston', amount: 6, title: 'Fabrica pistón x6' },
      { item: 'minecraft:hopper', amount: 6, title: 'Fabrica tolva x6' },
      { item: 'minecraft:chest', amount: 3, title: 'Fabrica cofre x3' },
      { item: 'minecraft:redstone', amount: 18, title: 'Mina redstone x18' },
    ],
  },
  {
    day: 12, title: 'DIA 12 - Jornada 12', reward: 234,
    tasks: [
      { item: 'minecraft:observer', amount: 5, title: 'Fabrica observador x5' },
      { item: 'minecraft:piston', amount: 6, title: 'Fabrica pistón x6' },
      { item: 'minecraft:slime_block', amount: 4, title: 'Craftea bloque de slime x4' },
      { item: 'minecraft:hopper', amount: 4, title: 'Fabrica tolva x4' },
      { item: 'minecraft:minecart', amount: 1, title: 'Fabrica vagoneta x1' },
    ],
  },
  {
    day: 13, title: 'DIA 13 - Jornada 13', reward: 256,
    tasks: [
      { item: 'minecraft:hopper', amount: 8, title: 'Fabrica tolva x8' },
      { item: 'minecraft:comparator', amount: 4, title: 'Craftea comparador x4' },
      { item: 'minecraft:redstone', amount: 22, title: 'Mina redstone x22' },
      { item: 'minecraft:redstone_torch', amount: 6, title: 'Fabrica antorcha redstone x6' },
      { item: 'minecraft:repeater', amount: 5, title: 'Craftea repetidor x5' },
    ],
  },
  {
    day: 14, title: 'DIA 14 - Jornada 14', reward: 278,
    tasks: [
      { item: 'minecraft:powered_rail', amount: 16, title: 'Fabrica rail propulsor x16' },
      { item: 'minecraft:detector_rail', amount: 4, title: 'Fabrica rail detector x4' },
      { item: 'minecraft:minecart', amount: 2, title: 'Fabrica vagoneta x2' },
      { item: 'minecraft:gold_ingot', amount: 6, title: 'Funde lingote oro x6' },
      { item: 'minecraft:redstone', amount: 12, title: 'Mina redstone x12' },
    ],
  },
  {
    day: 15, title: 'DIA 15 - Jornada 15', reward: 300,
    tasks: [
      { item: 'minecraft:hopper_minecart', amount: 2, title: 'Fabrica vagoneta tolva x2' },
      { item: 'minecraft:furnace', amount: 4, title: 'Fabrica horno x4' },
      { item: 'minecraft:hopper', amount: 6, title: 'Fabrica tolva x6' },
      { item: 'minecraft:chest', amount: 3, title: 'Fabrica cofre x3' },
      { item: 'minecraft:redstone', amount: 14, title: 'Mina redstone x14' },
    ],
  },

  // ═══════════════════════════════════════════
  // FASE 4: Ingeniero avanzado (D16-D20)
  // ═══════════════════════════════════════════

  {
    day: 16, title: 'DIA 16 - Jornada 16', reward: 326,
    tasks: [
      { item: 'minecraft:tnt', amount: 8, title: 'Fabrica TNT x8' },
      { item: 'minecraft:dispenser', amount: 3, title: 'Craftea dispensador x3' },
      { item: 'minecraft:redstone', amount: 18, title: 'Mina redstone x18' },
      { item: 'minecraft:water_bucket', amount: 1, title: 'Craftea cubo de agua x1' },
      { item: 'minecraft:stone', amount: 32, title: 'Mina piedra x32' },
    ],
  },
  {
    day: 17, title: 'DIA 17 - Jornada 17', reward: 352,
    tasks: [
      { item: 'minecraft:slime_block', amount: 10, title: 'Craftea bloque de slime x10' },
      { item: 'minecraft:piston', amount: 4, title: 'Fabrica pistón x4' },
      { item: 'minecraft:observer', amount: 6, title: 'Fabrica observador x6' },
      { item: 'minecraft:sticky_piston', amount: 6, title: 'Fabrica pistón pegajoso x6' },
      { item: 'minecraft:redstone_block', amount: 2, title: 'Craftea bloque redstone x2' },
    ],
  },
  {
    day: 18, title: 'DIA 18 - Jornada 18', reward: 378,
    tasks: [
      { item: 'minecraft:note_block', amount: 8, title: 'Craftea bloque musical x8' },
      { item: 'minecraft:repeater', amount: 12, title: 'Craftea repetidor x12' },
      { item: 'minecraft:redstone', amount: 28, title: 'Mina redstone x28' },
      { item: 'minecraft:lever', amount: 3, title: 'Craftea palanca x3' },
      { item: 'minecraft:redstone_torch', amount: 5, title: 'Fabrica antorcha redstone x5' },
    ],
  },
  {
    day: 19, title: 'DIA 19 - Jornada 19', reward: 404,
    tasks: [
      { item: 'minecraft:daylight_detector', amount: 2, title: 'Fabrica sensor luz diurna x2' },
      { item: 'minecraft:redstone_lamp', amount: 8, title: 'Fabrica lámpara redstone x8' },
      { item: 'minecraft:redstone', amount: 14, title: 'Mina redstone x14' },
      { item: 'minecraft:glass', amount: 16, title: 'Funde vidrio x16' },
      { item: 'minecraft:quartz', amount: 4, title: 'Mina cuarzo del Nether x4' },
    ],
  },
  {
    day: 20, title: 'DIA 20 - Jornada 20', reward: 430,
    tasks: [
      { item: 'minecraft:honey_block', amount: 6, title: 'Craftea bloque de miel x6' },
      { item: 'minecraft:slime_block', amount: 6, title: 'Craftea bloque de slime x6' },
      { item: 'minecraft:sticky_piston', amount: 8, title: 'Fabrica pistón pegajoso x8' },
      { item: 'minecraft:redstone', amount: 22, title: 'Mina redstone x22' },
      { item: 'minecraft:repeater', amount: 8, title: 'Craftea repetidor x8' },
    ],
  },

  // ═══════════════════════════════════════════
  // FASE 5: Arquitecto de máquinas (D21-D25)
  // ═══════════════════════════════════════════

  {
    day: 21, title: 'DIA 21 - Jornada 21', reward: 468,
    tasks: [
      { item: 'minecraft:calibrated_sculk_sensor', amount: 2, title: 'Fabrica sensor sculk calibrado x2' },
      { item: 'minecraft:sculk_sensor', amount: 1, title: 'Consigue sensor sculk x1 (silk touch)' },
      { item: 'minecraft:amethyst_shard', amount: 4, title: 'Recolecta amatista x4' },
      { item: 'minecraft:redstone', amount: 18, title: 'Mina redstone x18' },
      { item: 'minecraft:redstone_lamp', amount: 6, title: 'Fabrica lámpara redstone x6' },
    ],
  },
  {
    day: 22, title: 'DIA 22 - Jornada 22', reward: 506,
    tasks: [
      { item: 'minecraft:target', amount: 4, title: 'Fabrica bloque diana x4' },
      { item: 'minecraft:dispenser', amount: 4, title: 'Craftea dispensador x4' },
      { item: 'minecraft:arrow', amount: 32, title: 'Fabrica flechas x32' },
      { item: 'minecraft:redstone', amount: 20, title: 'Mina redstone x20' },
      { item: 'minecraft:redstone_lamp', amount: 10, title: 'Fabrica lámpara redstone x10' },
    ],
  },
  {
    day: 23, title: 'DIA 23 - Jornada 23', reward: 544,
    tasks: [
      { item: 'minecraft:sticky_piston', amount: 14, title: 'Fabrica pistón pegajoso x14' },
      { item: 'minecraft:slime_block', amount: 8, title: 'Craftea bloque de slime x8' },
      { item: 'minecraft:redstone', amount: 32, title: 'Mina redstone x32' },
      { item: 'minecraft:observer', amount: 8, title: 'Fabrica observador x8' },
      { item: 'minecraft:repeater', amount: 10, title: 'Craftea repetidor x10' },
    ],
  },
  {
    day: 24, title: 'DIA 24 - Jornada 24', reward: 582,
    tasks: [
      { item: 'minecraft:brewing_stand', amount: 2, title: 'Fabrica soporte pociones x2' },
      { item: 'minecraft:hopper', amount: 8, title: 'Fabrica tolva x8' },
      { item: 'minecraft:redstone', amount: 20, title: 'Mina redstone x20' },
      { item: 'minecraft:comparator', amount: 4, title: 'Craftea comparador x4' },
      { item: 'minecraft:chest', amount: 5, title: 'Fabrica cofre x5' },
    ],
  },
  {
    day: 25, title: 'DIA 25 - Jornada 25', reward: 620,
    tasks: [
      { item: 'minecraft:minecart', amount: 4, title: 'Fabrica vagoneta x4' },
      { item: 'minecraft:powered_rail', amount: 32, title: 'Fabrica rail propulsor x32' },
      { item: 'minecraft:detector_rail', amount: 8, title: 'Fabrica rail detector x8' },
      { item: 'minecraft:redstone', amount: 28, title: 'Mina redstone x28' },
      { item: 'minecraft:hopper_minecart', amount: 3, title: 'Fabrica vagoneta tolva x3' },
    ],
  },

  // ═══════════════════════════════════════════
  // FASE 6: Maestro redstoner (D26-D30)
  // ═══════════════════════════════════════════

  {
    day: 26, title: 'DIA 26 - Jornada 26', reward: 756,
    tasks: [
      { item: 'minecraft:redstone', amount: 40, title: 'Mina redstone x40' },
      { item: 'minecraft:repeater', amount: 14, title: 'Craftea repetidor x14' },
      { item: 'minecraft:redstone_torch', amount: 16, title: 'Fabrica antorcha redstone x16' },
      { item: 'minecraft:comparator', amount: 8, title: 'Craftea comparador x8' },
      { item: 'minecraft:redstone_lamp', amount: 12, title: 'Fabrica lámpara redstone x12' },
    ],
  },
  {
    day: 27, title: 'DIA 27 - Jornada 27', reward: 892,
    tasks: [
      { item: 'minecraft:hopper', amount: 32, title: 'Fabrica tolva x32' },
      { item: 'minecraft:chest', amount: 16, title: 'Fabrica cofre x16' },
      { item: 'minecraft:comparator', amount: 8, title: 'Craftea comparador x8' },
      { item: 'minecraft:redstone', amount: 40, title: 'Mina redstone x40' },
      { item: 'minecraft:repeater', amount: 12, title: 'Craftea repetidor x12' },
    ],
  },
  {
    day: 28, title: 'DIA 28 - Jornada 28', reward: 1028,
    tasks: [
      { item: 'minecraft:crafter', amount: 4, title: 'Fabrica crafteador x4' },
      { item: 'minecraft:copper_bulb', amount: 6, title: 'Fabrica bulbo de cobre x6' },
      { item: 'minecraft:copper_ingot', amount: 8, title: 'Funde lingote cobre x8' },
      { item: 'minecraft:hopper', amount: 8, title: 'Fabrica tolva x8' },
      { item: 'minecraft:redstone', amount: 28, title: 'Mina redstone x28' },
    ],
  },
  {
    day: 29, title: 'DIA 29 - Jornada 29', reward: 1164,
    tasks: [
      { item: 'minecraft:lightning_rod', amount: 4, title: 'Fabrica pararrayos x4' },
      { item: 'minecraft:copper_block', amount: 6, title: 'Craftea bloque de cobre x6' },
      { item: 'minecraft:daylight_detector', amount: 2, title: 'Fabrica sensor luz diurna x2' },
      { item: 'minecraft:redstone', amount: 30, title: 'Mina redstone x30' },
      { item: 'minecraft:comparator', amount: 4, title: 'Craftea comparador x4' },
    ],
  },
  {
    day: 30, title: 'DIA 30 - Jornada 30', reward: 1300,
    tasks: [
      { item: 'minecraft:redstone', amount: 64, title: 'Mina redstone x64 (stack)' },
      { item: 'minecraft:redstone_block', amount: 10, title: 'Craftea bloque redstone x10' },
      { item: 'minecraft:sticky_piston', amount: 14, title: 'Fabrica pistón pegajoso x14' },
      { item: 'minecraft:observer', amount: 10, title: 'Fabrica observador x10' },
      { item: 'minecraft:crafter', amount: 6, title: 'Fabrica crafteador x6' },
    ],
  },
];

writeQuests('ingeniero', 'Ingeniero', quests);
