const navigatorLanguages = window.navigator.language;

/**
 * Objet with the keys for each error message.
 *
 * The content for error message key added here must be added to the
 * uiMesssages object.
 */
export const errorMessagesKeys = {
  eventNotFound: 'eventNotFound',
  eventsListNotFound: 'eventsListNotFound',
  networkError: 'networkError',
  resultsNotFound: 'resultsNotFound',
};

/**
 * Object with the error messages content.
 */
const errorMessages = {
  pt_PT: {
    eventNotFound: 'O evento escolhido não existe.',
    eventsListNotFound: 'Não foi possível obter a lista de eventos.',
    networkError: 'Erro de conexão, não foi possível ligar ao servidor.',
    resultsNotFound: 'Não foi possível obter os resultados pretendidos, ainda não estão disponíveis.',
  },
};

/**
 * Returns the error message for the given key.
 *
 * @param {String} key of the error
 * @returns the fetched error message
 */
export function getErrorMessage(key) {
  switch (navigatorLanguages) {
    case 'pt_PT':
    default:
      return errorMessages.pt_PT[key];
  }
}
