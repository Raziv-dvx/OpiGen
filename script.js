let isRegistered = false; // Track registration status
let contributors = {}; // Object to track contributions

const opinions = [
    "Football is not just a game, it's a way of life.",
    "The best offense is a good defense.",
    "Tactics win games, skills win fans.",
    "Every match is a chance to make history.",
    // Add more opinions to reach a total of 1000
    "The goalkeeper is the most important player on the pitch.",
    "Winning isn't everything; it's the only thing.",
    "Draws are just as important as wins.",
    "Players should be more appreciated than managers.",
    "International football is overrated.",
    "The beauty of football lies in its imperfections.",
    "Money ruins the essence of the game.",
    "Penalty shootouts are a poor way to decide a match.",
    "VAR has done more harm than good for the game.",
    "The offside rule is too complicated for casual fans.",
    "Youth academies should focus more on education than football.",
    "Every team has a chance to win the league.",
    "The World Cup should be held every two years.",
    "Footballers should be more vocal about social issues.",
    "Supporters should respect the players' personal lives.",
    "The season is too long; players need more breaks.",
    "Friendlies are a waste of time.",
    "Fan culture can be toxic at times.",
    "Champions League is overrated compared to domestic leagues.",
    "Celebration rituals can be cringeworthy.",
    "The Ballon d'Or is too subjective.",
    "Women's football deserves equal pay and attention.",
    "Training camps are not as beneficial as advertised.",
    "Sponsorships can overshadow the spirit of the game.",
    "Excessive diving is ruining football.",
    "The use of social media by players is a double-edged sword.",
    "Loyalty in football is a myth.",
    "Players should take responsibility for their actions off the pitch.",
    "Retired players should not criticize current professionals.",
    "Hooliganism is a misunderstood part of fan culture.",
    "Merchandising often exploits fan loyalty.",
    "The Premier League is not the best league in the world.",
    "Grassroots football is the foundation of the sport.",
    "Player transfers are often driven by agents rather than talent.",
    "Football is becoming too commercialized.",
    "Players should be allowed to express themselves more on the pitch.",
    "The media has too much influence on player reputation.",
    "More emphasis should be placed on mental health in football.",
    "Football clubs should invest more in community programs.",
    "The away goal rule should be abolished.",
    "Referees need better training and support.",
    "The passion of fans can be more important than the game itself.",
    "Every player should be able to play multiple positions.",
    "Formations are overrated; adaptability is key.",
    "Football is a sport for everyone, regardless of background.",
    "There should be stricter rules against racism in football.",
    "The emphasis on physicality is overshadowing skill.",
    "Every player should be a role model.",
    "Football is often too focused on winning at all costs.",
    "The emotional side of the game is often ignored.",
    "Players should have more control over their careers.",
    "The transfer market is driven by hype rather than skill.",
    "The focus on stats can take away from the beauty of the game.",
    "Fan loyalty should not blind supporters to a team's flaws.",
    "The relationship between players and fans is crucial.",
    "Technology should enhance the game, not dominate it.",
    "Players should be able to express their opinions freely.",
    "The glamour of football often overshadows its grassroots.",
    "Football should focus more on entertainment than competition.",
    "Matchday experiences should prioritize fans over commercialism.",
    "Not all managers are good communicators.",
    "The rivalry between clubs can be toxic.",
    "Football clubs should prioritize youth development.",
    "The role of the captain is often underestimated.",
    "There's too much focus on individual awards.",
    "Football tactics should evolve with the times.",
    "Long-term planning is more important than immediate success.",
    "Football should be more accessible to everyone.",
    "More focus should be placed on injury prevention.",
    "The pressure on young players can be damaging.",
    "Football should embrace its diverse cultures more.",
    "The beauty of football is in its unpredictability.",
    "Players should be allowed to play without fear of injury.",
    "The importance of teamwork is often overshadowed by individualism.",
    "Every match tells a story that goes beyond the scoreline.",
    "Football rivalries can promote unhealthy behavior.",
    "The role of fans in shaping clubs is invaluable.",
    "Player loyalty should be recognized and celebrated.",
    "Clubs should focus more on sustainability.",
    "More transparency is needed in football finances.",
    "The importance of mental toughness in football is underestimated.",
    "Football is more than just tactics; it's about heart.",
    "Every league has its unique charm and merits.",
    "Players should be held accountable for their actions on the field.",
    "Football history should be preserved and celebrated.",
    "Fan ownership models can benefit clubs.",
    "More women should be involved in football management.",
    "Football can be a powerful tool for social change.",
    "The focus on physical fitness can neglect technical skills.",
    "Football should promote kindness and respect among players.",
    "The camaraderie among players is often overlooked.",
    "Football should embrace its history while looking to the future."
        "If goalkeepers were strikers, they'd score more goals.",
    "The offside rule was invented to confuse fans.",
    "Football is just chess with sweaty players.",
    "Red cards should come with a warning: 'Don't try this at home.'",
    "The best coach is the one who knows how to make snacks at halftime.",
    "Every player should have a pet mascot on the pitch.",
    "Football boots should come with built-in GPS.",
    "Corner flags are just goalposts with commitment issues.",
    "The real reason for VAR is to give referees more screen time.",
    "Players should be required to do a silly dance after scoring.",
    "The trophy ceremony should include a talent show.",
    "A match should have a 5-minute dance-off to settle ties.",
    "If only players celebrated goals with interpretive dance.",
    "Every player should wear a funny hat during warm-ups.",
    "The best formation is one that includes a dancing goalkeeper.",
    "If footballers can dive, they should get Oscars.",
    "The best part of a match is the halftime snacks.",
    "Goal celebrations should be judged like figure skating.",
    "The ball is just a round piece of drama.",
    "If players were fruit, they’d all be bananas for diving.",
    "Every match should have a theme song performed live.",
    "More referees should have dramatic entrances.",
    "Football should have a rule against boring hairstyles.",
    "Red cards should come with a comedy skit instead of a suspension.",
    "Fans should be allowed to throw confetti when their team scores.",
    "The best defense is a good laugh.",
    "If football were a movie, it would definitely be a comedy.",
    "Every player should have a signature snack.",
    "Throw-ins should be replaced with frisbee tosses.",
    "Goalkeepers should wear capes; they’re superheroes in disguise.",
    "If a player misses a penalty, they should do karaoke.",
    "The best commentators are the ones who can make up stories.",
    "Football shirts should come with built-in air conditioning.",
    "The half-time show should always feature a pet parade.",
    "Stadiums should have snack bars in every section, not just at the entrance.",
    "Football should be played in slow motion for dramatic effect.",
    "More players should take up juggling for training.",
    "The trophy for the winning team should be a giant golden shoe.",
    "Every player should get a personalized entrance song.",
    "Referees should wear silly costumes to lighten the mood.",
    "The real MVP should be the ball, for putting up with everything.",
    "Every goal should be celebrated with confetti cannons.",
    "If the match ends in a draw, they should settle it with rock-paper-scissors.",
    "The best team bonding activity is a game of charades.",
    "All substitutions should be announced with fireworks.",
    "Players should wear wacky socks for good luck.",
    "More red cards should come with a comedy roast.",
    "Football matches should have a fashion show at halftime.",
    "Every goal should be followed by a short stand-up routine.",
    "Players should be required to wear silly masks during warm-ups.",
    "If footballers were superheroes, their powers would be dramatic dives.",
    "Every match should start with a dance battle.",
    "The halftime snack should be the main event.",
    "If a player scores a hat trick, they should be crowned 'King of Goals.'",
    "Goal celebrations should have a theme, like 80s disco.",
    "Every match should end with a group hug.",
    "Stadiums should provide bubble wrap for stressed-out fans.",
    "Football matches should have a cheerleading squad made of animals.",
    "If referees wore clown shoes, they'd be more entertaining.",
    "Every time a player falls, there should be a funny sound effect.",
    "If football were a flavor, it would be 'sweaty grass.'",
    "Players should have signature celebrations like in wrestling.",
    "The best commentary is when they forget players’ names.",
    "Each team should have a mascot that distracts the opposition.",
    "If players were animals, they’d be cats: always landing on their feet.",
    "Every penalty should come with a dramatic backstory.",
    "Football should be played on roller skates for added fun.",
    "The best players are the ones who can tell a good joke.",
    "More goal celebrations should include conga lines.",
    "Every match should end with a dance-off between players.",
    "The real winners are the fans who survive the match.",
    "Football should have a designated 'silly hat' day.",
    "If the ref makes a mistake, they should do a silly dance to apologize.",
    "Every player should be allowed to use a superpower once a match.",
    "Throw-ins should involve a dramatic monologue.",
    "Players should get bonus points for creative dives.",
    "If the match goes into penalties, it should be replaced with a trivia quiz.",
    "Every match should start with a round of applause for the snacks.",
    "Footballers should all take improv classes.",
    "The most valuable player should get a trophy made of cheese.",
    "Every team should have a secret handshake.",
    "If players were food, they'd all be spicy: hard to handle!",
    "Football should be played in slow motion for dramatic tension.",
    "The best goals are the ones that make you laugh.",
    "Every player should have a funny nickname displayed on the back of their shirt."
        "If footballers were vegetables, they'd all be green peas: they get kicked around a lot.",
    "The best striker is just a forward with a knack for being in the right place at the right time... or a good dive.",
    "Midfielders are just glorified traffic cones; they stand in the way and hope for the best.",
    "Goalkeepers are just outfield players with a really good excuse for not scoring.",
    "If players were pets, they'd be cats: always looking for the softest spot to lay.",
    "Every player should come with a warning label: 'Handle with care!'",
    "The only thing more dramatic than a player's dive is their hairstyle.",
    "If defenders were superheroes, their power would be ‘blocking everything!’",
    "Every footballer should be required to take a comedy class.",
    "If players were Wi-Fi passwords, they’d be too complicated for anyone to remember.",
    "The best players always have a backup plan… usually involving a fallback excuse.",
    "Every striker should get extra points for making the goalkeeper look silly.",
    "If a player misses a penalty, they should have to wear a clown nose for the rest of the match.",
    "Every footballer has that one friend who thinks they're better than they are.",
    "If players were desserts, they'd be ice cream: sweet but prone to melting under pressure.",
    "Every time a player flops, they should be given a participation trophy.",
    "Defenders are just midfielders who didn't get picked for the fun role.",
    "The best penalty takers are usually the ones who practice in their backyard.",
    "If players were animals, they'd all be chickens: they can’t handle the heat.",
    "Every player should have a theme song played during their entrance.",
    "If a player takes a bad free kick, they should be required to do a dance as punishment.",
    "Strikers who can't score are just goalkeepers in disguise.",
    "Every player should take a moment to thank their barber before a match.",
    "If players were superheroes, their biggest weakness would be penalties.",
    "Midfielders are just overqualified snack fetchers.",
    "If a player loses their shoe on the pitch, they should have to finish the match barefoot.",
    "Every player should have a side gig as a stand-up comedian.",
    "Defenders who score should get double the celebration.",
    "Every footballer has that one move they think is impressive but really isn’t.",
    "If players were movie stars, they’d all star in rom-coms: lots of drama and some awkward falls.",
    "Every player should practice their ‘I meant to do that’ face.",
    "If players were shoes, they'd all be flip-flops: casual and ready to go.",
    "Strikers should be required to wear sunglasses when scoring; they’re just that cool.",
    "If goalkeepers could talk, they'd have a lot of excuses for letting in goals.",
    "Every player has that one haircut that makes you question their life choices.",
    "If footballers had a dollar for every time they dove, they’d all be millionaires.",
    "Every time a player trips over their own feet, the referee should award a free kick for ‘clumsiness.’",
    "If a player can’t score, they should try out for the local dance troupe instead.",
    "Midfielders should be required to wear capes; they’re always saving the day.",
    "If players were fruits, they’d all be bananas: sometimes they just slip up.",
    "Every player should have to submit a blooper reel at the end of the season.",
    "If defenders could, they would build a wall taller than Trump’s.",
    "The best players always have a secret stash of snacks in their kit bags.",
    "If players were books, they’d all be bestsellers: full of drama and unexpected plot twists.",
    "Every striker who misses a sitter should have to sing a karaoke song.",
    "If players were superheroes, their greatest enemy would be the referee.",
    "Every player should wear a funny t-shirt under their kit for laughs.",
    "If defenders were cartoon characters, they’d be the ones always falling for silly traps.",
    "Every player should come with a built-in laugh track for their antics.",
    "If footballers were cars, they’d all be clunkers: great potential but lots of breakdowns.",
    "The best penalty takers are just lucky players with a bit of confidence.",
    "If players could have one wish, it would be to never do fitness training again.",
    "Every striker should be required to do a silly dance after scoring.",
    "If players were sports drinks, they’d all be ‘not-so-hydrating’ flavors.",
    "Every player has that one move that looks cool but never works.",
    "If goalkeepers were chefs, they’d always be the ones serving up ‘fail’ dishes.",
    "Every player should have to do a cartwheel before every match for good luck.",
    "If players were coffee, they’d all be decaf: a lot of hype, but no kick.",
    "Midfielders should be required to take a selfie with every goal they assist.",
    "Every player who scores an own goal should have to wear a funny hat for the rest of the match.",
    "If footballers were sandwiches, they'd all be ‘mystery meat’—you never know what you’re going to get.",
    "Every player should have a ‘bad luck charm’ they can blame for missed opportunities.",
    "If defenders could talk, they’d only say, ‘Not in my house!’",
    "Every time a player fakes an injury, they should have to do the chicken dance.",
    "If players were snacks, they’d all be potato chips: sometimes salty, often crunched.",
    "Every striker should have to wear a superhero cape while shooting penalties.",
    "If players could have any superpower, it would be ‘ultimate diving ability.’",
    "Every footballer should have their own Instagram filter for when they score.",
    "If defenders were animals, they’d be bulldogs: they just don’t let go.",
    "Every player should do a dramatic reading of their worst moments on the pitch.",
    "If players were emojis, they’d all be the facepalm emoji after missing a goal.",
    "Every player should have to perform a silly dance whenever they get substituted."
    "Cristiano Ronaldo is just a walking highlight reel looking for an audience.",
    "Lionel Messi could probably score a goal in his sleep—just ask his pillow.",
    "Neymar's dives should be sponsored by a swimming pool company.",
    "If Sergio Ramos was a cartoon character, he'd be the Road Runner: always escaping red cards.",
    "Harry Kane is just a goal machine on low battery mode.",
    "If Mohamed Salah's hair could talk, it would probably have a better career than most players.",
    "Gareth Bale should get bonus points for being a professional golfer and footballer.",
    "Zlatan Ibrahimović doesn't just play football; he has a personal vendetta against the laws of physics.",
    "Paul Pogba's haircuts should come with a warning: 'Don’t try this at home.'",
    "If Raheem Sterling were a flavor, he’d be 'Spicy Jalapeño': always bringing the heat.",
    "Marcus Rashford's philanthropy is great, but have you tried his cooking skills?",
    "If Virgil van Dijk were a fruit, he'd be a pineapple: tough on the outside, sweet on the inside.",
    "Kylian Mbappé is just a time traveler who forgot to go back to 2018.",
    "When Lionel Messi dribbles, it's like watching a magician pull a rabbit out of a hat.",
    "If Cristiano Ronaldo were a smartphone, he'd have every app for fitness and selfies.",
    "Neymar's stepovers should be classified as an Olympic sport.",
    "If David Beckham’s eyebrows could score, they’d be top of the league.",
    "If Lionel Messi played hide and seek, he’d always win without even trying.",
    "Zlatan Ibrahimović should be the next superhero in a Marvel movie: 'The Zlatan Chronicles.'",
    "If Sergio Ramos had a dime for every time he got a red card, he'd have his own bank.",
    "If Eden Hazard were a weather report, he'd be 'mostly sunny with a chance of brilliance.'",
    "Paul Pogba's celebrations could use their own soundtrack; they’re always a show!",
    "If Kylian Mbappé were a car, he’d be a Ferrari: fast and always in demand.",
    "Harry Kane should open a bakery because he’s always on target.",
    "If Mohamed Salah were a snack, he’d be an energy bar: always ready to go.",
    "Gareth Bale has a second career waiting for him in golf; he might even be better.",
    "If Lionel Messi were a magician, his signature trick would be making defenders disappear.",
    "Neymar's hairstyles could probably hold a fashion week all on their own.",
    "If Cristiano Ronaldo were a pizza, he'd definitely be a supreme: topping everything!",
    "Virgil van Dijk should be a bouncer; no one’s getting past him!",
    "If Raheem Sterling were a meme, he’d be the one making all of us laugh.",
    "Zlatan Ibrahimović doesn’t need a referee; he makes the rules.",
    "If Eden Hazard were a drink, he'd be an energy drink: always refreshing.",
    "Harry Kane could sell out arenas if he decided to take up stand-up comedy.",
    "If Lionel Messi were a superhero, his power would be ‘Gravity Defiance.’",
    "Paul Pogba’s passes have more flair than most runway shows.",
    "If Neymar were a dance move, he’d be the 'Cha-Cha Slide': everyone wants to join in.",
    "If Kylian Mbappé were a superhero, he’d be 'The Flash'—always one step ahead.",
    "Gareth Bale's hair deserves its own fan club; it has more fans than some players!",
    "If Cristiano Ronaldo were a meme, he'd be the 'Success Kid': always winning.",
    "Zlatan Ibrahimović has more confidence than most reality TV stars.",
    "If Virgil van Dijk were a video game character, he’d be the final boss.",
    "Harry Kane should be the official mascot for cupcakes: always sweet and delightful.",
    "If Lionel Messi were a color, he’d be 'Electric Blue': vibrant and unforgettable.",
    "Neymar’s dribbles should come with a ‘Do Not Try This at Home’ label.",
    "If Eden Hazard were a holiday, he’d be 'National Day of Celebration.'",
    "If Cristiano Ronaldo wrote a book, it would be titled 'How to Be Awesome 101.'",
    "Zlatan Ibrahimović’s quotes deserve their own Instagram page.",
    "If Kylian Mbappé were a dessert, he’d be a chocolate lava cake: warm and full of surprises.",
    "Paul Pogba’s style is so unique, it should come with a tutorial.",
    "If Sergio Ramos were a comedian, he’d have a show called 'Red Card Comedy Hour.'",
    "Lionel Messi could probably dribble through a minefield and come out unscathed.",
    "If Gareth Bale had a catchphrase, it would be 'Let’s hit the greens!'",
    "If Harry Kane were a sports drink, he’d be 'Focus Juice': always on target.",
    "If Neymar were a film, it would be a blockbuster: full of drama and plot twists.",
    "If Raheem Sterling were a superhero, his power would be ‘Speedy Recovery.’",
    "Zlatan Ibrahimović could give a TED Talk on confidence.",
    "If Mohamed Salah were a holiday, he’d be 'National Goal Day.'",
    "If Eden Hazard were a character, he’d be the wise mentor everyone listens to.",
    "Paul Pogba should teach a masterclass on how to have fun while playing.",
    "If Kylian Mbappé were a smartphone, he’d have the fastest processor.",
    "If Lionel Messi were a snack, he’d be ‘Chocolate-Covered Excellence.’",
    "Harry Kane could probably win a gold medal in goal scoring.",
    "If Neymar were a cat, he’d be the one knocking everything off the table.",
    "If Sergio Ramos were a pop star, he’d be breaking records left and right.",
    "Gareth Bale should host a cooking show called 'Cooking with Speed.'",
    "If Zlatan Ibrahimović were a motivational speaker, everyone would attend.",
    "Lionel Messi should run for president; he knows how to lead a team.",
    "If Cristiano Ronaldo were a fruit, he’d be an apple: always in demand.",
    "If Kylian Mbappé were a computer program, he’d be 'Turbo Boost.'",
    "Paul Pogba’s fashion sense could launch a thousand ships.",
    "If Neymar were a car, he’d be a flashy sports model: turning heads everywhere.",
    "If Eden Hazard were a video game, he’d be the cheat code everyone wants.",
    "Harry Kane should open a training camp for aspiring goal scorers.",
    "If Sergio Ramos were a fashion designer, he'd be all about red cards and bold designs.",
    "Zlatan Ibrahimović should be a movie director; his life is already a blockbuster.",
    "If Lionel Messi were a gift, he’d be a shiny, well-wrapped surprise.",
    "If Cristiano Ronaldo were a vacation, he’d be a luxury getaway.",
    "If Neymar were a drink, he’d be a tropical smoothie: refreshing and full of flavor."
     "Zlatan doesn't just play football; he plays with the laws of physics.",
    "If Zlatan were a superhero, his power would be 'Ultimate Confidence.'",
    "Zlatan doesn’t need a GPS; the universe knows where he is.",
    "If Zlatan was a flavor, he'd be 'Bold & Daring'—too intense for most people.",
    "When Zlatan enters the pitch, the grass automatically grows taller in respect.",
    "Zlatan doesn’t need a referee; he decides the rules.",
    "If Zlatan were a smartphone, he’d be the latest model—always ahead of the curve.",
    "When Zlatan takes a free kick, the wall moves out of fear.",
    "Zlatan's ego has its own zip code.",
    "If Zlatan were a food, he'd be a spicy taco: full of surprises.",
    "Zlatan doesn't do warm-ups; he just shows up and gets things done.",
    "If Zlatan were a book, he’d be a bestseller with no competition.",
    "Zlatan's reflection doesn’t need a mirror; it just knows it's Zlatan.",
    "If Zlatan were a drink, he’d be an espresso: strong, bold, and wakes you up.",
    "Zlatan doesn’t play by the rules; he rewrites them.",
    "If Zlatan were a flower, he’d be a rose that demands attention.",
    "When Zlatan scores, even the net applauds.",
    "Zlatan's idea of a team meeting is just everyone listening to him talk.",
    "If Zlatan were a car, he’d be a Ferrari: sleek, fast, and turning heads.",
    "When Zlatan speaks, even the microphone listens.",
    "Zlatan could probably teach physics just by playing football.",
    "If Zlatan were a video game, he'd be the cheat code: always a win.",
    "When Zlatan takes a penalty, the ball asks for forgiveness.",
    "If Zlatan were a weather phenomenon, he’d be a thunderstorm: powerful and electrifying.",
    "Zlatan doesn't sweat; he releases confidence beads.",
    "If Zlatan had a catchphrase, it would be 'I am Zlatan.'",
    "When Zlatan was born, the doctor asked for his autograph.",
    "If Zlatan were a holiday, he’d be 'National Confidence Day.'",
    "Zlatan's goals come with a side of sass.",
    "If Zlatan were a character, he’d be the one who always wins.",
    "Zlatan doesn't do press conferences; he has press 'audiences.'",
    "If Zlatan were a currency, he'd be priceless.",
    "When Zlatan takes a shot, the goalkeeper calls for backup.",
    "If Zlatan were a dance move, he'd be the 'Zlatan Shuffle'—nobody can replicate it.",
    "Zlatan's shadow has more followers than some players.",
    "If Zlatan were a software update, everyone would rush to download it.",
    "Zlatan doesn’t lose; he just allows others to think they won.",
    "When Zlatan walks into a room, the lights dim out of respect.",
    "If Zlatan were a car brand, he'd be Lamborghini: flashy and unbeatable.",
    "Zlatan’s training regime includes flexing in front of the mirror.",
    "If Zlatan were a game, he'd be Monopoly: he owns everything.",
    "Zlatan doesn't need to stretch; the world adjusts to his presence.",
    "When Zlatan plays, the pitch becomes his canvas.",
    "If Zlatan were a planet, he’d be the center of the universe.",
    "Zlatan doesn’t follow trends; he sets them.",
    "When Zlatan scores, the crowd doesn’t cheer; they bow down.",
    "If Zlatan were an animal, he'd be a lion: fierce and majestic.",
    "Zlatan’s autobiography is just a mirror reflecting greatness.",
    "If Zlatan were a magic trick, he’d be the 'Greatest Show on Earth.'",
    "When Zlatan dribbles, defenders automatically get dizzy.",
    "If Zlatan were a movie, he’d be an action blockbuster with no sequel needed."
     "Messi’s dribbling is so smooth, it could be classified as a dance move.",
    "If Messi were a magician, his signature trick would be making defenders disappear.",
    "Messi doesn’t need a GPS; he just follows the ball.",
    "When Messi runs, grass grows faster in awe of his talent.",
    "If Messi were a flavor, he'd be 'Chocolate Delight'—irresistibly sweet.",
    "Messi's passes are like love letters; they always find their target.",
    "If Messi were a fruit, he’d be a perfect peach: sweet and delightful.",
    "Messi doesn’t sweat; he glows with talent.",
    "When Messi scores, even the goalpost cheers.",
    "If Messi were a superhero, his power would be 'Invisibility'—defenders just can't see him.",
    "Messi could probably outrun a cheetah on a good day.",
    "If Messi were a dessert, he'd be a molten chocolate lava cake: warm and filled with surprises.",
    "Messi's hair has more fans than most players combined.",
    "If Messi were a song, he’d be a chart-topping hit—always in demand.",
    "When Messi enters a room, even the walls lean in to listen.",
    "If Messi were a video game character, he’d be the 'Final Boss'—impossible to beat.",
    "Messi’s footwork should be its own Olympic sport.",
    "If Messi were a color, he’d be 'Brilliant Blue': shining and unforgettable.",
    "When Messi takes a shot, the ball practically begs to go in.",
    "If Messi were a drink, he'd be 'Café con Leche': rich and smooth.",
    "Messi could dribble through a crowd of defenders wearing blindfolds.",
    "If Messi were a flower, he’d be a sunflower: always turning towards the light.",
    "When Messi scores, the referee automatically gives him a goal of the month award.",
    "If Messi were a pet, he'd be a loyal dog: always there when you need him.",
    "Messi doesn’t need a coach; he teaches the coaches.",
    "If Messi were a planet, he'd be the center of the football universe.",
    "When Messi runs, defenders just wish they were watching from the sidelines.",
    "If Messi were a snack, he’d be popcorn: light, fluffy, and always a favorite.",
    "Messi’s shoes should come with a warning: 'May cause dizziness in defenders.'",
    "If Messi were a holiday, he’d be 'National Skill Day.'",
    "When Messi dribbles, defenders end up questioning their life choices.",
    "If Messi were a book, he’d be a bestseller: everyone wants to read it.",
    "Messi doesn’t need to train; he just plays with joy.",
    "If Messi were an animal, he’d be a gazelle: graceful and fast.",
    "When Messi has the ball, the whole world pauses to watch.",
    "If Messi were a car, he’d be a Bugatti: fast, sleek, and luxurious.",
    "Messi could probably score goals blindfolded; he’s just that good.",
    "If Messi were a dance move, he’d be the 'Smooth Salsa': always in rhythm.",
    "When Messi takes a free kick, the ball knows it's about to become a highlight reel.",
    "If Messi were a movie, he’d be an instant classic—no sequels needed.",
    "Messi doesn’t play football; he creates art on the pitch.",
    "If Messi were a board game, he’d be 'Monopoly': he owns everything.",
    "When Messi scores, even the net celebrates.",
    "If Messi were a piece of jewelry, he’d be a diamond: rare and priceless.",
    "Messi’s presence on the pitch is like having Wi-Fi; it just makes everything better.",
    "If Messi were a superhero, his sidekick would be 'Teamwork.'",
    "When Messi plays, even the ball smiles.",
    "If Messi were a magical creature, he’d be a unicorn: one of a kind.",
    "Messi’s every dribble should come with a soundtrack.",
    "If Messi were a cartoon character, he’d be the one everyone wants to be.",
    "When Messi takes a penalty, the goalkeepers just start sweating.",
    "If Messi were an ice cream flavor, he’d be 'Mint Chocolate Chip': fresh and always a hit.",
    "Messi doesn’t just win games; he wins hearts."
        "Cristiano Ronaldo is overrated and only thrives on penalties and set pieces.",
    "Lionel Messi would struggle in a less talented league.",
    "Neymar's antics overshadow his talent and detract from his contributions.",
    "Harry Kane is more of a product of his system than a true world-class striker.",
    "Kylian Mbappé's hype is unwarranted; he has yet to prove himself in big tournaments.",
    "Zlatan Ibrahimović is all talk and no substance when it comes to crucial matches.",
    "Paul Pogba is more interested in fashion than football, impacting his performance.",
    "Gareth Bale’s best years are behind him; he’s living off past glories.",
    "Sergio Ramos is a dirty player who relies on cynical fouls to succeed.",
    "Kevin De Bruyne is a great player, but he’s often overrated due to playing in a dominant team.",
    "Virgil van Dijk is not as invincible as people claim; he can be exposed with the right tactics.",
    "Raheem Sterling is inconsistent and lacks the finishing skills of top forwards.",
    "Eden Hazard has been a flop at Real Madrid considering his transfer fee.",
    "Neymar's theatrics make him a liability in high-pressure situations.",
    "Cristiano Ronaldo's ego has cost teams in crucial moments.",
    "Lionel Messi is not a natural leader and relies heavily on his teammates.",
    "Kylian Mbappé's work rate doesn't match his talent; he often disappears in important matches.",
    "Gareth Bale should retire from international football; he’s holding Wales back.",
    "Sergio Ramos is not a legend; his reputation is built on being a provocateur.",
    "Paul Pogba's inconsistency makes him a liability for any team.",
    "Harry Kane's goal-scoring record is inflated due to penalties and weak opposition.",
    "Zlatan Ibrahimović is a one-trick pony who relies on physicality over skill.",
    "Lionel Messi would not have the same impact in a less competitive league.",
    "Cristiano Ronaldo is more interested in personal records than team success.",
    "Neymar's potential has been wasted due to his off-field distractions.",
    "Raheem Sterling is overrated and doesn’t deserve his starting spot for England.",
    "Eden Hazard's injuries have ruined his legacy at Chelsea.",
    "Virgil van Dijk has been exposed in big games; he's not as solid as advertised.",
    "Kevin De Bruyne's passing is often overrated; he makes more mistakes than people realize.",
    "Gareth Bale's attitude towards training has been detrimental to his career.",
    "Zlatan Ibrahimović has had a negative impact on the teams he's played for with his attitude.",
    "Cristiano Ronaldo's influence on younger players is more about vanity than skill.",
    "Lionel Messi's dominance is due to playing in a system designed for him.",
    "Paul Pogba is a luxury player that teams can’t afford in high-stakes matches.",
    "Kylian Mbappé would struggle if he played in a physical league.",
    "Neymar’s performances in crucial matches are often underwhelming.",
    "Harry Kane is not a world-class striker; he’s just a product of the Premier League hype.",
    "Raheem Sterling’s inconsistency in front of goal makes him unreliable.",
    "Sergio Ramos has benefited from a strong team and would struggle elsewhere.",
    "Eden Hazard's time at Real Madrid has been a huge disappointment.",
    "Kevin De Bruyne is not as creative as everyone thinks; he often plays it safe.",
    "Zlatan Ibrahimović's legacy is more about controversy than footballing achievements.",
    "Cristiano Ronaldo's style of play is outdated; he relies too much on physicality.",
    "Lionel Messi's lack of international success diminishes his legacy.",
    "Neymar's attitude towards injuries makes him a risky player to build a team around.",
    "Harry Kane's tendency to drop deep makes him less effective as a striker.",
    "Kylian Mbappé is not the next big thing; he’s just riding the wave of hype.",
    "Gareth Bale's golf obsession is a distraction from his football career.",
    "Sergio Ramos is a liability in tight matches; his recklessness costs goals.",
    "Paul Pogba's off-field distractions have negatively impacted his on-field performance.",
    "Eden Hazard's legacy will be remembered for what could have been, not what was.",
    "Virgil van Dijk’s defensive skills are often overstated; he has his weaknesses.",
    "Cristiano Ronaldo's brand has overshadowed his football career.",
    "Lionel Messi would not dominate in a more physical league.",
    "Neymar's tendency to flop undermines his talent and credibility.",
    "Kylian Mbappé's decision-making in crucial moments leaves a lot to be desired.",
    "Harry Kane has yet to prove himself in international tournaments.",
    "Raheem Sterling often disappears in important games; he’s not clutch.",
    "Gareth Bale's injuries have left a black mark on his reputation.",
    "Zlatan Ibrahimović’s self-promotion has become tiresome.",
    "Paul Pogba's potential has never been realized; he’s just a tease.",
    "Kevin De Bruyne's statistics are inflated due to playing with top talents.",
    "Virgil van Dijk's defensive prowess is more about being in the right place at the right time.",
    "Cristiano Ronaldo's rivalry with Messi has overshadowed other great players.",
    "Lionel Messi's loyalty to Barcelona was a mistake; he should have challenged himself.",
    "Neymar's focus on fame and fortune detracts from his football.",
    "Harry Kane is a system player; put him in another team, and he’s just average.",
    "Sergio Ramos's reputation is built on his ability to provoke rather than defend.",
    "Eden Hazard's weight issues have been a problem for his career.",
    "Kylian Mbappé has not yet lived up to the hype surrounding him."
        "My team plays like a well-oiled machine—just with a few rusty bolts.",
    "If my players could score goals as well as they score selfies, we’d be champions.",
    "We play like a team of chefs; sometimes, we cook up a great dish, other times it's just burnt toast.",
    "My players are like fine wine; they get better with age but sometimes they’re just vinegar.",
    "I told my team to play like they’re at a party—just don’t forget the goals.",
    "If I had a pound for every time we lost a game, I could afford better players.",
    "Our defense is like a broken umbrella; it just can’t keep the rain out.",
    "My tactics are like a secret recipe; nobody knows what they are, not even me.",
    "We’re not just a team; we’re a group of people who occasionally play football.",
    "If my players spent as much time practicing as they do on social media, we’d be unbeatable.",
    "My team has the creativity of a blank canvas; we just need someone to paint the picture.",
    "If scoring goals was an Olympic sport, we’d still come home with a participation trophy.",
    "My players have the athleticism of sloths on a lazy day.",
    "We have more injuries than a hospital; I’m thinking of hiring a medic full-time.",
    "Our midfield is like Swiss cheese; full of holes and lacking structure.",
    "I told my players to give 110%, but they only seem to understand 50%.",
    "If we could turn our possession into goals, we’d be the best team in the world.",
    "My team plays like they’re auditioning for a comedy show—lots of laughs but no results.",
    "Our tactics are so complex, even I struggle to understand them.",
    "If winning was easy, everyone would do it—thankfully, we’re here to provide entertainment.",
    "My players have the accuracy of a blindfolded archer.",
    "If enthusiasm could score goals, we’d be champions by now.",
    "My team has the consistency of a cat on a hot tin roof.",
    "We don’t just need new players; we need a whole new philosophy.",
    "Our goalkeeper has the reflexes of a sloth on vacation.",
    "If we played as well as we celebrated, we’d win every match.",
    "My players can turn a simple pass into a dramatic thriller.",
    "Our defense is like a sieve; nothing stays in or out.",
    "I believe in giving my players a free hand—especially when it comes to scoring own goals.",
    "If we could convert missed chances into points, we’d be league leaders.",
    "My team’s strategy is like a game of chess; unfortunately, we’re playing checkers.",
    "We’re not just underdogs; we’re the whole dog show.",
    "My players are like popcorn; they pop up when you least expect it.",
    "If effort equaled results, we’d be top of the table.",
    "Our training sessions look like a game of dodgeball—everyone running for cover.",
    "If my players had a dollar for every time they missed a shot, they’d be millionaires.",
    "I like to think of my team as a family; a very dysfunctional one.",
    "We’re so close to victory, yet so far away—like trying to catch a cloud.",
    "If we played as well as we talked, we’d be invincible.",
    "My team plays with heart; unfortunately, it’s the wrong kind of heart.",
    "If my players could read the game as well as they read the headlines, we’d be unbeatable.",
    "We have more character than results—too bad it's the wrong kind.",
    "If my players spent as much time training as they do on TikTok, we’d be winning everything.",
    "Our attack is like a broken clock; it’s right twice a day but misses every other time.",
    "If my players were a food, they’d be soggy fries—hardly appealing.",
    "I told my players to think outside the box; they ended up in another dimension.",
    "If enthusiasm could win matches, we’d be champions every season.",
    "My team has more excuses than goals this season.",
    "We’re like a car with no engine; we look good but can’t go anywhere.",
    "If we had a penny for every missed chance, we’d be richer than Manchester City.",
    "My players are like a sitcom; lots of laughs but no real substance.",
    "We’re not losing; we’re just experimenting with new ways to keep fans on the edge of their seats.",
    "If my team could finish like they start, we’d be unstoppable.",
    "Our passing is like a game of hot potato; no one wants to hold onto it.",
    "If my players could sing, they’d be in a choir; unfortunately, they can’t score.",
    "We’re playing like it’s the first time we’ve ever kicked a ball.",
    "My team has the focus of a goldfish; we need more than just a bowl.",
    "If we could turn our mistakes into learning experiences, we’d be scholars.",
    "My players can turn a simple training session into a circus act.",
    "If we could earn points for effort, we’d be league leaders.",
    "My team is like a jigsaw puzzle; we just can’t seem to fit together.",
    "If my players were a vehicle, they’d be a flat tire—going nowhere fast.",
    "We play like we’re still in pre-season; someone needs to remind us it’s game time.",
    "If only my players were as sharp as their haircuts.",
    "We’re a team of individuals who occasionally remember they’re supposed to play together.",
    "If my players were any more laid-back, they’d be horizontal.",
    "Our strategy is to confuse the opponent; unfortunately, it confuses us too.",
    "If scoring goals were a crime, we’d be innocent.",
    "My players are like a mystery novel; full of twists but no clear plot.",
    "We’re not just underdogs; we’re the whole kennel.",
    "If my team played as well as they talk, we’d win every match.",
    "My players have the decision-making skills of toddlers in a candy store.",
    "If we could turn our lack of goals into a positive spin, we’d be undefeated.",
    "My team is like a ship without a captain—lost at sea.",
    "If winning were easy, I’d have a different job.",
    "Our defense is like a revolving door; nothing stays in or out.",
    "If my players were any more confused, they’d need a map to find the pitch.",
    "We play like a team of strangers; someone needs to introduce us.",
    "If scoring was an art, we’d be stuck in the kiddie section.",
    "My team has the discipline of a cat in a room full of laser pointers.",
    "If only my players could finish like they start, we’d be in the Champions League."
];

