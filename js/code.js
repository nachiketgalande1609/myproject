document.getElementById("values").addEventListener("input", function () {
  text = document.getElementById("values").value;
  document.getElementById("liveView").setAttribute("srcdoc",text);
});

$(function() {
  $('#saveToFile').click(function(e) {
    var data = document.getElementById('values').value;
    var data = 'data:application/csv;charset=utf-8,' + encodeURIComponent(data);
    var el = e.currentTarget;
    el.href = data;
    el.target = '_blank';
    el.download = 'data.txt';
  });
});
