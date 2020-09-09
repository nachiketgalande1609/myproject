$(".img-thumbnail").click( function () {
  this.setAttribute("data-toggle","modal");
  this.setAttribute("data-target",".bd-example-modal-lg");
  document.getElementById("modal-image").setAttribute("src",this.src);
});
