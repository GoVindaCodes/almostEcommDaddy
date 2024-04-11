// For Dynamic datas

// const showingTranslateValue = (data, lang) => {
const showingTranslateValue = (categoryName) => {
  // console.log("data : ", data, " langs :", lang);
  // return data !== undefined && Object?.keys(data).includes(lang)
  //   ? data[lang]
  //   : data?.en;
  // console.log("hi", categoryName)
  const translations = [];
  if (translations.hasOwnProperty(categoryName)) {
    return translations[categoryName];
  } else {
    return categoryName;
  }
};

// Added by : Govinda 28/3/2024 just for static data as of now

// const showingTranslateValue = (categoryName) => {
//   console.log("hi", categoryName)
//   const translations = {};
//   if (translations.hasOwnProperty(categoryName)) {
//     return translations[categoryName];
//   } else {
//     return categoryName;
//   }
// };

// const showingTranslateValue1 = (categoryName) => {
const showingTranslateValue1 = (data, lang) => {
  // console.log("hi", categoryName)
  // const translations = [];
  // if (translations.hasOwnProperty(categoryName)) {
  //   return translations[categoryName];
  // } else {
  //   return categoryName;
  // }
  // console.log("data : ", data, " langs :", lang);
  return data !== undefined && Object?.keys(data).includes(lang)
    ? data[lang]
    : data?.en;
};

const showingImage = (data) => {
  return data !== undefined && data;
};

const showingUrl = (data) => {
  return data !== undefined ? data : '!#';
};

export { showingTranslateValue, showingImage, showingUrl, showingTranslateValue1 };
