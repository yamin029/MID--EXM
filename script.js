/* Add your script here */
var a = ["education", "technology", "mathematics", "science", "engineering", "arithmetic"]
$('#btn-play').click(function(){
    alert("Let's Play")
    var word=  a[$('#pick-number').val()]
    console.log(word)
    var i;
    console.log(word.length)
    for (i = 0; i < word.length; i++) {
        
        if(word[i] == 'a' || word[i] == 'e'|| word[i] == 'i'|| word[i] == 'o'|| word[i] == 'u')
        {
            console.log(word[i])
            let div= $('<div  style="border-bottom: 1px solid red; margin:15px " class="res"></div>')
            $('.answer').append(div)
        }
        else{
            let div= $('<div  style="border-bottom: 1px solid black; margin:15px " class="res"></div>')
            $('.answer').append(div)
        }
        
        //console.log(gues)
        
    }
    var guess = 1; 
    for(i = 0; i < word.length; i++){
        $('.btn-go').click(function(){
            var gues = $('#guess-al').val()
            if( gues == word[i])
            {
                $('.answer').next().text(word[i])

            }
        })
        


    }
    



    
})