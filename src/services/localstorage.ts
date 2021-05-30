export type Key = 'transactionRegister';

export const LSKeys: { [K in Key]: string } = {
  transactionRegister: '@senfinanca/transaction'
}

export const defaultValues: { [K in Key]: any } = {
  transactionRegister: []
}

export function saveLSItem(key: Key, value: any) {
  localStorage.setItem(LSKeys[key], JSON.stringify(value));
  return value;
}

export function loadLSItem(key: Key): any {
  const stringValue = localStorage.getItem(LSKeys[key]);

  if (!stringValue) {
    if (!defaultValues[key]) return null;
    return defaultValues[key];
  }

  return JSON.parse(stringValue);
}

export function removeLSItem(key: Key) {
  localStorage.removeItem(LSKeys[key]);
}
