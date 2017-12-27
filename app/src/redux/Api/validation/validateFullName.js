import Validation from './index';
const validation = new Validation();

export default (value, fieldName, action, store) => {
  let storeName = store[fieldName];
  let previousValue = value;
  let currentValue = validation.checkEmptyString(previousValue);

  if (previousValue !== currentValue) {
    action(currentValue);
    return;
  } else if (storeName !== null) {
    action(null);
  }
  previousValue = validation.deleteSpacesAroundEdges(previousValue);
  currentValue = validation.checkNotMoreOneDash(previousValue);

  if (previousValue !== currentValue) {
    action(currentValue);
    return;
  } else if (storeName !== null) {
    action(null);
  }

  currentValue = validation.checkRussianLettersAndDash(previousValue);

  if (previousValue !== currentValue) {
    action(currentValue);
    return;
  } else if (storeName !== null) {
    action(null);
  }

  previousValue = currentValue;
  currentValue = validation.maxLength(previousValue, 30);

  if (previousValue !== currentValue) {
    action(currentValue);
    return;
  } else if (storeName !== null) {
    action(null);
  }
  return currentValue;
}
