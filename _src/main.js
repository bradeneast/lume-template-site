import { $$ } from "./_includes/js/utils.js";
import observer from "./_includes/js/observer.js";
import { watchForms } from "./_includes/js/forms.js";

/** Run initial functions for each page */
function init() {

  watchForms();

  $$("[data-animate]").forEach(elem => {
    elem.setAttribute("data-offscreen", true);
    setTimeout(() => observer.observe(elem), 100);
  });
}

init();