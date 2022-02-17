const navigatorLanguages = window.navigator.language;

/**
 * Objet with the keys for each UI message/text.
 *
 * The content for the UI message/text key added here must be added to the
 * uiMesssages object.
 */
export const uiMessagesKeys = {
  cycling: 'cycling',
  date: 'date',
  error: 'error',
  firstRun: 'firstRun',
  location: 'location',
  overall: 'overall',
  results: 'results',
  run: 'run',
  resultsPlaceholder: 'resultsPlaceholder',
  secondRun: 'secondRun',
  swim: 'swim',
  time: 'time',
};

/**
 * Object with the UI messages/texts content.
 */
const uiMessages = {
  pt_PT: {
    cycling: 'Ciclismo',
    date: 'Data',
    error: 'Erro',
    firstRun: 'Primeira Corrida',
    location: 'Local',
    overall: 'Absolutos',
    results: 'Resultados',
    resultsPlaceholder: 'Escolher uma prova',
    run: 'Corrida',
    secondRun: 'Segunda Corrida',
    swim: 'Natação',
    time: 'Hora',
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
