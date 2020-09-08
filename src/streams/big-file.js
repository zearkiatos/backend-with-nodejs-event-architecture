const fs = require('fs');
const file = fs.createWriteStream('./big');

for(let i=0; i<=1e6;i++) {
    file.write('Bacon ipsum dolor amet boudin capicola pork loin, kevin pig chicken pork belly bresaola jowl filet mignon ham hock cow frankfurter. Turducken beef corned beef, capicola rump alcatra tri-tip drumstick meatloaf frankfurter strip steak shoulder pork chicken chuck. Prosciutto meatball corned beef shank beef ribs shankle. Swine short loin flank meatloaf, jerky leberkas chicken turkey chislic short ribs. Pork loin bacon beef, swine meatball doner turkey meatloaf landjaeger prosciutto short loin. Alcatra pig shank biltong pancetta, tongue jerky chuck capicola spare ribs prosciutto turducken. Filet mignon jerky fatback ribeye turducken beef meatloaf porchetta tri-tip. Prosciutto meatball capicola sausage, biltong ball tip cow frankfurter pork pork loin. Jowl drumstick ribeye, landjaeger pancetta porchetta pork loin tenderloin tri-tip kevin beef corned beef venison chislic. Tenderloin chicken tongue swine pork belly shank pancetta. Filet mignon tail ribeye, chislic leberkas salami burgdoggen chuck kevin corned beef pastrami. Ribeye alcatra pancetta cupim, leberkas ham hock brisket meatball pork ham pastrami.')
}

file.end();