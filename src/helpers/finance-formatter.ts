const enum currencyEnum {
  EUR = '\u20AC',
  USD = '\u0024'
}

export const financeFormatter = (sum: number, currency: string): string => {
  const sumFormatted = String(sum).replace('.', ',');

  switch (currency) {
    case 'EUR':
      return `${currencyEnum.EUR} ${sumFormatted}`;
      break;

    case 'USD':
      return `${currencyEnum.USD} ${sumFormatted}`;
      break;

    default:
      return '';
  }
};