let submittedOpinions = [];

// Event listeners
document.getElementById('generateButton').addEventListener('click', generateOpinion);
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
document.getElementById('menuToggle').addEventListener('click', toggleSidebar);
document.getElementById('closeSidebar').addEventListener('click', toggleSidebar);
document.getElementById('registerLink').addEventListener('click', openSmallSidebar);
document.getElementById('closeSmallSidebar').addEventListener('click', closeSmallSidebar);
document.getElementById('registrationForm').addEventListener('submit', handleRegistration);
document.getElementById('closeCreditsSidebar').addEventListener('click', closeCreditsSidebar);
document.getElementById('submitOpinionsLink').addEventListener('click', openSubmitOpinionsSidebar);
document.getElementById('closeSubmitOpinionsSidebar').addEventListener('click', closeSubmitOpinionsSidebar);
document.getElementById('submitOpinionForm').addEventListener('submit', handleOpinionSubmission);
document.getElementById('creditsLink').addEventListener('click', openCreditsSidebar);
document.getElementById('contributorsLink').addEventListener('click', function(event) {
    event.preventDefault();
    toggleSidebar(); // Open or close the sidebar
    const contributorsSection = document.getElementById('contributorsSection');
    contributorsSection.style.display = contributorsSection.style.display === 'block' ? 'none' : 'block'; // Toggle visibility
});

