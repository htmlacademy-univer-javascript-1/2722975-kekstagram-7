import {getRandomInteger, getRandomItem, createIdGenerator} from './util.js';

const PHOTO_COUNT = 25;
const NAMES = ['Анна', 'Артём', 'Ольга', 'Иван', 'Мария', 'Сергей'];
const DESCRIPTIONS = [
  'Летний день у моря',
  'Прогулка по новому городу',
  'Поймали красивый свет',
  'Маленькие радости большого путешествия',
  'Момент, который хочется сохранить',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const createPhotos = () => {
  const getCommentId = createIdGenerator();
  const createComment = () => ({
    id: getCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: Array.from({length: getRandomInteger(1, 2)}, () => getRandomItem(MESSAGES)).join(' '),
    name: getRandomItem(NAMES),
  });
  return Array.from({length: PHOTO_COUNT}, (_, index) => ({
    id: index + 1,
    url: `photos/${index + 1}.jpg`,
    description: getRandomItem(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(0, 30)}, createComment),
  }));
};

export {createPhotos};
