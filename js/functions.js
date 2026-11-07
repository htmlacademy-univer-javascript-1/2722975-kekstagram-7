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

const timeToMinutes = (value) => {
  const [hours, minutes] = value.split(':').map(Number);
  return hours * 60 + minutes;
};

const isMeetingWithinWorkday = (dayStart, dayEnd, meetingStart, duration) => {
  const start = timeToMinutes(meetingStart);
  return start >= timeToMinutes(dayStart) && start + duration <= timeToMinutes(dayEnd);
};

isMeetingWithinWorkday('08:00', '17:30', '14:00', 90);
