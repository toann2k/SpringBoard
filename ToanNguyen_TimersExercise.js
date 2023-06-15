function countDown(countDownTimer)
{
    let timerVar = setInterval(function()
    {
        if(countDownTimer<=0)
        {
            clearInterval(timerVar);
            console.log('DONE!');
        }
        else 
        {
            console.log(countDownTimer);
            --countDownTimer;
        }
    }
     
    , 1000)
}




function randomGame()
{

    let randomGenerateNum;
    let timesIncrement = 0;
    let timerVar = setInterval(function()
    {
        randomGenerateNum = Math.random();
        timesIncrement++;
        if(randomGenerateNum >.75)
        {
            clearInterval(timerVar);
            console.log("It took " + timesIncrement + " times");
        }
    }, 1000
    )
   
}

randomGame();

