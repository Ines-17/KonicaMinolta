
 const { response } = require('express');
const { addAbortSignal } = require('stream');

document.addEventListener('DOMContentLoaded', function () {
  fetch('http://localhost:5000/getAll')
  .then(response => response.json())
  .then(data => loadHTMLTable(data['data']));
  
});

const addKundennummer = document.querySelector('#kundennummer-btn');

addKundennummer.onClick = function () {
  const kundennummerInput = document.querySelector('#kundennumemr-input');
  const kundennummer = kundennummerInput.value;
  kundennummerInput.value = "";

  fetch('http://localhost:5000/insert', {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ kundennummer : kundennummer})
  })
  .then(response => response.json())
  .then(data => insertRowintoTable(data['data']));
}

function insertRowintoTable(data) {

}


function loadHTMLTable(data) {
  const table = document.querySelector('table tbody');

  if (data.length === 0) {
      table.innerHTML = "<tr><td class='no-data' colspan='8'>No Data</td></tr>";
      return;
  }}
