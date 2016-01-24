$(document).ready(function(){
  //See Options
  var speed = 500;              // fade Speed
  var autoSwitch = true;        // auto Slider Option
  var autoSwitchSpeed = 4000;   // Auto Slider Speed

  // Add initial active class
  $(".slide").first().addClass("active");

  // Hide all slides
  $(".slide").hide();

  // Show first slide
  $(".active").show();

  // Activate next button
  $("#next").on("click", function(){
    $(".active").removeClass("active").addClass("oldActive");
    if($(".oldActive").is(":last-child")){
      $(".slide").first().addClass("active");
    }else{
      $(".oldActive").next().addClass("active");
    }
    $(".oldActive").removeClass("oldActive");
    $(".slide").fadeOut(speed);
    $(".active").fadeIn(speed);
  });

  // Activate previous button
  $("#prev").on("click", function(){
    $(".active").removeClass("active").addClass("oldActive");
    if($(".oldActive").is(":first-child")){
      $(".slide").last().addClass("active");
    }else{
      $(".oldActive").prev().addClass("active");
    }
    $(".oldActive").removeClass("oldActive");
    $(".slide").fadeOut(speed);
    $(".active").fadeIn(speed);
  });

  // Set Auto Slider

  if(autoSwitch === true){
    setInterval(function(){
      $(".active").removeClass("active").addClass("oldActive");
      if($(".oldActive").is(":last-child")){
        $(".slide").first().addClass("active");
      }else{
        $(".oldActive").next().addClass("active");
      }
      $(".oldActive").removeClass("oldActive");
      $(".slide").fadeOut(speed); 
      $(".active").fadeIn(speed);
    },autoSwitchSpeed);
  }

  // Switch to next slide


});