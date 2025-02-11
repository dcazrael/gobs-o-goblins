// Base
export const Tile = {
  name: 'Tile',
  components: [
    { type: 'Appearance' },
    { type: 'Description' },
    { type: 'Layer100' },
  ],
};

export const Being = {
  name: 'Being',
  components: [
    { type: 'Appearance' },
    { type: 'Defense' },
    { type: 'Description' },
    { type: 'Health' },
    { type: 'IsBlocking' },
    { type: 'Layer400' },
    { type: 'Power' },
  ],
};

export const Item = {
  name: 'Item',
  components: [
    { type: 'Appearance' },
    { type: 'Description' },
    { type: 'Layer300' },
    { type: 'IsPickup' },
  ],
};

export const Gear = {
  name: 'Gear',
  inherit: ['Item'],
  components: [{ type: 'IsEquippable' }],
};

// Complex
export const Weapon = {
  name: 'Weapon',
  inherit: ['Gear'],
  components: [
    { type: 'Appearance', properties: { char: '⚔', color: '#0066ff' } },

    {
      type: 'Description',
      properties: { name: 'weapon' },
    },
    {
      type: 'Slot',
      properties: {
        name: 'weapon',
      },
    },
  ],
};

export const Armor = {
  name: 'Armor',
  inherit: ['Gear'],
  components: [
    { type: 'Appearance', properties: { char: '🛡', color: '#ff99ff' } },

    {
      type: 'Description',
      properties: { name: 'armor piece' },
    },
  ],
};

export const Chest = {
  name: 'Chest',
  inherit: ['Armor'],
  components: [
    {
      type: 'Description',
      properties: { name: 'chest piece' },
    },
    {
      type: 'Slot',
      properties: {
        name: 'chest',
      },
    },
  ],
};

export const Helmet = {
  name: 'Helmet',
  inherit: ['Armor'],
  components: [
    {
      type: 'Description',
      properties: { name: 'helmet' },
    },
    {
      type: 'Slot',
      properties: {
        name: 'head',
      },
    },
  ],
};

export const Shield = {
  name: 'Shield',
  inherit: ['Armor'],
  components: [
    {
      type: 'Description',
      properties: { name: 'shield' },
    },
    {
      type: 'Slot',
      properties: {
        name: 'shield',
      },
    },
  ],
};

export const Boots = {
  name: 'Boots',
  inherit: ['Armor'],
  components: [
    {
      type: 'Description',
      properties: { name: 'boots' },
    },
    {
      type: 'Slot',
      properties: {
        name: 'legs',
      },
    },
  ],
};

export const HealthPotion = {
  name: 'HealthPotion',
  inherit: ['Item'],
  components: [
    {
      type: 'Appearance',
      properties: { char: '!', color: '#DAA520' },
    },
    {
      type: 'Description',
      properties: { name: 'health potion' },
    },
    {
      type: 'Effects',
      properties: {
        component: 'health',
        delta: 5,
        animate: { color: '#ff0000', char: '♥' },
      },
    },
  ],
};

export const ScrollLightning = {
  name: 'ScrollLightning',
  inherit: ['Item'],
  components: [
    {
      type: 'Appearance',
      properties: { char: '♪', color: '#DAA520' },
    },
    {
      type: 'Description',
      properties: { name: 'scroll of lightning' },
    },
    {
      type: 'Effects',
      properties: {
        animate: { color: '#F7FF00' },
        events: [
          {
            name: 'take-damage',
            args: { amount: 25 },
          },
        ],
      },
    },
    { type: 'RequiresTarget', properties: { acquired: 'RANDOM' } },
  ],
};

export const ScrollParalyze = {
  name: 'ScrollParalyze',
  inherit: ['Item'],
  components: [
    {
      type: 'Appearance',
      properties: { char: '♪', color: '#DAA520' },
    },
    {
      type: 'Description',
      properties: { name: 'scroll of paralyze' },
    },
    {
      type: 'Effects',
      properties: {
        animate: { color: '#FFB0B0' },
        addComponents: [
          {
            name: 'Paralyzed',
            properties: {},
          },
        ],
        duration: 10,
      },
    },
    { type: 'RequiresTarget', properties: { acquired: 'MANUAL' } },
  ],
};

export const ScrollFireball = {
  name: 'ScrollFireball',
  inherit: ['Item'],
  components: [
    {
      type: 'Appearance',
      properties: { char: '♪', color: '#DAA520' },
    },
    {
      type: 'Description',
      properties: { name: 'scroll of fireball' },
    },
    {
      type: 'Effects',
      properties: {
        animate: { color: '#FFA200', char: '^' },
        events: [
          {
            name: 'take-damage',
            args: { amount: 25 },
          },
        ],
      },
    },
    {
      type: 'RequiresTarget',
      properties: {
        acquired: 'MANUAL',
        aoeRange: 3,
      },
    },
  ],
};

export const Wall = {
  name: 'Wall',
  inherit: ['Tile'],
  components: [
    { type: 'IsBlocking' },
    { type: 'IsOpaque' },
    {
      type: 'Appearance',
      properties: { char: '#', color: '#AAA' },
    },
    {
      type: 'Description',
      properties: { name: 'wall' },
    },
  ],
};

export const Floor = {
  name: 'Floor',
  inherit: ['Tile'],
  components: [
    {
      type: 'Appearance',
      properties: { char: '•', color: '#555' },
    },
    {
      type: 'Description',
      properties: { name: 'floor' },
    },
  ],
};

export const StairsUp = {
  name: 'StairsUp',
  inherit: ['Tile'],
  components: [
    {
      type: 'Appearance',
      properties: { char: '<', color: '#AAA' },
    },
    {
      type: 'Description',
      properties: { name: 'set of stairs leading up' },
    },
  ],
};

export const StairsDown = {
  name: 'StairsDown',
  inherit: ['Tile'],
  components: [
    {
      type: 'Appearance',
      properties: { char: '>', color: '#AAA' },
    },
    {
      type: 'Description',
      properties: { name: 'set of stairs leading down' },
    },
  ],
};

export const Player = {
  name: 'Player',
  inherit: ['Being'],
  components: [
    {
      type: 'Appearance',
      properties: { char: '@', color: '#FFF' },
    },
    {
      type: 'Description',
      properties: { name: 'You' },
    },
    { type: 'Inventory' },
  ],
};

export const Goblin = {
  name: 'Goblin',
  inherit: ['Being'],
  components: [
    { type: 'Ai' },
    {
      type: 'Appearance',
      properties: { char: 'g', color: 'green' },
    },
    {
      type: 'Description',
      properties: { name: 'goblin' },
    },
    { type: 'Power', properties: { base: 2, current: 2 } },
    { type: 'Health', properties: { base: 7, current: 7 } },
  ],
};

export const GoblinWarrior = {
  name: 'GoblinWarrior',
  inherit: ['Being'],
  components: [
    { type: 'Ai' },
    {
      type: 'Appearance',
      properties: { char: 'w', color: 'green' },
    },
    {
      type: 'Description',
      properties: { name: 'goblin warrior' },
    },
    { type: 'Defense', properties: { base: 2, current: 2 } },
    { type: 'Power', properties: { base: 4, current: 4 } },
  ],
};
