const navigatorLanguages = window.navigator.language;

export function getErrorMessage(key) {
  switch (navigatorLanguages) {
    case 'pt_PT':
    default:
      return errorMessages.pt_PT[key];
  }
}

export const errorMessagesKeys = {
  networkError: 'networkError',
  serverError: 'serverError',
};

const errorMessages = {
  pt_PT: {
    networkError: 'Erro de conexão, não foi possível ligar ao servidor',
    serverError: 'Não foi possível obter a lista de eventos',
  },
};
