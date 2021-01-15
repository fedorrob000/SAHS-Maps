import { Room } from './room';

export const ROOMS: Room[] = [
  // y is 10 too low for cursor extension
  // rooms are named: WingLetter +
  // HallwayNumber(starting at 1 in the top left corner of the map) +
  // number starting with 1 going up each room +
  // D for downstairs || U for upstairs
  // EXAMPLE: C23U would be the part of the hall outside C218

  //hall 1 upstairs
  {roomNumber: 'C11U', xPosition: 110, yPosition: 420},
  {roomNumber: 'C12U', xPosition: 195, yPosition: 361},
  {roomNumber: 'C13U', xPosition: 232, yPosition: 334},
  {roomNumber: 'C14U', xPosition: 301, yPosition: 285},
  {roomNumber: 'C15U', xPosition: 340, yPosition: 258},
  {roomNumber: 'C16U', xPosition: 392, yPosition: 220},
  {roomNumber: 'C17U', xPosition: 520, yPosition: 128},
  {roomNumber: 'C18U', xPosition: 542, yPosition: 112},
  {roomNumber: 'C19U', xPosition: 601, yPosition: 71},

  //hall 2 upstairs
  {roomNumber: 'C21U', xPosition: 328, yPosition: 504},
  {roomNumber: 'C22U', xPosition: 418, yPosition: 441},
  {roomNumber: 'C23U', xPosition: 458, yPosition: 413},
  {roomNumber: 'C24U', xPosition: 557, yPosition: 342},
  {roomNumber: 'C25U', xPosition: 621, yPosition: 296},
  {roomNumber: 'C26U', xPosition: 695, yPosition: 244},
  {roomNumber: 'C27U', xPosition: 737, yPosition: 214},
  {roomNumber: 'C28U', xPosition: 757, yPosition: 199},
  {roomNumber: 'C29U', xPosition: 818, yPosition: 155},

  //hall 3 upstairs
  {roomNumber: 'E11U', xPosition: 329, yPosition: 982},
  {roomNumber: 'E12U', xPosition: 423, yPosition: 1049},
  {roomNumber: 'E13U', xPosition: 453, yPosition: 1070},
  {roomNumber: 'E14U', xPosition: 502, yPosition: 1105},
  {roomNumber: 'E15U', xPosition: 539, yPosition: 1131},
  {roomNumber: 'E16U', xPosition: 582, yPosition: 1162},
  {roomNumber: 'E17U', xPosition: 618, yPosition: 1188},
  {roomNumber: 'E18U', xPosition: 758, yPosition: 1288},
  {roomNumber: 'E19U', xPosition: 818, yPosition: 1331},

  //hall 4 upstairs
  {roomNumber: 'E21U', xPosition: 118, yPosition: 1068},
  {roomNumber: 'E22U', xPosition: 192, yPosition: 1121},
  {roomNumber: 'E23U', xPosition: 231, yPosition: 1149},
  {roomNumber: 'E24U', xPosition: 326, yPosition: 1217},
  {roomNumber: 'E25U', xPosition: 358, yPosition: 1239},
  {roomNumber: 'E26U', xPosition: 394, yPosition: 1265},
  {roomNumber: 'E27U', xPosition: 539, yPosition: 1369},
  {roomNumber: 'E28U', xPosition: 600, yPosition: 1413},

  //main hallway upstairs extra points
  {roomNumber: 'M0U', xPosition: 432, yPosition: 739},
  {roomNumber: 'M1U', xPosition: 464, yPosition: 628},
  {roomNumber: 'M2U', xPosition: 494, yPosition: 739},
  {roomNumber: 'M3U', xPosition: 464, yPosition: 860},

  //north d hallway upstairs
  {roomNumber: 'D11U', xPosition: 490, yPosition: 675},
  {roomNumber: 'D12U', xPosition: 554, yPosition: 675},
  {roomNumber: 'D13U', xPosition: 710, yPosition: 675},
  {roomNumber: 'D14U', xPosition: 807, yPosition: 675},

  //south d hallway upstairs
  {roomNumber: 'D21U', xPosition: 490, yPosition: 809},
  {roomNumber: 'D22U', xPosition: 589, yPosition: 809},
  {roomNumber: 'D23U', xPosition: 675, yPosition: 809},
  {roomNumber: 'D24U', xPosition: 804, yPosition: 809},
  {roomNumber: 'D25U', xPosition: 804, yPosition: 862},// stairs

];
