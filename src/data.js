let allBooks=[
    {   
        id: "Life_1",
        cover: "images/Life_1.png",
        title: "The Heart of a CHEETAH",
        author: "Magatte Wade",
        genre:"lifestyle",
        price: "600",
        rating:"4.70",
        synop: `<p class="synopsis-text">
                Experience the life story of Magatte Wade, the bold Senegalese entrepreneur and unflinching prosperity activist, determined to shape the destiny of her African homeland.</p>
                <p class="synopsis-text"> In this riveting memoir, Wade challenges Africans to redefine their narrative, casting aside imposed inferiority to reclaim their innate brilliance.</p>`

    },
    {
        id: "Life_2",
        cover: "images/Life_2.png",
        title: "Lifestyle Builders",
        author: "Tom & Ariana Sylvester",
        genre: "lifestyle",
        price: "530",
        rating: "4.70",
        synop: `<p class="synopsis-text">Most people have two lives: the one that they are living and the one that they want to live. Today, there is more opportunity than ever for anyone to create their ideal life through entrepreneurship. After overcoming the obstacles of building three businesses with one spouse still in a 9-5 job and working together as a married couple while raising two young kids, Tom and Ariana Sylvester have cracked the code and developed a framework on how to successfully do business and life―together.</p>`

    },
    {
        id: "Life_3",
        cover: "images/Life_3.png",
        title: "Ask Powerful Questions",
        author: "Will Wise",
        genre: "lifestyle",
        price: "500",
        rating : "4.50",
        synop: `<p class="synopsis-text">What might happen if “small talk” was replaced with conversations that matter? In their Bestselling book, Will Wise and Chad Littlefield explain how the questions we traditionally ask are often meaningless when it comes to establishing a connection. Introducing a set of practice tools for understanding others by changing the way we ask questions, Will and Chad show how to transform “How are you?—I’m fine, thanks” into conversations that change not only how you lead but who you are as a person.</p>`

    },
    {
        id: "Life_4",
        cover: "images/Life_4.png",
        title: "The Joy of Mixology",
        author: "Gary Regan",
        genre: "lifestyle",
        price: "750",
        rating: "4.30",
        synop: `<p class="synopsis-text">A prolific writer on all things cocktails, Gary Regan and his books have been a huge influence on mixologists and bartenders in America. This brand-new edition fills in the gaps since the book first published, incorporating Regan's special insight on the cocktail revolution from 2000 to the present and a complete overhaul of the recipe section.</p>`

    },
    {
        id: "Life_5",
        cover: "images/Life_5.png",
        title: "The RV Passive Income Guide",
        author: "Jeremy Prost",
        genre:"lifestyle",
        price: "580",
        rating: "4.00",
        synop: `<p class="synopsis-text">Warning: Listening to this may cause you to quit your job and chase the RV adventure of your dreams.</p>
                <p class="synopsis-text">Imagine a life where you don't have to meet up at work every morning at nine a.m. You can work straight from the comfort of your own home during the hours that suit your lifestyle best. Are you picturing it? Wonderful.</p>`
    },
    {
        id: "Life_6",
        cover: "images/Life_6.png",
        title: "I Love It Here",
        author: "Clint Pulver",
        genre: "lifestyle",
        price:"600",
        rating: "4.70",
        synop: `<p class="synopsis-text">Emmy Award-winning speaker Clint Pulver - aka the Undercover Millennial - shares insights gleaned from more than 10,000 undercover interviews with employees across the country, revealing the best methods for identifying talent, building a sense of ownership, and developing a successful workplace culture that employees will love.</p>`
    },
    {
        id: "Life_7",
        cover: "images/Life_7.png",
        title: "You're The Leader Now What?",
        author: "Richard Winters, M.D.",
        genre: "lifestyle",
        price : "700",
        rating: "4.90",
        synop: `<p class="synopsis-text">Leadership has never been more challenging. Your colleagues disagree, their emotions run high, and your way forward through the everchanging, complex work environment would confound even the most seasoned leader.</p>`

    },
    {
        id: "Life_8",
        cover: "images/Life_8.png",
        title: "The Answer Is A Question",
        author: "Laura Ashley-Timms",
        genre: "lifestyle",
        price: "670",
        rating: "4.30",
        synop:`<p class="synopsis-text">This book is produced in stunning full colour and provides invaluable insights, examples, and mini-missions that will show you precisely how to make some immediate changes that will yield fast and exciting results and revolutionise how you manage forever.</p>`


    },
    {
        id: "Life_9",
        cover: "images/Life_9.png",
        title: "The Most Powerful Woman In The Room Is You",
        auhtor: "Lydia Fenet",
        genre: "lifestyle",
        price: "680",
        rating: "4.60",
        synop: `<p class="synopsis-text">Throughout, Lydia also shares personal and inspiring stories from her own life - like how she got her foot in the door at Christie's after she was originally told there were no spots left in the intern program. And when she realized she was being paid a third of her worth - and how she came back more powerful than ever.</p>`
    },
    {
        id: "Life_10",
        cover: "images/Life_10.png",
        title: "How to Taste",
        author: "Many Naglich",
        genre: "lifestyle",
        price: "780",
        rating: "4.10",
        synop: `<p class="synopsis-text">Whether it's a meaningful meal or a favorite nostalgic road trip snack, we know what we like to eat. But even when it comes to the most vivid and memorable dishes it’s tough to say what exactly makes them so delicious.Now award-winning expert, certified food and beverage taster and lifestyle journalist Mandy Naglich reveals how to hone your tasting superpowers like a pro.</p>`

    },
    {
        id: "Romance_1",
        cover:"images/rom_1.png",
        title: "The Love Hypothesis",
        author: "Ali Hazelwood",
        genre: "romance",
        price: "690",
        rating: "4.50",
        synop: `<p class="synopsis-text"> As a third-year PhD candidate, Olive Smith doesn't believe in lasting romantic relationships—but her best friend does, and that's what got her into this situation. Convincing Anh that Olive is dating and well on her way to a happily ever after was always going to take more than hand-wavy Jedi mind tricks: Scientists require proof. So, like any self-respecting biologist, Olive panics and kisses the first man she sees.</p>`
    },
    {
        id: "Romance_2",
        cover: "images/rom_2.png",
        title: "(Not So) Famous in Paradise",
        author: "Brittany Larsen",
        genre:"romance",
        price:"780",
        rating: "4.50",
        synop: `<p class= "synopsis-text">When the biggest career opportunity of my life–my own home reno TV show–sends me back to my hometown, I’m less than excited. Paradise, Idaho might be paradise for everyone else, but it never was for me. Except for my best friend, Zach.</p>`
    },
    {
        id: "Romance_3",
        cover: "images/rom_3.png",
        title: "Eleanor & Park", 
        author: "Rainbow Rowell",
        genre: "romance",
        price: "600",
        rating: "4.40",
        synop: `<p class="synopsis-text">Set over the course of one school year in 1986, this is the story of two star-crossed misfits-smart enough to know that first love almost never lasts, but brave and desperate enough to try. When Eleanor meets Park, you'll remember your own first love-and just how hard it pulled you under.</p>`

    },
    {
        id: "Romance_4",
        cover: "images/rom_4.png",
        title: "Absolute Not In Love",
        author: "Jenny Proctor",
        genre: "romance",
        price: "550",
        rating: "4.40",
        synop:`<p class="synopsis-text">Which is why I will never be interested in my neighbor, the aloof and mysterious Felix Jamison, no matter how many books I see him hauling into his apartment. Unless he loses his pro hockey skates, I'm out.</p>`

    },
    {
        id: "Romance_5",
        cover: "images/rom_5.png",
        title: "True North",
        author: "Robin Huber",
        genre : "romance",
        price: "540",
        rating: "4.00",
        synop: `<p class="synopsis-text">
        It's been eight years since the moment that changed Olivia Dalton’s life. Gabriel North was her first love—her only love. But an accident shattered their world, leaving Gabe with a serious injury and Liv with a broken heart.</p><p class="synopsis-text">In the years that followed, Liv left their small coastal town in Georgia and began her career in North Carolina. But she often feels like a stranger watching the woman she’s become drift farther and farther from the girl she used to be.</p>`
    },
    {
        id: "Romance_6",
        cover: "images/rom_6.png",
        title: "Love & Other Words",
        author: "Christian Lauren",
        genre: "romance",
        price: "750",
        rating: "4.60",
        synop:`<p class= "synopsis-text">Macy Sorensen is settling into an ambitious if emotionally tepid routine: work hard as a new pediatrics resident, plan her wedding to an older, financially secure man, keep her head down and heart tucked away.</p><p class= "synopsis-text">But when she runs into Elliot Petropoulos - the first and only love of her life - the careful bubble she’s constructed begins to dissolve. Once upon a time, Elliot was Macy’s entire world - growing from her gangly teen friend into the man who coaxed her heart open again after the loss of her mother...only to break it on the very night he declared his love for her.</p>`

    },
    {
        id: "Romance_7",
        cover: "images/rom_6.png",
        title: "In The Weeds",
        author: "B.K. Borison",
        genre: "romance",
        price: "800",
        rating: "4.30",
        synop: `<p class="synopsis-text">One incredible weekend in Maine, and Beckett Porter is officially a distracted man. He’s not unfamiliar with hot and heavy flings. He knows how it goes. But Evie wove some sort of magic over him during their tumble in the sheets. He can’t stop thinking about her laugh, her hand pressed flat against his chest, her smiling mouth at his neck, her eyes, her legs. </p>`

    },
    {
        id: "Romance_8",
        cover: "images/rom_8.png",
        title: "A Part Of You",
        author: "Lynden Renwick",
        genre: "romance",
        price: "670",
        rating: "4.00",
        synop:`<p class ="synopsis-text">Ashleigh led an idyllic life. She was fit, loved her job, and was blissfully married to a doting husband. Then came the diagnosis: infertile. With every IVF clinic around the country shutting its doors, it seems that any hope of completing her family is lost. Enter Hannah—a beautiful and celebrated playwright looking for inspiration for her next show—who offers to serve as Ashleigh's non-surgical surrogate.</p>`
    },
    {
        id: "Romance_9",
        cover: "images/rom_9.png",
        title: "DNA of YOU nad ME",
        author: "Andrea Rothman",
        genre: "romance",
        price: "690",
        rating: "4.10",
        synop:`<p class="synopsis-text">How does smell work? Specifically, how do olfactory sensory neurons project to their targets in the olfactory bulb, where smell is processed? Justin McKinnon has hired fresh-faced graduate student Emily to study that question. What Justin hasn’t told Emily is that two other scientists in the lab, Aeden and Allegra, are working on a very similar topic, and their findings may compete with her research.</p>`
    },
    {
        id: "Romance_10",
        cover: "images/rom_10.png",
        title: "Dinner For Two",
        author:"Drea Stein",
        genre: "romance",
        price:  "880",
        rating: "4.20",
        synop: `<p class= "text-synop">Sean and Darby love food, but is their relationship a recipe for disaster, or a chance to make kitchen magic?</p><p class= "text-synop">Sean Callahan was a hotshot big-city chef whose high-handed ways got him into trouble one too many times. Now he's in a small town hoping for another shot at the big leagues.</p><p class= "text-synop">Darby Reese is a big-city lawyer who can bake like an angel. Unfortunately, a life lived according to the law has left her burned out. So when the chance comes to run her family's deli in the small town of Queensbay, Darby's happy to take it.</p>`
    },
    {
        
    },
    {
        id: "children_1",
        cover:"images/children_1.png",
        title:"Anne of Green Gables",
        author:"L.M. Montgomery",
        genre: "children",
        price:"999",
        rating: "4.30",
        synop: `<p class="synopsis-text">
                This heartwarming story has beckoned generations of readers into the special world of Green Gables, an old-fashioned farm outside a town called Avonlea. Anne Shirley, an eleven-year-old orphan, has arrived in this verdant corner of Prince Edward Island only to discover that the Cuthberts—elderly Matthew and his stern sister, Marilla—want to adopt a boy, not a feisty redheaded girl. But before they can send her back, Anne—who simply must have more scope for her imagination and a real home—wins them over completely. A much-loved classic that explores all the vulnerability, expectations, and dreams of a child growing up, Anne of Green Gables is also a wonderful portrait of a time, a place, a family… and, most of all, love.
            </p>`
    },

    {
        id: "children_2",
        cover:"images/children_2.png",
        title:"The Lion, the Witch and the Wardrobe",
        author:"C.S. Lewis",
        genre: "children",
        price:"800",
        rating:"4.23",
        synop: `<p class="synopsis-text">Narnia… the land beyond the wardrobe door, a secret place frozen in eternal winter, a magical country waiting to be set free.</p>
        <p class="synopsis-text">Lucy is the first to find the secret of the wardrobe in the professor's mysterious old house. At first her brothers and sister don't believe her when she tells of her visit to the land of Narnia. But soon Edmund, then Peter and Susan step through the wardrobe themselves. In Narnia they find a country buried under the evil enchantment of the White Witch. When they meet the Lion Aslan, they realize they've been called to a great adventure and bravely join the battle to free Narnia from the Witch's sinister spell.</p>`
    },
    
    {
        id: "children_3",
        cover:"images/children_3.png",
        title:"The Secret Garden",
        author:"Frances Hodgson Burnett",
        genre: "children",
        price:"899",
        rating:"4.15",
        synop:`<p class="synopsis-text">Mary Lennox, a spoiled, ill-tempered, and unhealthy child, comes to live with her reclusive uncle in Misselthwaite Manor on England's Yorkshire moors after the death of her parents. There she meets a hearty housekeeper and her spirited brother, a dour gardener, a cheerful robin, and her wilful, hysterical, and sickly cousin, Master Colin, whose wails she hears echoing through the house at night.</p> 
            <p class="synopsis-text">With the help of the robin, Mary finds the door to a secret garden, neglected and hidden for years. When she decides to restore the garden in secret, the story becomes a charming journey into the places of the heart, where faith restores health, flowers refresh the spirit, and the magic of the garden, coming to life anew, brings health to Colin and happiness to Mary.</p>`
    },

    {
        id: "children_4",
        cover:"images/children_4.png",
        title:"The Puppets of Spelhorst",
        author:"Kate DiCamillo",
        genre: "children",
        price:"699",
        rating:"4.30",
        synop:`<p class="synopsis-text">From master storyteller Kate DiCamillo comes an original fairy tale—with enchanting illustrations by Julie Morstad—in which five puppets confront circumstances beyond their control with patience, cunning, and high spirits.</p>
            <p class="synopsis-text">Shut up in a trunk by a taciturn old sea captain with a secret, five friends—a king, a wolf, a girl, a boy, and an owl—bicker, boast, and comfort one another in the dark. Individually, they dream of song and light, freedom and flight, purpose and glory, but they all agree they are part of a larger story, bound each to each by chance, bonded by the heart's mysteries. When at last their shared fate arrives, landing them on a mantel in a blue room in the home of two little girls, the truth is more astonishing than any of them could have imagined. A beloved author of modern classics draws on her most moving themes with humor, heart, and wisdom in the first of the Norendy Tales, a projected trio of novellas linked by place and mood, each illustrated in black and white by a different virtuoso illustrator. A magical and beautifully packaged gift volume designed to be read aloud and shared, The Puppets of Spelhorst is a tale that soothes and strengthens us on our journey, leading us through whatever dark forest we find ourselves in.
            </p> `
    },


    {
        id: "children_5",
        cover:"images/children_5.png",
        title:"Treasure Island: Runaway Gold",
        author:"Jewell Parker Rhodes",
        genre: "children",
        price:"699",
        rating:"3.97",
        synop:`<p class="synopsis-text">Bestselling and award-winning author Jewell Parker Rhodes reimagines the classic novel Treasure Island  by Robert Louis Stevenson in this thrilling adventure set in modern-day Manhattan, in which three children must navigate the city's hidden history, dodge a threatening crew of skater kids, and decide who they can really trust in order to hunt down a long-buried treasure.  Three kids. One dog. And the island of Manhattan, laid out in an old treasure map. Zane is itching for an adventure that will take him away from his family's boarding house in Rockaway, Queens. So when he is entrusted with a real treasure map, leading to a spot somewhere in Manhattan, Zane wastes no time in riding the ferry over to the city to start the search with his friends Kiko and Jack and his dog, Hip-Hop. Through strange coincidence, they meet a man who is eager to help them find the John, a sailor who knows all about the buried history of Black New Yorkers of centuries past—and the gold that is hidden somewhere in those stories. As a vicious rival skateboard crew follows them around the city, Zane and his friends begin to wonder who they can really trust. And soon it becomes clear that treasure hunting is a dangerous business… Jewell Parker Rhodes has written a version of Treasure Island like none you've never seen—one that takes the reader through little-known Black history, and under the city of Manhattan itself. </p>`
    },


    {
        id:"children_6",
        cover:"images/children_6.png",
        title:"Ravenfall #2 Hollowthorn",
        author:"Kalyn Josephson",
        genre: "children",
        price:"899",
        rating:"4.17",
        synop:`<p class="synopsis-text">In this spellbinding sequel to Ravenfall, two kids with supernatural powers must venture into the Otherworld to protect the Tree of Life from a terrifying foe—or risk losing the magic of Ravenfall forever.</p>
        <p class="synopsis-text">Best friends Anna and Colin defeated the King of the Dead on Halloween night, saving the magical Ravenfall Inn they call home. Now, with Hannukah approaching, the kids are looking forward to exploring their new powers—and maybe enjoying a little challah and peppermint cocoa, too.</p>
        <p class="synopsis-text">Best friends Anna and Colin defeated the King of the Dead on Halloween night, saving the magical Ravenfall Inn they call home. Now, with Hannukah approaching, the kids are looking forward to exploring their new powers—and maybe enjoying a little challah and peppermint cocoa, too.</p>
        <p class="synopsis-text">But then a Raven—a guardian of the supernatural world—shows up at their doorstep with a warning. A demon from Jewish lore is hunting the Tree of Life, a source of untold power and immortality. If they can't stop him, they risk losing the magic of Ravenfall forever.</p>
        <p class="synopsis-text">As they venture into the Otherworld, Anna and Colin discover a wondrous, menacing realm full of mythological creatures… but is the true danger closer than they think?
        </p>`
    },

    {
        id: "children_7",
        cover:"images/children_7.png",
        title:"Blight Harbor #2 The Nighthouse Keeper",
        author:"Lora Senf",
        genre: "children",
        price:"699",
        rating:"4.39",
        synop:`<p class="synopsis-text">Evie once again leaves her world behind to rescue Blight Harbor's ghosts in this second book in the bone-chilling middle grade Blight Harbor trilogy that's reminiscent of Doll Bones and Small Spaces.</p>
        <p class="synopsis-text">Evie Von Rathe has been home for only a few weeks from her adventure in the strange world of seven houses when Blight Harbor's beloved ghosts begin to disappear. Did they leave without saying goodbye, or has something gone horribly wrong? Soon Evie is invited to a mysterious council meeting, where she learns about the Dark Sun Side and a terrible secret.</p>
        <p class="synopsis-text">Yes, the ghosts have gone missing. And that means serious trouble.</p>
        <p class="synopsis-text">With the help of an eleven-year-old (or 111-year-old, but who's counting) ghost named Lark, trusty Bird, and a plump ghost spider, Evie must find a way to defeat the vicious Nighthouse Keeper responsible for the missing ghosts, save her otherworldly friends, and find her way home from the Dark Sun Side before she's trapped there forever.</p>`
    },

    {
        id: "children_8",
        cover:"images/children_8.png",
        title:"Thousand Worlds #3 Fox Snare",
        author:"Yoon Ha Lee",
        genre: "children",
        price:"799",
        rating:"3.99",
        synop:`<p class="synopsis-text">Best-selling author Rick Riordan presents a third space opera starring Korean animal spirits by Yoon Ha Lee, author of Dragon Pearl.</p>
        <p class="synopsis-text">While on a mission to cement peace between the Sun Clans and the Thousand Worlds, Min the fox spirit and her ghost brother Jun get stranded on a death planet with Haneul the dragon spirit and Sebin the tiger spirit. To survive, the young cadets will have to rely on all their wits, training, and supernatural abilities. And let's not forget the Dragon Pearl . . .</p>
        <p class="synopsis-text">This thrilling conclusion of the Thousand Worlds trilogy, told in alternating points of view, will put you under a delightful spell as it transports you to worlds full of both danger and wonder.</p>`
    },

    {
        id: "children_9",
        cover:"images/children_9.png",
        title:"The Cursed Moon",
        author:"Angela Cervantes",
        genre: "children",
        price:"799",
        rating:"4.03",
        synop:`<p class="synopsis-text">Celebrated author Angela Cervantes' brand new novel combines a chilling ghost story with her award-winning, heartfelt storytelling style. One two, the Caretaker's coming for you. Three-four, you'll breathe no more. Five-six, you'll float like sticks. Seven, eight, you'll meet your fate. Rafael Fuentes isn't easily scared. He loves writing ghost stories, reading scary books, and entertaining his friends with terrifying tales he creates on the spot. Rafa has come up against enough real-life scary situations that fictional hauntings seem like no big deal. Rafa's incarcerated mom is being released from jail soon, and will be coming to live with him, his sister, and their grandparents. For the first time in a while, Rafa feels a pit of fear growing in his stomach. To take his mind off his mom's return, Rafa spends an evening crafting the scariest ghost story he's ever told. As an eerie blood moon hangs in the sky, Rafa tells a group of friends about The Caretaker. The Caretaker is an evil ghost who lures unsuspecting kids into the neighborhood pond. . . and they don't ever come out. Rafa is really proud of his latest creation, until strange things start to happen around him. With a sinking feeling, Rafa realizes the Caretaker is real. Rafa has brought the ghost to life―and only he can stop him.</p>`
    },


    {
        id: "children_10",
        cover:"images/children_10.png",
        title:"Meowloween",
        author:"Diane Muldrow",
        genre: "children",
        price:"999",
        rating:"3.67",
        synop:`<p class="synopsis-text">It's Halloween night, also known as Meowl-o-ween! Cats are on the prowl, ready to give trick-or-treaters a fright. But one lost kitten is scared--will she find her way and join the fun?</p>
        <p class="synopsis-text">On frightful, delightful Meowl-o-ween, cats slink by carved pumpkins and prepare to spook the trick-or-treaters parading the streets. But not all of the cats are enjoying the flashing lights and costumes. A lone kitten is overwhelmed by the crowds and doesn't know which way to turn! This fresh Halloween tale is a rhyming read-aloud that shows even the smallest scaredy-cat can find the courage to overcome their fears and anxieties.</p>`
    },

    {
        id: "fiction_1",
        cover:"images/fiction_1.png",
        title:"Secrets of the Nile #1 What the River Knows",
        author:"Isabel Ibañez",
        genre: "fiction",
        price:"999",
        rating:"4.03",
        synop:`<p class="synopsis-text">Bolivian-Argentinian Inez Olivera belongs to the glittering upper society of nineteenth century Buenos Aires, and like the rest of the world, the town is steeped in old world magic that's been largely left behind or forgotten. Inez has everything a girl might want, except for the one thing she yearns the most: her globetrotting parents—who frequently leave her behind.</p>`
    },


    {
        id: "fiction_2",
        cover:"images/fiction_2.png",
        title:"The Reformatory",
        author:"Tananarive Due",
        genre: "fiction",
        price:"899",
        rating:"4.55",
        synop:`<p class="synopsis-text">A gripping, page-turning novel set in Jim Crow Florida that follows Robert Stephens Jr. as he's sent to a segregated reform school that is a chamber of terrors where he sees the horrors of racism and injustice, for the living, and the dead.</p>
        <p class="synopsis-text">Gracetown, Florida</p>
        <p class="synopsis-text">June 1950</p>
        <p class="synopsis-text">Twelve-year-old Robbie Stephens, Jr., is sentenced to six months at the Gracetown School for Boys, a reformatory, for kicking the son of the largest landowner in town in defense of his older sister, Gloria. So begins Robbie's journey further into the terrors of the Jim Crow South and the very real horror of the school they call The Reformatory.</p>
        <p class="synopsis-text">Robbie has a talent for seeing ghosts, or haints. But what was once a comfort to him after the loss of his mother has become a window to the truth of what happens at the reformatory. Boys forced to work to remediate their so-called crimes have gone missing, but the haints Robbie sees hint at worse things. Through his friends Redbone and Blue, Robbie is learning not just the rules but how to survive. Meanwhile, Gloria is rallying every family member and connection in Florida to find a way to get Robbie out before it's too late.</p>
        <p class="synopsis-text">The Reformatory is a haunting work of historical fiction written as only American Book Award–winning author Tananarive Due could, by piecing together the life of the relative her family never spoke of and bringing his tragedy and those of so many others at the infamous Dozier School for Boys to the light in this riveting novel.</p>`
    },

    {
        id: "fiction_3",
        cover:"images/fiction_3.png",
        title:"The Witches of Bone Hill",
        author:"Ava Morgyn",
        genre: "fiction",
        price:"799",
        rating:"3.76",
        synop:`<p class="synopsis-text">Cordelia Bone's meticulously crafted life and career in Dallas are crashing down around her thanks to a philandering husband with criminal debts.</p>
        <p class="synopsis-text">When her older, carefree sister, Eustace—a cannabis grower in Boulder, calls to inform her the great aunt they never met has died and they must travel to a small town in Connecticut to deal with the estate, she sees an opportunity to unload the house and save herself.</p>
        <p class="synopsis-text">But once there, the sisters learn they are getting much more than they bargained for. The Victorian mansion they stand to inherit is bound in a dynasty trust controlled by their late aunt's aging attorney who insists they inhabit the house and retain it but keeps them in the dark about the peculiar rituals of their ancestors. Not to mention a sexy, tattooed groundskeeper with a shrouded past who refuses to leave the carriage house and a crypt full of dead relatives looming at the property line.</p>
        <p class="synopsis-text">As both women grapple with their current predicament, they come face to face with a haunting family secret, the truth of what happened to their mother, and the enemy that's been stalking them from the shadows for generations. In a twisting torrent of terror and blood, the sisters must uncover the power within them to heal their fractured relationship, reverse their mysteriously declining health, and claim the lineage they wanted to escape but now must embrace if they are to survive at Bone Hill.</p>`
    },
    {
        id: "fiction_4",
        cover:"images/fiction_4.png",
        title:"Lilith",
        author:"Nikki Marmery",
        genre: "fiction",
        price:"799",
        rating:"3.65",
        synop:`<p class="synopsis-text">In the tradition of Madeline Miller and Claire North, Lilith is the story of the first woman, who was expelled from Paradise for disobedience. In this retelling of the Hebrew myth [NM1] that justified and explained woman's subjection to man, Lilith will have her revenge - however long it takes.</p>
        <p class="synopsis-text">In the Garden of Eden, at the beginning of time, an outrageous lie is born: that women are inferior.</p>
        <p class="synopsis-text">Lilith and Adam are equal and happy in the Garden of Eden. Until Adam decides Lilith should submit to his will and lie beneath him. She refuses - and is banished forever from Paradise.</p>
        <p class="synopsis-text">Demonized and sidelined, Lilith watches in fury as God creates Eve, the woman who accepts her submission. But Lilith has a secret: she has already tasted the fruit of the Tree of Knowledge. Endowed with Wisdom, she knows why Asherah - God's wife and equal, the Queen of Heaven - is missing. Lilith has a plan: she will rescue Eve, find Asherah, restore balance to the world and regain her rightful place in Paradise.</p>
        <p class="synopsis-text">Lilith's quest for justice drives her throughout history, from the ziggurats of Ancient Sumer to the court of Israel's Queen Jezebel, and to the side of a radical preacher in Roman Judea. In the modern age, as she observes the catastrophic consequences of a world built on inequality, Lilith finally understands what must be done to correct the wrong done to women - and all humankind - at the beginning of time.</p>
        <p class="synopsis-text">Inspired by ancient myths and suppressed scriptures, Lilith is a thought-provoking and ambitious novel with an evocative literary voice and a triumphantly engaging heroine.</p>`
    },


    {
        id: "fiction_5",
        cover:"images/fiction_5.png",
        title:"Murder by Degrees",
        author:"Ritu Mukerji",
        genre: "fiction",
        price:"799",
        rating:"3.81",
        synop:`<p class="synopsis-text">Murder by Degrees is a historical mystery set in 19th century Philadelphia, following a pioneering woman doctor as she investigates the disappearance of a young patient who is presumed dead.</p>
        <p class="synopsis-text">Philadelphia, 1875: It is the start of term at Woman's Medical College of Pennsylvania. Dr. Lydia Weston, professor and anatomist, is immersed in teaching her students in the lecture hall and hospital. When the body of a patient, Anna Ward, is dredged out of the Schuylkill River, the young chambermaid's death is deemed a suicide. But Lydia is suspicious and she is soon brought into the police investigation.</p>
        <p class="synopsis-text">Aided by a diary filled with cryptic passages of poetry, Lydia discovers more about the young woman she thought she knew. Through her skill at the autopsy table and her clinical acumen, Lydia draws nearer the truth. Soon a terrible secret, long hidden, will be revealed. But Lydia must act quickly, before she becomes the next target of those who wished to silence Anna</p>`
    },

    {
        id: "fiction_6",
        cover:"images/fiction_6.png",
        title:"The Scarlet Alchemist #1 The Scarlet Alchemist",
        author:"Kylie Lee Baker",
        genre: "fiction",
        price:"899",
        rating:"4.15",
        synop:`<p class="synopsis-text">Zilan dreams of becoming a royal alchemist, of providing for her family by making alchemical gold and gems for the wealthy to eat in order to stay young forever. But for now, she's trapped in her impoverished village in southern China, practicing an illegal form of alchemy to keep food on the table—resurrecting the dead, for a pric</p>
        <p class="synopsis-text">When Zilan finally has the chance to complete her imperial exams, she ventures to the capital to compete against the best alchemists in the country in tasks she'll be lucky to survive, let alone pass. On top of that, her reputation for raising the dead has followed her to the capital, and the Crown Prince himself seeks out her help, suspecting a coming assassination attempt.
        </p>
        <p class="synopsis-text">The more Zilan succeeds in her alchemy, the more she gets caught in the dangerous political games of the royal family. There are monsters lurking within the palace walls, and it's only a matter of time before they—and secrets of Zilan's past—catch up with her.</p>`
    },
    {
        id: "fiction_7",
        cover:"images/fiction_7.png",
        title:"Silent City",
        author:"Sarah Davis-Goff",
        genre: "fiction",
        price:"799",
        rating:"3.46",
        synop:`<p class="synopsis-text">The story of young female warrior who must start a revolution if she and those she loves are to survive.</p>
        <p class="synopsis-text">Orpen has always been an outlier in Phoenix City - the only outsider ever admitted to the ranks of the banshees, the female warriors who enforce order, and protect it from the skrake - the ravening creatures that have laid waste to the rest of the country, and gather at the city walls.</p>
        <p class="synopsis-text">Unrest is building in the city - a deadly sickness is spreading through the workers, while an unspoken disillusionment is creeping amongst the fighting women, weary of enforcing the all-male management's patriarchal rule, and of the cost, to their sisters, and to young new recruits, of upholding this order.</p>
        <p class="synopsis-text">Rumour has it that banshees have been taking matters into their own hands, and taking swift and violent revenge. When Orpen's troop leader falls under suspicion it becomes clear that Orpen will need to muster all her courage and prowess if she and her fellow banshees are going to be able to find a way to escape, and rebuild a society worth fighting for.</p>`
    },

    {
        id: "fiction_8",
        cover:"images/fiction_8.png",
        title:"Thorn Witch #1 Tonight, I Burn",
        author:"Katharine J. Adams",
        genre: "fiction",
        price:"799",
        rating:"3.81",
        synop:`<p class="synopsis-text">A thorn witch with the power to walk between the realms of Life and Death finds herself at the center of a magical rebellion—and a dangerous romance—that could destroy her coven and her soul in this dark and decadent debut.</p>
        <p class="synopsis-text">Thorns, Tides, Embers, Storms, and Ores. All five covens are bound in servitude to the tyrant High Warden of Halstett.</p>
        <p class="synopsis-text">Penny Albright is a daughter of the thorn coven, forced to patrol the veil between the realms of Life and Death. Each night, one thorn witch—and only one—must cross the veil by burning at the stake. Each morning, that witch draws on their magic to return. Failure to follow the rules risks the veil and risks them all.</p>
        <p class="synopsis-text">But one morning, Penny's favorite sister Ella doesn't return. And that night, determined to find her, Penny breaks the rules. She burns in secret. And she discovers that all isn't as it seems in Life or Death.</p>
        <p class="synopsis-text">Her journey leads her to Malin, a devastating lord with too many secrets; to Alice, a mysterious captive prophet; and to a rebellion brewing in the shadows beneath the city. And as Penny's world splits, she'll face a devastating choice. Because it's not just her sister's life that hangs in the balance. It's the fate of all magic.</p>
        <p class="synopsis-text">All it takes is one witch—and one spark—to set the world ablaze.</p>`
    },

    {
        id: "fiction_9",
        cover:"images/fiction_9.png",
        title:"The King-Killing Queen",
        author:"Shawn Speakman",
        genre: "fiction",
        price:"899",
        rating:"4.35",
        synop:`<p class="synopsis-text">In this first book of a new trilogy author Anna Smith Spark calls “a dark love letter to high fantasy,” a woman discovers her unknown past carries with it a terrible future.</p>
        <p class="synopsis-text">When Alafair Goode lay wounded during his quest to destroy Mordreadth the Great Darkness, a witch magicked and saved the future High King's life to fulfill his destiny. Thereafter, all born to his line also cannot die, to be only undone by natural death.</p>
        <p class="synopsis-text">Decades later, Sylvie Raventress is the devoted apprentice to the Master Historian stepbrother of the High King. It is a life of scholarly pursuit and privilege where one day she will take her instructor's place and write her own histories. But beside Alafair's deathbed, Sylvie and his scions learn a surprising truth—she is no orphan but is his named heir. Worse, when he dies, the witch's curse is no more, leaving all of them suddenly mortal and vulnerable.</p>
        <p class="synopsis-text">With her siblings loathing Sylvie's selection and vying for her throne, she must rely on a Fae guide, a disgraced former First Knight, and a cantankerous light-weaver to restore the fracturing kingdom and become High Queen. And yet the thing none of them know is destiny has its own part to play too.</p>`
    },
    {
        id: "fiction_10",
        cover:"images/fiction_10.png",
        title:"The Hild Sequence #2 Menewood",
        author:"Nicola Griffith",
        genre: "fiction",
        price:"900",
        rating:"4.53",
        synop:`<p class="synopsis-text">In the much anticipated sequel to Hild, Nicola Griffith's Menewoodtransports readers back to seventh-century Britain, a land of rival kings and religions poised for epochal change.</p>
        <p class="synopsis-text">Hild is no longer the bright child who made a place in Edwin Overking's court with her seemingly supernatural insight. She is eighteen, honed and tested, the formidable Lady of Elmet, now building her personal stronghold in the valley of Menewood.
        </p>
        <p class="synopsis-text">But Edwin needs his most trusted advisor. Old alliances are fraying. Younger rivals are snapping at his heels. War is brewing--bitter war, winter war. Not knowing who to trust he becomes volatile and unpredictable. Hild begins to understand the true extent of the chaos ahead, and now she must navigate the turbulence and fight to protect both the kingdom and her own people.</p>
        <p class="synopsis-text">Hild will face the losses and devastation of total war, and then she must find a new strength, the implacable determination to forge a radically different path for herself and her people. In the valley, her last redoubt, her community slowly takes root. She trains herself and her unexpected allies in new ways of thinking as she prepares for one last wager: risking all on a single throw for a better future...</p>
        <p class="synopsis-text">In the last decade, Hild has become a beloved classic of epic storytelling. Menewood picks up where that journey left off, and exceeds it in every way</p>`
    },
    {
        id: "nonfiction_1",
        cover:"images/nonfiction_1.png",
        title:"How to Say Babylon: A Memoir",
        author:"Safiya Sinclair",
        genre: "nonfiction",
        price:"900",
        rating:"4.47",
        synop:`<p class="synopsis-text">With echoes of Educated and Born a Crime, How to Say Babylon is the stunning story of the author's struggle to break free of her rigid Rastafarian upbringing, ruled by her father's strict patriarchal views and repressive control of her childhood, to find her own voice as a woman and poet.</p>
        <p class="synopsis-text">Throughout her childhood, Safiya Sinclair's father, a volatile reggae musician and militant adherent to a strict sect of Rastafari, became obsessed with her purity, in particular, with the threat of what Rastas call Babylon, the immoral and corrupting influences of the Western world outside their home. He worried that womanhood would make Safiya and her sisters morally weak and impure, and believed a woman's highest virtue was her obedience.</p>
        <p class="synopsis-text">In an effort to keep Babylon outside the gate, he forbade almost everything. In place of pants, the women in her family were made to wear long skirts and dresses to cover their arms and legs, head wraps to cover their hair, no make-up, no jewelry, no opinions, no friends. Safiya's mother, while loyal to her father, nonetheless gave Safiya and her siblings the gift of books, including poetry, to which Safiya latched on for dear life. And as Safiya watched her mother struggle voicelessly for years under housework and the rigidity of her father's beliefs, she increasingly used her education as a sharp tool with which to find her voice and break free. Inevitably, with her rebellion comes clashes with her father, whose rage and paranoia explodes in increasing violence. As Safiya's voice grows, lyrically and poetically, a collision course is set between them.</p>
        <p class="synopsis-text">How to Say Babylon is Sinclair's reckoning with the culture that initially nourished but ultimately sought to silence her; it is her reckoning with patriarchy and tradition, and the legacy of colonialism in Jamaica. Rich in lyricism and language only a poet could evoke, How to Say Babylon is both a universal story of a woman finding her own power and a unique glimpse into a rarefied world we may know how to name, Rastafari, but one we know little about.</p>`
    },
    {
        id: "nonfiction_2",
        cover:"images/nonfiction_2.png",
        title:"The Sisterhood: The Secret History of Women at the CIA",
        author:"Liza Mundy",
        genre: "nonfiction",
        price:"700",
        rating:"4.40",
        synop:`<p class="synopsis-text">A thrilling and monumental new history of the CIA that reveals how women have always played crucial, often unacknowledged roles in American spycraft, a hidden “sisterhood” of spies, analysts, operatives, and manhunters who, over a half-century, kept the free world safe and, more than once, saved it—from the New York Times bestselling author of Code Girls</p>
        <p class="synopsis-text">Upon its creation in 1947, the Central Intelligence Agency instantly became one of the most important spy services in the world. Like every male-dominated workplace in Eisenhower America, the growing intelligence agency needed women to type memos, send messages, manipulate expense accounts, and keep secrets. Despite discrimination—even because of it—these clerks and secretaries rose to become some of the shrewdest, toughest operatives the agency employed. Because women were seen as unimportant, they moved unnoticed on the streets of Bonn, Geneva, and Moscow, stealing secrets under the noses of the KGB. Back at headquarters, they built the CIA's critical archives—first by hand, then by computer.</p>
        <p class="synopsis-text">These women also battled institutional stereotyping and beat it. Men argued they alone could run spy rings. But the women proved they could be spymasters, too. During the Cold War, women made critical contributions to U.S. intelligence, sometimes as officers, sometimes as unpaid spouses, working together as their numbers grew. The women also made unique sacrifices, giving up marriage, children, even their own lives.</p>
        <p class="synopsis-text">They noticed things that the men at the top didn't see. In the final years of the twentieth century, it was a close-knit network of female CIA analysts who warned about the rising threat of Al Qaeda. After the 9/11 attacks, women rushed to join the fight as a new job, “targeter,” came to prominence. They showed that painstaking data analysis would be crucial to the post-9/11 national security landscape—an effort that culminated spectacularly in the CIA's successful efforts to track down and kill Osama Bin Laden and, later, Ayman al-Zawahiri.</p>
        <p class="synopsis-text">With the same meticulous reporting and storytelling verve that she brought to her New York Times bestseller Code Girls, Liza Mundy has written an indispensable and sweeping history that reveals how women at the CIA ushered in the modern intelligence age.</p>`
    },
    {
        id: "nonfiction_3",
        cover:"images/nonfiction_3.png",
        title:"Emperor of Rome: Ruling the Ancient Roman World",
        author:"Mary Beard",
        genre: "nonfiction",
        price:"800",
        rating:"4.20",
        synop:`<p class="synopsis-text">A sweeping account of the social and political world of the Roman emperors by “the world's most famous classicist” ( Guardian ). In her international bestseller SPQR , Mary Beard told the thousand-year story of ancient Rome. Now she shines her spotlight on the emperors who ruled the Roman empire, from Julius Caesar (assassinated 44 BCE) to Alexander Severus (assassinated 235 CE). Emperor of Rome is not your usual chronological account of Roman rulers, one after the mad Caligula, the monster Nero, the philosopher Marcus Aurelius. Beard asks bigger What power did emperors actually have? Was the Roman palace really so bloodstained? She tracks down the emperor at home, at the races, on his travels, even on his way to heaven. She introduces his wives and lovers, rivals and slaves, court jesters and soldiers―and the ordinary people who pressed begging letters into his hands. Emperor of Rome goes directly to the heart of Roman (and our own) fantasies about what it was to be Roman, offering an account of Roman history as it has never been presented before.</p>`
    },  
    {
        id: "nonfiction_4",
        cover:"images/nonfiction_4.png",
        title:"Determined: A Science of Life without Free Will",
        author:"Robert M. Sapolsky",
        genre: "nonfiction",
        price:"700",
        rating:"4.37",
        synop:`<p class="synopsis-text">One of our great behavioral scientists, the bestselling author of Behave, plumbs the depths of the science and philosophy of decision-making to mount a devastating case against free will, an argument with profound consequences.</p>
        <p class="synopsis-text">Robert Sapolsky's Behave, his now classic account of why humans do good and why they do bad, pointed toward an unsettling conclusion: we may not grasp the precise marriage of nature and nurture that creates the physics and chemistry at base of human behavior, but that doesn't mean it doesn't exist. Now, in Determined, Sapolsky takes his argument all the way, mounting a brilliant (and in his inimitable way, delightful) full-frontal assault on the pleasant fantasy that there's some separate self telling our biology what to do.</p>
        <p class="synopsis-text">Determined offers a marvelous synthesis of what we know about how consciousness works--the tight weave between reason and emotion, and between stimulus and response, in the moment and over a life. One by one, Sapolsky tackles all the major arguments for free will and takes them out, cutting a path through the thickets of chaos and complexity science and quantum physics, as well as touching ground on some of the wilder shores of philosophy. He shows us that the history of medicine is in no small part the history of learning that fewer and fewer things are somebody's "fault"; for example, for centuries we thought seizures were a sign of demonic possession. Yet as he acknowledges, it's very hard, and at times impossible, to uncouple from our zeal to judge others, and to judge ourselves. Sapolsky applies the new understanding of life beyond free will to some of our most essential questions around punishment, morality, and living well together. By the end, Sapolsky argues that while living our daily lives recognizing that we have no free will is going to be monumentally difficult, doing so is not going to result in anarchy, pointlessness and existential malaise. Instead, it will make for a much more humane world.</p>`
    },
   {
        id: "nonfiction_5",
        cover:"images/nonfiction_5.png",
        title:"The Nutmeg's Curse: Parables for a Planet in Crisis",
        author:"Amitav Ghosh",
        genre: "nonfiction",
        price:"700",
        rating:"4.25",
        synop:`<p class="synopsis-text">In this ambitious successor to The Great Derangement, acclaimed writer Amitav Ghosh finds the origins of our contemporary climate crisis in Western colonialism's violent exploitation of human life and the natural environment.</p>
        <p class="synopsis-text">A powerful work of history, essay, testimony, and polemic, Amitav Ghosh's new book traces our contemporary planetary crisis back to the discovery of the New World and the sea route to the Indian Ocean. The Nutmeg's Curse  argues that the dynamics of climate change today are rooted in a centuries-old geopolitical order constructed by Western colonialism. At the center of Ghosh's narrative is the now-ubiquitous spice nutmeg. The history of the nutmeg is one of conquest and exploitation—of both human life and the natural environment. In Ghosh's hands, the story of the nutmeg becomes a parable for our environmental crisis, revealing the ways human history has always been entangled with earthly materials such as spices, tea, sugarcane, opium, and fossil fuels. Our crisis, he shows, is ultimately the result of a mechanistic view of the earth, where nature exists only as a resource for humans to use for our own ends, rather than a force of its own, full of agency and meaning.</p>
        <p class="synopsis-text">Writing against the backdrop of the global pandemic and the Black Lives Matter protests, Ghosh frames these historical stories in a way that connects our shared colonial histories with the deep inequality we see around us today. By interweaving discussions on everything from the global history of the oil trade to the migrant crisis and the animist spirituality of Indigenous communities around the world, The Nutmeg's Curse offers a sharp critique of Western society and speaks to the profoundly remarkable ways in which human history is shaped by non-human forces.</p>`
    },


    {
        id: "nonfiction_6",
        cover:"images/nonfiction_6.png",
        title:"The Night Parade",
        author:"Jami Nakamura Lin",
        genre: "nonfiction",

        price:"800",
        rating:"4.52",
        synop:`<p class="synopsis-text">In the groundbreaking tradition of In the Dream House and The Collected Schizophrenias, a gorgeously illustrated speculative memoir that draws upon the Japanese myth of the Hyakki Yagyo—the Night Parade of One Hundred Demons—to shift the cultural narrative around mental illness, grief, and remembrance.</p>
        <p class="synopsis-text">Are these the only two stories? The one where you defeat your monster, and the other where you succumb to it?</p>
        <p class="synopsis-text">Jami Nakamura Lin spent much of her life feeling monstrous for reasons outside of her control. As a young woman with undiagnosed bipolar disorder, much of her adolescence was marked by periods of extreme rage and an array of psychiatric treatments, and her relationships suffered as a result, especially as her father's cancer grasped hold of their family.</p>
        <p class="synopsis-text">As she grew older and learned to better manage her episodes, Lin grew frustrated with the familiar pattern she found in mental illness and grief narratives, and their focus on recovery. She sought comfort in the stories she'd loved as a child—tales of ghostly creatures known to terrify in the night. Through the lens of the yokai and other figures from Japanese, Taiwanese, and Okinawan legend, she set out to interrogate the very notion of recovery and the myriad ways fear of difference shapes who we are as a people.</p>
        <p class="synopsis-text">Featuring stunning illustrations by her sister, Cori Nakamura Lin, and divided into the four acts of a traditional Japanese narrative structure, The Night Parade is a genre-bending and deeply emotional memoir that mirrors the sensation of being caught between realms. Braiding her experience of mental illness, the death of her father, the grieving process, and other haunted topics with storytelling tradition, Jami Nakamura Lin shines a light into dark corners, driven by a question: How do we learn to live with the things that haunt us?</p>`
    },


    {
        id: "nonfiction_7",
        cover:"images/nonfiction_7.png",
        title:"MCU: The Reign of Marvel Studios",
        author:"Joanna Robinson, Dave Gonzales, Gavin Edwards",
        genre: "nonfiction",
        price:"700",
        rating:"4.29",
        synop:`<p class="synopsis-text">INSTANT NEW YORK TIMES BESTSELLER "A superb chronicle of how Marvel Studios conquered Hollywood…. This definitive account of the Hollywood juggernaut thrills." ― Publishers Weekly , starred review</p>
        <p class="synopsis-text">The unauthorized, behind-the-scenes story of the stunning rise―and suddenly uncertain reign―of the most transformative cultural phenomenon of our the Marvel Cinematic Universe. Marvel Entertainment was a moribund toymaker not even twenty years ago. Today, Marvel Studios is the dominant player both in Hollywood and in global pop culture. How did an upstart studio conquer the world? In MCU , beloved culture writers Joanna Robinson, Dave Gonzales, and Gavin Edwards draw on more than a hundred interviews with actors, producers, directors, and writers to present the definitive chronicle of Marvel Studios and its sole, ongoing production, the Marvel Cinematic Universe. For all its outward success, the studio was forged by near-constant conflict, from the contentious hiring of Robert Downey Jr. for its 2008 debut, Iron Man , all the way up to the disappointment of Ant-Man and the Quantumania and shocking departures of multiple Marvel executives in 2023. Throughout, the authors demonstrate that the original genius of Marvel was its resurrection and modification of Hollywood's old studio system. But will it survive its own spectacular achievements? Dishy and authoritative, MCU is the first book to tell the Marvel Studios story in full―and an essential, effervescent account of American mass culture.</p>`
    },

    {
        id: "nonfiction_8",
        cover:"images/nonfiction_8.png",
        title:"Leslie F*cking Jones",
        author:"Leslie Jones",
        genre: "nonfiction",
        price:"900",
        rating:"4.16",
        synop:`<p class="synopsis-text">Hey you guys, it's Leslie. I'm excited to share my story with you.</p>
        <p class="synopsis-text">Now, I'm gonna be honest: Some of the details might be vague because a b*tch is fifty-five and she's smoked a ton of weed. But while bits might be a touch hazy, I can promise you the underlying truth is REAL. Whether I'm talking about my childhood growing up in the South, my early stand-up days driving from gig to gig through the darkest parts of our country and praying I wouldn't get murdered, what Chris Rock told Lorne Michaels, that time I wanted to shoot Whoopi Goldberg on SNL, and yeah, I'll tell you all about Ghostbusters and the nudes and Supermarket Sweep and The Daily Show . . . I'm sharing it all in these pages. It's not easy being a woman in comedy, especially when you're a tall-*ss Black woman with a trumpet voice. I have to fight so that no one takes me for granted, and no one takes advantage. These are the stories that explain why. (Cue the Law & Order theme.)</p>`
    },


    {
        id: "nonfiction_9",
        cover:"images/nonfiction_9.png",
        title:"Creep: Accusations and Confessions",
        author:"Myriam Gurba",
        genre: "nonfiction",
        price:"800",
        rating:"4.40",
        synop:`<p class="synopsis-text">A ruthless and razor-sharp essay collection that tackles the pervasive, creeping oppression and toxicity that has wormed its way into society—in our books, schools, and homes, as well as the systems that perpetuate them—from the acclaimed author of Mean, and one of our fiercest, foremost explorers of intersectional Latinx identity.</p>
        <p class="synopsis-text">A creep can be a singular figure, a villain who makes things go bump in the night. Yet creep is also what the fog does—it lurks and slithers into place, muffling screams, obscuring the truth, and providing cover for those prowling within it.</p>
        <p class="synopsis-text">Now, Myriam Gurba delves into the sociology of “creep,” taking a deep dive into the dark recesses of the toxic traditions and the people that plague today's America, analyzing the abusers who haunt our books, schools, and homes. Blending cultural criticism with her powerful, deeply personal experiences, Gurba examines the ways in which oppression is collectively enacted, sustaining ecosystems that unfairly perpetuate suffering and premature death to our most vulnerable. Yet identifying individual creeps, social groups, and cultures is only the beginning; the bulk of the book examines how we as individuals, communities, and institutions can challenge creeps and rid ourselves of the fog that seeks to blind us.</p>
        <p class="synopsis-text">With her brilliant mind, brazen style, and wry humor, Gurba implicates everyone from Joan Didion, Mexican sterotypes to her former abuser. Braiding her own history and identity throughout, she passionately argues for a new way of conceptualizing oppression and offers tools that can help liberate us all.</p>`
    },

    {
        id: "nonfiction_10",
        cover:"images/nonfiction_10.png",
        title:"This Country: Searching for Home in (Very) Rural America",
        author:"Navied Mahdavian",
        genre: "nonfiction",
        price:"800",
        rating:"4.13",
        synop:`<p class="synopsis-text">A gorgeously illustrated and written debut graphic memoir about belonging, identity, and making a home in the remote American West, by New Yorker cartoonist Navied Mahdavian.</p>
        <p class="synopsis-text">Before Navied Mahdavian moved with his wife and dog in November of 2016 from San Francisco to an off-the-grid cabin in rural Idaho, he had never fished, gardened, hiked, hunted, or lived in a snowy place. But there, he could own land, realize his dream of being an artist, and start a family—the Millennial dream. Over the next three years, Mahdavian leaned into the wonders of the natural Idaho landscape and found himself adjusting to and enjoying a slower pace of living. But beyond the boundaries of his six acres, he was confronted with the realities of America's political shifts and forced to confront the Do I belong here?</p>
        <p class="synopsis-text">Mahdavian's beautifully written and unflinchingly honest graphic memoir charts his growth and struggles as an artist, citizen, and new father. It celebrates his love of place and honors the relationships he makes in rural America, touching on dynamics like culture, environment, and identity in America, and even articulating difficult moments of racism and brutality he found there as a Middle Eastern American. With wit, compassion, and a sense of humor, Mahdavian's insider perspective offers a unique portrait of one of the most remote and wild areas of the American West.</p>`
    },


    {
        id: "selfhelp_1",
        cover:"images/selfhelp_1.png",
        title:"The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change",
        author:"Stephen R. Covey",
        genre: "selfhelp",
        price:"900",
        rating:"4.15",
        synop:`<p class="synopsis-text">When Stephen Covey first released The Seven Habits of Highly Effective People, the book became an instant rage because people suddenly got up and took notice that their lives were headed off in the wrong direction; and more than that, they realized that there were so many simple things they could do in order to navigate their life correctly. This book was wonderful education for people, education in how to live life effectively and get closer to the ideal of being a ‘success' in life.</p>
        <p class="synopsis-text">But not everyone understands Stephen Covey's model fully well, or maybe there are some people who haven't read it yet. This is definitely true because we still see so much failure all around us. Now, I am not saying that by using Covey's model, or anyone else's model for that matter, you can become a sure-shot success, but at least we should have seen many more successes around us already judging by the number of copies the book has sold! So, where is the shortcoming?</p>
        <p class="synopsis-text">There are two main problems here, and we are talking only about the people who have read the book already. The first problem is that most people are too lazy to implement the ideals of Stephen Covey in their lives. They consider his masterpiece of a book as a mere coffee-table book or a book that you use for light reading when you are traveling and then forget all about it. They do not realize that this book contains life-changing information. Or, they take the information and do not make the effort to actually utilize it so that it becomes knowledge for them.</p>
        <p class="synopsis-text">The second problem is that a lot of people have a myopic view of Covey's ideals. These are people who are impressed by the book already. If you ask them what the seven habits are, they can rattle them off end to end, but then they miss the larger picture. They do not understand that Covey was trying to tell more than he wrote in words. There are hidden implications in this book, yes, and a lot of people have just failed to see through them.</p>
        <p class="synopsis-text">That is what we are trying to do. We are trying to show you how Covey's book, or rather, his model, was a complete model in itself. There was nothing amiss about it. If you implement it, there should be no aspect of your life that should go untouched. The only thing is that you have to understand these ideals and try to implement them in your life.</p>
        <p class="synopsis-text">But, before we barge into that area, it is extremely important to understand what these ideals are. What was the model that was propounded by Stephen Covey in his mega-famous book? We shall begin by trying to understand his model first, and then interpret it in such a way that it pertains to every aspect of our life.</p>`
    },


    {
        id: "selfhelp_2",
        cover:"images/selfhelp_2.png",
        title:"How to Win Friends and Influence People",
        author:"Dale Carnegie",
        genre: "selfhelp",
        price:"550",
        rating:"4.22",
        synop:`<p class="synopsis-text">You can go after the job you want...and get it! You can take the job you have...and improve it! You can take any situation you're in...and make it work for you!</p>
        <p class="synopsis-text">Since its release in 1936, How to Win Friends and Influence People has sold more than 30 million copies. Dale Carnegie's first book is a timeless bestseller, packed with rock-solid advice that has carried thousands of now famous people up the ladder of success in their business and personal lives.</p>
        <p class="synopsis-text">As relevant as ever before, Dale Carnegie's principles endure, and will help you achieve your maximum potential in the complex and competitive modern age.</p>
        <p class="synopsis-text">Learn the six ways to make people like you, the twelve ways to win people to your way of thinking, and the nine ways to change people without arousing resentment.</p>`
    },


    {
        id: "selfhelp_3",
        cover:"images/selfhelp_3.png",
        title:"Think and Grow Rich",
        author:"Napoleon Hill",
        price:"700",
        genre: "selfhelp",
        rating:"4.18",
        synop:`<p class="synopsis-text">Think and Grow Rich is a guide to success by Napoleon Hill, which was first published in 1937 following the Great Depression. It was immediately welcomed as an antidote to hard times and remained a bestseller for decades. Many people still find its philosophy of positive thinking and its specific steps for achieving wealth both relevant and life-changing. Hill contends that our thoughts become our reality, and offers a plan and principles for transforming thoughts into riches, including visualization, affirmation, creating a Master Mind group, defining a goal, and planning.</p>`
    },


    {
        id: "selfhelp_4",
        cover:"images/selfhelp_4.png",
        title:"Non Violent Communication A Language of Life",
        author:"Marshall B. Rosenberg",
        genre: "selfhelp",
        price:"900",
        rating:"4.34",
        synop:`<p class="synopsis-text">How to communicate with people without being judgemental or threatening</p>`
    },
    {
        id: "selfhelp_5",
        cover:"images/selfhelp_5.png",
        title:"Anger: Wisdom for Cooling the Flames",
        author:"Thich Nhat Hanh",
        genre: "selfhelp",
        price:"900",
        rating:"4.07",
        synop:`<p class="synopsis-text">It was under the bodhi tree in India twenty-five centuries ago that Buddha achieved the insight that three states of mind were the source of all our unhappiness: wrong knowing, obsessive desire, and anger. All are difficult, but in one instant of anger—one of the most powerful emotions—lives can be ruined, and health and spiritual development can be destroyed. With exquisite simplicity, Buddhist monk and Vietnam refugee Thich Nhat Hanh gives tools and advice for transforming relationships, focusing energy, and rejuvenating those parts of ourselves that have been laid waste by anger. His extraordinary wisdom can transform your life and the lives of the people you love, and in the words of Thich Nhat Hanh, can give each reader the power to "change everything."</p>`
    },
    {
        id: "selfhelp_6",
        cover:"images/selfhelp_6.png",
        title:"Surrounded by Idiots",
        author:"Thomas Erikson",
        genre: "selfhelp",
        price:"600",
        rating:"3.47",
        synop:`<p class="synopsis-text">A runaway bestseller in Sweden that has sold more than a million copies worldwide, Surrounded by Idiots shares a groundbreaking new method of understanding the people around you that will change how you interact with everyone from your coworkers to your spouse.</p>
        <p class="synopsis-text">Author Thomas Erikson explains that there are four key behavior types that define how we interact with and perceive the people around us. Understanding someone's pattern of behavior is the key to successful communication. Erikson breaks down the four kinds of behavior types—Reds who are dominant and commanding, Yellows who are social and optimistic, Greens who are laid back and friendly, and Blues who are analytical and precise—and explains how to identify and interact with each type of person. Instead of being bogged down with overly technical categorizations, the simple four color system allows you to speedily identify a friend or coworker and adjust how you speak and share with them.</p>
        <p class="synopsis-text">Surrounded by Idiots is full of practical information for interacting with people based on their color, including the strengths and weaknesses of all the profiles, how to give positive and negative feedback to each, and the best way to word an email when writing to someone with a different profile.</p>`
    },
    {
        id: "selfhelp_7",
        cover:"images/selfhelp_7.png",
        title:"The 4-Hour Workweek",
        author:"Timothy Ferriss",
        genre: "selfhelp",
        price:"700",
        rating:"3.92",
        synop:`<p class="synopsis-text">What do you do? Tim Ferriss has trouble answering the question. Depending on when you ask this controversial Princeton University guest lecturer, he might answer: "I race motorcycles in Europe." "I ski in the Andes." "I scuba dive in Panama." "I dance tango in Buenos Aires." He has spent more than five years learning the secrets of the New Rich, a fast-growing subculture who has abandoned the "deferred-life plan" and instead mastered the new currencies-time and mobility-to create luxury lifestyles in the here and now. Whether you are an overworked employee or an entrepreneur trapped in your own business, this book is the compass for a new and revolutionary world.</p>`
    },
    {
        id: "selfhelp_8",
        cover:"images/selfhelp_8.png",
        title:"Smart Brevity: The Power of Saying More with Less",
        author:"Jim Vandehei",
        genre: "selfhelp",
        price:"800",
        rating:"4.04",
        synop:`<p class="synopsis-text">Brevity is confidence. Length is fear. This is the guiding principle of Smart Brevity, a communication formula built by Axios journalists to prioritize essential news and information, explain its impact and deliver it in a concise and visual format. Now, the co-founders of Axios have created an essential guide for communicating effectively and efficiently using Smart Brevity—think Strunk and White's Elements of Style for the digital age.</p>
        <p class="synopsis-text">In  SMART The Power of Saying More with Less ,   Axios co-founders Jim VandeHei, Mike Allen, and Roy Schwartz teach readers how to say more with less in virtually any format. They also share communications lessons learned from their decades of experience in media, business and communications.</p>`
    },
   {
        id: "selfhelp_9",
        cover:"images/selfhelp_9.png",
        title:"The Gifts of Imperfection",
        author:"Brené Brown",
        genre: "selfhelp",
        price:"600",
        rating:"4.25",
        synop:`<p class="synopsis-text">In this groundbreaking New York Times best seller, Dr. Brené Brown, a research professor and thought leader on vulnerability, courage, worthiness, and shame, shares ten guideposts on the power of Wholehearted living—a way of engaging with the world from a place of worthiness.</p>`
    },
    {
        id: "selfhelp_10",
        cover:"images/selfhelp_10.png",
        title:"You Can Heal Your Life",
        author:"Louise L. Hay",
        genre: "selfhelp",
        price:"900",
        rating:"4.15",
        synop:`<p class="synopsis-text">Louise's key message in this powerful work is: “If we are willing to do the mental work, almost anything can be healed.” Louise explains how limiting beliefs and ideas are often the cause of illness, and how you can change your thinking…and improve the quality of your life.</p>`
    },
    {
        id: "newArrival_1",
        cover:"images/newarrival_1.png",
        title: "Godly Heathens: A Novel (The Ouroboros, 1)",
        author: "Edgmon, H.E.",
        price: "999",
        genre:"Fiction",
        synop:`<p class="synopsis-text">Infatuation. Reincarnation. Damnation.</p><p>Gem Echols is a nonbinary Seminole teen living in the tiny town of Gracie, Georgia. Known for being their peers' queer awakening, Gem leans hard on charm to disguise the anxious mess they are beneath. The only person privy to their authentic self is another trans kid, Enzo, who's a thousand long, painful miles away in Brooklyn.</p>
        <p class="synopsis-text"> Gem Echols is a nonbinary Seminole teen living in the tiny town of Gracie, Georgia. Known for being their peers' queer awakening, Gem leans hard on charm to disguise the anxious mess they are beneath. The only person privy to their authentic self is another trans kid, Enzo, who's a thousand long, painful miles away in Brooklyn.</p>
        <p class="synopsis-text"> But even Enzo doesn't know about Gem's dreams, haunting visions of magic and violence that have always felt too real. So how the hell does Willa Mae Hardy? The strange new girl in town acts like she and Gem are old companions, and seems to know things about them they've never told anyone else.</p>
        <p class="synopsis-text">When Gem is attacked by a stranger claiming to be the Goddess of Death, Willa Mae saves their life and finally offers some answers. She and Gem are reincarnated gods who've known and loved each other across lifetimes. But Gem or at least who Gem used to be - hasn't always been the most benevolent deity. They've made a lot of enemies in the pantheon—enemies who, like the Goddess of Death, will keep coming.
        </p>
        <p class="synopsis-text">It's a good thing they've still got Enzo. But as worlds collide and the past catches up with the present, Gem will discover that everyone has something to hide.
        </p>`,
        rating:"4.08"
    },
    {
        id: "newArrival_2",
        cover:"images/newarrival_2.png",
        title: "Bookshops & Bonedust",
        author: "Travis Baldree",
        price: "899",
        genre:"Fiction",
        synop:`<p class="synopsis-text">When an injury throws a young, battle-hungry orc off her chosen path, she may find that what we need isn't always what we seek.

 </p>
        <p class="synopsis-text">In Bookshops & Bonedust, a prequel to Legends & Lattes, New York Times bestselling author Travis Baldree takes us on a journey of high fantasy, first loves, and second-hand books.
        </p>
        <p class="synopsis-text">Viv's career with the notorious mercenary company Rackam's Ravens isn't going as planned.</p>
        <p class="synopsis-text">Wounded during the hunt for a powerful necromancer, she's packed off against her will to recuperate in the sleepy beach town of Murk—so far from the action that she worries she'll never be able to return to it.
        </p>
        <p class="synopsis-text">What's a thwarted soldier of fortune to do?</p>
        <p class="synopsis-text">Spending her hours at a beleaguered bookshop in the company of its foul-mouthed proprietor is the last thing Viv would have predicted, but it may be both exactly what she needs and the seed of changes she couldn't possibly imagine.
        
        </p>
        <p class="synopsis-text">Still, adventure isn't all that far away. A suspicious traveler in gray, a gnome with a chip on her shoulder, a summer fling, and an improbable number of skeletons prove Murk to be more eventful than Viv could have ever expected.</p>   
        `,

        rating:"4.34"
    },
    {
        id: "newArrival_3",
        cover:"images/newarrival_3.png",
        title: "The Mystery Guest",
        author: "Nita Prose",
        price: "759",
        genre:"Fiction",
        synop:`
        <p class="synopsis-text">When an acclaimed author dies at the Regency Grand Hotel, it's up to a fastidious maid to uncover the truth, no matter how dirty—in a standalone novel featuring Molly Gray, from the #1 New York Times bestselling author of The Maid, a Good Morning America Book Club Pick.
        </p>
        <p class="synopsis-text">Molly Gray is not like anyone else. With her flair for cleaning and proper etiquette, she has risen through the ranks of the glorious five-star Regency Grand Hotel to become the esteemed Head Maid. But just as her life reaches a pinnacle state of perfection, her world is turned upside down when J.D. Grimthorpe, the world-renowned mystery author, drops dead—very dead—on the hotel's tea room floor.
        </p>   
        <p class="synopsis-text">When Detective Stark, Molly's old foe, investigates the author's unexpected demise, it becomes clear that this death was murder most foul. Suspects abound, and everyone wants to who killed J.D. Grimthorpe? Was it Lily, the new Maid-in-Training? Or was it Serena, the author's secretary? Could Mr. Preston, the hotel's beloved doorman, be hiding something? And is Molly really as innocent as she seems?
        </p>
        <p class="synopsis-text">As the case threatens the hotel's pristine reputation, Molly knows she alone holds the key to unlocking the killer's identity. But that key is buried deep in her past—because long ago, she knew J.D. Grimthorpe. Molly begins to comb her memory for clues, revisiting her childhood and the mysterious Grimthorpe mansion where she and her dearly departed Gran once worked side by side. With the entire hotel under investigation, Molly must solve the mystery post-haste. If there's one thing Molly knows for sure, it's that dirty secrets don't stay buried forever...
        </p>`, 

        rating:"4.03"
    },
    {
        id: "newArrival_4",
        cover:"images/newarrival_4.png",
        title: "Check & Mate",
        author: "Ali Hazelwood",
        price: "849",
        genre:"Romance",
        synop:`
        <p class="synopsis-text">In this clever and swoonworthy YA debut from the New York Times bestselling author of The Love Hypothesis, life's moving pieces bring rival chess players together in a match for the heart.
</p>
        <p class="synopsis-text">Mallory Greenleaf is done with chess. Every move counts nowadays; after the sport led to the destruction of her family four years earlier, Mallory's focus is on her mom, her sisters, and the dead-end job that keeps the lights on. That is, until she begrudgingly agrees to play in one last charity tournament and inadvertently wipes the board with notorious "Kingkiller" Nolan Sawyer: current world champion and reigning Bad Boy of chess.
</p>   
        <p class="synopsis-text">Nolan's loss to an unknown rook-ie shocks everyone. What's even more confusing? His desire to cross pawns again. What kind of gambit is Nolan playing? The smart move would be to walk away. Resign. Game over. But Mallory's victory opens the door to sorely needed cash-prizes and despite everything, she can't help feeling drawn to the enigmatic strategist....
</p>
        <p class="synopsis-text">As she rockets up the ranks, Mallory struggles to keep her family safely separated from the game that wrecked it in the first place. And as her love for the sport she so desperately wanted to hate begins to rekindle, Mallory quickly realizes that the games aren't only on the board, the spotlight is brighter than she imagined, and the competition can be fierce (-ly attractive. And intelligent...and infuriating...)
</p> `, 
        rating:"4.11"
    },
    {
        id: "newArrival_5",
        cover:"images/newarrival_5.png",
        title: "Iron Flame",
        author: "Rebecca Yarros",
        price: "900",
        genre:"Romance",
        synop:`        <p class="synopsis-text">"The first year is when some of us lose our lives. The second year is when the rest of us lose our humanity.” —Xaden Riorson
</p>   
        <p class="synopsis-text">Everyone expected Violet Sorrengail to die during her first year at Basgiath War College—Violet included. But Threshing was only the first impossible test meant to weed out the weak-willed, the unworthy, and the unlucky.
</p>
        <p class="synopsis-text">Now the real training begins, and Violet's already wondering how she'll get through. It's not just that it's grueling and maliciously brutal, or even that it's designed to stretch the riders' capacity for pain beyond endurance. It's the new vice commandant, who's made it his personal mission to teach Violet exactly how powerless she is unless she betrays the man she loves.
 </p> 
        <p class="synopsis-text">Although Violet's body might be weaker and frailer than everyone else's, she still has her wits—and a will of iron. And leadership is forgetting the most important lesson Basgiath has taught her: Dragon riders make their own rules.
</p>
        <p class="synopsis-text">But a determination to survive won't be enough this year.
</p> 
        <p class="synopsis-text">Because Violet knows the real secret hidden for centuries at Basgiath War College—and nothing, not even dragon fire, may be enough to save them in the end.
</p>`,
        rating:"4.50"
    },
    {
        id: "newArrival_6",
        cover:"images/newarrival_6.png",
        title: "Love Redesigned",
        author: "Lauren Asher",
        price: "659",
        genre:"Romance",
        synop:`
        <p class="synopsis-text">Julian</p>   
        <p class="synopsis-text">If I ever caught on fire, Dahlia Muñoz would fan the flames with a smile.
        So, when she returns to Lake Wisteria, I fully intend to avoid the interior designer.
        At least until my meddling mother exploits my savior complex.
        The faster I help Dahlia find her creative spark, the sooner she will leave town.
        But while I was busy getting rid of Dahlia, I overlooked one potential issue.
        What happens if I want her to stay?</p>
        <p class="synopsis-text">Dahlia</p> 
        <p class="synopsis-text">People say the devil has many faces, but I know only one.
        Julian Lopez—my childhood rival and family frenemy.
        I vow to steer clear of him while recovering from my broken engagement, but then the billionaire makes an irresistible offer.
        Renovate a historic house together and triple our profits.
        Our temporary truce becomes compromised as we face years' worth of denied attraction and mixed emotions.
        Giving into our desire is inevitable…but falling in love?
        That isn't part of the plan.</p>
        <p class="synopsis-text">Love Redesigned is a steamy, small town romance about two family friends-turned-childhood rivals. It is the first book in the standalone Lakefront Billionaires series and has a happy ending.
</p>`,
        rating:"4.22"
    },
    {
        id: "newArrival_7",
        cover:"images/newarrival_7.png",
        title: "Gwen & Art Are Not in Love",
        author: "Lex Croucher",
        price: "700",
        genre:"Romance",
        synop:`<p class="synopsis-text">Heartstopper meets A Knight's Tale in this queer medieval rom-com YA debut about love, friendship, and being brave enough to change the course of history.
</p>   
        <p class="synopsis-text">It's been hundreds of years since King Arthur's reign. His descendant, Arthur, a future Lord and general gadabout, has been betrothed to Gwendoline, the quick-witted, short-tempered princess of England, since birth. The only thing they can agree on is that they despise each other.
</p>
        <p class="synopsis-text">They're forced to spend the summer together at Camelot in the run-up to their nuptials, and within 24 hours, Gwen has discovered Arthur kissing a boy, and Arthur has gone digging for Gwen's childhood diary and found confessions about her crush on the kingdom's only lady knight, Bridget Leclair.
</p>
        <p class="synopsis-text">Realizing they might make better allies than enemies, Gwen and Art make a reluctant pact to cover for each other, and as things heat up at the annual royal tournament, Gwen is swept off her feet by her knight, and Arthur takes an interest in Gwen's royal brother. Lex Croucher's Gwen & Art Are Not in Love is chock full of sword-fighting, found family, and romantic shenanigans destined to make readers fall in love.
</p>`,
        rating:"4.12"
    },
    {
        id: "newArrival_8",
        cover:"images/newarrival_8.png",
        title: "Betting on You",
        author: "Lynn Painter ",
        price: "800",
        genre:"Romance",
        synop:`<p class="synopsis-text"> When seventeen-year-old Bailey starts a new job at a hotel waterpark, she is less than thrilled to see an old acquaintance is one of her coworkers. Bailey met Charlie a year ago on the long flight to Omaha, where she moved after her parents' divorce. Charlie's cynicism didn't mix well with Bailey's carefully well-behaved temperament, and his endless commentary was the irritating cherry on top of an already emotionally fraught trip.
</p>   
        <p class="synopsis-text">Now, Bailey and Charlie are still polar opposites, but instead of everything about him rubbing Bailey the wrong way, she starts to look forward to hanging out and gossiping about the waterpark guests and their coworkers—particularly two who keep flirting with each other. Bailey and Charlie make a bet on whether or not the cozy pair will actually get together. Charlie insists that members of the opposite sex can't just be friends, and Bailey is determined to prove him wrong.
</p>
        <p class="synopsis-text">Bailey and Charlie keep close track of the romantic progress of others while Charlie works to deflect the growing feelings he's developed for Bailey. Terrified to lose her if his crush becomes known, what doesn't help his agenda is Bailey and Charlie “fake dating” in order to disrupt the annoying pleasantries between Bailey's mom and her mom's new boyfriend. Soon, what Charlie was hoping to avoid becomes a reality as Bailey starts to see him as not only a friend she can rely on in the midst of family drama—but someone who makes her hands shake and heart race. But Charlie has a secret—a secret that involves Bailey and another bet Charlie may have made. Can the two make a real go of things…or has Charlie's secret doomed them before they could start?
</p> `,
        rating:"4.22"
    },
    {
        id: "newArrival_9",
        cover:"images/newarrival_9.png",
        title: "The Poisoned Prince",
        author: "Kristin J. Dawson",
        price: "700",
        genre:"fiction",
        synop:`<p class="synopsis-text">A royal huntsman. An illegitimate daughter. And one heart — delivered on a platter.</p>
        <p class="synopsis-text">Max is training to become the royal huntsman, a respected position his lineage has held for generations. Orphaned Snow is an unremarkable palace servant of questionable origins.</p> 
        <p class="synopsis-text">Although Max banters with Snow every morning, and she can sense his mood at a single glance, the best friends are thrown apart when the king winds up dead. Under the queen's rule, the kingdom devolves into chaos — and Snow is a threat to be eliminated. When Snow is betrayed, Max risks everything to save her life, despite the painful discovery of the secrets she's been hiding. With the help of seven dwarven allies, they must all work together to dethrone the mad queen.
        But as the queen's magic strengthens, so do the risks.</p> 
        <p class="synopsis-text">The longer Max juggles the traitors, lies, and unstable queen, the more he realizes he must choose between his family and the woman he's grown to love. And it's painfully clear that he can't save both.</p> 
        <p class="synopsis-text">The key to saving the kingdom may lie in Snow's unraveling of her past, but her heart lies in the hands of the queen's huntsman.</p> 
        <p class="synopsis-text">The Poisoned Prince is a best friends to forbidden romance retelling of Snow White and is book 6 of Once Upon A Prince , a multi-author series of clean fairy tale retellings. Each standalone story features a swoony prince fighting for his happily ever after.</p> `,
        rating:"4.14"
    },
    {
        id: "newArrival_10",
        cover:"images/newarrival_10.png",
        title: "Where He Can't Find You",
        author: "Darcy Coates",
        price: "749",
        genre:"fiction",
        synop:`<p class="synopsis-text">From USA Today bestselling horror/thriller author Darcy Coates comes the chilling legend of a monster no one can escape.</p>
        <p class="synopsis-text">DON'T WALK ALONE, OR THE STITCHER WILL FIND YOU.</p> 
        <p class="synopsis-text">Abby Ward lives in a town haunted by disappearances. People vanish, and when they're found, their bodies have been dismembered and sewn back together in unnatural ways. But is it the work of a human killer…or something far darker?</p> 
        <p class="synopsis-text">DON'T STAY OUT LATE, OR THE STITCHER WILL TAKE YOU.</p> 
        <p class="synopsis-text">She and her younger sister live by a strict set of rules designed to keep them safe―which is why it's such a shock when Hope is taken. Desperate to get her back, Abby tells the police everything she knows, but they claim their hands are tied.</p> 
        <p class="synopsis-text">DON'T CLOSE YOUR EYES, OR THE STITCHER WILL REMAKE YOU.</p> 
        <p class="synopsis-text">With every hour precious, Abby and her friends are caught in a desperate game of cat and mouse. They have to get Hope back. Quickly. Before too much of her is cut away. And before everything they care about is swallowed up by the darkness waiting in the tunnels beneath the home they thought they knew.</p>`,
        rating:"4.19"
    },
]