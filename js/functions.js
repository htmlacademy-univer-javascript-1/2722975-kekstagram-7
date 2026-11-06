const checkStringLength = (value, maxLength) => value.length <= maxLength;

const isPalindrome = (value) => {
  const normalized = value.toLowerCase().replace(/\s/g, '');
  return normalized === Array.from(normalized).reverse().join('');
};

const extractNumber = (value) => {
  const digits = String(value).replace(/\D/g, '');
  return parseInt(digits, 10);
};

// Примеры вызова функций для самопроверки.
checkStringLength('проверяемая строка', 20);
isPalindrome('Лёша на полке клопа нашёл ');
extractNumber('агент 007');
