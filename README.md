# EntertainmentQ
react native app asks you many question about music , film , tv ..etc.

using 

-Expo.
-redux.
-Axios.


the app consists of 4 Screens

-first screen (Splash screen ) :

contains logon and description about the app and Button to get started .

- Second screen (Home screen):

consists of 8 questions categories about books , film , tv , sports , computers , science , games ..

Urls i used to retrieve thw questions from the api:


-export const books           ='https://opentdb.com/api.php?amount=20&category=10';

-export const music           ='https://opentdb.com/api.php?amount=20&category=12';

-export const film            ='https://opentdb.com/api.php?amount=20&category=11';

-export const nature          ='https://opentdb.com/api.php?amount=20&category=17';

-export const tv              ='https://opentdb.com/api.php?amount=20&category=14';

-export const computers       ='https://opentdb.com/api.php?amount=20&category=18';

-export const videoGames      ='https://opentdb.com/api.php?amount=20&category=15';

-export const sport           ='https://opentdb.com/api.php?amount=10&category=21';



-third screen (Questions screen) : 

contains the timer with 59 s  and  question screens that i add in redux and i show it in FlatList

- Forth screen ( result screen ) : contains  the result of the correct answers 



