$.ajax({
    url: 'assets/js/json/discografia.json',
    dataType: 'json',
    success: function(data) {
        $.each(data.albums, function(index, album) {
            var albumHTML = '<div class="item">' +
                                '<a href="disco.html">' +
                                    '<img src="' + album.imagen_portada + '" alt="' + album.titulo + '">' +
                                    '<h3 class="pt-3">' + album.titulo + '</h3>' +
                                '</a>' +
                            '</div>';
            $('.owl-carousel').prepend(albumHTML);
        });
        $('.owl-carousel').owlCarousel({
            margin: 20,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });
    },
    error: function() {
        console.error('Error loading JSON data');
    }
});

$(document).ready(function(){

});




