/*
AUTHORS
Robert Michael Fedor
Noah Michael Ritter
 */
import {Edge} from './edge';

export const EDGES: Edge[] = [

  // --------------- UPSTAIRS --------------------------------------------------------------------

  // main hall upstairs test
  {roomOne: 'C11U', roomTwo: 'M14U', weight: 1}, // C-Hall-North to C-Hall-South
  {roomOne: 'M14U', roomTwo: 'S11U', weight: 1}, // Main Hall To Stair C
  {roomOne: 'D24U', roomTwo: 'S12U', weight: 1}, // D Hall South to Stair D
  {roomOne: 'M12U', roomTwo: 'S13U', weight: 1}, // Center of main hall to Main Stair D
  {roomOne: 'M15U', roomTwo: 'S14U', weight: 1}, // E Hall to Stair E
  {roomOne: 'E33U', roomTwo: 'S15U', weight: 1}, // Center of back E hall to stairs
  {roomOne: 'C35U', roomTwo: 'S16U', weight: 1},  // C back hallway to stairs
  {roomOne: 'M14U', roomTwo: 'C21U', weight: 1}, // C-Hall-North to C-Hall-South
  {roomOne: 'C21U', roomTwo: 'M11U', weight: 1}, // C-Hall-South to right of D206
  {roomOne: 'M11U', roomTwo: 'D11U', weight: 1}, // right of D206 to D-Hall-North
  {roomOne: 'D11U', roomTwo: 'M12U', weight: 1}, // D-Hall-North to center of main hall
  {roomOne: 'M12U', roomTwo: 'M10U', weight: 1}, // center of main hall to D203/D204/D205/D206
  {roomOne: 'M12U', roomTwo: 'D21U', weight: 1}, // center of main hall to D-Hall-South
  {roomOne: 'D21U', roomTwo: 'M13U', weight: 1}, // D-Hall-South to right of D204
  {roomOne: 'M13U', roomTwo: 'E11U', weight: 1}, // right of D204 to E-Hall-North
  {roomOne: 'E11U', roomTwo: 'M15U', weight: 1}, // E-Hall-North to E-Hall-South
  {roomOne: 'M15U', roomTwo: 'E21U', weight: 1}, // E-Hall-North to E-Hall-South

  // hall C north upstairs test
  {roomOne: 'C11U', roomTwo: 'C12U', weight: 1}, // main hall to C202
  {roomOne: 'C12U', roomTwo: 'C13U', weight: 1}, // C202 to C203/C204
  {roomOne: 'C13U', roomTwo: 'C14U', weight: 1}, // C203/C204 to C205
  {roomOne: 'C14U', roomTwo: 'C15U', weight: 1}, // C205 to C206/C207
  {roomOne: 'C15U', roomTwo: 'C16U', weight: 1}, // C206/C207 to C208
  {roomOne: 'C16U', roomTwo: 'C17U', weight: 1}, // C208 to C209/C210
  {roomOne: 'C17U', roomTwo: 'C18U', weight: 1}, // C209/C210 to C211/C212/hallway
  {roomOne: 'C18U', roomTwo: 'S17U', weight: 1}, // C211/C212 to stairs

  // hall C east upstairs 1 test
  {roomOne: 'C18U', roomTwo: 'C28U', weight: 1}, // C211/C212/hallway to C222/hallway/C221/C224

  // hall C east upstairs 2 test
  {roomOne: 'C26U', roomTwo: 'C31U', weight: 1},  // C222/C220 to C230
  {roomOne: 'C31U', roomTwo: 'C32U', weight: 1},  // C230 to C232/C235
  {roomOne: 'C32U', roomTwo: 'C33U', weight: 1},  // C232/C235 to C237
  {roomOne: 'C33U', roomTwo: 'C34U', weight: 1},  // C237 to C234
  {roomOne: 'C34U', roomTwo: 'C35U', weight: 1},  // C234 to hallway

  // hall C south upstairs test
  {roomOne: 'C21U', roomTwo: 'C22U', weight: 1}, // main hall to C214/C215
  {roomOne: 'C22U', roomTwo: 'C23U', weight: 1}, // C214/C215 to C216
  {roomOne: 'C23U', roomTwo: 'C24U', weight: 1}, // C216 to C217/C218
  {roomOne: 'C24U', roomTwo: 'C25U', weight: 1}, // C217/C218 to C220
  {roomOne: 'C25U', roomTwo: 'C26U', weight: 1}, // C220 to hallway
  {roomOne: 'C26U', roomTwo: 'C27U', weight: 1}, // hallway to C219
  {roomOne: 'C27U', roomTwo: 'C28U', weight: 1}, // C219 to C222/hallway/C221/C224
  {roomOne: 'C28U', roomTwo: 'S18U', weight: 1}, // C222/hallway/C221/C224 to stairs

  // hall E north upstairs test
  {roomOne: 'E11U', roomTwo: 'E12U', weight: 1}, // main hall to E202/E203
  {roomOne: 'E12U', roomTwo: 'E13U', weight: 1}, // E202/E203 to E204
  {roomOne: 'E13U', roomTwo: 'E14U', weight: 1}, // E204 to E205
  {roomOne: 'E14U', roomTwo: 'E15U', weight: 1}, // E205 to E207
  {roomOne: 'E15U', roomTwo: 'E16U', weight: 1}, // E207 to E206
  {roomOne: 'E16U', roomTwo: 'E17U', weight: 1}, // E206 to E208
  {roomOne: 'E17U', roomTwo: 'E18U', weight: 1}, // E208 to E209/E210/E211/E212/hallway
  {roomOne: 'E18U', roomTwo: 'S20U', weight: 1}, // E209/E210/E211/E212/hallway to stairs

  // hall E south upstairs test
  {roomOne: 'E21U', roomTwo: 'E22U', weight: 1}, // main hall/E214 to E216/E215
  {roomOne: 'E22U', roomTwo: 'E23U', weight: 1}, // E216/E215 to E218
  {roomOne: 'E23U', roomTwo: 'E24U', weight: 1}, // E218 to E217
  {roomOne: 'E24U', roomTwo: 'E25U', weight: 1}, // E217 to E220
  {roomOne: 'E25U', roomTwo: 'E26U', weight: 1}, // E220 to E222
  {roomOne: 'E26U', roomTwo: 'E27U', weight: 1}, // E222 to E223/E224/E225/E226/hallway
  {roomOne: 'E27U', roomTwo: 'S19U', weight: 1}, // E223/E224/E225/E226/hallway to stairs

  // hall E east upstairs test
  {roomOne: 'E27U', roomTwo: 'E18U', weight: 1}, // E223/E224/E225/E226/hallway to E209/E210/E211/E212/hallway
  {roomOne: 'E18U', roomTwo: 'E30U', weight: 1}, // E209/E210/E211/E212/hallway to E230/E232
  {roomOne: 'E30U', roomTwo: 'E31U', weight: 1}, // E230/E232 to E235
  {roomOne: 'E31U', roomTwo: 'E32U', weight: 1}, // E235 to E234/E236
  {roomOne: 'E32U', roomTwo: 'E33U', weight: 1}, // E236 to stairwell

  // hall D north upstairs test
  {roomOne: 'D11U', roomTwo: 'D12U', weight: 1}, //
  {roomOne: 'D12U', roomTwo: 'D13U', weight: 1}, // D208 to D212
  {roomOne: 'D13U', roomTwo: 'D14U', weight: 1}, // D212 to D214/D216

  // hall D south upstairs test
  {roomOne: 'D21U', roomTwo: 'D22U', weight: 1}, // E-Hall-South to D220
  {roomOne: 'D22U', roomTwo: 'D23U', weight: 1}, // D220 to D218
  {roomOne: 'D23U', roomTwo: 'D24U', weight: 1}, // D218 to above stairs
  {roomOne: 'D24U', roomTwo: 'D25U  ', weight: 1}, // above stairs to stairs


  // 57 total edges for upstairs

  // --------------- DOWNSTAIRS --------------------------------------------------------------------
  // downstairs must be lower in the code
  // index will be used to determine floor

  // main hallway downstairs test
  {roomOne: 'M11D', roomTwo: 'M12D', weight: 1}, // main hall A to B108
  {roomOne: 'M12D', roomTwo: 'M13D', weight: 1}, // main hall A to B108
  {roomOne: 'M13D', roomTwo: 'M14D', weight: 1}, // main hall A to B108
  {roomOne: 'M14D', roomTwo: 'M15D', weight: 1}, // main hall A to B108
  {roomOne: 'M15D', roomTwo: 'M16D', weight: 1}, // main hall A to B108
  {roomOne: 'M16D', roomTwo: 'M17D', weight: 1}, // main hall A to B108
  {roomOne: 'M17D', roomTwo: 'M18D', weight: 1}, // main hall A to B108
  {roomOne: 'M18D', roomTwo: 'M19D', weight: 1}, // main hall A to B108
  {roomOne: 'M19D', roomTwo: 'M21D', weight: 1}, // main hall A to B108
  {roomOne: 'M21D', roomTwo: 'M22D', weight: 1}, // main hall A to B108
  {roomOne: 'M22D', roomTwo: 'M23D', weight: 1}, // main hall A to B108
  {roomOne: 'M23D', roomTwo: 'M24D', weight: 1}, // main hall A to B108
  {roomOne: 'M24D', roomTwo: 'M25D', weight: 1}, // main hall A to B108
  {roomOne: 'M14D', roomTwo: 'S11D', weight: 1}, // Main hall to C Stairs
  {roomOne: 'D23D', roomTwo: 'S12D', weight: 1}, // D hall to D stairs main
  {roomOne: 'M18D', roomTwo: 'S13D', weight: 1}, // Main hall to D stairs main
  {roomOne: 'M22D', roomTwo: 'S14D', weight: 1}, // Main hall to E stairs main
  {roomOne: 'C38D', roomTwo: 'S15D', weight: 1}, // Back hall to E stairs
  {roomOne: 'C34D', roomTwo: 'S16D', weight: 1}, // Back hall to C stairs


  // {roomOne: 'M25D', roomTwo: 'M26D', weight: 1}, // main hall A to B108

  // main hallway backside
  {roomOne: 'C14D', roomTwo: 'C31D', weight: 1}, // main hall A to B108
  {roomOne: 'C31D', roomTwo: 'C23D', weight: 1}, // main hall A to B108
  {roomOne: 'C23D', roomTwo: 'C32D', weight: 1}, // main hall A to B108
  {roomOne: 'C32D', roomTwo: 'C33D', weight: 1}, // main hall A to B108
  {roomOne: 'C33D', roomTwo: 'C34D', weight: 1}, // main hall A to B108
  {roomOne: 'C34D', roomTwo: 'C35D', weight: 1}, // main hall A to B108
  {roomOne: 'C35D', roomTwo: 'D14D', weight: 1}, // main hall A to B108
  {roomOne: 'D14D', roomTwo: 'C36D', weight: 1}, // main hall A to B108
  {roomOne: 'C36D', roomTwo: 'D26D', weight: 1}, // main hall A to B108
  {roomOne: 'D26D', roomTwo: 'C37D', weight: 1}, // main hall A to B108
  {roomOne: 'C37D', roomTwo: 'C38D', weight: 1}, // main hall A to B108
  {roomOne: 'C38D', roomTwo: 'C39D', weight: 1}, // main hall A to B108
  {roomOne: 'C39D', roomTwo: 'C41D', weight: 1}, // main hall A to B108
  {roomOne: 'C41D', roomTwo: 'C42D', weight: 1}, // main hall A to B108
  {roomOne: 'C42D', roomTwo: 'E16D', weight: 1}, // main hall A to B108

  // hall A downstairs test
  {roomOne: 'A11D', roomTwo: 'A12D', weight: 1}, // main hall to C202
  {roomOne: 'A12D', roomTwo: 'A13D', weight: 1}, // main hall to C202
  {roomOne: 'A13D', roomTwo: 'B13D', weight: 1}, // main hall to C202
  {roomOne: 'M11D', roomTwo: 'A14D', weight: 1}, // main hall to C202

  // hall B downstairs test
  {roomOne: 'M11D', roomTwo: 'B11D', weight: 1}, // main hall to C202
  {roomOne: 'B11D', roomTwo: 'B12D', weight: 1}, // main hall to C202
  {roomOne: 'B12D', roomTwo: 'B13D', weight: 1}, // main hall to C202
  {roomOne: 'B13D', roomTwo: 'B14D', weight: 1}, // main hall to C202

  {roomOne: 'A13D', roomTwo: 'B21D', weight: 1}, // main hall to C202
  {roomOne: 'B21D', roomTwo: 'B22D', weight: 1}, // main hall to C202
  {roomOne: 'B22D', roomTwo: 'B23D', weight: 1}, // main hall to C202
  {roomOne: 'B23D', roomTwo: 'C13D', weight: 1}, // main hall to C202

  // hall C downstairs test
  {roomOne: 'M13D', roomTwo: 'C11D', weight: 1}, //
  {roomOne: 'C11D', roomTwo: 'C12D', weight: 1}, //
  {roomOne: 'C12D', roomTwo: 'C13D', weight: 1}, //
  {roomOne: 'C13D', roomTwo: 'C14D', weight: 1}, //
  {roomOne: 'C14D', roomTwo: 'C15D', weight: 1}, //
  {roomOne: 'C15D', roomTwo: 'S17D', weight: 1}, //

  {roomOne: 'M15D', roomTwo: 'C21D', weight: 1}, //
  {roomOne: 'C21D', roomTwo: 'C22D', weight: 1}, //
  {roomOne: 'C22D', roomTwo: 'C23D', weight: 1}, //
  {roomOne: 'C23D', roomTwo: 'C24D', weight: 1}, //
  {roomOne: 'C24D', roomTwo: 'S18D', weight: 1}, //

  // hall D downstairs test
    // north
  {roomOne: 'M17D', roomTwo: 'D11D', weight: 1}, // main hall to C202
  {roomOne: 'D11D', roomTwo: 'D12D', weight: 1}, // main hall to C202
  {roomOne: 'D12D', roomTwo: 'D13D', weight: 1}, // main hall to C202
  {roomOne: 'D13D', roomTwo: 'D14D', weight: 1}, // main hall to C202
    // south
  {roomOne: 'M18D', roomTwo: 'D27D', weight: 1},
  {roomOne: 'M19D', roomTwo: 'D21D', weight: 1}, // main hall to C202
  {roomOne: 'D21D', roomTwo: 'D22D', weight: 1}, // main hall to C202
  {roomOne: 'D22D', roomTwo: 'D23D', weight: 1}, // main hall to C202
  {roomOne: 'D23D', roomTwo: 'D24D', weight: 1}, // main hall to C202
  {roomOne: 'D24D', roomTwo: 'D25D', weight: 1}, // main hall to C202
  {roomOne: 'D25D', roomTwo: 'D26D', weight: 1}, // main hall to C202

  // hall E downstairs test
    // north
  {roomOne: 'M21D', roomTwo: 'E11D', weight: 1}, //
  {roomOne: 'E11D', roomTwo: 'E12D', weight: 1}, //
  {roomOne: 'E12D', roomTwo: 'E13D', weight: 1}, //
  {roomOne: 'E13D', roomTwo: 'E14D', weight: 1}, //
  {roomOne: 'E14D', roomTwo: 'E15D', weight: 1}, //
  {roomOne: 'E15D', roomTwo: 'E16D', weight: 1}, //
  {roomOne: 'E16D', roomTwo: 'S20D', weight: 1}, //
    // south
  {roomOne: 'M23D', roomTwo: 'E21D', weight: 1}, //
  {roomOne: 'E21D', roomTwo: 'E22D', weight: 1}, //
  {roomOne: 'E22D', roomTwo: 'E23D', weight: 1}, //
  {roomOne: 'E23D', roomTwo: 'E24D', weight: 1}, //
  {roomOne: 'E24D', roomTwo: 'E25D', weight: 1}, //
  {roomOne: 'E25D', roomTwo: 'E26D', weight: 1}, //
  {roomOne: 'E26D', roomTwo: 'E27D', weight: 1}, //
  {roomOne: 'E27D', roomTwo: 'E28D', weight: 1}, //
  {roomOne: 'E28D', roomTwo: 'S19D', weight: 1}, //
    // connect
  {roomOne: 'E28D', roomTwo: 'E16D', weight: 1}, //

  // Gymnasium downstairs test
  {roomOne: 'M25D', roomTwo: 'G11D', weight: 1}, // main hall A to B108
  {roomOne: 'G11D', roomTwo: 'G12D', weight: 1}, // main hall A to B108
  {roomOne: 'G12D', roomTwo: 'G13D', weight: 1}, // main hall A to B108
  {roomOne: 'G13D', roomTwo: 'G14D', weight: 1}, // main hall A to B108
  {roomOne: 'G14D', roomTwo: 'G15D', weight: 1}, // main hall A to B108
  {roomOne: 'G15D', roomTwo: 'G16D', weight: 1}, // main hall A to B108
  {roomOne: 'G16D', roomTwo: 'G17D', weight: 1}, // main hall A to B108
  {roomOne: 'G17D', roomTwo: 'G18D', weight: 1}, // main hall A to B108

  {roomOne: 'G17D', roomTwo: 'G21D', weight: 1}, // main hall A to B108
  {roomOne: 'G21D', roomTwo: 'G22D', weight: 1}, // main hall A to B108

  {roomOne: 'G11D', roomTwo: 'F13D', weight: 1}, // main hall A to B108
  {roomOne: 'F13D', roomTwo: 'BOID', weight: 1}, // main hall A to B108
  {roomOne: 'F13D', roomTwo: 'F10D', weight: 1}, // main hall A to B108

  // Staircases
  {roomOne: 'S11D', roomTwo: 'S11U', weight: 3}, // C Wing Stairs
  {roomOne: 'S12D', roomTwo: 'S12U', weight: 3}, // D Hall Stairs
  {roomOne: 'S13D', roomTwo: 'S13U', weight: 3}, // D Hall Stairs Main
  {roomOne: 'S14D', roomTwo: 'S14U', weight: 3}, // E Wing Stairs
  {roomOne: 'S15D', roomTwo: 'S15U', weight: 3}, // E Wing Stairs Back
  {roomOne: 'S16D', roomTwo: 'S16U', weight: 3}, // C Wing Stairs Back
  {roomOne: 'S17D', roomTwo: 'S17U', weight: 3}, // C stair, 211/212
  {roomOne: 'S18D', roomTwo: 'S18U', weight: 3}, // C stair, 221,224
  {roomOne: 'S19D', roomTwo: 'S19U', weight: 3}, // E stairs left
  {roomOne: 'S20D', roomTwo: 'S20U', weight: 3}, // E stairs right

];