// Opinion generation function
function generateOpinion() {
    const opinionNumber = document.getElementById('opinionNumber').value;
    const opinionDisplay = document.getElementById('opinionDisplay');

    if (isNaN(opinionNumber) || opinionNumber.trim() === "") {
        opinionDisplay.textContent = "Please enter a valid number.";
    } else if (opinionNumber == 0) {
        opinionDisplay.textContent = "Ronaldo WC KO goals.";
    } else if (opinionNumber > 0 && opinionNumber <= opinions.length) {
        opinionDisplay.textContent = opinions[opinionNumber - 1] || "No opinion available for this number.";
    } else if (opinionNumber > 1000) {
        opinionDisplay.textContent = "Opinion got Ronaldoad, no opinions available.";
    } else {
        opinionDisplay.textContent = "Please enter a valid number.";
    }
}

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}

// Open and close small sidebar for submitting opinions
function openSmallSidebar(event) {
    event.preventDefault();
    const smallSidebar = document.getElementById('smallSidebar');
    smallSidebar.classList.add('show');
}

function closeSmallSidebar() {
    const smallSidebar = document.getElementById('smallSidebar');
    smallSidebar.classList.remove('show');
    document.getElementById('registrationForm').reset(); // Reset the form after closing
}

// Handle registration
function handleRegistration(event) {
    event.preventDefault();
    isRegistered = true; // Set registration status to true
    closeSmallSidebar();
}

