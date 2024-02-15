/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable semi */







function initControlPanel () {
    const observer = new window.IntersectionObserver(([entry]) => {
      const panel = document.getElementById('control-panel');
      //console.log(entry.boundingClientRect.top)
      if (entry.isIntersecting) {
        //console.log('Enter')
        //console.log("VISIBLE")
        panel.classList.remove('floating');
        return
      }
      //console.log('Leave')
      if (entry.boundingClientRect.top > 0) {
        //console.log("BELOW")
      } else {
        //console.log("ABOVE")
        panel.classList.add('floating');
      }
    }, {
      root: null,
      threshold: 0,
    });

    observer.observe(document.querySelector('#static-container'));
    
    document.body.addEventListener('keydown', function (e) {
      const panel = document.getElementById('control-panel');
      if (e.key === 'Escape') {
        if (panel.classList.contains('centered')) {
          panel.classList.remove('centered');
          document.getElementById('accordion-settings').focus();
        }
      }
    });
}


function showSettings () {
  const panel = document.getElementById('control-panel');
  if (panel.classList.contains('centered')) {
    panel.classList.remove('centered')
  } else {
    panel.classList.add('centered')
  }
}


export {initControlPanel, showSettings}