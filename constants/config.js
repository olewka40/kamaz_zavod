export const contructorStages = [
  {
    id: 0,
    enNameParam: "whileBase",
    nameParam: "Колёсная база",
    variants: [
      {
        value: 0,
        label: "4x2",
      },
      {
        value: 1,
        label: "6x4",
      },
      {
        value: 2,
        label: "6x6",
      },
      {
        value: 3,
        label: "8x4",
      },
    ],
  },
  {
    id: 1,
    enNameParam: "powerFilter",
    nameParam: "Отбор мощности",

    variants: [
      {
        value: 0,
        label: "От КПП",
      },
      {
        value: 1,
        label: "От ДВС",
      },
    ],
  },
  {
    id: 2,
    enNameParam: "typeCore",
    nameParam: "Тип Кузова",

    variants: [
      {
        value: 0,
        label: "Шасси",
      },
      {
        value: 1,
        label: "Самосвал",
      },
    ],
  },
];
export const models = [
  {
    modelName: "КАМАЗ 53605-3952",
    value: "536053952",
    whileBase: 0,
    powerFilter: 0,
    typeCore: 0,
    topEquipment: [
      {
        id: 0,
        name: "Распределитель твёрдых реагентов",
        enName: "rtr",
        series: [
          {
            id: 0,
            serName: "KH",
            enName: "KH",
            img: "../../../../../images/KH.png",
            model: [
              {
                id: 0,
                modelName: "KH5036",
                options: [
                  {
                    id: 0,
                    name: "КН5036",
                    enName: "КН5036",
                    cost: 611000,
                    nalogCost: 0,
                    time: 0,
                  },
                  {
                    id: 1,
                    name: "Бункер из нержавейки (доплата)",
                    enName: "",
                    cost: 266667,
                    nalogCost: 0,
                    time: 0,
                  },
                  {
                    id: 2,
                    name: "система увлажнения",
                    enName: "",
                    cost: 109000,
                    nalogCost: 0,
                    time: 0,
                  },
                  {
                    id: 3,
                    name: "система быстросъемности Giletta+МК P3",
                    enName: "",
                    cost: 71300,
                    nalogCost: 0,
                    time: 0,
                  },
                  {
                    id: 4,
                    name: "установка на шасси (обычная)",
                    enName: "",
                    cost: 26128,
                    nalogCost: 0,
                    time: 0,
                  },
                  {
                    id: 5,
                    name: "установка на шасси TwistLock",
                    enName: "",
                    cost: 31354,
                    nalogCost: 0,
                    time: 0,
                  },
                  {
                    id: 6,
                    name: "Боковые козырьки",
                    enName: "",
                    cost: 3834,
                    nalogCost: 0,
                    time: 0,
                  },
                  {
                    id: 7,
                    name: "Увеличение объема до 8 м3",
                    enName: "",
                    cost: 55000,
                    nalogCost: 0,
                    time: 0,
                  },
                  {
                    id: 8,
                    name: "Увеличение объема НЕРЖАВЕЙКИ до 8 м3",
                    enName: "",
                    cost: 81667,
                    nalogCost: 0,
                    time: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "KH6036",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "KH7042",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 3,
                modelName: "KH9042",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 1,
            serName: "SH",
            enName: "SH",
            img: "../../../../../images/SH.png",
            model: [
              {
                id: 0,
                modelName: "SH5036",
                options: [
                  {
                    name: "SН5036 (без пульта ECOS)",
                    enName: "",
                    cost: 866000,
                    nalogCost: 0,
                    time: 0,
                  },
                  {
                    name: "Бункер из нержавейки (доплата)",
                    enName: "",
                    cost: 357500,
                    nalogCost: 0,
                    time: 0,
                  },
                  {
                    name: "система быстросъемности Giletta+МК P3",
                    enName: "",
                    cost: 71300,
                    nalogCost: 0,
                    time: 0,
                  },
                  {
                    name: "установка на шасси (обычная)",
                    enName: "",
                    cost: 26128,
                    nalogCost: 0,
                    time: 0,
                  },
                  {
                    name: "установка на шасси TwistLock",
                    enName: "",
                    cost: 31354,
                    nalogCost: 0,
                    time: 0,
                  },
                  {
                    name: "Боковые козырьки",
                    enName: "",
                    cost: 3834,
                    nalogCost: 0,
                    time: 0,
                  },
                  {
                    name: "Увеличение объема до 8 м3",
                    enName: "",
                    cost: 55000,
                    nalogCost: 0,
                    time: 0,
                  },
                  {
                    name: "Увеличение объема НЕРЖАВЕЙКИ до 8 м3",
                    enName: "",
                    cost: 81667,
                    nalogCost: 0,
                    time: 0,
                  },
                  {
                    name: "Тент против атмосферных осадков",
                    enName: "",
                    cost: 52500,
                    nalogCost: 0,
                    time: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "SH6036",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "SH7042",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 3,
                modelName: "SH9042",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            serName: "UH",
            enName: "UH",
            model: [
              {
                id: 0,
                modelName: "UH3000",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "UH4000",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "UH5000",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 1,
        name: "Распределитель жидких реагентов",
        enName: "rzr",
        series: [
          {
            id: 0,
            serName: "CR",
            enName: "CR",
            model: [
              {
                id: 0,
                modelName: "CR6-30",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "CR7-30",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "CR8-39",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 3,
                modelName: "CR9-39",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 4,
                modelName: "CR11-48",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 5,
                modelName: "CR13-57",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 6,
                modelName: "CR15-66",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Поливомоечное оборудование",
        enName: "po",
        series: [
          {
            id: 0,
            serName: "E2000",
            enName: "E2000",
            model: [
              {
                id: 0,
                modelName: "E2000-1",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "E2000-2",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "E2000-3",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 1,
            serName: "E2200",
            enName: "E2200",
            model: [
              {
                id: 0,
                modelName: "E2200-1",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "E2200-2",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "E2200-3",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    modelName: "КАМАЗ 53605-3954",
    value: "536053954",
    whileBase: 0,
    powerFilter: 1,
    typeCore: 0,
    topEquipment: [
      {
        id: 0,
        name: "Распределитель твёрдых реагентов",
        enName: "rtr",
        series: [
          {
            id: 0,
            serName: "KH",
            enName: "KH",
            model: [
              {
                id: 0,
                modelName: "KH5036",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "KH6036",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "KH7042",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 3,
                modelName: "KH9042",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 1,
            serName: "SH",
            enName: "SH",
            model: [
              {
                id: 0,
                modelName: "SH5036",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "SH6036",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "SH7042",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 3,
                modelName: "SH9042",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            serName: "UH",
            enName: "UH",
            model: [
              {
                id: 0,
                modelName: "UH3000",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "UH4000",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "UH5000",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 1,
        name: "Распределитель жидких реагентов",
        enName: "rtr",
        series: [
          {
            id: 0,
            serName: "CR",
            enName: "CR",
            model: [
              {
                id: 0,
                modelName: "CR6-30",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "CR7-30",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "CR8-39",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 3,
                modelName: "CR9-39",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 4,
                modelName: "CR11-48",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 5,
                modelName: "CR13-57",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 6,
                modelName: "CR15-66",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Поливомоечное оборудование",
        enName: "rtr",
        series: [
          {
            id: 0,
            serName: "E2000",
            enName: "E2000",
            model: [
              {
                id: 0,
                modelName: "E2000-1",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "E2000-2",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "E2000-3",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 1,
            serName: "E2200",
            enName: "E2200",
            model: [
              {
                id: 0,
                modelName: "E2200-1",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "E2200-2",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "E2200-3",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    modelName: "КАМАЗ 65115-3971",
    value: "651153971",
    whileBase: 1,
    powerFilter: 1,
    typeCore: 0,
    topEquipment: [
      {
        id: 0,
        name: "Распределитель твёрдых реагентов",
        enName: "rtr",
        series: [
          {
            id: 0,
            serName: "KH",
            enName: "KH",
            model: [
              {
                id: 0,
                modelName: "KH5036",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "KH6036",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "KH7042",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 3,
                modelName: "KH9042",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 1,
            serName: "SH",
            enName: "SH",
            model: [
              {
                id: 0,
                modelName: "SH5036",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "SH6036",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "SH7042",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 3,
                modelName: "SH9042",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            serName: "UH",
            enName: "UH",
            model: [
              {
                id: 0,
                modelName: "UH3000",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "UH4000",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "UH5000",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 1,
        name: "Распределитель жидких реагентов",
        enName: "rtr",
        series: [
          {
            id: 0,
            serName: "CR",
            enName: "CR",
            model: [
              {
                id: 0,
                modelName: "CR6-30",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "CR7-30",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "CR8-39",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 3,
                modelName: "CR9-39",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 4,
                modelName: "CR11-48",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 5,
                modelName: "CR13-57",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 6,
                modelName: "CR15-66",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Поливомоечное оборудование",
        enName: "rtr",
        series: [
          {
            id: 0,
            serName: "E2000",
            enName: "E2000",
            model: [
              {
                id: 0,
                modelName: "E2000-1",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "E2000-2",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "E2000-3",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 1,
            serName: "E2200",
            enName: "E2200",
            model: [
              {
                id: 0,
                modelName: "E2200-1",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "E2200-2",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "E2200-3",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    modelName: "КАМАЗ 65115-6058",
    value: "651156058",
    whileBase: 1,
    powerFilter: 0,
    typeCore: 1,
    topEquipment: [
      {
        id: 0,
        name: "Распределитель твёрдых реагентов",
        enName: "rtr",
        series: [
          {
            id: 0,
            serName: "KH",
            enName: "KH",
            model: [
              {
                id: 0,
                modelName: "KH5036",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "KH6036",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "KH7042",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 3,
                modelName: "KH9042",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 1,
            serName: "SH",
            enName: "SH",
            model: [
              {
                id: 0,
                modelName: "SH5036",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "SH6036",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "SH7042",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 3,
                modelName: "SH9042",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            serName: "UH",
            enName: "UH",
            model: [
              {
                id: 0,
                modelName: "UH3000",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "UH4000",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "UH5000",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 1,
        name: "Распределитель жидких реагентов",
        enName: "rtr",
        series: [
          {
            id: 0,
            serName: "CR",
            enName: "CR",
            model: [
              {
                id: 0,
                modelName: "CR6-30",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "CR7-30",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "CR8-39",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 3,
                modelName: "CR9-39",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 4,
                modelName: "CR11-48",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 5,
                modelName: "CR13-57",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 6,
                modelName: "CR15-66",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Поливомоечное оборудование",
        enName: "rtr",
        series: [
          {
            id: 0,
            serName: "E2000",
            enName: "E2000",
            model: [
              {
                id: 0,
                modelName: "E2000-1",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "E2000-2",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "E2000-3",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 1,
            serName: "E2200",
            enName: "E2200",
            model: [
              {
                id: 0,
                modelName: "E2200-1",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "E2200-2",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "E2200-3",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    modelName: "КАМАЗ 43253-3010-28",
    value: "43253301028",
    whileBase: 0,
    powerFilter: 0,
    typeCore: 0,
    topEquipment: [
      {
        id: 0,
        name: "Распределитель твёрдых реагентов",
        enName: "rtr",
        series: [
          {
            id: 0,
            serName: "KH",
            enName: "KH",
            model: [
              {
                id: 0,
                modelName: "KH5036",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "KH6036",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "KH7042",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 3,
                modelName: "KH9042",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 1,
            serName: "SH",
            enName: "SH",
            model: [
              {
                id: 0,
                modelName: "SH5036",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "SH6036",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "SH7042",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 3,
                modelName: "SH9042",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            serName: "UH",
            enName: "UH",
            model: [
              {
                id: 0,
                modelName: "UH3000",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "UH4000",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "UH5000",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 1,
        name: "Распределитель жидких реагентов",
        enName: "rtr",
        series: [
          {
            id: 0,
            serName: "CR",
            enName: "CR",
            model: [
              {
                id: 0,
                modelName: "CR6-30",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "CR7-30",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "CR8-39",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 3,
                modelName: "CR9-39",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 4,
                modelName: "CR11-48",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 5,
                modelName: "CR13-57",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 6,
                modelName: "CR15-66",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Поливомоечное оборудование",
        enName: "rtr",
        series: [
          {
            id: 0,
            serName: "E2000",
            enName: "E2000",
            model: [
              {
                id: 0,
                modelName: "E2000-1",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "E2000-2",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "E2000-3",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 1,
            serName: "E2200",
            enName: "E2200",
            model: [
              {
                id: 0,
                modelName: "E2200-1",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 1,
                modelName: "E2200-2",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
              {
                id: 2,
                modelName: "E2200-3",
                options: [
                  {
                    name: "",
                    enName: "",
                    cost: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
