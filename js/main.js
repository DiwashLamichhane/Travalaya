//Owl corousel
$(document).ready(function(){
    $(".categories").owlCarousel({
        margin:20,
        autoWidth:true,
        slideBy:2
    });
  });


//for arrow visibility
var width = document.getElementsByClassName("categories-list")[0].offsetWidth
var items = document.querySelectorAll('.category').length * 200

if (width<items){
    var arrow = document.getElementsByClassName("categories-heading")[0]
    arrow.innerHTML += `<i class="fas fa-chevron-right"></i>`
}