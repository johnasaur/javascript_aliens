// references for tbody
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");


// add event to click the search button
$searchBtn.addEventListener("click", handleSearchButtonClick);

// set filteredTables to data js document (dataSet)
var filteredTable = dataSet;

// render table to tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredTable.length; i++) {
       var address = filteredTable[i];
    var fields = Object.keys(address);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

function handleSearchButtonClick() {
 
var filterdate = $dateInput.value.trim().toLowerCase();

// set array to datetime
filteredTable = dataSet.filter(function(address) {
  var addressdate = address.datetime.toLowerCase();

  // if true, return the datetime array (date)
  return addressdate === filterdate;
});
  renderTable();
}

// render table to load on the page
renderTable();



