/*
[]: { array of tank information:
  id: tank's id
  name: tank's name
  borderWidth: width of the tank's borders
  bodyShape: circle or square
  levelRequirement: levels required to upgrade to this tank
  upgrades[]: tanks in form of tank ids
  upgradeMsg: notification sent when you upgrade to this tank, null if none sent
  fieldFactor: factors into calculating fov, lower = more fov. http://spade-squad.com/physics.html#Ff
  stats[]: { list of stats
    name: name of the stat
    max: maximum level of the stat
  }
  barrels[]: { list of barrels
    angle: angle in degrees, facing direction
    offset: offset from facing direction - for tanks like twin etc
    size: height / length of the barrel at level 0
    width: width of the barrel at level 0
    isTrapezoid: determines where or not the barrel is a trapezoid
    trapezoidDir: if is trapezoid, this is the direction its facing. example: machine gun=0, stalker=180
    recoil: recoil from a given shot from this barrel
    delay: delay of the barrel, allows for barrels to shoot at different times
    reload: reload of the barrel (15 * for ticks iirc?)
    bullet: { information on the bullet being shot out
      type: bullet, drone, or trap
      damageFactor: damage per tick related, and the reverse of knockback
      baseHealth: maxHealth of the bullet
      deaccelRate: rate at which it begins to deaccelerate
      durability: life span, relating to how long it takes until the bullet decays and vanishes
    }
  }
}
*/
const TANK_DEFS = [
  {
    "id": 0,
    "name": "Tank",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 0,
    "upgrades": [
      1,
      6,
      7,
      8,
      36
    ],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 1,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 1,
    "name": "Twin",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 15,
    "upgrades": [
      3,
      4,
      13
    ],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": -26,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.75,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.65,
          "baseHealth": 0.9,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": 26,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.75,
        "delay": 0.5,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.65,
          "baseHealth": 0.9,
          "deaccelRate": 1,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 2,
    "name": "Triplet",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": -26,
        "size": 80,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.5,
        "delay": 0.5,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.6,
          "baseHealth": 0.7,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": 26,
        "size": 80,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.5,
        "delay": 0.5,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.6,
          "baseHealth": 0.7,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.5,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.6,
          "baseHealth": 0.7,
          "deaccelRate": 1,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 3,
    "name": "Triple Shot",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 30,
    "upgrades": [
      2,
      14,
      42
    ],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": -45,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.7,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 45,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.7,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.7,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 4,
    "name": "Quad Tank",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 30,
    "upgrades": [
      5,
      40
    ],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 180,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.75,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": -90,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.75,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 90,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.75,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.75,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 5,
    "name": "Octo Tank",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": -45,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0.5,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.65,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 45,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0.5,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.65,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": -135,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0.5,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.65,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 135,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0.5,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.65,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 180,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.65,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": -90,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.65,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 90,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.65,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.65,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 6,
    "name": "Sniper",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 15,
    "upgrades": [
      15,
      11,
      19,
      31
    ],
    "upgradeMsg": "",
    "fieldFactor": 0.9,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 110,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 3,
        "delay": 0,
        "reload": 1.5,
        "bullet": {
          "type": "bullet",
          "damageFactor": 1,
          "baseHealth": 1,
          "deaccelRate": 0.3,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 7,
    "name": "Machine Gun",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 15,
    "upgrades": [
      10,
      20,
      29
    ],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 0.5,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.7,
          "baseHealth": 1,
          "deaccelRate": 3,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 8,
    "name": "Flank Guard",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 15,
    "upgrades": [
      9,
      4,
      13,
      41
    ],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 1,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 180,
        "offset": 0,
        "size": 80,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 1,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 9,
    "name": "Tri-Angle",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 30,
    "upgrades": [
      23,
      24
    ],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.2,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 1,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 210,
        "offset": 0,
        "size": 80,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 2.5,
        "delay": 0.5,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.2,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 0.5
        }
      },
      {
        "angle": 150,
        "offset": 0,
        "size": 80,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 2.5,
        "delay": 0.5,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.2,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 0.5
        }
      }
    ]
  },
  {
    "id": 10,
    "name": "Destroyer",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 30,
    "upgrades": [
      25,
      49,
      54,
      55
    ],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 24.705875,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 15,
        "delay": 0,
        "reload": 4,
        "bullet": {
          "type": "bullet",
          "damageFactor": 3,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 11,
    "name": "Overseer",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 30,
    "upgrades": [
      12,
      17,
      26,
      33,
      48,
      52
    ],
    "upgradeMsg": "Use your left mouse button to control the drones",
    "fieldFactor": 0.9,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Drone Damage",
        "max": 7
      },
      {
        "name": "Drone Health",
        "max": 7
      },
      {
        "name": "Drone Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": -90,
        "offset": 0,
        "size": 70,
        "width": 42,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 4
        }
      },
      {
        "angle": 90,
        "offset": 0,
        "size": 70,
        "width": 42,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 4
        }
      }
    ]
  },
  {
    "id": 12,
    "name": "Overlord",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 0.9,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Drone Damage",
        "max": 7
      },
      {
        "name": "Drone Health",
        "max": 7
      },
      {
        "name": "Drone Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": -90,
        "offset": 0,
        "size": 70,
        "width": 42,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 2
        }
      },
      {
        "angle": 90,
        "offset": 0,
        "size": 70,
        "width": 42,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 2
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 70,
        "width": 42,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 2
        }
      },
      {
        "angle": 180,
        "offset": 0,
        "size": 70,
        "width": 42,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 2
        }
      }
    ]
  },
  {
    "id": 13,
    "name": "Twin Flank",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 30,
    "upgrades": [
      18,
      48
    ],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": -26,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.5,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": 26,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0.5,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.5,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 180,
        "offset": -26,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.5,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 180,
        "offset": 26,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0.5,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.5,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 14,
    "name": "Penta Shot",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": -45,
        "offset": 0,
        "size": 80,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.7,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.55,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 45,
        "offset": 0,
        "size": 80,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.7,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.55,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": -22.5,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.7,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.55,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 22.5,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.7,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.55,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 110,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.7,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.55,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 15,
    "name": "Assassin",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 30,
    "upgrades": [
      22,
      21
    ],
    "upgradeMsg": "",
    "fieldFactor": 0.8,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 120,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 3,
        "delay": 0,
        "reload": 2,
        "bullet": {
          "type": "bullet",
          "damageFactor": 1,
          "baseHealth": 1,
          "deaccelRate": 0.3,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 16,
    "name": "Arena Closer",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 0,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 75,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 7,
          "baseHealth": 300,
          "deaccelRate": 1,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 17,
    "name": "Necromancer",
    "borderWidth": 7.5,
    "bodyShape": "square",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 0.9,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Drone Count",
        "max": 7
      },
      {
        "name": "Drone Damage",
        "max": 7
      },
      {
        "name": "Drone Health",
        "max": 7
      },
      {
        "name": "Drone Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": -90,
        "offset": 0,
        "size": 70,
        "width": 42,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.42,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 0
        }
      },
      {
        "angle": 90,
        "offset": 0,
        "size": 70,
        "width": 42,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.42,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 0
        }
      }
    ]
  },
  {
    "id": 18,
    "name": "Triple Twin",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": -26,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.5,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": 26,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0.5,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.5,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 120,
        "offset": -26,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.5,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 120,
        "offset": 26,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0.5,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.5,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": -120,
        "offset": -26,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.5,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": -120,
        "offset": 26,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0.5,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.5,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 19,
    "name": "Hunter",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 30,
    "upgrades": [
      28,
      43
    ],
    "upgradeMsg": "",
    "fieldFactor": 0.85,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 110,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.3,
        "delay": 0,
        "reload": 2.5,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.75,
          "baseHealth": 1,
          "deaccelRate": 0.3,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 31.1111,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.3,
        "delay": 0.2,
        "reload": 2.5,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.75,
          "baseHealth": 1,
          "deaccelRate": 0.3,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 20,
    "name": "Gunner",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 30,
    "upgrades": [
      39,
      32,
      43
    ],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": -32,
        "size": 65,
        "width": 70,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.2,
        "delay": 0.5,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.5,
          "baseHealth": 0.45,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": 32,
        "size": 65,
        "width": 70,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.2,
        "delay": 0.75,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.5,
          "baseHealth": 0.45,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": -17,
        "size": 85,
        "width": 70,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.2,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.5,
          "baseHealth": 0.45,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": 17,
        "size": 85,
        "width": 70,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.2,
        "delay": 0.25,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.5,
          "baseHealth": 0.45,
          "deaccelRate": 1,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 21,
    "name": "Stalker",
    "borderWidth": 7.5,
    "bodyShape": "square",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 0.8,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 120,
        "width": 42,
        "isTrapezoid": true,
        "trapezoidDir": 180,
        "recoil": 3,
        "delay": 0,
        "reload": 2,
        "bullet": {
          "type": "bullet",
          "damageFactor": 1,
          "baseHealth": 1,
          "deaccelRate": 0.3,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 22,
    "name": "Ranger",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 0.7,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 120,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 3,
        "delay": 0,
        "reload": 2,
        "bullet": {
          "type": "bullet",
          "damageFactor": 1,
          "baseHealth": 1,
          "deaccelRate": 0.3,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 23,
    "name": "Booster",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.2,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 1,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 225,
        "offset": 0,
        "size": 70,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.2,
        "delay": 0.66,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.2,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 0.5
        }
      },
      {
        "angle": 135,
        "offset": 0,
        "size": 70,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.2,
        "delay": 0.66,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.2,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 0.5
        }
      },
      {
        "angle": 210,
        "offset": 0,
        "size": 80,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 2.5,
        "delay": 0.33,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.2,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 0.5
        }
      },
      {
        "angle": 150,
        "offset": 0,
        "size": 80,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 2.5,
        "delay": 0.33,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.2,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 0.5
        }
      }
    ]
  },
  {
    "id": 24,
    "name": "Fighter",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.2,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 1,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 90,
        "offset": 0,
        "size": 80,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1.5,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.8,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": -90,
        "offset": 0,
        "size": 80,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1.5,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.8,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 210,
        "offset": 0,
        "size": 80,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 2.5,
        "delay": 0.5,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.2,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 0.5
        }
      },
      {
        "angle": 150,
        "offset": 0,
        "size": 80,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 2.5,
        "delay": 0.5,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.2,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 0.5
        }
      }
    ]
  },
  {
    "id": 25,
    "name": "Hybrid",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 24.705875,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 15,
        "delay": 0,
        "reload": 4,
        "bullet": {
          "type": "bullet",
          "damageFactor": 3,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 180,
        "offset": 0,
        "size": 70,
        "width": 42,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 1.4,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 2
        }
      }
    ]
  },
  {
    "id": 26,
    "name": "Manager",
    "borderWidth": 7.5,
    "bodyShape": "square",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 0.9,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Drone Damage",
        "max": 7
      },
      {
        "name": "Drone Health",
        "max": 7
      },
      {
        "name": "Drone Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 70,
        "width": 42,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 3,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 8
        }
      }
    ]
  },
  {
    "id": 27,
    "name": "Mothership",
    "borderWidth": 0.803575,
    "bodyShape": "circle",
    "levelRequirement": 0,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Drone Damage",
        "max": 7
      },
      {
        "name": "Drone Health",
        "max": 7
      },
      {
        "name": "Drone Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 11.25,
        "offset": 0,
        "size": 60,
        "width": 168,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 2
        }
      },
      {
        "angle": 33.75,
        "offset": 0,
        "size": 60,
        "width": 168,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 2
        }
      },
      {
        "angle": 56.25,
        "offset": 0,
        "size": 60,
        "width": 168,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 2
        }
      },
      {
        "angle": 78.75,
        "offset": 0,
        "size": 60,
        "width": 168,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 2
        }
      },
      {
        "angle": 101.25,
        "offset": 0,
        "size": 60,
        "width": 168,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 2
        }
      },
      {
        "angle": 123.75,
        "offset": 0,
        "size": 60,
        "width": 168,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 2
        }
      },
      {
        "angle": 146.25,
        "offset": 0,
        "size": 60,
        "width": 168,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 2
        }
      },
      {
        "angle": 168.75,
        "offset": 0,
        "size": 60,
        "width": 168,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 2
        }
      },
      {
        "angle": 191.25,
        "offset": 0,
        "size": 60,
        "width": 168,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 2
        }
      },
      {
        "angle": 213.75,
        "offset": 0,
        "size": 60,
        "width": 168,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 2
        }
      },
      {
        "angle": 236.249975,
        "offset": 0,
        "size": 60,
        "width": 168,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 2
        }
      },
      {
        "angle": 258.75,
        "offset": 0,
        "size": 60,
        "width": 168,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 2
        }
      },
      {
        "angle": 281.25,
        "offset": 0,
        "size": 60,
        "width": 168,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 2
        }
      },
      {
        "angle": 303.749975,
        "offset": 0,
        "size": 60,
        "width": 168,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 2
        }
      },
      {
        "angle": 326.25,
        "offset": 0,
        "size": 60,
        "width": 168,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 2
        }
      },
      {
        "angle": 348.75,
        "offset": 0,
        "size": 60,
        "width": 168,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 2
        }
      }
    ]
  },
  {
    "id": 28,
    "name": "Predator",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "Use your right mouse button to look further in the direction you're facing",
    "fieldFactor": 0.85,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 110,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.3,
        "delay": 0,
        "reload": 3,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.75,
          "baseHealth": 1,
          "deaccelRate": 0.3,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 31.1111,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.3,
        "delay": 0.2,
        "reload": 3,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.75,
          "baseHealth": 1,
          "deaccelRate": 0.3,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 80,
        "width": 24.705875,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.3,
        "delay": 0.4,
        "reload": 3,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.75,
          "baseHealth": 1,
          "deaccelRate": 0.3,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 29,
    "name": "Sprayer",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 110,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0.5,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.1,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 0.5,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.7,
          "baseHealth": 1,
          "deaccelRate": 3,
          "durability": 1
        }
      }
    ]
  },
  null,
  {
    "id": 31,
    "name": "Trapper",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 30,
    "upgrades": [
      35,
      32,
      33,
      34,
      44
    ],
    "upgradeMsg": "",
    "fieldFactor": 0.9,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 60,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1.5,
        "bullet": {
          "type": "trap",
          "damageFactor": 1,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 8
        }
      }
    ]
  },
  {
    "id": 32,
    "name": "Gunner Trapper",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 0.9,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": -16,
        "size": 75,
        "width": 84,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0.66,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.5,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": 16,
        "size": 75,
        "width": 84,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0.33,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.5,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 180,
        "offset": 0,
        "size": 60,
        "width": 32.3077,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 3,
        "bullet": {
          "type": "trap",
          "damageFactor": 1,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 8
        }
      }
    ]
  },
  {
    "id": 33,
    "name": "Overtrapper",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 0.9,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 60,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1.5,
        "bullet": {
          "type": "trap",
          "damageFactor": 1,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 8
        }
      },
      {
        "angle": 120,
        "offset": 0,
        "size": 70,
        "width": 42,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 1.4,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 1
        }
      },
      {
        "angle": 240,
        "offset": 0,
        "size": 70,
        "width": 42,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 6,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 1.4,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 1
        }
      }
    ]
  },
  {
    "id": 34,
    "name": "Mega Trapper",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 0.9,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 60,
        "width": 32.3077,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 3.3,
        "bullet": {
          "type": "trap",
          "damageFactor": 1.6,
          "baseHealth": 3.2,
          "deaccelRate": 1,
          "durability": 8
        }
      }
    ]
  },
  {
    "id": 35,
    "name": "Tri-Trapper",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 0.9,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 60,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1.5,
        "bullet": {
          "type": "trap",
          "damageFactor": 1,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 3.2
        }
      },
      {
        "angle": 120,
        "offset": 0,
        "size": 60,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1.5,
        "bullet": {
          "type": "trap",
          "damageFactor": 1,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 3.2
        }
      },
      {
        "angle": 240,
        "offset": 0,
        "size": 60,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1.5,
        "bullet": {
          "type": "trap",
          "damageFactor": 1,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 3.2
        }
      }
    ]
  },
  {
    "id": 36,
    "name": "Smasher",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 30,
    "upgrades": [
      38,
      50,
      51
    ],
    "upgradeMsg": "",
    "fieldFactor": 0.9,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 10
      },
      {
        "name": "Reload",
        "max": 0
      },
      {
        "name": "Bullet Damage",
        "max": 0
      },
      {
        "name": "Bullet Penetration",
        "max": 0
      },
      {
        "name": "Bullet Speed",
        "max": 0
      },
      {
        "name": "Body Damage",
        "max": 10
      },
      {
        "name": "Max Health",
        "max": 10
      },
      {
        "name": "Health Regen",
        "max": 10
      }
    ],
    "barrels": []
  },
  null,
  {
    "id": 38,
    "name": "Landmine",
    "borderWidth": 7.5,
    "bodyShape": "square",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 0.9,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 10
      },
      {
        "name": "Reload",
        "max": 0
      },
      {
        "name": "Bullet Damage",
        "max": 0
      },
      {
        "name": "Bullet Penetration",
        "max": 0
      },
      {
        "name": "Bullet Speed",
        "max": 0
      },
      {
        "name": "Body Damage",
        "max": 10
      },
      {
        "name": "Max Health",
        "max": 10
      },
      {
        "name": "Health Regen",
        "max": 10
      }
    ],
    "barrels": []
  },
  {
    "id": 39,
    "name": "Auto Gunner",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": -32,
        "size": 65,
        "width": 70,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.2,
        "delay": 0.5,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.5,
          "baseHealth": 0.45,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": 32,
        "size": 65,
        "width": 70,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.2,
        "delay": 0.75,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.5,
          "baseHealth": 0.45,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": -17,
        "size": 85,
        "width": 70,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.2,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.5,
          "baseHealth": 0.45,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": 17,
        "size": 85,
        "width": 70,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.2,
        "delay": 0.25,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.5,
          "baseHealth": 0.45,
          "deaccelRate": 1,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 40,
    "name": "Auto 5",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": []
  },
  {
    "id": 41,
    "name": "Auto 3",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 30,
    "upgrades": [
      40,
      39
    ],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": []
  },
  {
    "id": 42,
    "name": "Spread Shot",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 75,
        "offset": 0,
        "size": 65,
        "width": 60,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.1,
        "delay": 0,
        "reload": 2,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.6,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": -75,
        "offset": 0,
        "size": 65,
        "width": 60,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.1,
        "delay": 0,
        "reload": 2,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.6,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 60,
        "offset": 0,
        "size": 71,
        "width": 60,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.1,
        "delay": 0,
        "reload": 2,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.6,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": -60,
        "offset": 0,
        "size": 71,
        "width": 60,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.1,
        "delay": 0,
        "reload": 2,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.6,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 45,
        "offset": 0,
        "size": 77,
        "width": 60,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.1,
        "delay": 0,
        "reload": 2,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.6,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": -45,
        "offset": 0,
        "size": 77,
        "width": 60,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.1,
        "delay": 0,
        "reload": 2,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.6,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 30,
        "offset": 0,
        "size": 83,
        "width": 60,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.1,
        "delay": 0,
        "reload": 2,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.6,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": -30,
        "offset": 0,
        "size": 83,
        "width": 60,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.1,
        "delay": 0,
        "reload": 2,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.6,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 15,
        "offset": 0,
        "size": 89,
        "width": 60,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.1,
        "delay": 0,
        "reload": 2,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.6,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": -15,
        "offset": 0,
        "size": 89,
        "width": 60,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.1,
        "delay": 0,
        "reload": 2,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.6,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.1,
        "delay": 0,
        "reload": 2,
        "bullet": {
          "type": "bullet",
          "damageFactor": 1,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 43,
    "name": "Streamliner",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 0.85,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 110,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.2,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.2,
          "baseHealth": 1,
          "deaccelRate": 0.3,
          "durability": 0.8
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 100,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.2,
        "delay": 0.2,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.2,
          "baseHealth": 1,
          "deaccelRate": 0.3,
          "durability": 0.8
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 90,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.2,
        "delay": 0.4,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.2,
          "baseHealth": 1,
          "deaccelRate": 0.3,
          "durability": 0.8
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 80,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.2,
        "delay": 0.6,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.2,
          "baseHealth": 1,
          "deaccelRate": 0.3,
          "durability": 0.8
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 70,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0.2,
        "delay": 0.8,
        "reload": 1,
        "bullet": {
          "type": "bullet",
          "damageFactor": 0.2,
          "baseHealth": 1,
          "deaccelRate": 0.3,
          "durability": 0.8
        }
      }
    ]
  },
  {
    "id": 44,
    "name": "Auto Trapper",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 0.9,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 60,
        "width": 42,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 1.5,
        "bullet": {
          "type": "trap",
          "damageFactor": 1,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 8
        }
      }
    ]
  },
  {
    "id": 45,
    "name": "Dominator",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 0,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 0
      },
      {
        "name": "Reload",
        "max": 0
      },
      {
        "name": "Bullet Damage",
        "max": 0
      },
      {
        "name": "Bullet Penetration",
        "max": 0
      },
      {
        "name": "Bullet Speed",
        "max": 0
      },
      {
        "name": "Body Damage",
        "max": 0
      },
      {
        "name": "Max Health",
        "max": 0
      },
      {
        "name": "Health Regen",
        "max": 0
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 80,
        "width": 50.4,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0.001,
        "reload": 3,
        "bullet": {
          "type": "bullet",
          "damageFactor": 10,
          "baseHealth": 100,
          "deaccelRate": 1,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 46,
    "name": "Dominator",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 0,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 0
      },
      {
        "name": "Reload",
        "max": 0
      },
      {
        "name": "Bullet Damage",
        "max": 0
      },
      {
        "name": "Bullet Penetration",
        "max": 0
      },
      {
        "name": "Bullet Speed",
        "max": 0
      },
      {
        "name": "Body Damage",
        "max": 0
      },
      {
        "name": "Max Health",
        "max": 0
      },
      {
        "name": "Health Regen",
        "max": 0
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": -6,
        "size": 75,
        "width": 100.8,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0.666,
        "reload": 0.3,
        "bullet": {
          "type": "bullet",
          "damageFactor": 1,
          "baseHealth": 5,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": 6,
        "size": 75,
        "width": 100.8,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0.333,
        "reload": 0.3,
        "bullet": {
          "type": "bullet",
          "damageFactor": 1,
          "baseHealth": 5,
          "deaccelRate": 1,
          "durability": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 80,
        "width": 100.8,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0.001,
        "reload": 0.3,
        "bullet": {
          "type": "bullet",
          "damageFactor": 1,
          "baseHealth": 5,
          "deaccelRate": 1,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 47,
    "name": "Dominator",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 0,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 0
      },
      {
        "name": "Reload",
        "max": 0
      },
      {
        "name": "Bullet Damage",
        "max": 0
      },
      {
        "name": "Bullet Penetration",
        "max": 0
      },
      {
        "name": "Bullet Speed",
        "max": 0
      },
      {
        "name": "Body Damage",
        "max": 0
      },
      {
        "name": "Max Health",
        "max": 0
      },
      {
        "name": "Health Regen",
        "max": 0
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 60,
        "width": 84,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 1.5,
        "bullet": {
          "type": "trap",
          "damageFactor": 3,
          "baseHealth": 20,
          "deaccelRate": 1,
          "durability": 3.2
        }
      },
      {
        "angle": 45,
        "offset": 0,
        "size": 60,
        "width": 84,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 1.5,
        "bullet": {
          "type": "trap",
          "damageFactor": 3,
          "baseHealth": 20,
          "deaccelRate": 1,
          "durability": 3.2
        }
      },
      {
        "angle": 90,
        "offset": 0,
        "size": 60,
        "width": 84,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 1.5,
        "bullet": {
          "type": "trap",
          "damageFactor": 3,
          "baseHealth": 20,
          "deaccelRate": 1,
          "durability": 3.2
        }
      },
      {
        "angle": 135,
        "offset": 0,
        "size": 60,
        "width": 84,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 1.5,
        "bullet": {
          "type": "trap",
          "damageFactor": 3,
          "baseHealth": 20,
          "deaccelRate": 1,
          "durability": 3.2
        }
      },
      {
        "angle": 180,
        "offset": 0,
        "size": 60,
        "width": 84,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 1.5,
        "bullet": {
          "type": "trap",
          "damageFactor": 3,
          "baseHealth": 20,
          "deaccelRate": 1,
          "durability": 3.2
        }
      },
      {
        "angle": 225,
        "offset": 0,
        "size": 60,
        "width": 84,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 1.5,
        "bullet": {
          "type": "trap",
          "damageFactor": 3,
          "baseHealth": 20,
          "deaccelRate": 1,
          "durability": 3.2
        }
      },
      {
        "angle": 270,
        "offset": 0,
        "size": 60,
        "width": 84,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 1.5,
        "bullet": {
          "type": "trap",
          "damageFactor": 3,
          "baseHealth": 20,
          "deaccelRate": 1,
          "durability": 3.2
        }
      },
      {
        "angle": 315,
        "offset": 0,
        "size": 60,
        "width": 84,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 0,
        "delay": 0,
        "reload": 1.5,
        "bullet": {
          "type": "trap",
          "damageFactor": 3,
          "baseHealth": 20,
          "deaccelRate": 1,
          "durability": 3.2
        }
      }
    ]
  },
  {
    "id": 48,
    "name": "Battleship",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 0.9,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 90,
        "offset": -20,
        "size": 75,
        "width": 60,
        "isTrapezoid": true,
        "trapezoidDir": 180,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.15,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": -1
        }
      },
      {
        "angle": 270,
        "offset": -20,
        "size": 75,
        "width": 60,
        "isTrapezoid": true,
        "trapezoidDir": 180,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.15,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": -1
        }
      },
      {
        "angle": 90,
        "offset": 20,
        "size": 75,
        "width": 60,
        "isTrapezoid": true,
        "trapezoidDir": 180,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.15,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": -1
        }
      },
      {
        "angle": 270,
        "offset": 20,
        "size": 75,
        "width": 60,
        "isTrapezoid": true,
        "trapezoidDir": 180,
        "recoil": 1,
        "delay": 0,
        "reload": 1,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.15,
          "baseHealth": 1,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": -1
        }
      }
    ]
  },
  {
    "id": 49,
    "name": "Annihilator",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 1,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 18.260875,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 17,
        "delay": 0,
        "reload": 4,
        "bullet": {
          "type": "bullet",
          "damageFactor": 3,
          "baseHealth": 2,
          "deaccelRate": 1,
          "durability": 1
        }
      }
    ]
  },
  {
    "id": 50,
    "name": "Auto Smasher",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 0.9,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 10
      },
      {
        "name": "Reload",
        "max": 10
      },
      {
        "name": "Bullet Damage",
        "max": 10
      },
      {
        "name": "Bullet Penetration",
        "max": 10
      },
      {
        "name": "Bullet Speed",
        "max": 10
      },
      {
        "name": "Body Damage",
        "max": 10
      },
      {
        "name": "Max Health",
        "max": 10
      },
      {
        "name": "Health Regen",
        "max": 10
      }
    ],
    "barrels": []
  },
  {
    "id": 51,
    "name": "Spike",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 0.9,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 10
      },
      {
        "name": "Reload",
        "max": 0
      },
      {
        "name": "Bullet Damage",
        "max": 0
      },
      {
        "name": "Bullet Penetration",
        "max": 0
      },
      {
        "name": "Bullet Speed",
        "max": 0
      },
      {
        "name": "Body Damage",
        "max": 10
      },
      {
        "name": "Max Health",
        "max": 10
      },
      {
        "name": "Health Regen",
        "max": 10
      }
    ],
    "barrels": []
  },
  {
    "id": 52,
    "name": "Factory",
    "borderWidth": 7.5,
    "bodyShape": "square",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 0.9,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Drone Damage",
        "max": 7
      },
      {
        "name": "Drone Health",
        "max": 7
      },
      {
        "name": "Drone Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 70,
        "width": 42,
        "isTrapezoid": true,
        "trapezoidDir": 0,
        "recoil": 1,
        "delay": 0,
        "reload": 3,
        "bullet": {
          "type": "drone",
          "damageFactor": 0.7,
          "baseHealth": 4,
          "deaccelRate": 1,
          "durability": 1,
          "maxDrones": 6
        }
      }
    ]
  },
  null,
  {
    "id": 54,
    "name": "Skimmer",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 0.9,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 80,
        "width": 24.705875,
        "isTrapezoid": false,
        "trapezoidDir": 0,
        "recoil": 3,
        "delay": 0,
        "reload": 4,
        "bullet": {
          "type": "bullet",
          "damageFactor": 1,
          "baseHealth": 3,
          "deaccelRate": 1,
          "durability": 1.3
        }
      }
    ]
  },
  {
    "id": 55,
    "name": "Rocketeer",
    "borderWidth": 7.5,
    "bodyShape": "circle",
    "levelRequirement": 45,
    "upgrades": [],
    "upgradeMsg": "",
    "fieldFactor": 0.9,
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 80,
        "width": 33.6,
        "isTrapezoid": true,
        "trapezoidDir": 180,
        "recoil": 3,
        "delay": 0,
        "reload": 4,
        "bullet": {
          "type": "bullet",
          "damageFactor": 1,
          "baseHealth": 5,
          "deaccelRate": 1,
          "durability": 1
        }
      }
    ]
  }
];
