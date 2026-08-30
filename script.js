function syncPrintableValues() {
  document.querySelectorAll('textarea, input[type="text"]').forEach((field) => {
    let printable = field.nextElementSibling;

    if (!printable || !printable.classList.contains('print-value')) {
      printable = document.createElement('div');
      printable.className = 'print-value';
      field.insertAdjacentElement('afterend', printable);
    }

    printable.textContent = field.value.trim() || '—';
  });
}

window.addEventListener('beforeprint', syncPrintableValues);

document.querySelectorAll('textarea, input[type="text"]').forEach((field) => {
  field.addEventListener('input', syncPrintableValues);
});

syncPrintableValues();
