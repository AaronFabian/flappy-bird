export const createImage = function (imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  return image;
};

export const randomIntFromRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