// Open and close credits sidebar
function openCreditsSidebar(event) {
    event.preventDefault();
    const creditsSidebar = document.getElementById('creditsSidebar');
    creditsSidebar.classList.add('show');
}

function closeCreditsSidebar() {
    const creditsSidebar = document.getElementById('creditsSidebar');
    creditsSidebar.classList.remove('show');
}

// Open and close sidebar for submitting opinions
function openSubmitOpinionsSidebar(event) {
    event.preventDefault();
    const submitOpinionsSidebar = document.getElementById('submitOpinionsSidebar');
    submitOpinionsSidebar.classList.add('show');
}

function closeSubmitOpinionsSidebar() {
    const submitOpinionsSidebar = document.getElementById('submitOpinionsSidebar');
    submitOpinionsSidebar.classList.remove('show');
    document.getElementById('opinionInput').value = ''; // Clear the input after closing
}

// Handle opinion submission
function handleOpinionSubmission(event) {
    event.preventDefault();
    const opinionInput = document.getElementById('opinionInput').value;
    const contributorName = document.getElementById('preferredName').value; // Get the contributor name

    if (!isRegistered) {
        document.getElementById('submissionFeedback').textContent = "You need to register before submitting opinions.";
        return;
    }

    if (contributorName.trim() === "") {
        document.getElementById('submissionFeedback').textContent = "Contributor name cannot be empty.";
        return;
    }

    if (opinionInput.trim() === "") {
        document.getElementById('submissionFeedback').textContent = "Opinion cannot be empty.";
        return;
    }

    // Add the new opinion to the opinions array
    opinions.push(opinionInput);
    submittedOpinions.push(opinionInput);

    // Update contributor count
    contributors[contributorName] = (contributors[contributorName] || 0) + 1;

    // Get the index of the newly added opinion (index will be length - 1)
    const newIndex = opinions.length - 1;

    // Display success message with the index of the new opinion
    document.getElementById('submissionFeedback').textContent = 
        `Opinion submitted successfully! Your opinion is added as Opinion #${newIndex + 1}.`; // +1 to make it user-friendly (1-based index)

    document.getElementById('opinionInput').value = ''; // Clear the input
    document.getElementById('preferredName').value = ''; // Clear the contributor name input
}

// Display top contributors
function displayTopContributors() {
    const contributorsList = document.getElementById('contributorsList'); // Target element for contributors list
    contributorsList.innerHTML = ''; // Clear previous content

    // Sort contributors by their contribution count
    const sortedContributors = Object.entries(contributors).sort((a, b) => b[1] - a[1]);

    // Limit to top 5 contributors
    const topContributors = sortedContributors.slice(0, 5);

    if (topContributors.length === 0) {
        contributorsList.innerHTML = '<li>No contributors yet.</li>';
        return;
    }

    topContributors.forEach(([name, count], index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${name} - ${count} contributions`;
        contributorsList.appendChild(listItem);
    });
}

// Open contributors sidebar
function openContributorsSidebar() {
    const contributorsSection = document.getElementById('contributorsSection');
    contributorsSection.style.display = 'block'; // Show contributors section
    displayTopContributors(); // Display the top contributors
}

// Close contributors sidebar
function closeContributorsSidebar() {
    const contributorsSidebar = document.getElementById('contributorsSidebar');
    contributorsSidebar.classList.remove('show');
}
