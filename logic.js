addVatInputForm.oninput = function(event) {
  event.preventDefault();
  addVAT();
};

substractVatInputForm.oninput = function(event) {
  event.preventDefault();
  substractVAT();
};

function addVAT() {
  const form = document.forms.addVatInputForm;
  let net_price, vat_percentage = 0;
  net_price = form.elements.net_price.value;
  vat_percentage = form.elements.vat_percentage.value;
  let vat_amount = (net_price * vat_percentage) / 100;
  let total_amount = Number(net_price) + Number(vat_amount);
  form.elements.total_amount.value = total_amount;
  form.elements.vat_amount.value = vat_amount;
}

function substractVAT() {
  const form = document.forms.substractVatInputForm;
  let net_price, vat_percentage = 0;
  net_price = form.elements.net_price.value;
  vat_percentage = form.elements.vat_percentage.value;
  let vat_amount = (net_price * vat_percentage) / 100;
  let net_price_without_vat = Number(net_price) - Number(vat_amount);
  form.elements.total_amount.value = net_price_without_vat;
  form.elements.vat_amount.value = vat_amount;
}