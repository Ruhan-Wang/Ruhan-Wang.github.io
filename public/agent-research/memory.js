/* All curves remain visible without JavaScript; the selector adds a compact view. */
(function () {
  var picker = document.getElementById('memoryCurveModel');
  if (!picker) return;
  var panels = document.querySelectorAll('[data-curve]');
  function selectCurve() {
    panels.forEach(function (panel) {
      panel.hidden = panel.dataset.curve !== picker.value;
    });
  }
  picker.addEventListener('change', selectCurve);
  selectCurve();
})();
