# action-grid-slider
A common dilemma that often arises is that you do not have enough space available to dedicate to all of your specific links. In such a situation, you can easily implement (1) a grid based container and (2) a slider to handle overflow sections. Combined, this will create a contemporary action grid slider that presents all availble links to an end user.

In this tutorial, [Solodev](https://www.solodev.com/) shows how to implement a simple but effective action grid slider.

## Tutorials

For detailed instructions, view Solodev's [Creating an Action Grid Slider on your Website](https://www.solodev.com/blog/web-design/creating-an-action-grid-slider-on-your-website.stml) article.

## Demo

Try out a working example on [JSFiddle](https://jsfiddle.net/solodev/47k09tsp/).

## HTML

The action grid slider contains the following basic markup.
```
<div class="text-right ct-box-slider__arrows clearfix">
  <button id="ct-js-box-slider--next" type="button" class="pull-right slick-arrow"><img alt="Previous" src="https://www.solodev.com/assets/action-grid-slider/arrow-next.jpg" alt="Arrow Next"></button>
   <button id="ct-js-box-slider--prev" type="button" class="pull-right slick-arrow"><img alt="Next" src="https://www.solodev.com/assets/action-grid-slider/arrow-prev.jpg" alt="Arrow Prev"></button>
</div>

<div class="ct-box-slider ct-js-box-slider">
    
  <div class="item">
    <div class="container-fluid">
    <div class="row">
      <div class="col-xs-6 col-sm-4">
        <div onclick="location.href='#'" class="ct-box">
          <div class="inner" role="presentation"><i class="fa fa-calendar"></i><span>View Upcoming Events</span></div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-4">
        <div onclick="location.href='#'" class="ct-box">
          <div class="inner" role="presentation"><i class="fa fa-users"></i><span>Connect with Others</span></div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-4">
        <div onclick="location.href='#'" class="ct-box">
          <div class="inner" role="presentation"><i class="fa fa-ticket"></i><span>Purchase Tickets</span></div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-4">
        <div onclick="location.href='#'" class="ct-box">
          <div class="inner" role="presentation"><i class="fa fa-plane"></i><span>Book a Flight</span></div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-4">
        <div onclick="location.href='#'" class="ct-box">
          <div class="inner" role="presentation"><i class="fa fa-cutlery"></i><span>Dining Reservations</span></div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-4">
        <div onclick="location.href='#'" class="ct-box">
          <div class="inner" role="presentation"><i class="fa fa-ship"></i><span>Book a Cruise</span></div>
        </div>
      </div>
    </div>
    </div>
  </div>
  
  <div class="item">
    <div class="container-fluid">
    <div class="row">
      <div class="col-xs-6 col-sm-4">
        <div onclick="location.href='#'" class="ct-box">
          <div class="inner" role="presentation"><i class="fa fa-graduation-cap"></i><span>Find Tutorials</span></div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-4">
        <div onclick="location.href='#'" class="ct-box">
          <div class="inner" role="presentation"><i class="fa fa-free-code-camp"></i><span>Enroll in Code Camp</span></div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-4">
        <div onclick="location.href='#'" class="ct-box">
          <div class="inner" role="presentation"><i class="fa fa-file-code-o"></i><span>Source Code Descriptions</span></div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-4">
        <div onclick="location.href='#'" class="ct-box">
          <div class="inner" role="presentation"><i class="fa fa-bar-chart"></i><span>Learn About Analytics</span></div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-4">
        <div onclick="location.href='#'" class="ct-box">
          <div class="inner" role="presentation"><i class="fa fa-universal-access"></i><span>Learn About Accessibility</span></div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-4">
        <div onclick="location.href='#'" class="ct-box">
          <div class="inner" role="presentation"><i class="fa fa-wpforms"></i><span>Contact Webmaster</span></div>
        </div>
      </div>
    </div>
    </div>
  </div>
    
</div>
```
## CSS

All required CSS is in the file action-grid-slider.css

## JavaScript

This tutorial utilizes the JavaScript below.
```
$(document).ready(function(){
  $('.ct-box-slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  });
  $('#ct-js-box-slider--prev').on('click', function() {
    $('.ct-js-box-slider').slick('slickPrev');
  });
  $('#ct-js-box-slider--next').on('click', function() {
    $('.ct-js-box-slider').slick('slickNext');
  });
});
```

## External Includes

This tutorial utilizes the following third party resources.

```
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" rel="stylesheet">
<link href="action-grid-slider.css" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js"></script>
<script src="action-grid-slider.js"></script>
```

