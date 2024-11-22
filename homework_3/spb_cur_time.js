const { JSDOM } = require('jsdom');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const url = 'https://www.worldtimeserver.com/current_time_in_RU-SPE.aspx?city=Saint_Petersburg';

async function getCurrentTime() {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const timeElement = document.querySelector('#theTime');
    if (timeElement) {
      const time = timeElement.textContent.trim();
      const [hours, minutes, seconds] = time.split(':');
      return `${hours}:${minutes}:${seconds}`;
    } else {
      throw new Error('Время не найдено на странице');
    }
  } catch (error) {
    console.error('Ошибка при получении времени:', error);
    return null;
  }
}

getCurrentTime().then(time => {
  if (time) {
    console.log('Текущее время в Санкт-Петербурге:', time);
  }
});