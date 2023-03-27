
function Dice(side){
    let result=Math.floor(Math.random()*side)+1;
        return result;
    }

function startGame(){
    let power=0;
    let magic=0;
    let cure=false;
    let goblin=false;
    let quest1=false;
    let potion=false;
    let goodEnding=false;
    let dark=true;
    let purpose=false;
    let lantern=false;
    let lockpick=false;
    let gold=0;
    let earn;

    let char=prompt("What is your name brave adventurer ? ");

    let begin="Hello "+char+".";
    begin+=" Someone has turned the King into stone. Your quest is to remove the curse !!!";
    alert(begin)

    while (cure===false){

        let Choice=prompt("Where will you go Adventurer ?                                                              A)  Castle                    B)  The Old Hags Hut    C)  The Market               D)  The Wild Forest     E)  Fortress of Doom     F)  Quest Board"  );
        Choice=Choice.toLowerCase();

        if (Choice==="a"){

            if (potion===true){
                alert("On your way to the throne room you are ambushed by 3 troll mages...");

                if (power>=8 && magic>=3){
                    alert("But you have trained your body and mind strong enough to defeat them. You continue on with your quest. ");
                    cure=true;
                    goodEnding=true;
                }

                else if (power>=8 && magic<3){
                    alert("They blast you with a mind control spell. Your mind is not strong enough to resist")
                    alert("You are defeated and your adventure ends here. (GAME OVER)")
                    break
                }

                else if (power<8 && magic>=3){
                    alert("They blast you with a mind control spell. You resisted their spell")
                    alert("but your body is not strong enough to withstand their physical attacks.");
                    alert("You are defeated and your adventure ends here. (GAME OVER)")
                    break
                }

                else{
                    alert("You have not trained your body and mind enough to defeat them.");
                    alert("You are defeated and your adventure ends here. (GAME OVER)")
                    break
                }
            
            }

            else if (purpose===true && lantern===true){

                alert("You go back to the castle to find a lockpick ");
                alert("You were unsucessful but someone mentioned a hidden location 'The Thieves Den' next to 'The Quest Board'")
                alert("You might find a lockpick there")
            }
            
            else{
                alert("You go back to the castle with empty hands.");
            }

        }
        
        else if (Choice==="b"){

            if (quest1===true && goblin===true){   
                magic+=1;
                alert("You visit the old hag and she teaches you some magic. You mind gets stronger every visit");
            }
            
            else if (quest1===false && goblin===true){
                let speech=("As you approach the hut, you see an old hag smiling at you.");
                speech+=(" she thanks you for saving her pet goblin and is willing to help your quest.");
                speech+=(" she tells you that there is a magical potion in the Fortress of Doom. ");
                speech+=(" It will cure the King. She provides you with a map and the location.");
                speech+=(" Before you leave she informs you of the fortress password 'DARKSTONE'");
                alert(speech);
                quest1=true;
            }

            else{
                alert("As you approach the old hag's hut, an army of crows chase you away");
            }

        }

        else if (Choice==="c"){

            if (purpose===false){
                alert("You arrive at the Market. After some window shopping you leave quickly.");
            }

            else if (purpose===true && dark===true && gold<5 && lantern===false ){

                alert("You search for a lantern in the Market and you find one for 5 gold. You cannot afford it")
            }

            else if (purpose===true && dark===true && gold>=5 && lantern===false  ){

                alert("You search for a lantern in the Market and you find one for 5 gold. You purchase the lantern")
                dark=false;
                purpose=false;
                lantern=true;
            }

            else if (purpose===true && lantern===true){

                alert("You search for a lockpick in the Market but you cannot find one")
            }

        }

        else if  (Choice==="d")

        { if ( lantern===false){
            alert("The forest is too dark to explore. You will need a lantern to go further.")
            purpose=true; 
        }

         else {

                if (goblin===false){
                    alert("You enter the Wild Forest... ")
                    let help=prompt("You see a goblin trapped in some bramble do you help (YES OR NO)")
                    help=help.toLowerCase();

                    if (help==="yes")
                    {
                        alert("You help the goblin, the goblin runs back home.");
                        goblin=true
                    }
                }
                
                else{   
                    power+=1;
                    alert("You go hunting in the woods. Your body grows stronger on every hunt.");
                }
            }     

        }

        else if  (Choice==="e"){

            if (quest1===true && potion===false){
                alert("You stand at the entrance of the Fortress of Doom.")
                let answer=prompt("You hear a booming voice.. 'Halt, what is the password ?")
                answer=answer.toLowerCase();

                if (answer==="darkstone"){

                    alert("They allow you into the Fortress...")

                    if (lockpick===false){
                        alert("You locate the magical potion but it is in a locked chest. You will need a lock pick")
                        purpose=true;
                    }

                    else{
                        alert("You quickly locate the magical potion and unlock the chest and grab the potion.")
                        potion=true
                    }

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
            
            else{
                alert("You see some bloodthirsty trolls guarding the fortress, you better turn back !!");
            }

        }

        else if (Choice==="f"){

            if (purpose===false){
                alert("You arrive at the Quest Board but with no purpose, you depart quickly.");
            }

            else if (purpose===true ){

                earn=Dice(3)
                alert("You go on a side-quest and gain "+earn+" gold. Your body grows stronger on every side-quest ")
                gold+=earn;
                power+=1
            }

        }

        else if (Choice==="g"){

            alert("You find The Thieves Den")

            if (purpose===true && lantern===true && gold<10){
                alert("You search for a lockpick and soon enough a shadowy figure offers you one for 10 gold. You cannot afford it");
            }
            
            else if(purpose===true && lantern===true && gold>=10){

            alert("You search for a lockpick and soon enough a shadowy figure offers you one for 10 gold.. You purchase the lockpick")
            purpose=false;
            lockpick=true;
            }

            else {
            
                alert(" You here a voice in the dark 'Nothing to see here, go away !!'")
            }

        }


        else{
            alert("Invalid Choice")
        }

    }

    if (goodEnding===true){
        let ending=("You pour the magical potion over the King's stone body.");
        ending+=(" It has worked, the curse is removed.");
        ending+=(" You are rewarded with 10,000 gold !!! ");
        ending+= ("           GAME OVER                   ");
        alert(ending);
        gold+=10000;
    }

    else{
    alert("Good Bye !!");

    }
}