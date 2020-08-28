using Microsoft.VisualBasic;
using System;
using System.Reflection.Metadata.Ecma335;

namespace Adventure_Game
{
    class Program
    {
        static void Main(string[] args)
        {   
            String Name = "";
            String Choice = "";
            String Help = "";
            String Answer = "";
            bool cure = false;
            bool goblin = false;
            bool quest1 = false;
            bool potion = false;
            

            Console.WriteLine("                                    The King's Curse                                   ");
            Console.WriteLine("What is your name brave adventurer ? ");
            Name = Console.ReadLine();
            Console.WriteLine("Hello "+ Name + "!" );
            Console.WriteLine("Someone has turned the King into stone. Your Quest is to remove the curse !!! ");

            while (cure== false)
            {
             Console.WriteLine("                                                                     ");
             Console.WriteLine("Where do you want to go ? (A,B,C or D)");
             Console.WriteLine("A) Castle  B) The Old Hags Hut  C) The Wild Forest  D) Fortress of Doom");
             Choice = Console.ReadLine();
             Choice=Choice.ToLower();

                if (Choice == "a")
                {
                    if (potion == true)
                    {
                        cure = true;
                    
                    
                    }
                   
                    else
                    {
                        Console.WriteLine("You go back to the castle with empty hands. ");

                    }



                }

                if (Choice == "b" )
                {
                    if (quest1 == true && goblin == true) 
                    {
                        Console.WriteLine("The old hag thank you for your help and wish you the best in your quest. ");

                    }

                   

                    
                    if (quest1 == false && goblin == true )
                    {
                       Console.WriteLine("As you approach the old hag's hut, you see an old hag smiling at you. ");
                       Console.WriteLine("she thank you for saving her pet goblin and is willing to help your quest. ");
                       Console.WriteLine("she tells you that there is a magical potion in the Fortress of Doom. ");
                       Console.WriteLine("It will cure the King. She provides you with a map and the location.  ");
                       Console.WriteLine("Before you leave she informs you of the fortress password 'DARKSTONE'. ");
                        quest1 = true;
                    }

                    if (quest1 == false && goblin == false)
                    {
                     Console.WriteLine("As you approach the old hag's hut, an army of crows chase you away. ");

                    }

                  }

                if (Choice == "c")

                {
                    
                    Console.WriteLine("You enter the wild forest... ");

                    if (goblin == false)
                    {
                        Console.WriteLine("You see a goblin trapped in some bramble do you help ? (YES OR NO)");
                        Help = Console.ReadLine();
                        Help = Help.ToLower();

                        if (Help == "yes")
                        {
                            Console.WriteLine("You help the goblin, the goblins runs back home");

                            goblin = true;                          
                        }
                    }

                    else
                    {
                      Console.WriteLine("You see nothing of importance here, maybe you will go hunting later");
                    }

                }

                if (Choice == "d")
                {

                    if (quest1 == true && potion== false )
                    {

                        while (potion == false)
                        {

                            Console.WriteLine("You stand at the entrance of the Fortress of Doom.");
                            Console.WriteLine("You hear a booming voice.. 'Halt, what is the password ? ");
                            Answer = Console.ReadLine();
                            Answer = Answer.ToLower();

                            if (Answer == "darkstone")
                            {
                                Console.WriteLine("They allow you into the Fortress and you quickly locate the magical potion. ");
                                potion = true;
                            }

                            else 

                            {
                            Console.WriteLine(" INCORRECT !! NOW FEAR MY POWER !! ");
                            Console.WriteLine(" A great fireball consumes your body and ends your adventure   ");
                            Console.WriteLine("                   GAME OVER                   ");
                            Console.WriteLine("Press any button to exit the game ");
                            Console.ReadLine();
                            System.Environment.Exit(0);
                            }

                        }
                            
                                      
                    }

                    else
                    {
                        Console.WriteLine("You arrive at the Fortress of Doom but with no purpose, you quickly leave. ");
                    }
                }

            }

            Console.WriteLine("You pour the magical potion over the King's stone body.  ");
            Console.WriteLine("It has worked, the curse is removed.");
            Console.WriteLine("You are rewarded with 10,000 gold !!! ");
            Console.WriteLine("                                                              ");
            Console.WriteLine("                                                               ");
            Console.WriteLine("                             GAME OVER                        ");
            Console.WriteLine("                                                              ");
            Console.WriteLine("                                                               ");
            Console.WriteLine("Press any button to exit the game ");
            Console.ReadLine();
        }
    }
}
