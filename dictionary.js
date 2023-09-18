$(document).ready(() => {
  $('#lookup').click(() => {
    var word = $('#word').val();
    $.ajax({
      url: "http://localhost:8080/",
      data: { word: word },
      type: "GET",
      success: updateHtml,
      error: handleServerError
    });
  });

  $("#word").keyup(function(event) {
    if (event.keyCode === 13) {
      $("#lookup").click();
    }
  });
});

function updateHtml(data) {
  var showThis = "";
  for (var i = 0; i < data.length; i++) {
    var type = data[i].wordtype;
    var def = data[i].definition;
    showThis += `
      <div class="box">
        <div class="number">${i + 1}</div>
        <div class="type">(${type})</div>
        <div class="definition">${def}</div>
      </div>
    `;
  }
  $("#show").html(showThis);
}

function handleServerError() {
  console.log('Error occurred from the server');
}