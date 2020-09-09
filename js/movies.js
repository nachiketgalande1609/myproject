
$(function(){
  $.getJSON('./film.json',function(data){
    $.each(data.films,function(i,emp){
      $('#film-items').append(
        '<div class="col-lg-3 col-md-4 col-sm-4 col-xs-4 poster"                                                      data-aos="zoom-in-up"                                                                                     data-aos-duration="500">                                                                                  <div class="border">                                                                                      <img src="'+emp.Poster+'"                                                                                 data-actors="Cast : '+emp.Actors+'"                                                                       data-year="Year : '+emp.Year+'"                                                                           data-genre="Genre : '+emp.Genre+'"                                                                        data-director="Director : '+emp.Director+'"                                                               data-plot="'+emp.Plot+'"                                                                                  data-rating="IMDB Rating : '+emp.imdbRating+'"                                                            data-title="'+emp.Title+'"                                                                                  data-download="'+emp.Magnet+'"                                                                            data-trailer="'+emp.Trailer+'"                                                                      class="img-thumbnail">                                                                                  <p>'+emp.Title+'</p>                                                                                         <p class="year">'+emp.Year+'</p>                                                                             <p class="actors">'+emp.Actors+'</p>                                                                      <div align="center">                                                                                        <a class="hvr-bounce-in download" href="'+emp.Magnet+'">Download</a>                                          </div>                                                                                                        </div>                                                                                                        </div>'
      );
    });
  }).error(function(){
    console.log('error');
  });
});

$(window).load (function () {
  $(".img-thumbnail").click( function () {
    this.setAttribute("data-toggle","modal");
    this.setAttribute("data-target",".bd-example-modal-lg");
    document.getElementById("modal-image").setAttribute("src",this.src);
    document.getElementById("modal-title").innerHTML=$(this).attr("data-title");
    document.getElementById("modal-plot").innerHTML=$(this).attr("data-plot");
    document.getElementById("modal-rating").innerHTML=$(this).attr("data-rating");
    document.getElementById("modal-trailer").setAttribute("src",$(this).attr("data-trailer"));
    document.getElementById("modal-actors").innerHTML=$(this).attr("data-actors");
    document.getElementById("modal-director").innerHTML=$(this).attr("data-director");
    document.getElementById("modal-year").innerHTML=$(this).attr("data-year");
    document.getElementById("modal-genre").innerHTML=$(this).attr("data-genre");
    document.getElementById("modal-download").setAttribute("href",$(this).attr("data-download"));
  });
});
