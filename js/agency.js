
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    function init() {

        var options = {
            componentRestrictions: { country: "in"}
        };
        var input = document.getElementById('locationTextField');
        var autocomplete = new google.maps.places.Autocomplete(input, options);

        google.maps.event.addListener(autocomplete, 'place_changed', function() {
            var place = autocomplete.getPlace();
            var planAddress = document.getElementById('order-location');
            planAddress.value = place.formatted_address;
        });

        var input2 = document.getElementById('locationTextField2');
        var autocomplete2 = new google.maps.places.Autocomplete(input2, options);
        google.maps.event.addListener(autocomplete2, 'place_changed', function() {
            var place = autocomplete2.getPlace();
            var planAddress = document.getElementById('supplier-location');
            planAddress.value = place.formatted_address;
        });

        var input3 = document.getElementById('locationTextField3');
        var autocomplete3 = new google.maps.places.Autocomplete(input3, options);
        google.maps.event.addListener(autocomplete3, 'place_changed', function() {
            var place = autocomplete3.getPlace();
            var planAddress = document.getElementById('tmt-location');
            planAddress.value = place.formatted_address;
        });
//
//        var input3 = document.getElementById('owner_locality');
//        var autocomplete3 = new google.maps.places.Autocomplete(input3, options);
//        google.maps.event.addListener(autocomplete3, 'place_changed', function() {
//            var place = autocomplete3.getPlace();
//            var planAddress = document.getElementById('locality_data');
//            planAddress.value = place.formatted_address;
//        });

    };


//    var defaultBounds = new google.maps.LatLngBounds(
//      new google.maps.LatLng(-33.8902, 151.1759),
//      new google.maps.LatLng(-33.8474, 151.2631));
//
//    var input = document.getElementById('searchTextField');
//    var options = {
//      bounds: defaultBounds,
//      types: ['establishment']
//    };
//
//    autocomplete = new google.maps.places.Autocomplete(input, options);

    google.maps.event.addDomListener(window, 'load', init);
});











// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});



//
//<script>
//  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
//
//  ga('create', 'UA-72149556-1', 'auto');
//  ga('send', 'pageview');
//
//</script>