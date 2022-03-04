/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

const navigatorLanguages = window.navigator.language;

/**
 * Objet with the keys for each UI message/text.
 *
 * The content for the UI message/text key added here must be added to the
 * uiMesssages object.
 */
export const uiMessagesKeys = {
  ageGroup: 'ageGroup',
  bike: 'cycling',
  cycling: 'cycling',
  date: 'date',
  error: 'error',
  firstRun: 'firstRun',
  gap: 'gap',
  licence: 'licence',
  location: 'location',
  name: 'name',
  overall: 'overall',
  points: 'points',
  raceNumber: 'raceNumber',
  rank: 'rank',
  results: 'results',
  run: 'run',
  resultsPlaceholder: 'resultsPlaceholder',
  secondRun: 'secondRun',
  swim: 'swim',
  team: 'team',
  t1: 't1',
  t2: 't2',
  time: 'time',
  total: 'total',
};

/**
 * Object with the UI messages/texts content.
 */
const uiMessages = {
  pt_PT: {
    ageGroup: 'Escalão',
    cycling: 'Ciclismo',
    date: 'Data',
    error: 'Erro',
    firstRun: 'Primeira Corrida',
    gap: 'Delta',
    licence: 'Licença',
    location: 'Local',
    name: 'Nome',
    overall: 'Absolutos',
    points: 'Pontos',
    raceNumber: 'Dorsal',
    rank: '#',
    results: 'Resultados',
    resultsPlaceholder: 'Escolher uma prova',
    run: 'Corrida',
    secondRun: 'Segunda Corrida',
    swim: 'Natação',
    team: 'Clube',
    t1: 'T1',
    t2: 'T2',
    time: 'Hora',
    total: 'Total',
  },
};

/**
 * Returns the UI message/text for the given key.
 *
 * @param {String} key of the UI message
 * @returns the fetched UI message/text
 */
export function getUiMessage(key) {
  switch (navigatorLanguages) {
    case 'pt_PT':
    default:
      return uiMessages.pt_PT[key];
  }
}
