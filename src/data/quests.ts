// Auto-generated from Heracles quest configs — do not edit manually
// Roles: Agricultor, Alquimista, Arquitecto, Cocinero, Explorador, Ganadero, General, Herrero, Ingeniero, Leñador, Mecánico, Minero, Pescador, Tabernero

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

export const roles: Role[] = [
  {
    "id": "agricultor",
    "name": "Agricultor",
    "emoji": "🌾",
    "color": "#7CB342",
    "days": [
      {
        "day": 1,
        "title": "DIA 1 - Primeros pasos en el campo",
        "tasks": [
          {
            "title": "Cosecha tus primeras espigas de trigo",
            "item": "minecraft:wheat",
            "amount": 2,
            "icon": "minecraft:wheat"
          },
          {
            "title": "Fabrica una azada de madera",
            "item": "minecraft:wooden_hoe",
            "amount": 1,
            "icon": "minecraft:wooden_hoe"
          },
          {
            "title": "Consigue polvo de hueso como abono",
            "item": "minecraft:bone_meal",
            "amount": 1,
            "icon": "minecraft:bone_meal"
          },
          {
            "title": "Recolecta zanahorias del pueblo",
            "item": "minecraft:carrot",
            "amount": 2,
            "icon": "minecraft:carrot"
          },
          {
            "title": "Hornea tu primer pan",
            "item": "minecraft:bread",
            "amount": 1,
            "icon": "minecraft:bread"
          }
        ],
        "reward": {
          "title": "65 monedas",
          "amount": 65,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 2,
        "title": "DIA 2 - Preparando el terreno",
        "tasks": [
          {
            "title": "Mejora a una azada de piedra",
            "item": "minecraft:stone_hoe",
            "amount": 1,
            "icon": "minecraft:stone_hoe"
          },
          {
            "title": "Construye un compostador",
            "item": "minecraft:composter",
            "amount": 1,
            "icon": "minecraft:composter"
          },
          {
            "title": "Planta robles alrededor del huerto",
            "item": "minecraft:oak_sapling",
            "amount": 4,
            "icon": "minecraft:oak_sapling"
          },
          {
            "title": "Cosecha remolachas frescas",
            "item": "minecraft:beetroot",
            "amount": 3,
            "icon": "minecraft:beetroot"
          },
          {
            "title": "Junta ramas para estacas",
            "item": "minecraft:stick",
            "amount": 8,
            "icon": "minecraft:stick"
          }
        ],
        "reward": {
          "title": "76 monedas",
          "amount": 76,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 3,
        "title": "DIA 3 - El agua es vida",
        "tasks": [
          {
            "title": "Fabrica un balde de hierro",
            "item": "minecraft:bucket",
            "amount": 1,
            "icon": "minecraft:bucket"
          },
          {
            "title": "Transporta agua al cultivo",
            "item": "minecraft:water_bucket",
            "amount": 1,
            "icon": "minecraft:water_bucket"
          },
          {
            "title": "Consigue semillas de calabaza",
            "item": "minecraft:pumpkin_seeds",
            "amount": 4,
            "icon": "minecraft:pumpkin_seeds"
          },
          {
            "title": "Corta caña de azúcar junto al río",
            "item": "minecraft:sugar_cane",
            "amount": 5,
            "icon": "minecraft:sugar_cane"
          },
          {
            "title": "Ilumina tu huerto con antorchas",
            "item": "minecraft:torch",
            "amount": 4,
            "icon": "minecraft:torch"
          }
        ],
        "reward": {
          "title": "87 monedas",
          "amount": 87,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 4,
        "title": "DIA 4 - La huerta se expande",
        "tasks": [
          {
            "title": "Cosecha papas del campo",
            "item": "minecraft:potato",
            "amount": 5,
            "icon": "minecraft:potato"
          },
          {
            "title": "Encuentra semillas de sandía",
            "item": "minecraft:melon_seeds",
            "amount": 4,
            "icon": "minecraft:melon_seeds"
          },
          {
            "title": "Siembra un campo completo de trigo",
            "item": "minecraft:wheat_seeds",
            "amount": 10,
            "icon": "minecraft:wheat_seeds"
          },
          {
            "title": "Hornea una tarta de calabaza",
            "item": "minecraft:pumpkin_pie",
            "amount": 1,
            "icon": "minecraft:pumpkin_pie"
          },
          {
            "title": "Decora tu granja con macetas",
            "item": "minecraft:flower_pot",
            "amount": 2,
            "icon": "minecraft:flower_pot"
          }
        ],
        "reward": {
          "title": "98 monedas",
          "amount": 98,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 5,
        "title": "DIA 5 - Herrero y granjero",
        "tasks": [
          {
            "title": "Forja una azada de hierro",
            "item": "minecraft:iron_hoe",
            "amount": 1,
            "icon": "minecraft:iron_hoe"
          },
          {
            "title": "Cosecha calabazas enormes",
            "item": "minecraft:pumpkin",
            "amount": 3,
            "icon": "minecraft:pumpkin"
          },
          {
            "title": "Corta sandías jugosas",
            "item": "minecraft:melon_slice",
            "amount": 8,
            "icon": "minecraft:melon_slice"
          },
          {
            "title": "Prepara sopa de remolacha",
            "item": "minecraft:beetroot_soup",
            "amount": 1,
            "icon": "minecraft:beetroot_soup"
          },
          {
            "title": "Empaca heno en fardos",
            "item": "minecraft:hay_block",
            "amount": 2,
            "icon": "minecraft:hay_block"
          }
        ],
        "reward": {
          "title": "110 monedas",
          "amount": 110,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 6,
        "title": "DIA 6 - Forrajeando cultivos silvestres",
        "tasks": [
          {
            "title": "Encuentra zanahorias silvestres",
            "item": "farmersdelight:wild_carrots",
            "amount": 1,
            "icon": "farmersdelight:wild_carrots"
          },
          {
            "title": "Encuentra papas silvestres",
            "item": "farmersdelight:wild_potatoes",
            "amount": 1,
            "icon": "farmersdelight:wild_potatoes"
          },
          {
            "title": "Encuentra remolachas silvestres",
            "item": "farmersdelight:wild_beetroots",
            "amount": 1,
            "icon": "farmersdelight:wild_beetroots"
          },
          {
            "title": "Encuentra coles silvestres",
            "item": "farmersdelight:wild_cabbages",
            "amount": 1,
            "icon": "farmersdelight:wild_cabbages"
          },
          {
            "title": "Fabrica un cuchillo de pedernal",
            "item": "farmersdelight:flint_knife",
            "amount": 1,
            "icon": "farmersdelight:flint_knife"
          }
        ],
        "reward": {
          "title": "126 monedas",
          "amount": 126,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 7,
        "title": "DIA 7 - Sembrando variedad",
        "tasks": [
          {
            "title": "Siembra semillas de col",
            "item": "farmersdelight:cabbage_seeds",
            "amount": 3,
            "icon": "farmersdelight:cabbage_seeds"
          },
          {
            "title": "Siembra semillas de tomate",
            "item": "farmersdelight:tomato_seeds",
            "amount": 3,
            "icon": "farmersdelight:tomato_seeds"
          },
          {
            "title": "Planta brotes de arroz en agua",
            "item": "farmersdelight:rice",
            "amount": 3,
            "icon": "farmersdelight:rice"
          },
          {
            "title": "Siembra semillas de remolacha",
            "item": "minecraft:beetroot_seeds",
            "amount": 3,
            "icon": "minecraft:beetroot_seeds"
          },
          {
            "title": "Obtén corteza de árbol con tu cuchillo",
            "item": "farmersdelight:tree_bark",
            "amount": 3,
            "icon": "farmersdelight:tree_bark"
          }
        ],
        "reward": {
          "title": "142 monedas",
          "amount": 142,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 8,
        "title": "DIA 8 - Cosecha gourmet",
        "tasks": [
          {
            "title": "Cosecha coles maduras",
            "item": "farmersdelight:cabbage",
            "amount": 4,
            "icon": "farmersdelight:cabbage"
          },
          {
            "title": "Cosecha tomates jugosos",
            "item": "farmersdelight:tomato",
            "amount": 4,
            "icon": "farmersdelight:tomato"
          },
          {
            "title": "Cosecha cebollas frescas",
            "item": "farmersdelight:onion",
            "amount": 4,
            "icon": "farmersdelight:onion"
          },
          {
            "title": "Recolecta paja al cosechar trigo",
            "item": "farmersdelight:straw",
            "amount": 8,
            "icon": "farmersdelight:straw"
          },
          {
            "title": "Fabrica cuerda artesanal con paja",
            "item": "farmersdelight:rope",
            "amount": 6,
            "icon": "farmersdelight:rope"
          }
        ],
        "reward": {
          "title": "158 monedas",
          "amount": 158,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 9,
        "title": "DIA 9 - Tierra fértil y cocina rústica",
        "tasks": [
          {
            "title": "Prepara tierra rica en nutrientes",
            "item": "farmersdelight:rich_soil",
            "amount": 10,
            "icon": "farmersdelight:rich_soil"
          },
          {
            "title": "Cosecha panículas de arroz",
            "item": "farmersdelight:rice_panicle",
            "amount": 5,
            "icon": "farmersdelight:rice_panicle"
          },
          {
            "title": "Teje lienzo rústico con paja",
            "item": "farmersdelight:canvas",
            "amount": 2,
            "icon": "farmersdelight:canvas"
          },
          {
            "title": "Prepara sopa de hongos",
            "item": "minecraft:mushroom_stew",
            "amount": 1,
            "icon": "minecraft:mushroom_stew"
          },
          {
            "title": "Cocina un estofado de conejo",
            "item": "minecraft:rabbit_stew",
            "amount": 1,
            "icon": "minecraft:rabbit_stew"
          }
        ],
        "reward": {
          "title": "174 monedas",
          "amount": 174,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 10,
        "title": "DIA 10 - Última búsqueda de silvestres",
        "tasks": [
          {
            "title": "Encuentra cebollas silvestres",
            "item": "farmersdelight:wild_onions",
            "amount": 1,
            "icon": "farmersdelight:wild_onions"
          },
          {
            "title": "Encuentra tomates silvestres",
            "item": "farmersdelight:wild_tomatoes",
            "amount": 1,
            "icon": "farmersdelight:wild_tomatoes"
          },
          {
            "title": "Encuentra arroz silvestre",
            "item": "farmersdelight:wild_rice",
            "amount": 1,
            "icon": "farmersdelight:wild_rice"
          },
          {
            "title": "Forja un cuchillo de hierro",
            "item": "farmersdelight:iron_knife",
            "amount": 1,
            "icon": "farmersdelight:iron_knife"
          },
          {
            "title": "Recolecta manzanas del huerto",
            "item": "minecraft:apple",
            "amount": 5,
            "icon": "minecraft:apple"
          }
        ],
        "reward": {
          "title": "190 monedas",
          "amount": 190,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 11,
        "title": "DIA 11 - El vivero forestal",
        "tasks": [
          {
            "title": "Planta abedules",
            "item": "minecraft:birch_sapling",
            "amount": 6,
            "icon": "minecraft:birch_sapling"
          },
          {
            "title": "Planta abetos en hilera",
            "item": "minecraft:spruce_sapling",
            "amount": 6,
            "icon": "minecraft:spruce_sapling"
          },
          {
            "title": "Planta árboles tropicales",
            "item": "minecraft:jungle_sapling",
            "amount": 6,
            "icon": "minecraft:jungle_sapling"
          },
          {
            "title": "Planta robles oscuros en cuadrícula",
            "item": "minecraft:dark_oak_sapling",
            "amount": 6,
            "icon": "minecraft:dark_oak_sapling"
          },
          {
            "title": "Ilumina el vivero con faroles",
            "item": "minecraft:lantern",
            "amount": 3,
            "icon": "minecraft:lantern"
          }
        ],
        "reward": {
          "title": "212 monedas",
          "amount": 212,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 12,
        "title": "DIA 12 - Cultivos del Nether",
        "tasks": [
          {
            "title": "Cultiva verrugas del Nether sobre arena de almas",
            "item": "minecraft:nether_wart",
            "amount": 8,
            "icon": "minecraft:nether_wart"
          },
          {
            "title": "Recolecta arena de almas para las verrugas",
            "item": "minecraft:soul_sand",
            "amount": 6,
            "icon": "minecraft:soul_sand"
          },
          {
            "title": "Recolecta hongos rojos en el Nether",
            "item": "minecraft:red_mushroom",
            "amount": 6,
            "icon": "minecraft:red_mushroom"
          },
          {
            "title": "Recolecta hongos marrones en el Nether",
            "item": "minecraft:brown_mushroom",
            "amount": 6,
            "icon": "minecraft:brown_mushroom"
          },
          {
            "title": "Fabrica una zanahoria dorada con pepitas de oro",
            "item": "minecraft:golden_carrot",
            "amount": 1,
            "icon": "minecraft:golden_carrot"
          }
        ],
        "reward": {
          "title": "234 monedas",
          "amount": 234,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 13,
        "title": "DIA 13 - Agricultura vertical",
        "tasks": [
          {
            "title": "Cultiva una plantación de bambú",
            "item": "minecraft:bamboo",
            "amount": 12,
            "icon": "minecraft:bamboo"
          },
          {
            "title": "Fabrica andamios con bambú",
            "item": "minecraft:scaffolding",
            "amount": 24,
            "icon": "minecraft:scaffolding"
          },
          {
            "title": "Cosecha bayas dulces de los arbustos",
            "item": "minecraft:sweet_berries",
            "amount": 10,
            "icon": "minecraft:sweet_berries"
          },
          {
            "title": "Cosecha bayas luminosas de las cuevas",
            "item": "minecraft:glow_berries",
            "amount": 10,
            "icon": "minecraft:glow_berries"
          },
          {
            "title": "Recolecta bloques de musgo para decorar",
            "item": "minecraft:moss_block",
            "amount": 6,
            "icon": "minecraft:moss_block"
          }
        ],
        "reward": {
          "title": "256 monedas",
          "amount": 256,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 14,
        "title": "DIA 14 - El jardín botánico",
        "tasks": [
          {
            "title": "Planta acacias de la sabana",
            "item": "minecraft:acacia_sapling",
            "amount": 6,
            "icon": "minecraft:acacia_sapling"
          },
          {
            "title": "Planta cerezos en flor",
            "item": "minecraft:cherry_sapling",
            "amount": 6,
            "icon": "minecraft:cherry_sapling"
          },
          {
            "title": "Planta mangles en el pantano",
            "item": "minecraft:mangrove_propagule",
            "amount": 6,
            "icon": "minecraft:mangrove_propagule"
          },
          {
            "title": "Cultiva azaleas en flor",
            "item": "minecraft:azalea",
            "amount": 3,
            "icon": "minecraft:azalea"
          },
          {
            "title": "Cosecha granos de cacao en la jungla",
            "item": "minecraft:cocoa_beans",
            "amount": 8,
            "icon": "minecraft:cocoa_beans"
          }
        ],
        "reward": {
          "title": "278 monedas",
          "amount": 278,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 15,
        "title": "DIA 15 - La cocina del granjero",
        "tasks": [
          {
            "title": "Construye una olla de cocina",
            "item": "farmersdelight:cooking_pot",
            "amount": 1,
            "icon": "farmersdelight:cooking_pot"
          },
          {
            "title": "Fabrica una sartén de hierro",
            "item": "farmersdelight:skillet",
            "amount": 1,
            "icon": "farmersdelight:skillet"
          },
          {
            "title": "Fabrica una tabla de cortar",
            "item": "farmersdelight:cutting_board",
            "amount": 1,
            "icon": "farmersdelight:cutting_board"
          },
          {
            "title": "Hornea pasteles para el pueblo",
            "item": "minecraft:cake",
            "amount": 3,
            "icon": "minecraft:cake"
          },
          {
            "title": "Fabrica una manzana dorada encantada",
            "item": "minecraft:golden_apple",
            "amount": 1,
            "icon": "minecraft:golden_apple"
          }
        ],
        "reward": {
          "title": "300 monedas",
          "amount": 300,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 16,
        "title": "DIA 16 - Infraestructura culinaria",
        "tasks": [
          {
            "title": "Construye una estufa de ladrillos",
            "item": "farmersdelight:stove",
            "amount": 1,
            "icon": "farmersdelight:stove"
          },
          {
            "title": "Ordeña una vaca para obtener leche",
            "item": "minecraft:milk_bucket",
            "amount": 2,
            "icon": "minecraft:milk_bucket"
          },
          {
            "title": "Recolecta huevos frescos del gallinero",
            "item": "minecraft:egg",
            "amount": 10,
            "icon": "minecraft:egg"
          },
          {
            "title": "Fabrica ladrillos para la cocina",
            "item": "minecraft:brick",
            "amount": 16,
            "icon": "minecraft:brick"
          },
          {
            "title": "Fabrica cuencos de madera",
            "item": "minecraft:bowl",
            "amount": 8,
            "icon": "minecraft:bowl"
          }
        ],
        "reward": {
          "title": "326 monedas",
          "amount": 326,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 17,
        "title": "DIA 17 - Apicultura artesanal",
        "tasks": [
          {
            "title": "Fabrica colmenas artificiales",
            "item": "minecraft:beehive",
            "amount": 2,
            "icon": "minecraft:beehive"
          },
          {
            "title": "Coloca fogatas bajo las colmenas",
            "item": "minecraft:campfire",
            "amount": 2,
            "icon": "minecraft:campfire"
          },
          {
            "title": "Cosecha panales con tijeras",
            "item": "minecraft:honeycomb",
            "amount": 6,
            "icon": "minecraft:honeycomb"
          },
          {
            "title": "Embotella miel dorada",
            "item": "minecraft:honey_bottle",
            "amount": 5,
            "icon": "minecraft:honey_bottle"
          },
          {
            "title": "Cultiva lavanda para que polinicen las abejas",
            "item": "biomesoplenty:lavender",
            "amount": 6,
            "icon": "biomesoplenty:lavender"
          }
        ],
        "reward": {
          "title": "352 monedas",
          "amount": 352,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 18,
        "title": "DIA 18 - Jardín ornamental",
        "tasks": [
          {
            "title": "Cultiva cosmos naranjas",
            "item": "biomesoplenty:orange_cosmos",
            "amount": 6,
            "icon": "biomesoplenty:orange_cosmos"
          },
          {
            "title": "Cultiva narcisos rosados",
            "item": "biomesoplenty:pink_daffodil",
            "amount": 6,
            "icon": "biomesoplenty:pink_daffodil"
          },
          {
            "title": "Cultiva violetas silvestres",
            "item": "biomesoplenty:violet",
            "amount": 6,
            "icon": "biomesoplenty:violet"
          },
          {
            "title": "Cultiva cactus en la arena",
            "item": "minecraft:cactus",
            "amount": 8,
            "icon": "minecraft:cactus"
          },
          {
            "title": "Recolecta arcilla a orillas del río",
            "item": "minecraft:clay_ball",
            "amount": 12,
            "icon": "minecraft:clay_ball"
          }
        ],
        "reward": {
          "title": "378 monedas",
          "amount": 378,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 19,
        "title": "DIA 19 - Ganadería y utensilios",
        "tasks": [
          {
            "title": "Fabrica tijeras de esquilar",
            "item": "minecraft:shears",
            "amount": 1,
            "icon": "minecraft:shears"
          },
          {
            "title": "Obtén cuero del ganado",
            "item": "minecraft:leather",
            "amount": 5,
            "icon": "minecraft:leather"
          },
          {
            "title": "Recolecta hilo esquilando ovejas",
            "item": "minecraft:string",
            "amount": 10,
            "icon": "minecraft:string"
          },
          {
            "title": "Forja una azada de oro para encantamientos",
            "item": "minecraft:golden_hoe",
            "amount": 1,
            "icon": "minecraft:golden_hoe"
          },
          {
            "title": "Recolecta plumas del gallinero",
            "item": "minecraft:feather",
            "amount": 8,
            "icon": "minecraft:feather"
          }
        ],
        "reward": {
          "title": "404 monedas",
          "amount": 404,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 20,
        "title": "DIA 20 - Agricultura acuática",
        "tasks": [
          {
            "title": "Cosecha algas marinas del océano",
            "item": "minecraft:kelp",
            "amount": 12,
            "icon": "minecraft:kelp"
          },
          {
            "title": "Recolecta pepinos de mar luminosos",
            "item": "minecraft:sea_pickle",
            "amount": 4,
            "icon": "minecraft:sea_pickle"
          },
          {
            "title": "Recolecta nenúfares del pantano",
            "item": "minecraft:lily_pad",
            "amount": 8,
            "icon": "minecraft:lily_pad"
          },
          {
            "title": "Recolecta barro del manglar",
            "item": "minecraft:mud",
            "amount": 12,
            "icon": "minecraft:mud"
          },
          {
            "title": "Cultiva lirios de agua exóticos",
            "item": "biomesoplenty:waterlily",
            "amount": 4,
            "icon": "biomesoplenty:waterlily"
          }
        ],
        "reward": {
          "title": "430 monedas",
          "amount": 430,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 21,
        "title": "DIA 21 - Comerciante agrícola",
        "tasks": [
          {
            "title": "Consigue esmeraldas vendiendo cosechas a aldeanos",
            "item": "minecraft:emerald",
            "amount": 4,
            "icon": "minecraft:emerald"
          },
          {
            "title": "Fabrica riendas para manejar el ganado",
            "item": "minecraft:lead",
            "amount": 3,
            "icon": "minecraft:lead"
          },
          {
            "title": "Consigue una campana para tu aldea",
            "item": "minecraft:bell",
            "amount": 1,
            "icon": "minecraft:bell"
          },
          {
            "title": "Nombra a tus animales de granja",
            "item": "minecraft:name_tag",
            "amount": 2,
            "icon": "minecraft:name_tag"
          },
          {
            "title": "Almacena heno para la temporada",
            "item": "minecraft:hay_block",
            "amount": 12,
            "icon": "minecraft:hay_block"
          }
        ],
        "reward": {
          "title": "468 monedas",
          "amount": 468,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 22,
        "title": "DIA 22 - Cultivos ancestrales",
        "tasks": [
          {
            "title": "Consigue semillas de flor de antorcha",
            "item": "minecraft:torchflower_seeds",
            "amount": 2,
            "icon": "minecraft:torchflower_seeds"
          },
          {
            "title": "Consigue vainas de planta jarra",
            "item": "minecraft:pitcher_pod",
            "amount": 2,
            "icon": "minecraft:pitcher_pod"
          },
          {
            "title": "Encuentra un huevo de sniffer en ruinas",
            "item": "minecraft:sniffer_egg",
            "amount": 1,
            "icon": "minecraft:sniffer_egg"
          },
          {
            "title": "Cultiva girasoles imponentes en tu campo",
            "item": "minecraft:sunflower",
            "amount": 10,
            "icon": "minecraft:sunflower"
          },
          {
            "title": "Cultiva rosales dobles",
            "item": "minecraft:rose_bush",
            "amount": 6,
            "icon": "minecraft:rose_bush"
          }
        ],
        "reward": {
          "title": "506 monedas",
          "amount": 506,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 23,
        "title": "DIA 23 - Expedición al End",
        "tasks": [
          {
            "title": "Cosecha fruta de chorus en el End",
            "item": "minecraft:chorus_fruit",
            "amount": 10,
            "icon": "minecraft:chorus_fruit"
          },
          {
            "title": "Recolecta flores de chorus",
            "item": "minecraft:chorus_flower",
            "amount": 4,
            "icon": "minecraft:chorus_flower"
          },
          {
            "title": "Recolecta piedra del End para cultivar",
            "item": "minecraft:end_stone",
            "amount": 16,
            "icon": "minecraft:end_stone"
          },
          {
            "title": "Cosecha perlas de enderman",
            "item": "minecraft:ender_pearl",
            "amount": 3,
            "icon": "minecraft:ender_pearl"
          },
          {
            "title": "Consigue caparazones de shulker para almacenaje agrícola",
            "item": "minecraft:shulker_shell",
            "amount": 2,
            "icon": "minecraft:shulker_shell"
          }
        ],
        "reward": {
          "title": "544 monedas",
          "amount": 544,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 24,
        "title": "DIA 24 - Botánica del Nether",
        "tasks": [
          {
            "title": "Cultiva hongos carmesí en el Nether",
            "item": "minecraft:crimson_fungus",
            "amount": 5,
            "icon": "minecraft:crimson_fungus"
          },
          {
            "title": "Cultiva hongos distorsionados",
            "item": "minecraft:warped_fungus",
            "amount": 5,
            "icon": "minecraft:warped_fungus"
          },
          {
            "title": "Recolecta brotes del Nether",
            "item": "minecraft:nether_sprouts",
            "amount": 8,
            "icon": "minecraft:nether_sprouts"
          },
          {
            "title": "Cosecha bloques de luz de hongo",
            "item": "minecraft:shroomlight",
            "amount": 4,
            "icon": "minecraft:shroomlight"
          },
          {
            "title": "Cultiva enredaderas retorcidas",
            "item": "minecraft:twisting_vines",
            "amount": 10,
            "icon": "minecraft:twisting_vines"
          }
        ],
        "reward": {
          "title": "582 monedas",
          "amount": 582,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 25,
        "title": "DIA 25 - Ingeniería agrícola avanzada",
        "tasks": [
          {
            "title": "Forja una azada de diamante",
            "item": "minecraft:diamond_hoe",
            "amount": 1,
            "icon": "minecraft:diamond_hoe"
          },
          {
            "title": "Construye una mesa de encantamientos",
            "item": "minecraft:enchanting_table",
            "amount": 1,
            "icon": "minecraft:enchanting_table"
          },
          {
            "title": "Fabrica estanterías para encantar tu azada",
            "item": "minecraft:bookshelf",
            "amount": 15,
            "icon": "minecraft:bookshelf"
          },
          {
            "title": "Extrae lapislázuli para encantamientos",
            "item": "minecraft:lapis_lazuli",
            "amount": 10,
            "icon": "minecraft:lapis_lazuli"
          },
          {
            "title": "Consigue botellas de experiencia",
            "item": "minecraft:experience_bottle",
            "amount": 5,
            "icon": "minecraft:experience_bottle"
          }
        ],
        "reward": {
          "title": "620 monedas",
          "amount": 620,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 26,
        "title": "DIA 26 - El granero automatizado",
        "tasks": [
          {
            "title": "Fabrica observadores para detectar cultivos listos",
            "item": "minecraft:observer",
            "amount": 6,
            "icon": "minecraft:observer"
          },
          {
            "title": "Fabrica pistones para cosechadoras",
            "item": "minecraft:piston",
            "amount": 6,
            "icon": "minecraft:piston"
          },
          {
            "title": "Fabrica tolvas de recolección",
            "item": "minecraft:hopper",
            "amount": 8,
            "icon": "minecraft:hopper"
          },
          {
            "title": "Minerales de redstone para circuitos",
            "item": "minecraft:redstone",
            "amount": 20,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Fabrica dispensadores para sembrar automáticamente",
            "item": "minecraft:dispenser",
            "amount": 4,
            "icon": "minecraft:dispenser"
          }
        ],
        "reward": {
          "title": "756 monedas",
          "amount": 756,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 27,
        "title": "DIA 27 - El banquete del granjero",
        "tasks": [
          {
            "title": "Hornea papas en masa para el pueblo",
            "item": "minecraft:baked_potato",
            "amount": 32,
            "icon": "minecraft:baked_potato"
          },
          {
            "title": "Hornea galletas de cacao para la aldea",
            "item": "minecraft:cookie",
            "amount": 32,
            "icon": "minecraft:cookie"
          },
          {
            "title": "Hornea tartas de calabaza para la feria",
            "item": "minecraft:pumpkin_pie",
            "amount": 10,
            "icon": "minecraft:pumpkin_pie"
          },
          {
            "title": "Produce zanahorias doradas para los aldeanos",
            "item": "minecraft:golden_carrot",
            "amount": 5,
            "icon": "minecraft:golden_carrot"
          },
          {
            "title": "Fabrica rodajas de sandía brillante",
            "item": "minecraft:glistering_melon_slice",
            "amount": 5,
            "icon": "minecraft:glistering_melon_slice"
          }
        ],
        "reward": {
          "title": "892 monedas",
          "amount": 892,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 28,
        "title": "DIA 28 - Honguera mística",
        "tasks": [
          {
            "title": "Cultiva hongos sapo venenosos",
            "item": "biomesoplenty:toadstool",
            "amount": 6,
            "icon": "biomesoplenty:toadstool"
          },
          {
            "title": "Cultiva hongos luminosos",
            "item": "biomesoplenty:glowshroom",
            "amount": 6,
            "icon": "biomesoplenty:glowshroom"
          },
          {
            "title": "Tala bloques de hongo rojo gigante",
            "item": "minecraft:red_mushroom_block",
            "amount": 10,
            "icon": "minecraft:red_mushroom_block"
          },
          {
            "title": "Tala bloques de hongo marrón gigante",
            "item": "minecraft:brown_mushroom_block",
            "amount": 10,
            "icon": "minecraft:brown_mushroom_block"
          },
          {
            "title": "Recolecta tallos de hongos gigantes",
            "item": "minecraft:mushroom_stem",
            "amount": 8,
            "icon": "minecraft:mushroom_stem"
          }
        ],
        "reward": {
          "title": "1028 monedas",
          "amount": 1028,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 29,
        "title": "DIA 29 - Herramienta definitiva",
        "tasks": [
          {
            "title": "Forja la azada suprema de netherita",
            "item": "minecraft:netherite_hoe",
            "amount": 1,
            "icon": "minecraft:netherite_hoe"
          },
          {
            "title": "Extrae escombros ancestrales del Nether",
            "item": "minecraft:ancient_debris",
            "amount": 4,
            "icon": "minecraft:ancient_debris"
          },
          {
            "title": "Fabrica un lingote de netherita",
            "item": "minecraft:netherite_ingot",
            "amount": 1,
            "icon": "minecraft:netherite_ingot"
          },
          {
            "title": "Funde escombros ancestrales en chatarras",
            "item": "minecraft:netherite_scrap",
            "amount": 4,
            "icon": "minecraft:netherite_scrap"
          },
          {
            "title": "Funde oro para la aleación de netherita",
            "item": "minecraft:gold_ingot",
            "amount": 6,
            "icon": "minecraft:gold_ingot"
          }
        ],
        "reward": {
          "title": "1164 monedas",
          "amount": 1164,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 30,
        "title": "DIA 30 - La leyenda del campo",
        "tasks": [
          {
            "title": "Fabrica la manzana dorada encantada legendaria",
            "item": "minecraft:enchanted_golden_apple",
            "amount": 1,
            "icon": "minecraft:enchanted_golden_apple"
          },
          {
            "title": "Derrota al Wither y obtén la estrella del Nether",
            "item": "minecraft:nether_star",
            "amount": 1,
            "icon": "minecraft:nether_star"
          },
          {
            "title": "Forja un faro para potenciar tus cultivos",
            "item": "minecraft:beacon",
            "amount": 1,
            "icon": "minecraft:beacon"
          },
          {
            "title": "Forja el cuchillo culinario de netherita",
            "item": "farmersdelight:netherite_knife",
            "amount": 1,
            "icon": "farmersdelight:netherite_knife"
          },
          {
            "title": "Recolecta aliento de dragón para pociones de fertilidad",
            "item": "minecraft:dragon_breath",
            "amount": 4,
            "icon": "minecraft:dragon_breath"
          }
        ],
        "reward": {
          "title": "1300 monedas",
          "amount": 1300,
          "icon": "saros__money_mod:euro_100"
        }
      }
    ]
  },
  {
    "id": "alquimista",
    "name": "Alquimista",
    "emoji": "🧪",
    "color": "#AB47BC",
    "days": [
      {
        "day": 1,
        "title": "DIA 1 - El comienzo del boticario",
        "tasks": [
          {
            "title": "Recolecta arena x4",
            "item": "minecraft:sand",
            "amount": 4,
            "icon": "minecraft:sand"
          },
          {
            "title": "Mina carbón x2",
            "item": "minecraft:coal",
            "amount": 2,
            "icon": "minecraft:coal"
          },
          {
            "title": "Fabrica frascos x3",
            "item": "minecraft:glass_bottle",
            "amount": 3,
            "icon": "minecraft:glass_bottle"
          },
          {
            "title": "Llena un cubo de agua",
            "item": "minecraft:water_bucket",
            "amount": 1,
            "icon": "minecraft:water_bucket"
          },
          {
            "title": "Craftea un soporte",
            "item": "minecraft:brewing_stand",
            "amount": 1,
            "icon": "minecraft:brewing_stand"
          }
        ],
        "reward": {
          "title": "65 monedas",
          "amount": 65,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 2,
        "title": "DIA 2 - Ingredientes del inframundo",
        "tasks": [
          {
            "title": "Recolecta verrugas x2",
            "item": "minecraft:nether_wart",
            "amount": 2,
            "icon": "minecraft:nether_wart"
          },
          {
            "title": "Consigue vara blaze",
            "item": "minecraft:blaze_rod",
            "amount": 1,
            "icon": "minecraft:blaze_rod"
          },
          {
            "title": "Recoge arena de almas x4",
            "item": "minecraft:soul_sand",
            "amount": 4,
            "icon": "minecraft:soul_sand"
          },
          {
            "title": "Funde lingote de oro",
            "item": "minecraft:gold_ingot",
            "amount": 1,
            "icon": "minecraft:gold_ingot"
          },
          {
            "title": "Fabrica polvo de blaze",
            "item": "minecraft:blaze_powder",
            "amount": 1,
            "icon": "minecraft:blaze_powder"
          }
        ],
        "reward": {
          "title": "75 monedas",
          "amount": 75,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 3,
        "title": "DIA 3 - Preparación básica",
        "tasks": [
          {
            "title": "Cultiva verrugas x3",
            "item": "minecraft:nether_wart",
            "amount": 3,
            "icon": "minecraft:nether_wart"
          },
          {
            "title": "Carga el soporte",
            "item": "minecraft:blaze_powder",
            "amount": 1,
            "icon": "minecraft:blaze_powder"
          },
          {
            "title": "Frascos vacíos x3",
            "item": "minecraft:glass_bottle",
            "amount": 3,
            "icon": "minecraft:glass_bottle"
          },
          {
            "title": "Destila poción base x1",
            "item": "minecraft:potion",
            "amount": 1,
            "icon": "minecraft:potion"
          },
          {
            "title": "Mesa de trabajo",
            "item": "minecraft:crafting_table",
            "amount": 1,
            "icon": "minecraft:crafting_table"
          }
        ],
        "reward": {
          "title": "85 monedas",
          "amount": 85,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 4,
        "title": "DIA 4 - La botica improvisada",
        "tasks": [
          {
            "title": "Instala caldero x1",
            "item": "minecraft:cauldron",
            "amount": 1,
            "icon": "minecraft:cauldron"
          },
          {
            "title": "Llena frascos x3",
            "item": "minecraft:glass_bottle",
            "amount": 3,
            "icon": "minecraft:glass_bottle"
          },
          {
            "title": "Cubo de agua",
            "item": "minecraft:water_bucket",
            "amount": 1,
            "icon": "minecraft:water_bucket"
          },
          {
            "title": "Funde hierro x2",
            "item": "minecraft:iron_ingot",
            "amount": 2,
            "icon": "minecraft:iron_ingot"
          },
          {
            "title": "Pociones básicas x2",
            "item": "minecraft:potion",
            "amount": 2,
            "icon": "minecraft:potion"
          }
        ],
        "reward": {
          "title": "95 monedas",
          "amount": 95,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 5,
        "title": "DIA 5 - Dulce como melón",
        "tasks": [
          {
            "title": "Melón brillante x3",
            "item": "minecraft:glistering_melon_slice",
            "amount": 3,
            "icon": "minecraft:glistering_melon_slice"
          },
          {
            "title": "Pepitas de oro x8",
            "item": "minecraft:gold_nugget",
            "amount": 8,
            "icon": "minecraft:gold_nugget"
          },
          {
            "title": "Verrugas del Nether x3",
            "item": "minecraft:nether_wart",
            "amount": 3,
            "icon": "minecraft:nether_wart"
          },
          {
            "title": "Frascos preparados x3",
            "item": "minecraft:glass_bottle",
            "amount": 3,
            "icon": "minecraft:glass_bottle"
          },
          {
            "title": "Poción de curación x2",
            "item": "minecraft:potion",
            "amount": 2,
            "icon": "minecraft:potion"
          }
        ],
        "reward": {
          "title": "110 monedas",
          "amount": 110,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 6,
        "title": "DIA 6 - Velocidad pura",
        "tasks": [
          {
            "title": "Procesa caña x5",
            "item": "minecraft:sugar",
            "amount": 5,
            "icon": "minecraft:sugar"
          },
          {
            "title": "Verrugas base x3",
            "item": "minecraft:nether_wart",
            "amount": 3,
            "icon": "minecraft:nether_wart"
          },
          {
            "title": "Frascos x3",
            "item": "minecraft:glass_bottle",
            "amount": 3,
            "icon": "minecraft:glass_bottle"
          },
          {
            "title": "Poción de velocidad x3",
            "item": "minecraft:potion",
            "amount": 3,
            "icon": "minecraft:potion"
          },
          {
            "title": "Extensor de duración",
            "item": "minecraft:redstone",
            "amount": 1,
            "icon": "minecraft:redstone"
          }
        ],
        "reward": {
          "title": "125 monedas",
          "amount": 125,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 7,
        "title": "DIA 7 - Fuerza de blaze",
        "tasks": [
          {
            "title": "Polvo blaze x3",
            "item": "minecraft:blaze_powder",
            "amount": 3,
            "icon": "minecraft:blaze_powder"
          },
          {
            "title": "Verrugas x4",
            "item": "minecraft:nether_wart",
            "amount": 4,
            "icon": "minecraft:nether_wart"
          },
          {
            "title": "Frascos x4",
            "item": "minecraft:glass_bottle",
            "amount": 4,
            "icon": "minecraft:glass_bottle"
          },
          {
            "title": "Poción de fuerza x3",
            "item": "minecraft:potion",
            "amount": 3,
            "icon": "minecraft:potion"
          },
          {
            "title": "Potenciador glowstone",
            "item": "minecraft:glowstone_dust",
            "amount": 1,
            "icon": "minecraft:glowstone_dust"
          }
        ],
        "reward": {
          "title": "140 monedas",
          "amount": 140,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 8,
        "title": "DIA 8 - Escudo de magma",
        "tasks": [
          {
            "title": "Crema de magma x2",
            "item": "minecraft:magma_cream",
            "amount": 2,
            "icon": "minecraft:magma_cream"
          },
          {
            "title": "Bolas de slime x2",
            "item": "minecraft:slime_ball",
            "amount": 2,
            "icon": "minecraft:slime_ball"
          },
          {
            "title": "Polvo blaze",
            "item": "minecraft:blaze_powder",
            "amount": 1,
            "icon": "minecraft:blaze_powder"
          },
          {
            "title": "Verrugas x3",
            "item": "minecraft:nether_wart",
            "amount": 3,
            "icon": "minecraft:nether_wart"
          },
          {
            "title": "Poción ignífuga x3",
            "item": "minecraft:potion",
            "amount": 3,
            "icon": "minecraft:potion"
          }
        ],
        "reward": {
          "title": "155 monedas",
          "amount": 155,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 9,
        "title": "DIA 9 - Maestría de extensores",
        "tasks": [
          {
            "title": "Redstone puro x4",
            "item": "minecraft:redstone",
            "amount": 4,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Glowstone en polvo x4",
            "item": "minecraft:glowstone_dust",
            "amount": 4,
            "icon": "minecraft:glowstone_dust"
          },
          {
            "title": "Verrugas x5",
            "item": "minecraft:nether_wart",
            "amount": 5,
            "icon": "minecraft:nether_wart"
          },
          {
            "title": "Frascos x5",
            "item": "minecraft:glass_bottle",
            "amount": 5,
            "icon": "minecraft:glass_bottle"
          },
          {
            "title": "Pociones mejoradas x4",
            "item": "minecraft:potion",
            "amount": 4,
            "icon": "minecraft:potion"
          }
        ],
        "reward": {
          "title": "170 monedas",
          "amount": 170,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 10,
        "title": "DIA 10 - Cosecha del Nether",
        "tasks": [
          {
            "title": "Verrugas cosechadas x8",
            "item": "minecraft:nether_wart",
            "amount": 8,
            "icon": "minecraft:nether_wart"
          },
          {
            "title": "Varas blaze x2",
            "item": "minecraft:blaze_rod",
            "amount": 2,
            "icon": "minecraft:blaze_rod"
          },
          {
            "title": "Crema de magma x3",
            "item": "minecraft:magma_cream",
            "amount": 3,
            "icon": "minecraft:magma_cream"
          },
          {
            "title": "Pepitas de oro x9",
            "item": "minecraft:gold_nugget",
            "amount": 9,
            "icon": "minecraft:gold_nugget"
          },
          {
            "title": "Pociones variadas x4",
            "item": "minecraft:potion",
            "amount": 4,
            "icon": "minecraft:potion"
          }
        ],
        "reward": {
          "title": "190 monedas",
          "amount": 190,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 11,
        "title": "DIA 11 - El arte de la corrupción",
        "tasks": [
          {
            "title": "Ojos de araña x4",
            "item": "minecraft:spider_eye",
            "amount": 4,
            "icon": "minecraft:spider_eye"
          },
          {
            "title": "Hongos marrones x3",
            "item": "minecraft:brown_mushroom",
            "amount": 3,
            "icon": "minecraft:brown_mushroom"
          },
          {
            "title": "Ojo fermentado x2",
            "item": "minecraft:fermented_spider_eye",
            "amount": 2,
            "icon": "minecraft:fermented_spider_eye"
          },
          {
            "title": "Verrugas x4",
            "item": "minecraft:nether_wart",
            "amount": 4,
            "icon": "minecraft:nether_wart"
          },
          {
            "title": "Pociones corruptas x3",
            "item": "minecraft:potion",
            "amount": 3,
            "icon": "minecraft:potion"
          }
        ],
        "reward": {
          "title": "210 monedas",
          "amount": 210,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 12,
        "title": "DIA 12 - Visión nocturna",
        "tasks": [
          {
            "title": "Zanahorias doradas x4",
            "item": "minecraft:golden_carrot",
            "amount": 4,
            "icon": "minecraft:golden_carrot"
          },
          {
            "title": "Zanahorias frescas x8",
            "item": "minecraft:carrot",
            "amount": 8,
            "icon": "minecraft:carrot"
          },
          {
            "title": "Pepitas de oro x8",
            "item": "minecraft:gold_nugget",
            "amount": 8,
            "icon": "minecraft:gold_nugget"
          },
          {
            "title": "Verrugas x4",
            "item": "minecraft:nether_wart",
            "amount": 4,
            "icon": "minecraft:nether_wart"
          },
          {
            "title": "Pociones de visión x4",
            "item": "minecraft:potion",
            "amount": 4,
            "icon": "minecraft:potion"
          }
        ],
        "reward": {
          "title": "230 monedas",
          "amount": 230,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 13,
        "title": "DIA 13 - Secretos del océano",
        "tasks": [
          {
            "title": "Pez globo x2",
            "item": "minecraft:pufferfish",
            "amount": 2,
            "icon": "minecraft:pufferfish"
          },
          {
            "title": "Cubos de agua x3",
            "item": "minecraft:water_bucket",
            "amount": 3,
            "icon": "minecraft:water_bucket"
          },
          {
            "title": "Lingotes de hierro x3",
            "item": "minecraft:iron_ingot",
            "amount": 3,
            "icon": "minecraft:iron_ingot"
          },
          {
            "title": "Verrugas x5",
            "item": "minecraft:nether_wart",
            "amount": 5,
            "icon": "minecraft:nether_wart"
          },
          {
            "title": "Poción acuática x4",
            "item": "minecraft:potion",
            "amount": 4,
            "icon": "minecraft:potion"
          }
        ],
        "reward": {
          "title": "250 monedas",
          "amount": 250,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 14,
        "title": "DIA 14 - Salto de conejo",
        "tasks": [
          {
            "title": "Patas de conejo x2",
            "item": "minecraft:rabbit_foot",
            "amount": 2,
            "icon": "minecraft:rabbit_foot"
          },
          {
            "title": "Piel de conejo x4",
            "item": "minecraft:rabbit_hide",
            "amount": 4,
            "icon": "minecraft:rabbit_hide"
          },
          {
            "title": "Botas de hierro",
            "item": "minecraft:iron_boots",
            "amount": 1,
            "icon": "minecraft:iron_boots"
          },
          {
            "title": "Verrugas x5",
            "item": "minecraft:nether_wart",
            "amount": 5,
            "icon": "minecraft:nether_wart"
          },
          {
            "title": "Poción de salto x4",
            "item": "minecraft:potion",
            "amount": 4,
            "icon": "minecraft:potion"
          }
        ],
        "reward": {
          "title": "275 monedas",
          "amount": 275,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 15,
        "title": "DIA 15 - Flechas alquímicas",
        "tasks": [
          {
            "title": "Flechas base x32",
            "item": "minecraft:arrow",
            "amount": 32,
            "icon": "minecraft:arrow"
          },
          {
            "title": "Pedernal x6",
            "item": "minecraft:flint",
            "amount": 6,
            "icon": "minecraft:flint"
          },
          {
            "title": "Palos x8",
            "item": "minecraft:stick",
            "amount": 8,
            "icon": "minecraft:stick"
          },
          {
            "title": "Plumas x8",
            "item": "minecraft:feather",
            "amount": 8,
            "icon": "minecraft:feather"
          },
          {
            "title": "Flechas con efecto x16",
            "item": "minecraft:tipped_arrow",
            "amount": 16,
            "icon": "minecraft:tipped_arrow"
          }
        ],
        "reward": {
          "title": "300 monedas",
          "amount": 300,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 16,
        "title": "DIA 16 - Lágrimas del cielo",
        "tasks": [
          {
            "title": "Lágrima de ghast x2",
            "item": "minecraft:ghast_tear",
            "amount": 2,
            "icon": "minecraft:ghast_tear"
          },
          {
            "title": "Verrugas x5",
            "item": "minecraft:nether_wart",
            "amount": 5,
            "icon": "minecraft:nether_wart"
          },
          {
            "title": "Frascos x5",
            "item": "minecraft:glass_bottle",
            "amount": 5,
            "icon": "minecraft:glass_bottle"
          },
          {
            "title": "Poción de regeneración x4",
            "item": "minecraft:potion",
            "amount": 4,
            "icon": "minecraft:potion"
          },
          {
            "title": "Lingotes de oro x4",
            "item": "minecraft:gold_ingot",
            "amount": 4,
            "icon": "minecraft:gold_ingot"
          }
        ],
        "reward": {
          "title": "325 monedas",
          "amount": 325,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 17,
        "title": "DIA 17 - Cazador de espectros",
        "tasks": [
          {
            "title": "Membrana espectral x3",
            "item": "minecraft:phantom_membrane",
            "amount": 3,
            "icon": "minecraft:phantom_membrane"
          },
          {
            "title": "Huesos x5",
            "item": "minecraft:bone",
            "amount": 5,
            "icon": "minecraft:bone"
          },
          {
            "title": "Cama para pasar noche",
            "item": "minecraft:bed",
            "amount": 1,
            "icon": "minecraft:bed"
          },
          {
            "title": "Verrugas x5",
            "item": "minecraft:nether_wart",
            "amount": 5,
            "icon": "minecraft:nether_wart"
          },
          {
            "title": "Poción de caída lenta x5",
            "item": "minecraft:potion",
            "amount": 5,
            "icon": "minecraft:potion"
          }
        ],
        "reward": {
          "title": "350 monedas",
          "amount": 350,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 18,
        "title": "DIA 18 - Caparazón ancestral",
        "tasks": [
          {
            "title": "Casco de tortuga",
            "item": "minecraft:turtle_helmet",
            "amount": 1,
            "icon": "minecraft:turtle_helmet"
          },
          {
            "title": "Escamas x5",
            "item": "minecraft:scute",
            "amount": 5,
            "icon": "minecraft:scute"
          },
          {
            "title": "Algas marinas x8",
            "item": "minecraft:seagrass",
            "amount": 8,
            "icon": "minecraft:seagrass"
          },
          {
            "title": "Verrugas x6",
            "item": "minecraft:nether_wart",
            "amount": 6,
            "icon": "minecraft:nether_wart"
          },
          {
            "title": "Poción maestro tortuga x4",
            "item": "minecraft:potion",
            "amount": 4,
            "icon": "minecraft:potion"
          }
        ],
        "reward": {
          "title": "380 monedas",
          "amount": 380,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 19,
        "title": "DIA 19 - Aliento de dragón",
        "tasks": [
          {
            "title": "Aliento de dragón",
            "item": "minecraft:dragon_breath",
            "amount": 1,
            "icon": "minecraft:dragon_breath"
          },
          {
            "title": "Frascos para aliento x6",
            "item": "minecraft:glass_bottle",
            "amount": 6,
            "icon": "minecraft:glass_bottle"
          },
          {
            "title": "Pólvora x3",
            "item": "minecraft:gunpowder",
            "amount": 3,
            "icon": "minecraft:gunpowder"
          },
          {
            "title": "Poción persistente x2",
            "item": "minecraft:lingering_potion",
            "amount": 2,
            "icon": "minecraft:lingering_potion"
          },
          {
            "title": "Perlas de ender x3",
            "item": "minecraft:ender_pearl",
            "amount": 3,
            "icon": "minecraft:ender_pearl"
          }
        ],
        "reward": {
          "title": "405 monedas",
          "amount": 405,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 20,
        "title": "DIA 20 - Alquimista de combate",
        "tasks": [
          {
            "title": "Pociones arrojadizas x3",
            "item": "minecraft:splash_potion",
            "amount": 3,
            "icon": "minecraft:splash_potion"
          },
          {
            "title": "Flechas con efecto x16",
            "item": "minecraft:tipped_arrow",
            "amount": 16,
            "icon": "minecraft:tipped_arrow"
          },
          {
            "title": "Nubes persistentes x2",
            "item": "minecraft:lingering_potion",
            "amount": 2,
            "icon": "minecraft:lingering_potion"
          },
          {
            "title": "Ojos fermentados x2",
            "item": "minecraft:fermented_spider_eye",
            "amount": 2,
            "icon": "minecraft:fermented_spider_eye"
          },
          {
            "title": "Pociones completas x5",
            "item": "minecraft:potion",
            "amount": 5,
            "icon": "minecraft:potion"
          }
        ],
        "reward": {
          "title": "430 monedas",
          "amount": 430,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 21,
        "title": "DIA 21 - Ingeniería alquímica",
        "tasks": [
          {
            "title": "Tolvas x3",
            "item": "minecraft:hopper",
            "amount": 3,
            "icon": "minecraft:hopper"
          },
          {
            "title": "Polvo redstone x12",
            "item": "minecraft:redstone",
            "amount": 12,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Comparadores x2",
            "item": "minecraft:comparator",
            "amount": 2,
            "icon": "minecraft:comparator"
          },
          {
            "title": "Cofres x4",
            "item": "minecraft:chest",
            "amount": 4,
            "icon": "minecraft:chest"
          },
          {
            "title": "Soportes extra x2",
            "item": "minecraft:brewing_stand",
            "amount": 2,
            "icon": "minecraft:brewing_stand"
          }
        ],
        "reward": {
          "title": "460 monedas",
          "amount": 460,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 22,
        "title": "DIA 22 - Fortaleza blaze",
        "tasks": [
          {
            "title": "Varas blaze x5",
            "item": "minecraft:blaze_rod",
            "amount": 5,
            "icon": "minecraft:blaze_rod"
          },
          {
            "title": "Ladrillos del Nether x24",
            "item": "minecraft:nether_bricks",
            "amount": 24,
            "icon": "minecraft:nether_bricks"
          },
          {
            "title": "Bloques de magma x8",
            "item": "minecraft:magma_block",
            "amount": 8,
            "icon": "minecraft:magma_block"
          },
          {
            "title": "Polvo blaze x8",
            "item": "minecraft:blaze_powder",
            "amount": 8,
            "icon": "minecraft:blaze_powder"
          },
          {
            "title": "Pociones ignífugas x6",
            "item": "minecraft:potion",
            "amount": 6,
            "icon": "minecraft:potion"
          }
        ],
        "reward": {
          "title": "495 monedas",
          "amount": 495,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 23,
        "title": "DIA 23 - Cristalería fina",
        "tasks": [
          {
            "title": "Vidrio pulido x24",
            "item": "minecraft:glass",
            "amount": 24,
            "icon": "minecraft:glass"
          },
          {
            "title": "Frascos de reserva x16",
            "item": "minecraft:glass_bottle",
            "amount": 16,
            "icon": "minecraft:glass_bottle"
          },
          {
            "title": "Calderos x3",
            "item": "minecraft:cauldron",
            "amount": 3,
            "icon": "minecraft:cauldron"
          },
          {
            "title": "Fragmentos amatista x4",
            "item": "minecraft:amethyst_shard",
            "amount": 4,
            "icon": "minecraft:amethyst_shard"
          },
          {
            "title": "Pociones en masa x8",
            "item": "minecraft:potion",
            "amount": 8,
            "icon": "minecraft:potion"
          }
        ],
        "reward": {
          "title": "530 monedas",
          "amount": 530,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 24,
        "title": "DIA 24 - Encantamientos alquímicos",
        "tasks": [
          {
            "title": "Mesa de encantamientos",
            "item": "minecraft:enchanting_table",
            "amount": 1,
            "icon": "minecraft:enchanting_table"
          },
          {
            "title": "Libros x6",
            "item": "minecraft:book",
            "amount": 6,
            "icon": "minecraft:book"
          },
          {
            "title": "Lapislázuli x12",
            "item": "minecraft:lapis_lazuli",
            "amount": 12,
            "icon": "minecraft:lapis_lazuli"
          },
          {
            "title": "Obsidiana x14",
            "item": "minecraft:obsidian",
            "amount": 14,
            "icon": "minecraft:obsidian"
          },
          {
            "title": "Diamantes puros x2",
            "item": "minecraft:diamond",
            "amount": 2,
            "icon": "minecraft:diamond"
          }
        ],
        "reward": {
          "title": "565 monedas",
          "amount": 565,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 25,
        "title": "DIA 25 - Pociones explosivas",
        "tasks": [
          {
            "title": "Pólvora x8",
            "item": "minecraft:gunpowder",
            "amount": 8,
            "icon": "minecraft:gunpowder"
          },
          {
            "title": "Dinamita x4",
            "item": "minecraft:tnt",
            "amount": 4,
            "icon": "minecraft:tnt"
          },
          {
            "title": "Arrojadizas variadas x5",
            "item": "minecraft:splash_potion",
            "amount": 5,
            "icon": "minecraft:splash_potion"
          },
          {
            "title": "Persistentes x3",
            "item": "minecraft:lingering_potion",
            "amount": 3,
            "icon": "minecraft:lingering_potion"
          },
          {
            "title": "Pociones de combate x8",
            "item": "minecraft:potion",
            "amount": 8,
            "icon": "minecraft:potion"
          }
        ],
        "reward": {
          "title": "620 monedas",
          "amount": 620,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 26,
        "title": "DIA 26 - Ecos de las profundidades",
        "tasks": [
          {
            "title": "Fragmentos de eco x2",
            "item": "minecraft:echo_shard",
            "amount": 2,
            "icon": "minecraft:echo_shard"
          },
          {
            "title": "Amatistas x10",
            "item": "minecraft:amethyst_shard",
            "amount": 10,
            "icon": "minecraft:amethyst_shard"
          },
          {
            "title": "Obsidiana llorosa x6",
            "item": "minecraft:crying_obsidian",
            "amount": 6,
            "icon": "minecraft:crying_obsidian"
          },
          {
            "title": "Frascos de XP x5",
            "item": "minecraft:experience_bottle",
            "amount": 5,
            "icon": "minecraft:experience_bottle"
          },
          {
            "title": "Brújula de recuperación",
            "item": "minecraft:recovery_compass",
            "amount": 1,
            "icon": "minecraft:recovery_compass"
          }
        ],
        "reward": {
          "title": "660 monedas",
          "amount": 660,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 27,
        "title": "DIA 27 - Viaje al Fin",
        "tasks": [
          {
            "title": "Perlas de ender x8",
            "item": "minecraft:ender_pearl",
            "amount": 8,
            "icon": "minecraft:ender_pearl"
          },
          {
            "title": "Ojos de ender x4",
            "item": "minecraft:ender_eye",
            "amount": 4,
            "icon": "minecraft:ender_eye"
          },
          {
            "title": "Fruta chorus x10",
            "item": "minecraft:chorus_fruit",
            "amount": 10,
            "icon": "minecraft:chorus_fruit"
          },
          {
            "title": "Piedra del End x16",
            "item": "minecraft:end_stone",
            "amount": 16,
            "icon": "minecraft:end_stone"
          },
          {
            "title": "Aliento de dragón x2",
            "item": "minecraft:dragon_breath",
            "amount": 2,
            "icon": "minecraft:dragon_breath"
          }
        ],
        "reward": {
          "title": "760 monedas",
          "amount": 760,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 28,
        "title": "DIA 28 - Biblioteca arcana",
        "tasks": [
          {
            "title": "Frascos de XP x10",
            "item": "minecraft:experience_bottle",
            "amount": 10,
            "icon": "minecraft:experience_bottle"
          },
          {
            "title": "Lapislázuli x16",
            "item": "minecraft:lapis_lazuli",
            "amount": 16,
            "icon": "minecraft:lapis_lazuli"
          },
          {
            "title": "Mesa arcana",
            "item": "minecraft:enchanting_table",
            "amount": 1,
            "icon": "minecraft:enchanting_table"
          },
          {
            "title": "Librerías x12",
            "item": "minecraft:bookshelf",
            "amount": 12,
            "icon": "minecraft:bookshelf"
          },
          {
            "title": "Aliento dragón x3",
            "item": "minecraft:dragon_breath",
            "amount": 3,
            "icon": "minecraft:dragon_breath"
          }
        ],
        "reward": {
          "title": "900 monedas",
          "amount": 900,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 29,
        "title": "DIA 29 - Elixir dorado supremo",
        "tasks": [
          {
            "title": "Oro en lingotes x64",
            "item": "minecraft:gold_ingot",
            "amount": 64,
            "icon": "minecraft:gold_ingot"
          },
          {
            "title": "Bloques de oro x2",
            "item": "minecraft:gold_block",
            "amount": 2,
            "icon": "minecraft:gold_block"
          },
          {
            "title": "Manzana de notch",
            "item": "minecraft:enchanted_golden_apple",
            "amount": 1,
            "icon": "minecraft:enchanted_golden_apple"
          },
          {
            "title": "Pociones completas x12",
            "item": "minecraft:potion",
            "amount": 12,
            "icon": "minecraft:potion"
          },
          {
            "title": "Persistentes x4",
            "item": "minecraft:lingering_potion",
            "amount": 4,
            "icon": "minecraft:lingering_potion"
          }
        ],
        "reward": {
          "title": "1100 monedas",
          "amount": 1100,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 30,
        "title": "DIA 30 - El laboratorio definitivo",
        "tasks": [
          {
            "title": "Construye un faro",
            "item": "minecraft:beacon",
            "amount": 1,
            "icon": "minecraft:beacon"
          },
          {
            "title": "Estrella del Nether",
            "item": "minecraft:nether_star",
            "amount": 1,
            "icon": "minecraft:nether_star"
          },
          {
            "title": "Aliento dragón x4",
            "item": "minecraft:dragon_breath",
            "amount": 4,
            "icon": "minecraft:dragon_breath"
          },
          {
            "title": "Gran lote de pociones x16",
            "item": "minecraft:potion",
            "amount": 16,
            "icon": "minecraft:potion"
          },
          {
            "title": "Flechas alquímicas x32",
            "item": "minecraft:tipped_arrow",
            "amount": 32,
            "icon": "minecraft:tipped_arrow"
          }
        ],
        "reward": {
          "title": "1300 monedas",
          "amount": 1300,
          "icon": "saros__money_mod:euro_100"
        }
      }
    ]
  },
  {
    "id": "arquitecto",
    "name": "Arquitecto",
    "emoji": "🏗️",
    "color": "#78909C",
    "days": [
      {
        "day": 1,
        "title": "DIA 1 - Primeros materiales",
        "tasks": [
          {
            "title": "Recolecta madera de roble x4",
            "item": "minecraft:oak_planks",
            "amount": 4,
            "icon": "minecraft:oak_planks"
          },
          {
            "title": "Pica piedra lisa x8",
            "item": "minecraft:stone",
            "amount": 8,
            "icon": "minecraft:stone"
          },
          {
            "title": "Fabrica mesa de crafteo",
            "item": "minecraft:crafting_table",
            "amount": 1,
            "icon": "minecraft:crafting_table"
          },
          {
            "title": "Construye un horno",
            "item": "minecraft:furnace",
            "amount": 1,
            "icon": "minecraft:furnace"
          },
          {
            "title": "Craftea palos x8",
            "item": "minecraft:stick",
            "amount": 8,
            "icon": "minecraft:stick"
          }
        ],
        "reward": {
          "title": "65 monedas",
          "amount": 65,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 2,
        "title": "DIA 2 - Herramientas básicas",
        "tasks": [
          {
            "title": "Recolecta roca x8",
            "item": "minecraft:cobblestone",
            "amount": 8,
            "icon": "minecraft:cobblestone"
          },
          {
            "title": "Fabrica pico de piedra",
            "item": "minecraft:stone_pickaxe",
            "amount": 1,
            "icon": "minecraft:stone_pickaxe"
          },
          {
            "title": "Fabrica hacha de piedra",
            "item": "minecraft:stone_axe",
            "amount": 1,
            "icon": "minecraft:stone_axe"
          },
          {
            "title": "Encuentra carbón x4",
            "item": "minecraft:coal",
            "amount": 4,
            "icon": "minecraft:coal"
          },
          {
            "title": "Fabrica ladrillos de piedra x4",
            "item": "minecraft:stone_bricks",
            "amount": 4,
            "icon": "minecraft:stone_bricks"
          }
        ],
        "reward": {
          "title": "75 monedas",
          "amount": 75,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 3,
        "title": "DIA 3 - Carpintería inicial",
        "tasks": [
          {
            "title": "Craftea escaleras de roble x4",
            "item": "minecraft:oak_stairs",
            "amount": 4,
            "icon": "minecraft:oak_stairs"
          },
          {
            "title": "Craftea losas de roble x4",
            "item": "minecraft:oak_slab",
            "amount": 4,
            "icon": "minecraft:oak_slab"
          },
          {
            "title": "Fabrica valla de roble x4",
            "item": "minecraft:oak_fence",
            "amount": 4,
            "icon": "minecraft:oak_fence"
          },
          {
            "title": "Construye puerta de roble",
            "item": "minecraft:oak_door",
            "amount": 1,
            "icon": "minecraft:oak_door"
          },
          {
            "title": "Recolecta madera de abeto x4",
            "item": "minecraft:spruce_planks",
            "amount": 4,
            "icon": "minecraft:spruce_planks"
          }
        ],
        "reward": {
          "title": "85 monedas",
          "amount": 85,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 4,
        "title": "DIA 4 - Fundición y vidrio",
        "tasks": [
          {
            "title": "Funde piedra lisa x4",
            "item": "minecraft:smooth_stone",
            "amount": 4,
            "icon": "minecraft:smooth_stone"
          },
          {
            "title": "Fabrica bloques de vidrio x4",
            "item": "minecraft:glass",
            "amount": 4,
            "icon": "minecraft:glass"
          },
          {
            "title": "Fabrica paneles de vidrio x8",
            "item": "minecraft:glass_pane",
            "amount": 8,
            "icon": "minecraft:glass_pane"
          },
          {
            "title": "Craftea antorchas x4",
            "item": "minecraft:torch",
            "amount": 4,
            "icon": "minecraft:torch"
          },
          {
            "title": "Prepara una fogata",
            "item": "minecraft:campfire",
            "amount": 1,
            "icon": "minecraft:campfire"
          }
        ],
        "reward": {
          "title": "98 monedas",
          "amount": 98,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 5,
        "title": "DIA 5 - Mi primera casa",
        "tasks": [
          {
            "title": "Escaleras de abeto x4",
            "item": "minecraft:spruce_stairs",
            "amount": 4,
            "icon": "minecraft:spruce_stairs"
          },
          {
            "title": "Losas de abeto x4",
            "item": "minecraft:spruce_slab",
            "amount": 4,
            "icon": "minecraft:spruce_slab"
          },
          {
            "title": "Valla de abeto x4",
            "item": "minecraft:spruce_fence",
            "amount": 4,
            "icon": "minecraft:spruce_fence"
          },
          {
            "title": "Puerta de abeto x1",
            "item": "minecraft:spruce_door",
            "amount": 1,
            "icon": "minecraft:spruce_door"
          },
          {
            "title": "Fabrica cofres x2",
            "item": "minecraft:chest",
            "amount": 2,
            "icon": "minecraft:chest"
          }
        ],
        "reward": {
          "title": "110 monedas",
          "amount": 110,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 6,
        "title": "DIA 6 - Cantería con Stoneworks",
        "tasks": [
          {
            "title": "Recolecta andesita x8",
            "item": "minecraft:andesite",
            "amount": 8,
            "icon": "minecraft:andesite"
          },
          {
            "title": "Recolecta granito x8",
            "item": "minecraft:granite",
            "amount": 8,
            "icon": "minecraft:granite"
          },
          {
            "title": "Recolecta diorita x8",
            "item": "minecraft:diorite",
            "amount": 8,
            "icon": "minecraft:diorite"
          },
          {
            "title": "Fabrica cortapiedras",
            "item": "minecraft:stonecutter",
            "amount": 1,
            "icon": "minecraft:stonecutter"
          },
          {
            "title": "Piedra labrada cincelada x4",
            "item": "minecraft:chiseled_stone_bricks",
            "amount": 4,
            "icon": "minecraft:chiseled_stone_bricks"
          }
        ],
        "reward": {
          "title": "120 monedas",
          "amount": 120,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 7,
        "title": "DIA 7 - Variantes de piedra",
        "tasks": [
          {
            "title": "Recolecta calcita x8",
            "item": "minecraft:calcite",
            "amount": 8,
            "icon": "minecraft:calcite"
          },
          {
            "title": "Recolecta toba x8",
            "item": "minecraft:tuff",
            "amount": 8,
            "icon": "minecraft:tuff"
          },
          {
            "title": "Recolecta espeleotema x4",
            "item": "minecraft:dripstone_block",
            "amount": 4,
            "icon": "minecraft:dripstone_block"
          },
          {
            "title": "Andesita pulida x4",
            "item": "minecraft:polished_andesite",
            "amount": 4,
            "icon": "minecraft:polished_andesite"
          },
          {
            "title": "Diorita pulida x4",
            "item": "minecraft:polished_diorite",
            "amount": 4,
            "icon": "minecraft:polished_diorite"
          }
        ],
        "reward": {
          "title": "135 monedas",
          "amount": 135,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 8,
        "title": "DIA 8 - Pizarra profunda",
        "tasks": [
          {
            "title": "Pizarra profunda pulida x8",
            "item": "minecraft:polished_deepslate",
            "amount": 8,
            "icon": "minecraft:polished_deepslate"
          },
          {
            "title": "Baldosas de pizarra x8",
            "item": "minecraft:deepslate_tiles",
            "amount": 8,
            "icon": "minecraft:deepslate_tiles"
          },
          {
            "title": "Ladrillos de pizarra x8",
            "item": "minecraft:deepslate_bricks",
            "amount": 8,
            "icon": "minecraft:deepslate_bricks"
          },
          {
            "title": "Ladrillos agrietados x4",
            "item": "minecraft:cracked_stone_bricks",
            "amount": 4,
            "icon": "minecraft:cracked_stone_bricks"
          },
          {
            "title": "Ladrillos musgosos x4",
            "item": "minecraft:mossy_stone_bricks",
            "amount": 4,
            "icon": "minecraft:mossy_stone_bricks"
          }
        ],
        "reward": {
          "title": "155 monedas",
          "amount": 155,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 9,
        "title": "DIA 9 - Techos y marcos",
        "tasks": [
          {
            "title": "Escaleras de ladrillo x8",
            "item": "minecraft:brick_stairs",
            "amount": 8,
            "icon": "minecraft:brick_stairs"
          },
          {
            "title": "Recolecta terracota x8",
            "item": "minecraft:terracotta",
            "amount": 8,
            "icon": "minecraft:terracotta"
          },
          {
            "title": "Trampillas de roble x4",
            "item": "minecraft:oak_trapdoor",
            "amount": 4,
            "icon": "minecraft:oak_trapdoor"
          },
          {
            "title": "Trampillas de abeto x4",
            "item": "minecraft:spruce_trapdoor",
            "amount": 4,
            "icon": "minecraft:spruce_trapdoor"
          },
          {
            "title": "Losas de ladrillo x4",
            "item": "minecraft:brick_slab",
            "amount": 4,
            "icon": "minecraft:brick_slab"
          }
        ],
        "reward": {
          "title": "170 monedas",
          "amount": 170,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 10,
        "title": "DIA 10 - Muros y portones",
        "tasks": [
          {
            "title": "Muro de piedra labrada x8",
            "item": "minecraft:stone_brick_wall",
            "amount": 8,
            "icon": "minecraft:stone_brick_wall"
          },
          {
            "title": "Muro de roca x8",
            "item": "minecraft:cobblestone_wall",
            "amount": 8,
            "icon": "minecraft:cobblestone_wall"
          },
          {
            "title": "Puerta de hierro x1",
            "item": "minecraft:iron_door",
            "amount": 1,
            "icon": "minecraft:iron_door"
          },
          {
            "title": "Barrotes de hierro x4",
            "item": "minecraft:iron_bars",
            "amount": 4,
            "icon": "minecraft:iron_bars"
          },
          {
            "title": "Losas de piedra lisa x4",
            "item": "minecraft:smooth_stone_slab",
            "amount": 4,
            "icon": "minecraft:smooth_stone_slab"
          }
        ],
        "reward": {
          "title": "190 monedas",
          "amount": 190,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 11,
        "title": "DIA 11 - Decoración interior",
        "tasks": [
          {
            "title": "Cuelga cuadros x2",
            "item": "minecraft:painting",
            "amount": 2,
            "icon": "minecraft:painting"
          },
          {
            "title": "Coloca marcos x2",
            "item": "minecraft:item_frame",
            "amount": 2,
            "icon": "minecraft:item_frame"
          },
          {
            "title": "Fabrica macetas x2",
            "item": "minecraft:flower_pot",
            "amount": 2,
            "icon": "minecraft:flower_pot"
          },
          {
            "title": "Estanterías x2",
            "item": "minecraft:bookshelf",
            "amount": 2,
            "icon": "minecraft:bookshelf"
          },
          {
            "title": "Alfombra blanca x4",
            "item": "minecraft:white_carpet",
            "amount": 4,
            "icon": "minecraft:white_carpet"
          }
        ],
        "reward": {
          "title": "210 monedas",
          "amount": 210,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 12,
        "title": "DIA 12 - Iluminación artística",
        "tasks": [
          {
            "title": "Fabrica faroles x4",
            "item": "minecraft:lantern",
            "amount": 4,
            "icon": "minecraft:lantern"
          },
          {
            "title": "Farol de almas x2",
            "item": "minecraft:soul_lantern",
            "amount": 2,
            "icon": "minecraft:soul_lantern"
          },
          {
            "title": "Craftea velas x4",
            "item": "minecraft:candle",
            "amount": 4,
            "icon": "minecraft:candle"
          },
          {
            "title": "Linterna marina x2",
            "item": "minecraft:sea_lantern",
            "amount": 2,
            "icon": "minecraft:sea_lantern"
          },
          {
            "title": "Piedra luminosa x4",
            "item": "minecraft:glowstone",
            "amount": 4,
            "icon": "minecraft:glowstone"
          }
        ],
        "reward": {
          "title": "230 monedas",
          "amount": 230,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 13,
        "title": "DIA 13 - Estaciones de trabajo",
        "tasks": [
          {
            "title": "Fabrica telar",
            "item": "minecraft:loom",
            "amount": 1,
            "icon": "minecraft:loom"
          },
          {
            "title": "Mesa de herrería",
            "item": "minecraft:smithing_table",
            "amount": 1,
            "icon": "minecraft:smithing_table"
          },
          {
            "title": "Mesa de flechas",
            "item": "minecraft:fletching_table",
            "amount": 1,
            "icon": "minecraft:fletching_table"
          },
          {
            "title": "Mesa de cartografía",
            "item": "minecraft:cartography_table",
            "amount": 1,
            "icon": "minecraft:cartography_table"
          },
          {
            "title": "Afiladora",
            "item": "minecraft:grindstone",
            "amount": 1,
            "icon": "minecraft:grindstone"
          }
        ],
        "reward": {
          "title": "255 monedas",
          "amount": 255,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 14,
        "title": "DIA 14 - Estandartes y cadenas",
        "tasks": [
          {
            "title": "Craftea estandartes x2",
            "item": "minecraft:white_banner",
            "amount": 2,
            "icon": "minecraft:white_banner"
          },
          {
            "title": "Fabrica campana",
            "item": "minecraft:bell",
            "amount": 1,
            "icon": "minecraft:bell"
          },
          {
            "title": "Craftea cadenas x8",
            "item": "minecraft:chain",
            "amount": 8,
            "icon": "minecraft:chain"
          },
          {
            "title": "Pararrayos x2",
            "item": "minecraft:lightning_rod",
            "amount": 2,
            "icon": "minecraft:lightning_rod"
          },
          {
            "title": "Soporte de armadura",
            "item": "minecraft:armor_stand",
            "amount": 1,
            "icon": "minecraft:armor_stand"
          }
        ],
        "reward": {
          "title": "275 monedas",
          "amount": 275,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 15,
        "title": "DIA 15 - Jardinería ornamental",
        "tasks": [
          {
            "title": "Fabrica compostador",
            "item": "minecraft:composter",
            "amount": 1,
            "icon": "minecraft:composter"
          },
          {
            "title": "Consigue azalea x4",
            "item": "minecraft:azalea",
            "amount": 4,
            "icon": "minecraft:azalea"
          },
          {
            "title": "Azalea floreciente x4",
            "item": "minecraft:flowering_azalea_leaves",
            "amount": 4,
            "icon": "minecraft:flowering_azalea_leaves"
          },
          {
            "title": "Bloque de musgo x4",
            "item": "minecraft:moss_block",
            "amount": 4,
            "icon": "minecraft:moss_block"
          },
          {
            "title": "Alfombra de musgo x4",
            "item": "minecraft:moss_carpet",
            "amount": 4,
            "icon": "minecraft:moss_carpet"
          }
        ],
        "reward": {
          "title": "300 monedas",
          "amount": 300,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 16,
        "title": "DIA 16 - Cerezo en flor",
        "tasks": [
          {
            "title": "Madera de cerezo x8",
            "item": "minecraft:cherry_planks",
            "amount": 8,
            "icon": "minecraft:cherry_planks"
          },
          {
            "title": "Escaleras de cerezo x4",
            "item": "minecraft:cherry_stairs",
            "amount": 4,
            "icon": "minecraft:cherry_stairs"
          },
          {
            "title": "Losas de cerezo x4",
            "item": "minecraft:cherry_slab",
            "amount": 4,
            "icon": "minecraft:cherry_slab"
          },
          {
            "title": "Puerta de cerezo x1",
            "item": "minecraft:cherry_door",
            "amount": 1,
            "icon": "minecraft:cherry_door"
          },
          {
            "title": "Pétalos rosas x4",
            "item": "minecraft:pink_petals",
            "amount": 4,
            "icon": "minecraft:pink_petals"
          }
        ],
        "reward": {
          "title": "330 monedas",
          "amount": 330,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 17,
        "title": "DIA 17 - Paraíso tropical",
        "tasks": [
          {
            "title": "Madera de jungla x8",
            "item": "minecraft:jungle_planks",
            "amount": 8,
            "icon": "minecraft:jungle_planks"
          },
          {
            "title": "Bloque de bambú x4",
            "item": "minecraft:bamboo_block",
            "amount": 4,
            "icon": "minecraft:bamboo_block"
          },
          {
            "title": "Escaleras de jungla x4",
            "item": "minecraft:jungle_stairs",
            "amount": 4,
            "icon": "minecraft:jungle_stairs"
          },
          {
            "title": "Losas de jungla x4",
            "item": "minecraft:jungle_slab",
            "amount": 4,
            "icon": "minecraft:jungle_slab"
          },
          {
            "title": "Enredaderas x4",
            "item": "minecraft:vine",
            "amount": 4,
            "icon": "minecraft:vine"
          }
        ],
        "reward": {
          "title": "355 monedas",
          "amount": 355,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 18,
        "title": "DIA 18 - Mansión de caoba",
        "tasks": [
          {
            "title": "Madera de roble oscuro x8",
            "item": "minecraft:dark_oak_planks",
            "amount": 8,
            "icon": "minecraft:dark_oak_planks"
          },
          {
            "title": "Escaleras oscuras x4",
            "item": "minecraft:dark_oak_stairs",
            "amount": 4,
            "icon": "minecraft:dark_oak_stairs"
          },
          {
            "title": "Losas oscuras x4",
            "item": "minecraft:dark_oak_slab",
            "amount": 4,
            "icon": "minecraft:dark_oak_slab"
          },
          {
            "title": "Valla de roble oscuro x4",
            "item": "minecraft:dark_oak_fence",
            "amount": 4,
            "icon": "minecraft:dark_oak_fence"
          },
          {
            "title": "Puerta de roble oscuro",
            "item": "minecraft:dark_oak_door",
            "amount": 1,
            "icon": "minecraft:dark_oak_door"
          }
        ],
        "reward": {
          "title": "380 monedas",
          "amount": 380,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 19,
        "title": "DIA 19 - Refugio alpino",
        "tasks": [
          {
            "title": "Madera de abedul x8",
            "item": "minecraft:birch_planks",
            "amount": 8,
            "icon": "minecraft:birch_planks"
          },
          {
            "title": "Escaleras de abedul x4",
            "item": "minecraft:birch_stairs",
            "amount": 4,
            "icon": "minecraft:birch_stairs"
          },
          {
            "title": "Losas de abedul x4",
            "item": "minecraft:birch_slab",
            "amount": 4,
            "icon": "minecraft:birch_slab"
          },
          {
            "title": "Tronco de abeto x4",
            "item": "minecraft:spruce_log",
            "amount": 4,
            "icon": "minecraft:spruce_log"
          },
          {
            "title": "Hogueras x2",
            "item": "minecraft:campfire",
            "amount": 2,
            "icon": "minecraft:campfire"
          }
        ],
        "reward": {
          "title": "405 monedas",
          "amount": 405,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 20,
        "title": "DIA 20 - Arte en hormigón",
        "tasks": [
          {
            "title": "Hormigón blanco x8",
            "item": "minecraft:white_concrete",
            "amount": 8,
            "icon": "minecraft:white_concrete"
          },
          {
            "title": "Hormigón celeste x4",
            "item": "minecraft:light_blue_concrete",
            "amount": 4,
            "icon": "minecraft:light_blue_concrete"
          },
          {
            "title": "Hormigón cian x4",
            "item": "minecraft:cyan_concrete",
            "amount": 4,
            "icon": "minecraft:cyan_concrete"
          },
          {
            "title": "Hormigón gris x8",
            "item": "minecraft:gray_concrete",
            "amount": 8,
            "icon": "minecraft:gray_concrete"
          },
          {
            "title": "Hormigón negro x4",
            "item": "minecraft:black_concrete",
            "amount": 4,
            "icon": "minecraft:black_concrete"
          }
        ],
        "reward": {
          "title": "430 monedas",
          "amount": 430,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 21,
        "title": "DIA 21 - Fuente y acueducto",
        "tasks": [
          {
            "title": "Ladrillos de prismarina x8",
            "item": "minecraft:prismarine_bricks",
            "amount": 8,
            "icon": "minecraft:prismarine_bricks"
          },
          {
            "title": "Prismarina oscura x4",
            "item": "minecraft:dark_prismarine",
            "amount": 4,
            "icon": "minecraft:dark_prismarine"
          },
          {
            "title": "Linternas marinas x4",
            "item": "minecraft:sea_lantern",
            "amount": 4,
            "icon": "minecraft:sea_lantern"
          },
          {
            "title": "Prismarina x8",
            "item": "minecraft:prismarine",
            "amount": 8,
            "icon": "minecraft:prismarine"
          },
          {
            "title": "Cubo de agua x1",
            "item": "minecraft:water_bucket",
            "amount": 1,
            "icon": "minecraft:water_bucket"
          }
        ],
        "reward": {
          "title": "455 monedas",
          "amount": 455,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 22,
        "title": "DIA 22 - El gran puente",
        "tasks": [
          {
            "title": "Piedra negra pulida x8",
            "item": "minecraft:polished_blackstone_bricks",
            "amount": 8,
            "icon": "minecraft:polished_blackstone_bricks"
          },
          {
            "title": "Muro de piedra negra x8",
            "item": "minecraft:blackstone_wall",
            "amount": 8,
            "icon": "minecraft:blackstone_wall"
          },
          {
            "title": "Escaleras de piedra x8",
            "item": "minecraft:stone_brick_stairs",
            "amount": 8,
            "icon": "minecraft:stone_brick_stairs"
          },
          {
            "title": "Cadenas tensadas x8",
            "item": "minecraft:chain",
            "amount": 8,
            "icon": "minecraft:chain"
          },
          {
            "title": "Barrotes de hierro x4",
            "item": "minecraft:iron_bars",
            "amount": 4,
            "icon": "minecraft:iron_bars"
          }
        ],
        "reward": {
          "title": "490 monedas",
          "amount": 490,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 23,
        "title": "DIA 23 - Torre de vigilancia",
        "tasks": [
          {
            "title": "Piedra lisa pulida x8",
            "item": "minecraft:smooth_stone",
            "amount": 8,
            "icon": "minecraft:smooth_stone"
          },
          {
            "title": "Muro de roca x4",
            "item": "minecraft:cobblestone_wall",
            "amount": 4,
            "icon": "minecraft:cobblestone_wall"
          },
          {
            "title": "Escaleras de mano x4",
            "item": "minecraft:ladder",
            "amount": 4,
            "icon": "minecraft:ladder"
          },
          {
            "title": "Puerta de valla x2",
            "item": "minecraft:oak_fence_gate",
            "amount": 2,
            "icon": "minecraft:oak_fence_gate"
          },
          {
            "title": "Pararrayos en torre x2",
            "item": "minecraft:lightning_rod",
            "amount": 2,
            "icon": "minecraft:lightning_rod"
          }
        ],
        "reward": {
          "title": "525 monedas",
          "amount": 525,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 24,
        "title": "DIA 24 - Puertas mecánicas",
        "tasks": [
          {
            "title": "Pistón pegajoso x4",
            "item": "minecraft:sticky_piston",
            "amount": 4,
            "icon": "minecraft:sticky_piston"
          },
          {
            "title": "Bloque de redstone x2",
            "item": "minecraft:redstone_block",
            "amount": 2,
            "icon": "minecraft:redstone_block"
          },
          {
            "title": "Observador x2",
            "item": "minecraft:observer",
            "amount": 2,
            "icon": "minecraft:observer"
          },
          {
            "title": "Bloque musical x4",
            "item": "minecraft:note_block",
            "amount": 4,
            "icon": "minecraft:note_block"
          },
          {
            "title": "Puertas de hierro x2",
            "item": "minecraft:iron_door",
            "amount": 2,
            "icon": "minecraft:iron_door"
          }
        ],
        "reward": {
          "title": "570 monedas",
          "amount": 570,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 25,
        "title": "DIA 25 - Arco del triunfo",
        "tasks": [
          {
            "title": "Andesita pulida x8",
            "item": "minecraft:polished_andesite",
            "amount": 8,
            "icon": "minecraft:polished_andesite"
          },
          {
            "title": "Piedra cincelada x4",
            "item": "minecraft:chiseled_stone_bricks",
            "amount": 4,
            "icon": "minecraft:chiseled_stone_bricks"
          },
          {
            "title": "Cuarzo liso x8",
            "item": "minecraft:smooth_quartz",
            "amount": 8,
            "icon": "minecraft:smooth_quartz"
          },
          {
            "title": "Piedra luminosa x4",
            "item": "minecraft:glowstone",
            "amount": 4,
            "icon": "minecraft:glowstone"
          },
          {
            "title": "Arenisca lisa x4",
            "item": "minecraft:smooth_sandstone",
            "amount": 4,
            "icon": "minecraft:smooth_sandstone"
          }
        ],
        "reward": {
          "title": "620 monedas",
          "amount": 620,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 26,
        "title": "DIA 26 - Fortaleza medieval",
        "tasks": [
          {
            "title": "Ladrillos de piedra x16",
            "item": "minecraft:stone_bricks",
            "amount": 16,
            "icon": "minecraft:stone_bricks"
          },
          {
            "title": "Piedra musgosa x8",
            "item": "minecraft:mossy_stone_bricks",
            "amount": 8,
            "icon": "minecraft:mossy_stone_bricks"
          },
          {
            "title": "Piedra agrietada x8",
            "item": "minecraft:cracked_stone_bricks",
            "amount": 8,
            "icon": "minecraft:cracked_stone_bricks"
          },
          {
            "title": "Almenas x8",
            "item": "minecraft:stone_brick_wall",
            "amount": 8,
            "icon": "minecraft:stone_brick_wall"
          },
          {
            "title": "Barrotes defensivos x8",
            "item": "minecraft:iron_bars",
            "amount": 8,
            "icon": "minecraft:iron_bars"
          }
        ],
        "reward": {
          "title": "690 monedas",
          "amount": 690,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 27,
        "title": "DIA 27 - Catedral de vitrales",
        "tasks": [
          {
            "title": "Vitral púrpura x8",
            "item": "minecraft:purple_stained_glass",
            "amount": 8,
            "icon": "minecraft:purple_stained_glass"
          },
          {
            "title": "Vitral magenta x4",
            "item": "minecraft:magenta_stained_glass",
            "amount": 4,
            "icon": "minecraft:magenta_stained_glass"
          },
          {
            "title": "Vitral azul x4",
            "item": "minecraft:blue_stained_glass",
            "amount": 4,
            "icon": "minecraft:blue_stained_glass"
          },
          {
            "title": "Vitral cian x4",
            "item": "minecraft:cyan_stained_glass",
            "amount": 4,
            "icon": "minecraft:cyan_stained_glass"
          },
          {
            "title": "Pilar de cuarzo x8",
            "item": "minecraft:quartz_pillar",
            "amount": 8,
            "icon": "minecraft:quartz_pillar"
          }
        ],
        "reward": {
          "title": "800 monedas",
          "amount": 800,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 28,
        "title": "DIA 28 - Villa moderna minimalista",
        "tasks": [
          {
            "title": "Bloque de cuarzo x8",
            "item": "minecraft:quartz_block",
            "amount": 8,
            "icon": "minecraft:quartz_block"
          },
          {
            "title": "Escaleras de cuarzo x8",
            "item": "minecraft:quartz_stairs",
            "amount": 8,
            "icon": "minecraft:quartz_stairs"
          },
          {
            "title": "Losas de cuarzo x8",
            "item": "minecraft:quartz_slab",
            "amount": 8,
            "icon": "minecraft:quartz_slab"
          },
          {
            "title": "Hormigón blanco x8",
            "item": "minecraft:white_concrete",
            "amount": 8,
            "icon": "minecraft:white_concrete"
          },
          {
            "title": "Vidrio opaco moderno x8",
            "item": "minecraft:tinted_glass",
            "amount": 8,
            "icon": "minecraft:tinted_glass"
          }
        ],
        "reward": {
          "title": "940 monedas",
          "amount": 940,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 29,
        "title": "DIA 29 - Fortaleza del Nether",
        "tasks": [
          {
            "title": "Ladrillos del Nether x16",
            "item": "minecraft:nether_bricks",
            "amount": 16,
            "icon": "minecraft:nether_bricks"
          },
          {
            "title": "Ladrillos rojos infernales x8",
            "item": "minecraft:red_nether_bricks",
            "amount": 8,
            "icon": "minecraft:red_nether_bricks"
          },
          {
            "title": "Escaleras infernales x8",
            "item": "minecraft:nether_brick_stairs",
            "amount": 8,
            "icon": "minecraft:nether_brick_stairs"
          },
          {
            "title": "Valla infernal x8",
            "item": "minecraft:nether_brick_fence",
            "amount": 8,
            "icon": "minecraft:nether_brick_fence"
          },
          {
            "title": "Luz de champiñón x4",
            "item": "minecraft:shroomlight",
            "amount": 4,
            "icon": "minecraft:shroomlight"
          }
        ],
        "reward": {
          "title": "1100 monedas",
          "amount": 1100,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 30,
        "title": "DIA 30 - Ciudadela del End",
        "tasks": [
          {
            "title": "Ladrillos de piedra del End x16",
            "item": "minecraft:end_stone_bricks",
            "amount": 16,
            "icon": "minecraft:end_stone_bricks"
          },
          {
            "title": "Bloque de purpur x8",
            "item": "minecraft:purpur_block",
            "amount": 8,
            "icon": "minecraft:purpur_block"
          },
          {
            "title": "Pilar de purpur x8",
            "item": "minecraft:purpur_pillar",
            "amount": 8,
            "icon": "minecraft:purpur_pillar"
          },
          {
            "title": "Escaleras de purpur x8",
            "item": "minecraft:purpur_stairs",
            "amount": 8,
            "icon": "minecraft:purpur_stairs"
          },
          {
            "title": "Varillas del End x8",
            "item": "minecraft:end_rod",
            "amount": 8,
            "icon": "minecraft:end_rod"
          }
        ],
        "reward": {
          "title": "1300 monedas",
          "amount": 1300,
          "icon": "saros__money_mod:euro_100"
        }
      }
    ]
  },
  {
    "id": "cocinero",
    "name": "Cocinero",
    "emoji": "🍳",
    "color": "#FF7043",
    "days": [
      {
        "day": 1,
        "title": "DIA 1 - Pinche: Primer horno",
        "tasks": [
          {
            "title": "Hornea pan x3",
            "item": "minecraft:bread",
            "amount": 3,
            "icon": "minecraft:bread"
          },
          {
            "title": "Hornea patatas x3",
            "item": "minecraft:baked_potato",
            "amount": 3,
            "icon": "minecraft:baked_potato"
          },
          {
            "title": "Cocina filetes x2",
            "item": "minecraft:cooked_beef",
            "amount": 2,
            "icon": "minecraft:cooked_beef"
          },
          {
            "title": "Consigue carbon x4",
            "item": "minecraft:coal",
            "amount": 4,
            "icon": "minecraft:coal"
          },
          {
            "title": "Fabrica un horno",
            "item": "minecraft:furnace",
            "amount": 1,
            "icon": "minecraft:furnace"
          }
        ],
        "reward": {
          "title": "65 monedas",
          "amount": 65,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 2,
        "title": "DIA 2 - Pinche: Recolección básica",
        "tasks": [
          {
            "title": "Cosecha trigo x6",
            "item": "minecraft:wheat",
            "amount": 6,
            "icon": "minecraft:wheat"
          },
          {
            "title": "Recolecta huevos x3",
            "item": "minecraft:egg",
            "amount": 3,
            "icon": "minecraft:egg"
          },
          {
            "title": "Ordeña vaca x1",
            "item": "minecraft:milk_bucket",
            "amount": 1,
            "icon": "minecraft:milk_bucket"
          },
          {
            "title": "Fabrica azucar x2",
            "item": "minecraft:sugar",
            "amount": 2,
            "icon": "minecraft:sugar"
          },
          {
            "title": "Cocina pollo x2",
            "item": "minecraft:cooked_chicken",
            "amount": 2,
            "icon": "minecraft:cooked_chicken"
          }
        ],
        "reward": {
          "title": "76 monedas",
          "amount": 76,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 3,
        "title": "DIA 3 - Pinche: Herramientas del oficio",
        "tasks": [
          {
            "title": "Fabrica cuchillo de pedernal x1",
            "item": "farmersdelight:flint_knife",
            "amount": 1,
            "icon": "farmersdelight:flint_knife"
          },
          {
            "title": "Fabrica tabla de cortar x1",
            "item": "farmersdelight:cutting_board",
            "amount": 1,
            "icon": "farmersdelight:cutting_board"
          },
          {
            "title": "Fabrica cuencos x3",
            "item": "minecraft:bowl",
            "amount": 3,
            "icon": "minecraft:bowl"
          },
          {
            "title": "Cocina chuletas x2",
            "item": "minecraft:cooked_porkchop",
            "amount": 2,
            "icon": "minecraft:cooked_porkchop"
          },
          {
            "title": "Cosecha zanahorias x4",
            "item": "minecraft:carrot",
            "amount": 4,
            "icon": "minecraft:carrot"
          }
        ],
        "reward": {
          "title": "87 monedas",
          "amount": 87,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 4,
        "title": "DIA 4 - Pinche: Sopas de campo",
        "tasks": [
          {
            "title": "Prepara estofado de champiñones x2",
            "item": "minecraft:mushroom_stew",
            "amount": 2,
            "icon": "minecraft:mushroom_stew"
          },
          {
            "title": "Prepara sopa de remolacha x1",
            "item": "minecraft:beetroot_soup",
            "amount": 1,
            "icon": "minecraft:beetroot_soup"
          },
          {
            "title": "Recolecta hongos marrones x3",
            "item": "minecraft:brown_mushroom",
            "amount": 3,
            "icon": "minecraft:brown_mushroom"
          },
          {
            "title": "Recolecta hongos rojos x3",
            "item": "minecraft:red_mushroom",
            "amount": 3,
            "icon": "minecraft:red_mushroom"
          },
          {
            "title": "Cosecha remolacha x6",
            "item": "minecraft:beetroot",
            "amount": 6,
            "icon": "minecraft:beetroot"
          }
        ],
        "reward": {
          "title": "98 monedas",
          "amount": 98,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 5,
        "title": "DIA 5 - Pinche: Cocina variada",
        "tasks": [
          {
            "title": "Cocina cordero x3",
            "item": "minecraft:cooked_mutton",
            "amount": 3,
            "icon": "minecraft:cooked_mutton"
          },
          {
            "title": "Cocina conejo x2",
            "item": "minecraft:cooked_rabbit",
            "amount": 2,
            "icon": "minecraft:cooked_rabbit"
          },
          {
            "title": "Cocina bacalao x3",
            "item": "minecraft:cooked_cod",
            "amount": 3,
            "icon": "minecraft:cooked_cod"
          },
          {
            "title": "Prepara estofado de conejo x1",
            "item": "minecraft:rabbit_stew",
            "amount": 1,
            "icon": "minecraft:rabbit_stew"
          },
          {
            "title": "Fabrica cocina FD x1",
            "item": "farmersdelight:stove",
            "amount": 1,
            "icon": "farmersdelight:stove"
          }
        ],
        "reward": {
          "title": "110 monedas",
          "amount": 110,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 6,
        "title": "DIA 6 - Cocinero: El huerto",
        "tasks": [
          {
            "title": "Cosecha repollo x4",
            "item": "farmersdelight:cabbage",
            "amount": 4,
            "icon": "farmersdelight:cabbage"
          },
          {
            "title": "Cosecha tomates x4",
            "item": "farmersdelight:tomato",
            "amount": 4,
            "icon": "farmersdelight:tomato"
          },
          {
            "title": "Cosecha cebollas x4",
            "item": "farmersdelight:onion",
            "amount": 4,
            "icon": "farmersdelight:onion"
          },
          {
            "title": "Cosecha espigas de arroz x2",
            "item": "farmersdelight:rice_panicle",
            "amount": 2,
            "icon": "farmersdelight:rice_panicle"
          },
          {
            "title": "Fabrica cuchillo de hierro x1",
            "item": "farmersdelight:iron_knife",
            "amount": 1,
            "icon": "farmersdelight:iron_knife"
          }
        ],
        "reward": {
          "title": "126 monedas",
          "amount": 126,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 7,
        "title": "DIA 7 - Cocinero: Preparación",
        "tasks": [
          {
            "title": "Procesa arroz x4",
            "item": "farmersdelight:rice",
            "amount": 4,
            "icon": "farmersdelight:rice"
          },
          {
            "title": "Recolecta paja x6",
            "item": "farmersdelight:straw",
            "amount": 6,
            "icon": "farmersdelight:straw"
          },
          {
            "title": "Fabrica cuerda x2",
            "item": "farmersdelight:rope",
            "amount": 2,
            "icon": "farmersdelight:rope"
          },
          {
            "title": "Fabrica olla de cocina x1",
            "item": "farmersdelight:cooking_pot",
            "amount": 1,
            "icon": "farmersdelight:cooking_pot"
          },
          {
            "title": "Cocina salmon x2",
            "item": "minecraft:cooked_salmon",
            "amount": 2,
            "icon": "minecraft:cooked_salmon"
          }
        ],
        "reward": {
          "title": "142 monedas",
          "amount": 142,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 8,
        "title": "DIA 8 - Cocinero: Sopas y caldos",
        "tasks": [
          {
            "title": "Prepara sopa de verduras x2",
            "item": "farmersdelight:vegetable_soup",
            "amount": 2,
            "icon": "farmersdelight:vegetable_soup"
          },
          {
            "title": "Prepara caldo de huesos x1",
            "item": "farmersdelight:bone_broth",
            "amount": 1,
            "icon": "farmersdelight:bone_broth"
          },
          {
            "title": "Consigue huesos x3",
            "item": "minecraft:bone",
            "amount": 3,
            "icon": "minecraft:bone"
          },
          {
            "title": "Prepara salsa de tomate x2",
            "item": "farmersdelight:tomato_sauce",
            "amount": 2,
            "icon": "farmersdelight:tomato_sauce"
          },
          {
            "title": "Fabrica compost x2",
            "item": "farmersdelight:organic_compost",
            "amount": 2,
            "icon": "farmersdelight:organic_compost"
          }
        ],
        "reward": {
          "title": "158 monedas",
          "amount": 158,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 9,
        "title": "DIA 9 - Cocinero: Arroces y sarten",
        "tasks": [
          {
            "title": "Prepara arroz frito x2",
            "item": "farmersdelight:fried_rice",
            "amount": 2,
            "icon": "farmersdelight:fried_rice"
          },
          {
            "title": "Prepara arroz con setas x1",
            "item": "farmersdelight:mushroom_rice",
            "amount": 1,
            "icon": "farmersdelight:mushroom_rice"
          },
          {
            "title": "Fabrica sarten x1",
            "item": "farmersdelight:skillet",
            "amount": 1,
            "icon": "farmersdelight:skillet"
          },
          {
            "title": "Frie huevos x2",
            "item": "farmersdelight:fried_egg",
            "amount": 2,
            "icon": "farmersdelight:fried_egg"
          },
          {
            "title": "Frie tocino x2",
            "item": "farmersdelight:bacon",
            "amount": 2,
            "icon": "farmersdelight:bacon"
          }
        ],
        "reward": {
          "title": "174 monedas",
          "amount": 174,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 10,
        "title": "DIA 10 - Cocinero: Ensaladas",
        "tasks": [
          {
            "title": "Prepara ensalada mixta x2",
            "item": "farmersdelight:mixed_salad",
            "amount": 2,
            "icon": "farmersdelight:mixed_salad"
          },
          {
            "title": "Prepara cebolla asada x2",
            "item": "farmersdelight:barbecued_onion",
            "amount": 2,
            "icon": "farmersdelight:barbecued_onion"
          },
          {
            "title": "Prepara sopa de calabaza x1",
            "item": "farmersdelight:pumpkin_soup",
            "amount": 1,
            "icon": "farmersdelight:pumpkin_soup"
          },
          {
            "title": "Cosecha calabazas x2",
            "item": "minecraft:pumpkin",
            "amount": 2,
            "icon": "minecraft:pumpkin"
          },
          {
            "title": "Prepara ensalada de frutas x1",
            "item": "farmersdelight:fruit_salad",
            "amount": 1,
            "icon": "farmersdelight:fruit_salad"
          }
        ],
        "reward": {
          "title": "190 monedas",
          "amount": 190,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 11,
        "title": "DIA 11 - Chef: Pastas artesanales",
        "tasks": [
          {
            "title": "Prepara pasta con albondigas x2",
            "item": "farmersdelight:pasta_with_meatballs",
            "amount": 2,
            "icon": "farmersdelight:pasta_with_meatballs"
          },
          {
            "title": "Prepara albondigas x2",
            "item": "farmersdelight:meatballs",
            "amount": 2,
            "icon": "farmersdelight:meatballs"
          },
          {
            "title": "Prepara pasta con tinta de calamar x1",
            "item": "farmersdelight:squid_ink_pasta",
            "amount": 1,
            "icon": "farmersdelight:squid_ink_pasta"
          },
          {
            "title": "Consigue tinta de calamar x2",
            "item": "minecraft:ink_sac",
            "amount": 2,
            "icon": "minecraft:ink_sac"
          },
          {
            "title": "Prepara ratatouille x1",
            "item": "farmersdelight:ratatouille",
            "amount": 1,
            "icon": "farmersdelight:ratatouille"
          }
        ],
        "reward": {
          "title": "210 monedas",
          "amount": 210,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 12,
        "title": "DIA 12 - Chef: Pescados nobles",
        "tasks": [
          {
            "title": "Prepara estofado de bacalao x2",
            "item": "farmersdelight:baked_cod_stew",
            "amount": 2,
            "icon": "farmersdelight:baked_cod_stew"
          },
          {
            "title": "Prepara salmon a la parrilla x2",
            "item": "farmersdelight:grilled_salmon",
            "amount": 2,
            "icon": "farmersdelight:grilled_salmon"
          },
          {
            "title": "Filetea bacalao x2",
            "item": "farmersdelight:cod_slice",
            "amount": 2,
            "icon": "farmersdelight:cod_slice"
          },
          {
            "title": "Filetea salmon x2",
            "item": "farmersdelight:salmon_slice",
            "amount": 2,
            "icon": "farmersdelight:salmon_slice"
          },
          {
            "title": "Fabrica cuchillo de diamante x1",
            "item": "farmersdelight:diamond_knife",
            "amount": 1,
            "icon": "farmersdelight:diamond_knife"
          }
        ],
        "reward": {
          "title": "230 monedas",
          "amount": 230,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 13,
        "title": "DIA 13 - Chef: Repostería",
        "tasks": [
          {
            "title": "Hornea tarta x1",
            "item": "minecraft:cake",
            "amount": 1,
            "icon": "minecraft:cake"
          },
          {
            "title": "Hornea galletas x8",
            "item": "minecraft:cookie",
            "amount": 8,
            "icon": "minecraft:cookie"
          },
          {
            "title": "Hornea pastel de calabaza x2",
            "item": "minecraft:pumpkin_pie",
            "amount": 2,
            "icon": "minecraft:pumpkin_pie"
          },
          {
            "title": "Hornea tarta de manzana x1",
            "item": "farmersdelight:apple_pie",
            "amount": 1,
            "icon": "farmersdelight:apple_pie"
          },
          {
            "title": "Recolecta miel x2",
            "item": "minecraft:honey_bottle",
            "amount": 2,
            "icon": "minecraft:honey_bottle"
          }
        ],
        "reward": {
          "title": "250 monedas",
          "amount": 250,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 14,
        "title": "DIA 14 - Chef: Bebidas",
        "tasks": [
          {
            "title": "Prepara chocolate caliente x3",
            "item": "farmersdelight:hot_cocoa",
            "amount": 3,
            "icon": "farmersdelight:hot_cocoa"
          },
          {
            "title": "Prepara sidra de manzana x2",
            "item": "farmersdelight:apple_cider",
            "amount": 2,
            "icon": "farmersdelight:apple_cider"
          },
          {
            "title": "Cosecha manzanas x6",
            "item": "minecraft:apple",
            "amount": 6,
            "icon": "minecraft:apple"
          },
          {
            "title": "Cosecha cacao x4",
            "item": "minecraft:cocoa_beans",
            "amount": 4,
            "icon": "minecraft:cocoa_beans"
          },
          {
            "title": "Prepara jugo de melon x2",
            "item": "farmersdelight:melon_juice",
            "amount": 2,
            "icon": "farmersdelight:melon_juice"
          }
        ],
        "reward": {
          "title": "275 monedas",
          "amount": 275,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 15,
        "title": "DIA 15 - Chef: Platos festivos",
        "tasks": [
          {
            "title": "Prepara pollo asado festivo x1",
            "item": "farmersdelight:roast_chicken",
            "amount": 1,
            "icon": "farmersdelight:roast_chicken"
          },
          {
            "title": "Prepara calabaza rellena x1",
            "item": "farmersdelight:stuffed_pumpkin",
            "amount": 1,
            "icon": "farmersdelight:stuffed_pumpkin"
          },
          {
            "title": "Prepara jamon glaseado x1",
            "item": "farmersdelight:honey_glazed_ham",
            "amount": 1,
            "icon": "farmersdelight:honey_glazed_ham"
          },
          {
            "title": "Prepara pastel de pastor x1",
            "item": "farmersdelight:shepherd_pie",
            "amount": 1,
            "icon": "farmersdelight:shepherd_pie"
          },
          {
            "title": "Fabrica lienzo x2",
            "item": "farmersdelight:canvas",
            "amount": 2,
            "icon": "farmersdelight:canvas"
          }
        ],
        "reward": {
          "title": "300 monedas",
          "amount": 300,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 16,
        "title": "DIA 16 - Sous: Quesos y patatas",
        "tasks": [
          {
            "title": "Fabrica queso x2",
            "item": "expandeddelight:cheese",
            "amount": 2,
            "icon": "expandeddelight:cheese"
          },
          {
            "title": "Ordeña vacas x3",
            "item": "minecraft:milk_bucket",
            "amount": 3,
            "icon": "minecraft:milk_bucket"
          },
          {
            "title": "Prepara papas rellenas x2",
            "item": "farmersdelight:stuffed_potato",
            "amount": 2,
            "icon": "farmersdelight:stuffed_potato"
          },
          {
            "title": "Prepara filete con papas x1",
            "item": "farmersdelight:steak_and_potatoes",
            "amount": 1,
            "icon": "farmersdelight:steak_and_potatoes"
          },
          {
            "title": "Fabrica tierra fertil x4",
            "item": "farmersdelight:rich_soil",
            "amount": 4,
            "icon": "farmersdelight:rich_soil"
          }
        ],
        "reward": {
          "title": "326 monedas",
          "amount": 326,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 17,
        "title": "DIA 17 - Sous: Dulces FD",
        "tasks": [
          {
            "title": "Prepara tarta de queso con bayas x1",
            "item": "farmersdelight:sweet_berry_cheesecake",
            "amount": 1,
            "icon": "farmersdelight:sweet_berry_cheesecake"
          },
          {
            "title": "Prepara pastel de chocolate x1",
            "item": "farmersdelight:chocolate_pie",
            "amount": 1,
            "icon": "farmersdelight:chocolate_pie"
          },
          {
            "title": "Prepara paleta de melon x2",
            "item": "farmersdelight:melon_popsicle",
            "amount": 2,
            "icon": "farmersdelight:melon_popsicle"
          },
          {
            "title": "Prepara natillas de bayas luminosas x1",
            "item": "farmersdelight:glow_berry_custard",
            "amount": 1,
            "icon": "farmersdelight:glow_berry_custard"
          },
          {
            "title": "Recolecta bayas luminosas x4",
            "item": "minecraft:glow_berries",
            "amount": 4,
            "icon": "minecraft:glow_berries"
          }
        ],
        "reward": {
          "title": "352 monedas",
          "amount": 352,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 18,
        "title": "DIA 18 - Sous: Untables",
        "tasks": [
          {
            "title": "Fabrica mantequilla de mani x2",
            "item": "expandeddelight:peanut_butter",
            "amount": 2,
            "icon": "expandeddelight:peanut_butter"
          },
          {
            "title": "Fabrica mermelada de bayas x2",
            "item": "expandeddelight:sweet_berry_jam",
            "amount": 2,
            "icon": "expandeddelight:sweet_berry_jam"
          },
          {
            "title": "Recolecta bayas dulces x4",
            "item": "minecraft:sweet_berries",
            "amount": 4,
            "icon": "minecraft:sweet_berries"
          },
          {
            "title": "Recolecta corteza de arbol x2",
            "item": "farmersdelight:tree_bark",
            "amount": 2,
            "icon": "farmersdelight:tree_bark"
          },
          {
            "title": "Fabrica cuchillo de netherita x1",
            "item": "farmersdelight:netherite_knife",
            "amount": 1,
            "icon": "farmersdelight:netherite_knife"
          }
        ],
        "reward": {
          "title": "378 monedas",
          "amount": 378,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 19,
        "title": "DIA 19 - Sous: Ingredientes exóticos",
        "tasks": [
          {
            "title": "Recolecta cocos x3",
            "item": "ecologics:coconut",
            "amount": 3,
            "icon": "ecologics:coconut"
          },
          {
            "title": "Recolecta nueces x3",
            "item": "ecologics:walnut",
            "amount": 3,
            "icon": "ecologics:walnut"
          },
          {
            "title": "Procesa arroz x8",
            "item": "farmersdelight:rice",
            "amount": 8,
            "icon": "farmersdelight:rice"
          },
          {
            "title": "Prepara salmon a la parrilla x3",
            "item": "farmersdelight:grilled_salmon",
            "amount": 3,
            "icon": "farmersdelight:grilled_salmon"
          },
          {
            "title": "Prepara arroz con setas x2",
            "item": "farmersdelight:mushroom_rice",
            "amount": 2,
            "icon": "farmersdelight:mushroom_rice"
          }
        ],
        "reward": {
          "title": "404 monedas",
          "amount": 404,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 20,
        "title": "DIA 20 - Sous: Cocina mediterránea",
        "tasks": [
          {
            "title": "Prepara ratatouille x2",
            "item": "farmersdelight:ratatouille",
            "amount": 2,
            "icon": "farmersdelight:ratatouille"
          },
          {
            "title": "Prepara pasta con albondigas x2",
            "item": "farmersdelight:pasta_with_meatballs",
            "amount": 2,
            "icon": "farmersdelight:pasta_with_meatballs"
          },
          {
            "title": "Prepara ensalada mixta x3",
            "item": "farmersdelight:mixed_salad",
            "amount": 3,
            "icon": "farmersdelight:mixed_salad"
          },
          {
            "title": "Prepara jugo de manzana x2",
            "item": "expandeddelight:apple_juice",
            "amount": 2,
            "icon": "expandeddelight:apple_juice"
          },
          {
            "title": "Prepara pasta con tinta de calamar x2",
            "item": "farmersdelight:squid_ink_pasta",
            "amount": 2,
            "icon": "farmersdelight:squid_ink_pasta"
          }
        ],
        "reward": {
          "title": "430 monedas",
          "amount": 430,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 21,
        "title": "DIA 21 - Ejecutivo: Barra de bebidas",
        "tasks": [
          {
            "title": "Prepara smoothie de bayas x2",
            "item": "expandeddelight:berry_smoothie",
            "amount": 2,
            "icon": "expandeddelight:berry_smoothie"
          },
          {
            "title": "Prepara jugo de melon x2",
            "item": "expandeddelight:melon_juice",
            "amount": 2,
            "icon": "expandeddelight:melon_juice"
          },
          {
            "title": "Prepara jugo de bayas x2",
            "item": "expandeddelight:sweet_berry_juice",
            "amount": 2,
            "icon": "expandeddelight:sweet_berry_juice"
          },
          {
            "title": "Prepara chocolate caliente x4",
            "item": "farmersdelight:hot_cocoa",
            "amount": 4,
            "icon": "farmersdelight:hot_cocoa"
          },
          {
            "title": "Fabrica mas ollas x2",
            "item": "farmersdelight:cooking_pot",
            "amount": 2,
            "icon": "farmersdelight:cooking_pot"
          }
        ],
        "reward": {
          "title": "468 monedas",
          "amount": 468,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 22,
        "title": "DIA 22 - Ejecutivo: Cocina profesional",
        "tasks": [
          {
            "title": "Fabrica cocinas profesionales x3",
            "item": "farmersdelight:stove",
            "amount": 3,
            "icon": "farmersdelight:stove"
          },
          {
            "title": "Fabrica sartenes x2",
            "item": "farmersdelight:skillet",
            "amount": 2,
            "icon": "farmersdelight:skillet"
          },
          {
            "title": "Fabrica tablas de cortar x2",
            "item": "farmersdelight:cutting_board",
            "amount": 2,
            "icon": "farmersdelight:cutting_board"
          },
          {
            "title": "Fabrica cuchillos de diamante x2",
            "item": "farmersdelight:diamond_knife",
            "amount": 2,
            "icon": "farmersdelight:diamond_knife"
          },
          {
            "title": "Fabrica compost x4",
            "item": "farmersdelight:organic_compost",
            "amount": 4,
            "icon": "farmersdelight:organic_compost"
          }
        ],
        "reward": {
          "title": "506 monedas",
          "amount": 506,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 23,
        "title": "DIA 23 - Ejecutivo: Banquete de carnes",
        "tasks": [
          {
            "title": "Prepara pollo asado festivo x2",
            "item": "farmersdelight:roast_chicken",
            "amount": 2,
            "icon": "farmersdelight:roast_chicken"
          },
          {
            "title": "Prepara jamon glaseado x2",
            "item": "farmersdelight:honey_glazed_ham",
            "amount": 2,
            "icon": "farmersdelight:honey_glazed_ham"
          },
          {
            "title": "Prepara filete con papas x2",
            "item": "farmersdelight:steak_and_potatoes",
            "amount": 2,
            "icon": "farmersdelight:steak_and_potatoes"
          },
          {
            "title": "Frie tocino x4",
            "item": "farmersdelight:bacon",
            "amount": 4,
            "icon": "farmersdelight:bacon"
          },
          {
            "title": "Frie huevos x4",
            "item": "farmersdelight:fried_egg",
            "amount": 4,
            "icon": "farmersdelight:fried_egg"
          }
        ],
        "reward": {
          "title": "544 monedas",
          "amount": 544,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 24,
        "title": "DIA 24 - Ejecutivo: Maridajes",
        "tasks": [
          {
            "title": "Prepara salmon a la parrilla x3",
            "item": "farmersdelight:grilled_salmon",
            "amount": 3,
            "icon": "farmersdelight:grilled_salmon"
          },
          {
            "title": "Prepara sidra de manzana x3",
            "item": "farmersdelight:apple_cider",
            "amount": 3,
            "icon": "farmersdelight:apple_cider"
          },
          {
            "title": "Fabrica queso x3",
            "item": "expandeddelight:cheese",
            "amount": 3,
            "icon": "expandeddelight:cheese"
          },
          {
            "title": "Fabrica marcos para presentacion x4",
            "item": "minecraft:item_frame",
            "amount": 4,
            "icon": "minecraft:item_frame"
          },
          {
            "title": "Prepara ensalada de frutas x3",
            "item": "farmersdelight:fruit_salad",
            "amount": 3,
            "icon": "farmersdelight:fruit_salad"
          }
        ],
        "reward": {
          "title": "582 monedas",
          "amount": 582,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 25,
        "title": "DIA 25 - Ejecutivo: Repostería maestra",
        "tasks": [
          {
            "title": "Prepara tarta de queso con bayas x2",
            "item": "farmersdelight:sweet_berry_cheesecake",
            "amount": 2,
            "icon": "farmersdelight:sweet_berry_cheesecake"
          },
          {
            "title": "Hornea tarta de manzana x2",
            "item": "farmersdelight:apple_pie",
            "amount": 2,
            "icon": "farmersdelight:apple_pie"
          },
          {
            "title": "Prepara pastel de chocolate x2",
            "item": "farmersdelight:chocolate_pie",
            "amount": 2,
            "icon": "farmersdelight:chocolate_pie"
          },
          {
            "title": "Prepara natillas de bayas x2",
            "item": "farmersdelight:glow_berry_custard",
            "amount": 2,
            "icon": "farmersdelight:glow_berry_custard"
          },
          {
            "title": "Hornea tartas x2",
            "item": "minecraft:cake",
            "amount": 2,
            "icon": "minecraft:cake"
          }
        ],
        "reward": {
          "title": "620 monedas",
          "amount": 620,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 26,
        "title": "DIA 26 - Estrella: Pasta suprema",
        "tasks": [
          {
            "title": "Prepara pasta con albondigas x3",
            "item": "farmersdelight:pasta_with_meatballs",
            "amount": 3,
            "icon": "farmersdelight:pasta_with_meatballs"
          },
          {
            "title": "Prepara pasta con tinta de calamar x3",
            "item": "farmersdelight:squid_ink_pasta",
            "amount": 3,
            "icon": "farmersdelight:squid_ink_pasta"
          },
          {
            "title": "Prepara albondigas x4",
            "item": "farmersdelight:meatballs",
            "amount": 4,
            "icon": "farmersdelight:meatballs"
          },
          {
            "title": "Prepara salsa de tomate x4",
            "item": "farmersdelight:tomato_sauce",
            "amount": 4,
            "icon": "farmersdelight:tomato_sauce"
          },
          {
            "title": "Fabrica queso x4",
            "item": "expandeddelight:cheese",
            "amount": 4,
            "icon": "expandeddelight:cheese"
          }
        ],
        "reward": {
          "title": "730 monedas",
          "amount": 730,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 27,
        "title": "DIA 27 - Estrella: Menú degustación",
        "tasks": [
          {
            "title": "Prepara pastel de pastor x2",
            "item": "farmersdelight:shepherd_pie",
            "amount": 2,
            "icon": "farmersdelight:shepherd_pie"
          },
          {
            "title": "Prepara calabaza rellena x2",
            "item": "farmersdelight:stuffed_pumpkin",
            "amount": 2,
            "icon": "farmersdelight:stuffed_pumpkin"
          },
          {
            "title": "Prepara estofado de bacalao x2",
            "item": "farmersdelight:baked_cod_stew",
            "amount": 2,
            "icon": "farmersdelight:baked_cod_stew"
          },
          {
            "title": "Prepara ensalada mixta x4",
            "item": "farmersdelight:mixed_salad",
            "amount": 4,
            "icon": "farmersdelight:mixed_salad"
          },
          {
            "title": "Prepara smoothie de bayas x3",
            "item": "expandeddelight:berry_smoothie",
            "amount": 3,
            "icon": "expandeddelight:berry_smoothie"
          }
        ],
        "reward": {
          "title": "840 monedas",
          "amount": 840,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 28,
        "title": "DIA 28 - Estrella: Cocina latinoamericana",
        "tasks": [
          {
            "title": "Recolecta cocos x5",
            "item": "ecologics:coconut",
            "amount": 5,
            "icon": "ecologics:coconut"
          },
          {
            "title": "Recolecta nueces x4",
            "item": "ecologics:walnut",
            "amount": 4,
            "icon": "ecologics:walnut"
          },
          {
            "title": "Procesa arroz x12",
            "item": "farmersdelight:rice",
            "amount": 12,
            "icon": "farmersdelight:rice"
          },
          {
            "title": "Prepara salsa de tomate x5",
            "item": "farmersdelight:tomato_sauce",
            "amount": 5,
            "icon": "farmersdelight:tomato_sauce"
          },
          {
            "title": "Prepara papas rellenas x4",
            "item": "farmersdelight:stuffed_potato",
            "amount": 4,
            "icon": "farmersdelight:stuffed_potato"
          }
        ],
        "reward": {
          "title": "950 monedas",
          "amount": 950,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 29,
        "title": "DIA 29 - Estrella: El gran banquete",
        "tasks": [
          {
            "title": "Prepara pollo asado festivo x3",
            "item": "farmersdelight:roast_chicken",
            "amount": 3,
            "icon": "farmersdelight:roast_chicken"
          },
          {
            "title": "Prepara jamon glaseado x3",
            "item": "farmersdelight:honey_glazed_ham",
            "amount": 3,
            "icon": "farmersdelight:honey_glazed_ham"
          },
          {
            "title": "Prepara filete con papas x3",
            "item": "farmersdelight:steak_and_potatoes",
            "amount": 3,
            "icon": "farmersdelight:steak_and_potatoes"
          },
          {
            "title": "Prepara ensalada de frutas x4",
            "item": "farmersdelight:fruit_salad",
            "amount": 4,
            "icon": "farmersdelight:fruit_salad"
          },
          {
            "title": "Prepara jugo de manzana x4",
            "item": "expandeddelight:apple_juice",
            "amount": 4,
            "icon": "expandeddelight:apple_juice"
          }
        ],
        "reward": {
          "title": "1100 monedas",
          "amount": 1100,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 30,
        "title": "DIA 30 - Estrella: Leyenda culinaria",
        "tasks": [
          {
            "title": "Prepara ratatouille suprema x4",
            "item": "farmersdelight:ratatouille",
            "amount": 4,
            "icon": "farmersdelight:ratatouille"
          },
          {
            "title": "Prepara tarta de queso suprema x3",
            "item": "farmersdelight:sweet_berry_cheesecake",
            "amount": 3,
            "icon": "farmersdelight:sweet_berry_cheesecake"
          },
          {
            "title": "Prepara pasta suprema x4",
            "item": "farmersdelight:pasta_with_meatballs",
            "amount": 4,
            "icon": "farmersdelight:pasta_with_meatballs"
          },
          {
            "title": "Prepara smoothie supremo x4",
            "item": "expandeddelight:berry_smoothie",
            "amount": 4,
            "icon": "expandeddelight:berry_smoothie"
          },
          {
            "title": "Fabrica queso supremo x5",
            "item": "expandeddelight:cheese",
            "amount": 5,
            "icon": "expandeddelight:cheese"
          }
        ],
        "reward": {
          "title": "1300 monedas",
          "amount": 1300,
          "icon": "saros__money_mod:euro_100"
        }
      }
    ]
  },
  {
    "id": "explorador",
    "name": "Explorador",
    "emoji": "🗺️",
    "color": "#42A5F5",
    "days": [
      {
        "day": 1,
        "title": "DÍA 1 - Trotamundos principiante",
        "tasks": [
          {
            "title": "Craftea antorchas x2",
            "item": "minecraft:torch",
            "amount": 2,
            "icon": "minecraft:torch"
          },
          {
            "title": "Fabrica bote de roble x2",
            "item": "minecraft:oak_boat",
            "amount": 2,
            "icon": "minecraft:oak_boat"
          },
          {
            "title": "Consigue brújula x1",
            "item": "minecraft:compass",
            "amount": 1,
            "icon": "minecraft:compass"
          },
          {
            "title": "Crea mapa x1",
            "item": "minecraft:map",
            "amount": 1,
            "icon": "minecraft:map"
          },
          {
            "title": "Pan para el viaje x1",
            "item": "minecraft:bread",
            "amount": 1,
            "icon": "minecraft:bread"
          }
        ],
        "reward": {
          "title": "65 monedas",
          "amount": 65,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 2,
        "title": "DÍA 2 - Navegante de ríos",
        "tasks": [
          {
            "title": "Fabrica bote de abeto x1",
            "item": "minecraft:spruce_boat",
            "amount": 1,
            "icon": "minecraft:spruce_boat"
          },
          {
            "title": "Recolecta caña de azúcar x3",
            "item": "minecraft:sugar_cane",
            "amount": 3,
            "icon": "minecraft:sugar_cane"
          },
          {
            "title": "Excava arcilla del río x4",
            "item": "minecraft:clay_ball",
            "amount": 4,
            "icon": "minecraft:clay_ball"
          },
          {
            "title": "Pesca salmón x2",
            "item": "minecraft:salmon",
            "amount": 2,
            "icon": "minecraft:salmon"
          },
          {
            "title": "Recoge nenúfares x3",
            "item": "minecraft:lily_pad",
            "amount": 3,
            "icon": "minecraft:lily_pad"
          }
        ],
        "reward": {
          "title": "75 monedas",
          "amount": 75,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 3,
        "title": "DÍA 3 - Descubridor de aldeas",
        "tasks": [
          {
            "title": "Recolecta semillas de trigo x4",
            "item": "minecraft:wheat_seeds",
            "amount": 4,
            "icon": "minecraft:wheat_seeds"
          },
          {
            "title": "Consigue cuero x3",
            "item": "minecraft:leather",
            "amount": 3,
            "icon": "minecraft:leather"
          },
          {
            "title": "Esquila ovejas blancas x4",
            "item": "minecraft:white_wool",
            "amount": 4,
            "icon": "minecraft:white_wool"
          },
          {
            "title": "Encuentra campana de aldea x1",
            "item": "minecraft:bell",
            "amount": 1,
            "icon": "minecraft:bell"
          },
          {
            "title": "Planta robles jóvenes x4",
            "item": "minecraft:oak_sapling",
            "amount": 4,
            "icon": "minecraft:oak_sapling"
          }
        ],
        "reward": {
          "title": "85 monedas",
          "amount": 85,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 4,
        "title": "DÍA 4 - Guardabosques",
        "tasks": [
          {
            "title": "Tala roble x5",
            "item": "minecraft:oak_log",
            "amount": 5,
            "icon": "minecraft:oak_log"
          },
          {
            "title": "Tala abedul x5",
            "item": "minecraft:birch_log",
            "amount": 5,
            "icon": "minecraft:birch_log"
          },
          {
            "title": "Tala abeto x5",
            "item": "minecraft:spruce_log",
            "amount": 5,
            "icon": "minecraft:spruce_log"
          },
          {
            "title": "Recolecta manzanas x3",
            "item": "minecraft:apple",
            "amount": 3,
            "icon": "minecraft:apple"
          },
          {
            "title": "Cosecha bayas dulces x6",
            "item": "minecraft:sweet_berries",
            "amount": 6,
            "icon": "minecraft:sweet_berries"
          }
        ],
        "reward": {
          "title": "95 monedas",
          "amount": 95,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 5,
        "title": "DÍA 5 - Montañista audaz",
        "tasks": [
          {
            "title": "Fabrica pico de piedra x1",
            "item": "minecraft:stone_pickaxe",
            "amount": 1,
            "icon": "minecraft:stone_pickaxe"
          },
          {
            "title": "Mina carbón de montaña x6",
            "item": "minecraft:coal",
            "amount": 6,
            "icon": "minecraft:coal"
          },
          {
            "title": "Extrae hierro de altura x4",
            "item": "minecraft:raw_iron",
            "amount": 4,
            "icon": "minecraft:raw_iron"
          },
          {
            "title": "Craftea escaleras x8",
            "item": "minecraft:ladder",
            "amount": 8,
            "icon": "minecraft:ladder"
          },
          {
            "title": "Consigue cuerno de cabra x1",
            "item": "minecraft:goat_horn",
            "amount": 1,
            "icon": "minecraft:goat_horn"
          }
        ],
        "reward": {
          "title": "110 monedas",
          "amount": 110,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 6,
        "title": "DÍA 6 - Descenso a las profundidades",
        "tasks": [
          {
            "title": "Fabrica pico de hierro x1",
            "item": "minecraft:iron_pickaxe",
            "amount": 1,
            "icon": "minecraft:iron_pickaxe"
          },
          {
            "title": "Mina hierro en cuevas x5",
            "item": "minecraft:raw_iron",
            "amount": 5,
            "icon": "minecraft:raw_iron"
          },
          {
            "title": "Craftea 32 antorchas",
            "item": "minecraft:torch",
            "amount": 32,
            "icon": "minecraft:torch"
          },
          {
            "title": "Fabrica espada de piedra x1",
            "item": "minecraft:stone_sword",
            "amount": 1,
            "icon": "minecraft:stone_sword"
          },
          {
            "title": "Cocina carne para la mina x4",
            "item": "minecraft:cooked_beef",
            "amount": 4,
            "icon": "minecraft:cooked_beef"
          }
        ],
        "reward": {
          "title": "125 monedas",
          "amount": 125,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 7,
        "title": "DÍA 7 - Mina abandonada",
        "tasks": [
          {
            "title": "Encuentra vagoneta x1",
            "item": "minecraft:minecart",
            "amount": 1,
            "icon": "minecraft:minecart"
          },
          {
            "title": "Recolecta raíles x16",
            "item": "minecraft:rail",
            "amount": 16,
            "icon": "minecraft:rail"
          },
          {
            "title": "Corta telarañas x3",
            "item": "minecraft:cobweb",
            "amount": 3,
            "icon": "minecraft:cobweb"
          },
          {
            "title": "Hilo de las profundidades x5",
            "item": "minecraft:string",
            "amount": 5,
            "icon": "minecraft:string"
          },
          {
            "title": "Fabrica linternas x2",
            "item": "minecraft:lantern",
            "amount": 2,
            "icon": "minecraft:lantern"
          }
        ],
        "reward": {
          "title": "140 monedas",
          "amount": 140,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 8,
        "title": "DÍA 8 - Corazón de la tierra",
        "tasks": [
          {
            "title": "¡Encuentra un diamante! x1",
            "item": "minecraft:diamond",
            "amount": 1,
            "icon": "minecraft:diamond"
          },
          {
            "title": "Recolecta redstone x8",
            "item": "minecraft:redstone",
            "amount": 8,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Mina lapislázuli x4",
            "item": "minecraft:lapis_lazuli",
            "amount": 4,
            "icon": "minecraft:lapis_lazuli"
          },
          {
            "title": "Funde oro x2",
            "item": "minecraft:gold_ingot",
            "amount": 2,
            "icon": "minecraft:gold_ingot"
          },
          {
            "title": "Extrae obsidiana x2",
            "item": "minecraft:obsidian",
            "amount": 2,
            "icon": "minecraft:obsidian"
          }
        ],
        "reward": {
          "title": "155 monedas",
          "amount": 155,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 9,
        "title": "DÍA 9 - Mazmorra hostil",
        "tasks": [
          {
            "title": "Derrota zombis x5",
            "item": "minecraft:rotten_flesh",
            "amount": 5,
            "icon": "minecraft:rotten_flesh"
          },
          {
            "title": "Derrota esqueletos x5",
            "item": "minecraft:bone",
            "amount": 5,
            "icon": "minecraft:bone"
          },
          {
            "title": "Derrota creepers x3",
            "item": "minecraft:gunpowder",
            "amount": 3,
            "icon": "minecraft:gunpowder"
          },
          {
            "title": "Derrota arañas x3",
            "item": "minecraft:spider_eye",
            "amount": 3,
            "icon": "minecraft:spider_eye"
          },
          {
            "title": "Encuentra disco de música x1",
            "item": "minecraft:music_disc_13",
            "amount": 1,
            "icon": "minecraft:music_disc_13"
          }
        ],
        "reward": {
          "title": "170 monedas",
          "amount": 170,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 10,
        "title": "DÍA 10 - Geoda y tesoros",
        "tasks": [
          {
            "title": "Consigue esmeraldas x3",
            "item": "minecraft:emerald",
            "amount": 3,
            "icon": "minecraft:emerald"
          },
          {
            "title": "Encuentra etiqueta x1",
            "item": "minecraft:name_tag",
            "amount": 1,
            "icon": "minecraft:name_tag"
          },
          {
            "title": "Encuentra montura x1",
            "item": "minecraft:saddle",
            "amount": 1,
            "icon": "minecraft:saddle"
          },
          {
            "title": "Encuentra manzana dorada x1",
            "item": "minecraft:golden_apple",
            "amount": 1,
            "icon": "minecraft:golden_apple"
          },
          {
            "title": "Cosecha geoda de amatista x4",
            "item": "minecraft:amethyst_shard",
            "amount": 4,
            "icon": "minecraft:amethyst_shard"
          }
        ],
        "reward": {
          "title": "190 monedas",
          "amount": 190,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 11,
        "title": "DÍA 11 - Monumento oceánico",
        "tasks": [
          {
            "title": "Recolecta fragmento prismarino x5",
            "item": "minecraft:prismarine_shard",
            "amount": 5,
            "icon": "minecraft:prismarine_shard"
          },
          {
            "title": "Recolecta cristal prismarino x3",
            "item": "minecraft:prismarine_crystals",
            "amount": 3,
            "icon": "minecraft:prismarine_crystals"
          },
          {
            "title": "Rompe linterna marina x2",
            "item": "minecraft:sea_lantern",
            "amount": 2,
            "icon": "minecraft:sea_lantern"
          },
          {
            "title": "Recolecta esponja x2",
            "item": "minecraft:sponge",
            "amount": 2,
            "icon": "minecraft:sponge"
          },
          {
            "title": "Encuentra corazón del mar x1",
            "item": "minecraft:heart_of_the_sea",
            "amount": 1,
            "icon": "minecraft:heart_of_the_sea"
          }
        ],
        "reward": {
          "title": "210 monedas",
          "amount": 210,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 12,
        "title": "DÍA 12 - Naufragio y tesoro enterrado",
        "tasks": [
          {
            "title": "Lingotes del naufragio x4",
            "item": "minecraft:iron_ingot",
            "amount": 4,
            "icon": "minecraft:iron_ingot"
          },
          {
            "title": "Esmeraldas del cofre x3",
            "item": "minecraft:emerald",
            "amount": 3,
            "icon": "minecraft:emerald"
          },
          {
            "title": "Papel del naufragio x5",
            "item": "minecraft:paper",
            "amount": 5,
            "icon": "minecraft:paper"
          },
          {
            "title": "Plumas del cofre x4",
            "item": "minecraft:feather",
            "amount": 4,
            "icon": "minecraft:feather"
          },
          {
            "title": "Desentierra mapa de tesoro x1",
            "item": "minecraft:filled_map",
            "amount": 1,
            "icon": "minecraft:filled_map"
          }
        ],
        "reward": {
          "title": "230 monedas",
          "amount": 230,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 13,
        "title": "DÍA 13 - Tumba del desierto",
        "tasks": [
          {
            "title": "Arena del desierto x16",
            "item": "minecraft:sand",
            "amount": 16,
            "icon": "minecraft:sand"
          },
          {
            "title": "Arenisca del templo x8",
            "item": "minecraft:sandstone",
            "amount": 8,
            "icon": "minecraft:sandstone"
          },
          {
            "title": "TNT de la cámara oculta x2",
            "item": "minecraft:tnt",
            "amount": 2,
            "icon": "minecraft:tnt"
          },
          {
            "title": "Manzana dorada del sarcófago x1",
            "item": "minecraft:golden_apple",
            "amount": 1,
            "icon": "minecraft:golden_apple"
          },
          {
            "title": "Huesos de la tumba x8",
            "item": "minecraft:bone",
            "amount": 8,
            "icon": "minecraft:bone"
          }
        ],
        "reward": {
          "title": "255 monedas",
          "amount": 255,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 14,
        "title": "DÍA 14 - Templo de la jungla",
        "tasks": [
          {
            "title": "Corta bambú x8",
            "item": "minecraft:bamboo",
            "amount": 8,
            "icon": "minecraft:bamboo"
          },
          {
            "title": "Cosecha cacao x4",
            "item": "minecraft:cocoa_beans",
            "amount": 4,
            "icon": "minecraft:cocoa_beans"
          },
          {
            "title": "Recolecta melón x8",
            "item": "minecraft:melon_slice",
            "amount": 8,
            "icon": "minecraft:melon_slice"
          },
          {
            "title": "Fabrica bote de jungla x1",
            "item": "minecraft:jungle_boat",
            "amount": 1,
            "icon": "minecraft:jungle_boat"
          },
          {
            "title": "Esmeraldas del templo x3",
            "item": "minecraft:emerald",
            "amount": 3,
            "icon": "minecraft:emerald"
          }
        ],
        "reward": {
          "title": "280 monedas",
          "amount": 280,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 15,
        "title": "DÍA 15 - Ruinas arqueológicas",
        "tasks": [
          {
            "title": "Fabrica pincel arqueológico x1",
            "item": "minecraft:brush",
            "amount": 1,
            "icon": "minecraft:brush"
          },
          {
            "title": "Excava fragmento cerámico x1",
            "item": "minecraft:pottery_sherd_archer",
            "amount": 1,
            "icon": "minecraft:pottery_sherd_archer"
          },
          {
            "title": "Desentierra arena sospechosa x1",
            "item": "minecraft:suspicious_sand",
            "amount": 1,
            "icon": "minecraft:suspicious_sand"
          },
          {
            "title": "Lingotes de las ruinas x3",
            "item": "minecraft:iron_ingot",
            "amount": 3,
            "icon": "minecraft:iron_ingot"
          },
          {
            "title": "Ladrillos de las ruinas x8",
            "item": "minecraft:brick",
            "amount": 8,
            "icon": "minecraft:brick"
          }
        ],
        "reward": {
          "title": "300 monedas",
          "amount": 300,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 16,
        "title": "DÍA 16 - Portal al inframundo",
        "tasks": [
          {
            "title": "Obsidiana llorosa del portal x3",
            "item": "minecraft:crying_obsidian",
            "amount": 3,
            "icon": "minecraft:crying_obsidian"
          },
          {
            "title": "Fabrica encendedor x1",
            "item": "minecraft:flint_and_steel",
            "amount": 1,
            "icon": "minecraft:flint_and_steel"
          },
          {
            "title": "Botas de oro para piglins x1",
            "item": "minecraft:golden_boots",
            "amount": 1,
            "icon": "minecraft:golden_boots"
          },
          {
            "title": "Espada de hierro x1",
            "item": "minecraft:iron_sword",
            "amount": 1,
            "icon": "minecraft:iron_sword"
          },
          {
            "title": "Chuletas para la travesía x5",
            "item": "minecraft:cooked_porkchop",
            "amount": 5,
            "icon": "minecraft:cooked_porkchop"
          }
        ],
        "reward": {
          "title": "330 monedas",
          "amount": 330,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 17,
        "title": "DÍA 17 - Bosque carmesí",
        "tasks": [
          {
            "title": "Tala tallo carmesí x6",
            "item": "minecraft:crimson_stem",
            "amount": 6,
            "icon": "minecraft:crimson_stem"
          },
          {
            "title": "Recolecta bloque de verruga x3",
            "item": "minecraft:nether_wart_block",
            "amount": 3,
            "icon": "minecraft:nether_wart_block"
          },
          {
            "title": "Enredadera llorona x4",
            "item": "minecraft:weeping_vines",
            "amount": 4,
            "icon": "minecraft:weeping_vines"
          },
          {
            "title": "Lingotes para trueque piglin x5",
            "item": "minecraft:gold_ingot",
            "amount": 5,
            "icon": "minecraft:gold_ingot"
          },
          {
            "title": "Hongo carmesí x2",
            "item": "minecraft:crimson_fungus",
            "amount": 2,
            "icon": "minecraft:crimson_fungus"
          }
        ],
        "reward": {
          "title": "360 monedas",
          "amount": 360,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 18,
        "title": "DÍA 18 - Valle de almas",
        "tasks": [
          {
            "title": "Arena de almas x8",
            "item": "minecraft:soul_sand",
            "amount": 8,
            "icon": "minecraft:soul_sand"
          },
          {
            "title": "Tierra de almas x4",
            "item": "minecraft:soul_soil",
            "amount": 4,
            "icon": "minecraft:soul_soil"
          },
          {
            "title": "Bloque de hueso x4",
            "item": "minecraft:bone_block",
            "amount": 4,
            "icon": "minecraft:bone_block"
          },
          {
            "title": "Antorchas de almas x4",
            "item": "minecraft:soul_torch",
            "amount": 4,
            "icon": "minecraft:soul_torch"
          },
          {
            "title": "Derrota ghast x1",
            "item": "minecraft:ghast_tear",
            "amount": 1,
            "icon": "minecraft:ghast_tear"
          }
        ],
        "reward": {
          "title": "390 monedas",
          "amount": 390,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 19,
        "title": "DÍA 19 - Deltas de basalto",
        "tasks": [
          {
            "title": "Recolecta basalto x8",
            "item": "minecraft:basalt",
            "amount": 8,
            "icon": "minecraft:basalt"
          },
          {
            "title": "Recolecta piedra negra x8",
            "item": "minecraft:blackstone",
            "amount": 8,
            "icon": "minecraft:blackstone"
          },
          {
            "title": "Derrota cubo de magma x3",
            "item": "minecraft:magma_cream",
            "amount": 3,
            "icon": "minecraft:magma_cream"
          },
          {
            "title": "Mina cuarzo del Nether x6",
            "item": "minecraft:quartz",
            "amount": 6,
            "icon": "minecraft:quartz"
          },
          {
            "title": "Rompe glowstone x4",
            "item": "minecraft:glowstone_dust",
            "amount": 4,
            "icon": "minecraft:glowstone_dust"
          }
        ],
        "reward": {
          "title": "410 monedas",
          "amount": 410,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 20,
        "title": "DÍA 20 - Fortaleza del Nether",
        "tasks": [
          {
            "title": "Derrota blazes x3",
            "item": "minecraft:blaze_rod",
            "amount": 3,
            "icon": "minecraft:blaze_rod"
          },
          {
            "title": "Cosecha verruga del Nether x5",
            "item": "minecraft:nether_wart",
            "amount": 5,
            "icon": "minecraft:nether_wart"
          },
          {
            "title": "Cráneo de wither x1",
            "item": "minecraft:wither_skeleton_skull",
            "amount": 1,
            "icon": "minecraft:wither_skeleton_skull"
          },
          {
            "title": "Bloque de oro de la fortaleza x1",
            "item": "minecraft:block_of_gold",
            "amount": 1,
            "icon": "minecraft:block_of_gold"
          },
          {
            "title": "Fabrica carga ígnea x2",
            "item": "minecraft:fire_charge",
            "amount": 2,
            "icon": "minecraft:fire_charge"
          }
        ],
        "reward": {
          "title": "430 monedas",
          "amount": 430,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 21,
        "title": "DÍA 21 - Preparación para el End",
        "tasks": [
          {
            "title": "Perlas de enderman x6",
            "item": "minecraft:ender_pearl",
            "amount": 6,
            "icon": "minecraft:ender_pearl"
          },
          {
            "title": "Polvo de blaze x4",
            "item": "minecraft:blaze_powder",
            "amount": 4,
            "icon": "minecraft:blaze_powder"
          },
          {
            "title": "Fabrica ojos de ender x3",
            "item": "minecraft:ender_eye",
            "amount": 3,
            "icon": "minecraft:ender_eye"
          },
          {
            "title": "Fabrica arco x1",
            "item": "minecraft:bow",
            "amount": 1,
            "icon": "minecraft:bow"
          },
          {
            "title": "Fabrica escudo x1",
            "item": "minecraft:shield",
            "amount": 1,
            "icon": "minecraft:shield"
          }
        ],
        "reward": {
          "title": "460 monedas",
          "amount": 460,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 22,
        "title": "DÍA 22 - La fortaleza",
        "tasks": [
          {
            "title": "Activa el portal x6",
            "item": "minecraft:ender_eye",
            "amount": 6,
            "icon": "minecraft:ender_eye"
          },
          {
            "title": "Estanterías de la biblioteca x4",
            "item": "minecraft:bookshelf",
            "amount": 4,
            "icon": "minecraft:bookshelf"
          },
          {
            "title": "Puerta de hierro de la fortaleza x1",
            "item": "minecraft:iron_door",
            "amount": 1,
            "icon": "minecraft:iron_door"
          },
          {
            "title": "Espada de hierro x1",
            "item": "minecraft:iron_sword",
            "amount": 1,
            "icon": "minecraft:iron_sword"
          },
          {
            "title": "Mapa de la fortaleza x1",
            "item": "minecraft:filled_map",
            "amount": 1,
            "icon": "minecraft:filled_map"
          }
        ],
        "reward": {
          "title": "495 monedas",
          "amount": 495,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 23,
        "title": "DÍA 23 - Cazador del dragón",
        "tasks": [
          {
            "title": "Forja espada de diamante x1",
            "item": "minecraft:diamond_sword",
            "amount": 1,
            "icon": "minecraft:diamond_sword"
          },
          {
            "title": "Flechas para el combate x32",
            "item": "minecraft:arrow",
            "amount": 32,
            "icon": "minecraft:arrow"
          },
          {
            "title": "Manzanas doradas x3",
            "item": "minecraft:golden_apple",
            "amount": 3,
            "icon": "minecraft:golden_apple"
          },
          {
            "title": "Perlas para maniobrar x8",
            "item": "minecraft:ender_pearl",
            "amount": 8,
            "icon": "minecraft:ender_pearl"
          },
          {
            "title": "Aliento del dragón x1",
            "item": "minecraft:dragon_breath",
            "amount": 1,
            "icon": "minecraft:dragon_breath"
          }
        ],
        "reward": {
          "title": "530 monedas",
          "amount": 530,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 24,
        "title": "DÍA 24 - Las islas exteriores",
        "tasks": [
          {
            "title": "Cosecha fruta chorus x6",
            "item": "minecraft:chorus_fruit",
            "amount": 6,
            "icon": "minecraft:chorus_fruit"
          },
          {
            "title": "Piedra del End x16",
            "item": "minecraft:end_stone",
            "amount": 16,
            "icon": "minecraft:end_stone"
          },
          {
            "title": "Bloque de purpur x8",
            "item": "minecraft:purpur_block",
            "amount": 8,
            "icon": "minecraft:purpur_block"
          },
          {
            "title": "Varilla del End x2",
            "item": "minecraft:end_rod",
            "amount": 2,
            "icon": "minecraft:end_rod"
          },
          {
            "title": "Caparazón de shulker x4",
            "item": "minecraft:shulker_shell",
            "amount": 4,
            "icon": "minecraft:shulker_shell"
          }
        ],
        "reward": {
          "title": "570 monedas",
          "amount": 570,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 25,
        "title": "DÍA 25 - Ciudad del End",
        "tasks": [
          {
            "title": "¡Consigue élitros! x1",
            "item": "minecraft:elytra",
            "amount": 1,
            "icon": "minecraft:elytra"
          },
          {
            "title": "Cabeza de dragón del barco x1",
            "item": "minecraft:dragon_head",
            "amount": 1,
            "icon": "minecraft:dragon_head"
          },
          {
            "title": "Fabrica cristal del End x1",
            "item": "minecraft:end_crystal",
            "amount": 1,
            "icon": "minecraft:end_crystal"
          },
          {
            "title": "Pechera de diamante del cofre x1",
            "item": "minecraft:diamond_chestplate",
            "amount": 1,
            "icon": "minecraft:diamond_chestplate"
          },
          {
            "title": "Libro encantado del botín x1",
            "item": "minecraft:enchanted_book",
            "amount": 1,
            "icon": "minecraft:enchanted_book"
          }
        ],
        "reward": {
          "title": "620 monedas",
          "amount": 620,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 26,
        "title": "DÍA 26 - Buscador de netherita",
        "tasks": [
          {
            "title": "Excava escombros ancestrales x4",
            "item": "minecraft:ancient_debris",
            "amount": 4,
            "icon": "minecraft:ancient_debris"
          },
          {
            "title": "Funde chatarra de netherita x4",
            "item": "minecraft:netherite_scrap",
            "amount": 4,
            "icon": "minecraft:netherite_scrap"
          },
          {
            "title": "Forja lingote de netherita x1",
            "item": "minecraft:netherite_ingot",
            "amount": 1,
            "icon": "minecraft:netherite_ingot"
          },
          {
            "title": "Bloques de oro x4",
            "item": "minecraft:gold_block",
            "amount": 4,
            "icon": "minecraft:gold_block"
          },
          {
            "title": "Pico de diamante x1",
            "item": "minecraft:diamond_pickaxe",
            "amount": 1,
            "icon": "minecraft:diamond_pickaxe"
          }
        ],
        "reward": {
          "title": "690 monedas",
          "amount": 690,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 27,
        "title": "DÍA 27 - Maestro de biomas",
        "tasks": [
          {
            "title": "Cactus del desierto x4",
            "item": "minecraft:cactus",
            "amount": 4,
            "icon": "minecraft:cactus"
          },
          {
            "title": "Bolas de nieve de la tundra x8",
            "item": "minecraft:snowball",
            "amount": 8,
            "icon": "minecraft:snowball"
          },
          {
            "title": "Pez tropical del arrecife x3",
            "item": "minecraft:tropical_fish",
            "amount": 3,
            "icon": "minecraft:tropical_fish"
          },
          {
            "title": "Podsol de la taiga x4",
            "item": "minecraft:podzol",
            "amount": 4,
            "icon": "minecraft:podzol"
          },
          {
            "title": "Musgo de cueva exuberante x4",
            "item": "minecraft:moss_block",
            "amount": 4,
            "icon": "minecraft:moss_block"
          }
        ],
        "reward": {
          "title": "790 monedas",
          "amount": 790,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 28,
        "title": "DÍA 28 - Conquistador de estructuras",
        "tasks": [
          {
            "title": "Totem de la mansión x1",
            "item": "minecraft:totem_of_undying",
            "amount": 1,
            "icon": "minecraft:totem_of_undying"
          },
          {
            "title": "Tridente del océano x1",
            "item": "minecraft:trident",
            "amount": 1,
            "icon": "minecraft:trident"
          },
          {
            "title": "Fragmento de eco x3",
            "item": "minecraft:echo_shard",
            "amount": 3,
            "icon": "minecraft:echo_shard"
          },
          {
            "title": "Fragmento de disco antiguo x1",
            "item": "minecraft:disc_fragment_5",
            "amount": 1,
            "icon": "minecraft:disc_fragment_5"
          },
          {
            "title": "Fabrica magnetita x1",
            "item": "minecraft:lodestone",
            "amount": 1,
            "icon": "minecraft:lodestone"
          }
        ],
        "reward": {
          "title": "950 monedas",
          "amount": 950,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 29,
        "title": "DÍA 29 - Cartógrafo legendario",
        "tasks": [
          {
            "title": "Brújula de recuperación x1",
            "item": "minecraft:recovery_compass",
            "amount": 1,
            "icon": "minecraft:recovery_compass"
          },
          {
            "title": "Mapas completados x4",
            "item": "minecraft:filled_map",
            "amount": 4,
            "icon": "minecraft:filled_map"
          },
          {
            "title": "Catalejo x1",
            "item": "minecraft:spyglass",
            "amount": 1,
            "icon": "minecraft:spyglass"
          },
          {
            "title": "Reloj x1",
            "item": "minecraft:clock",
            "amount": 1,
            "icon": "minecraft:clock"
          },
          {
            "title": "Estandartes de marcado x2",
            "item": "minecraft:white_banner",
            "amount": 2,
            "icon": "minecraft:white_banner"
          }
        ],
        "reward": {
          "title": "1100 monedas",
          "amount": 1100,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 30,
        "title": "DÍA 30 - El cartógrafo supremo",
        "tasks": [
          {
            "title": "Construye un faro x1",
            "item": "minecraft:beacon",
            "amount": 1,
            "icon": "minecraft:beacon"
          },
          {
            "title": "Construye un conducto x1",
            "item": "minecraft:conduit",
            "amount": 1,
            "icon": "minecraft:conduit"
          },
          {
            "title": "Ancla de reaparición x1",
            "item": "minecraft:respawn_anchor",
            "amount": 1,
            "icon": "minecraft:respawn_anchor"
          },
          {
            "title": "Cofre de ender x1",
            "item": "minecraft:ender_chest",
            "amount": 1,
            "icon": "minecraft:ender_chest"
          },
          {
            "title": "Magnetita final x1",
            "item": "minecraft:lodestone",
            "amount": 1,
            "icon": "minecraft:lodestone"
          }
        ],
        "reward": {
          "title": "1300 monedas",
          "amount": 1300,
          "icon": "saros__money_mod:euro_100"
        }
      }
    ]
  },
  {
    "id": "ganadero",
    "name": "Ganadero",
    "emoji": "🐄",
    "color": "#8D6E63",
    "days": [
      {
        "day": 1,
        "title": "DIA 1 - Primeros pasos",
        "tasks": [
          {
            "title": "Recolecta cuero x2",
            "item": "minecraft:leather",
            "amount": 2,
            "icon": "minecraft:leather"
          },
          {
            "title": "Carne de res x2",
            "item": "minecraft:beef",
            "amount": 2,
            "icon": "minecraft:beef"
          },
          {
            "title": "Esquila una oveja",
            "item": "minecraft:white_wool",
            "amount": 1,
            "icon": "minecraft:white_wool"
          },
          {
            "title": "Consigue pollo crudo",
            "item": "minecraft:chicken",
            "amount": 1,
            "icon": "minecraft:chicken"
          },
          {
            "title": "Consigue chuleta de cerdo",
            "item": "minecraft:porkchop",
            "amount": 1,
            "icon": "minecraft:porkchop"
          }
        ],
        "reward": {
          "title": "65 monedas",
          "amount": 65,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 2,
        "title": "DIA 2 - Productos del corral",
        "tasks": [
          {
            "title": "Recolecta huevos x3",
            "item": "minecraft:egg",
            "amount": 3,
            "icon": "minecraft:egg"
          },
          {
            "title": "Recolecta plumas x3",
            "item": "minecraft:feather",
            "amount": 3,
            "icon": "minecraft:feather"
          },
          {
            "title": "Carne de cordero x2",
            "item": "minecraft:mutton",
            "amount": 2,
            "icon": "minecraft:mutton"
          },
          {
            "title": "Ordeña una vaca",
            "item": "minecraft:milk_bucket",
            "amount": 1,
            "icon": "minecraft:milk_bucket"
          },
          {
            "title": "Cultiva trigo para animales",
            "item": "minecraft:wheat",
            "amount": 8,
            "icon": "minecraft:wheat"
          }
        ],
        "reward": {
          "title": "75 monedas",
          "amount": 75,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 3,
        "title": "DIA 3 - Lana de colores",
        "tasks": [
          {
            "title": "Fabrica tijeras de esquilar",
            "item": "minecraft:shears",
            "amount": 1,
            "icon": "minecraft:shears"
          },
          {
            "title": "Lana negra de oveja",
            "item": "minecraft:black_wool",
            "amount": 1,
            "icon": "minecraft:black_wool"
          },
          {
            "title": "Lana marrón de oveja",
            "item": "minecraft:brown_wool",
            "amount": 1,
            "icon": "minecraft:brown_wool"
          },
          {
            "title": "Lana gris de oveja",
            "item": "minecraft:gray_wool",
            "amount": 1,
            "icon": "minecraft:gray_wool"
          },
          {
            "title": "Recolecta huesos",
            "item": "minecraft:bone",
            "amount": 3,
            "icon": "minecraft:bone"
          }
        ],
        "reward": {
          "title": "85 monedas",
          "amount": 85,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 4,
        "title": "DIA 4 - Alimentación variada",
        "tasks": [
          {
            "title": "Semillas para pollos",
            "item": "minecraft:wheat_seeds",
            "amount": 8,
            "icon": "minecraft:wheat_seeds"
          },
          {
            "title": "Zanahorias para cerdos",
            "item": "minecraft:carrot",
            "amount": 6,
            "icon": "minecraft:carrot"
          },
          {
            "title": "Papas para cerdos",
            "item": "minecraft:potato",
            "amount": 6,
            "icon": "minecraft:potato"
          },
          {
            "title": "Remolacha para cerdos",
            "item": "minecraft:beetroot",
            "amount": 6,
            "icon": "minecraft:beetroot"
          },
          {
            "title": "Manzanas para caballos",
            "item": "minecraft:apple",
            "amount": 3,
            "icon": "minecraft:apple"
          }
        ],
        "reward": {
          "title": "100 monedas",
          "amount": 100,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 5,
        "title": "DIA 5 - Primer establo",
        "tasks": [
          {
            "title": "Construye vallas x16",
            "item": "minecraft:oak_fence",
            "amount": 16,
            "icon": "minecraft:oak_fence"
          },
          {
            "title": "Puertas de valla x2",
            "item": "minecraft:oak_fence_gate",
            "amount": 2,
            "icon": "minecraft:oak_fence_gate"
          },
          {
            "title": "Fabrica un lazo",
            "item": "minecraft:lead",
            "amount": 1,
            "icon": "minecraft:lead"
          },
          {
            "title": "Bloques de heno x3",
            "item": "minecraft:hay_block",
            "amount": 3,
            "icon": "minecraft:hay_block"
          },
          {
            "title": "Fabrica un compostador",
            "item": "minecraft:composter",
            "amount": 1,
            "icon": "minecraft:composter"
          }
        ],
        "reward": {
          "title": "110 monedas",
          "amount": 110,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 6,
        "title": "DIA 6 - Cría de vacas",
        "tasks": [
          {
            "title": "Trigo para alimentar vacas",
            "item": "minecraft:wheat",
            "amount": 16,
            "icon": "minecraft:wheat"
          },
          {
            "title": "Cuero de vacas criadas x5",
            "item": "minecraft:leather",
            "amount": 5,
            "icon": "minecraft:leather"
          },
          {
            "title": "Carne de res fresca x5",
            "item": "minecraft:beef",
            "amount": 5,
            "icon": "minecraft:beef"
          },
          {
            "title": "Ordeña 2 vacas",
            "item": "minecraft:milk_bucket",
            "amount": 2,
            "icon": "minecraft:milk_bucket"
          },
          {
            "title": "Pastel con leche y huevo",
            "item": "minecraft:cake",
            "amount": 1,
            "icon": "minecraft:cake"
          }
        ],
        "reward": {
          "title": "125 monedas",
          "amount": 125,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 7,
        "title": "DIA 7 - Cría de ovejas",
        "tasks": [
          {
            "title": "Trigo para ovejas",
            "item": "minecraft:wheat",
            "amount": 16,
            "icon": "minecraft:wheat"
          },
          {
            "title": "Carne de cordero x4",
            "item": "minecraft:mutton",
            "amount": 4,
            "icon": "minecraft:mutton"
          },
          {
            "title": "Lana rosada esquilada",
            "item": "minecraft:pink_wool",
            "amount": 1,
            "icon": "minecraft:pink_wool"
          },
          {
            "title": "Lana celeste esquilada",
            "item": "minecraft:light_blue_wool",
            "amount": 1,
            "icon": "minecraft:light_blue_wool"
          },
          {
            "title": "Tijeras para esquilar",
            "item": "minecraft:shears",
            "amount": 1,
            "icon": "minecraft:shears"
          }
        ],
        "reward": {
          "title": "140 monedas",
          "amount": 140,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 8,
        "title": "DIA 8 - Cría de cerdos",
        "tasks": [
          {
            "title": "Zanahorias para cerdos",
            "item": "minecraft:carrot",
            "amount": 12,
            "icon": "minecraft:carrot"
          },
          {
            "title": "Papas para cerdos",
            "item": "minecraft:potato",
            "amount": 8,
            "icon": "minecraft:potato"
          },
          {
            "title": "Chuletas de cerdo x5",
            "item": "minecraft:porkchop",
            "amount": 5,
            "icon": "minecraft:porkchop"
          },
          {
            "title": "Cerdo cocinado x3",
            "item": "minecraft:cooked_porkchop",
            "amount": 3,
            "icon": "minecraft:cooked_porkchop"
          },
          {
            "title": "Montura para cerdo",
            "item": "minecraft:saddle",
            "amount": 1,
            "icon": "minecraft:saddle"
          }
        ],
        "reward": {
          "title": "155 monedas",
          "amount": 155,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 9,
        "title": "DIA 9 - Granja avícola",
        "tasks": [
          {
            "title": "Semillas para pollos",
            "item": "minecraft:wheat_seeds",
            "amount": 16,
            "icon": "minecraft:wheat_seeds"
          },
          {
            "title": "Huevos recolectados x6",
            "item": "minecraft:egg",
            "amount": 6,
            "icon": "minecraft:egg"
          },
          {
            "title": "Plumas recolectadas x6",
            "item": "minecraft:feather",
            "amount": 6,
            "icon": "minecraft:feather"
          },
          {
            "title": "Pollo crudo x4",
            "item": "minecraft:chicken",
            "amount": 4,
            "icon": "minecraft:chicken"
          },
          {
            "title": "Pollo cocinado x3",
            "item": "minecraft:cooked_chicken",
            "amount": 3,
            "icon": "minecraft:cooked_chicken"
          }
        ],
        "reward": {
          "title": "175 monedas",
          "amount": 175,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 10,
        "title": "DIA 10 - Granja de conejos",
        "tasks": [
          {
            "title": "Piel de conejo x3",
            "item": "minecraft:rabbit_hide",
            "amount": 3,
            "icon": "minecraft:rabbit_hide"
          },
          {
            "title": "Carne de conejo x2",
            "item": "minecraft:rabbit",
            "amount": 2,
            "icon": "minecraft:rabbit"
          },
          {
            "title": "Pata de conejo de la suerte",
            "item": "minecraft:rabbit_foot",
            "amount": 1,
            "icon": "minecraft:rabbit_foot"
          },
          {
            "title": "Zanahorias para conejos",
            "item": "minecraft:carrot",
            "amount": 12,
            "icon": "minecraft:carrot"
          },
          {
            "title": "Dientes de león para conejos",
            "item": "minecraft:dandelion",
            "amount": 3,
            "icon": "minecraft:dandelion"
          }
        ],
        "reward": {
          "title": "190 monedas",
          "amount": 190,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 11,
        "title": "DIA 11 - Domador de caballos",
        "tasks": [
          {
            "title": "Montura para caballo",
            "item": "minecraft:saddle",
            "amount": 1,
            "icon": "minecraft:saddle"
          },
          {
            "title": "Domestica con manzanas",
            "item": "minecraft:apple",
            "amount": 5,
            "icon": "minecraft:apple"
          },
          {
            "title": "Manzana dorada de cría",
            "item": "minecraft:golden_apple",
            "amount": 1,
            "icon": "minecraft:golden_apple"
          },
          {
            "title": "Heno para caballos",
            "item": "minecraft:hay_block",
            "amount": 4,
            "icon": "minecraft:hay_block"
          },
          {
            "title": "Cuero acumulado del rancho",
            "item": "minecraft:leather",
            "amount": 6,
            "icon": "minecraft:leather"
          }
        ],
        "reward": {
          "title": "210 monedas",
          "amount": 210,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 12,
        "title": "DIA 12 - Armadura equina",
        "tasks": [
          {
            "title": "Armadura de hierro equina",
            "item": "minecraft:iron_horse_armor",
            "amount": 1,
            "icon": "minecraft:iron_horse_armor"
          },
          {
            "title": "Armadura dorada equina",
            "item": "minecraft:golden_horse_armor",
            "amount": 1,
            "icon": "minecraft:golden_horse_armor"
          },
          {
            "title": "Hierro para herraduras",
            "item": "minecraft:iron_ingot",
            "amount": 4,
            "icon": "minecraft:iron_ingot"
          },
          {
            "title": "Zanahoria dorada de cría",
            "item": "minecraft:golden_carrot",
            "amount": 2,
            "icon": "minecraft:golden_carrot"
          },
          {
            "title": "Etiqueta para tu caballo",
            "item": "minecraft:name_tag",
            "amount": 1,
            "icon": "minecraft:name_tag"
          }
        ],
        "reward": {
          "title": "235 monedas",
          "amount": 235,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 13,
        "title": "DIA 13 - Caravana de llamas",
        "tasks": [
          {
            "title": "Lazos para caravana",
            "item": "minecraft:lead",
            "amount": 2,
            "icon": "minecraft:lead"
          },
          {
            "title": "Alfombras para llamas",
            "item": "minecraft:white_carpet",
            "amount": 3,
            "icon": "minecraft:white_carpet"
          },
          {
            "title": "Cofre en llama de carga",
            "item": "minecraft:chest",
            "amount": 1,
            "icon": "minecraft:chest"
          },
          {
            "title": "Cuero de llamas y vacas",
            "item": "minecraft:leather",
            "amount": 8,
            "icon": "minecraft:leather"
          },
          {
            "title": "Hilo para lazos y alfombras",
            "item": "minecraft:string",
            "amount": 3,
            "icon": "minecraft:string"
          }
        ],
        "reward": {
          "title": "255 monedas",
          "amount": 255,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 14,
        "title": "DIA 14 - Compañero fiel",
        "tasks": [
          {
            "title": "Huesos para domesticar lobos",
            "item": "minecraft:bone",
            "amount": 8,
            "icon": "minecraft:bone"
          },
          {
            "title": "Carne para alimentar lobos",
            "item": "minecraft:cooked_beef",
            "amount": 4,
            "icon": "minecraft:cooked_beef"
          },
          {
            "title": "Carne para criar lobos",
            "item": "minecraft:rabbit",
            "amount": 4,
            "icon": "minecraft:rabbit"
          },
          {
            "title": "Lazo para pasear lobo",
            "item": "minecraft:lead",
            "amount": 1,
            "icon": "minecraft:lead"
          },
          {
            "title": "Juguete de hilo para lobo",
            "item": "minecraft:string",
            "amount": 3,
            "icon": "minecraft:string"
          }
        ],
        "reward": {
          "title": "280 monedas",
          "amount": 280,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 15,
        "title": "DIA 15 - Compañía felina",
        "tasks": [
          {
            "title": "Bacalao para gatos",
            "item": "minecraft:cod",
            "amount": 6,
            "icon": "minecraft:cod"
          },
          {
            "title": "Salmón para gatos",
            "item": "minecraft:salmon",
            "amount": 4,
            "icon": "minecraft:salmon"
          },
          {
            "title": "Pez tropical para gatos",
            "item": "minecraft:tropical_fish",
            "amount": 2,
            "icon": "minecraft:tropical_fish"
          },
          {
            "title": "Pata de conejo de la suerte",
            "item": "minecraft:rabbit_foot",
            "amount": 1,
            "icon": "minecraft:rabbit_foot"
          },
          {
            "title": "Pasea a tu mascota",
            "item": "minecraft:lead",
            "amount": 1,
            "icon": "minecraft:lead"
          }
        ],
        "reward": {
          "title": "300 monedas",
          "amount": 300,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 16,
        "title": "DIA 16 - Criadero de ajolotes",
        "tasks": [
          {
            "title": "Cubo con pez tropical",
            "item": "minecraft:tropical_fish_bucket",
            "amount": 2,
            "icon": "minecraft:tropical_fish_bucket"
          },
          {
            "title": "Cubo de agua",
            "item": "minecraft:water_bucket",
            "amount": 2,
            "icon": "minecraft:water_bucket"
          },
          {
            "title": "Captura un ajolote",
            "item": "minecraft:axolotl_bucket",
            "amount": 1,
            "icon": "minecraft:axolotl_bucket"
          },
          {
            "title": "Alimenta ajolotes",
            "item": "minecraft:tropical_fish",
            "amount": 4,
            "icon": "minecraft:tropical_fish"
          },
          {
            "title": "Kelp para acuario",
            "item": "minecraft:kelp",
            "amount": 6,
            "icon": "minecraft:kelp"
          }
        ],
        "reward": {
          "title": "325 monedas",
          "amount": 325,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 17,
        "title": "DIA 17 - Protección de tortugas",
        "tasks": [
          {
            "title": "Recolecta huevo de tortuga",
            "item": "minecraft:turtle_egg",
            "amount": 1,
            "icon": "minecraft:turtle_egg"
          },
          {
            "title": "Escama de tortuga bebé",
            "item": "minecraft:turtle_scute",
            "amount": 2,
            "icon": "minecraft:turtle_scute"
          },
          {
            "title": "Alimenta y cría tortugas",
            "item": "minecraft:seagrass",
            "amount": 8,
            "icon": "minecraft:seagrass"
          },
          {
            "title": "Casco de tortuga",
            "item": "minecraft:turtle_helmet",
            "amount": 1,
            "icon": "minecraft:turtle_helmet"
          },
          {
            "title": "Arena para nido",
            "item": "minecraft:sand",
            "amount": 16,
            "icon": "minecraft:sand"
          }
        ],
        "reward": {
          "title": "355 monedas",
          "amount": 355,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 18,
        "title": "DIA 18 - Pantano viviente",
        "tasks": [
          {
            "title": "Bolas de slime para ranas",
            "item": "minecraft:slime_ball",
            "amount": 3,
            "icon": "minecraft:slime_ball"
          },
          {
            "title": "Agua para ranas",
            "item": "minecraft:water_bucket",
            "amount": 1,
            "icon": "minecraft:water_bucket"
          },
          {
            "title": "Hojas de nenúfar",
            "item": "minecraft:lily_pad",
            "amount": 3,
            "icon": "minecraft:lily_pad"
          },
          {
            "title": "Hilo del pantano",
            "item": "minecraft:string",
            "amount": 2,
            "icon": "minecraft:string"
          },
          {
            "title": "Fertiliza el hábitat",
            "item": "minecraft:bone_meal",
            "amount": 4,
            "icon": "minecraft:bone_meal"
          }
        ],
        "reward": {
          "title": "380 monedas",
          "amount": 380,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 19,
        "title": "DIA 19 - Apicultor",
        "tasks": [
          {
            "title": "Panal de abejas",
            "item": "minecraft:honeycomb",
            "amount": 3,
            "icon": "minecraft:honeycomb"
          },
          {
            "title": "Botella de miel",
            "item": "minecraft:honey_bottle",
            "amount": 2,
            "icon": "minecraft:honey_bottle"
          },
          {
            "title": "Fogata para cosecha segura",
            "item": "minecraft:campfire",
            "amount": 1,
            "icon": "minecraft:campfire"
          },
          {
            "title": "Botellas para miel",
            "item": "minecraft:glass_bottle",
            "amount": 4,
            "icon": "minecraft:glass_bottle"
          },
          {
            "title": "Tijeras para panal",
            "item": "minecraft:shears",
            "amount": 1,
            "icon": "minecraft:shears"
          }
        ],
        "reward": {
          "title": "405 monedas",
          "amount": 405,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 20,
        "title": "DIA 20 - Transporte animal",
        "tasks": [
          {
            "title": "Lazos para transporte",
            "item": "minecraft:lead",
            "amount": 2,
            "icon": "minecraft:lead"
          },
          {
            "title": "Barcas para animales",
            "item": "minecraft:oak_boat",
            "amount": 2,
            "icon": "minecraft:oak_boat"
          },
          {
            "title": "Heno para atraer",
            "item": "minecraft:hay_block",
            "amount": 4,
            "icon": "minecraft:hay_block"
          },
          {
            "title": "Canal de agua",
            "item": "minecraft:water_bucket",
            "amount": 1,
            "icon": "minecraft:water_bucket"
          },
          {
            "title": "Cofres de transporte",
            "item": "minecraft:chest",
            "amount": 2,
            "icon": "minecraft:chest"
          }
        ],
        "reward": {
          "title": "430 monedas",
          "amount": 430,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 21,
        "title": "DIA 21 - Viajero del Nether",
        "tasks": [
          {
            "title": "Hongo distorsionado",
            "item": "minecraft:warped_fungus",
            "amount": 4,
            "icon": "minecraft:warped_fungus"
          },
          {
            "title": "Caña con hongo",
            "item": "minecraft:warped_fungus_on_a_stick",
            "amount": 1,
            "icon": "minecraft:warped_fungus_on_a_stick"
          },
          {
            "title": "Montura para strider",
            "item": "minecraft:saddle",
            "amount": 1,
            "icon": "minecraft:saddle"
          },
          {
            "title": "Hilo para caña",
            "item": "minecraft:string",
            "amount": 4,
            "icon": "minecraft:string"
          },
          {
            "title": "Caña de pescar base",
            "item": "minecraft:fishing_rod",
            "amount": 1,
            "icon": "minecraft:fishing_rod"
          }
        ],
        "reward": {
          "title": "470 monedas",
          "amount": 470,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 22,
        "title": "DIA 22 - Bestia del Nether",
        "tasks": [
          {
            "title": "Hongo carmesí",
            "item": "minecraft:crimson_fungus",
            "amount": 4,
            "icon": "minecraft:crimson_fungus"
          },
          {
            "title": "Carne de cerdo del Nether",
            "item": "minecraft:porkchop",
            "amount": 6,
            "icon": "minecraft:porkchop"
          },
          {
            "title": "Cerdo cocinado x4",
            "item": "minecraft:cooked_porkchop",
            "amount": 4,
            "icon": "minecraft:cooked_porkchop"
          },
          {
            "title": "Cuero de hoglins",
            "item": "minecraft:leather",
            "amount": 6,
            "icon": "minecraft:leather"
          },
          {
            "title": "Oro para ahuyentar hoglins",
            "item": "minecraft:gold_ingot",
            "amount": 2,
            "icon": "minecraft:gold_ingot"
          }
        ],
        "reward": {
          "title": "505 monedas",
          "amount": 505,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 23,
        "title": "DIA 23 - Fauna ártica",
        "tasks": [
          {
            "title": "Salmón para osos polares",
            "item": "minecraft:salmon",
            "amount": 6,
            "icon": "minecraft:salmon"
          },
          {
            "title": "Bayas para criar zorros",
            "item": "minecraft:sweet_berries",
            "amount": 8,
            "icon": "minecraft:sweet_berries"
          },
          {
            "title": "Trigo para criar cabras",
            "item": "minecraft:wheat",
            "amount": 12,
            "icon": "minecraft:wheat"
          },
          {
            "title": "Cuerno de cabra",
            "item": "minecraft:goat_horn",
            "amount": 1,
            "icon": "minecraft:goat_horn"
          },
          {
            "title": "Hábitat nevado",
            "item": "minecraft:snow_block",
            "amount": 8,
            "icon": "minecraft:snow_block"
          }
        ],
        "reward": {
          "title": "545 monedas",
          "amount": 545,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 24,
        "title": "DIA 24 - Jungla exótica",
        "tasks": [
          {
            "title": "Bambú para alimentar pandas",
            "item": "minecraft:bamboo",
            "amount": 16,
            "icon": "minecraft:bamboo"
          },
          {
            "title": "Semillas para loros",
            "item": "minecraft:wheat_seeds",
            "amount": 8,
            "icon": "minecraft:wheat_seeds"
          },
          {
            "title": "Sandía para enriquecimiento",
            "item": "minecraft:melon_slice",
            "amount": 6,
            "icon": "minecraft:melon_slice"
          },
          {
            "title": "Cacao de la jungla",
            "item": "minecraft:cocoa_beans",
            "amount": 3,
            "icon": "minecraft:cocoa_beans"
          },
          {
            "title": "Lianas para hábitat selvático",
            "item": "minecraft:vine",
            "amount": 4,
            "icon": "minecraft:vine"
          }
        ],
        "reward": {
          "title": "580 monedas",
          "amount": 580,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 25,
        "title": "DIA 25 - Caravana del desierto",
        "tasks": [
          {
            "title": "Cactus para camellos",
            "item": "minecraft:cactus",
            "amount": 8,
            "icon": "minecraft:cactus"
          },
          {
            "title": "Montura para camello",
            "item": "minecraft:saddle",
            "amount": 1,
            "icon": "minecraft:saddle"
          },
          {
            "title": "Arena para hábitat desértico",
            "item": "minecraft:sand",
            "amount": 16,
            "icon": "minecraft:sand"
          },
          {
            "title": "Arbustos secos",
            "item": "minecraft:dead_bush",
            "amount": 4,
            "icon": "minecraft:dead_bush"
          },
          {
            "title": "Piel de conejo del desierto",
            "item": "minecraft:rabbit_hide",
            "amount": 3,
            "icon": "minecraft:rabbit_hide"
          }
        ],
        "reward": {
          "title": "620 monedas",
          "amount": 620,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 26,
        "title": "DIA 26 - Fósiles vivientes",
        "tasks": [
          {
            "title": "Huevo de sniffer",
            "item": "minecraft:sniffer_egg",
            "amount": 1,
            "icon": "minecraft:sniffer_egg"
          },
          {
            "title": "Semillas de flor antorcha",
            "item": "minecraft:torchflower_seeds",
            "amount": 4,
            "icon": "minecraft:torchflower_seeds"
          },
          {
            "title": "Vaina de jarra",
            "item": "minecraft:pitcher_pod",
            "amount": 2,
            "icon": "minecraft:pitcher_pod"
          },
          {
            "title": "Musgo prehistórico",
            "item": "minecraft:moss_block",
            "amount": 8,
            "icon": "minecraft:moss_block"
          },
          {
            "title": "Fósiles para el sniffer",
            "item": "minecraft:bone",
            "amount": 6,
            "icon": "minecraft:bone"
          }
        ],
        "reward": {
          "title": "755 monedas",
          "amount": 755,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 27,
        "title": "DIA 27 - Manada de lobos",
        "tasks": [
          {
            "title": "Domestica 4+ lobos",
            "item": "minecraft:bone",
            "amount": 16,
            "icon": "minecraft:bone"
          },
          {
            "title": "Alimenta la manada",
            "item": "minecraft:cooked_beef",
            "amount": 10,
            "icon": "minecraft:cooked_beef"
          },
          {
            "title": "Lazos para la manada",
            "item": "minecraft:lead",
            "amount": 3,
            "icon": "minecraft:lead"
          },
          {
            "title": "Protege de zombis",
            "item": "minecraft:rotten_flesh",
            "amount": 8,
            "icon": "minecraft:rotten_flesh"
          },
          {
            "title": "Nombra al lobo alfa",
            "item": "minecraft:name_tag",
            "amount": 1,
            "icon": "minecraft:name_tag"
          }
        ],
        "reward": {
          "title": "890 monedas",
          "amount": 890,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 28,
        "title": "DIA 28 - Colección zoológica",
        "tasks": [
          {
            "title": "Nombra especies exóticas",
            "item": "minecraft:name_tag",
            "amount": 3,
            "icon": "minecraft:name_tag"
          },
          {
            "title": "Maneja tu colección",
            "item": "minecraft:lead",
            "amount": 4,
            "icon": "minecraft:lead"
          },
          {
            "title": "Cría equina de élite",
            "item": "minecraft:golden_carrot",
            "amount": 2,
            "icon": "minecraft:golden_carrot"
          },
          {
            "title": "Cría equina suprema",
            "item": "minecraft:golden_apple",
            "amount": 1,
            "icon": "minecraft:golden_apple"
          },
          {
            "title": "Registro de especies",
            "item": "minecraft:book",
            "amount": 1,
            "icon": "minecraft:book"
          }
        ],
        "reward": {
          "title": "1030 monedas",
          "amount": 1030,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 29,
        "title": "DIA 29 - Rancho legendario",
        "tasks": [
          {
            "title": "Armadura equina suprema",
            "item": "minecraft:diamond_horse_armor",
            "amount": 1,
            "icon": "minecraft:diamond_horse_armor"
          },
          {
            "title": "Heno para todo el rancho",
            "item": "minecraft:hay_block",
            "amount": 16,
            "icon": "minecraft:hay_block"
          },
          {
            "title": "Compost para pastizales",
            "item": "minecraft:composter",
            "amount": 3,
            "icon": "minecraft:composter"
          },
          {
            "title": "Abrevaderos",
            "item": "minecraft:water_bucket",
            "amount": 3,
            "icon": "minecraft:water_bucket"
          },
          {
            "title": "Pasto para el rancho",
            "item": "minecraft:grass_block",
            "amount": 8,
            "icon": "minecraft:grass_block"
          }
        ],
        "reward": {
          "title": "1165 monedas",
          "amount": 1165,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 30,
        "title": "DIA 30 - Leyenda del ganadero",
        "tasks": [
          {
            "title": "Armadura equina diamantina",
            "item": "minecraft:diamond_horse_armor",
            "amount": 1,
            "icon": "minecraft:diamond_horse_armor"
          },
          {
            "title": "Cría equina perfecta",
            "item": "minecraft:golden_carrot",
            "amount": 8,
            "icon": "minecraft:golden_carrot"
          },
          {
            "title": "Monturas supremas",
            "item": "minecraft:saddle",
            "amount": 2,
            "icon": "minecraft:saddle"
          },
          {
            "title": "Pastel de celebración",
            "item": "minecraft:cake",
            "amount": 2,
            "icon": "minecraft:cake"
          },
          {
            "title": "Bautiza a tus campeones",
            "item": "minecraft:name_tag",
            "amount": 2,
            "icon": "minecraft:name_tag"
          }
        ],
        "reward": {
          "title": "1300 monedas",
          "amount": 1300,
          "icon": "saros__money_mod:euro_100"
        }
      }
    ]
  },
  {
    "id": "general",
    "name": "General",
    "emoji": "⚔️",
    "color": "#E53935",
    "days": [
      {
        "day": 1,
        "title": "DIA 1 - Primera sangre",
        "tasks": [
          {
            "title": "Fabrica espada de madera",
            "item": "minecraft:wooden_sword",
            "amount": 1,
            "icon": "minecraft:wooden_sword"
          },
          {
            "title": "Mata zombies x3",
            "item": "minecraft:rotten_flesh",
            "amount": 3,
            "icon": "minecraft:rotten_flesh"
          },
          {
            "title": "Fabrica casco de cuero",
            "item": "minecraft:leather_helmet",
            "amount": 1,
            "icon": "minecraft:leather_helmet"
          },
          {
            "title": "Mata esqueletos x2",
            "item": "minecraft:bone",
            "amount": 2,
            "icon": "minecraft:bone"
          },
          {
            "title": "Fabrica un escudo",
            "item": "minecraft:shield",
            "amount": 1,
            "icon": "minecraft:shield"
          }
        ],
        "reward": {
          "title": "65 monedas",
          "amount": 65,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 2,
        "title": "DIA 2 - Armería básica",
        "tasks": [
          {
            "title": "Fabrica espada de piedra",
            "item": "minecraft:stone_sword",
            "amount": 1,
            "icon": "minecraft:stone_sword"
          },
          {
            "title": "Fabrica pechera de cuero",
            "item": "minecraft:leather_chestplate",
            "amount": 1,
            "icon": "minecraft:leather_chestplate"
          },
          {
            "title": "Mata arañas x3 (string)",
            "item": "minecraft:string",
            "amount": 3,
            "icon": "minecraft:string"
          },
          {
            "title": "Fabrica un arco",
            "item": "minecraft:bow",
            "amount": 1,
            "icon": "minecraft:bow"
          },
          {
            "title": "Fabrica flechas x8",
            "item": "minecraft:arrow",
            "amount": 8,
            "icon": "minecraft:arrow"
          }
        ],
        "reward": {
          "title": "75 monedas",
          "amount": 75,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 3,
        "title": "DIA 3 - Guardia nocturna",
        "tasks": [
          {
            "title": "Fabrica pantalones de cuero",
            "item": "minecraft:leather_leggings",
            "amount": 1,
            "icon": "minecraft:leather_leggings"
          },
          {
            "title": "Fabrica botas de cuero",
            "item": "minecraft:leather_boots",
            "amount": 1,
            "icon": "minecraft:leather_boots"
          },
          {
            "title": "Fabrica antorchas x16",
            "item": "minecraft:torch",
            "amount": 16,
            "icon": "minecraft:torch"
          },
          {
            "title": "Mata arañas (ojo) x3",
            "item": "minecraft:spider_eye",
            "amount": 3,
            "icon": "minecraft:spider_eye"
          },
          {
            "title": "Pica piedra x32",
            "item": "minecraft:cobblestone",
            "amount": 32,
            "icon": "minecraft:cobblestone"
          }
        ],
        "reward": {
          "title": "85 monedas",
          "amount": 85,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 4,
        "title": "DIA 4 - Forja de hierro",
        "tasks": [
          {
            "title": "Fabrica espada de hierro",
            "item": "minecraft:iron_sword",
            "amount": 1,
            "icon": "minecraft:iron_sword"
          },
          {
            "title": "Consigue casco de cota de malla",
            "item": "minecraft:chainmail_helmet",
            "amount": 1,
            "icon": "minecraft:chainmail_helmet"
          },
          {
            "title": "Fabrica pechera de hierro",
            "item": "minecraft:iron_chestplate",
            "amount": 1,
            "icon": "minecraft:iron_chestplate"
          },
          {
            "title": "Mata zombies x5",
            "item": "minecraft:rotten_flesh",
            "amount": 5,
            "icon": "minecraft:rotten_flesh"
          },
          {
            "title": "Fabrica hacha de piedra",
            "item": "minecraft:stone_axe",
            "amount": 1,
            "icon": "minecraft:stone_axe"
          }
        ],
        "reward": {
          "title": "95 monedas",
          "amount": 95,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 5,
        "title": "DIA 5 - Escudero",
        "tasks": [
          {
            "title": "Consigue grebas de cota de malla",
            "item": "minecraft:chainmail_leggings",
            "amount": 1,
            "icon": "minecraft:chainmail_leggings"
          },
          {
            "title": "Consigue botas de cota de malla",
            "item": "minecraft:chainmail_boots",
            "amount": 1,
            "icon": "minecraft:chainmail_boots"
          },
          {
            "title": "Mata esqueletos x5",
            "item": "minecraft:bone",
            "amount": 5,
            "icon": "minecraft:bone"
          },
          {
            "title": "Fabrica bolas de nieve x16",
            "item": "minecraft:snowball",
            "amount": 16,
            "icon": "minecraft:snowball"
          },
          {
            "title": "Fabrica un escudo",
            "item": "minecraft:shield",
            "amount": 1,
            "icon": "minecraft:shield"
          }
        ],
        "reward": {
          "title": "110 monedas",
          "amount": 110,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 6,
        "title": "DIA 6 - Recluta acorazado",
        "tasks": [
          {
            "title": "Fabrica pantalones de hierro",
            "item": "minecraft:iron_leggings",
            "amount": 1,
            "icon": "minecraft:iron_leggings"
          },
          {
            "title": "Fabrica botas de hierro",
            "item": "minecraft:iron_boots",
            "amount": 1,
            "icon": "minecraft:iron_boots"
          },
          {
            "title": "Mata creepers x3",
            "item": "minecraft:gunpowder",
            "amount": 3,
            "icon": "minecraft:gunpowder"
          },
          {
            "title": "Fabrica una ballesta",
            "item": "minecraft:crossbow",
            "amount": 1,
            "icon": "minecraft:crossbow"
          },
          {
            "title": "Fabrica espada de hierro",
            "item": "minecraft:iron_sword",
            "amount": 1,
            "icon": "minecraft:iron_sword"
          }
        ],
        "reward": {
          "title": "125 monedas",
          "amount": 125,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 7,
        "title": "DIA 7 - Mesa de poder",
        "tasks": [
          {
            "title": "Fabrica mesa de encantamientos",
            "item": "minecraft:enchanting_table",
            "amount": 1,
            "icon": "minecraft:enchanting_table"
          },
          {
            "title": "Fabrica librerías x5",
            "item": "minecraft:bookshelf",
            "amount": 5,
            "icon": "minecraft:bookshelf"
          },
          {
            "title": "Consigue lapislázuli x8",
            "item": "minecraft:lapis_lazuli",
            "amount": 8,
            "icon": "minecraft:lapis_lazuli"
          },
          {
            "title": "Pica obsidiana x4",
            "item": "minecraft:obsidian",
            "amount": 4,
            "icon": "minecraft:obsidian"
          },
          {
            "title": "Fabrica casco de hierro",
            "item": "minecraft:iron_helmet",
            "amount": 1,
            "icon": "minecraft:iron_helmet"
          }
        ],
        "reward": {
          "title": "140 monedas",
          "amount": 140,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 8,
        "title": "DIA 8 - Cazador de creepers",
        "tasks": [
          {
            "title": "Mata creepers x6",
            "item": "minecraft:gunpowder",
            "amount": 6,
            "icon": "minecraft:gunpowder"
          },
          {
            "title": "Fabrica hacha de hierro",
            "item": "minecraft:iron_axe",
            "amount": 1,
            "icon": "minecraft:iron_axe"
          },
          {
            "title": "Fabrica un arco",
            "item": "minecraft:bow",
            "amount": 1,
            "icon": "minecraft:bow"
          },
          {
            "title": "Fabrica flechas x32",
            "item": "minecraft:arrow",
            "amount": 32,
            "icon": "minecraft:arrow"
          },
          {
            "title": "Fabrica espada de hierro",
            "item": "minecraft:iron_sword",
            "amount": 1,
            "icon": "minecraft:iron_sword"
          }
        ],
        "reward": {
          "title": "155 monedas",
          "amount": 155,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 9,
        "title": "DIA 9 - Alquimista",
        "tasks": [
          {
            "title": "Fabrica soporte de pociones",
            "item": "minecraft:brewing_stand",
            "amount": 1,
            "icon": "minecraft:brewing_stand"
          },
          {
            "title": "Consigue vara de blaze",
            "item": "minecraft:blaze_rod",
            "amount": 1,
            "icon": "minecraft:blaze_rod"
          },
          {
            "title": "Prepara pociones x3",
            "item": "minecraft:potion",
            "amount": 3,
            "icon": "minecraft:potion"
          },
          {
            "title": "Consigue polvo de glowstone x4",
            "item": "minecraft:glowstone_dust",
            "amount": 4,
            "icon": "minecraft:glowstone_dust"
          },
          {
            "title": "Pica redstone x4",
            "item": "minecraft:redstone",
            "amount": 4,
            "icon": "minecraft:redstone"
          }
        ],
        "reward": {
          "title": "170 monedas",
          "amount": 170,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 10,
        "title": "DIA 10 - Guardián de hierro",
        "tasks": [
          {
            "title": "Fabrica espada de hierro",
            "item": "minecraft:iron_sword",
            "amount": 1,
            "icon": "minecraft:iron_sword"
          },
          {
            "title": "Fabrica casco de hierro",
            "item": "minecraft:iron_helmet",
            "amount": 1,
            "icon": "minecraft:iron_helmet"
          },
          {
            "title": "Fabrica pechera de hierro",
            "item": "minecraft:iron_chestplate",
            "amount": 1,
            "icon": "minecraft:iron_chestplate"
          },
          {
            "title": "Fabrica pantalones de hierro",
            "item": "minecraft:iron_leggings",
            "amount": 1,
            "icon": "minecraft:iron_leggings"
          },
          {
            "title": "Fabrica botas de hierro",
            "item": "minecraft:iron_boots",
            "amount": 1,
            "icon": "minecraft:iron_boots"
          }
        ],
        "reward": {
          "title": "190 monedas",
          "amount": 190,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 11,
        "title": "DIA 11 - Filo de diamante",
        "tasks": [
          {
            "title": "Fabrica espada de diamante",
            "item": "minecraft:diamond_sword",
            "amount": 1,
            "icon": "minecraft:diamond_sword"
          },
          {
            "title": "Fabrica pico de diamante",
            "item": "minecraft:diamond_pickaxe",
            "amount": 1,
            "icon": "minecraft:diamond_pickaxe"
          },
          {
            "title": "Pica obsidiana x10",
            "item": "minecraft:obsidian",
            "amount": 10,
            "icon": "minecraft:obsidian"
          },
          {
            "title": "Consigue varas de blaze x3",
            "item": "minecraft:blaze_rod",
            "amount": 3,
            "icon": "minecraft:blaze_rod"
          },
          {
            "title": "Fabrica mechero",
            "item": "minecraft:flint_and_steel",
            "amount": 1,
            "icon": "minecraft:flint_and_steel"
          }
        ],
        "reward": {
          "title": "210 monedas",
          "amount": 210,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 12,
        "title": "DIA 12 - Cazador del Nether",
        "tasks": [
          {
            "title": "Consigue varas de blaze x5",
            "item": "minecraft:blaze_rod",
            "amount": 5,
            "icon": "minecraft:blaze_rod"
          },
          {
            "title": "Consigue lágrimas de ghast x2",
            "item": "minecraft:ghast_tear",
            "amount": 2,
            "icon": "minecraft:ghast_tear"
          },
          {
            "title": "Mata magma cubes x3",
            "item": "minecraft:magma_cream",
            "amount": 3,
            "icon": "minecraft:magma_cream"
          },
          {
            "title": "Consigue lingotes de oro x5",
            "item": "minecraft:gold_ingot",
            "amount": 5,
            "icon": "minecraft:gold_ingot"
          },
          {
            "title": "Fabrica casco de diamante",
            "item": "minecraft:diamond_helmet",
            "amount": 1,
            "icon": "minecraft:diamond_helmet"
          }
        ],
        "reward": {
          "title": "230 monedas",
          "amount": 230,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 13,
        "title": "DIA 13 - Esbirros oscuros",
        "tasks": [
          {
            "title": "Consigue cráneos de wither x2",
            "item": "minecraft:wither_skeleton_skull",
            "amount": 2,
            "icon": "minecraft:wither_skeleton_skull"
          },
          {
            "title": "Consigue carbón x16",
            "item": "minecraft:coal",
            "amount": 16,
            "icon": "minecraft:coal"
          },
          {
            "title": "Fabrica pechera de diamante",
            "item": "minecraft:diamond_chestplate",
            "amount": 1,
            "icon": "minecraft:diamond_chestplate"
          },
          {
            "title": "Fabrica espada de hierro",
            "item": "minecraft:iron_sword",
            "amount": 1,
            "icon": "minecraft:iron_sword"
          },
          {
            "title": "Fabrica un arco",
            "item": "minecraft:bow",
            "amount": 1,
            "icon": "minecraft:bow"
          }
        ],
        "reward": {
          "title": "250 monedas",
          "amount": 250,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 14,
        "title": "DIA 14 - Gran yunque",
        "tasks": [
          {
            "title": "Fabrica un yunque",
            "item": "minecraft:anvil",
            "amount": 1,
            "icon": "minecraft:anvil"
          },
          {
            "title": "Consigue libros encantados x2",
            "item": "minecraft:enchanted_book",
            "amount": 2,
            "icon": "minecraft:enchanted_book"
          },
          {
            "title": "Pica diamantes x2",
            "item": "minecraft:diamond",
            "amount": 2,
            "icon": "minecraft:diamond"
          },
          {
            "title": "Consigue lapislázuli x16",
            "item": "minecraft:lapis_lazuli",
            "amount": 16,
            "icon": "minecraft:lapis_lazuli"
          },
          {
            "title": "Fabrica pantalones de diamante",
            "item": "minecraft:diamond_leggings",
            "amount": 1,
            "icon": "minecraft:diamond_leggings"
          }
        ],
        "reward": {
          "title": "275 monedas",
          "amount": 275,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 15,
        "title": "DIA 15 - Señor de diamante",
        "tasks": [
          {
            "title": "Fabrica casco de diamante",
            "item": "minecraft:diamond_helmet",
            "amount": 1,
            "icon": "minecraft:diamond_helmet"
          },
          {
            "title": "Fabrica pechera de diamante",
            "item": "minecraft:diamond_chestplate",
            "amount": 1,
            "icon": "minecraft:diamond_chestplate"
          },
          {
            "title": "Fabrica botas de diamante",
            "item": "minecraft:diamond_boots",
            "amount": 1,
            "icon": "minecraft:diamond_boots"
          },
          {
            "title": "Fabrica espada de diamante",
            "item": "minecraft:diamond_sword",
            "amount": 1,
            "icon": "minecraft:diamond_sword"
          },
          {
            "title": "Fabrica cargas de fuego x4",
            "item": "minecraft:fire_charge",
            "amount": 4,
            "icon": "minecraft:fire_charge"
          }
        ],
        "reward": {
          "title": "300 monedas",
          "amount": 300,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 16,
        "title": "DIA 16 - Fragmento ancestral",
        "tasks": [
          {
            "title": "Pica debris ancestral x4",
            "item": "minecraft:ancient_debris",
            "amount": 4,
            "icon": "minecraft:ancient_debris"
          },
          {
            "title": "Consigue lingotes de oro x4",
            "item": "minecraft:gold_ingot",
            "amount": 4,
            "icon": "minecraft:gold_ingot"
          },
          {
            "title": "Fabrica lingote de netherite",
            "item": "minecraft:netherite_ingot",
            "amount": 1,
            "icon": "minecraft:netherite_ingot"
          },
          {
            "title": "Consigue molde de netherite",
            "item": "minecraft:netherite_upgrade_smithing_template",
            "amount": 1,
            "icon": "minecraft:netherite_upgrade_smithing_template"
          },
          {
            "title": "Fabrica espada de diamante",
            "item": "minecraft:diamond_sword",
            "amount": 1,
            "icon": "minecraft:diamond_sword"
          }
        ],
        "reward": {
          "title": "325 monedas",
          "amount": 325,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 17,
        "title": "DIA 17 - Espada de netherite",
        "tasks": [
          {
            "title": "Fabrica espada de netherite",
            "item": "minecraft:netherite_sword",
            "amount": 1,
            "icon": "minecraft:netherite_sword"
          },
          {
            "title": "Fabrica pechera de netherite",
            "item": "minecraft:netherite_chestplate",
            "amount": 1,
            "icon": "minecraft:netherite_chestplate"
          },
          {
            "title": "Consigue varas de blaze x8",
            "item": "minecraft:blaze_rod",
            "amount": 8,
            "icon": "minecraft:blaze_rod"
          },
          {
            "title": "Consigue lágrimas de ghast x3",
            "item": "minecraft:ghast_tear",
            "amount": 3,
            "icon": "minecraft:ghast_tear"
          },
          {
            "title": "Consigue cráneos de wither x2",
            "item": "minecraft:wither_skeleton_skull",
            "amount": 2,
            "icon": "minecraft:wither_skeleton_skull"
          }
        ],
        "reward": {
          "title": "350 monedas",
          "amount": 350,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 18,
        "title": "DIA 18 - Asalto al outpost",
        "tasks": [
          {
            "title": "Consigue ballestas x3",
            "item": "minecraft:crossbow",
            "amount": 3,
            "icon": "minecraft:crossbow"
          },
          {
            "title": "Consigue esmeraldas x4",
            "item": "minecraft:emerald",
            "amount": 4,
            "icon": "minecraft:emerald"
          },
          {
            "title": "Fabrica hacha de hierro",
            "item": "minecraft:iron_axe",
            "amount": 1,
            "icon": "minecraft:iron_axe"
          },
          {
            "title": "Consigue botellas ominosas x2",
            "item": "minecraft:ominous_bottle",
            "amount": 2,
            "icon": "minecraft:ominous_bottle"
          },
          {
            "title": "Consigue una montura",
            "item": "minecraft:saddle",
            "amount": 1,
            "icon": "minecraft:saddle"
          }
        ],
        "reward": {
          "title": "375 monedas",
          "amount": 375,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 19,
        "title": "DIA 19 - Totem de inmortalidad",
        "tasks": [
          {
            "title": "Consigue un totem de inmortalidad",
            "item": "minecraft:totem_of_undying",
            "amount": 1,
            "icon": "minecraft:totem_of_undying"
          },
          {
            "title": "Fabrica manzanas doradas x3",
            "item": "minecraft:golden_apple",
            "amount": 3,
            "icon": "minecraft:golden_apple"
          },
          {
            "title": "Fabrica hacha de diamante",
            "item": "minecraft:diamond_axe",
            "amount": 1,
            "icon": "minecraft:diamond_axe"
          },
          {
            "title": "Consigue esmeraldas x6",
            "item": "minecraft:emerald",
            "amount": 6,
            "icon": "minecraft:emerald"
          },
          {
            "title": "Fabrica un escudo",
            "item": "minecraft:shield",
            "amount": 1,
            "icon": "minecraft:shield"
          }
        ],
        "reward": {
          "title": "400 monedas",
          "amount": 400,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 20,
        "title": "DIA 20 - Comandante netherite",
        "tasks": [
          {
            "title": "Fabrica pantalones de netherite",
            "item": "minecraft:netherite_leggings",
            "amount": 1,
            "icon": "minecraft:netherite_leggings"
          },
          {
            "title": "Fabrica botas de netherite",
            "item": "minecraft:netherite_boots",
            "amount": 1,
            "icon": "minecraft:netherite_boots"
          },
          {
            "title": "Consigue un totem de inmortalidad",
            "item": "minecraft:totem_of_undying",
            "amount": 1,
            "icon": "minecraft:totem_of_undying"
          },
          {
            "title": "Fabrica bloques de hierro x4",
            "item": "minecraft:iron_block",
            "amount": 4,
            "icon": "minecraft:iron_block"
          },
          {
            "title": "Pica obsidiana x4",
            "item": "minecraft:obsidian",
            "amount": 4,
            "icon": "minecraft:obsidian"
          }
        ],
        "reward": {
          "title": "430 monedas",
          "amount": 430,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 21,
        "title": "DIA 21 - Cazador de cabezas",
        "tasks": [
          {
            "title": "Consigue cráneos de wither x3",
            "item": "minecraft:wither_skeleton_skull",
            "amount": 3,
            "icon": "minecraft:wither_skeleton_skull"
          },
          {
            "title": "Consigue arena de almas x4",
            "item": "minecraft:soul_sand",
            "amount": 4,
            "icon": "minecraft:soul_sand"
          },
          {
            "title": "Fabrica espada de netherite",
            "item": "minecraft:netherite_sword",
            "amount": 1,
            "icon": "minecraft:netherite_sword"
          },
          {
            "title": "Fabrica un arco",
            "item": "minecraft:bow",
            "amount": 1,
            "icon": "minecraft:bow"
          },
          {
            "title": "Fabrica flechas x48",
            "item": "minecraft:arrow",
            "amount": 48,
            "icon": "minecraft:arrow"
          }
        ],
        "reward": {
          "title": "465 monedas",
          "amount": 465,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 22,
        "title": "DIA 22 - La ira del Wither",
        "tasks": [
          {
            "title": "Derrota al Wither",
            "item": "minecraft:nether_star",
            "amount": 1,
            "icon": "minecraft:nether_star"
          },
          {
            "title": "Fabrica rodajas de melón x8",
            "item": "minecraft:glistering_melon_slice",
            "amount": 8,
            "icon": "minecraft:glistering_melon_slice"
          },
          {
            "title": "Fabrica manzanas doradas x4",
            "item": "minecraft:golden_apple",
            "amount": 4,
            "icon": "minecraft:golden_apple"
          },
          {
            "title": "Fabrica flechas espectrales x16",
            "item": "minecraft:spectral_arrow",
            "amount": 16,
            "icon": "minecraft:spectral_arrow"
          },
          {
            "title": "Fabrica pechera de netherite",
            "item": "minecraft:netherite_chestplate",
            "amount": 1,
            "icon": "minecraft:netherite_chestplate"
          }
        ],
        "reward": {
          "title": "500 monedas",
          "amount": 500,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 23,
        "title": "DIA 23 - Brillo de poder",
        "tasks": [
          {
            "title": "Fabrica un faro",
            "item": "minecraft:beacon",
            "amount": 1,
            "icon": "minecraft:beacon"
          },
          {
            "title": "Fabrica bloques de hierro x5",
            "item": "minecraft:iron_block",
            "amount": 5,
            "icon": "minecraft:iron_block"
          },
          {
            "title": "Fabrica bloques de oro x2",
            "item": "minecraft:gold_block",
            "amount": 2,
            "icon": "minecraft:gold_block"
          },
          {
            "title": "Fabrica bloque de esmeralda",
            "item": "minecraft:emerald_block",
            "amount": 1,
            "icon": "minecraft:emerald_block"
          },
          {
            "title": "Fabrica bloque de diamante",
            "item": "minecraft:diamond_block",
            "amount": 1,
            "icon": "minecraft:diamond_block"
          }
        ],
        "reward": {
          "title": "540 monedas",
          "amount": 540,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 24,
        "title": "DIA 24 - Monumento oceánico",
        "tasks": [
          {
            "title": "Consigue fragmentos de prismarina x10",
            "item": "minecraft:prismarine_shard",
            "amount": 10,
            "icon": "minecraft:prismarine_shard"
          },
          {
            "title": "Consigue cristales de prismarina x5",
            "item": "minecraft:prismarine_crystals",
            "amount": 5,
            "icon": "minecraft:prismarine_crystals"
          },
          {
            "title": "Consigue esponjas mojadas x4",
            "item": "minecraft:wet_sponge",
            "amount": 4,
            "icon": "minecraft:wet_sponge"
          },
          {
            "title": "Encuentra un corazón del mar",
            "item": "minecraft:heart_of_the_sea",
            "amount": 1,
            "icon": "minecraft:heart_of_the_sea"
          },
          {
            "title": "Consigue un tridente",
            "item": "minecraft:trident",
            "amount": 1,
            "icon": "minecraft:trident"
          }
        ],
        "reward": {
          "title": "580 monedas",
          "amount": 580,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 25,
        "title": "DIA 25 - Profundidades oscuras",
        "tasks": [
          {
            "title": "Consigue fragmentos de eco x3",
            "item": "minecraft:echo_shard",
            "amount": 3,
            "icon": "minecraft:echo_shard"
          },
          {
            "title": "Consigue bloques de sculk x16",
            "item": "minecraft:sculk",
            "amount": 16,
            "icon": "minecraft:sculk"
          },
          {
            "title": "Fabrica brújula de recuperación",
            "item": "minecraft:recovery_compass",
            "amount": 1,
            "icon": "minecraft:recovery_compass"
          },
          {
            "title": "Consigue lana x32 (anti-warden)",
            "item": "minecraft:wool",
            "amount": 32,
            "icon": "minecraft:wool"
          },
          {
            "title": "Fabrica espada de diamante",
            "item": "minecraft:diamond_sword",
            "amount": 1,
            "icon": "minecraft:diamond_sword"
          }
        ],
        "reward": {
          "title": "620 monedas",
          "amount": 620,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 26,
        "title": "DIA 26 - Portal al vacío",
        "tasks": [
          {
            "title": "Consigue perlas de ender x12",
            "item": "minecraft:ender_pearl",
            "amount": 12,
            "icon": "minecraft:ender_pearl"
          },
          {
            "title": "Consigue varas de blaze x6",
            "item": "minecraft:blaze_rod",
            "amount": 6,
            "icon": "minecraft:blaze_rod"
          },
          {
            "title": "Fabrica ojos de ender x6",
            "item": "minecraft:eye_of_ender",
            "amount": 6,
            "icon": "minecraft:eye_of_ender"
          },
          {
            "title": "Fabrica cofre de ender",
            "item": "minecraft:ender_chest",
            "amount": 1,
            "icon": "minecraft:ender_chest"
          },
          {
            "title": "Fabrica espada de netherite",
            "item": "minecraft:netherite_sword",
            "amount": 1,
            "icon": "minecraft:netherite_sword"
          }
        ],
        "reward": {
          "title": "720 monedas",
          "amount": 720,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 27,
        "title": "DIA 27 - Caballero alado",
        "tasks": [
          {
            "title": "Consigue élitros",
            "item": "minecraft:elytra",
            "amount": 1,
            "icon": "minecraft:elytra"
          },
          {
            "title": "Fabrica cohetes de fuegos x16",
            "item": "minecraft:firework_rocket",
            "amount": 16,
            "icon": "minecraft:firework_rocket"
          },
          {
            "title": "Consigue caparazones de shulker x2",
            "item": "minecraft:shulker_shell",
            "amount": 2,
            "icon": "minecraft:shulker_shell"
          },
          {
            "title": "Consigue membranas de phantom x4",
            "item": "minecraft:phantom_membrane",
            "amount": 4,
            "icon": "minecraft:phantom_membrane"
          },
          {
            "title": "Fabrica un arco",
            "item": "minecraft:bow",
            "amount": 1,
            "icon": "minecraft:bow"
          }
        ],
        "reward": {
          "title": "850 monedas",
          "amount": 850,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 28,
        "title": "DIA 28 - Cazador de dragones",
        "tasks": [
          {
            "title": "Fabrica cristales del End x4",
            "item": "minecraft:end_crystal",
            "amount": 4,
            "icon": "minecraft:end_crystal"
          },
          {
            "title": "Consigue cabeza de dragón",
            "item": "minecraft:dragon_head",
            "amount": 1,
            "icon": "minecraft:dragon_head"
          },
          {
            "title": "Fabrica flechas espectrales x32",
            "item": "minecraft:spectral_arrow",
            "amount": 32,
            "icon": "minecraft:spectral_arrow"
          },
          {
            "title": "Consigue membranas de phantom x6",
            "item": "minecraft:phantom_membrane",
            "amount": 6,
            "icon": "minecraft:phantom_membrane"
          },
          {
            "title": "Fabrica manzanas doradas x6",
            "item": "minecraft:golden_apple",
            "amount": 6,
            "icon": "minecraft:golden_apple"
          }
        ],
        "reward": {
          "title": "1000 monedas",
          "amount": 1000,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 29,
        "title": "DIA 29 - Arsenal definitivo",
        "tasks": [
          {
            "title": "Consigue un tridente",
            "item": "minecraft:trident",
            "amount": 1,
            "icon": "minecraft:trident"
          },
          {
            "title": "Fabrica una maza",
            "item": "minecraft:mace",
            "amount": 1,
            "icon": "minecraft:mace"
          },
          {
            "title": "Consigue manzanas de notch x2",
            "item": "minecraft:enchanted_golden_apple",
            "amount": 2,
            "icon": "minecraft:enchanted_golden_apple"
          },
          {
            "title": "Fabrica hacha de netherite",
            "item": "minecraft:netherite_axe",
            "amount": 1,
            "icon": "minecraft:netherite_axe"
          },
          {
            "title": "Consigue totems de inmortalidad x2",
            "item": "minecraft:totem_of_undying",
            "amount": 2,
            "icon": "minecraft:totem_of_undying"
          }
        ],
        "reward": {
          "title": "1150 monedas",
          "amount": 1150,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 30,
        "title": "DIA 30 - General legendario",
        "tasks": [
          {
            "title": "Consigue el huevo de dragón",
            "item": "minecraft:dragon_egg",
            "amount": 1,
            "icon": "minecraft:dragon_egg"
          },
          {
            "title": "Fabrica espada de netherite",
            "item": "minecraft:netherite_sword",
            "amount": 1,
            "icon": "minecraft:netherite_sword"
          },
          {
            "title": "Fabrica pechera de netherite",
            "item": "minecraft:netherite_chestplate",
            "amount": 1,
            "icon": "minecraft:netherite_chestplate"
          },
          {
            "title": "Consigue élitros",
            "item": "minecraft:elytra",
            "amount": 1,
            "icon": "minecraft:elytra"
          },
          {
            "title": "Fabrica un faro",
            "item": "minecraft:beacon",
            "amount": 1,
            "icon": "minecraft:beacon"
          }
        ],
        "reward": {
          "title": "1300 monedas",
          "amount": 1300,
          "icon": "saros__money_mod:euro_100"
        }
      }
    ]
  },
  {
    "id": "herrero",
    "name": "Herrero",
    "emoji": "🔨",
    "color": "#FFA726",
    "days": [
      {
        "day": 1,
        "title": "DIA 1 - Fundición inicial",
        "tasks": [
          {
            "title": "Recolecta carbón x3",
            "item": "minecraft:coal",
            "amount": 3,
            "icon": "minecraft:coal"
          },
          {
            "title": "Fabrica un horno x1",
            "item": "minecraft:furnace",
            "amount": 1,
            "icon": "minecraft:furnace"
          },
          {
            "title": "Mina mineral de hierro x4",
            "item": "minecraft:iron_ore",
            "amount": 4,
            "icon": "minecraft:iron_ore"
          },
          {
            "title": "Mina mineral de cobre x3",
            "item": "minecraft:copper_ore",
            "amount": 3,
            "icon": "minecraft:copper_ore"
          },
          {
            "title": "Fabrica pico de piedra x1",
            "item": "minecraft:stone_pickaxe",
            "amount": 1,
            "icon": "minecraft:stone_pickaxe"
          }
        ],
        "reward": {
          "title": "65 monedas",
          "amount": 65,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 2,
        "title": "DIA 2 - Herramientas de piedra",
        "tasks": [
          {
            "title": "Fabrica hacha de piedra x1",
            "item": "minecraft:stone_axe",
            "amount": 1,
            "icon": "minecraft:stone_axe"
          },
          {
            "title": "Fabrica pala de piedra x1",
            "item": "minecraft:stone_shovel",
            "amount": 1,
            "icon": "minecraft:stone_shovel"
          },
          {
            "title": "Fabrica azada de piedra x1",
            "item": "minecraft:stone_hoe",
            "amount": 1,
            "icon": "minecraft:stone_hoe"
          },
          {
            "title": "Fabrica espada de piedra x1",
            "item": "minecraft:stone_sword",
            "amount": 1,
            "icon": "minecraft:stone_sword"
          },
          {
            "title": "Fabrica carbón vegetal x4",
            "item": "minecraft:charcoal",
            "amount": 4,
            "icon": "minecraft:charcoal"
          }
        ],
        "reward": {
          "title": "75 monedas",
          "amount": 75,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 3,
        "title": "DIA 3 - Hierro crudo",
        "tasks": [
          {
            "title": "Recolecta hierro crudo x5",
            "item": "minecraft:raw_iron",
            "amount": 5,
            "icon": "minecraft:raw_iron"
          },
          {
            "title": "Recolecta cobre crudo x4",
            "item": "minecraft:raw_copper",
            "amount": 4,
            "icon": "minecraft:raw_copper"
          },
          {
            "title": "Recolecta oro crudo x3",
            "item": "minecraft:raw_gold",
            "amount": 3,
            "icon": "minecraft:raw_gold"
          },
          {
            "title": "Funde lingotes de hierro x3",
            "item": "minecraft:iron_ingot",
            "amount": 3,
            "icon": "minecraft:iron_ingot"
          },
          {
            "title": "Compacta bloque de hierro crudo x1",
            "item": "minecraft:raw_iron_block",
            "amount": 1,
            "icon": "minecraft:raw_iron_block"
          }
        ],
        "reward": {
          "title": "85 monedas",
          "amount": 85,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 4,
        "title": "DIA 4 - Mesa de herrería",
        "tasks": [
          {
            "title": "Fabrica mesa de herrería x1",
            "item": "minecraft:smithing_table",
            "amount": 1,
            "icon": "minecraft:smithing_table"
          },
          {
            "title": "Forja espada de hierro x1",
            "item": "minecraft:iron_sword",
            "amount": 1,
            "icon": "minecraft:iron_sword"
          },
          {
            "title": "Forja pico de hierro x1",
            "item": "minecraft:iron_pickaxe",
            "amount": 1,
            "icon": "minecraft:iron_pickaxe"
          },
          {
            "title": "Forja hacha de hierro x1",
            "item": "minecraft:iron_axe",
            "amount": 1,
            "icon": "minecraft:iron_axe"
          },
          {
            "title": "Funde lingotes de cobre x3",
            "item": "minecraft:copper_ingot",
            "amount": 3,
            "icon": "minecraft:copper_ingot"
          }
        ],
        "reward": {
          "title": "95 monedas",
          "amount": 95,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 5,
        "title": "DIA 5 - Primera armadura",
        "tasks": [
          {
            "title": "Forja casco de hierro x1",
            "item": "minecraft:iron_helmet",
            "amount": 1,
            "icon": "minecraft:iron_helmet"
          },
          {
            "title": "Forja pechera de hierro x1",
            "item": "minecraft:iron_chestplate",
            "amount": 1,
            "icon": "minecraft:iron_chestplate"
          },
          {
            "title": "Forja grebas de hierro x1",
            "item": "minecraft:iron_leggings",
            "amount": 1,
            "icon": "minecraft:iron_leggings"
          },
          {
            "title": "Forja botas de hierro x1",
            "item": "minecraft:iron_boots",
            "amount": 1,
            "icon": "minecraft:iron_boots"
          },
          {
            "title": "Compacta bloque de hierro x1",
            "item": "minecraft:iron_block",
            "amount": 1,
            "icon": "minecraft:iron_block"
          }
        ],
        "reward": {
          "title": "110 monedas",
          "amount": 110,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 6,
        "title": "DIA 6 - Utensilios de hierro",
        "tasks": [
          {
            "title": "Forja tijeras x1",
            "item": "minecraft:shears",
            "amount": 1,
            "icon": "minecraft:shears"
          },
          {
            "title": "Forja cubos x2",
            "item": "minecraft:bucket",
            "amount": 2,
            "icon": "minecraft:bucket"
          },
          {
            "title": "Forja mechero x1",
            "item": "minecraft:flint_and_steel",
            "amount": 1,
            "icon": "minecraft:flint_and_steel"
          },
          {
            "title": "Forja puertas de hierro x2",
            "item": "minecraft:iron_door",
            "amount": 2,
            "icon": "minecraft:iron_door"
          },
          {
            "title": "Forja pala de hierro x1",
            "item": "minecraft:iron_shovel",
            "amount": 1,
            "icon": "minecraft:iron_shovel"
          }
        ],
        "reward": {
          "title": "125 monedas",
          "amount": 125,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 7,
        "title": "DIA 7 - Barras y trampas",
        "tasks": [
          {
            "title": "Forja barrotes de hierro x8",
            "item": "minecraft:iron_bars",
            "amount": 8,
            "icon": "minecraft:iron_bars"
          },
          {
            "title": "Forja trampillas de hierro x2",
            "item": "minecraft:iron_trapdoor",
            "amount": 2,
            "icon": "minecraft:iron_trapdoor"
          },
          {
            "title": "Forja ganchos de cuerda x3",
            "item": "minecraft:tripwire_hook",
            "amount": 3,
            "icon": "minecraft:tripwire_hook"
          },
          {
            "title": "Forja placa de presión pesada x1",
            "item": "minecraft:heavy_weighted_pressure_plate",
            "amount": 1,
            "icon": "minecraft:heavy_weighted_pressure_plate"
          },
          {
            "title": "Forja azada de hierro x1",
            "item": "minecraft:iron_hoe",
            "amount": 1,
            "icon": "minecraft:iron_hoe"
          }
        ],
        "reward": {
          "title": "140 monedas",
          "amount": 140,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 8,
        "title": "DIA 8 - Combustible avanzado",
        "tasks": [
          {
            "title": "Fabrica alto horno x1",
            "item": "minecraft:blast_furnace",
            "amount": 1,
            "icon": "minecraft:blast_furnace"
          },
          {
            "title": "Recolecta cubo de lava x1",
            "item": "minecraft:lava_bucket",
            "amount": 1,
            "icon": "minecraft:lava_bucket"
          },
          {
            "title": "Compacta bloque de carbón x1",
            "item": "minecraft:coal_block",
            "amount": 1,
            "icon": "minecraft:coal_block"
          },
          {
            "title": "Funde piedra lisa x16",
            "item": "minecraft:smooth_stone",
            "amount": 16,
            "icon": "minecraft:smooth_stone"
          },
          {
            "title": "Funde vidrio x8",
            "item": "minecraft:glass",
            "amount": 8,
            "icon": "minecraft:glass"
          }
        ],
        "reward": {
          "title": "155 monedas",
          "amount": 155,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 9,
        "title": "DIA 9 - Cadenas y raíles",
        "tasks": [
          {
            "title": "Forja cadenas x8",
            "item": "minecraft:chain",
            "amount": 8,
            "icon": "minecraft:chain"
          },
          {
            "title": "Forja raíles x16",
            "item": "minecraft:rail",
            "amount": 16,
            "icon": "minecraft:rail"
          },
          {
            "title": "Forja vagoneta x1",
            "item": "minecraft:minecart",
            "amount": 1,
            "icon": "minecraft:minecart"
          },
          {
            "title": "Forja tolva x1",
            "item": "minecraft:hopper",
            "amount": 1,
            "icon": "minecraft:hopper"
          },
          {
            "title": "Forja raíles propulsores x6",
            "item": "minecraft:powered_rail",
            "amount": 6,
            "icon": "minecraft:powered_rail"
          }
        ],
        "reward": {
          "title": "170 monedas",
          "amount": 170,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 10,
        "title": "DIA 10 - Artesano completo",
        "tasks": [
          {
            "title": "Fabrica piedra de afilar x1",
            "item": "minecraft:grindstone",
            "amount": 1,
            "icon": "minecraft:grindstone"
          },
          {
            "title": "Forja faroles x4",
            "item": "minecraft:lantern",
            "amount": 4,
            "icon": "minecraft:lantern"
          },
          {
            "title": "Forja brújula x1",
            "item": "minecraft:compass",
            "amount": 1,
            "icon": "minecraft:compass"
          },
          {
            "title": "Forja raíles detectores x4",
            "item": "minecraft:detector_rail",
            "amount": 4,
            "icon": "minecraft:detector_rail"
          },
          {
            "title": "Forja raíles activadores x4",
            "item": "minecraft:activator_rail",
            "amount": 4,
            "icon": "minecraft:activator_rail"
          }
        ],
        "reward": {
          "title": "190 monedas",
          "amount": 190,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 11,
        "title": "DIA 11 - El brillo del oro",
        "tasks": [
          {
            "title": "Mina mineral de oro x5",
            "item": "minecraft:gold_ore",
            "amount": 5,
            "icon": "minecraft:gold_ore"
          },
          {
            "title": "Funde lingotes de oro x5",
            "item": "minecraft:gold_ingot",
            "amount": 5,
            "icon": "minecraft:gold_ingot"
          },
          {
            "title": "Compacta bloque de oro x1",
            "item": "minecraft:gold_block",
            "amount": 1,
            "icon": "minecraft:gold_block"
          },
          {
            "title": "Forja espada de oro x1",
            "item": "minecraft:gold_sword",
            "amount": 1,
            "icon": "minecraft:gold_sword"
          },
          {
            "title": "Recolecta netherrack x16",
            "item": "minecraft:netherrack",
            "amount": 16,
            "icon": "minecraft:netherrack"
          }
        ],
        "reward": {
          "title": "210 monedas",
          "amount": 210,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 12,
        "title": "DIA 12 - Herramientas doradas",
        "tasks": [
          {
            "title": "Forja pico de oro x1",
            "item": "minecraft:gold_pickaxe",
            "amount": 1,
            "icon": "minecraft:gold_pickaxe"
          },
          {
            "title": "Forja hacha de oro x1",
            "item": "minecraft:gold_axe",
            "amount": 1,
            "icon": "minecraft:gold_axe"
          },
          {
            "title": "Forja pala de oro x1",
            "item": "minecraft:gold_shovel",
            "amount": 1,
            "icon": "minecraft:gold_shovel"
          },
          {
            "title": "Forja azada de oro x1",
            "item": "minecraft:gold_hoe",
            "amount": 1,
            "icon": "minecraft:gold_hoe"
          },
          {
            "title": "Compacta bloque de oro crudo x1",
            "item": "minecraft:raw_gold_block",
            "amount": 1,
            "icon": "minecraft:raw_gold_block"
          }
        ],
        "reward": {
          "title": "230 monedas",
          "amount": 230,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 13,
        "title": "DIA 13 - La era del diamante",
        "tasks": [
          {
            "title": "Mina mineral de diamante x3",
            "item": "minecraft:diamond_ore",
            "amount": 3,
            "icon": "minecraft:diamond_ore"
          },
          {
            "title": "Recolecta diamantes x3",
            "item": "minecraft:diamond",
            "amount": 3,
            "icon": "minecraft:diamond"
          },
          {
            "title": "Forja pico de diamante x1",
            "item": "minecraft:diamond_pickaxe",
            "amount": 1,
            "icon": "minecraft:diamond_pickaxe"
          },
          {
            "title": "Forja espada de diamante x1",
            "item": "minecraft:diamond_sword",
            "amount": 1,
            "icon": "minecraft:diamond_sword"
          },
          {
            "title": "Mina diamante en pizarra x3",
            "item": "minecraft:deepslate_diamond_ore",
            "amount": 3,
            "icon": "minecraft:deepslate_diamond_ore"
          }
        ],
        "reward": {
          "title": "250 monedas",
          "amount": 250,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 14,
        "title": "DIA 14 - Armadura diamantina",
        "tasks": [
          {
            "title": "Forja casco de diamante x1",
            "item": "minecraft:diamond_helmet",
            "amount": 1,
            "icon": "minecraft:diamond_helmet"
          },
          {
            "title": "Forja pechera de diamante x1",
            "item": "minecraft:diamond_chestplate",
            "amount": 1,
            "icon": "minecraft:diamond_chestplate"
          },
          {
            "title": "Forja grebas de diamante x1",
            "item": "minecraft:diamond_leggings",
            "amount": 1,
            "icon": "minecraft:diamond_leggings"
          },
          {
            "title": "Forja botas de diamante x1",
            "item": "minecraft:diamond_boots",
            "amount": 1,
            "icon": "minecraft:diamond_boots"
          },
          {
            "title": "Forja casco de oro x1",
            "item": "minecraft:gold_helmet",
            "amount": 1,
            "icon": "minecraft:gold_helmet"
          }
        ],
        "reward": {
          "title": "275 monedas",
          "amount": 275,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 15,
        "title": "DIA 15 - Reparación y encantamiento",
        "tasks": [
          {
            "title": "Fabrica yunque x1",
            "item": "minecraft:anvil",
            "amount": 1,
            "icon": "minecraft:anvil"
          },
          {
            "title": "Forja hacha de diamante x1",
            "item": "minecraft:diamond_axe",
            "amount": 1,
            "icon": "minecraft:diamond_axe"
          },
          {
            "title": "Forja pala de diamante x1",
            "item": "minecraft:diamond_shovel",
            "amount": 1,
            "icon": "minecraft:diamond_shovel"
          },
          {
            "title": "Forja azada de diamante x1",
            "item": "minecraft:diamond_hoe",
            "amount": 1,
            "icon": "minecraft:diamond_hoe"
          },
          {
            "title": "Mina mineral de esmeralda x3",
            "item": "minecraft:emerald_ore",
            "amount": 3,
            "icon": "minecraft:emerald_ore"
          }
        ],
        "reward": {
          "title": "300 monedas",
          "amount": 300,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 16,
        "title": "DIA 16 - El Nether llama",
        "tasks": [
          {
            "title": "Recolecta pepitas de oro x15",
            "item": "minecraft:gold_nugget",
            "amount": 15,
            "icon": "minecraft:gold_nugget"
          },
          {
            "title": "Mina mineral de cuarzo x8",
            "item": "minecraft:nether_quartz_ore",
            "amount": 8,
            "icon": "minecraft:nether_quartz_ore"
          },
          {
            "title": "Recolecta cuarzo del Nether x8",
            "item": "minecraft:nether_quartz",
            "amount": 8,
            "icon": "minecraft:nether_quartz"
          },
          {
            "title": "Compacta bloque de cuarzo x2",
            "item": "minecraft:quartz_block",
            "amount": 2,
            "icon": "minecraft:quartz_block"
          },
          {
            "title": "Forja pechera de oro x1",
            "item": "minecraft:gold_chestplate",
            "amount": 1,
            "icon": "minecraft:gold_chestplate"
          }
        ],
        "reward": {
          "title": "325 monedas",
          "amount": 325,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 17,
        "title": "DIA 17 - Escombros antiguos",
        "tasks": [
          {
            "title": "Mina escombros antiguos x2",
            "item": "minecraft:ancient_debris",
            "amount": 2,
            "icon": "minecraft:ancient_debris"
          },
          {
            "title": "Funde chatarra de netherita x2",
            "item": "minecraft:netherite_scrap",
            "amount": 2,
            "icon": "minecraft:netherite_scrap"
          },
          {
            "title": "Recolecta crema de magma x4",
            "item": "minecraft:magma_cream",
            "amount": 4,
            "icon": "minecraft:magma_cream"
          },
          {
            "title": "Fabrica ladrillos del Nether x12",
            "item": "minecraft:nether_bricks",
            "amount": 12,
            "icon": "minecraft:nether_bricks"
          },
          {
            "title": "Forja botas de oro x1",
            "item": "minecraft:gold_boots",
            "amount": 1,
            "icon": "minecraft:gold_boots"
          }
        ],
        "reward": {
          "title": "350 monedas",
          "amount": 350,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 18,
        "title": "DIA 18 - Lingote de netherita",
        "tasks": [
          {
            "title": "Forja lingote de netherita x1",
            "item": "minecraft:netherite_ingot",
            "amount": 1,
            "icon": "minecraft:netherite_ingot"
          },
          {
            "title": "Mina oro en pizarra profunda x4",
            "item": "minecraft:deepslate_gold_ore",
            "amount": 4,
            "icon": "minecraft:deepslate_gold_ore"
          },
          {
            "title": "Mina hierro en pizarra profunda x5",
            "item": "minecraft:deepslate_iron_ore",
            "amount": 5,
            "icon": "minecraft:deepslate_iron_ore"
          },
          {
            "title": "Mina cobre en pizarra profunda x3",
            "item": "minecraft:deepslate_copper_ore",
            "amount": 3,
            "icon": "minecraft:deepslate_copper_ore"
          },
          {
            "title": "Fabrica yunque mellado x1",
            "item": "minecraft:chipped_anvil",
            "amount": 1,
            "icon": "minecraft:chipped_anvil"
          }
        ],
        "reward": {
          "title": "375 monedas",
          "amount": 375,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 19,
        "title": "DIA 19 - Mejora a netherita",
        "tasks": [
          {
            "title": "Consigue plantilla de mejora x1",
            "item": "minecraft:netherite_upgrade_smithing_template",
            "amount": 1,
            "icon": "minecraft:netherite_upgrade_smithing_template"
          },
          {
            "title": "Mejora pico a netherita x1",
            "item": "minecraft:netherite_pickaxe",
            "amount": 1,
            "icon": "minecraft:netherite_pickaxe"
          },
          {
            "title": "Mejora espada a netherita x1",
            "item": "minecraft:netherite_sword",
            "amount": 1,
            "icon": "minecraft:netherite_sword"
          },
          {
            "title": "Recolecta obsidiana x8",
            "item": "minecraft:obsidian",
            "amount": 8,
            "icon": "minecraft:obsidian"
          },
          {
            "title": "Mina mineral de oro del Nether x8",
            "item": "minecraft:nether_gold_ore",
            "amount": 8,
            "icon": "minecraft:nether_gold_ore"
          }
        ],
        "reward": {
          "title": "400 monedas",
          "amount": 400,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 20,
        "title": "DIA 20 - Armadura de netherita I",
        "tasks": [
          {
            "title": "Mejora casco a netherita x1",
            "item": "minecraft:netherite_helmet",
            "amount": 1,
            "icon": "minecraft:netherite_helmet"
          },
          {
            "title": "Mejora botas a netherita x1",
            "item": "minecraft:netherite_boots",
            "amount": 1,
            "icon": "minecraft:netherite_boots"
          },
          {
            "title": "Recolecta obsidiana llorosa x4",
            "item": "minecraft:crying_obsidian",
            "amount": 4,
            "icon": "minecraft:crying_obsidian"
          },
          {
            "title": "Recolecta varas de blaze x4",
            "item": "minecraft:blaze_rod",
            "amount": 4,
            "icon": "minecraft:blaze_rod"
          },
          {
            "title": "Forja grebas de oro x1",
            "item": "minecraft:gold_leggings",
            "amount": 1,
            "icon": "minecraft:gold_leggings"
          }
        ],
        "reward": {
          "title": "430 monedas",
          "amount": 430,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 21,
        "title": "DIA 21 - Armadura de netherita II",
        "tasks": [
          {
            "title": "Mejora pechera a netherita x1",
            "item": "minecraft:netherite_chestplate",
            "amount": 1,
            "icon": "minecraft:netherite_chestplate"
          },
          {
            "title": "Mejora grebas a netherita x1",
            "item": "minecraft:netherite_leggings",
            "amount": 1,
            "icon": "minecraft:netherite_leggings"
          },
          {
            "title": "Mejora hacha a netherita x1",
            "item": "minecraft:netherite_axe",
            "amount": 1,
            "icon": "minecraft:netherite_axe"
          },
          {
            "title": "Mejora pala a netherita x1",
            "item": "minecraft:netherite_shovel",
            "amount": 1,
            "icon": "minecraft:netherite_shovel"
          },
          {
            "title": "Mejora azada a netherita x1",
            "item": "minecraft:netherite_hoe",
            "amount": 1,
            "icon": "minecraft:netherite_hoe"
          }
        ],
        "reward": {
          "title": "465 monedas",
          "amount": 465,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 22,
        "title": "DIA 22 - Plantillas de herrería I",
        "tasks": [
          {
            "title": "Consigue molde de centinela x1",
            "item": "minecraft:sentry_armor_trim_smithing_template",
            "amount": 1,
            "icon": "minecraft:sentry_armor_trim_smithing_template"
          },
          {
            "title": "Consigue molde de duna x1",
            "item": "minecraft:dune_armor_trim_smithing_template",
            "amount": 1,
            "icon": "minecraft:dune_armor_trim_smithing_template"
          },
          {
            "title": "Consigue molde de costa x1",
            "item": "minecraft:coast_armor_trim_smithing_template",
            "amount": 1,
            "icon": "minecraft:coast_armor_trim_smithing_template"
          },
          {
            "title": "Consigue molde salvaje x1",
            "item": "minecraft:wild_armor_trim_smithing_template",
            "amount": 1,
            "icon": "minecraft:wild_armor_trim_smithing_template"
          },
          {
            "title": "Consigue molde de warden x1",
            "item": "minecraft:ward_armor_trim_smithing_template",
            "amount": 1,
            "icon": "minecraft:ward_armor_trim_smithing_template"
          }
        ],
        "reward": {
          "title": "500 monedas",
          "amount": 500,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 23,
        "title": "DIA 23 - Plantillas de herrería II",
        "tasks": [
          {
            "title": "Consigue molde de ojo x1",
            "item": "minecraft:eye_armor_trim_smithing_template",
            "amount": 1,
            "icon": "minecraft:eye_armor_trim_smithing_template"
          },
          {
            "title": "Consigue molde de vex x1",
            "item": "minecraft:vex_armor_trim_smithing_template",
            "amount": 1,
            "icon": "minecraft:vex_armor_trim_smithing_template"
          },
          {
            "title": "Consigue molde de marea x1",
            "item": "minecraft:tide_armor_trim_smithing_template",
            "amount": 1,
            "icon": "minecraft:tide_armor_trim_smithing_template"
          },
          {
            "title": "Consigue molde de hocico x1",
            "item": "minecraft:snout_armor_trim_smithing_template",
            "amount": 1,
            "icon": "minecraft:snout_armor_trim_smithing_template"
          },
          {
            "title": "Consigue molde de costilla x1",
            "item": "minecraft:rib_armor_trim_smithing_template",
            "amount": 1,
            "icon": "minecraft:rib_armor_trim_smithing_template"
          }
        ],
        "reward": {
          "title": "535 monedas",
          "amount": 535,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 24,
        "title": "DIA 24 - Plantillas de herrería III",
        "tasks": [
          {
            "title": "Consigue molde de aguja x1",
            "item": "minecraft:spire_armor_trim_smithing_template",
            "amount": 1,
            "icon": "minecraft:spire_armor_trim_smithing_template"
          },
          {
            "title": "Consigue molde de guía x1",
            "item": "minecraft:wayfinder_armor_trim_smithing_template",
            "amount": 1,
            "icon": "minecraft:wayfinder_armor_trim_smithing_template"
          },
          {
            "title": "Consigue molde de elevación x1",
            "item": "minecraft:raiser_armor_trim_smithing_template",
            "amount": 1,
            "icon": "minecraft:raiser_armor_trim_smithing_template"
          },
          {
            "title": "Consigue molde de moldeador x1",
            "item": "minecraft:shaper_armor_trim_smithing_template",
            "amount": 1,
            "icon": "minecraft:shaper_armor_trim_smithing_template"
          },
          {
            "title": "Consigue molde de anfitrión x1",
            "item": "minecraft:host_armor_trim_smithing_template",
            "amount": 1,
            "icon": "minecraft:host_armor_trim_smithing_template"
          }
        ],
        "reward": {
          "title": "575 monedas",
          "amount": 575,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 25,
        "title": "DIA 25 - Yunque legendario",
        "tasks": [
          {
            "title": "Fabrica yunque dañado x1",
            "item": "minecraft:damaged_anvil",
            "amount": 1,
            "icon": "minecraft:damaged_anvil"
          },
          {
            "title": "Consigue molde de silencio x1",
            "item": "minecraft:silence_armor_trim_smithing_template",
            "amount": 1,
            "icon": "minecraft:silence_armor_trim_smithing_template"
          },
          {
            "title": "Recolecta esmeraldas x4",
            "item": "minecraft:emerald",
            "amount": 4,
            "icon": "minecraft:emerald"
          },
          {
            "title": "Compacta bloques de diamante x2",
            "item": "minecraft:diamond_block",
            "amount": 2,
            "icon": "minecraft:diamond_block"
          },
          {
            "title": "Recolecta lapislázuli x16",
            "item": "minecraft:lapis_lazuli",
            "amount": 16,
            "icon": "minecraft:lapis_lazuli"
          }
        ],
        "reward": {
          "title": "620 monedas",
          "amount": 620,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 26,
        "title": "DIA 26 - La forja del beacon",
        "tasks": [
          {
            "title": "Fabrica faro x1",
            "item": "minecraft:beacon",
            "amount": 1,
            "icon": "minecraft:beacon"
          },
          {
            "title": "Consigue estrella del Nether x1",
            "item": "minecraft:nether_star",
            "amount": 1,
            "icon": "minecraft:nether_star"
          },
          {
            "title": "Compacta bloques de esmeralda x2",
            "item": "minecraft:emerald_block",
            "amount": 2,
            "icon": "minecraft:emerald_block"
          },
          {
            "title": "Compacta bloques de amatista x2",
            "item": "minecraft:amethyst_block",
            "amount": 2,
            "icon": "minecraft:amethyst_block"
          },
          {
            "title": "Compacta bloques de lapislázuli x3",
            "item": "minecraft:lapis_block",
            "amount": 3,
            "icon": "minecraft:lapis_block"
          }
        ],
        "reward": {
          "title": "710 monedas",
          "amount": 710,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 27,
        "title": "DIA 27 - Metales preciosos",
        "tasks": [
          {
            "title": "Compacta bloques de cobre x4",
            "item": "minecraft:copper_block",
            "amount": 4,
            "icon": "minecraft:copper_block"
          },
          {
            "title": "Compacta bloques de redstone x3",
            "item": "minecraft:redstone_block",
            "amount": 3,
            "icon": "minecraft:redstone_block"
          },
          {
            "title": "Forja pararrayos x2",
            "item": "minecraft:lightning_rod",
            "amount": 2,
            "icon": "minecraft:lightning_rod"
          },
          {
            "title": "Forja catalejo x1",
            "item": "minecraft:spyglass",
            "amount": 1,
            "icon": "minecraft:spyglass"
          },
          {
            "title": "Forja pincel arqueológico x1",
            "item": "minecraft:brush",
            "amount": 1,
            "icon": "minecraft:brush"
          }
        ],
        "reward": {
          "title": "830 monedas",
          "amount": 830,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 28,
        "title": "DIA 28 - Infraestructura de forja",
        "tasks": [
          {
            "title": "Fabrica mesa de encantamientos x1",
            "item": "minecraft:enchanting_table",
            "amount": 1,
            "icon": "minecraft:enchanting_table"
          },
          {
            "title": "Fabrica estanterías x15",
            "item": "minecraft:bookshelf",
            "amount": 15,
            "icon": "minecraft:bookshelf"
          },
          {
            "title": "Forja calderos x2",
            "item": "minecraft:cauldron",
            "amount": 2,
            "icon": "minecraft:cauldron"
          },
          {
            "title": "Forja escudo x1",
            "item": "minecraft:shield",
            "amount": 1,
            "icon": "minecraft:shield"
          },
          {
            "title": "Forja pistones x4",
            "item": "minecraft:piston",
            "amount": 4,
            "icon": "minecraft:piston"
          }
        ],
        "reward": {
          "title": "980 monedas",
          "amount": 980,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 29,
        "title": "DIA 29 - Armaduras especiales",
        "tasks": [
          {
            "title": "Forja armadura de caballo de hierro x1",
            "item": "minecraft:iron_horse_armor",
            "amount": 1,
            "icon": "minecraft:iron_horse_armor"
          },
          {
            "title": "Forja armadura de caballo de oro x1",
            "item": "minecraft:golden_horse_armor",
            "amount": 1,
            "icon": "minecraft:golden_horse_armor"
          },
          {
            "title": "Forja armadura de caballo de diamante x1",
            "item": "minecraft:diamond_horse_armor",
            "amount": 1,
            "icon": "minecraft:diamond_horse_armor"
          },
          {
            "title": "Consigue armadura de caballo de cuero x1",
            "item": "minecraft:leather_horse_armor",
            "amount": 1,
            "icon": "minecraft:leather_horse_armor"
          },
          {
            "title": "Consigue montura x1",
            "item": "minecraft:saddle",
            "amount": 1,
            "icon": "minecraft:saddle"
          }
        ],
        "reward": {
          "title": "1130 monedas",
          "amount": 1130,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 30,
        "title": "DIA 30 - Forjador legendario",
        "tasks": [
          {
            "title": "Compacta bloques de netherita x2",
            "item": "minecraft:netherite_block",
            "amount": 2,
            "icon": "minecraft:netherite_block"
          },
          {
            "title": "Forja ballesta x1",
            "item": "minecraft:crossbow",
            "amount": 1,
            "icon": "minecraft:crossbow"
          },
          {
            "title": "Forja etiquetas x3",
            "item": "minecraft:name_tag",
            "amount": 3,
            "icon": "minecraft:name_tag"
          },
          {
            "title": "Forja riendas x2",
            "item": "minecraft:lead",
            "amount": 2,
            "icon": "minecraft:lead"
          },
          {
            "title": "Forja campana x1",
            "item": "minecraft:bell",
            "amount": 1,
            "icon": "minecraft:bell"
          }
        ],
        "reward": {
          "title": "1300 monedas",
          "amount": 1300,
          "icon": "saros__money_mod:euro_100"
        }
      }
    ]
  },
  {
    "id": "ingeniero",
    "name": "Ingeniero",
    "emoji": "🔧",
    "color": "#26C6DA",
    "days": [
      {
        "day": 1,
        "title": "DIA 1 - Jornada 1",
        "tasks": [
          {
            "title": "Mina redstone x5",
            "item": "minecraft:redstone",
            "amount": 5,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Fabrica antorcha redstone x2",
            "item": "minecraft:redstone_torch",
            "amount": 2,
            "icon": "minecraft:redstone_torch"
          },
          {
            "title": "Craftea palanca x1",
            "item": "minecraft:lever",
            "amount": 1,
            "icon": "minecraft:lever"
          },
          {
            "title": "Fabrica lámpara redstone x2",
            "item": "minecraft:redstone_lamp",
            "amount": 2,
            "icon": "minecraft:redstone_lamp"
          },
          {
            "title": "Mina piedra x10",
            "item": "minecraft:stone",
            "amount": 10,
            "icon": "minecraft:stone"
          }
        ],
        "reward": {
          "title": "65 monedas",
          "amount": 65,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 2,
        "title": "DIA 2 - Jornada 2",
        "tasks": [
          {
            "title": "Fabrica botón de piedra x2",
            "item": "minecraft:stone_button",
            "amount": 2,
            "icon": "minecraft:stone_button"
          },
          {
            "title": "Craftea placa presión roble x1",
            "item": "minecraft:oak_pressure_plate",
            "amount": 1,
            "icon": "minecraft:oak_pressure_plate"
          },
          {
            "title": "Mina redstone x6",
            "item": "minecraft:redstone",
            "amount": 6,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Fabrica puerta de hierro x1",
            "item": "minecraft:iron_door",
            "amount": 1,
            "icon": "minecraft:iron_door"
          },
          {
            "title": "Mina piedra x12",
            "item": "minecraft:stone",
            "amount": 12,
            "icon": "minecraft:stone"
          }
        ],
        "reward": {
          "title": "76 monedas",
          "amount": 76,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 3,
        "title": "DIA 3 - Jornada 3",
        "tasks": [
          {
            "title": "Craftea repetidor x3",
            "item": "minecraft:repeater",
            "amount": 3,
            "icon": "minecraft:repeater"
          },
          {
            "title": "Mina redstone x8",
            "item": "minecraft:redstone",
            "amount": 8,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Fabrica antorcha redstone x4",
            "item": "minecraft:redstone_torch",
            "amount": 4,
            "icon": "minecraft:redstone_torch"
          },
          {
            "title": "Mina piedra x14",
            "item": "minecraft:stone",
            "amount": 14,
            "icon": "minecraft:stone"
          },
          {
            "title": "Fabrica lámpara redstone x3",
            "item": "minecraft:redstone_lamp",
            "amount": 3,
            "icon": "minecraft:redstone_lamp"
          }
        ],
        "reward": {
          "title": "87 monedas",
          "amount": 87,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 4,
        "title": "DIA 4 - Jornada 4",
        "tasks": [
          {
            "title": "Craftea comparador x2",
            "item": "minecraft:comparator",
            "amount": 2,
            "icon": "minecraft:comparator"
          },
          {
            "title": "Craftea repetidor x2",
            "item": "minecraft:repeater",
            "amount": 2,
            "icon": "minecraft:repeater"
          },
          {
            "title": "Mina redstone x10",
            "item": "minecraft:redstone",
            "amount": 10,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Mina cuarzo del Nether x4",
            "item": "minecraft:quartz",
            "amount": 4,
            "icon": "minecraft:quartz"
          },
          {
            "title": "Fabrica cofre x3",
            "item": "minecraft:chest",
            "amount": 3,
            "icon": "minecraft:chest"
          }
        ],
        "reward": {
          "title": "99 monedas",
          "amount": 99,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 5,
        "title": "DIA 5 - Jornada 5",
        "tasks": [
          {
            "title": "Craftea bloque musical x4",
            "item": "minecraft:note_block",
            "amount": 4,
            "icon": "minecraft:note_block"
          },
          {
            "title": "Mina redstone x12",
            "item": "minecraft:redstone",
            "amount": 12,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Craftea repetidor x3",
            "item": "minecraft:repeater",
            "amount": 3,
            "icon": "minecraft:repeater"
          },
          {
            "title": "Craftea palanca x2",
            "item": "minecraft:lever",
            "amount": 2,
            "icon": "minecraft:lever"
          },
          {
            "title": "Fabrica antorcha redstone x3",
            "item": "minecraft:redstone_torch",
            "amount": 3,
            "icon": "minecraft:redstone_torch"
          }
        ],
        "reward": {
          "title": "110 monedas",
          "amount": 110,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 6,
        "title": "DIA 6 - Jornada 6",
        "tasks": [
          {
            "title": "Fabrica pistón x4",
            "item": "minecraft:piston",
            "amount": 4,
            "icon": "minecraft:piston"
          },
          {
            "title": "Mina redstone x12",
            "item": "minecraft:redstone",
            "amount": 12,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Craftea palanca x2",
            "item": "minecraft:lever",
            "amount": 2,
            "icon": "minecraft:lever"
          },
          {
            "title": "Mina roca x24",
            "item": "minecraft:cobblestone",
            "amount": 24,
            "icon": "minecraft:cobblestone"
          },
          {
            "title": "Fabrica antorcha redstone x3",
            "item": "minecraft:redstone_torch",
            "amount": 3,
            "icon": "minecraft:redstone_torch"
          }
        ],
        "reward": {
          "title": "126 monedas",
          "amount": 126,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 7,
        "title": "DIA 7 - Jornada 7",
        "tasks": [
          {
            "title": "Fabrica pistón pegajoso x4",
            "item": "minecraft:sticky_piston",
            "amount": 4,
            "icon": "minecraft:sticky_piston"
          },
          {
            "title": "Consigue bola de slime x4",
            "item": "minecraft:slime_ball",
            "amount": 4,
            "icon": "minecraft:slime_ball"
          },
          {
            "title": "Mina redstone x15",
            "item": "minecraft:redstone",
            "amount": 15,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Craftea repetidor x4",
            "item": "minecraft:repeater",
            "amount": 4,
            "icon": "minecraft:repeater"
          },
          {
            "title": "Fabrica pistón x2",
            "item": "minecraft:piston",
            "amount": 2,
            "icon": "minecraft:piston"
          }
        ],
        "reward": {
          "title": "142 monedas",
          "amount": 142,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 8,
        "title": "DIA 8 - Jornada 8",
        "tasks": [
          {
            "title": "Fabrica observador x4",
            "item": "minecraft:observer",
            "amount": 4,
            "icon": "minecraft:observer"
          },
          {
            "title": "Fabrica pistón x3",
            "item": "minecraft:piston",
            "amount": 3,
            "icon": "minecraft:piston"
          },
          {
            "title": "Mina redstone x16",
            "item": "minecraft:redstone",
            "amount": 16,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Mina cuarzo del Nether x4",
            "item": "minecraft:quartz",
            "amount": 4,
            "icon": "minecraft:quartz"
          },
          {
            "title": "Mina roca x32",
            "item": "minecraft:cobblestone",
            "amount": 32,
            "icon": "minecraft:cobblestone"
          }
        ],
        "reward": {
          "title": "158 monedas",
          "amount": 158,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 9,
        "title": "DIA 9 - Jornada 9",
        "tasks": [
          {
            "title": "Craftea dispensador x3",
            "item": "minecraft:dispenser",
            "amount": 3,
            "icon": "minecraft:dispenser"
          },
          {
            "title": "Mina redstone x14",
            "item": "minecraft:redstone",
            "amount": 14,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Craftea soltador x2",
            "item": "minecraft:dropper",
            "amount": 2,
            "icon": "minecraft:dropper"
          },
          {
            "title": "Craftea arco x1",
            "item": "minecraft:bow",
            "amount": 1,
            "icon": "minecraft:bow"
          },
          {
            "title": "Fabrica flechas x16",
            "item": "minecraft:arrow",
            "amount": 16,
            "icon": "minecraft:arrow"
          }
        ],
        "reward": {
          "title": "174 monedas",
          "amount": 174,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 10,
        "title": "DIA 10 - Jornada 10",
        "tasks": [
          {
            "title": "Fabrica tolva x5",
            "item": "minecraft:hopper",
            "amount": 5,
            "icon": "minecraft:hopper"
          },
          {
            "title": "Craftea soltador x3",
            "item": "minecraft:dropper",
            "amount": 3,
            "icon": "minecraft:dropper"
          },
          {
            "title": "Fabrica cofre x4",
            "item": "minecraft:chest",
            "amount": 4,
            "icon": "minecraft:chest"
          },
          {
            "title": "Mina redstone x15",
            "item": "minecraft:redstone",
            "amount": 15,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Funde lingote hierro x6",
            "item": "minecraft:iron_ingot",
            "amount": 6,
            "icon": "minecraft:iron_ingot"
          }
        ],
        "reward": {
          "title": "190 monedas",
          "amount": 190,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 11,
        "title": "DIA 11 - Jornada 11",
        "tasks": [
          {
            "title": "Fabrica observador x4",
            "item": "minecraft:observer",
            "amount": 4,
            "icon": "minecraft:observer"
          },
          {
            "title": "Fabrica pistón x6",
            "item": "minecraft:piston",
            "amount": 6,
            "icon": "minecraft:piston"
          },
          {
            "title": "Fabrica tolva x6",
            "item": "minecraft:hopper",
            "amount": 6,
            "icon": "minecraft:hopper"
          },
          {
            "title": "Fabrica cofre x3",
            "item": "minecraft:chest",
            "amount": 3,
            "icon": "minecraft:chest"
          },
          {
            "title": "Mina redstone x18",
            "item": "minecraft:redstone",
            "amount": 18,
            "icon": "minecraft:redstone"
          }
        ],
        "reward": {
          "title": "212 monedas",
          "amount": 212,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 12,
        "title": "DIA 12 - Jornada 12",
        "tasks": [
          {
            "title": "Fabrica observador x5",
            "item": "minecraft:observer",
            "amount": 5,
            "icon": "minecraft:observer"
          },
          {
            "title": "Fabrica pistón x6",
            "item": "minecraft:piston",
            "amount": 6,
            "icon": "minecraft:piston"
          },
          {
            "title": "Craftea bloque de slime x4",
            "item": "minecraft:slime_block",
            "amount": 4,
            "icon": "minecraft:slime_block"
          },
          {
            "title": "Fabrica tolva x4",
            "item": "minecraft:hopper",
            "amount": 4,
            "icon": "minecraft:hopper"
          },
          {
            "title": "Fabrica vagoneta x1",
            "item": "minecraft:minecart",
            "amount": 1,
            "icon": "minecraft:minecart"
          }
        ],
        "reward": {
          "title": "234 monedas",
          "amount": 234,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 13,
        "title": "DIA 13 - Jornada 13",
        "tasks": [
          {
            "title": "Fabrica tolva x8",
            "item": "minecraft:hopper",
            "amount": 8,
            "icon": "minecraft:hopper"
          },
          {
            "title": "Craftea comparador x4",
            "item": "minecraft:comparator",
            "amount": 4,
            "icon": "minecraft:comparator"
          },
          {
            "title": "Mina redstone x22",
            "item": "minecraft:redstone",
            "amount": 22,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Fabrica antorcha redstone x6",
            "item": "minecraft:redstone_torch",
            "amount": 6,
            "icon": "minecraft:redstone_torch"
          },
          {
            "title": "Craftea repetidor x5",
            "item": "minecraft:repeater",
            "amount": 5,
            "icon": "minecraft:repeater"
          }
        ],
        "reward": {
          "title": "256 monedas",
          "amount": 256,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 14,
        "title": "DIA 14 - Jornada 14",
        "tasks": [
          {
            "title": "Fabrica rail propulsor x16",
            "item": "minecraft:powered_rail",
            "amount": 16,
            "icon": "minecraft:powered_rail"
          },
          {
            "title": "Fabrica rail detector x4",
            "item": "minecraft:detector_rail",
            "amount": 4,
            "icon": "minecraft:detector_rail"
          },
          {
            "title": "Fabrica vagoneta x2",
            "item": "minecraft:minecart",
            "amount": 2,
            "icon": "minecraft:minecart"
          },
          {
            "title": "Funde lingote oro x6",
            "item": "minecraft:gold_ingot",
            "amount": 6,
            "icon": "minecraft:gold_ingot"
          },
          {
            "title": "Mina redstone x12",
            "item": "minecraft:redstone",
            "amount": 12,
            "icon": "minecraft:redstone"
          }
        ],
        "reward": {
          "title": "278 monedas",
          "amount": 278,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 15,
        "title": "DIA 15 - Jornada 15",
        "tasks": [
          {
            "title": "Fabrica vagoneta tolva x2",
            "item": "minecraft:hopper_minecart",
            "amount": 2,
            "icon": "minecraft:hopper_minecart"
          },
          {
            "title": "Fabrica horno x4",
            "item": "minecraft:furnace",
            "amount": 4,
            "icon": "minecraft:furnace"
          },
          {
            "title": "Fabrica tolva x6",
            "item": "minecraft:hopper",
            "amount": 6,
            "icon": "minecraft:hopper"
          },
          {
            "title": "Fabrica cofre x3",
            "item": "minecraft:chest",
            "amount": 3,
            "icon": "minecraft:chest"
          },
          {
            "title": "Mina redstone x14",
            "item": "minecraft:redstone",
            "amount": 14,
            "icon": "minecraft:redstone"
          }
        ],
        "reward": {
          "title": "300 monedas",
          "amount": 300,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 16,
        "title": "DIA 16 - Jornada 16",
        "tasks": [
          {
            "title": "Fabrica TNT x8",
            "item": "minecraft:tnt",
            "amount": 8,
            "icon": "minecraft:tnt"
          },
          {
            "title": "Craftea dispensador x3",
            "item": "minecraft:dispenser",
            "amount": 3,
            "icon": "minecraft:dispenser"
          },
          {
            "title": "Mina redstone x18",
            "item": "minecraft:redstone",
            "amount": 18,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Craftea cubo de agua x1",
            "item": "minecraft:water_bucket",
            "amount": 1,
            "icon": "minecraft:water_bucket"
          },
          {
            "title": "Mina piedra x32",
            "item": "minecraft:stone",
            "amount": 32,
            "icon": "minecraft:stone"
          }
        ],
        "reward": {
          "title": "326 monedas",
          "amount": 326,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 17,
        "title": "DIA 17 - Jornada 17",
        "tasks": [
          {
            "title": "Craftea bloque de slime x10",
            "item": "minecraft:slime_block",
            "amount": 10,
            "icon": "minecraft:slime_block"
          },
          {
            "title": "Fabrica pistón x4",
            "item": "minecraft:piston",
            "amount": 4,
            "icon": "minecraft:piston"
          },
          {
            "title": "Fabrica observador x6",
            "item": "minecraft:observer",
            "amount": 6,
            "icon": "minecraft:observer"
          },
          {
            "title": "Fabrica pistón pegajoso x6",
            "item": "minecraft:sticky_piston",
            "amount": 6,
            "icon": "minecraft:sticky_piston"
          },
          {
            "title": "Craftea bloque redstone x2",
            "item": "minecraft:redstone_block",
            "amount": 2,
            "icon": "minecraft:redstone_block"
          }
        ],
        "reward": {
          "title": "352 monedas",
          "amount": 352,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 18,
        "title": "DIA 18 - Jornada 18",
        "tasks": [
          {
            "title": "Craftea bloque musical x8",
            "item": "minecraft:note_block",
            "amount": 8,
            "icon": "minecraft:note_block"
          },
          {
            "title": "Craftea repetidor x12",
            "item": "minecraft:repeater",
            "amount": 12,
            "icon": "minecraft:repeater"
          },
          {
            "title": "Mina redstone x28",
            "item": "minecraft:redstone",
            "amount": 28,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Craftea palanca x3",
            "item": "minecraft:lever",
            "amount": 3,
            "icon": "minecraft:lever"
          },
          {
            "title": "Fabrica antorcha redstone x5",
            "item": "minecraft:redstone_torch",
            "amount": 5,
            "icon": "minecraft:redstone_torch"
          }
        ],
        "reward": {
          "title": "378 monedas",
          "amount": 378,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 19,
        "title": "DIA 19 - Jornada 19",
        "tasks": [
          {
            "title": "Fabrica sensor luz diurna x2",
            "item": "minecraft:daylight_detector",
            "amount": 2,
            "icon": "minecraft:daylight_detector"
          },
          {
            "title": "Fabrica lámpara redstone x8",
            "item": "minecraft:redstone_lamp",
            "amount": 8,
            "icon": "minecraft:redstone_lamp"
          },
          {
            "title": "Mina redstone x14",
            "item": "minecraft:redstone",
            "amount": 14,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Funde vidrio x16",
            "item": "minecraft:glass",
            "amount": 16,
            "icon": "minecraft:glass"
          },
          {
            "title": "Mina cuarzo del Nether x4",
            "item": "minecraft:quartz",
            "amount": 4,
            "icon": "minecraft:quartz"
          }
        ],
        "reward": {
          "title": "404 monedas",
          "amount": 404,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 20,
        "title": "DIA 20 - Jornada 20",
        "tasks": [
          {
            "title": "Craftea bloque de miel x6",
            "item": "minecraft:honey_block",
            "amount": 6,
            "icon": "minecraft:honey_block"
          },
          {
            "title": "Craftea bloque de slime x6",
            "item": "minecraft:slime_block",
            "amount": 6,
            "icon": "minecraft:slime_block"
          },
          {
            "title": "Fabrica pistón pegajoso x8",
            "item": "minecraft:sticky_piston",
            "amount": 8,
            "icon": "minecraft:sticky_piston"
          },
          {
            "title": "Mina redstone x22",
            "item": "minecraft:redstone",
            "amount": 22,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Craftea repetidor x8",
            "item": "minecraft:repeater",
            "amount": 8,
            "icon": "minecraft:repeater"
          }
        ],
        "reward": {
          "title": "430 monedas",
          "amount": 430,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 21,
        "title": "DIA 21 - Jornada 21",
        "tasks": [
          {
            "title": "Fabrica sensor sculk calibrado x2",
            "item": "minecraft:calibrated_sculk_sensor",
            "amount": 2,
            "icon": "minecraft:calibrated_sculk_sensor"
          },
          {
            "title": "Consigue sensor sculk x1 (silk touch)",
            "item": "minecraft:sculk_sensor",
            "amount": 1,
            "icon": "minecraft:sculk_sensor"
          },
          {
            "title": "Recolecta amatista x4",
            "item": "minecraft:amethyst_shard",
            "amount": 4,
            "icon": "minecraft:amethyst_shard"
          },
          {
            "title": "Mina redstone x18",
            "item": "minecraft:redstone",
            "amount": 18,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Fabrica lámpara redstone x6",
            "item": "minecraft:redstone_lamp",
            "amount": 6,
            "icon": "minecraft:redstone_lamp"
          }
        ],
        "reward": {
          "title": "468 monedas",
          "amount": 468,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 22,
        "title": "DIA 22 - Jornada 22",
        "tasks": [
          {
            "title": "Fabrica bloque diana x4",
            "item": "minecraft:target",
            "amount": 4,
            "icon": "minecraft:target"
          },
          {
            "title": "Craftea dispensador x4",
            "item": "minecraft:dispenser",
            "amount": 4,
            "icon": "minecraft:dispenser"
          },
          {
            "title": "Fabrica flechas x32",
            "item": "minecraft:arrow",
            "amount": 32,
            "icon": "minecraft:arrow"
          },
          {
            "title": "Mina redstone x20",
            "item": "minecraft:redstone",
            "amount": 20,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Fabrica lámpara redstone x10",
            "item": "minecraft:redstone_lamp",
            "amount": 10,
            "icon": "minecraft:redstone_lamp"
          }
        ],
        "reward": {
          "title": "506 monedas",
          "amount": 506,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 23,
        "title": "DIA 23 - Jornada 23",
        "tasks": [
          {
            "title": "Fabrica pistón pegajoso x14",
            "item": "minecraft:sticky_piston",
            "amount": 14,
            "icon": "minecraft:sticky_piston"
          },
          {
            "title": "Craftea bloque de slime x8",
            "item": "minecraft:slime_block",
            "amount": 8,
            "icon": "minecraft:slime_block"
          },
          {
            "title": "Mina redstone x32",
            "item": "minecraft:redstone",
            "amount": 32,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Fabrica observador x8",
            "item": "minecraft:observer",
            "amount": 8,
            "icon": "minecraft:observer"
          },
          {
            "title": "Craftea repetidor x10",
            "item": "minecraft:repeater",
            "amount": 10,
            "icon": "minecraft:repeater"
          }
        ],
        "reward": {
          "title": "544 monedas",
          "amount": 544,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 24,
        "title": "DIA 24 - Jornada 24",
        "tasks": [
          {
            "title": "Fabrica soporte pociones x2",
            "item": "minecraft:brewing_stand",
            "amount": 2,
            "icon": "minecraft:brewing_stand"
          },
          {
            "title": "Fabrica tolva x8",
            "item": "minecraft:hopper",
            "amount": 8,
            "icon": "minecraft:hopper"
          },
          {
            "title": "Mina redstone x20",
            "item": "minecraft:redstone",
            "amount": 20,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Craftea comparador x4",
            "item": "minecraft:comparator",
            "amount": 4,
            "icon": "minecraft:comparator"
          },
          {
            "title": "Fabrica cofre x5",
            "item": "minecraft:chest",
            "amount": 5,
            "icon": "minecraft:chest"
          }
        ],
        "reward": {
          "title": "582 monedas",
          "amount": 582,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 25,
        "title": "DIA 25 - Jornada 25",
        "tasks": [
          {
            "title": "Fabrica vagoneta x4",
            "item": "minecraft:minecart",
            "amount": 4,
            "icon": "minecraft:minecart"
          },
          {
            "title": "Fabrica rail propulsor x32",
            "item": "minecraft:powered_rail",
            "amount": 32,
            "icon": "minecraft:powered_rail"
          },
          {
            "title": "Fabrica rail detector x8",
            "item": "minecraft:detector_rail",
            "amount": 8,
            "icon": "minecraft:detector_rail"
          },
          {
            "title": "Mina redstone x28",
            "item": "minecraft:redstone",
            "amount": 28,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Fabrica vagoneta tolva x3",
            "item": "minecraft:hopper_minecart",
            "amount": 3,
            "icon": "minecraft:hopper_minecart"
          }
        ],
        "reward": {
          "title": "620 monedas",
          "amount": 620,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 26,
        "title": "DIA 26 - Jornada 26",
        "tasks": [
          {
            "title": "Mina redstone x40",
            "item": "minecraft:redstone",
            "amount": 40,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Craftea repetidor x14",
            "item": "minecraft:repeater",
            "amount": 14,
            "icon": "minecraft:repeater"
          },
          {
            "title": "Fabrica antorcha redstone x16",
            "item": "minecraft:redstone_torch",
            "amount": 16,
            "icon": "minecraft:redstone_torch"
          },
          {
            "title": "Craftea comparador x8",
            "item": "minecraft:comparator",
            "amount": 8,
            "icon": "minecraft:comparator"
          },
          {
            "title": "Fabrica lámpara redstone x12",
            "item": "minecraft:redstone_lamp",
            "amount": 12,
            "icon": "minecraft:redstone_lamp"
          }
        ],
        "reward": {
          "title": "756 monedas",
          "amount": 756,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 27,
        "title": "DIA 27 - Jornada 27",
        "tasks": [
          {
            "title": "Fabrica tolva x32",
            "item": "minecraft:hopper",
            "amount": 32,
            "icon": "minecraft:hopper"
          },
          {
            "title": "Fabrica cofre x16",
            "item": "minecraft:chest",
            "amount": 16,
            "icon": "minecraft:chest"
          },
          {
            "title": "Craftea comparador x8",
            "item": "minecraft:comparator",
            "amount": 8,
            "icon": "minecraft:comparator"
          },
          {
            "title": "Mina redstone x40",
            "item": "minecraft:redstone",
            "amount": 40,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Craftea repetidor x12",
            "item": "minecraft:repeater",
            "amount": 12,
            "icon": "minecraft:repeater"
          }
        ],
        "reward": {
          "title": "892 monedas",
          "amount": 892,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 28,
        "title": "DIA 28 - Jornada 28",
        "tasks": [
          {
            "title": "Fabrica crafteador x4",
            "item": "minecraft:crafter",
            "amount": 4,
            "icon": "minecraft:crafter"
          },
          {
            "title": "Fabrica bulbo de cobre x6",
            "item": "minecraft:copper_bulb",
            "amount": 6,
            "icon": "minecraft:copper_bulb"
          },
          {
            "title": "Funde lingote cobre x8",
            "item": "minecraft:copper_ingot",
            "amount": 8,
            "icon": "minecraft:copper_ingot"
          },
          {
            "title": "Fabrica tolva x8",
            "item": "minecraft:hopper",
            "amount": 8,
            "icon": "minecraft:hopper"
          },
          {
            "title": "Mina redstone x28",
            "item": "minecraft:redstone",
            "amount": 28,
            "icon": "minecraft:redstone"
          }
        ],
        "reward": {
          "title": "1028 monedas",
          "amount": 1028,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 29,
        "title": "DIA 29 - Jornada 29",
        "tasks": [
          {
            "title": "Fabrica pararrayos x4",
            "item": "minecraft:lightning_rod",
            "amount": 4,
            "icon": "minecraft:lightning_rod"
          },
          {
            "title": "Craftea bloque de cobre x6",
            "item": "minecraft:copper_block",
            "amount": 6,
            "icon": "minecraft:copper_block"
          },
          {
            "title": "Fabrica sensor luz diurna x2",
            "item": "minecraft:daylight_detector",
            "amount": 2,
            "icon": "minecraft:daylight_detector"
          },
          {
            "title": "Mina redstone x30",
            "item": "minecraft:redstone",
            "amount": 30,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Craftea comparador x4",
            "item": "minecraft:comparator",
            "amount": 4,
            "icon": "minecraft:comparator"
          }
        ],
        "reward": {
          "title": "1164 monedas",
          "amount": 1164,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 30,
        "title": "DIA 30 - Jornada 30",
        "tasks": [
          {
            "title": "Mina redstone x64 (stack)",
            "item": "minecraft:redstone",
            "amount": 64,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Craftea bloque redstone x10",
            "item": "minecraft:redstone_block",
            "amount": 10,
            "icon": "minecraft:redstone_block"
          },
          {
            "title": "Fabrica pistón pegajoso x14",
            "item": "minecraft:sticky_piston",
            "amount": 14,
            "icon": "minecraft:sticky_piston"
          },
          {
            "title": "Fabrica observador x10",
            "item": "minecraft:observer",
            "amount": 10,
            "icon": "minecraft:observer"
          },
          {
            "title": "Fabrica crafteador x6",
            "item": "minecraft:crafter",
            "amount": 6,
            "icon": "minecraft:crafter"
          }
        ],
        "reward": {
          "title": "1300 monedas",
          "amount": 1300,
          "icon": "saros__money_mod:euro_100"
        }
      }
    ]
  },
  {
    "id": "lenador",
    "name": "Leñador",
    "emoji": "🪓",
    "color": "#66BB6A",
    "days": [
      {
        "day": 1,
        "title": "DIA 1 - Primer contacto con el bosque",
        "tasks": [
          {
            "title": "Tala roble x3",
            "item": "minecraft:oak_log",
            "amount": 3,
            "icon": "minecraft:oak_log"
          },
          {
            "title": "Tala abedul x3",
            "item": "minecraft:birch_log",
            "amount": 3,
            "icon": "minecraft:birch_log"
          },
          {
            "title": "Fabrica palos x4",
            "item": "minecraft:stick",
            "amount": 4,
            "icon": "minecraft:stick"
          },
          {
            "title": "Fabrica tablones de roble x8",
            "item": "minecraft:oak_planks",
            "amount": 8,
            "icon": "minecraft:oak_planks"
          },
          {
            "title": "Recolecta brote de roble x1",
            "item": "minecraft:oak_sapling",
            "amount": 1,
            "icon": "minecraft:oak_sapling"
          }
        ],
        "reward": {
          "title": "65 monedas",
          "amount": 65,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 2,
        "title": "DIA 2 - Herramientas básicas",
        "tasks": [
          {
            "title": "Tala abeto x3",
            "item": "minecraft:spruce_log",
            "amount": 3,
            "icon": "minecraft:spruce_log"
          },
          {
            "title": "Fabrica mesa de crafteo x1",
            "item": "minecraft:crafting_table",
            "amount": 1,
            "icon": "minecraft:crafting_table"
          },
          {
            "title": "Fabrica hacha de madera x1",
            "item": "minecraft:wooden_axe",
            "amount": 1,
            "icon": "minecraft:wooden_axe"
          },
          {
            "title": "Fabrica pico de madera x1",
            "item": "minecraft:wooden_pickaxe",
            "amount": 1,
            "icon": "minecraft:wooden_pickaxe"
          },
          {
            "title": "Recolecta brote de abeto x1",
            "item": "minecraft:spruce_sapling",
            "amount": 1,
            "icon": "minecraft:spruce_sapling"
          }
        ],
        "reward": {
          "title": "76 monedas",
          "amount": 76,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 3,
        "title": "DIA 3 - Almacenamiento forestal",
        "tasks": [
          {
            "title": "Fabrica cofre x1",
            "item": "minecraft:chest",
            "amount": 1,
            "icon": "minecraft:chest"
          },
          {
            "title": "Tala roble x10",
            "item": "minecraft:oak_log",
            "amount": 10,
            "icon": "minecraft:oak_log"
          },
          {
            "title": "Fabrica palos x16",
            "item": "minecraft:stick",
            "amount": 16,
            "icon": "minecraft:stick"
          },
          {
            "title": "Fabrica espada de madera x1",
            "item": "minecraft:wooden_sword",
            "amount": 1,
            "icon": "minecraft:wooden_sword"
          },
          {
            "title": "Recolecta brote de abedul x1",
            "item": "minecraft:birch_sapling",
            "amount": 1,
            "icon": "minecraft:birch_sapling"
          }
        ],
        "reward": {
          "title": "87 monedas",
          "amount": 87,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 4,
        "title": "DIA 4 - El primer vivero",
        "tasks": [
          {
            "title": "Tala acacia x3",
            "item": "minecraft:acacia_log",
            "amount": 3,
            "icon": "minecraft:acacia_log"
          },
          {
            "title": "Fabrica tablones de roble x64 (1 stack)",
            "item": "minecraft:oak_planks",
            "amount": 64,
            "icon": "minecraft:oak_planks"
          },
          {
            "title": "Fabrica azada de madera x1",
            "item": "minecraft:wooden_hoe",
            "amount": 1,
            "icon": "minecraft:wooden_hoe"
          },
          {
            "title": "Fabrica pala de madera x1",
            "item": "minecraft:wooden_shovel",
            "amount": 1,
            "icon": "minecraft:wooden_shovel"
          },
          {
            "title": "Recolecta brote de acacia x1",
            "item": "minecraft:acacia_sapling",
            "amount": 1,
            "icon": "minecraft:acacia_sapling"
          }
        ],
        "reward": {
          "title": "98 monedas",
          "amount": 98,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 5,
        "title": "DIA 5 - El hacha de piedra",
        "tasks": [
          {
            "title": "Tala roble oscuro x5",
            "item": "minecraft:dark_oak_log",
            "amount": 5,
            "icon": "minecraft:dark_oak_log"
          },
          {
            "title": "Fabrica hacha de piedra x1",
            "item": "minecraft:stone_axe",
            "amount": 1,
            "icon": "minecraft:stone_axe"
          },
          {
            "title": "Fabrica escaleras x8",
            "item": "minecraft:ladder",
            "amount": 8,
            "icon": "minecraft:ladder"
          },
          {
            "title": "Fabrica vallas x8",
            "item": "minecraft:fence",
            "amount": 8,
            "icon": "minecraft:fence"
          },
          {
            "title": "Recolecta brote de roble oscuro x1",
            "item": "minecraft:dark_oak_sapling",
            "amount": 1,
            "icon": "minecraft:dark_oak_sapling"
          }
        ],
        "reward": {
          "title": "110 monedas",
          "amount": 110,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 6,
        "title": "DIA 6 - Expedición a la jungla",
        "tasks": [
          {
            "title": "Tala jungla x8",
            "item": "minecraft:jungle_log",
            "amount": 8,
            "icon": "minecraft:jungle_log"
          },
          {
            "title": "Tala cerezo x3",
            "item": "minecraft:cherry_log",
            "amount": 3,
            "icon": "minecraft:cherry_log"
          },
          {
            "title": "Tala roble x64 (1 stack)",
            "item": "minecraft:oak_log",
            "amount": 64,
            "icon": "minecraft:oak_log"
          },
          {
            "title": "Fabrica escalones de roble x8",
            "item": "minecraft:oak_stairs",
            "amount": 8,
            "icon": "minecraft:oak_stairs"
          },
          {
            "title": "Recolecta brote de jungla x2",
            "item": "minecraft:jungle_sapling",
            "amount": 2,
            "icon": "minecraft:jungle_sapling"
          }
        ],
        "reward": {
          "title": "126 monedas",
          "amount": 126,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 7,
        "title": "DIA 7 - Construyendo la cabaña",
        "tasks": [
          {
            "title": "Tala manglar x5",
            "item": "minecraft:mangrove_log",
            "amount": 5,
            "icon": "minecraft:mangrove_log"
          },
          {
            "title": "Fabrica losas de roble x16",
            "item": "minecraft:oak_slab",
            "amount": 16,
            "icon": "minecraft:oak_slab"
          },
          {
            "title": "Tala abedul x32",
            "item": "minecraft:birch_log",
            "amount": 32,
            "icon": "minecraft:birch_log"
          },
          {
            "title": "Fabrica puertas de valla x2",
            "item": "minecraft:fence_gate",
            "amount": 2,
            "icon": "minecraft:fence_gate"
          },
          {
            "title": "Recolecta propágulo de manglar x1",
            "item": "minecraft:mangrove_propagule",
            "amount": 1,
            "icon": "minecraft:mangrove_propagule"
          }
        ],
        "reward": {
          "title": "142 monedas",
          "amount": 142,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 8,
        "title": "DIA 8 - Puertas del bosque",
        "tasks": [
          {
            "title": "Tala abeto x32",
            "item": "minecraft:spruce_log",
            "amount": 32,
            "icon": "minecraft:spruce_log"
          },
          {
            "title": "Fabrica puerta de roble x2",
            "item": "minecraft:oak_door",
            "amount": 2,
            "icon": "minecraft:oak_door"
          },
          {
            "title": "Fabrica puerta de abeto x1",
            "item": "minecraft:spruce_door",
            "amount": 1,
            "icon": "minecraft:spruce_door"
          },
          {
            "title": "Fabrica puerta de abedul x1",
            "item": "minecraft:birch_door",
            "amount": 1,
            "icon": "minecraft:birch_door"
          },
          {
            "title": "Recolecta brote de abeto x3",
            "item": "minecraft:spruce_sapling",
            "amount": 3,
            "icon": "minecraft:spruce_sapling"
          }
        ],
        "reward": {
          "title": "158 monedas",
          "amount": 158,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 9,
        "title": "DIA 9 - Trampillas y carteles",
        "tasks": [
          {
            "title": "Tala roble oscuro x16",
            "item": "minecraft:dark_oak_log",
            "amount": 16,
            "icon": "minecraft:dark_oak_log"
          },
          {
            "title": "Fabrica trampilla de roble x4",
            "item": "minecraft:oak_trapdoor",
            "amount": 4,
            "icon": "minecraft:oak_trapdoor"
          },
          {
            "title": "Tala acacia x32",
            "item": "minecraft:acacia_log",
            "amount": 32,
            "icon": "minecraft:acacia_log"
          },
          {
            "title": "Fabrica carteles x3",
            "item": "minecraft:sign",
            "amount": 3,
            "icon": "minecraft:sign"
          },
          {
            "title": "Recolecta brote de roble oscuro x3",
            "item": "minecraft:dark_oak_sapling",
            "amount": 3,
            "icon": "minecraft:dark_oak_sapling"
          }
        ],
        "reward": {
          "title": "174 monedas",
          "amount": 174,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 10,
        "title": "DIA 10 - La casa del árbol",
        "tasks": [
          {
            "title": "Tala jungla x64 (1 stack)",
            "item": "minecraft:jungle_log",
            "amount": 64,
            "icon": "minecraft:jungle_log"
          },
          {
            "title": "Fabrica tablones de abeto x64",
            "item": "minecraft:spruce_planks",
            "amount": 64,
            "icon": "minecraft:spruce_planks"
          },
          {
            "title": "Fabrica vallas de roble x32",
            "item": "minecraft:oak_fence",
            "amount": 32,
            "icon": "minecraft:oak_fence"
          },
          {
            "title": "Fabrica escaleras x16",
            "item": "minecraft:ladder",
            "amount": 16,
            "icon": "minecraft:ladder"
          },
          {
            "title": "Recolecta brote de cerezo x2",
            "item": "minecraft:cherry_sapling",
            "amount": 2,
            "icon": "minecraft:cherry_sapling"
          }
        ],
        "reward": {
          "title": "190 monedas",
          "amount": 190,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 11,
        "title": "DIA 11 - Herrero de carbón",
        "tasks": [
          {
            "title": "Produce carbón vegetal x8",
            "item": "minecraft:charcoal",
            "amount": 8,
            "icon": "minecraft:charcoal"
          },
          {
            "title": "Fabrica antorchas x16",
            "item": "minecraft:torch",
            "amount": 16,
            "icon": "minecraft:torch"
          },
          {
            "title": "Fabrica fogata x2",
            "item": "minecraft:campfire",
            "amount": 2,
            "icon": "minecraft:campfire"
          },
          {
            "title": "Tala roble x32",
            "item": "minecraft:oak_log",
            "amount": 32,
            "icon": "minecraft:oak_log"
          },
          {
            "title": "Fabrica hacha de hierro x1",
            "item": "minecraft:iron_axe",
            "amount": 1,
            "icon": "minecraft:iron_axe"
          }
        ],
        "reward": {
          "title": "212 monedas",
          "amount": 212,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 12,
        "title": "DIA 12 - Navegante maderero",
        "tasks": [
          {
            "title": "Fabrica bote de roble x1",
            "item": "minecraft:oak_boat",
            "amount": 1,
            "icon": "minecraft:oak_boat"
          },
          {
            "title": "Fabrica bote de abedul x1",
            "item": "minecraft:birch_boat",
            "amount": 1,
            "icon": "minecraft:birch_boat"
          },
          {
            "title": "Fabrica bote de abeto x1",
            "item": "minecraft:spruce_boat",
            "amount": 1,
            "icon": "minecraft:spruce_boat"
          },
          {
            "title": "Tala manglar x16",
            "item": "minecraft:mangrove_log",
            "amount": 16,
            "icon": "minecraft:mangrove_log"
          },
          {
            "title": "Recolecta propágulo de manglar x3",
            "item": "minecraft:mangrove_propagule",
            "amount": 3,
            "icon": "minecraft:mangrove_propagule"
          }
        ],
        "reward": {
          "title": "234 monedas",
          "amount": 234,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 13,
        "title": "DIA 13 - Toneles y composta",
        "tasks": [
          {
            "title": "Fabrica barril x2",
            "item": "minecraft:barrel",
            "amount": 2,
            "icon": "minecraft:barrel"
          },
          {
            "title": "Fabrica compostador x2",
            "item": "minecraft:composter",
            "amount": 2,
            "icon": "minecraft:composter"
          },
          {
            "title": "Fabrica librería x3",
            "item": "minecraft:bookshelf",
            "amount": 3,
            "icon": "minecraft:bookshelf"
          },
          {
            "title": "Tala roble oscuro x32",
            "item": "minecraft:dark_oak_log",
            "amount": 32,
            "icon": "minecraft:dark_oak_log"
          },
          {
            "title": "Tala cerezo x16",
            "item": "minecraft:cherry_log",
            "amount": 16,
            "icon": "minecraft:cherry_log"
          }
        ],
        "reward": {
          "title": "256 monedas",
          "amount": 256,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 14,
        "title": "DIA 14 - Música del bosque",
        "tasks": [
          {
            "title": "Fabrica tocadiscos x1",
            "item": "minecraft:jukebox",
            "amount": 1,
            "icon": "minecraft:jukebox"
          },
          {
            "title": "Fabrica bloque musical x3",
            "item": "minecraft:note_block",
            "amount": 3,
            "icon": "minecraft:note_block"
          },
          {
            "title": "Fabrica telar x1",
            "item": "minecraft:loom",
            "amount": 1,
            "icon": "minecraft:loom"
          },
          {
            "title": "Tala abeto x64 (1 stack)",
            "item": "minecraft:spruce_log",
            "amount": 64,
            "icon": "minecraft:spruce_log"
          },
          {
            "title": "Recolecta brote de acacia x5",
            "item": "minecraft:acacia_sapling",
            "amount": 5,
            "icon": "minecraft:acacia_sapling"
          }
        ],
        "reward": {
          "title": "278 monedas",
          "amount": 278,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 15,
        "title": "DIA 15 - Mobiliario completo",
        "tasks": [
          {
            "title": "Fabrica mesa de cartografía x1",
            "item": "minecraft:cartography_table",
            "amount": 1,
            "icon": "minecraft:cartography_table"
          },
          {
            "title": "Fabrica mesa de flechas x1",
            "item": "minecraft:fletching_table",
            "amount": 1,
            "icon": "minecraft:fletching_table"
          },
          {
            "title": "Fabrica mesa de herrería x1",
            "item": "minecraft:smithing_table",
            "amount": 1,
            "icon": "minecraft:smithing_table"
          },
          {
            "title": "Fabrica letrero colgante x3",
            "item": "minecraft:hanging_sign",
            "amount": 3,
            "icon": "minecraft:hanging_sign"
          },
          {
            "title": "Tala cerezo x32",
            "item": "minecraft:cherry_log",
            "amount": 32,
            "icon": "minecraft:cherry_log"
          }
        ],
        "reward": {
          "title": "300 monedas",
          "amount": 300,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 16,
        "title": "DIA 16 - Pinos gigantes",
        "tasks": [
          {
            "title": "Tala abeto BOP x10",
            "item": "biomesoplenty:fir_log",
            "amount": 10,
            "icon": "biomesoplenty:fir_log"
          },
          {
            "title": "Tala secuoya x8",
            "item": "biomesoplenty:redwood_log",
            "amount": 8,
            "icon": "biomesoplenty:redwood_log"
          },
          {
            "title": "Recolecta brote de abeto BOP x1",
            "item": "biomesoplenty:fir_sapling",
            "amount": 1,
            "icon": "biomesoplenty:fir_sapling"
          },
          {
            "title": "Recolecta brote de secuoya x1",
            "item": "biomesoplenty:redwood_sapling",
            "amount": 1,
            "icon": "biomesoplenty:redwood_sapling"
          },
          {
            "title": "Tala roble x128 (2 stacks)",
            "item": "minecraft:oak_log",
            "amount": 128,
            "icon": "minecraft:oak_log"
          }
        ],
        "reward": {
          "title": "326 monedas",
          "amount": 326,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 17,
        "title": "DIA 17 - Maderas exóticas",
        "tasks": [
          {
            "title": "Tala caoba x8",
            "item": "biomesoplenty:mahogany_log",
            "amount": 8,
            "icon": "biomesoplenty:mahogany_log"
          },
          {
            "title": "Tala palmera x8",
            "item": "biomesoplenty:palm_log",
            "amount": 8,
            "icon": "biomesoplenty:palm_log"
          },
          {
            "title": "Tala sauce x8",
            "item": "biomesoplenty:willow_log",
            "amount": 8,
            "icon": "biomesoplenty:willow_log"
          },
          {
            "title": "Recolecta brote de caoba x1",
            "item": "biomesoplenty:mahogany_sapling",
            "amount": 1,
            "icon": "biomesoplenty:mahogany_sapling"
          },
          {
            "title": "Recolecta brote de palmera x1",
            "item": "biomesoplenty:palm_sapling",
            "amount": 1,
            "icon": "biomesoplenty:palm_sapling"
          }
        ],
        "reward": {
          "title": "352 monedas",
          "amount": 352,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 18,
        "title": "DIA 18 - Bosques místicos",
        "tasks": [
          {
            "title": "Tala madera mágica x6",
            "item": "biomesoplenty:magic_log",
            "amount": 6,
            "icon": "biomesoplenty:magic_log"
          },
          {
            "title": "Tala madera muerta x8",
            "item": "biomesoplenty:dead_log",
            "amount": 8,
            "icon": "biomesoplenty:dead_log"
          },
          {
            "title": "Tala corteza infernal x5",
            "item": "biomesoplenty:hellbark_log",
            "amount": 5,
            "icon": "biomesoplenty:hellbark_log"
          },
          {
            "title": "Recolecta brote mágico x1",
            "item": "biomesoplenty:magic_sapling",
            "amount": 1,
            "icon": "biomesoplenty:magic_sapling"
          },
          {
            "title": "Recolecta brote de sauce x1",
            "item": "biomesoplenty:willow_sapling",
            "amount": 1,
            "icon": "biomesoplenty:willow_sapling"
          }
        ],
        "reward": {
          "title": "378 monedas",
          "amount": 378,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 19,
        "title": "DIA 19 - Jacarandá y bambú",
        "tasks": [
          {
            "title": "Tala jacarandá x8",
            "item": "biomesoplenty:jacaranda_log",
            "amount": 8,
            "icon": "biomesoplenty:jacaranda_log"
          },
          {
            "title": "Recolecta bambú x32",
            "item": "minecraft:bamboo",
            "amount": 32,
            "icon": "minecraft:bamboo"
          },
          {
            "title": "Recolecta brote de jacarandá x2",
            "item": "biomesoplenty:jacaranda_sapling",
            "amount": 2,
            "icon": "biomesoplenty:jacaranda_sapling"
          },
          {
            "title": "Fabrica bloque de bambú x4",
            "item": "minecraft:bamboo_block",
            "amount": 4,
            "icon": "minecraft:bamboo_block"
          },
          {
            "title": "Tala cerezo x32",
            "item": "minecraft:cherry_log",
            "amount": 32,
            "icon": "minecraft:cherry_log"
          }
        ],
        "reward": {
          "title": "404 monedas",
          "amount": 404,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 20,
        "title": "DIA 20 - Colección de brotes",
        "tasks": [
          {
            "title": "Recolecta brote muerto x1",
            "item": "biomesoplenty:dead_sapling",
            "amount": 1,
            "icon": "biomesoplenty:dead_sapling"
          },
          {
            "title": "Recolecta brote infernal x1",
            "item": "biomesoplenty:hellbark_sapling",
            "amount": 1,
            "icon": "biomesoplenty:hellbark_sapling"
          },
          {
            "title": "Recolecta brote de cerezo x5",
            "item": "minecraft:cherry_sapling",
            "amount": 5,
            "icon": "minecraft:cherry_sapling"
          },
          {
            "title": "Recolecta bambú x64 (1 stack)",
            "item": "minecraft:bamboo",
            "amount": 64,
            "icon": "minecraft:bamboo"
          },
          {
            "title": "Tala roble oscuro x64",
            "item": "minecraft:dark_oak_log",
            "amount": 64,
            "icon": "minecraft:dark_oak_log"
          }
        ],
        "reward": {
          "title": "430 monedas",
          "amount": 430,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 21,
        "title": "DIA 21 - Granja de árboles",
        "tasks": [
          {
            "title": "Recolecta brote de roble x64",
            "item": "minecraft:oak_sapling",
            "amount": 64,
            "icon": "minecraft:oak_sapling"
          },
          {
            "title": "Recolecta brote de abedul x32",
            "item": "minecraft:birch_sapling",
            "amount": 32,
            "icon": "minecraft:birch_sapling"
          },
          {
            "title": "Recolecta brote de abeto x32",
            "item": "minecraft:spruce_sapling",
            "amount": 32,
            "icon": "minecraft:spruce_sapling"
          },
          {
            "title": "Fabrica compostador x4",
            "item": "minecraft:composter",
            "amount": 4,
            "icon": "minecraft:composter"
          },
          {
            "title": "Tala abedul x128 (2 stacks)",
            "item": "minecraft:birch_log",
            "amount": 128,
            "icon": "minecraft:birch_log"
          }
        ],
        "reward": {
          "title": "468 monedas",
          "amount": 468,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 22,
        "title": "DIA 22 - Maderas del pantano",
        "tasks": [
          {
            "title": "Tala manglar x64",
            "item": "minecraft:mangrove_log",
            "amount": 64,
            "icon": "minecraft:mangrove_log"
          },
          {
            "title": "Recolecta raíces de manglar x16",
            "item": "minecraft:mangrove_roots",
            "amount": 16,
            "icon": "minecraft:mangrove_roots"
          },
          {
            "title": "Recolecta raíces fangosas x8",
            "item": "minecraft:muddy_mangrove_roots",
            "amount": 8,
            "icon": "minecraft:muddy_mangrove_roots"
          },
          {
            "title": "Recolecta propágulo de manglar x8",
            "item": "minecraft:mangrove_propagule",
            "amount": 8,
            "icon": "minecraft:mangrove_propagule"
          },
          {
            "title": "Fabrica bote de manglar x1",
            "item": "minecraft:mangrove_boat",
            "amount": 1,
            "icon": "minecraft:mangrove_boat"
          }
        ],
        "reward": {
          "title": "506 monedas",
          "amount": 506,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 23,
        "title": "DIA 23 - Botes coleccionista",
        "tasks": [
          {
            "title": "Fabrica bote de jungla x1",
            "item": "minecraft:jungle_boat",
            "amount": 1,
            "icon": "minecraft:jungle_boat"
          },
          {
            "title": "Fabrica bote de acacia x1",
            "item": "minecraft:acacia_boat",
            "amount": 1,
            "icon": "minecraft:acacia_boat"
          },
          {
            "title": "Fabrica bote de roble oscuro x1",
            "item": "minecraft:dark_oak_boat",
            "amount": 1,
            "icon": "minecraft:dark_oak_boat"
          },
          {
            "title": "Fabrica bote de cerezo x1",
            "item": "minecraft:cherry_boat",
            "amount": 1,
            "icon": "minecraft:cherry_boat"
          },
          {
            "title": "Tala acacia x64",
            "item": "minecraft:acacia_log",
            "amount": 64,
            "icon": "minecraft:acacia_log"
          }
        ],
        "reward": {
          "title": "544 monedas",
          "amount": 544,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 24,
        "title": "DIA 24 - El aserradero",
        "tasks": [
          {
            "title": "Tala roble x256 (4 stacks)",
            "item": "minecraft:oak_log",
            "amount": 256,
            "icon": "minecraft:oak_log"
          },
          {
            "title": "Tala abeto x128 (2 stacks)",
            "item": "minecraft:spruce_log",
            "amount": 128,
            "icon": "minecraft:spruce_log"
          },
          {
            "title": "Fabrica cofre x4",
            "item": "minecraft:chest",
            "amount": 4,
            "icon": "minecraft:chest"
          },
          {
            "title": "Produce carbón vegetal x32",
            "item": "minecraft:charcoal",
            "amount": 32,
            "icon": "minecraft:charcoal"
          },
          {
            "title": "Fabrica hacha de diamante x1",
            "item": "minecraft:diamond_axe",
            "amount": 1,
            "icon": "minecraft:diamond_axe"
          }
        ],
        "reward": {
          "title": "582 monedas",
          "amount": 582,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 25,
        "title": "DIA 25 - Carpintería industrial",
        "tasks": [
          {
            "title": "Fabrica tablones de roble x256 (4 stacks)",
            "item": "minecraft:oak_planks",
            "amount": 256,
            "icon": "minecraft:oak_planks"
          },
          {
            "title": "Tala jungla x128 (2 stacks)",
            "item": "minecraft:jungle_log",
            "amount": 128,
            "icon": "minecraft:jungle_log"
          },
          {
            "title": "Tala roble oscuro x128 (2 stacks)",
            "item": "minecraft:dark_oak_log",
            "amount": 128,
            "icon": "minecraft:dark_oak_log"
          },
          {
            "title": "Fabrica palos x128",
            "item": "minecraft:stick",
            "amount": 128,
            "icon": "minecraft:stick"
          },
          {
            "title": "Fabrica barril x8",
            "item": "minecraft:barrel",
            "amount": 8,
            "icon": "minecraft:barrel"
          }
        ],
        "reward": {
          "title": "620 monedas",
          "amount": 620,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 26,
        "title": "DIA 26 - Maderas del Nether",
        "tasks": [
          {
            "title": "Tala tallo carmesí x16",
            "item": "minecraft:crimson_stem",
            "amount": 16,
            "icon": "minecraft:crimson_stem"
          },
          {
            "title": "Tala tallo distorsionado x16",
            "item": "minecraft:warped_stem",
            "amount": 16,
            "icon": "minecraft:warped_stem"
          },
          {
            "title": "Recolecta hongo carmesí x3",
            "item": "minecraft:crimson_fungus",
            "amount": 3,
            "icon": "minecraft:crimson_fungus"
          },
          {
            "title": "Recolecta hongo distorsionado x3",
            "item": "minecraft:warped_fungus",
            "amount": 3,
            "icon": "minecraft:warped_fungus"
          },
          {
            "title": "Fabrica hacha de netherita x1",
            "item": "minecraft:netherite_axe",
            "amount": 1,
            "icon": "minecraft:netherite_axe"
          }
        ],
        "reward": {
          "title": "756 monedas",
          "amount": 756,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 27,
        "title": "DIA 27 - Colmenar del bosque",
        "tasks": [
          {
            "title": "Encuentra nido de abejas x1",
            "item": "minecraft:bee_nest",
            "amount": 1,
            "icon": "minecraft:bee_nest"
          },
          {
            "title": "Fabrica colmena x2",
            "item": "minecraft:beehive",
            "amount": 2,
            "icon": "minecraft:beehive"
          },
          {
            "title": "Recolecta panal x8",
            "item": "minecraft:honeycomb",
            "amount": 8,
            "icon": "minecraft:honeycomb"
          },
          {
            "title": "Tala abedul x128 (2 stacks)",
            "item": "minecraft:birch_log",
            "amount": 128,
            "icon": "minecraft:birch_log"
          },
          {
            "title": "Recolecta azalea x8",
            "item": "minecraft:azalea",
            "amount": 8,
            "icon": "minecraft:azalea"
          }
        ],
        "reward": {
          "title": "892 monedas",
          "amount": 892,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 28,
        "title": "DIA 28 - Árboles ornamentales",
        "tasks": [
          {
            "title": "Recolecta azalea florecida x8",
            "item": "minecraft:flowering_azalea",
            "amount": 8,
            "icon": "minecraft:flowering_azalea"
          },
          {
            "title": "Recolecta bloque de musgo x16",
            "item": "minecraft:moss_block",
            "amount": 16,
            "icon": "minecraft:moss_block"
          },
          {
            "title": "Recolecta tierra enraizada x8",
            "item": "minecraft:rooted_dirt",
            "amount": 8,
            "icon": "minecraft:rooted_dirt"
          },
          {
            "title": "Recolecta hojas de roble x64",
            "item": "minecraft:oak_leaves",
            "amount": 64,
            "icon": "minecraft:oak_leaves"
          },
          {
            "title": "Recolecta flor de esporas x2",
            "item": "minecraft:spore_blossom",
            "amount": 2,
            "icon": "minecraft:spore_blossom"
          }
        ],
        "reward": {
          "title": "1028 monedas",
          "amount": 1028,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 29,
        "title": "DIA 29 - La colección definitiva",
        "tasks": [
          {
            "title": "Tala abeto BOP x64",
            "item": "biomesoplenty:fir_log",
            "amount": 64,
            "icon": "biomesoplenty:fir_log"
          },
          {
            "title": "Tala secuoya x64",
            "item": "biomesoplenty:redwood_log",
            "amount": 64,
            "icon": "biomesoplenty:redwood_log"
          },
          {
            "title": "Tala roble x512 (8 stacks)",
            "item": "minecraft:oak_log",
            "amount": 512,
            "icon": "minecraft:oak_log"
          },
          {
            "title": "Fabrica fogata de almas x2",
            "item": "minecraft:soul_campfire",
            "amount": 2,
            "icon": "minecraft:soul_campfire"
          },
          {
            "title": "Fabrica andamios x32",
            "item": "minecraft:scaffolding",
            "amount": 32,
            "icon": "minecraft:scaffolding"
          }
        ],
        "reward": {
          "title": "1164 monedas",
          "amount": 1164,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 30,
        "title": "DIA 30 - Leyenda del bosque",
        "tasks": [
          {
            "title": "Tala tallo carmesí x64",
            "item": "minecraft:crimson_stem",
            "amount": 64,
            "icon": "minecraft:crimson_stem"
          },
          {
            "title": "Tala tallo distorsionado x64",
            "item": "minecraft:warped_stem",
            "amount": 64,
            "icon": "minecraft:warped_stem"
          },
          {
            "title": "Tala roble x1024 (16 stacks)",
            "item": "minecraft:oak_log",
            "amount": 1024,
            "icon": "minecraft:oak_log"
          },
          {
            "title": "Tala madera mágica x32",
            "item": "biomesoplenty:magic_log",
            "amount": 32,
            "icon": "biomesoplenty:magic_log"
          },
          {
            "title": "Tala jacarandá x32",
            "item": "biomesoplenty:jacaranda_log",
            "amount": 32,
            "icon": "biomesoplenty:jacaranda_log"
          }
        ],
        "reward": {
          "title": "1300 monedas",
          "amount": 1300,
          "icon": "saros__money_mod:euro_100"
        }
      }
    ]
  },
  {
    "id": "mecanico",
    "name": "Mecánico",
    "emoji": "🏎️",
    "color": "#E53935",
    "days": [
      {
        "day": 1,
        "title": "DIA 1 - Bienvenido al taller",
        "tasks": [
          {
            "title": "Consigue hierro x2",
            "item": "minecraft:iron_ingot",
            "amount": 2,
            "icon": "minecraft:iron_ingot"
          },
          {
            "title": "Mina carbón x3",
            "item": "minecraft:coal",
            "amount": 3,
            "icon": "minecraft:coal"
          },
          {
            "title": "Recolecta redstone x2",
            "item": "minecraft:redstone",
            "amount": 2,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Fabrica mesa de trabajo",
            "item": "minecraft:crafting_table",
            "amount": 1,
            "icon": "minecraft:crafting_table"
          },
          {
            "title": "Construye un horno",
            "item": "minecraft:furnace",
            "amount": 1,
            "icon": "minecraft:furnace"
          }
        ],
        "reward": {
          "title": "65 monedas",
          "amount": 65,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 2,
        "title": "DIA 2 - Herramientas básicas",
        "tasks": [
          {
            "title": "Fabrica pico de hierro",
            "item": "minecraft:iron_pickaxe",
            "amount": 1,
            "icon": "minecraft:iron_pickaxe"
          },
          {
            "title": "Fabrica hacha de hierro",
            "item": "minecraft:iron_axe",
            "amount": 1,
            "icon": "minecraft:iron_axe"
          },
          {
            "title": "Fabrica pala de hierro",
            "item": "minecraft:iron_shovel",
            "amount": 1,
            "icon": "minecraft:iron_shovel"
          },
          {
            "title": "Fabrica palanca de mecánico",
            "item": "automobility:crowbar",
            "amount": 1,
            "icon": "automobility:crowbar"
          },
          {
            "title": "Reúne piedra x16",
            "item": "minecraft:stone",
            "amount": 16,
            "icon": "minecraft:stone"
          }
        ],
        "reward": {
          "title": "75 monedas",
          "amount": 75,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 3,
        "title": "DIA 3 - Montando el taller",
        "tasks": [
          {
            "title": "Fabrica Mesa de Mecánico",
            "item": "automobility:auto_mechanic_table",
            "amount": 1,
            "icon": "automobility:auto_mechanic_table"
          },
          {
            "title": "Compacta hierro en bloque",
            "item": "minecraft:iron_block",
            "amount": 1,
            "icon": "minecraft:iron_block"
          },
          {
            "title": "Fabrica cofres x2",
            "item": "minecraft:chest",
            "amount": 2,
            "icon": "minecraft:chest"
          },
          {
            "title": "Funde hierro x5",
            "item": "minecraft:iron_ingot",
            "amount": 5,
            "icon": "minecraft:iron_ingot"
          },
          {
            "title": "Construye un yunque",
            "item": "minecraft:anvil",
            "amount": 1,
            "icon": "minecraft:anvil"
          }
        ],
        "reward": {
          "title": "85 monedas",
          "amount": 85,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 4,
        "title": "DIA 4 - Primeras piezas",
        "tasks": [
          {
            "title": "Fabrica bastidor de coche",
            "item": "automobility:automobile_frame",
            "amount": 1,
            "icon": "automobility:automobile_frame"
          },
          {
            "title": "Fabrica ruedas x2",
            "item": "automobility:wheel",
            "amount": 2,
            "icon": "automobility:wheel"
          },
          {
            "title": "Refina hierro x4",
            "item": "minecraft:iron_ingot",
            "amount": 4,
            "icon": "minecraft:iron_ingot"
          },
          {
            "title": "Consigue cuero x3",
            "item": "minecraft:leather",
            "amount": 3,
            "icon": "minecraft:leather"
          },
          {
            "title": "Consigue slime x2",
            "item": "minecraft:slime_ball",
            "amount": 2,
            "icon": "minecraft:slime_ball"
          }
        ],
        "reward": {
          "title": "100 monedas",
          "amount": 100,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 5,
        "title": "DIA 5 - El motor",
        "tasks": [
          {
            "title": "Fabrica el primer motor",
            "item": "automobility:engine",
            "amount": 1,
            "icon": "automobility:engine"
          },
          {
            "title": "Fabrica ruedas extra x2",
            "item": "automobility:wheel",
            "amount": 2,
            "icon": "automobility:wheel"
          },
          {
            "title": "Funde oro x2",
            "item": "minecraft:gold_ingot",
            "amount": 2,
            "icon": "minecraft:gold_ingot"
          },
          {
            "title": "Compacta redstone en bloque",
            "item": "minecraft:redstone_block",
            "amount": 1,
            "icon": "minecraft:redstone_block"
          },
          {
            "title": "Fabrica pistones x2",
            "item": "minecraft:piston",
            "amount": 2,
            "icon": "minecraft:piston"
          }
        ],
        "reward": {
          "title": "110 monedas",
          "amount": 110,
          "icon": "saros__money_mod:euro_200"
        }
      },
      {
        "day": 6,
        "title": "DIA 6 - Ensamblaje",
        "tasks": [
          {
            "title": "Fabrica Ensamblador de Coches",
            "item": "automobility:automobile_assembler",
            "amount": 1,
            "icon": "automobility:automobile_assembler"
          },
          {
            "title": "Prepara otro bastidor",
            "item": "automobility:automobile_frame",
            "amount": 1,
            "icon": "automobility:automobile_frame"
          },
          {
            "title": "Funde hierro x6",
            "item": "minecraft:iron_ingot",
            "amount": 6,
            "icon": "minecraft:iron_ingot"
          },
          {
            "title": "Fabrica observador",
            "item": "minecraft:observer",
            "amount": 1,
            "icon": "minecraft:observer"
          },
          {
            "title": "Fabrica dispensador",
            "item": "minecraft:dispenser",
            "amount": 1,
            "icon": "minecraft:dispenser"
          }
        ],
        "reward": {
          "title": "125 monedas",
          "amount": 125,
          "icon": "saros__money_mod:euro_200"
        }
      },
      {
        "day": 7,
        "title": "DIA 7 - ¡Tu primer coche!",
        "tasks": [
          {
            "title": "Fabrica motor mejorado",
            "item": "automobility:engine",
            "amount": 1,
            "icon": "automobility:engine"
          },
          {
            "title": "Fabrica juego completo de ruedas",
            "item": "automobility:wheel",
            "amount": 4,
            "icon": "automobility:wheel"
          },
          {
            "title": "Bastidor de competición",
            "item": "automobility:automobile_frame",
            "amount": 1,
            "icon": "automobility:automobile_frame"
          },
          {
            "title": "Consigue un diamante",
            "item": "minecraft:diamond",
            "amount": 1,
            "icon": "minecraft:diamond"
          },
          {
            "title": "Palanca de repuesto",
            "item": "automobility:crowbar",
            "amount": 1,
            "icon": "automobility:crowbar"
          }
        ],
        "reward": {
          "title": "140 monedas",
          "amount": 140,
          "icon": "saros__money_mod:euro_200"
        }
      },
      {
        "day": 8,
        "title": "DIA 8 - Construyendo la pista",
        "tasks": [
          {
            "title": "Fabrica paneles de pista x4",
            "item": "automobility:dash_panel",
            "amount": 4,
            "icon": "automobility:dash_panel"
          },
          {
            "title": "Fabrica rampas x3",
            "item": "automobility:slope",
            "amount": 3,
            "icon": "automobility:slope"
          },
          {
            "title": "Fabrica baldosas off-road x4",
            "item": "automobility:off_road",
            "amount": 4,
            "icon": "automobility:off_road"
          },
          {
            "title": "Ladrillos de piedra x16",
            "item": "minecraft:stone_bricks",
            "amount": 16,
            "icon": "minecraft:stone_bricks"
          },
          {
            "title": "Iluminación de pista",
            "item": "minecraft:glowstone",
            "amount": 2,
            "icon": "minecraft:glowstone"
          }
        ],
        "reward": {
          "title": "160 monedas",
          "amount": 160,
          "icon": "saros__money_mod:euro_200"
        }
      },
      {
        "day": 9,
        "title": "DIA 9 - Trazado del circuito",
        "tasks": [
          {
            "title": "Paneles de pista x6",
            "item": "automobility:dash_panel",
            "amount": 6,
            "icon": "automobility:dash_panel"
          },
          {
            "title": "Rampas para curvas x5",
            "item": "automobility:slope",
            "amount": 5,
            "icon": "automobility:slope"
          },
          {
            "title": "Marca la línea de meta",
            "item": "minecraft:white_wool",
            "amount": 8,
            "icon": "minecraft:white_wool"
          },
          {
            "title": "Semáforos de carrera",
            "item": "minecraft:redstone_lamp",
            "amount": 4,
            "icon": "minecraft:redstone_lamp"
          },
          {
            "title": "Barreras de seguridad",
            "item": "minecraft:iron_bars",
            "amount": 6,
            "icon": "minecraft:iron_bars"
          }
        ],
        "reward": {
          "title": "175 monedas",
          "amount": 175,
          "icon": "saros__money_mod:euro_200"
        }
      },
      {
        "day": 10,
        "title": "DIA 10 - Primera vuelta",
        "tasks": [
          {
            "title": "Repuestos de hierro x8",
            "item": "minecraft:iron_ingot",
            "amount": 8,
            "icon": "minecraft:iron_ingot"
          },
          {
            "title": "Motor de prueba",
            "item": "automobility:engine",
            "amount": 1,
            "icon": "automobility:engine"
          },
          {
            "title": "Bloque de carbón (combustible)",
            "item": "minecraft:coal_block",
            "amount": 2,
            "icon": "minecraft:coal_block"
          },
          {
            "title": "Ruedas de repuesto",
            "item": "automobility:wheel",
            "amount": 2,
            "icon": "automobility:wheel"
          },
          {
            "title": "Snack de carreras x3",
            "item": "minecraft:golden_carrot",
            "amount": 3,
            "icon": "minecraft:golden_carrot"
          }
        ],
        "reward": {
          "title": "190 monedas",
          "amount": 190,
          "icon": "saros__money_mod:euro_200"
        }
      },
      {
        "day": 11,
        "title": "DIA 11 - Ajustes y mejoras",
        "tasks": [
          {
            "title": "Diamantes para mejoras x2",
            "item": "minecraft:diamond",
            "amount": 2,
            "icon": "minecraft:diamond"
          },
          {
            "title": "Obsidiana reforzada x4",
            "item": "minecraft:obsidian",
            "amount": 4,
            "icon": "minecraft:obsidian"
          },
          {
            "title": "Extensión de pista x8",
            "item": "automobility:dash_panel",
            "amount": 8,
            "icon": "automobility:dash_panel"
          },
          {
            "title": "Rieles impulsores x6",
            "item": "minecraft:powered_rail",
            "amount": 6,
            "icon": "minecraft:powered_rail"
          },
          {
            "title": "Bocina de carrera",
            "item": "minecraft:note_block",
            "amount": 2,
            "icon": "minecraft:note_block"
          }
        ],
        "reward": {
          "title": "210 monedas",
          "amount": 210,
          "icon": "saros__money_mod:euro_200"
        }
      },
      {
        "day": 12,
        "title": "DIA 12 - Velocidad punta",
        "tasks": [
          {
            "title": "Motores mejorados x2",
            "item": "automobility:engine",
            "amount": 2,
            "icon": "automobility:engine"
          },
          {
            "title": "Bloque de oro (turbo)",
            "item": "minecraft:gold_block",
            "amount": 1,
            "icon": "minecraft:gold_block"
          },
          {
            "title": "Cuarzo del Nether x4",
            "item": "minecraft:nether_quartz",
            "amount": 4,
            "icon": "minecraft:nether_quartz"
          },
          {
            "title": "Ruedas de alto rendimiento",
            "item": "automobility:wheel",
            "amount": 4,
            "icon": "automobility:wheel"
          },
          {
            "title": "Carga ígnea (nitro)",
            "item": "minecraft:fire_charge",
            "amount": 2,
            "icon": "minecraft:fire_charge"
          }
        ],
        "reward": {
          "title": "230 monedas",
          "amount": 230,
          "icon": "saros__money_mod:euro_200"
        }
      },
      {
        "day": 13,
        "title": "DIA 13 - Pit Stop",
        "tasks": [
          {
            "title": "Bloques de hierro x2",
            "item": "minecraft:iron_block",
            "amount": 2,
            "icon": "minecraft:iron_block"
          },
          {
            "title": "Palancas de pits x2",
            "item": "automobility:crowbar",
            "amount": 2,
            "icon": "automobility:crowbar"
          },
          {
            "title": "Mesa en boxes",
            "item": "automobility:auto_mechanic_table",
            "amount": 1,
            "icon": "automobility:auto_mechanic_table"
          },
          {
            "title": "Tolvas de suministros x3",
            "item": "minecraft:hopper",
            "amount": 3,
            "icon": "minecraft:hopper"
          },
          {
            "title": "Cofre de repuestos",
            "item": "minecraft:ender_chest",
            "amount": 1,
            "icon": "minecraft:ender_chest"
          }
        ],
        "reward": {
          "title": "250 monedas",
          "amount": 250,
          "icon": "saros__money_mod:euro_200"
        }
      },
      {
        "day": 14,
        "title": "DIA 14 - Gran Premio de prueba",
        "tasks": [
          {
            "title": "Circuito completo x10",
            "item": "automobility:dash_panel",
            "amount": 10,
            "icon": "automobility:dash_panel"
          },
          {
            "title": "Zona de grava x6",
            "item": "automobility:off_road",
            "amount": 6,
            "icon": "automobility:off_road"
          },
          {
            "title": "Torre de control",
            "item": "minecraft:beacon",
            "amount": 1,
            "icon": "minecraft:beacon"
          },
          {
            "title": "Trofeo de prueba",
            "item": "minecraft:diamond_block",
            "amount": 1,
            "icon": "minecraft:diamond_block"
          },
          {
            "title": "Motor de reserva",
            "item": "automobility:engine",
            "amount": 1,
            "icon": "automobility:engine"
          }
        ],
        "reward": {
          "title": "275 monedas",
          "amount": 275,
          "icon": "saros__money_mod:euro_200"
        }
      },
      {
        "day": 15,
        "title": "DIA 15 - Aerodinámica",
        "tasks": [
          {
            "title": "Carrocería reforzada x3",
            "item": "minecraft:iron_block",
            "amount": 3,
            "icon": "minecraft:iron_block"
          },
          {
            "title": "Bloques elásticos x2",
            "item": "minecraft:slime_block",
            "amount": 2,
            "icon": "minecraft:slime_block"
          },
          {
            "title": "Rampas aerodinámicas x6",
            "item": "automobility:slope",
            "amount": 6,
            "icon": "automobility:slope"
          },
          {
            "title": "Sensor de peso",
            "item": "minecraft:light_weighted_pressure_plate",
            "amount": 2,
            "icon": "minecraft:light_weighted_pressure_plate"
          },
          {
            "title": "Membrana de alerón",
            "item": "minecraft:phantom_membrane",
            "amount": 2,
            "icon": "minecraft:phantom_membrane"
          }
        ],
        "reward": {
          "title": "300 monedas",
          "amount": 300,
          "icon": "saros__money_mod:euro_200"
        }
      },
      {
        "day": 16,
        "title": "DIA 16 - Neumáticos de competición",
        "tasks": [
          {
            "title": "Ruedas slick x6",
            "item": "automobility:wheel",
            "amount": 6,
            "icon": "automobility:wheel"
          },
          {
            "title": "Goma quemada x4",
            "item": "minecraft:black_wool",
            "amount": 4,
            "icon": "minecraft:black_wool"
          },
          {
            "title": "Carbón para caucho x3",
            "item": "minecraft:coal_block",
            "amount": 3,
            "icon": "minecraft:coal_block"
          },
          {
            "title": "Llanta de aleación x10",
            "item": "minecraft:iron_ingot",
            "amount": 10,
            "icon": "minecraft:iron_ingot"
          },
          {
            "title": "Compuesto adhesivo x4",
            "item": "minecraft:slime_ball",
            "amount": 4,
            "icon": "minecraft:slime_ball"
          }
        ],
        "reward": {
          "title": "325 monedas",
          "amount": 325,
          "icon": "saros__money_mod:euro_200"
        }
      },
      {
        "day": 17,
        "title": "DIA 17 - Sistema de escape",
        "tasks": [
          {
            "title": "Tubos de escape x3",
            "item": "minecraft:furnace",
            "amount": 3,
            "icon": "minecraft:furnace"
          },
          {
            "title": "Rejilla de ventilación x4",
            "item": "minecraft:iron_bars",
            "amount": 4,
            "icon": "minecraft:iron_bars"
          },
          {
            "title": "Motores turbo x2",
            "item": "automobility:engine",
            "amount": 2,
            "icon": "automobility:engine"
          },
          {
            "title": "Alto horno (fundición)",
            "item": "minecraft:blast_furnace",
            "amount": 1,
            "icon": "minecraft:blast_furnace"
          },
          {
            "title": "Ladrillos refractarios",
            "item": "minecraft:nether_bricks",
            "amount": 8,
            "icon": "minecraft:nether_bricks"
          }
        ],
        "reward": {
          "title": "350 monedas",
          "amount": 350,
          "icon": "saros__money_mod:euro_200"
        }
      },
      {
        "day": 18,
        "title": "DIA 18 - Electrónica de a bordo",
        "tasks": [
          {
            "title": "Centralita electrónica",
            "item": "minecraft:redstone_block",
            "amount": 2,
            "icon": "minecraft:redstone_block"
          },
          {
            "title": "Comparadores x2",
            "item": "minecraft:comparator",
            "amount": 2,
            "icon": "minecraft:comparator"
          },
          {
            "title": "Sensor de luz",
            "item": "minecraft:daylight_detector",
            "amount": 1,
            "icon": "minecraft:daylight_detector"
          },
          {
            "title": "Repetidores de señal x4",
            "item": "minecraft:repeater",
            "amount": 4,
            "icon": "minecraft:repeater"
          },
          {
            "title": "Sensor de proximidad",
            "item": "minecraft:target",
            "amount": 2,
            "icon": "minecraft:target"
          }
        ],
        "reward": {
          "title": "375 monedas",
          "amount": 375,
          "icon": "saros__money_mod:euro_200"
        }
      },
      {
        "day": 19,
        "title": "DIA 19 - Clasificación",
        "tasks": [
          {
            "title": "Pista de clasificación",
            "item": "automobility:dash_panel",
            "amount": 12,
            "icon": "automobility:dash_panel"
          },
          {
            "title": "Panel de tiempos x6",
            "item": "minecraft:redstone_lamp",
            "amount": 6,
            "icon": "minecraft:redstone_lamp"
          },
          {
            "title": "Cronómetros x2",
            "item": "minecraft:clock",
            "amount": 2,
            "icon": "minecraft:clock"
          },
          {
            "title": "Motor de clasificación",
            "item": "automobility:engine",
            "amount": 1,
            "icon": "automobility:engine"
          },
          {
            "title": "Premio pole position",
            "item": "minecraft:emerald",
            "amount": 2,
            "icon": "minecraft:emerald"
          }
        ],
        "reward": {
          "title": "400 monedas",
          "amount": 400,
          "icon": "saros__money_mod:euro_200"
        }
      },
      {
        "day": 20,
        "title": "DIA 20 - Pole Position",
        "tasks": [
          {
            "title": "Escapatorias x8",
            "item": "automobility:off_road",
            "amount": 8,
            "icon": "automobility:off_road"
          },
          {
            "title": "Iluminación LED x4",
            "item": "minecraft:sea_lantern",
            "amount": 4,
            "icon": "minecraft:sea_lantern"
          },
          {
            "title": "Ruedas de clasificación",
            "item": "automobility:wheel",
            "amount": 4,
            "icon": "automobility:wheel"
          },
          {
            "title": "Patrocinador azul",
            "item": "minecraft:lapis_block",
            "amount": 2,
            "icon": "minecraft:lapis_block"
          },
          {
            "title": "Contrato de patrocinio",
            "item": "minecraft:diamond",
            "amount": 3,
            "icon": "minecraft:diamond"
          }
        ],
        "reward": {
          "title": "430 monedas",
          "amount": 430,
          "icon": "saros__money_mod:euro_200"
        }
      },
      {
        "day": 21,
        "title": "DIA 21 - Safety Car",
        "tasks": [
          {
            "title": "Coche de seguridad",
            "item": "minecraft:gold_block",
            "amount": 2,
            "icon": "minecraft:gold_block"
          },
          {
            "title": "Banderas naranjas x6",
            "item": "minecraft:orange_wool",
            "amount": 6,
            "icon": "minecraft:orange_wool"
          },
          {
            "title": "Luces de advertencia",
            "item": "minecraft:redstone_torch",
            "amount": 4,
            "icon": "minecraft:redstone_torch"
          },
          {
            "title": "Zona de safety car",
            "item": "automobility:dash_panel",
            "amount": 6,
            "icon": "automobility:dash_panel"
          },
          {
            "title": "Barrera móvil x4",
            "item": "minecraft:iron_trapdoor",
            "amount": 4,
            "icon": "minecraft:iron_trapdoor"
          }
        ],
        "reward": {
          "title": "460 monedas",
          "amount": 460,
          "icon": "saros__money_mod:euro_200"
        }
      },
      {
        "day": 22,
        "title": "DIA 22 - Coche de reserva",
        "tasks": [
          {
            "title": "Bastidores x2",
            "item": "automobility:automobile_frame",
            "amount": 2,
            "icon": "automobility:automobile_frame"
          },
          {
            "title": "Motores de reserva x2",
            "item": "automobility:engine",
            "amount": 2,
            "icon": "automobility:engine"
          },
          {
            "title": "Ruedas completas x8",
            "item": "automobility:wheel",
            "amount": 8,
            "icon": "automobility:wheel"
          },
          {
            "title": "Segundo ensamblador",
            "item": "automobility:automobile_assembler",
            "amount": 1,
            "icon": "automobility:automobile_assembler"
          },
          {
            "title": "Refuerzos de chasis x4",
            "item": "minecraft:iron_block",
            "amount": 4,
            "icon": "minecraft:iron_block"
          }
        ],
        "reward": {
          "title": "500 monedas",
          "amount": 500,
          "icon": "saros__money_mod:euro_200"
        }
      },
      {
        "day": 23,
        "title": "DIA 23 - Gran Premio Sprint",
        "tasks": [
          {
            "title": "Curvas técnicas x8",
            "item": "automobility:slope",
            "amount": 8,
            "icon": "automobility:slope"
          },
          {
            "title": "Medallas de sprint x6",
            "item": "minecraft:gold_ingot",
            "amount": 6,
            "icon": "minecraft:gold_ingot"
          },
          {
            "title": "Circuito sprint x10",
            "item": "automobility:dash_panel",
            "amount": 10,
            "icon": "automobility:dash_panel"
          },
          {
            "title": "Trofeo de etapa",
            "item": "minecraft:emerald_block",
            "amount": 1,
            "icon": "minecraft:emerald_block"
          },
          {
            "title": "Motor sprint",
            "item": "automobility:engine",
            "amount": 1,
            "icon": "automobility:engine"
          }
        ],
        "reward": {
          "title": "540 monedas",
          "amount": 540,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 24,
        "title": "DIA 24 - Resistencia",
        "tasks": [
          {
            "title": "Tramo de resistencia",
            "item": "automobility:off_road",
            "amount": 10,
            "icon": "automobility:off_road"
          },
          {
            "title": "Combustible extra x5",
            "item": "minecraft:coal_block",
            "amount": 5,
            "icon": "minecraft:coal_block"
          },
          {
            "title": "Ruedas de larga distancia",
            "item": "automobility:wheel",
            "amount": 6,
            "icon": "automobility:wheel"
          },
          {
            "title": "Manzanas doradas (avituallamiento)",
            "item": "minecraft:gapple",
            "amount": 3,
            "icon": "minecraft:gapple"
          },
          {
            "title": "Box móvil",
            "item": "automobility:auto_mechanic_table",
            "amount": 1,
            "icon": "automobility:auto_mechanic_table"
          }
        ],
        "reward": {
          "title": "580 monedas",
          "amount": 580,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 25,
        "title": "DIA 25 - Lluvia y adversidad",
        "tasks": [
          {
            "title": "Simulación de lluvia x3",
            "item": "minecraft:water_bucket",
            "amount": 3,
            "icon": "minecraft:water_bucket"
          },
          {
            "title": "Ruedas de lluvia x4",
            "item": "automobility:wheel",
            "amount": 4,
            "icon": "automobility:wheel"
          },
          {
            "title": "Drenaje de pista x2",
            "item": "minecraft:sponge",
            "amount": 2,
            "icon": "minecraft:sponge"
          },
          {
            "title": "Antorchas de visibilidad",
            "item": "minecraft:soul_torch",
            "amount": 4,
            "icon": "minecraft:soul_torch"
          },
          {
            "title": "Pista mojada x8",
            "item": "automobility:dash_panel",
            "amount": 8,
            "icon": "automobility:dash_panel"
          }
        ],
        "reward": {
          "title": "620 monedas",
          "amount": 620,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 26,
        "title": "DIA 26 - Gran Premio Nocturno",
        "tasks": [
          {
            "title": "Iluminación nocturna x8",
            "item": "minecraft:sea_lantern",
            "amount": 8,
            "icon": "minecraft:sea_lantern"
          },
          {
            "title": "Faros de pista x6",
            "item": "minecraft:glowstone",
            "amount": 6,
            "icon": "minecraft:glowstone"
          },
          {
            "title": "Circuito iluminado x12",
            "item": "automobility:dash_panel",
            "amount": 12,
            "icon": "automobility:dash_panel"
          },
          {
            "title": "Visión nocturna",
            "item": "minecraft:ender_eye",
            "amount": 2,
            "icon": "minecraft:ender_eye"
          },
          {
            "title": "Trofeo estelar",
            "item": "minecraft:nether_star",
            "amount": 1,
            "icon": "minecraft:nether_star"
          }
        ],
        "reward": {
          "title": "680 monedas",
          "amount": 680,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 27,
        "title": "DIA 27 - Semifinal",
        "tasks": [
          {
            "title": "Motores de competición x3",
            "item": "automobility:engine",
            "amount": 3,
            "icon": "automobility:engine"
          },
          {
            "title": "Patrocinador diamante",
            "item": "minecraft:diamond_block",
            "amount": 1,
            "icon": "minecraft:diamond_block"
          },
          {
            "title": "Ruedas premium x8",
            "item": "automobility:wheel",
            "amount": 8,
            "icon": "automobility:wheel"
          },
          {
            "title": "Trofeo de semifinal",
            "item": "minecraft:beacon",
            "amount": 1,
            "icon": "minecraft:beacon"
          },
          {
            "title": "Chasis de campeonato",
            "item": "automobility:automobile_frame",
            "amount": 1,
            "icon": "automobility:automobile_frame"
          }
        ],
        "reward": {
          "title": "750 monedas",
          "amount": 750,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 28,
        "title": "DIA 28 - La Gran Final",
        "tasks": [
          {
            "title": "Circuito del campeonato",
            "item": "automobility:dash_panel",
            "amount": 16,
            "icon": "automobility:dash_panel"
          },
          {
            "title": "Curvas definitivas x10",
            "item": "automobility:slope",
            "amount": 10,
            "icon": "automobility:slope"
          },
          {
            "title": "Trofeo de campeón",
            "item": "minecraft:diamond_block",
            "amount": 2,
            "icon": "minecraft:diamond_block"
          },
          {
            "title": "Motores de la final",
            "item": "automobility:engine",
            "amount": 2,
            "icon": "automobility:engine"
          },
          {
            "title": "Contratos de F1",
            "item": "minecraft:emerald_block",
            "amount": 3,
            "icon": "minecraft:emerald_block"
          }
        ],
        "reward": {
          "title": "850 monedas",
          "amount": 850,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 29,
        "title": "DIA 29 - Salón de la Fama",
        "tasks": [
          {
            "title": "Museo del motor",
            "item": "minecraft:emerald_block",
            "amount": 4,
            "icon": "minecraft:emerald_block"
          },
          {
            "title": "Expositor de trofeos x8",
            "item": "minecraft:item_frame",
            "amount": 8,
            "icon": "minecraft:item_frame"
          },
          {
            "title": "Coches de exhibición",
            "item": "automobility:automobile_frame",
            "amount": 2,
            "icon": "automobility:automobile_frame"
          },
          {
            "title": "Placa conmemorativa",
            "item": "minecraft:netherite_ingot",
            "amount": 1,
            "icon": "minecraft:netherite_ingot"
          },
          {
            "title": "Columnas de la fama x2",
            "item": "minecraft:beacon",
            "amount": 2,
            "icon": "minecraft:beacon"
          }
        ],
        "reward": {
          "title": "1000 monedas",
          "amount": 1000,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 30,
        "title": "DIA 30 - Leyenda de Snickerland",
        "tasks": [
          {
            "title": "Autódromo Snickerland",
            "item": "automobility:dash_panel",
            "amount": 20,
            "icon": "automobility:dash_panel"
          },
          {
            "title": "Motores legendarios x4",
            "item": "automobility:engine",
            "amount": 4,
            "icon": "automobility:engine"
          },
          {
            "title": "Trofeo de Leyenda",
            "item": "minecraft:netherite_block",
            "amount": 1,
            "icon": "minecraft:netherite_block"
          },
          {
            "title": "Ruedas supremas x10",
            "item": "automobility:wheel",
            "amount": 10,
            "icon": "automobility:wheel"
          },
          {
            "title": "Celebración del campeón",
            "item": "minecraft:enchanted_golden_apple",
            "amount": 2,
            "icon": "minecraft:enchanted_golden_apple"
          }
        ],
        "reward": {
          "title": "1300 monedas",
          "amount": 1300,
          "icon": "saros__money_mod:euro_100"
        }
      }
    ]
  },
  {
    "id": "minero",
    "name": "Minero",
    "emoji": "⛏️",
    "color": "#8D6E63",
    "days": [
      {
        "day": 1,
        "title": "DIA 1 - Primer pico de piedra",
        "tasks": [
          {
            "title": "Pica piedra x16",
            "item": "minecraft:cobblestone",
            "amount": 16,
            "icon": "minecraft:cobblestone"
          },
          {
            "title": "Mina carbón x8",
            "item": "minecraft:coal",
            "amount": 8,
            "icon": "minecraft:coal"
          },
          {
            "title": "Fabrica palos x8",
            "item": "minecraft:stick",
            "amount": 8,
            "icon": "minecraft:stick"
          },
          {
            "title": "Fabrica pico de piedra",
            "item": "minecraft:stone_pickaxe",
            "amount": 1,
            "icon": "minecraft:stone_pickaxe"
          },
          {
            "title": "Fabrica antorchas x8",
            "item": "minecraft:torch",
            "amount": 8,
            "icon": "minecraft:torch"
          }
        ],
        "reward": {
          "title": "65 monedas",
          "amount": 65,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 2,
        "title": "DIA 2 - El cobre reluciente",
        "tasks": [
          {
            "title": "Mina mena de cobre x12",
            "item": "minecraft:copper_ore",
            "amount": 12,
            "icon": "minecraft:copper_ore"
          },
          {
            "title": "Recolecta cobre crudo x12",
            "item": "minecraft:raw_copper",
            "amount": 12,
            "icon": "minecraft:raw_copper"
          },
          {
            "title": "Mina carbón x16",
            "item": "minecraft:coal",
            "amount": 16,
            "icon": "minecraft:coal"
          },
          {
            "title": "Fabrica antorchas x16",
            "item": "minecraft:torch",
            "amount": 16,
            "icon": "minecraft:torch"
          },
          {
            "title": "Fabrica picos de piedra x3",
            "item": "minecraft:stone_pickaxe",
            "amount": 3,
            "icon": "minecraft:stone_pickaxe"
          }
        ],
        "reward": {
          "title": "76 monedas",
          "amount": 76,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 3,
        "title": "DIA 3 - Fundición y hierro",
        "tasks": [
          {
            "title": "Mina mena de hierro x10",
            "item": "minecraft:iron_ore",
            "amount": 10,
            "icon": "minecraft:iron_ore"
          },
          {
            "title": "Recolecta hierro crudo x10",
            "item": "minecraft:raw_iron",
            "amount": 10,
            "icon": "minecraft:raw_iron"
          },
          {
            "title": "Fabrica hornos x2",
            "item": "minecraft:furnace",
            "amount": 2,
            "icon": "minecraft:furnace"
          },
          {
            "title": "Funde lingotes de hierro x3",
            "item": "minecraft:iron_ingot",
            "amount": 3,
            "icon": "minecraft:iron_ingot"
          },
          {
            "title": "Mina carbón x24",
            "item": "minecraft:coal",
            "amount": 24,
            "icon": "minecraft:coal"
          }
        ],
        "reward": {
          "title": "88 monedas",
          "amount": 88,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 4,
        "title": "DIA 4 - Pico de hierro forjado",
        "tasks": [
          {
            "title": "Funde lingotes de hierro x5",
            "item": "minecraft:iron_ingot",
            "amount": 5,
            "icon": "minecraft:iron_ingot"
          },
          {
            "title": "Fabrica pico de hierro",
            "item": "minecraft:iron_pickaxe",
            "amount": 1,
            "icon": "minecraft:iron_pickaxe"
          },
          {
            "title": "Recolecta cobre crudo x24",
            "item": "minecraft:raw_copper",
            "amount": 24,
            "icon": "minecraft:raw_copper"
          },
          {
            "title": "Recolecta hierro crudo x16",
            "item": "minecraft:raw_iron",
            "amount": 16,
            "icon": "minecraft:raw_iron"
          },
          {
            "title": "Fabrica antorchas x32",
            "item": "minecraft:torch",
            "amount": 32,
            "icon": "minecraft:torch"
          }
        ],
        "reward": {
          "title": "99 monedas",
          "amount": 99,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 5,
        "title": "DIA 5 - Equipando la expedición",
        "tasks": [
          {
            "title": "Fabrica cofres x4",
            "item": "minecraft:chest",
            "amount": 4,
            "icon": "minecraft:chest"
          },
          {
            "title": "Fabrica escaleras x32",
            "item": "minecraft:ladder",
            "amount": 32,
            "icon": "minecraft:ladder"
          },
          {
            "title": "Fabrica antorchas x64",
            "item": "minecraft:torch",
            "amount": 64,
            "icon": "minecraft:torch"
          },
          {
            "title": "Fabrica picos de hierro x3",
            "item": "minecraft:iron_pickaxe",
            "amount": 3,
            "icon": "minecraft:iron_pickaxe"
          },
          {
            "title": "Funde lingotes de hierro x12",
            "item": "minecraft:iron_ingot",
            "amount": 12,
            "icon": "minecraft:iron_ingot"
          }
        ],
        "reward": {
          "title": "110 monedas",
          "amount": 110,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 6,
        "title": "DIA 6 - Descenso a la pizarra profunda",
        "tasks": [
          {
            "title": "Pica pizarra profunda x48",
            "item": "minecraft:deepslate",
            "amount": 48,
            "icon": "minecraft:deepslate"
          },
          {
            "title": "Mina hierro profundo x12",
            "item": "minecraft:deepslate_iron_ore",
            "amount": 12,
            "icon": "minecraft:deepslate_iron_ore"
          },
          {
            "title": "Recolecta hierro crudo x24",
            "item": "minecraft:raw_iron",
            "amount": 24,
            "icon": "minecraft:raw_iron"
          },
          {
            "title": "Fabrica antorchas x80",
            "item": "minecraft:torch",
            "amount": 80,
            "icon": "minecraft:torch"
          },
          {
            "title": "Fabrica picos de hierro x4",
            "item": "minecraft:iron_pickaxe",
            "amount": 4,
            "icon": "minecraft:iron_pickaxe"
          }
        ],
        "reward": {
          "title": "126 monedas",
          "amount": 126,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 7,
        "title": "DIA 7 - El azul del lapislázuli",
        "tasks": [
          {
            "title": "Mina lapislázuli profundo x10",
            "item": "minecraft:deepslate_lapis_ore",
            "amount": 10,
            "icon": "minecraft:deepslate_lapis_ore"
          },
          {
            "title": "Recolecta lapislázuli x48",
            "item": "minecraft:lapis_lazuli",
            "amount": 48,
            "icon": "minecraft:lapis_lazuli"
          },
          {
            "title": "Pica pizarra profunda x64",
            "item": "minecraft:deepslate",
            "amount": 64,
            "icon": "minecraft:deepslate"
          },
          {
            "title": "Mina carbón x48",
            "item": "minecraft:coal",
            "amount": 48,
            "icon": "minecraft:coal"
          },
          {
            "title": "Fabrica antorchas x96",
            "item": "minecraft:torch",
            "amount": 96,
            "icon": "minecraft:torch"
          }
        ],
        "reward": {
          "title": "142 monedas",
          "amount": 142,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 8,
        "title": "DIA 8 - Oro en las profundidades",
        "tasks": [
          {
            "title": "Mina oro profundo x10",
            "item": "minecraft:deepslate_gold_ore",
            "amount": 10,
            "icon": "minecraft:deepslate_gold_ore"
          },
          {
            "title": "Recolecta oro crudo x10",
            "item": "minecraft:raw_gold",
            "amount": 10,
            "icon": "minecraft:raw_gold"
          },
          {
            "title": "Funde lingotes de oro x5",
            "item": "minecraft:gold_ingot",
            "amount": 5,
            "icon": "minecraft:gold_ingot"
          },
          {
            "title": "Mina hierro profundo x16",
            "item": "minecraft:deepslate_iron_ore",
            "amount": 16,
            "icon": "minecraft:deepslate_iron_ore"
          },
          {
            "title": "Recolecta lapislázuli x64",
            "item": "minecraft:lapis_lazuli",
            "amount": 64,
            "icon": "minecraft:lapis_lazuli"
          }
        ],
        "reward": {
          "title": "158 monedas",
          "amount": 158,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 9,
        "title": "DIA 9 - El polvo rojo del ingenio",
        "tasks": [
          {
            "title": "Mina redstone profundo x12",
            "item": "minecraft:deepslate_redstone_ore",
            "amount": 12,
            "icon": "minecraft:deepslate_redstone_ore"
          },
          {
            "title": "Recolecta redstone x64",
            "item": "minecraft:redstone",
            "amount": 64,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Mina lapislázuli profundo x16",
            "item": "minecraft:deepslate_lapis_ore",
            "amount": 16,
            "icon": "minecraft:deepslate_lapis_ore"
          },
          {
            "title": "Fabrica antorchas x128",
            "item": "minecraft:torch",
            "amount": 128,
            "icon": "minecraft:torch"
          },
          {
            "title": "Funde lingotes de oro x8",
            "item": "minecraft:gold_ingot",
            "amount": 8,
            "icon": "minecraft:gold_ingot"
          }
        ],
        "reward": {
          "title": "174 monedas",
          "amount": 174,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 10,
        "title": "DIA 10 - Ramificación y diamantes",
        "tasks": [
          {
            "title": "Mina diamante profundo x4",
            "item": "minecraft:deepslate_diamond_ore",
            "amount": 4,
            "icon": "minecraft:deepslate_diamond_ore"
          },
          {
            "title": "Recolecta diamantes x4",
            "item": "minecraft:diamond",
            "amount": 4,
            "icon": "minecraft:diamond"
          },
          {
            "title": "Fabrica pico de diamante",
            "item": "minecraft:diamond_pickaxe",
            "amount": 1,
            "icon": "minecraft:diamond_pickaxe"
          },
          {
            "title": "Recolecta redstone x80",
            "item": "minecraft:redstone",
            "amount": 80,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Mina redstone profundo x18",
            "item": "minecraft:deepslate_redstone_ore",
            "amount": 18,
            "icon": "minecraft:deepslate_redstone_ore"
          }
        ],
        "reward": {
          "title": "190 monedas",
          "amount": 190,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 11,
        "title": "DIA 11 - Exploración de cavernas",
        "tasks": [
          {
            "title": "Pica piedra x128",
            "item": "minecraft:cobblestone",
            "amount": 128,
            "icon": "minecraft:cobblestone"
          },
          {
            "title": "Mina carbón x96",
            "item": "minecraft:coal",
            "amount": 96,
            "icon": "minecraft:coal"
          },
          {
            "title": "Fabrica antorchas x192",
            "item": "minecraft:torch",
            "amount": 192,
            "icon": "minecraft:torch"
          },
          {
            "title": "Fabrica escaleras x64",
            "item": "minecraft:ladder",
            "amount": 64,
            "icon": "minecraft:ladder"
          },
          {
            "title": "Fabrica cubo de agua",
            "item": "minecraft:water_bucket",
            "amount": 1,
            "icon": "minecraft:water_bucket"
          }
        ],
        "reward": {
          "title": "212 monedas",
          "amount": 212,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 12,
        "title": "DIA 12 - Vías subterráneas",
        "tasks": [
          {
            "title": "Fabrica raíles x48",
            "item": "minecraft:rail",
            "amount": 48,
            "icon": "minecraft:rail"
          },
          {
            "title": "Fabrica vagonetas x2",
            "item": "minecraft:minecart",
            "amount": 2,
            "icon": "minecraft:minecart"
          },
          {
            "title": "Funde lingotes de oro x8",
            "item": "minecraft:gold_ingot",
            "amount": 8,
            "icon": "minecraft:gold_ingot"
          },
          {
            "title": "Funde lingotes de hierro x20",
            "item": "minecraft:iron_ingot",
            "amount": 20,
            "icon": "minecraft:iron_ingot"
          },
          {
            "title": "Recolecta redstone x48",
            "item": "minecraft:redstone",
            "amount": 48,
            "icon": "minecraft:redstone"
          }
        ],
        "reward": {
          "title": "234 monedas",
          "amount": 234,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 13,
        "title": "DIA 13 - Vías motorizadas",
        "tasks": [
          {
            "title": "Fabrica raíl propulsor x20",
            "item": "minecraft:powered_rail",
            "amount": 20,
            "icon": "minecraft:powered_rail"
          },
          {
            "title": "Funde lingotes de oro x14",
            "item": "minecraft:gold_ingot",
            "amount": 14,
            "icon": "minecraft:gold_ingot"
          },
          {
            "title": "Recolecta redstone x64",
            "item": "minecraft:redstone",
            "amount": 64,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Fabrica vagoneta con cofre x2",
            "item": "minecraft:chest_minecart",
            "amount": 2,
            "icon": "minecraft:chest_minecart"
          },
          {
            "title": "Fabrica raíles x64",
            "item": "minecraft:rail",
            "amount": 64,
            "icon": "minecraft:rail"
          }
        ],
        "reward": {
          "title": "256 monedas",
          "amount": 256,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 14,
        "title": "DIA 14 - Fortificación minera",
        "tasks": [
          {
            "title": "Pica piedra x192",
            "item": "minecraft:cobblestone",
            "amount": 192,
            "icon": "minecraft:cobblestone"
          },
          {
            "title": "Fabrica antorchas x256",
            "item": "minecraft:torch",
            "amount": 256,
            "icon": "minecraft:torch"
          },
          {
            "title": "Fabrica picos de diamante x2",
            "item": "minecraft:diamond_pickaxe",
            "amount": 2,
            "icon": "minecraft:diamond_pickaxe"
          },
          {
            "title": "Funde lingotes de hierro x28",
            "item": "minecraft:iron_ingot",
            "amount": 28,
            "icon": "minecraft:iron_ingot"
          },
          {
            "title": "Fabrica vagoneta con horno",
            "item": "minecraft:furnace_minecart",
            "amount": 1,
            "icon": "minecraft:furnace_minecart"
          }
        ],
        "reward": {
          "title": "278 monedas",
          "amount": 278,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 15,
        "title": "DIA 15 - Detección y control",
        "tasks": [
          {
            "title": "Fabrica raíl detector x8",
            "item": "minecraft:detector_rail",
            "amount": 8,
            "icon": "minecraft:detector_rail"
          },
          {
            "title": "Fabrica raíl propulsor x28",
            "item": "minecraft:powered_rail",
            "amount": 28,
            "icon": "minecraft:powered_rail"
          },
          {
            "title": "Funde lingotes de oro x18",
            "item": "minecraft:gold_ingot",
            "amount": 18,
            "icon": "minecraft:gold_ingot"
          },
          {
            "title": "Recolecta redstone x96",
            "item": "minecraft:redstone",
            "amount": 96,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Fabrica picos de diamante x3",
            "item": "minecraft:diamond_pickaxe",
            "amount": 3,
            "icon": "minecraft:diamond_pickaxe"
          }
        ],
        "reward": {
          "title": "300 monedas",
          "amount": 300,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 16,
        "title": "DIA 16 - Portal al inframundo",
        "tasks": [
          {
            "title": "Mina obsidiana x14",
            "item": "minecraft:obsidian",
            "amount": 14,
            "icon": "minecraft:obsidian"
          },
          {
            "title": "Fabrica picos de diamante x2",
            "item": "minecraft:diamond_pickaxe",
            "amount": 2,
            "icon": "minecraft:diamond_pickaxe"
          },
          {
            "title": "Recolecta diamantes x6",
            "item": "minecraft:diamond",
            "amount": 6,
            "icon": "minecraft:diamond"
          },
          {
            "title": "Fabrica cubos de agua x2",
            "item": "minecraft:water_bucket",
            "amount": 2,
            "icon": "minecraft:water_bucket"
          },
          {
            "title": "Fabrica mechero",
            "item": "minecraft:flint_and_steel",
            "amount": 1,
            "icon": "minecraft:flint_and_steel"
          }
        ],
        "reward": {
          "title": "326 monedas",
          "amount": 326,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 17,
        "title": "DIA 17 - Cuarzo del Nether",
        "tasks": [
          {
            "title": "Mina mena de cuarzo x20",
            "item": "minecraft:nether_quartz_ore",
            "amount": 20,
            "icon": "minecraft:nether_quartz_ore"
          },
          {
            "title": "Recolecta cuarzo x64",
            "item": "minecraft:quartz",
            "amount": 64,
            "icon": "minecraft:quartz"
          },
          {
            "title": "Mina oro del Nether x16",
            "item": "minecraft:nether_gold_ore",
            "amount": 16,
            "icon": "minecraft:nether_gold_ore"
          },
          {
            "title": "Recolecta pepitas de oro x40",
            "item": "minecraft:gold_nugget",
            "amount": 40,
            "icon": "minecraft:gold_nugget"
          },
          {
            "title": "Mina glowstone x16",
            "item": "minecraft:glowstone",
            "amount": 16,
            "icon": "minecraft:glowstone"
          }
        ],
        "reward": {
          "title": "352 monedas",
          "amount": 352,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 18,
        "title": "DIA 18 - Trueque y tesoros dorados",
        "tasks": [
          {
            "title": "Recolecta pepitas de oro x72",
            "item": "minecraft:gold_nugget",
            "amount": 72,
            "icon": "minecraft:gold_nugget"
          },
          {
            "title": "Craftea lingotes de oro x10",
            "item": "minecraft:gold_ingot",
            "amount": 10,
            "icon": "minecraft:gold_ingot"
          },
          {
            "title": "Mina mena de cuarzo x32",
            "item": "minecraft:nether_quartz_ore",
            "amount": 32,
            "icon": "minecraft:nether_quartz_ore"
          },
          {
            "title": "Mina piedra negra dorada x8",
            "item": "minecraft:gilded_blackstone",
            "amount": 8,
            "icon": "minecraft:gilded_blackstone"
          },
          {
            "title": "Mina glowstone x32",
            "item": "minecraft:glowstone",
            "amount": 32,
            "icon": "minecraft:glowstone"
          }
        ],
        "reward": {
          "title": "378 monedas",
          "amount": 378,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 19,
        "title": "DIA 19 - Rescoldo de la antigüedad",
        "tasks": [
          {
            "title": "Mina escombros ancestrales x4",
            "item": "minecraft:ancient_debris",
            "amount": 4,
            "icon": "minecraft:ancient_debris"
          },
          {
            "title": "Recolecta fragmento de netherita x4",
            "item": "minecraft:netherite_scrap",
            "amount": 4,
            "icon": "minecraft:netherite_scrap"
          },
          {
            "title": "Craftea lingotes de oro x16",
            "item": "minecraft:gold_ingot",
            "amount": 16,
            "icon": "minecraft:gold_ingot"
          },
          {
            "title": "Mina mena de cuarzo x40",
            "item": "minecraft:nether_quartz_ore",
            "amount": 40,
            "icon": "minecraft:nether_quartz_ore"
          },
          {
            "title": "Mina glowstone x40",
            "item": "minecraft:glowstone",
            "amount": 40,
            "icon": "minecraft:glowstone"
          }
        ],
        "reward": {
          "title": "404 monedas",
          "amount": 404,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 20,
        "title": "DIA 20 - Nace la netherita",
        "tasks": [
          {
            "title": "Mina escombros ancestrales x8",
            "item": "minecraft:ancient_debris",
            "amount": 8,
            "icon": "minecraft:ancient_debris"
          },
          {
            "title": "Recolecta fragmento de netherita x8",
            "item": "minecraft:netherite_scrap",
            "amount": 8,
            "icon": "minecraft:netherite_scrap"
          },
          {
            "title": "Fabrica lingote de netherita",
            "item": "minecraft:netherite_ingot",
            "amount": 1,
            "icon": "minecraft:netherite_ingot"
          },
          {
            "title": "Fabrica pico de netherita",
            "item": "minecraft:netherite_pickaxe",
            "amount": 1,
            "icon": "minecraft:netherite_pickaxe"
          },
          {
            "title": "Craftea lingotes de oro x24",
            "item": "minecraft:gold_ingot",
            "amount": 24,
            "icon": "minecraft:gold_ingot"
          }
        ],
        "reward": {
          "title": "430 monedas",
          "amount": 430,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 21,
        "title": "DIA 21 - La mesa de encantamientos",
        "tasks": [
          {
            "title": "Mina obsidiana x16",
            "item": "minecraft:obsidian",
            "amount": 16,
            "icon": "minecraft:obsidian"
          },
          {
            "title": "Recolecta diamantes x10",
            "item": "minecraft:diamond",
            "amount": 10,
            "icon": "minecraft:diamond"
          },
          {
            "title": "Fabrica picos de diamante x2",
            "item": "minecraft:diamond_pickaxe",
            "amount": 2,
            "icon": "minecraft:diamond_pickaxe"
          },
          {
            "title": "Recolecta lapislázuli x96",
            "item": "minecraft:lapis_lazuli",
            "amount": 96,
            "icon": "minecraft:lapis_lazuli"
          },
          {
            "title": "Fabrica mesa de encantamientos",
            "item": "minecraft:enchanting_table",
            "amount": 1,
            "icon": "minecraft:enchanting_table"
          }
        ],
        "reward": {
          "title": "468 monedas",
          "amount": 468,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 22,
        "title": "DIA 22 - Fortuna en las vetas",
        "tasks": [
          {
            "title": "Recolecta hierro crudo x96",
            "item": "minecraft:raw_iron",
            "amount": 96,
            "icon": "minecraft:raw_iron"
          },
          {
            "title": "Recolecta oro crudo x48",
            "item": "minecraft:raw_gold",
            "amount": 48,
            "icon": "minecraft:raw_gold"
          },
          {
            "title": "Recolecta redstone x160",
            "item": "minecraft:redstone",
            "amount": 160,
            "icon": "minecraft:redstone"
          },
          {
            "title": "Recolecta lapislázuli x160",
            "item": "minecraft:lapis_lazuli",
            "amount": 160,
            "icon": "minecraft:lapis_lazuli"
          },
          {
            "title": "Recolecta diamantes x12",
            "item": "minecraft:diamond",
            "amount": 12,
            "icon": "minecraft:diamond"
          }
        ],
        "reward": {
          "title": "506 monedas",
          "amount": 506,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 23,
        "title": "DIA 23 - Esmeraldas de las montañas",
        "tasks": [
          {
            "title": "Mina esmeralda profunda x6",
            "item": "minecraft:deepslate_emerald_ore",
            "amount": 6,
            "icon": "minecraft:deepslate_emerald_ore"
          },
          {
            "title": "Recolecta esmeraldas x6",
            "item": "minecraft:emerald",
            "amount": 6,
            "icon": "minecraft:emerald"
          },
          {
            "title": "Recolecta diamantes x16",
            "item": "minecraft:diamond",
            "amount": 16,
            "icon": "minecraft:diamond"
          },
          {
            "title": "Recolecta hierro crudo x80",
            "item": "minecraft:raw_iron",
            "amount": 80,
            "icon": "minecraft:raw_iron"
          },
          {
            "title": "Recolecta cobre crudo x96",
            "item": "minecraft:raw_copper",
            "amount": 96,
            "icon": "minecraft:raw_copper"
          }
        ],
        "reward": {
          "title": "544 monedas",
          "amount": 544,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 24,
        "title": "DIA 24 - Geodas y ecos antiguos",
        "tasks": [
          {
            "title": "Recolecta fragmentos de amatista x48",
            "item": "minecraft:amethyst_shard",
            "amount": 48,
            "icon": "minecraft:amethyst_shard"
          },
          {
            "title": "Recolecta fragmentos de eco x6",
            "item": "minecraft:echo_shard",
            "amount": 6,
            "icon": "minecraft:echo_shard"
          },
          {
            "title": "Mina calcita x24",
            "item": "minecraft:calcite",
            "amount": 24,
            "icon": "minecraft:calcite"
          },
          {
            "title": "Mina basalto liso x24",
            "item": "minecraft:smooth_basalt",
            "amount": 24,
            "icon": "minecraft:smooth_basalt"
          },
          {
            "title": "Mina toba x48",
            "item": "minecraft:tuff",
            "amount": 48,
            "icon": "minecraft:tuff"
          }
        ],
        "reward": {
          "title": "582 monedas",
          "amount": 582,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 25,
        "title": "DIA 25 - Toque de seda",
        "tasks": [
          {
            "title": "Mina mena de carbón con seda x12",
            "item": "minecraft:coal_ore",
            "amount": 12,
            "icon": "minecraft:coal_ore"
          },
          {
            "title": "Mina mena de diamante con seda x6",
            "item": "minecraft:deepslate_diamond_ore",
            "amount": 6,
            "icon": "minecraft:deepslate_diamond_ore"
          },
          {
            "title": "Mina mena de esmeralda con seda x4",
            "item": "minecraft:deepslate_emerald_ore",
            "amount": 4,
            "icon": "minecraft:deepslate_emerald_ore"
          },
          {
            "title": "Mina mena de redstone con seda x10",
            "item": "minecraft:deepslate_redstone_ore",
            "amount": 10,
            "icon": "minecraft:deepslate_redstone_ore"
          },
          {
            "title": "Mina mena de lapislázuli con seda x10",
            "item": "minecraft:lapis_ore",
            "amount": 10,
            "icon": "minecraft:lapis_ore"
          }
        ],
        "reward": {
          "title": "620 monedas",
          "amount": 620,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 26,
        "title": "DIA 26 - El gran vaciado",
        "tasks": [
          {
            "title": "Recolecta hierro crudo x160",
            "item": "minecraft:raw_iron",
            "amount": 160,
            "icon": "minecraft:raw_iron"
          },
          {
            "title": "Recolecta cobre crudo x128",
            "item": "minecraft:raw_copper",
            "amount": 128,
            "icon": "minecraft:raw_copper"
          },
          {
            "title": "Recolecta oro crudo x64",
            "item": "minecraft:raw_gold",
            "amount": 64,
            "icon": "minecraft:raw_gold"
          },
          {
            "title": "Recolecta diamantes x24",
            "item": "minecraft:diamond",
            "amount": 24,
            "icon": "minecraft:diamond"
          },
          {
            "title": "Recolecta redstone x256",
            "item": "minecraft:redstone",
            "amount": 256,
            "icon": "minecraft:redstone"
          }
        ],
        "reward": {
          "title": "756 monedas",
          "amount": 756,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 27,
        "title": "DIA 27 - Bloques desde las profundidades",
        "tasks": [
          {
            "title": "Craftea bloques de hierro x10",
            "item": "minecraft:iron_block",
            "amount": 10,
            "icon": "minecraft:iron_block"
          },
          {
            "title": "Craftea bloques de oro x6",
            "item": "minecraft:gold_block",
            "amount": 6,
            "icon": "minecraft:gold_block"
          },
          {
            "title": "Craftea bloques de esmeralda x2",
            "item": "minecraft:emerald_block",
            "amount": 2,
            "icon": "minecraft:emerald_block"
          },
          {
            "title": "Craftea bloques de diamante x2",
            "item": "minecraft:diamond_block",
            "amount": 2,
            "icon": "minecraft:diamond_block"
          },
          {
            "title": "Mina obsidiana x32",
            "item": "minecraft:obsidian",
            "amount": 32,
            "icon": "minecraft:obsidian"
          }
        ],
        "reward": {
          "title": "892 monedas",
          "amount": 892,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 28,
        "title": "DIA 28 - Colección minera completa",
        "tasks": [
          {
            "title": "Mina carbón x320",
            "item": "minecraft:coal",
            "amount": 320,
            "icon": "minecraft:coal"
          },
          {
            "title": "Recolecta hierro crudo x192",
            "item": "minecraft:raw_iron",
            "amount": 192,
            "icon": "minecraft:raw_iron"
          },
          {
            "title": "Recolecta cobre crudo x192",
            "item": "minecraft:raw_copper",
            "amount": 192,
            "icon": "minecraft:raw_copper"
          },
          {
            "title": "Recolecta oro crudo x80",
            "item": "minecraft:raw_gold",
            "amount": 80,
            "icon": "minecraft:raw_gold"
          },
          {
            "title": "Recolecta diamantes x32",
            "item": "minecraft:diamond",
            "amount": 32,
            "icon": "minecraft:diamond"
          }
        ],
        "reward": {
          "title": "1028 monedas",
          "amount": 1028,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 29,
        "title": "DIA 29 - Netherita suprema",
        "tasks": [
          {
            "title": "Mina escombros ancestrales x16",
            "item": "minecraft:ancient_debris",
            "amount": 16,
            "icon": "minecraft:ancient_debris"
          },
          {
            "title": "Recolecta fragmento de netherita x16",
            "item": "minecraft:netherite_scrap",
            "amount": 16,
            "icon": "minecraft:netherite_scrap"
          },
          {
            "title": "Fabrica lingotes de netherita x3",
            "item": "minecraft:netherite_ingot",
            "amount": 3,
            "icon": "minecraft:netherite_ingot"
          },
          {
            "title": "Craftea lingotes de oro x32",
            "item": "minecraft:gold_ingot",
            "amount": 32,
            "icon": "minecraft:gold_ingot"
          },
          {
            "title": "Craftea bloque de netherita",
            "item": "minecraft:netherite_block",
            "amount": 1,
            "icon": "minecraft:netherite_block"
          }
        ],
        "reward": {
          "title": "1164 monedas",
          "amount": 1164,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 30,
        "title": "DIA 30 - Leyenda subterránea",
        "tasks": [
          {
            "title": "Fabrica picos de netherita x3",
            "item": "minecraft:netherite_pickaxe",
            "amount": 3,
            "icon": "minecraft:netherite_pickaxe"
          },
          {
            "title": "Fabrica cajas de shulker x4",
            "item": "minecraft:shulker_box",
            "amount": 4,
            "icon": "minecraft:shulker_box"
          },
          {
            "title": "Construye un faro",
            "item": "minecraft:beacon",
            "amount": 1,
            "icon": "minecraft:beacon"
          },
          {
            "title": "Craftea bloques de diamante x9",
            "item": "minecraft:diamond_block",
            "amount": 9,
            "icon": "minecraft:diamond_block"
          },
          {
            "title": "Craftea bloques de esmeralda x4",
            "item": "minecraft:emerald_block",
            "amount": 4,
            "icon": "minecraft:emerald_block"
          }
        ],
        "reward": {
          "title": "1300 monedas",
          "amount": 1300,
          "icon": "saros__money_mod:euro_100"
        }
      }
    ]
  },
  {
    "id": "pescador",
    "name": "Pescador",
    "emoji": "🎣",
    "color": "#29B6F6",
    "days": [
      {
        "day": 1,
        "title": "DIA 1 - Pescador novato",
        "tasks": [
          {
            "title": "Fabrica caña x2",
            "item": "minecraft:fishing_rod",
            "amount": 2,
            "icon": "minecraft:fishing_rod"
          },
          {
            "title": "Pesca bacalao x2",
            "item": "minecraft:cod",
            "amount": 2,
            "icon": "minecraft:cod"
          },
          {
            "title": "Pesca salmón x1",
            "item": "minecraft:salmon",
            "amount": 1,
            "icon": "minecraft:salmon"
          },
          {
            "title": "Pesca tropical x1",
            "item": "minecraft:tropical_fish",
            "amount": 1,
            "icon": "minecraft:tropical_fish"
          },
          {
            "title": "Pesca globo x1",
            "item": "minecraft:pufferfish",
            "amount": 1,
            "icon": "minecraft:pufferfish"
          }
        ],
        "reward": {
          "title": "65 monedas",
          "amount": 65,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 2,
        "title": "DIA 2 - Río arriba",
        "tasks": [
          {
            "title": "Fabrica bote de roble",
            "item": "minecraft:oak_boat",
            "amount": 1,
            "icon": "minecraft:oak_boat"
          },
          {
            "title": "Bacalao de río x3",
            "item": "minecraft:cod",
            "amount": 3,
            "icon": "minecraft:cod"
          },
          {
            "title": "Salmón de corriente x2",
            "item": "minecraft:salmon",
            "amount": 2,
            "icon": "minecraft:salmon"
          },
          {
            "title": "Recoge hilo x3",
            "item": "minecraft:string",
            "amount": 3,
            "icon": "minecraft:string"
          },
          {
            "title": "Huesos del río x2",
            "item": "minecraft:bone",
            "amount": 2,
            "icon": "minecraft:bone"
          }
        ],
        "reward": {
          "title": "75 monedas",
          "amount": 75,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 3,
        "title": "DIA 3 - La fogata",
        "tasks": [
          {
            "title": "Prepara fogata x2",
            "item": "minecraft:campfire",
            "amount": 2,
            "icon": "minecraft:campfire"
          },
          {
            "title": "Cocina bacalao x3",
            "item": "minecraft:cooked_cod",
            "amount": 3,
            "icon": "minecraft:cooked_cod"
          },
          {
            "title": "Cocina salmón x2",
            "item": "minecraft:cooked_salmon",
            "amount": 2,
            "icon": "minecraft:cooked_salmon"
          },
          {
            "title": "Fabrica barril x2",
            "item": "minecraft:barrel",
            "amount": 2,
            "icon": "minecraft:barrel"
          },
          {
            "title": "Pescado fresco extra x2",
            "item": "minecraft:cod",
            "amount": 2,
            "icon": "minecraft:cod"
          }
        ],
        "reward": {
          "title": "85 monedas",
          "amount": 85,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 4,
        "title": "DIA 4 - Construye tu muelle",
        "tasks": [
          {
            "title": "Tablones para muelle x16",
            "item": "minecraft:oak_planks",
            "amount": 16,
            "icon": "minecraft:oak_planks"
          },
          {
            "title": "Baranda del muelle x8",
            "item": "minecraft:oak_fence",
            "amount": 8,
            "icon": "minecraft:oak_fence"
          },
          {
            "title": "Bote amarrado x1",
            "item": "minecraft:oak_boat",
            "amount": 1,
            "icon": "minecraft:oak_boat"
          },
          {
            "title": "Pesca desde el muelle x3",
            "item": "minecraft:cod",
            "amount": 3,
            "icon": "minecraft:cod"
          },
          {
            "title": "Salmón del muelle x2",
            "item": "minecraft:salmon",
            "amount": 2,
            "icon": "minecraft:salmon"
          }
        ],
        "reward": {
          "title": "100 monedas",
          "amount": 100,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 5,
        "title": "DIA 5 - Peces de colores",
        "tasks": [
          {
            "title": "Balde de agua x2",
            "item": "minecraft:water_bucket",
            "amount": 2,
            "icon": "minecraft:water_bucket"
          },
          {
            "title": "Atrapa pez tropical vivo",
            "item": "minecraft:tropical_fish_bucket",
            "amount": 1,
            "icon": "minecraft:tropical_fish_bucket"
          },
          {
            "title": "Atrapa bacalao vivo",
            "item": "minecraft:cod_bucket",
            "amount": 1,
            "icon": "minecraft:cod_bucket"
          },
          {
            "title": "Recoge kelp x5",
            "item": "minecraft:kelp",
            "amount": 5,
            "icon": "minecraft:kelp"
          },
          {
            "title": "Pez tropical x2",
            "item": "minecraft:tropical_fish",
            "amount": 2,
            "icon": "minecraft:tropical_fish"
          }
        ],
        "reward": {
          "title": "110 monedas",
          "amount": 110,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 6,
        "title": "DIA 6 - Acuario principiante",
        "tasks": [
          {
            "title": "Vidrio para acuario x8",
            "item": "minecraft:glass",
            "amount": 8,
            "icon": "minecraft:glass"
          },
          {
            "title": "Panel de vidrio x4",
            "item": "minecraft:glass_pane",
            "amount": 4,
            "icon": "minecraft:glass_pane"
          },
          {
            "title": "Atrapa salmón vivo",
            "item": "minecraft:salmon_bucket",
            "amount": 1,
            "icon": "minecraft:salmon_bucket"
          },
          {
            "title": "Pez tropical x3",
            "item": "minecraft:tropical_fish",
            "amount": 3,
            "icon": "minecraft:tropical_fish"
          },
          {
            "title": "Hierba marina x5",
            "item": "minecraft:seagrass",
            "amount": 5,
            "icon": "minecraft:seagrass"
          }
        ],
        "reward": {
          "title": "125 monedas",
          "amount": 125,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 7,
        "title": "DIA 7 - Pantano misterioso",
        "tasks": [
          {
            "title": "Fabrica bote de abeto",
            "item": "minecraft:spruce_boat",
            "amount": 1,
            "icon": "minecraft:spruce_boat"
          },
          {
            "title": "Pez de pantano x2",
            "item": "minecraft:tropical_fish",
            "amount": 2,
            "icon": "minecraft:tropical_fish"
          },
          {
            "title": "Pez globo x2",
            "item": "minecraft:pufferfish",
            "amount": 2,
            "icon": "minecraft:pufferfish"
          },
          {
            "title": "Hoja de nenúfar x3",
            "item": "minecraft:lily_pad",
            "amount": 3,
            "icon": "minecraft:lily_pad"
          },
          {
            "title": "Bacalao de laguna x3",
            "item": "minecraft:cod",
            "amount": 3,
            "icon": "minecraft:cod"
          }
        ],
        "reward": {
          "title": "140 monedas",
          "amount": 140,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 8,
        "title": "DIA 8 - Fertilizante marino",
        "tasks": [
          {
            "title": "Fabrica compostador x2",
            "item": "minecraft:composter",
            "amount": 2,
            "icon": "minecraft:composter"
          },
          {
            "title": "Fertilizante x4",
            "item": "minecraft:bone_meal",
            "amount": 4,
            "icon": "minecraft:bone_meal"
          },
          {
            "title": "Kelp seco x5",
            "item": "minecraft:dried_kelp",
            "amount": 5,
            "icon": "minecraft:dried_kelp"
          },
          {
            "title": "Bacalao x3",
            "item": "minecraft:cod",
            "amount": 3,
            "icon": "minecraft:cod"
          },
          {
            "title": "Salmón x2",
            "item": "minecraft:salmon",
            "amount": 2,
            "icon": "minecraft:salmon"
          }
        ],
        "reward": {
          "title": "160 monedas",
          "amount": 160,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 9,
        "title": "DIA 9 - Jungla profunda",
        "tasks": [
          {
            "title": "Fabrica bote de abedul",
            "item": "minecraft:birch_boat",
            "amount": 1,
            "icon": "minecraft:birch_boat"
          },
          {
            "title": "Pez tropical exótico x4",
            "item": "minecraft:tropical_fish",
            "amount": 4,
            "icon": "minecraft:tropical_fish"
          },
          {
            "title": "Atrapa pez globo vivo",
            "item": "minecraft:pufferfish_bucket",
            "amount": 1,
            "icon": "minecraft:pufferfish_bucket"
          },
          {
            "title": "Bambú de jungla x8",
            "item": "minecraft:bamboo",
            "amount": 8,
            "icon": "minecraft:bamboo"
          },
          {
            "title": "Linterna de pesca x2",
            "item": "minecraft:lantern",
            "amount": 2,
            "icon": "minecraft:lantern"
          }
        ],
        "reward": {
          "title": "175 monedas",
          "amount": 175,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 10,
        "title": "DIA 10 - Tesoros del agua",
        "tasks": [
          {
            "title": "Arco del mar x1",
            "item": "minecraft:bow",
            "amount": 1,
            "icon": "minecraft:bow"
          },
          {
            "title": "Etiqueta perdida x1",
            "item": "minecraft:name_tag",
            "amount": 1,
            "icon": "minecraft:name_tag"
          },
          {
            "title": "Montura hundida x1",
            "item": "minecraft:saddle",
            "amount": 1,
            "icon": "minecraft:saddle"
          },
          {
            "title": "Cuero marino x2",
            "item": "minecraft:leather",
            "amount": 2,
            "icon": "minecraft:leather"
          },
          {
            "title": "Bacalao ahumado x3",
            "item": "minecraft:cooked_cod",
            "amount": 3,
            "icon": "minecraft:cooked_cod"
          }
        ],
        "reward": {
          "title": "190 monedas",
          "amount": 190,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 11,
        "title": "DIA 11 - Océano abierto",
        "tasks": [
          {
            "title": "Bote con cofre x1",
            "item": "minecraft:oak_chest_boat",
            "amount": 1,
            "icon": "minecraft:oak_chest_boat"
          },
          {
            "title": "Bacalao oceánico x3",
            "item": "minecraft:cod",
            "amount": 3,
            "icon": "minecraft:cod"
          },
          {
            "title": "Salmón ártico x2",
            "item": "minecraft:salmon",
            "amount": 2,
            "icon": "minecraft:salmon"
          },
          {
            "title": "Pez tropical x3",
            "item": "minecraft:tropical_fish",
            "amount": 3,
            "icon": "minecraft:tropical_fish"
          },
          {
            "title": "Bolsa de tinta x3",
            "item": "minecraft:ink_sac",
            "amount": 3,
            "icon": "minecraft:ink_sac"
          }
        ],
        "reward": {
          "title": "210 monedas",
          "amount": 210,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 12,
        "title": "DIA 12 - Naufragio",
        "tasks": [
          {
            "title": "Brújula del naufragio x1",
            "item": "minecraft:compass",
            "amount": 1,
            "icon": "minecraft:compass"
          },
          {
            "title": "Papel del cofre x5",
            "item": "minecraft:paper",
            "amount": 5,
            "icon": "minecraft:paper"
          },
          {
            "title": "Lingote hundido x3",
            "item": "minecraft:iron_ingot",
            "amount": 3,
            "icon": "minecraft:iron_ingot"
          },
          {
            "title": "Bacalao del naufragio x3",
            "item": "minecraft:cod",
            "amount": 3,
            "icon": "minecraft:cod"
          },
          {
            "title": "Restos del marino x3",
            "item": "minecraft:bone",
            "amount": 3,
            "icon": "minecraft:bone"
          }
        ],
        "reward": {
          "title": "235 monedas",
          "amount": 235,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 13,
        "title": "DIA 13 - Delfín amigo",
        "tasks": [
          {
            "title": "Bote veloz x1",
            "item": "minecraft:oak_boat",
            "amount": 1,
            "icon": "minecraft:oak_boat"
          },
          {
            "title": "Bacalao x4",
            "item": "minecraft:cod",
            "amount": 4,
            "icon": "minecraft:cod"
          },
          {
            "title": "Salmón x3",
            "item": "minecraft:salmon",
            "amount": 3,
            "icon": "minecraft:salmon"
          },
          {
            "title": "Pez de arrecife x2",
            "item": "minecraft:tropical_fish",
            "amount": 2,
            "icon": "minecraft:tropical_fish"
          },
          {
            "title": "Caparazón nautilo x1",
            "item": "minecraft:nautilus_shell",
            "amount": 1,
            "icon": "minecraft:nautilus_shell"
          }
        ],
        "reward": {
          "title": "255 monedas",
          "amount": 255,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 14,
        "title": "DIA 14 - Playa de tortugas",
        "tasks": [
          {
            "title": "Huevo de tortuga x1",
            "item": "minecraft:turtle_egg",
            "amount": 1,
            "icon": "minecraft:turtle_egg"
          },
          {
            "title": "Hierba marina x8",
            "item": "minecraft:seagrass",
            "amount": 8,
            "icon": "minecraft:seagrass"
          },
          {
            "title": "Bacalao costero x3",
            "item": "minecraft:cod",
            "amount": 3,
            "icon": "minecraft:cod"
          },
          {
            "title": "Hilo x3",
            "item": "minecraft:string",
            "amount": 3,
            "icon": "minecraft:string"
          },
          {
            "title": "Cuero de playa x2",
            "item": "minecraft:leather",
            "amount": 2,
            "icon": "minecraft:leather"
          }
        ],
        "reward": {
          "title": "280 monedas",
          "amount": 280,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 15,
        "title": "DIA 15 - Materiales del conducto",
        "tasks": [
          {
            "title": "Corazón del mar x1",
            "item": "minecraft:heart_of_the_sea",
            "amount": 1,
            "icon": "minecraft:heart_of_the_sea"
          },
          {
            "title": "Nautilos x4",
            "item": "minecraft:nautilus_shell",
            "amount": 4,
            "icon": "minecraft:nautilus_shell"
          },
          {
            "title": "Prismarina x8",
            "item": "minecraft:prismarine",
            "amount": 8,
            "icon": "minecraft:prismarine"
          },
          {
            "title": "Ladrillo prismarino x4",
            "item": "minecraft:prismarine_bricks",
            "amount": 4,
            "icon": "minecraft:prismarine_bricks"
          },
          {
            "title": "Linterna marina x2",
            "item": "minecraft:sea_lantern",
            "amount": 2,
            "icon": "minecraft:sea_lantern"
          }
        ],
        "reward": {
          "title": "300 monedas",
          "amount": 300,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 16,
        "title": "DIA 16 - Activa el conducto",
        "tasks": [
          {
            "title": "Fabrica conducto x1",
            "item": "minecraft:conduit",
            "amount": 1,
            "icon": "minecraft:conduit"
          },
          {
            "title": "Prismarina x4",
            "item": "minecraft:prismarine",
            "amount": 4,
            "icon": "minecraft:prismarine"
          },
          {
            "title": "Prismarina oscura x4",
            "item": "minecraft:dark_prismarine",
            "amount": 4,
            "icon": "minecraft:dark_prismarine"
          },
          {
            "title": "Pez tropical x2",
            "item": "minecraft:tropical_fish",
            "amount": 2,
            "icon": "minecraft:tropical_fish"
          },
          {
            "title": "Salmón cocido x3",
            "item": "minecraft:cooked_salmon",
            "amount": 3,
            "icon": "minecraft:cooked_salmon"
          }
        ],
        "reward": {
          "title": "325 monedas",
          "amount": 325,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 17,
        "title": "DIA 17 - Cazador de ajolotes",
        "tasks": [
          {
            "title": "Cubo con ajolote x2",
            "item": "minecraft:axolotl_bucket",
            "amount": 2,
            "icon": "minecraft:axolotl_bucket"
          },
          {
            "title": "Carnada viva tropical x2",
            "item": "minecraft:tropical_fish_bucket",
            "amount": 2,
            "icon": "minecraft:tropical_fish_bucket"
          },
          {
            "title": "Balde de agua x2",
            "item": "minecraft:water_bucket",
            "amount": 2,
            "icon": "minecraft:water_bucket"
          },
          {
            "title": "Tinta brillante x3",
            "item": "minecraft:glow_ink_sac",
            "amount": 3,
            "icon": "minecraft:glow_ink_sac"
          },
          {
            "title": "Liquen brillante x5",
            "item": "minecraft:glow_lichen",
            "amount": 5,
            "icon": "minecraft:glow_lichen"
          }
        ],
        "reward": {
          "title": "350 monedas",
          "amount": 350,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 18,
        "title": "DIA 18 - Criador de tortugas",
        "tasks": [
          {
            "title": "Escama de tortuga x1",
            "item": "minecraft:scute",
            "amount": 1,
            "icon": "minecraft:scute"
          },
          {
            "title": "Huevo de tortuga x2",
            "item": "minecraft:turtle_egg",
            "amount": 2,
            "icon": "minecraft:turtle_egg"
          },
          {
            "title": "Alimento para tortugas x8",
            "item": "minecraft:seagrass",
            "amount": 8,
            "icon": "minecraft:seagrass"
          },
          {
            "title": "Arena de playa x16",
            "item": "minecraft:sand",
            "amount": 16,
            "icon": "minecraft:sand"
          },
          {
            "title": "Agua para cría x2",
            "item": "minecraft:water_bucket",
            "amount": 2,
            "icon": "minecraft:water_bucket"
          }
        ],
        "reward": {
          "title": "380 monedas",
          "amount": 380,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 19,
        "title": "DIA 19 - Arrecife de coral",
        "tasks": [
          {
            "title": "Coral tubo x3",
            "item": "minecraft:tube_coral",
            "amount": 3,
            "icon": "minecraft:tube_coral"
          },
          {
            "title": "Bloque coral cerebro x3",
            "item": "minecraft:brain_coral_block",
            "amount": 3,
            "icon": "minecraft:brain_coral_block"
          },
          {
            "title": "Abanico coral fuego x3",
            "item": "minecraft:fire_coral_fan",
            "amount": 3,
            "icon": "minecraft:fire_coral_fan"
          },
          {
            "title": "Pez de arrecife x3",
            "item": "minecraft:tropical_fish",
            "amount": 3,
            "icon": "minecraft:tropical_fish"
          },
          {
            "title": "Bacalao cocido x3",
            "item": "minecraft:cooked_cod",
            "amount": 3,
            "icon": "minecraft:cooked_cod"
          }
        ],
        "reward": {
          "title": "405 monedas",
          "amount": 405,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 20,
        "title": "DIA 20 - Esponjas del océano",
        "tasks": [
          {
            "title": "Esponja x3",
            "item": "minecraft:sponge",
            "amount": 3,
            "icon": "minecraft:sponge"
          },
          {
            "title": "Fragmento prismarino x4",
            "item": "minecraft:prismarine_shard",
            "amount": 4,
            "icon": "minecraft:prismarine_shard"
          },
          {
            "title": "Cristal prismarino x3",
            "item": "minecraft:prismarine_crystals",
            "amount": 3,
            "icon": "minecraft:prismarine_crystals"
          },
          {
            "title": "Prismarina oscura x4",
            "item": "minecraft:dark_prismarine",
            "amount": 4,
            "icon": "minecraft:dark_prismarine"
          },
          {
            "title": "Linterna marina x3",
            "item": "minecraft:sea_lantern",
            "amount": 3,
            "icon": "minecraft:sea_lantern"
          }
        ],
        "reward": {
          "title": "430 monedas",
          "amount": 430,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 21,
        "title": "DIA 21 - Pesca bajo la lluvia",
        "tasks": [
          {
            "title": "Caldero para lluvia x2",
            "item": "minecraft:cauldron",
            "amount": 2,
            "icon": "minecraft:cauldron"
          },
          {
            "title": "Balde de agua x3",
            "item": "minecraft:water_bucket",
            "amount": 3,
            "icon": "minecraft:water_bucket"
          },
          {
            "title": "Bacalao de lluvia x4",
            "item": "minecraft:cod",
            "amount": 4,
            "icon": "minecraft:cod"
          },
          {
            "title": "Salmón de lluvia x3",
            "item": "minecraft:salmon",
            "amount": 3,
            "icon": "minecraft:salmon"
          },
          {
            "title": "Pez globo x2",
            "item": "minecraft:pufferfish",
            "amount": 2,
            "icon": "minecraft:pufferfish"
          }
        ],
        "reward": {
          "title": "470 monedas",
          "amount": 470,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 22,
        "title": "DIA 22 - Encantamiento marino",
        "tasks": [
          {
            "title": "Libro encantado x2",
            "item": "minecraft:enchanted_book",
            "amount": 2,
            "icon": "minecraft:enchanted_book"
          },
          {
            "title": "Caña nueva x1",
            "item": "minecraft:fishing_rod",
            "amount": 1,
            "icon": "minecraft:fishing_rod"
          },
          {
            "title": "Lapislázuli x5",
            "item": "minecraft:lapis_lazuli",
            "amount": 5,
            "icon": "minecraft:lapis_lazuli"
          },
          {
            "title": "Bacalao x3",
            "item": "minecraft:cod",
            "amount": 3,
            "icon": "minecraft:cod"
          },
          {
            "title": "Frasco de experiencia x3",
            "item": "minecraft:experience_bottle",
            "amount": 3,
            "icon": "minecraft:experience_bottle"
          }
        ],
        "reward": {
          "title": "505 monedas",
          "amount": 505,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 23,
        "title": "DIA 23 - Tormenta perfecta",
        "tasks": [
          {
            "title": "Pararrayos x2",
            "item": "minecraft:lightning_rod",
            "amount": 2,
            "icon": "minecraft:lightning_rod"
          },
          {
            "title": "Bacalao tormentoso x4",
            "item": "minecraft:cod",
            "amount": 4,
            "icon": "minecraft:cod"
          },
          {
            "title": "Salmón eléctrico x3",
            "item": "minecraft:salmon",
            "amount": 3,
            "icon": "minecraft:salmon"
          },
          {
            "title": "Pez globo x2",
            "item": "minecraft:pufferfish",
            "amount": 2,
            "icon": "minecraft:pufferfish"
          },
          {
            "title": "Hilo de tormenta x5",
            "item": "minecraft:string",
            "amount": 5,
            "icon": "minecraft:string"
          }
        ],
        "reward": {
          "title": "545 monedas",
          "amount": 545,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 24,
        "title": "DIA 24 - Paraíso de nenúfares",
        "tasks": [
          {
            "title": "Nenúfar x6",
            "item": "minecraft:lily_pad",
            "amount": 6,
            "icon": "minecraft:lily_pad"
          },
          {
            "title": "Bote de abeto x1",
            "item": "minecraft:spruce_boat",
            "amount": 1,
            "icon": "minecraft:spruce_boat"
          },
          {
            "title": "Pez de pantano x3",
            "item": "minecraft:tropical_fish",
            "amount": 3,
            "icon": "minecraft:tropical_fish"
          },
          {
            "title": "Pez globo x2",
            "item": "minecraft:pufferfish",
            "amount": 2,
            "icon": "minecraft:pufferfish"
          },
          {
            "title": "Salmón cocido x3",
            "item": "minecraft:cooked_salmon",
            "amount": 3,
            "icon": "minecraft:cooked_salmon"
          }
        ],
        "reward": {
          "title": "580 monedas",
          "amount": 580,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 25,
        "title": "DIA 25 - Villa pesquera",
        "tasks": [
          {
            "title": "Barril de pescado x4",
            "item": "minecraft:barrel",
            "amount": 4,
            "icon": "minecraft:barrel"
          },
          {
            "title": "Fogata del muelle x3",
            "item": "minecraft:campfire",
            "amount": 3,
            "icon": "minecraft:campfire"
          },
          {
            "title": "Cadena de amarre x4",
            "item": "minecraft:chain",
            "amount": 4,
            "icon": "minecraft:chain"
          },
          {
            "title": "Linterna del puerto x4",
            "item": "minecraft:lantern",
            "amount": 4,
            "icon": "minecraft:lantern"
          },
          {
            "title": "Pescado del día x5",
            "item": "minecraft:cod",
            "amount": 5,
            "icon": "minecraft:cod"
          }
        ],
        "reward": {
          "title": "620 monedas",
          "amount": 620,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 26,
        "title": "DIA 26 - Cofre del océano",
        "tasks": [
          {
            "title": "Corazón del mar x1",
            "item": "minecraft:heart_of_the_sea",
            "amount": 1,
            "icon": "minecraft:heart_of_the_sea"
          },
          {
            "title": "Diamante hundido x1",
            "item": "minecraft:diamond",
            "amount": 1,
            "icon": "minecraft:diamond"
          },
          {
            "title": "Libro encantado x3",
            "item": "minecraft:enchanted_book",
            "amount": 3,
            "icon": "minecraft:enchanted_book"
          },
          {
            "title": "Nautilo x3",
            "item": "minecraft:nautilus_shell",
            "amount": 3,
            "icon": "minecraft:nautilus_shell"
          },
          {
            "title": "Etiquetas antiguas x3",
            "item": "minecraft:name_tag",
            "amount": 3,
            "icon": "minecraft:name_tag"
          }
        ],
        "reward": {
          "title": "755 monedas",
          "amount": 755,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 27,
        "title": "DIA 27 - Acuario legendario",
        "tasks": [
          {
            "title": "Cubo pez tropical x4",
            "item": "minecraft:tropical_fish_bucket",
            "amount": 4,
            "icon": "minecraft:tropical_fish_bucket"
          },
          {
            "title": "Cubo ajolote x2",
            "item": "minecraft:axolotl_bucket",
            "amount": 2,
            "icon": "minecraft:axolotl_bucket"
          },
          {
            "title": "Tinta brillante x4",
            "item": "minecraft:glow_ink_sac",
            "amount": 4,
            "icon": "minecraft:glow_ink_sac"
          },
          {
            "title": "Linterna marina x4",
            "item": "minecraft:sea_lantern",
            "amount": 4,
            "icon": "minecraft:sea_lantern"
          },
          {
            "title": "Vitrina marina x12",
            "item": "minecraft:glass",
            "amount": 12,
            "icon": "minecraft:glass"
          }
        ],
        "reward": {
          "title": "890 monedas",
          "amount": 890,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 28,
        "title": "DIA 28 - Redes llenas",
        "tasks": [
          {
            "title": "Red de bacalao x8",
            "item": "minecraft:cod",
            "amount": 8,
            "icon": "minecraft:cod"
          },
          {
            "title": "Red de salmón x6",
            "item": "minecraft:salmon",
            "amount": 6,
            "icon": "minecraft:salmon"
          },
          {
            "title": "Red de tropicales x6",
            "item": "minecraft:tropical_fish",
            "amount": 6,
            "icon": "minecraft:tropical_fish"
          },
          {
            "title": "Red de globo x4",
            "item": "minecraft:pufferfish",
            "amount": 4,
            "icon": "minecraft:pufferfish"
          },
          {
            "title": "Bacalao ahumado x5",
            "item": "minecraft:cooked_cod",
            "amount": 5,
            "icon": "minecraft:cooked_cod"
          }
        ],
        "reward": {
          "title": "1030 monedas",
          "amount": 1030,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 29,
        "title": "DIA 29 - Biblioteca marina",
        "tasks": [
          {
            "title": "Libro encantado x4",
            "item": "minecraft:enchanted_book",
            "amount": 4,
            "icon": "minecraft:enchanted_book"
          },
          {
            "title": "Arco del marino x2",
            "item": "minecraft:bow",
            "amount": 2,
            "icon": "minecraft:bow"
          },
          {
            "title": "Caña legendaria x2",
            "item": "minecraft:fishing_rod",
            "amount": 2,
            "icon": "minecraft:fishing_rod"
          },
          {
            "title": "Montura x2",
            "item": "minecraft:saddle",
            "amount": 2,
            "icon": "minecraft:saddle"
          },
          {
            "title": "Etiquetas x3",
            "item": "minecraft:name_tag",
            "amount": 3,
            "icon": "minecraft:name_tag"
          }
        ],
        "reward": {
          "title": "1165 monedas",
          "amount": 1165,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 30,
        "title": "DIA 30 - Leyenda del mar",
        "tasks": [
          {
            "title": "Corazón del mar x1",
            "item": "minecraft:heart_of_the_sea",
            "amount": 1,
            "icon": "minecraft:heart_of_the_sea"
          },
          {
            "title": "Conducto definitivo x1",
            "item": "minecraft:conduit",
            "amount": 1,
            "icon": "minecraft:conduit"
          },
          {
            "title": "Colección tropical x10",
            "item": "minecraft:tropical_fish",
            "amount": 10,
            "icon": "minecraft:tropical_fish"
          },
          {
            "title": "Pez globo maestro x6",
            "item": "minecraft:pufferfish",
            "amount": 6,
            "icon": "minecraft:pufferfish"
          },
          {
            "title": "Ajolote coleccionista x3",
            "item": "minecraft:axolotl_bucket",
            "amount": 3,
            "icon": "minecraft:axolotl_bucket"
          }
        ],
        "reward": {
          "title": "1300 monedas",
          "amount": 1300,
          "icon": "saros__money_mod:euro_100"
        }
      }
    ]
  },
  {
    "id": "tabernero",
    "name": "Tabernero",
    "emoji": "🍺",
    "color": "#FFCA28",
    "days": [
      {
        "day": 1,
        "title": "DIA 1 - Ingredientes basicos",
        "tasks": [
          {
            "title": "Cosecha trigo x2",
            "item": "minecraft:wheat",
            "amount": 2,
            "icon": "minecraft:wheat"
          },
          {
            "title": "Fabrica botellas x2",
            "item": "minecraft:glass_bottle",
            "amount": 2,
            "icon": "minecraft:glass_bottle"
          },
          {
            "title": "Recolecta manzana x1",
            "item": "minecraft:apple",
            "amount": 1,
            "icon": "minecraft:apple"
          },
          {
            "title": "Fabrica azucar x1",
            "item": "minecraft:sugar",
            "amount": 1,
            "icon": "minecraft:sugar"
          },
          {
            "title": "Recolecta miel x1",
            "item": "minecraft:honey_bottle",
            "amount": 1,
            "icon": "minecraft:honey_bottle"
          }
        ],
        "reward": {
          "title": "65 monedas",
          "amount": 65,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 2,
        "title": "DIA 2 - Montando la barra",
        "tasks": [
          {
            "title": "Fabrica barriles x2",
            "item": "minecraft:barrel",
            "amount": 2,
            "icon": "minecraft:barrel"
          },
          {
            "title": "Hornea pan x3",
            "item": "minecraft:bread",
            "amount": 3,
            "icon": "minecraft:bread"
          },
          {
            "title": "Consigue cubo de agua x1",
            "item": "minecraft:water_bucket",
            "amount": 1,
            "icon": "minecraft:water_bucket"
          },
          {
            "title": "Fabrica tablones de roble x16",
            "item": "minecraft:oak_planks",
            "amount": 16,
            "icon": "minecraft:oak_planks"
          },
          {
            "title": "Fabrica fogata x1",
            "item": "minecraft:campfire",
            "amount": 1,
            "icon": "minecraft:campfire"
          }
        ],
        "reward": {
          "title": "75 monedas",
          "amount": 75,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 3,
        "title": "DIA 3 - Bebidas frescas",
        "tasks": [
          {
            "title": "Embobella agua x3",
            "item": "minecraft:water_bottle",
            "amount": 3,
            "icon": "minecraft:water_bottle"
          },
          {
            "title": "Ordena vacas x2",
            "item": "minecraft:milk_bucket",
            "amount": 2,
            "icon": "minecraft:milk_bucket"
          },
          {
            "title": "Hornea galletitas x5",
            "item": "minecraft:cookie",
            "amount": 5,
            "icon": "minecraft:cookie"
          },
          {
            "title": "Recolecta bayas dulces x6",
            "item": "minecraft:sweet_berries",
            "amount": 6,
            "icon": "minecraft:sweet_berries"
          },
          {
            "title": "Fabrica caldero x1",
            "item": "minecraft:cauldron",
            "amount": 1,
            "icon": "minecraft:cauldron"
          }
        ],
        "reward": {
          "title": "85 monedas",
          "amount": 85,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 4,
        "title": "DIA 4 - Comida de taberna",
        "tasks": [
          {
            "title": "Cocina chuleta de cerdo x3",
            "item": "minecraft:cooked_porkchop",
            "amount": 3,
            "icon": "minecraft:cooked_porkchop"
          },
          {
            "title": "Cocina filete de vaca x2",
            "item": "minecraft:cooked_beef",
            "amount": 2,
            "icon": "minecraft:cooked_beef"
          },
          {
            "title": "Hornea patatas x3",
            "item": "minecraft:baked_potato",
            "amount": 3,
            "icon": "minecraft:baked_potato"
          },
          {
            "title": "Hornea pastel de calabaza x2",
            "item": "minecraft:pumpkin_pie",
            "amount": 2,
            "icon": "minecraft:pumpkin_pie"
          },
          {
            "title": "Fabrica cuencos x3",
            "item": "minecraft:bowl",
            "amount": 3,
            "icon": "minecraft:bowl"
          }
        ],
        "reward": {
          "title": "95 monedas",
          "amount": 95,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 5,
        "title": "DIA 5 - Soporte de destileria",
        "tasks": [
          {
            "title": "Fabrica soporte de pociones x1",
            "item": "minecraft:brewing_stand",
            "amount": 1,
            "icon": "minecraft:brewing_stand"
          },
          {
            "title": "Fabrica polvo de blaze x2",
            "item": "minecraft:blaze_powder",
            "amount": 2,
            "icon": "minecraft:blaze_powder"
          },
          {
            "title": "Recolecta verruga del Nether x3",
            "item": "minecraft:nether_wart",
            "amount": 3,
            "icon": "minecraft:nether_wart"
          },
          {
            "title": "Prepara estofado de hongos x2",
            "item": "minecraft:mushroom_stew",
            "amount": 2,
            "icon": "minecraft:mushroom_stew"
          },
          {
            "title": "Fabrica mas botellas x3",
            "item": "minecraft:glass_bottle",
            "amount": 3,
            "icon": "minecraft:glass_bottle"
          }
        ],
        "reward": {
          "title": "110 monedas",
          "amount": 110,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 6,
        "title": "DIA 6 - Base de cocteles",
        "tasks": [
          {
            "title": "Destila pocion base x3",
            "item": "minecraft:awkward_potion",
            "amount": 3,
            "icon": "minecraft:awkward_potion"
          },
          {
            "title": "Destila pocion mundana x2",
            "item": "minecraft:mundane_potion",
            "amount": 2,
            "icon": "minecraft:mundane_potion"
          },
          {
            "title": "Recolecta ojo de arana x2",
            "item": "minecraft:spider_eye",
            "amount": 2,
            "icon": "minecraft:spider_eye"
          },
          {
            "title": "Fabrica azucar x3",
            "item": "minecraft:sugar",
            "amount": 3,
            "icon": "minecraft:sugar"
          },
          {
            "title": "Recolecta hongos rojos x4",
            "item": "minecraft:red_mushroom",
            "amount": 4,
            "icon": "minecraft:red_mushroom"
          }
        ],
        "reward": {
          "title": "125 monedas",
          "amount": 125,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 7,
        "title": "DIA 7 - Infusiones dulces",
        "tasks": [
          {
            "title": "Recolecta miel x3",
            "item": "minecraft:honey_bottle",
            "amount": 3,
            "icon": "minecraft:honey_bottle"
          },
          {
            "title": "Recolecta bayas dulces x8",
            "item": "minecraft:sweet_berries",
            "amount": 8,
            "icon": "minecraft:sweet_berries"
          },
          {
            "title": "Recolecta bayas luminosas x5",
            "item": "minecraft:glow_berries",
            "amount": 5,
            "icon": "minecraft:glow_berries"
          },
          {
            "title": "Ordena vacas x2",
            "item": "minecraft:milk_bucket",
            "amount": 2,
            "icon": "minecraft:milk_bucket"
          },
          {
            "title": "Fabrica azucar x3",
            "item": "minecraft:sugar",
            "amount": 3,
            "icon": "minecraft:sugar"
          }
        ],
        "reward": {
          "title": "140 monedas",
          "amount": 140,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 8,
        "title": "DIA 8 - Chocolate caliente",
        "tasks": [
          {
            "title": "Prepara chocolate caliente x2",
            "item": "farmersdelight:hot_cocoa",
            "amount": 2,
            "icon": "farmersdelight:hot_cocoa"
          },
          {
            "title": "Recolecta granos de cacao x4",
            "item": "minecraft:cocoa_beans",
            "amount": 4,
            "icon": "minecraft:cocoa_beans"
          },
          {
            "title": "Ordena vacas x2",
            "item": "minecraft:milk_bucket",
            "amount": 2,
            "icon": "minecraft:milk_bucket"
          },
          {
            "title": "Fabrica azucar x2",
            "item": "minecraft:sugar",
            "amount": 2,
            "icon": "minecraft:sugar"
          },
          {
            "title": "Fabrica fogatas x2",
            "item": "minecraft:campfire",
            "amount": 2,
            "icon": "minecraft:campfire"
          }
        ],
        "reward": {
          "title": "155 monedas",
          "amount": 155,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 9,
        "title": "DIA 9 - Sidra de manzana",
        "tasks": [
          {
            "title": "Prepara sidra de manzana x2",
            "item": "farmersdelight:apple_cider",
            "amount": 2,
            "icon": "farmersdelight:apple_cider"
          },
          {
            "title": "Recolecta manzanas x5",
            "item": "minecraft:apple",
            "amount": 5,
            "icon": "minecraft:apple"
          },
          {
            "title": "Fabrica azucar x3",
            "item": "minecraft:sugar",
            "amount": 3,
            "icon": "minecraft:sugar"
          },
          {
            "title": "Fabrica botellas x3",
            "item": "minecraft:glass_bottle",
            "amount": 3,
            "icon": "minecraft:glass_bottle"
          },
          {
            "title": "Recolecta miel x2",
            "item": "minecraft:honey_bottle",
            "amount": 2,
            "icon": "minecraft:honey_bottle"
          }
        ],
        "reward": {
          "title": "170 monedas",
          "amount": 170,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 10,
        "title": "DIA 10 - Jugo de melon",
        "tasks": [
          {
            "title": "Prepara jugo de melon x2",
            "item": "farmersdelight:melon_juice",
            "amount": 2,
            "icon": "farmersdelight:melon_juice"
          },
          {
            "title": "Recolecta rodajas de melon x8",
            "item": "minecraft:melon_slice",
            "amount": 8,
            "icon": "minecraft:melon_slice"
          },
          {
            "title": "Fabrica rodaja de melon brillante x1",
            "item": "minecraft:glistering_melon_slice",
            "amount": 1,
            "icon": "minecraft:glistering_melon_slice"
          },
          {
            "title": "Fabrica botellas x2",
            "item": "minecraft:glass_bottle",
            "amount": 2,
            "icon": "minecraft:glass_bottle"
          },
          {
            "title": "Fabrica azucar x2",
            "item": "minecraft:sugar",
            "amount": 2,
            "icon": "minecraft:sugar"
          }
        ],
        "reward": {
          "title": "190 monedas",
          "amount": 190,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 11,
        "title": "DIA 11 - Queso artesanal",
        "tasks": [
          {
            "title": "Fabrica queso x2",
            "item": "expandeddelight:cheese",
            "amount": 2,
            "icon": "expandeddelight:cheese"
          },
          {
            "title": "Ordena vacas x3",
            "item": "minecraft:milk_bucket",
            "amount": 3,
            "icon": "minecraft:milk_bucket"
          },
          {
            "title": "Recolecta huevos x4",
            "item": "minecraft:egg",
            "amount": 4,
            "icon": "minecraft:egg"
          },
          {
            "title": "Cosecha trigo x5",
            "item": "minecraft:wheat",
            "amount": 5,
            "icon": "minecraft:wheat"
          },
          {
            "title": "Fabrica cuencos x2",
            "item": "minecraft:bowl",
            "amount": 2,
            "icon": "minecraft:bowl"
          }
        ],
        "reward": {
          "title": "210 monedas",
          "amount": 210,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 12,
        "title": "DIA 12 - Mantequilla de mani",
        "tasks": [
          {
            "title": "Prepara mantequilla de mani x2",
            "item": "expandeddelight:peanut_butter",
            "amount": 2,
            "icon": "expandeddelight:peanut_butter"
          },
          {
            "title": "Hornea pan x4",
            "item": "minecraft:bread",
            "amount": 4,
            "icon": "minecraft:bread"
          },
          {
            "title": "Recolecta miel x2",
            "item": "minecraft:honey_bottle",
            "amount": 2,
            "icon": "minecraft:honey_bottle"
          },
          {
            "title": "Cocina pollo x3",
            "item": "minecraft:cooked_chicken",
            "amount": 3,
            "icon": "minecraft:cooked_chicken"
          },
          {
            "title": "Prepara sopa de remolacha x2",
            "item": "minecraft:beetroot_soup",
            "amount": 2,
            "icon": "minecraft:beetroot_soup"
          }
        ],
        "reward": {
          "title": "230 monedas",
          "amount": 230,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 13,
        "title": "DIA 13 - Cultivo de fermentacion",
        "tasks": [
          {
            "title": "Fabrica ojo de arana fermentado x2",
            "item": "minecraft:fermented_spider_eye",
            "amount": 2,
            "icon": "minecraft:fermented_spider_eye"
          },
          {
            "title": "Recolecta ojo de arana x2",
            "item": "minecraft:spider_eye",
            "amount": 2,
            "icon": "minecraft:spider_eye"
          },
          {
            "title": "Recolecta hongos marrones x4",
            "item": "minecraft:brown_mushroom",
            "amount": 4,
            "icon": "minecraft:brown_mushroom"
          },
          {
            "title": "Fabrica azucar x3",
            "item": "minecraft:sugar",
            "amount": 3,
            "icon": "minecraft:sugar"
          },
          {
            "title": "Fabrica botellas x3",
            "item": "minecraft:glass_bottle",
            "amount": 3,
            "icon": "minecraft:glass_bottle"
          }
        ],
        "reward": {
          "title": "250 monedas",
          "amount": 250,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 14,
        "title": "DIA 14 - Smoothie de bayas",
        "tasks": [
          {
            "title": "Prepara smoothie de bayas x2",
            "item": "expandeddelight:berry_smoothie",
            "amount": 2,
            "icon": "expandeddelight:berry_smoothie"
          },
          {
            "title": "Recolecta bayas dulces x6",
            "item": "minecraft:sweet_berries",
            "amount": 6,
            "icon": "minecraft:sweet_berries"
          },
          {
            "title": "Recolecta bayas luminosas x4",
            "item": "minecraft:glow_berries",
            "amount": 4,
            "icon": "minecraft:glow_berries"
          },
          {
            "title": "Recolecta miel x2",
            "item": "minecraft:honey_bottle",
            "amount": 2,
            "icon": "minecraft:honey_bottle"
          },
          {
            "title": "Fabrica botellas x2",
            "item": "minecraft:glass_bottle",
            "amount": 2,
            "icon": "minecraft:glass_bottle"
          }
        ],
        "reward": {
          "title": "270 monedas",
          "amount": 270,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 15,
        "title": "DIA 15 - Bebidas doradas",
        "tasks": [
          {
            "title": "Fabrica manzana dorada x2",
            "item": "minecraft:golden_apple",
            "amount": 2,
            "icon": "minecraft:golden_apple"
          },
          {
            "title": "Fabrica zanahoria dorada x3",
            "item": "minecraft:golden_carrot",
            "amount": 3,
            "icon": "minecraft:golden_carrot"
          },
          {
            "title": "Recolecta manzanas x4",
            "item": "minecraft:apple",
            "amount": 4,
            "icon": "minecraft:apple"
          },
          {
            "title": "Fabrica lingotes de oro x2",
            "item": "minecraft:gold_ingot",
            "amount": 2,
            "icon": "minecraft:gold_ingot"
          },
          {
            "title": "Recolecta miel x2",
            "item": "minecraft:honey_bottle",
            "amount": 2,
            "icon": "minecraft:honey_bottle"
          }
        ],
        "reward": {
          "title": "300 monedas",
          "amount": 300,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 16,
        "title": "DIA 16 - Mobiliario de taberna",
        "tasks": [
          {
            "title": "Fabrica tablones de roble x32",
            "item": "minecraft:oak_planks",
            "amount": 32,
            "icon": "minecraft:oak_planks"
          },
          {
            "title": "Fabrica escaleras de roble x8",
            "item": "minecraft:oak_stairs",
            "amount": 8,
            "icon": "minecraft:oak_stairs"
          },
          {
            "title": "Fabrica losas de roble x8",
            "item": "minecraft:oak_slab",
            "amount": 8,
            "icon": "minecraft:oak_slab"
          },
          {
            "title": "Fabrica vallas de roble x6",
            "item": "minecraft:oak_fence",
            "amount": 6,
            "icon": "minecraft:oak_fence"
          },
          {
            "title": "Fabrica tablones de abeto x16",
            "item": "minecraft:spruce_planks",
            "amount": 16,
            "icon": "minecraft:spruce_planks"
          }
        ],
        "reward": {
          "title": "320 monedas",
          "amount": 320,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 17,
        "title": "DIA 17 - Iluminacion de taberna",
        "tasks": [
          {
            "title": "Fabrica faroles x4",
            "item": "minecraft:lantern",
            "amount": 4,
            "icon": "minecraft:lantern"
          },
          {
            "title": "Fabrica velas x4",
            "item": "minecraft:candle",
            "amount": 4,
            "icon": "minecraft:candle"
          },
          {
            "title": "Fabrica faroles de almas x2",
            "item": "minecraft:soul_lantern",
            "amount": 2,
            "icon": "minecraft:soul_lantern"
          },
          {
            "title": "Fabrica cadenas x6",
            "item": "minecraft:chain",
            "amount": 6,
            "icon": "minecraft:chain"
          },
          {
            "title": "Fabrica lingotes de hierro x4",
            "item": "minecraft:iron_ingot",
            "amount": 4,
            "icon": "minecraft:iron_ingot"
          }
        ],
        "reward": {
          "title": "340 monedas",
          "amount": 340,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 18,
        "title": "DIA 18 - Decoracion de taberna",
        "tasks": [
          {
            "title": "Fabrica cuadros x3",
            "item": "minecraft:painting",
            "amount": 3,
            "icon": "minecraft:painting"
          },
          {
            "title": "Fabrica macetas x2",
            "item": "minecraft:flower_pot",
            "amount": 2,
            "icon": "minecraft:flower_pot"
          },
          {
            "title": "Recolecta rosal x2",
            "item": "minecraft:rose_bush",
            "amount": 2,
            "icon": "minecraft:rose_bush"
          },
          {
            "title": "Recolecta peonia x2",
            "item": "minecraft:peony",
            "amount": 2,
            "icon": "minecraft:peony"
          },
          {
            "title": "Recolecta girasol x2",
            "item": "minecraft:sunflower",
            "amount": 2,
            "icon": "minecraft:sunflower"
          }
        ],
        "reward": {
          "title": "360 monedas",
          "amount": 360,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 19,
        "title": "DIA 19 - Musica y ambiente",
        "tasks": [
          {
            "title": "Fabrica tocadiscos x1",
            "item": "minecraft:jukebox",
            "amount": 1,
            "icon": "minecraft:jukebox"
          },
          {
            "title": "Consigue disco de musica Cat x1",
            "item": "minecraft:music_disc_cat",
            "amount": 1,
            "icon": "minecraft:music_disc_cat"
          },
          {
            "title": "Fabrica campana x1",
            "item": "minecraft:bell",
            "amount": 1,
            "icon": "minecraft:bell"
          },
          {
            "title": "Fabrica carteles de roble x3",
            "item": "minecraft:oak_sign",
            "amount": 3,
            "icon": "minecraft:oak_sign"
          },
          {
            "title": "Fabrica puertas de roble x2",
            "item": "minecraft:oak_door",
            "amount": 2,
            "icon": "minecraft:oak_door"
          }
        ],
        "reward": {
          "title": "380 monedas",
          "amount": 380,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 20,
        "title": "DIA 20 - Ampliacion de taberna",
        "tasks": [
          {
            "title": "Fabrica tablones de roble oscuro x16",
            "item": "minecraft:dark_oak_planks",
            "amount": 16,
            "icon": "minecraft:dark_oak_planks"
          },
          {
            "title": "Fabrica escaleras de roble oscuro x6",
            "item": "minecraft:dark_oak_stairs",
            "amount": 6,
            "icon": "minecraft:dark_oak_stairs"
          },
          {
            "title": "Fabrica losas de roble oscuro x6",
            "item": "minecraft:dark_oak_slab",
            "amount": 6,
            "icon": "minecraft:dark_oak_slab"
          },
          {
            "title": "Fabrica ladrillos x16",
            "item": "minecraft:bricks",
            "amount": 16,
            "icon": "minecraft:bricks"
          },
          {
            "title": "Fabrica ladrillos de piedra x16",
            "item": "minecraft:stone_bricks",
            "amount": 16,
            "icon": "minecraft:stone_bricks"
          }
        ],
        "reward": {
          "title": "430 monedas",
          "amount": 430,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 21,
        "title": "DIA 21 - Jugo de manzana prensado",
        "tasks": [
          {
            "title": "Prepara jugo de manzana x2",
            "item": "expandeddelight:apple_juice",
            "amount": 2,
            "icon": "expandeddelight:apple_juice"
          },
          {
            "title": "Recolecta manzanas x6",
            "item": "minecraft:apple",
            "amount": 6,
            "icon": "minecraft:apple"
          },
          {
            "title": "Fabrica azucar x3",
            "item": "minecraft:sugar",
            "amount": 3,
            "icon": "minecraft:sugar"
          },
          {
            "title": "Fabrica botellas x3",
            "item": "minecraft:glass_bottle",
            "amount": 3,
            "icon": "minecraft:glass_bottle"
          },
          {
            "title": "Recolecta bayas dulces x5",
            "item": "minecraft:sweet_berries",
            "amount": 5,
            "icon": "minecraft:sweet_berries"
          }
        ],
        "reward": {
          "title": "450 monedas",
          "amount": 450,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 22,
        "title": "DIA 22 - Jugo de bayas",
        "tasks": [
          {
            "title": "Prepara jugo de bayas x2",
            "item": "expandeddelight:sweet_berry_juice",
            "amount": 2,
            "icon": "expandeddelight:sweet_berry_juice"
          },
          {
            "title": "Recolecta bayas dulces x10",
            "item": "minecraft:sweet_berries",
            "amount": 10,
            "icon": "minecraft:sweet_berries"
          },
          {
            "title": "Fabrica azucar x3",
            "item": "minecraft:sugar",
            "amount": 3,
            "icon": "minecraft:sugar"
          },
          {
            "title": "Fabrica botellas x2",
            "item": "minecraft:glass_bottle",
            "amount": 2,
            "icon": "minecraft:glass_bottle"
          },
          {
            "title": "Recolecta miel x2",
            "item": "minecraft:honey_bottle",
            "amount": 2,
            "icon": "minecraft:honey_bottle"
          }
        ],
        "reward": {
          "title": "480 monedas",
          "amount": 480,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 23,
        "title": "DIA 23 - Menu de cocteles clasicos",
        "tasks": [
          {
            "title": "Prepara sidra de manzana x3",
            "item": "farmersdelight:apple_cider",
            "amount": 3,
            "icon": "farmersdelight:apple_cider"
          },
          {
            "title": "Prepara jugo de melon x2",
            "item": "expandeddelight:melon_juice",
            "amount": 2,
            "icon": "expandeddelight:melon_juice"
          },
          {
            "title": "Recolecta miel x3",
            "item": "minecraft:honey_bottle",
            "amount": 3,
            "icon": "minecraft:honey_bottle"
          },
          {
            "title": "Fabrica botellas x3",
            "item": "minecraft:glass_bottle",
            "amount": 3,
            "icon": "minecraft:glass_bottle"
          },
          {
            "title": "Fabrica azucar x3",
            "item": "minecraft:sugar",
            "amount": 3,
            "icon": "minecraft:sugar"
          }
        ],
        "reward": {
          "title": "510 monedas",
          "amount": 510,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 24,
        "title": "DIA 24 - Elixir curativo",
        "tasks": [
          {
            "title": "Destila pocion de curacion x2",
            "item": "minecraft:potion",
            "amount": 2,
            "icon": "minecraft:potion{Potion:\"minecraft:healing\"}"
          },
          {
            "title": "Fabrica rodaja de melon brillante x3",
            "item": "minecraft:glistering_melon_slice",
            "amount": 3,
            "icon": "minecraft:glistering_melon_slice"
          },
          {
            "title": "Recolecta verruga del Nether x3",
            "item": "minecraft:nether_wart",
            "amount": 3,
            "icon": "minecraft:nether_wart"
          },
          {
            "title": "Fabrica botellas x3",
            "item": "minecraft:glass_bottle",
            "amount": 3,
            "icon": "minecraft:glass_bottle"
          },
          {
            "title": "Fabrica polvo de blaze x2",
            "item": "minecraft:blaze_powder",
            "amount": 2,
            "icon": "minecraft:blaze_powder"
          }
        ],
        "reward": {
          "title": "540 monedas",
          "amount": 540,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 25,
        "title": "DIA 25 - Vino de chorus",
        "tasks": [
          {
            "title": "Recolecta fruta de chorus x5",
            "item": "minecraft:chorus_fruit",
            "amount": 5,
            "icon": "minecraft:chorus_fruit"
          },
          {
            "title": "Fabrica fruta de chorus horneada x4",
            "item": "minecraft:popped_chorus_fruit",
            "amount": 4,
            "icon": "minecraft:popped_chorus_fruit"
          },
          {
            "title": "Fabrica botellas x3",
            "item": "minecraft:glass_bottle",
            "amount": 3,
            "icon": "minecraft:glass_bottle"
          },
          {
            "title": "Fabrica azucar x3",
            "item": "minecraft:sugar",
            "amount": 3,
            "icon": "minecraft:sugar"
          },
          {
            "title": "Recolecta miel x3",
            "item": "minecraft:honey_bottle",
            "amount": 3,
            "icon": "minecraft:honey_bottle"
          }
        ],
        "reward": {
          "title": "570 monedas",
          "amount": 570,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 26,
        "title": "DIA 26 - Banquete de apertura",
        "tasks": [
          {
            "title": "Fabrica manzana dorada x3",
            "item": "minecraft:golden_apple",
            "amount": 3,
            "icon": "minecraft:golden_apple"
          },
          {
            "title": "Hornea tortas x2",
            "item": "minecraft:cake",
            "amount": 2,
            "icon": "minecraft:cake"
          },
          {
            "title": "Hornea pastel de calabaza x4",
            "item": "minecraft:pumpkin_pie",
            "amount": 4,
            "icon": "minecraft:pumpkin_pie"
          },
          {
            "title": "Hornea galletitas x10",
            "item": "minecraft:cookie",
            "amount": 10,
            "icon": "minecraft:cookie"
          },
          {
            "title": "Prepara estofado de conejo x2",
            "item": "minecraft:rabbit_stew",
            "amount": 2,
            "icon": "minecraft:rabbit_stew"
          }
        ],
        "reward": {
          "title": "620 monedas",
          "amount": 620,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 27,
        "title": "DIA 27 - Tabla de quesos y conservas",
        "tasks": [
          {
            "title": "Fabrica queso x3",
            "item": "expandeddelight:cheese",
            "amount": 3,
            "icon": "expandeddelight:cheese"
          },
          {
            "title": "Prepara mantequilla de mani x2",
            "item": "expandeddelight:peanut_butter",
            "amount": 2,
            "icon": "expandeddelight:peanut_butter"
          },
          {
            "title": "Prepara mermelada de bayas x2",
            "item": "expandeddelight:sweet_berry_jam",
            "amount": 2,
            "icon": "expandeddelight:sweet_berry_jam"
          },
          {
            "title": "Hornea pan x6",
            "item": "minecraft:bread",
            "amount": 6,
            "icon": "minecraft:bread"
          },
          {
            "title": "Recolecta miel x3",
            "item": "minecraft:honey_bottle",
            "amount": 3,
            "icon": "minecraft:honey_bottle"
          }
        ],
        "reward": {
          "title": "680 monedas",
          "amount": 680,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 28,
        "title": "DIA 28 - Cocina de taberna completa",
        "tasks": [
          {
            "title": "Prepara patata rellena x3",
            "item": "farmersdelight:stuffed_potato",
            "amount": 3,
            "icon": "farmersdelight:stuffed_potato"
          },
          {
            "title": "Prepara cebolla a la parrilla x3",
            "item": "farmersdelight:barbecued_onion",
            "amount": 3,
            "icon": "farmersdelight:barbecued_onion"
          },
          {
            "title": "Prepara albondigas x2",
            "item": "farmersdelight:meatballs",
            "amount": 2,
            "icon": "farmersdelight:meatballs"
          },
          {
            "title": "Cocina filete de vaca x4",
            "item": "minecraft:cooked_beef",
            "amount": 4,
            "icon": "minecraft:cooked_beef"
          },
          {
            "title": "Prepara estofado de hongos x3",
            "item": "minecraft:mushroom_stew",
            "amount": 3,
            "icon": "minecraft:mushroom_stew"
          }
        ],
        "reward": {
          "title": "750 monedas",
          "amount": 750,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 29,
        "title": "DIA 29 - Gran fiesta en la taberna",
        "tasks": [
          {
            "title": "Fabrica tocadiscos x2",
            "item": "minecraft:jukebox",
            "amount": 2,
            "icon": "minecraft:jukebox"
          },
          {
            "title": "Consigue disco Pigstep x1",
            "item": "minecraft:music_disc_pigstep",
            "amount": 1,
            "icon": "minecraft:music_disc_pigstep"
          },
          {
            "title": "Consigue disco Otherside x1",
            "item": "minecraft:music_disc_otherside",
            "amount": 1,
            "icon": "minecraft:music_disc_otherside"
          },
          {
            "title": "Hornea tortas x3",
            "item": "minecraft:cake",
            "amount": 3,
            "icon": "minecraft:cake"
          },
          {
            "title": "Fabrica fogata de almas x2",
            "item": "minecraft:soul_campfire",
            "amount": 2,
            "icon": "minecraft:soul_campfire"
          }
        ],
        "reward": {
          "title": "900 monedas",
          "amount": 900,
          "icon": "saros__money_mod:euro_100"
        }
      },
      {
        "day": 30,
        "title": "DIA 30 - Hostelero legendario",
        "tasks": [
          {
            "title": "Hornea tortas x3",
            "item": "minecraft:cake",
            "amount": 3,
            "icon": "minecraft:cake"
          },
          {
            "title": "Fabrica manzana dorada x5",
            "item": "minecraft:golden_apple",
            "amount": 5,
            "icon": "minecraft:golden_apple"
          },
          {
            "title": "Prepara jamon glaseado x2",
            "item": "farmersdelight:honey_glazed_ham",
            "amount": 2,
            "icon": "farmersdelight:honey_glazed_ham"
          },
          {
            "title": "Prepara chocolate caliente x4",
            "item": "farmersdelight:hot_cocoa",
            "amount": 4,
            "icon": "farmersdelight:hot_cocoa"
          },
          {
            "title": "Fabrica queso x3",
            "item": "expandeddelight:cheese",
            "amount": 3,
            "icon": "expandeddelight:cheese"
          }
        ],
        "reward": {
          "title": "1300 monedas",
          "amount": 1300,
          "icon": "saros__money_mod:euro_100"
        }
      }
    ]
  }
];

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
