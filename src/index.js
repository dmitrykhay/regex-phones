export default class Validator {
  convertPhoneNumber(rawPhone) {
    const onlyPhoneDigits = rawPhone.match(/\d+/g).join('');
    if (onlyPhoneDigits.length === 12 && /^\+86/.test(rawPhone)) {
      return `+${onlyPhoneDigits}`;
    }
    return `+7${rawPhone.match(/\d+(?<!^8|\+7)/g).join('')}`;
  }
}
