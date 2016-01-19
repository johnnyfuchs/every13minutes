module.exports = () => {
  const timer = document.querySelectorAll('.js-timer')[0];
  const [min, s, ms] = timer.children;
  let minCount = 0;
  let sCount = 0;
  let msCount = 0;

  setInterval(() => {
    minCount++;

    if (minCount === 13) {
      minCount = 0;
      min.textContent = `${minCount}`;
    } else if (minCount < 10) {
      min.textContent = `0${minCount}`;
    } else {
      min.textContent = `${minCount}`;
    }
  }, 60000);

  setInterval(() => {
    sCount++;

    if (sCount === 60) {
      sCount = 0;
      s.textContent = `${sCount}`;
    } else if (sCount < 10) {
      s.textContent = `0${sCount}`;
    } else {
      s.textContent = `${sCount}`;
    }
  }, 1000);

  setInterval(() => {
    msCount++;

    if (msCount === 13) {
      msCount = 0;
      ms.textContent = `${msCount}`;
    } else if (msCount < 10) {
      ms.textContent = `0${msCount}`;
    } else {
      ms.textContent = `${msCount}`;
    }
  }, 1);
};
