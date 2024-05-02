const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

// Add event listener here
closedFace.addEventListener('click', function(){
    closedFace.style.display ="none";
    openFace.style.display ="block";
    
});

openFace.addEventListener('click', function(){
    openFace.style.display ="none";
    closedFace.style.display ="block";
    
});


//jQuery
$(document).ready(function(){
    $(".closed").click(function(){
        $('.open').show();
        $('.closed').hide();
    });

    $(".open").click(function(){
        $(".closed").show();
        $(".open").hide();
    });
});
