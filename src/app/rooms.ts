import { Room } from './room';

export const ROOMS: Room[] = [
  // rooms are named: WingLetter +
  // HallwayNumber(starting at 1 in the top left corner of the map) +
  // number starting with 1 going up each room +
  // D for downstairs || U for upstairs
  // EXAMPLE: C23U would be the part of the hall outside C218

  // ------------------UPSTAIRS-------------------------------
  // upstairs will be higher in the code for now
  // index will be used to determine floor

  // y is 10 too low for cursor extension for upstairs

  // hall C north upstairs
  {roomNumber: 'C11U', xPosition: 110, yPosition: 420},
  {roomNumber: 'C12U', xPosition: 195, yPosition: 361},
  {roomNumber: 'C13U', xPosition: 232, yPosition: 334},
  {roomNumber: 'C14U', xPosition: 301, yPosition: 285},
  {roomNumber: 'C15U', xPosition: 340, yPosition: 258},
  {roomNumber: 'C16U', xPosition: 392, yPosition: 220},
  {roomNumber: 'C17U', xPosition: 520, yPosition: 128},
  {roomNumber: 'C18U', xPosition: 540, yPosition: 114},
  {roomNumber: 'C19U', xPosition: 601, yPosition: 71},

  // hall C south upstairs
  {roomNumber: 'C21U', xPosition: 328, yPosition: 504},
  {roomNumber: 'C22U', xPosition: 418, yPosition: 441},
  {roomNumber: 'C23U', xPosition: 458, yPosition: 413},
  {roomNumber: 'C24U', xPosition: 557, yPosition: 342},
  {roomNumber: 'C25U', xPosition: 621, yPosition: 296},
  {roomNumber: 'C26U', xPosition: 695, yPosition: 244},
  {roomNumber: 'C27U', xPosition: 737, yPosition: 214},
  {roomNumber: 'C28U', xPosition: 757, yPosition: 199},
  {roomNumber: 'C29U', xPosition: 818, yPosition: 155},

  // hall C east upstairs
  {roomNumber: 'C30U', xPosition: 695, yPosition: 243},
  {roomNumber: 'C31U', xPosition: 900, yPosition: 322},
  {roomNumber: 'C32U', xPosition: 930, yPosition: 334},
  {roomNumber: 'C33U', xPosition: 1014, yPosition: 366},
  {roomNumber: 'C34U', xPosition: 1103, yPosition: 400},
  {roomNumber: 'C35U', xPosition: 1155, yPosition: 420},

  // hall E north upstairs
  {roomNumber: 'E11U', xPosition: 329, yPosition: 982},
  {roomNumber: 'E12U', xPosition: 423, yPosition: 1049},
  {roomNumber: 'E13U', xPosition: 453, yPosition: 1070},
  {roomNumber: 'E14U', xPosition: 502, yPosition: 1105},
  {roomNumber: 'E15U', xPosition: 539, yPosition: 1131},
  {roomNumber: 'E16U', xPosition: 582, yPosition: 1162},
  {roomNumber: 'E17U', xPosition: 618, yPosition: 1188},
  {roomNumber: 'E18U', xPosition: 758, yPosition: 1288},
  {roomNumber: 'E19U', xPosition: 818, yPosition: 1331},

  // hall E south upstairs
  {roomNumber: 'E21U', xPosition: 118, yPosition: 1068},
  {roomNumber: 'E22U', xPosition: 192, yPosition: 1121},
  {roomNumber: 'E23U', xPosition: 231, yPosition: 1149},
  {roomNumber: 'E24U', xPosition: 326, yPosition: 1217},
  {roomNumber: 'E25U', xPosition: 358, yPosition: 1239},
  {roomNumber: 'E26U', xPosition: 394, yPosition: 1265},
  {roomNumber: 'E27U', xPosition: 539, yPosition: 1369},
  {roomNumber: 'E28U', xPosition: 600, yPosition: 1413},

  // hall E east upstairs
  {roomNumber: 'E29U', xPosition: 539, yPosition: 1369},
  {roomNumber: 'E30U', xPosition: 758, yPosition: 1288},
  {roomNumber: 'E31U', xPosition: 967, yPosition: 1210},
  {roomNumber: 'E32U', xPosition: 1055, yPosition: 1178},
  {roomNumber: 'E33U', xPosition: 1147, yPosition: 1143},
  {roomNumber: 'E34U', xPosition: 1147, yPosition: 1000},

  // main hallway upstairs extra points
  {roomNumber: 'M0U', xPosition: 432, yPosition: 739},
  {roomNumber: 'M1U', xPosition: 464, yPosition: 628},
  {roomNumber: 'M2U', xPosition: 494, yPosition: 739},
  {roomNumber: 'M3U', xPosition: 464, yPosition: 860},

  // north D hallway upstairs
  {roomNumber: 'D11U', xPosition: 490, yPosition: 675},
  {roomNumber: 'D12U', xPosition: 554, yPosition: 675},
  {roomNumber: 'D13U', xPosition: 710, yPosition: 675},
  {roomNumber: 'D14U', xPosition: 807, yPosition: 675},

  // south D hallway upstairs
  {roomNumber: 'D21U', xPosition: 490, yPosition: 809},
  {roomNumber: 'D22U', xPosition: 589, yPosition: 809},
  {roomNumber: 'D23U', xPosition: 675, yPosition: 809},
  {roomNumber: 'D24U', xPosition: 804, yPosition: 809},
  {roomNumber: 'D25U', xPosition: 804, yPosition: 862}, // stairs

  // 60 total rooms for upstairs

  // ------------------------DOWNSTAIRS-----------------------------
  // downstairs will be lower in the code for now
  // index will be used to determine floor

  // For downstairs add 533 to x

  // for bob
    // subtract 100 to y
    //add 234 to x

  // main hallway downstairs
  {roomNumber: 'M11D', xPosition: 1348, yPosition: 500}, // beginning of hall A north downstairs
  {roomNumber: 'M12D', xPosition: 1464, yPosition: 500},
  {roomNumber: 'M13D', xPosition: 1565, yPosition: 535},
  {roomNumber: 'M14D', xPosition: 1625, yPosition: 573},
  {roomNumber: 'M15D', xPosition: 1670, yPosition: 625},
  {roomNumber: 'M16D', xPosition: 1744, yPosition: 750},
  {roomNumber: 'M17D', xPosition: 1754, yPosition: 795},
  {roomNumber: 'M18D', xPosition: 1754, yPosition: 865},
  {roomNumber: 'M19D', xPosition: 1754, yPosition: 935},
  {roomNumber: 'M21D', xPosition: 1668, yPosition: 1101},
  {roomNumber: 'M22D', xPosition: 1615, yPosition: 1152},
  {roomNumber: 'M23D', xPosition: 1560, yPosition: 1187},
  {roomNumber: 'M24D', xPosition: 1234, yPosition: 1250},
  {roomNumber: 'M25D', xPosition: 1120, yPosition: 1360},

  // main hallway backside downstairs


  // hall A north downstairs
  {roomNumber: 'A14D', xPosition: 1348, yPosition: 100},

  // hall A east downstairs
  {roomNumber: 'A12D', xPosition: 817, yPosition: 110},
  {roomNumber: 'A13D', xPosition: 710, yPosition: 110},

  // hall B north downstairs


  // hall C north 1 downstairs


  // hall C north 2 downstairs


  // hall C east downstairs


  // hall D north downstairs


  // hall D south downstairs


  // hall E north 1 downstairs


  // hall E north 2 downstairs


  // hall E east downstairs


  // hall F downstairs


  // Gymnasium
  {roomNumber: 'G11D', xPosition: 1120, yPosition: 1445},
  {roomNumber: 'G12D', xPosition: 1120, yPosition: 1360},
  {roomNumber: 'G13D', xPosition: 1120, yPosition: 1360},
  {roomNumber: 'G14D', xPosition: 1120, yPosition: 1360},
  {roomNumber: 'G15D', xPosition: 1120, yPosition: 1360},
  {roomNumber: 'G16D', xPosition: 1120, yPosition: 1360},
  {roomNumber: 'G17D', xPosition: 1120, yPosition: 1360},
  {roomNumber: 'G18D', xPosition: 1120, yPosition: 1360},



];
