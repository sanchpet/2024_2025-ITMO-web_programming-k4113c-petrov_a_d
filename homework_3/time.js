const url1 = 'https://kodaktor.ru/sleep/?n=7';
const url2 = 'https://node-server.online/r/fivesec';

async function measureSequential() {
  const start = performance.now();
  
  await fetch(url1);
  await fetch(url2);
  
  const end = performance.now();
  return end - start;
}

async function measureConcurrent() {
  const start = performance.now();
  
  await Promise.all([fetch(url1), fetch(url2)]);
  
  const end = performance.now();
  return end - start;
}

async function runMeasurements() {
  const sequentialTime = await measureSequential();
  const concurrentTime = await measureConcurrent();
  
  console.log(`Последовательные запросы: ${sequentialTime.toFixed(2)} мс`);
  console.log(`Конкурентные запросы: ${concurrentTime.toFixed(2)} мс`);
}

runMeasurements();