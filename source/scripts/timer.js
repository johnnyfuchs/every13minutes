module.exports = () => {
  const timer = document.querySelectorAll('.js-timer')[0];
  const progressBar = document.querySelector('progress');
  const [min, s, ms] = [...timer.children];
  let minCount = 0;
  let sCount = 0;
  let msCount = 0;
  let msTotal = 0;

  setInterval(() => { // there has to be a better way to do this than all these nested if statements...
    msCount++;
    msTotal++;
    // progressBar.value = msTotal; // maybe do this in a request animation frame if rendering gets janky

    if (msTotal === 780000) {
      msTotal = 0;
    }

    if (msCount === 100) {
      msCount = 0;
      ms.textContent = `0${msCount}`;

      sCount++;
      if (sCount === 60) {
        sCount = 0;
        s.textContent = `0${sCount}`;

        minCount++;
        if (minCount === 13) {
          minCount = 0;
          min.textContent = `0${minCount}`;
        } else if (minCount < 10) {
          min.textContent = `0${minCount}`;
        } else {
          min.textContent = `${minCount}`;
        }
      } else if (sCount < 10) {
        s.textContent = `0${sCount}`;
      } else {
        s.textContent = `${sCount}`;
      }
    } else if (msCount < 10) {
      ms.textContent = `0${msCount}`;
    } else {
      ms.textContent = `${msCount}`;
    }
  }, 1);
};
