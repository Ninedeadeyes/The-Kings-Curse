
let cure=false;
let goblin=false;
let quest1=false;
let potion=false;
let goodEnding=false;

let char=prompt("What is your name brave adventurer ? ");

let begin="hello "+char+".";
begin+=" Someone has turned the King into stone. Your Quest is to remove the curse !!!";
alert(begin)

while (cure===false)
{

    let Choice=prompt("Where do you go ? A) Castle  B) The Old Hags Hut                                  C) The Wild Forest  D) Fortress of Doom" );
    Choice=Choice.toLowerCase();

    if (Choice==="a")
    {

        if (potion===true)
        {
            cure=true;
            goodEnding=true;
        }
        
        else
        {
            alert("You go back to the castle with empty hands.");
        }

    }
    
    else if (Choice==="b")
    {

        if (quest1===true && goblin===true)
        {
            alert("The old hag thank you for your help and wish you the best in your quest.");
        }
        
        else if (quest1===false && goblin===true)
        {
            let speech=("As you approach the old hag's hut, you see an old hag smiling at you. ");
            speech+=("she thank you for saving her pet goblin and is willing to help your quest.");
            speech+=("she tells you that there is a magical potion in the Fortress of Doom. ");
            speech+=("It will cure the King. She provides you with a map and the location.");
            speech+=("Before you leave she informs you of the fortress password 'DARKSTONE'");
            alert(speech);
            quest1=true;

        }

        else
        {
            alert("As you approach the old hag's hut, an army of crows chase you away");
        }

    }

    else if  (Choice==="c")

    {

        if (goblin===false)
        {   alert("You enter the Wild Forest... ")
            let help=prompt("You see a goblin trapped in some bramble do you help (YES OR NO)")
            help=help.toLowerCase();

            if (help==="yes")
            {
                alert("You help the goblin, the goblin runs back home.");
                goblin=true
            }
            
        }
        
        else
        {
            alert("You see nothing of importance here, maybe you will go hunting later");
        }

    }

    else if  (Choice==="d")
    {

        if (quest1===true && potion===false)
        {
            alert("You stand at the entrance of the Fortress of Doom.")
            let answer=prompt("You hear a booming voice.. 'Halt, what is the password ?")
            answer=answer.toLowerCase();

            if (answer==="darkstone")
            {
                alert("They allow you into the Fortress and you quickly locate the magical potion.")
                potion=true

            }
            else
            {
                let gameOver=(" INCORRECT !! NOW FEAR MY POWER !! ")
                gameOver+=("A great fireball consumes your body and ends your adventure")
                gameOver+=("                   GAME OVER                   ")
                alert(gameOver);
                break

            }

        }
        
        else
        {
            alert("You arrive at the Fortress of Doom but with no purpose, you quickly leave.");
       
        }

    }

    else
    {
        alert("Invalid Choice")
    }


}

if (goodEnding===true)
{
    let ending=("You pour the magical potion over the King's stone body.");
    ending+=("It has worked, the curse is removed.");
    ending+=("You are rewarded with 10,000 gold !!! ");
    ending+= ("           GAME OVER                   ");
    alert(ending);
}

else
{
   alert("Good Bye !!");

}