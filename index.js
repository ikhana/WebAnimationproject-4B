$(document).ready(function(){
    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img')
    let light= true;
    const cars = ['assets/Img_05.png','assets/Img_06.png']

    $(document).on('keypress',function(e){
        if(e.which == 13)
        {
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspension');
            console.log(e.which)
        };
        

    })
    $(document).on('keypress',function(e){
        if(e.which == 87){
            if(light){
                light=false;
                $img.atrr('src',cars[0])
            }
            else{
                light=true;
                $img.atrr('src',cars[1])
            }

        }
       
        
        

    })
    

})