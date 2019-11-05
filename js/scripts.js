function Theater (movieName, movieTime, ageGroup) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.ageGroup = ageGroup;
  //priceCalc(this.movieName,this.movieTime,this.ageGroup);
}

Theater.prototype.priceCalc = function () {
  var price = 0
  if (this.movieName === "newMovie" && this.movieTime === "afterFive" && this.ageGroup === "over18") {
    return price = 20;
  } else if (this.movieName === "newMovie" && this.movieTime === "beforeFive" && this.ageGroup === "over18") {
    return price = 15;
  } else if (this.movieName === "oldMovie" && this.movieTime === "afterFive" && this.ageGroup === "over18") {
    return price = 15;
  } else if (this.movieName === "oldMovie" && this.movieTime === "beforeFive" && this.ageGroup === "over18") {
    return price = 15
  } else if (this.movieName === "newMovie" && this.movieTime === "beforeFive" && this.ageGroup === "under18") {
    return price = 10;
  } else if (this.movieName === "newMovie" && this.movieTime === "afterFive" && this.ageGroup === "under18") {
    return price = 15;
  } else if (this.movieName === "oldMovie" && this.movieTime === "afterFive" && this.ageGroup === "under18") {
    return price = 15;
  } else if (this.movieName === "oldMovie" && this.movieTime === "beforeFive" && this.ageGroup === "under18") {
    return price = 8;
  } else if (this.movieName === "newMovie" && this.movieTime === "beforeFive" && this.ageGroup === "over65") {
    return price = 10;
  } else if (this.movieName === "newMovie" && this.movieTime === "afterFive" && this.ageGroup === "over65") {
    return price = 15;
  } else if (this.movieName === "oldMovie" && this.movieTime === "beforeFive" && this.ageGroup === "over65") {
    return price = 15;
  } else if (this.movieName === "oldMovie" && this.movieTime === "afterFive" && this.ageGroup === "over65") {
    return price = 15;
  } else {
    return false;
  }
}



$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();

    var inputMovie = $("#movieID").val();
    var inputTime = $("#timeID").val();
    var inputAge = $("input:radio[name=age]:checked").val();
    console.log(inputAge, inputTime, inputMovie);
  var theater = new Theater(inputMovie,inputTime,inputAge);
  var result = "Your price is $"+theater.priceCalc()+".00";

  console.log(result);
  $("#resultBox").text(result).show();
  });
});
