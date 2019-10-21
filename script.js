/* Add your script here */
var a = ["education", "technology", "mathematics", "science", "engineering", "arithmetic"]
var word
$('.btn-play').click(function(){
    //alert("Let's Play")
    word=  a[$('#number-input').val()]
    console.log(word)
    
    console.log(word.length)
    for (i = 0; i < word.length; i++) {
        //console.log("loop")
        
        if(word[i] == 'a' || word[i] == 'e'|| word[i] == 'i'|| word[i] == 'o'|| word[i] == 'u')
        {
            //console.log(word[i])
            var div= $('<span class="border "><p class="pl-2 pr-2 pb-1 pt-1" style="border-bottom: 1px dotted red"></p></span>')
            $('.dash').append(div)
            //console.log(div)
        }
        else{
            //console.log(word[i])
            let div= $('<span class="border "><p class="pl-2 pr-2 pb-1 pt-1" style="border-bottom: 1px solid black"></p></span>')
            $('.dash').append(div)
        }
        
        //console.log(gues)
        
    }
    
})
var guess = 0; 
var sp = $('.dash')
$('#number-letter').blur(function(){
    console.log($(this).val())
    var gues = $(this).val()
    if( gues == word[guess])
        {
            if(guess==0)
            {
            console.log("match!")
            var z =sp.children(":first").children("p").text(gues)
            guess = guess + 1
            sp = sp.children(":first")
            }
            else{
                console.log(guess)
               var y = sp.next().children("p").text(gues)
                guess = guess + 1
                sp = sp.next()
            }
            $('.input-of-letter').children(":first").children("label").text("")
        }
    else{
        $('.input-of-letter').children(":first").children("label").text("sorry you are worng \n try again")

    }
    $('#number-letter').val(null)
})
    



    
