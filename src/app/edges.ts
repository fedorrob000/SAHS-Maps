import {Edge} from './edge';

export const EDGES: Edge[] = [

  // --------------- UPSTAIRS --------------------------------------------------------------------
  // upstairs must be higher in the code
  // index will be used to determine floor

  // hall C north upstairs test
  {roomOne: 'C11U', roomTwo: 'C12U', weight: 1}, // main hall to C202
  {roomOne: 'C12U', roomTwo: 'C13U', weight: 1}, // C202 to C203/C204
  {roomOne: 'C13U', roomTwo: 'C14U', weight: 1}, // C203/C204 to C205
  {roomOne: 'C14U', roomTwo: 'C15U', weight: 1}, // C205 to C206/C207
  {roomOne: 'C15U', roomTwo: 'C16U', weight: 1}, // C206/C207 to C208
  {roomOne: 'C16U', roomTwo: 'C17U', weight: 1}, // C208 to C209/C210
  {roomOne: 'C17U', roomTwo: 'C18U', weight: 1}, // C209/C210 to C211/C212/hallway
  {roomOne: 'C18U', roomTwo: 'C19U', weight: 1}, // C211/C212 to stairs

  // hall C east upstairs 1 test
  {roomOne: 'C18U', roomTwo: 'C28U', weight: 1}, // C211/C212/hallway to C222/hallway/C221/C224

  // hall C east upstairs 2 test
  {roomOne: 'C30U', roomTwo: 'C31U', weight: 1},  // C222/C220 to C230
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
  {roomOne: 'C28U', roomTwo: 'C29U', weight: 1}, // C222/hallway/C221/C224 to stairs

  // hall E north upstairs test
  {roomOne: 'E11U', roomTwo: 'E12U', weight: 1}, // main hall to E202/E203
  {roomOne: 'E12U', roomTwo: 'E13U', weight: 1}, // E202/E203 to E204
  {roomOne: 'E13U', roomTwo: 'E14U', weight: 1}, // E204 to E205
  {roomOne: 'E14U', roomTwo: 'E15U', weight: 1}, // E205 to E207
  {roomOne: 'E15U', roomTwo: 'E16U', weight: 1}, // E207 to E206
  {roomOne: 'E16U', roomTwo: 'E17U', weight: 1}, // E206 to E208
  {roomOne: 'E17U', roomTwo: 'E18U', weight: 1}, // E208 to E209/E210/E211/E212/hallway
  {roomOne: 'E18U', roomTwo: 'E19U', weight: 1}, // E209/E210/E211/E212/hallway to stairs

  // hall E south upstairs test
  {roomOne: 'E21U', roomTwo: 'E22U', weight: 1}, // main hall/E214 to E216/E215
  {roomOne: 'E22U', roomTwo: 'E23U', weight: 1}, // E216/E215 to E218
  {roomOne: 'E23U', roomTwo: 'E24U', weight: 1}, // E218 to E217
  {roomOne: 'E24U', roomTwo: 'E25U', weight: 1}, // E217 to E220
  {roomOne: 'E25U', roomTwo: 'E26U', weight: 1}, // E220 to E222
  {roomOne: 'E26U', roomTwo: 'E27U', weight: 1}, // E222 to E223/E224/E225/E226/hallway
  {roomOne: 'E27U', roomTwo: 'E28U', weight: 1}, // E223/E224/E225/E226/hallway to stairs

  // hall E east upstairs test
  {roomOne: 'E29U', roomTwo: 'E30U', weight: 1}, // E223/E224/E225/E226/hallway to E209/E210/E211/E212/hallway
  {roomOne: 'E30U', roomTwo: 'E31U', weight: 1}, // E209/E210/E211/E212/hallway to E230/E232
  {roomOne: 'E31U', roomTwo: 'E32U', weight: 1}, // E230/E232 to E235
  {roomOne: 'E32U', roomTwo: 'E33U', weight: 1}, // E235 to E234/E236
  {roomOne: 'E33U', roomTwo: 'E34U', weight: 1}, // E236 to stairwell

  // hall D north upstairs test
  {roomOne: 'D11U', roomTwo: 'D12U', weight: 1}, // E-Hall-North to D208
  {roomOne: 'D12U', roomTwo: 'D13U', weight: 1}, // D208 to D212
  {roomOne: 'D13U', roomTwo: 'D14U', weight: 1}, // D212 to D214/D216

  // hall D south upstairs test
  {roomOne: 'D21U', roomTwo: 'D22U', weight: 1}, // E-Hall-South to D220
  {roomOne: 'D22U', roomTwo: 'D23U', weight: 1}, // D220 to D218
  {roomOne: 'D23U', roomTwo: 'D24U', weight: 1}, // D218 to above stairs
  {roomOne: 'D24U', roomTwo: 'D25U', weight: 1}, // above stairs to stairs

  // main hall upstairs test
  {roomOne: 'C11U', roomTwo: 'C21U', weight: 1}, // C-Hall-North to C-Hall-South
  {roomOne: 'C21U', roomTwo: 'M1U', weight: 1}, // C-Hall-South to right of D206
  {roomOne: 'M1U', roomTwo: 'D11U', weight: 1}, // right of D206 to D-Hall-North
  {roomOne: 'D11U', roomTwo: 'M2U', weight: 1}, // D-Hall-North to center of main hall
  {roomOne: 'M2U', roomTwo: 'M0U', weight: 1}, // center of main hall to D203/D204/D205/D206
  {roomOne: 'M2U', roomTwo: 'D21U', weight: 1}, // center of main hall to D-Hall-South
  {roomOne: 'D21U', roomTwo: 'M3U', weight: 1}, // D-Hall-South to right of D204
  {roomOne: 'M3U', roomTwo: 'E11U', weight: 1}, // right of D204 to E-Hall-North
  {roomOne: 'E11U', roomTwo: 'E21U', weight: 1}, // E-Hall-North to E-Hall-South

  // 58 total edges for upstairs

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
  {roomOne: 'M25D', roomTwo: 'M26D', weight: 1}, // main hall A to B108

  // hall A downstairs test
  {roomOne: 'M11D', roomTwo: 'A14D', weight: 1}, // main hall to C202
  {roomOne: 'A12D', roomTwo: 'A13D', weight: 1}, // main hall to C202

  // hall B downstairs test


  // hall C downstairs test


  // hall D downstairs test


  // hall E downstairs test


  // hall F downstairs test


  // Gymnasium downstairs test
  {roomOne: 'M26D', roomTwo: 'G11D', weight: 1}, // main hall A to B108
  {roomOne: 'G11D', roomTwo: 'G12D', weight: 1}, // main hall A to B108
  {roomOne: 'G12D', roomTwo: 'G13D', weight: 1}, // main hall A to B108
  {roomOne: 'G13D', roomTwo: 'G14D', weight: 1}, // main hall A to B108
  {roomOne: 'G14D', roomTwo: 'G15D', weight: 1}, // main hall A to B108
  {roomOne: 'G15D', roomTwo: 'G16D', weight: 1}, // main hall A to B108
  {roomOne: 'G16D', roomTwo: 'G17D', weight: 1}, // main hall A to B108

];
