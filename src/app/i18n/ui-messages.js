const navigatorLanguages = window.navigator.language;

/**
 * Objet with the keys for each UI message/text.
 *
 * The content for the UI message/text key added here must be added to the
 * uiMesssages object.
 */
export const uiMessagesKeys = {
  error: 'error',
  results: 'results',
  resultsPlaceholder: 'resultsPlaceholder',
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

/**
 * Object with the UI messages/texts content.
 */
const uiMessages = {
  pt_PT: {
    error: 'Erro',
    results: 'Resultados',
    resultsPlaceholder: 'Escolher uma prova',
  },
};
