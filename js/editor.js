// document.getElementById("content").innerHTML =
//   localStorage["text"] || "" // default text
//
// setInterval(function() {
//   // fuction that is saving the innerHTML of the div
//   localStorage["text"] = document.getElementById("content").innerHTML; // content div
// }, 1000);

$(function() {
  $('#saveToText').click(function(e) {
    var data = document.getElementById('content').value;
    var data = 'data:application/csv;charset=utf-8,' + encodeURIComponent(data);
    var el = e.currentTarget;
    el.href = data;
    el.target = '_blank';
    el.download = 'data.txt';
  });
});
