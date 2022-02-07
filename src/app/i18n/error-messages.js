const navigatorLanguages = window.navigator.language;

/**
 * Objet with the keys for each error message.
 *
 * The content for error message key added here must be added to the
 * uiMesssages object.
 */
export const errorMessagesKeys = {
  eventNotFound: 'eventNotFound',
  networkError: 'networkError',
  serverError: 'serverError',
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

/**
 * Object with the error messages content.
 */
const errorMessages = {
  pt_PT: {
    eventNotFound: 'O evento escolhido não existe.',
    networkError: 'Erro de conexão, não foi possível ligar ao servidor.',
    serverError: 'Não foi possível obter a lista de eventos.',
  },
};
