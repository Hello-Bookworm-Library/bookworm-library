// Continue adding your books here (I notice you have many more books to add)
// Make sure each book entry has a comma between them
const books = [
    {
        id: 1,
        title: "Salim Mamoo and Me",
        author: "Zai Whitaker",
        image: "images/book 1.jpg",
        available: true,
        description: "Zai"s uncle is the famous birdman of India Salim Ali, everyone in her family is a birding expert, and she herself can"t so much as identify the pitpit sitting right under her nose. Little wonder she is in a big-time flap over her not-so-small problem! Drawing a delightful portrait of childhood, Zai Whitaker recounts her early birding woes and how she winged it."
    ,}
    {
        id: 2,
        title: "Noon Chai and a Story",
        author: "Adithi Rao",
        image: "images/book2.jpg",
        available: true,
        description: "A heartwarming story about books, and what they mean to those who don"t have them * Set in Gurez, an isolated village in Kashmir at the Line of Control between India and Pakistan, it softly hints at Partition and conflict * Being a film-writer too, author Adithi Rao has a strong visual sense that pervades her work * Affectionate and stylised pictures by Kashmiri illustrator Ghazal Qadri are flavoured with a sense of the place and the gentle spirit of its people "
    ,}
    {
        id: 3,
        title: "General Knowledge Genius!",
        author: "Clive Gifford, John Woodward, Peter Chrisp, Andrea Mills, Derek Harvey"
        image: "images/book3.jpg",
        available: true,
        description: "The brilliant quiz book for clever kids - answer the questions correctly 	on your favourite subjects to test if you"re a general knowledge genius.
	Children won"t be able to resist the General Knowledge Genius brain-busting challenge. For every topic, pages are packed with eye-popping pictures - but do you know what they 	show? To help you, "Test Yourself" panels list what you"re looking for. With three levels of difficulty, the challenge gets harder as you work your way from Starter, to Challenger, and finally the truly tricky Genius category. If you need it, there"s a fun fact with every picture to give a helpful clue.

	With more than 60 topics, from across the encyclopedia, there"s something for everyone. Can you name the most famous rivers worldwide? Do you know you..."
    ,}
    {
        id: 4,
        title: "For the love of a cat",
        author: "Rosalind Wilson",
        image: "images/book4.jpg",
        available: true,
        description: "A painter loves his cat as much as he loves painting. But when the starving artist is commissioned to paint a picture of the Buddha, he must choose between his art and his pet ... A colourful read that introduces children to the common thread of feelings running through all living things."
     ,}
    {
        id: 5,
        title: "Amazing Activities",
        author: "Arvind Gupta",
        image: "images/book5.jpg",
        available: true,
        description: "Science need not only be learned wearing a white coat and using burettes and beakers. Exciting science activities can be done using simple, low-cost material, often discarded things, as this book of amazing activities shows. The easy-to-follow instructions and simple illustrations make this book a valuable resources for use at home."
     ,}
    {
        id: 6,
        title: "Excuse me, is this India?",
        author: "Anushka Ravishankar",
        image: "images/book6.jpg",
        available: true,
        description: "Illustrated with exquisite quilts made from Indian textiles, "Excuse Me, Is This India?" is a roving travelogue through a child"s imagination. Drifting off to sleep beneath a picture-quilt made by a globetrotting aunt, the book"s young narrator becomes a bright blue mouse, swept away on an unexpected trip to India...or is it India? The answer to this question is coded in riddling poetry, as the confused traveller navigates her fantastical but all-too-real dream world. Brilliant nonsense verse captures the surreal cacophony of places, people and creatures that make up India. "
     ,}
    {
        id: 7,
        title: "Machher Jhol",
        author: "Jha Richa",
        image: "images/book7.jpg",
        available: true,
        description: "When Gopu"s father (Baba) falls sick, the visually impaired Gopu knows he would have to step out alone. He negotiates the crowds, the markets and the traffic of the city of Calcutta, all by himself, to reach his grandma"s house to get her to cook Baba"s favourite fish curry. Does he succeed in bringing it home to him? In this book, Richa Jha writes as much about the courage of Gopu as she does about the sounds and smells of a bustling metropolis. Sumanta Dey brings alive the city of Calcutta between the covers of this book and makes the readers feel they are walking alongside Gopu."
    ,}
    {
        id: 8,
        title: "Twinkle - World Folklore and Fables",
        author: "-",
        image: "images/book8.jpg",
        available: true,
        description: "Remember all those lazy afternoons you spent in the company of the clever Kalin and the cowardly Shambu? The long train journeys which were impossible without the antics of suppandi and the schemes of Tantra the mantra? Take a trip down memory Lane with tinkle origins, in which we celebrate the magazine legacy of simpler times by featuring the works created by its pioneering artists and writers. In this volume, fly around the world on the wings of exciting folktales and legends. Follow Kalia around the big baan forest as he saves his friends from evil predators. Laugh at the foolish king who thought he managed to stop a river. Take sides in an argument between the sun and the wind. Welcome back to a world of wonder, laughter, learning and fun."
    ,}

    {
        id: 9,
        title: "Ma Ganga aur Razai ka Sandook",
        author: "Geeta Dharmarajan",
        image: "images/book9.jpg",
        available: true,
        description: "Parvatiya pradesh mein rehnewali nanhi Yasho ke gaon mein aapka swagat hai. Uchalti, gaati Ganga ke saath, chalo hum bhi Yasho ke razai sandook mein pahunch jaayein, aur dekhein itne din sooni padi pahadiyan kaise phir se hariyali ho gayi hain. Par kaise? Pahadi log jaag jo gaye hain aur Shiv ki jataon ko punah prapt karne ke liye mehnat kar rahe hain. Jatae phir se wahi jaadu kar rahi hain... Par nanhi Yasho ko Shiv ki jatae mili kahan? Aaiye pata lagatein is mazedaar kahani mein jo prachin kahani aur paryavaran sambandhit naye vishayon ko milati hai.
""Maa Ganga aur Razai ka Sandook" kahani humein yaad dilati hai ve sab baatein jin ke prati sachet na rehne par Maa Ganga bhi gussa ho sakti hai. Use khush karne ke liye humein kuch to karna chahiye, aur jaldi hi."

    {
        id: 10,
        title: "Generous Me",
        author: "Mary E. Pearson",
        image: "images/book.jpg",
        available: true,
        description: "Rookie Readers have provided entertaining, high-quality introductions to reading for more than a generation. Each title features full-color, often hilarious illustrations and engaging stories that always involve a young child figuring out concepts or solving problems on his or her own. Every new title contains a Word List and a color-coded reading-level key on the back cover.
-- more detail about familiar ideas, objects, and actions
-- more challenging vocabulary
-- some abstract concepts
-- pictures may contain extraneous detail, offer moderate support; longer sentences
-- some pages contain more than one paragraph
Who says big sisters don"t share? This big sister would gladly share all sorts of things with her younger sibling -- like broccoli, chores, time-outs, even the flu!"
    ,}
    {
        id:11 ,
        title: "Lights, Camera, Action - The life and times of Dadasaheb Phalke",
        author: "Rupali Bhave",
        image: "images/book11.jpg",
        available: true,
        description: "Watch people move in the magic photographs! A picture two miles long! Only three annas!" This is how a magician named Dadasaheb Phalke invited people in the street to come and watch his first film. Other actors in  this amazing story about the genius of Dadasaheb Phalke, the Father of Indian Cinema, include a cook who played a woman and the first film editor in Indian cinema who happened to be a woman and his wife! If you are a fan of films, you are sure to be fascinated by this script of his life and the making of first ever Indian film. It has all the ingredients of blockbuster!"
    ,}
    {
        id:12 ,
        title: "Raman of Tenali",
        author: "Kamala Chandrakant (Amar Chitra Katha)",
        image: "images/book12.jpg",
        available: true,
        description: "When the king saw a strapping lad astride the aged shoulders of his guru, he knew something was amiss. Soon he realized that, if young Raman was around, it was best to expect the unexpected. This village bumpkin was no fool, even the fiery goddess Kali had given in to his wiles. Wheeding his way into the mighty Vijayanagara court, it was but a short step into the heart of King Krishnadeva Raya, who welcomed a laugh or two to lighten his busy day."
    ,}
    {
        id: 13,
        title: "Mathematwist",
        author: "T V Padma",
        image: "images/book13.jpg",
        available: true,
        description: "What could Caesar"s general have in common with multiplication and weights? Or a Russian waiter with factorials? Or a temple in Hanoi with transposition? A Chinese emperor with Benjamin Franklin and Albrecht Duerer? This book is a collection of stories from different countries. Each story sets the brain ticking, encouraging problem-solving skills, with a high quotient of fun! and each is followed by a simple explanation of the maths behind the "magic", that dispels the esoteric haze from the subject and makes it accessible. A fascinating collection about mathematics and the world, from a country that has been prominent on the number map from ancient times."
    ,}
    {
        id: 14,
        title: "Lion Goes for a Haircut",
        author: "Swati Shome",
        image: "images/book14.jpg",
        available: true,
        description: "Come in for a haircut! You choose.. We cut! says the sign outside a hair cutting saloon, so a lion walks in to do just that. But where is everyone? And who are these other lions staring at him?"
    ,}
    {
        id: 15,
        title: "Miss Lee and the Mousquito",
        author: "Maria L Dengjongpa",
        image: "images/book15.jpg",
        available: true,
        description: "A funny and simple story about trying to sleep with a mosquito buzzing in the room! With beautiful illustrations that bring the story alive, share Miss Lee"s irritation with the mosquito till she finally finds a solution and falls into a deep and delicious sleep. A Children"s Bookshelf Selection: Each month our editor"s pick the best books for children and young adults by age to be a part of the children"s bookshelf. These are editorial recommendations made by our team of experts. Our monthly reading list includes a mix of bestsellers and top new releases and evergreen books that will help enhance a child"s reading life."
    ,}
    {
        id: 16,
        title: "lainii-tukatuk ek dost kii zaruurat hai",
        author: "Klaus Baumgart",
        image: "images/book16.jpg",
        available: true,
        description: "Who cheers you up when you feel lonely? A good friend! But sometimes you take time to find a real friend.."
    ,}
    {
        id: 17,
        title: "Aesop"s Fabels",
        author: "Sunita Pant Bansal",
        image: "images/book17.jpg",
        available: true,
        description: "This is a fascinating collection of 60 stories of Aesop"s Fables. Apart from being entertaining, they also impart moral values to the children."
    }
    {
        id: 18,
        title: "chulbul ki poonch",
        author: "Savitri Singh",
        image: "images/book18.jpg",
        available: true,
        description: "Chulbuli Chulbul ko apni poonchh na bhayi. Par kya doosron ki poonchh lagane se baat bani?
Padhiye, nanhi Chulbul ki karastaniyan..."
    ,}
    {
        id: 19,
        title: "Stories for kids by Swami Vivekananda",
        author: "Swami Vivekananda",
        image: "images/book19.jpg",
        available: true,
        description: "Four lovely stories told by Swamiji have been retold in this book for children. They have been presented here in a style that is both highly entertaining and spiritually elevating. Exquisite colourful illustrations on each page add to the appeal of the book."
    ,}
    {
        id: 20,
        title: "Do Behnon Ki Masai Mara Yatra",
        author: "Kamla Bhasin",
        image: "images/book20.jpg",
        available: true,
        description: "Masai Mara is a famous sanctuary in Kenya. In this book, you will find stories and photographs of lions, leopards, panthers, giraffes, zebras and others. Two wonderful people with the dream of a free society have created this book. At the first glance, you will see forest and only forest in this book. If you take a closer look, you will find that it poses some questions about the way our world works. Hypocrisy and discrimination that exists in our world. Two women wander without a care in these forests. During an interview, a female guard at Kanha was asked, Don"t you feel afraid in the jungle?.  I feel fear when I return to the village ". This book would remind you of many such incidents. Kamla Bhasin has been working for peace for more than four decades. Bina Kak has been in love with forest animals and wildlife for many years now. 	She works towards its preservation and care. Read Masai Mara"s photographs and see its words and dream about a free world for a few moments. There will come a spring when you 	will rid yourself of the load of sweaters and feel light...open...like a sparkle of freshness... This captivating design of the book is the work of Sujasha Dasgupta."
    ,}
    {
        id: 21,
        title: "The Boy and the Drum",
        author: "Umesh P N",
        image: "images/book21.jpg",
        available: true,
        description: "One child mimes the mother, while other children form groups of the well-to-do families. The mother goes to each group and mimes gardening for these groups."
    ,}
    {
        id: 22,
        title: "Wo Photo kisne Kheechi?",
        author: "Nandita Da Cunha",
        image: "images/book22.jpg",
        available: true,
        description: "Nandita Da Cunha"s story celebrates the life of India"s most famous photographer, Homai Vyarawalla. Homai"s courage and craftspersonship comes out beautifully in the book. Priya Kuriyan"s illustrations maintain Homai"s style of work so accurately that sometimes it seems as if Homai herself has illustrated the book. The continuous shift between craft and life reminds the readers of the liveliness of theatre."
    ,}
    {
    id: 23,
    title: "Sea Monsters 3D",
    author: "",
    image: "images/book104.jpg",
    available: true,
    description: "An immersive 3D experience exploring the mysterious creatures of the deep sea."
,}
{
    id: 24,
    title: "Little Kid"s First Big Book of Space",
    author: "",
    image: "images/book103.jpg",
    available: true,
    description: "An introductory book about space for young children, filled with colorful illustrations and simple explanations."
,}
    
    {
    id: 25,
    title: "Wah Photo Kisne Khinchi?",
    author: "Nandita da Cunha",
    image: "images/book25.jpg",
    available: true,
    description: "This picture book celebrates the life of Homai Vyarawalla, India"s first woman photojournalist. Through engaging storytelling and vivid illustrations by Priya Kuriyan, the book introduces young readers to Homai"s courage, dedication, and pioneering spirit in the field of photography."
,}
{
    id: 26,
    title: "The Bold Little Tailor",
    author: "Jacob Grimm, Wilhelm Grimm",
    image: "images/book26.jpg",
    available: true,
    description: "A classic German fairy tale collected by the Brothers Grimm. The story follows a clever tailor who, after killing seven flies with one blow, embarks on an adventure where he uses his wit to overcome challenges, defeat giants, and win a kingdom."
,}
{
    id: 27,
    title: "Mother is Mother",
    author: "Shankar",
    image: "images/book27.jpg",
    available: true,
    description: "A touching story about a young boy, Ravi, who captures a squirrel to keep as a pet but eventually realizes the cruelty of his actions. The tale highlights the importance of respecting nature and understanding the bond between a mother and her child."
,}
{
    id: 28,
    title: "Knowledge Encyclopedia: Transport!",
    author: "DK",
    image: "images/book28.jpg",
    available: true,
    description: "An informative encyclopedia that delves into the fascinating world of transport. Covering various modes of transportation, from ancient times to modern innovations, this book offers young readers a comprehensive look at how people and goods move around the world."
,}
{
    id: 29,
    title: "We The People",
    author: "Nikhil Dey, Aruna Roy, Rakshita Swamy",
    image: "images/book29.jpg",
    available: true,
    description: "A compelling exploration of the Indian Constitution and the rights of its citizens. Through real-life stories and engaging narratives, the authors shed light on the importance of democracy, justice, and the role of the people in shaping the nation."
,}
{
    id: 30,
    title: "Oliver Twist - Campfire Classics",
    author: "Charles Dickens (Adapted by Dan Johnson)",
    image: "images/book30.jpg",
    available: true,
    description: "A graphic novel adaptation of Charles Dickens" classic tale, "Oliver Twist." This version brings the story of the orphaned boy navigating the harsh streets of Victorian London to life, making it accessible and engaging for young readers."
,}
{
    id: 31,
    title: "Jadav and the Tree Place",
    author: "Vinayak Varma",
    image: "images/book31.jpg",
    available: true,
    description: "A beautifully illustrated tale inspired by the real-life environmentalist Jadav Payeng, who transformed a barren sandbar into a lush forest. This story emphasizes the power of individual action in environmental conservation."
,}
{
    id: 32,
    title: "Gajapati Kulapati Gurrburrrrooom",
    author: "Ashok Rajagopalan",
    image: "images/book32.jpg",
    available: true,
    description: "The third book in the Gajapati Kulapati series, featuring the lovable elephant who faces a tummy ache after a heavy meal. With repetitive sounds and cheerful illustrations, it"s perfect for read-aloud sessions."
,}
{
    id: 33,
    title: "All About Animal World Encyclopedia",
    author: "Dreamland Publications",
    image: "images/book33.jpg",
    available: true,
    description: "A vibrantly illustrated encyclopedia that delves into the animal kingdom, offering trivia questions and answers about various species, their habitats, and behaviors, making learning fun for children."
,,}
{
    id: 34,
    title: "Kartikeya: The Destroyer"s Son",
    author: "Anuja Chandramouli",
    image: "images/book34.jpg",
    available: true,
    description: "A mythological fiction novel that narrates the life of Kartikeya, the son of Shiva and Parvati, destined to defeat the demon Soora. The story blends mythology with engaging storytelling."
,}
{
    id: 35,
    title: "Five Faces of Mother India",
    author: "Khwaja Ahmad Abbas",
    image: "images/book35.jpg",
    available: true,
    description: "A collection of five narratives portraying different facets of Indian womanhood, reflecting the strength, resilience, and diversity of women across the country."
,}
{
    id: 36,
    title: "Big Rain",
    author: "Gayathri Bashi",
    image: "images/book36.jpg",
    available: true,
    description: "Written to explain the devastating floods in Kerala to young children, this book captures the emotions and experiences during natural calamities, emphasizing empathy and understanding."
,}
{
    id: 37,
    title: "Jake"s Balloon Blast",
    author: "Ken Spillman",
    image: "images/book37.jpg",
    available: true,
    description: "Jake dreams of flying and embarks on an adventure with balloons. A delightful story that encourages imagination and the pursuit of dreams."
,}
{
    id: 38,
    title: "A Whistling Good Idea",
    author: "Rahul Raghavan",
    image: "images/book38.jpg",
    available: true,
    description: "Nivi wants to read her book but has to turn off the pressure cooker after three whistles. She devises a clever Rube Goldberg machine to do both, introducing children to basic engineering concepts."
,}
{
    id: 39,
    title: "Blue and Other Stories",
    author: "Suniti Namjoshi",
    image: "images/book39.jpg",
    available: true,
    description: "A collection of feminist fables that challenge traditional narratives, encouraging readers to question societal norms and think critically."
,}
{
    id: 40,
    title: "Khaee Dal",
    author: "Manoj Das",
    image: "images/book40.jpg",
    available: true,
    description: "A humorous tale that delves into the quirks of village life, highlighting the simplicity and complexities of rural communities."
,}
{
    id: 41,
    title: "Gone Grandmother",
    author: "Chatura Rao",
    image: "images/book41.jpg",
    available: true,
    description: "A sensitive story that helps children understand and cope with the loss of a loved one, focusing on the bond between a child and their grandmother."
,}
{
    id: 42,
    title: "Little Red Riding Hood",
    author: "Brothers Grimm",
    image: "images/book42.jpg",
    available: true,
    description: "The classic fairy tale of a young girl, her grandmother, and a cunning wolf, teaching lessons about caution and bravery."
,}
{
    id: 43,
    title: "Khat",
    author: "Sumit Patil",
    image: "images/book43.jpg",
    available: true,
    description: "A poignant narrative that explores the emotional journey of a child writing a letter, capturing the innocence and depth of childhood emotions."
,}
{
    id: 44,
    title: "The Famous Smile",
    author: "Anushka Ravishankar",
    image: "images/book44.jpg",
    available: true,
    description: "A whimsical story that delves into the mystery behind a famous smile, blending humor and curiosity to engage young readers."
,}
{
    id: 45,
    title: "Sher Ki Neend",
    author: "Deepa Balsavar",
    image: "images/book45.jpg",
    available: true,
    description: "A beautifully illustrated tale about a lion"s quest for a peaceful sleep, highlighting the importance of harmony in the jungle."
}
{
    id: 46,
    title: "The Big Book of Dinosaurs",
    author: "DK",
    image: "images/book46.jpg",
    available: true,
    description: "A colorful catalog of prehistoric creatures, this book introduces young readers to various dinosaurs, from the fierce Tyrannosaurus to the gentle Diplodocus. Packed with fun facts and detailed illustrations, it"s an engaging introduction to the world of dinosaurs."
,}
{
    id: 47,
    title: "The Fabulous Friend Machine",
    author: "Nick Bland",
    image: "images/book47.jpg",
    available: true,
    description: "Popcorn, the friendliest chicken at Fiddlesticks Farm, discovers a "Fabulous Friend Machine" and starts making new friends online. However, she soon realizes that virtual friendships might not be as genuine as they seem. A cautionary tale about the importance of real-world connections."
,}
{
    id: 48,
    title: "Kissu Haathi",
    author: "Manica Musil",
    image: "images/book48.jpg",
    available: true,
    description: "A delightful story about Kissu, a little elephant who embarks on an adventure to find his place in the world. Through vibrant illustrations and engaging narrative, children learn about self-discovery and the value of friendship."
,}
{
    id: 49,
    title: "Children"s Encyclopedia: Universe",
    author: "Dreamland Publications",
    image: "images/book49.jpg",
    available: true,
    description: "An informative encyclopedia that takes young readers on a journey through the universe. Covering topics from planets and stars to galaxies and space exploration, it"s filled with fascinating facts and vivid illustrations."
,}
{
    id: 50,
    title: "Saraswati",
    author: "Anant Pai",
    image: "images/book50.jpg",
    available: true,
    description: "An insightful book exploring the significance of Saraswati, the Hindu goddess of knowledge and arts. It delves into her symbolism, iconography, and the importance of learning and wisdom in Hindu culture."
,}
{
    id: 51,
    title: "Our Incredible Cow",
    author: "Mahasweta Devi",
    image: "images/book51.jpg",
    available: true,
    description: "A humorous tale about Nyadosh, a cow with an insatiable appetite and a penchant for mischief. Through her adventures, the story highlights themes of individuality and the unexpected ways one can make a difference."
,}
{
    id: 52,
    title: "Jungle Brew",
    author: "Tanya Luther Agarwal",
    image: "images/book52.jpg",
    available: true,
    description: "In a hilly hamlet of southern India, young Bulbuli embarks on a journey to stop a war between plants in the jungle. A story that combines adventure with environmental themes, emphasizing the importance of harmony in nature."
,}
{
    id: 53,
    title: "Ek Bada Achcha Dost",
    author: "Babak Saberi",
    image: "images/book53.jpg",
    available: true,
    description: "An endearing story of an unlikely friendship that transcends differences. Originally written in Farsi and translated into Hindi, it teaches children about acceptance, understanding, and the value of companionship."
,}
{
    id: 54,
    title: "Friend",
    author: "Akram Ghasempour",
    image: "images/book54.jpg",
    available: true,
    description: "She agreed to play hide-and-seek with me. But why wouldn"t she close her eyes. The she painted circles on the sand-two smaller ones inside a bigger one. What were they? "
,}
{
    id: 55,
    title: "Bhabhloo Bear"s Adventures",
    author: "Paro Anand",
    image: "images/book55.jpg",
    available: true,
    description: "Join Bhabhloo Bear on his exciting adventures through the forest. Along the way, he learns valuable lessons about courage, kindness, and the importance of helping others."
,}
{
    id: 56,
    title: "Fre Foore",
    author: "",
    image: "images/book56.jpg",
    available: true,
    description: "A whimsical story filled with fun and laughter, "Fure Foore" takes readers on a magical journey, emphasizing the joy of imagination and creativity."
,}
{
    id: 57,
    title: "The Shadow of Darkness",
    author: "Priyanka Baranwa",
    image: "images/book57.jpg",
    available: true,
    description: "A gripping tale that delves into the battle between light and darkness, teaching children about bravery, hope, and the power of inner strength."
,}
{
    id: 58,
    title: "Magical World of The Wild",
    author: "",
    image: "images/book58.jpg",
    available: true,
    description: "Explore the enchanting world of wild animals and their habitats. This book offers fascinating insights into the behaviors and lives of various creatures in the wild."
,}
{
    id: 59,
    title: "Wings to Fly",
    author: "Sowmya Rajendran",
    image: "images/book59.jpg",
    available: true,
    description: "An inspiring story about a young bird"s journey to discover its ability to fly, symbolizing the importance of self-belief and perseverance."
,}
{
    id: 60,
    title: "Ismat"s Eid",
    author: "Fawzia Gilani",
    image: "images/book60.jpg",
    available: true,
    description: "Ismat wants to buy a new outfit for Eid but faces unexpected challenges. A touching story that highlights themes of generosity, community, and the true spirit of Eid."
,}
{
    id: 61,
    title: "Bambi Children"s Story Library",
    author: "Disney",
    image: "images/book61.jpg",
    available: true,
    description: "A classic tale of Bambi, a young deer growing up in the forest, learning about life, love, and survival. A timeless story that resonates with readers of all ages."
,}
{
    id: 62,
    title: "Anatole",
    author: "Eve Titus",
    image: "images/book62.jpg",
    available: true,
    description: "Anatole, a mouse living in Paris, seeks to prove his worth by secretly helping a cheese factory improve its products. A charming story about pride, work ethic, and making a difference."
,}
{
    id: 63,
    title: "Payal Kho Gayi",
    author: "Shivani and Maheen",
    image: "images/book63.jpg",
    available: true,
    description: "A delightful story about a young girl"s search for her lost anklet, leading her on an unexpected adventure filled with surprises and new friendships."
,}
{
    id: 64,
    title: "Panchatantra",
    author: "-",
    image: "images/book64.jpg",
    available: true,
    description: "A collection of ancient Indian fables that impart moral lessons through stories of animals and their adventures. Timeless tales that teach wisdom and ethics."
,}
{
    id: 65,
    title: "What a Mix-up",
    author: "Anuplal and Antanu Roy",
    image: "images/book65.jpg",
    available: true,
    description: "A humorous tale of mistaken identities and unexpected situations, teaching children about problem-solving and the importance of communication."
,}
{
    id: 66,
    title: "Homeland: Portraits of Exile",
    author: "Aaniya Asrani",
    image: "images/book66.jpg",
    available: true,
    description: "A poignant collection of stories and illustrations depicting the experiences of refugees and displaced individuals, highlighting themes of identity, loss, and hope."
,}
{
    id: 67,
    title: "The Boy Who Drew Cats",
    author: "Lafcadio Hearn",
    image: "images/book67.jpg",
    available: true,
    description: "A Japanese folktale about a boy whose drawings come to life, emphasizing the power of art and the importance of following one"s passion."
,}
{
    id: 68,
    title: "Dancing Bear",
    author: "Michael Morpurgo",
    image: "images/book68.jpg",
    available: true,
    description: "A touching story of a young girl and her friendship with a bear, exploring themes of freedom, compassion, and the bond between humans and animals."
,}
{
    id: 69,
    title: "Finding Nemo",
    author: "-",
    image: "images/book69.jpg",
    available: true,
    description: "Based on the popular animated film, this story follows Nemo, a clownfish, on his adventurous journey through the ocean, teaching lessons about courage and perseverance."
,}
{
    id: 70,
    title: "My Colourful Pencil",
    author: "Masumeh Ansarian",
    image: "images/book70.jpg",
    available: true,
    description: "Nobody played with the little girl. Her parents and brother were always busy with something or the other. A colourful tale about how a box of colour pencils cheered her up!"
,}
{
    id: 71,
    title: "Vikas Stories For Children",
    author: "",
    image: "images/book71.jpg",
    available: true,
    description: "A collection of engaging stories aimed at young readers, designed to instill moral values and spark imagination."
,}
{
    id: 72,
    title: "Krishna Aur Jarasandh",
    author: "",
    image: "images/book72.jpg",
    available: true,
    description: "An adaptation of the epic tale of Lord Krishna"s encounters with the mighty king Jarasandh, highlighting themes of bravery and strategy."
,}
{
    id: 73,
    title: "All Free",
    author: "",
    image: "images/book73.jpg",
    available: true,
    description: "A story that emphasizes the importance of freedom and the joy it brings, encouraging children to value and respect liberty."
,}
{
    id: 74,
    title: "Minu and her Hair",
    author: "",
    image: "images/book74.jpg",
    available: true,
    description: "A heartwarming story about accepting one"s hair (and oneself!) as it is A bird"s nest? A cow with two horns? No, it"s Minu"s hair. And she does NOT like it. Her grandmother, her mother, her father try hard to tame it. But her grandfather is unconcerned... A story that will resonate with every child who is told that they are "different" because of their quirks."
,}
{
    id: 75,
    title: "Winning isn"t Everything",
    author: "",
    image: "images/book75.jpg",
    available: true,
    description: "A tale that teaches children the value of participation, effort, and sportsmanship over merely winning."
,}
{
    id: 76,
    title: "Little Old Woman",
    author: "",
    image: "images/book76.jpg",
    available: true,
    description: "A charming story about a little old woman who embarks on an unexpected adventure, proving that age is just a number."
,}
{
    id: 77,
    title: "Man ke Ludd / Daydream",
    author: "",
    image: "images/book77.jpg",
    available: true,
    description: "A bilingual story that delves into the world of daydreams, encouraging children to let their imaginations soar."
,}
{
    id: 78,
    title: "Grandma Tales",
    author: "",
    image: "images/book78.jpg",
    available: true,
    description: "A collection of heartwarming tales narrated by a grandmother, filled with wisdom and life lessons."
,}
{
    id: 79,
    title: "Sara aur Uskaa Nunha Bhoot",
    author: "",
    image: "images/book79.jpg",
    available: true,
    description: "Sara befriends a tiny ghost in her house, leading to a series of fun and spooky adventures."
,}
{
    id: 80,
    title: "The Sackclothman",
    author: "",
    image: "images/book80.jpg",
    available: true,
    description: "A poignant story about a mysterious figure made of sackcloth who teaches a young boy about compassion and understanding."
,}
{
    id: 81,
    title: "The Poop Book",
    author: "",
    image: "images/book81.jpg",
    available: true,
    description: "An informative and humorous book that answers children"s curious questions about poop, promoting hygiene and body awareness."
,}
{
    id: 82,
    title: "How to Catch a Star",
    author: "Oliver Jeffers",
    image: "images/book82.jpg",
    available: true,
    description: "A beautifully illustrated story about a boy who dreams of catching a star, teaching children about perseverance and dreams."
,}
{
    id: 83,
    title: "The Boy Who Asked Why?",
    author: "",
    image: "images/book83.jpg",
    available: true,
    description: "A curious boy"s journey of questioning the world around him, fostering a spirit of inquiry and learning."
,}
{
    id: 84,
    title: "The Story of Vivekananda",
    author: "",
    image: "images/book84.jpg",
    available: true,
    description: "An inspiring biography of Swami Vivekananda, highlighting his teachings and contributions to society."
,}
{
    id: 85,
    title: "Bharat Ratna Dr. Bhimrao Ambedkar",
    author: "",
    image: "images/book85.jpg",
    available: true,
    description: "A detailed account of Dr. B.R. Ambedkar"s life, his fight against social injustice, and his role in shaping modern India."
,}
{
    id: 86,
    title: "Bhediye ko Dusht Kyo Kahte Hai?",
    author: "",
    image: "images/book86.jpg",
    available: true,
    description: "A story that challenges the stereotype of wolves being evil, promoting empathy and understanding of animals."
,}
{
    id: 87,
    title: "Life with Grandfather",
    author: "",
    image: "images/book87.jpg",
    available: true,
    description: "A touching tale of a child"s experiences and lessons learned while living with his grandfather."
,}
{
    id: 88,
    title: "The Girl who Hated Books",
    author: "",
    image: "images/book88.jpg",
    available: true,
    description: "A girl who despises books finds herself in a world where books come alive, leading to a newfound appreciation for reading."
,}
{
    id: 89,
    title: "How do we weigh Appukuttan?",
    author: "",
    image: "images/book89.jpg",
    available: true,
    description: "A fun and educational story about measuring weight, using the character Appukuttan to explain concepts."
,}
{
    id: 90,
    title: "Wedding Clothes",
    author: "",
    image: "images/book90.jpg",
    available: true,
    description: "An exploration of traditional wedding attire from various cultures, celebrating diversity and customs."
,}
{
    id: 91,
    title: "Blue"s Clues - Blue"s Best Rainy Day",
    author: "",
    image: "images/book91.jpg",
    available: true,
    description: "Join Blue and friends as they find fun activities to do on a rainy day, promoting creativity and problem-solving."
,}
{
    id: 92,
    title: "Bhalu Ki Kursi",
    author: "",
    image: "images/book92.jpg",
    available: true,
    description: "A bear"s quest to find the perfect chair, teaching children about preferences and choices."
,}
{
    id: 93,
    title: "Busy Ants",
    author: "",
    image: "images/book93.jpg",
    available: true,
    description: "A look into the industrious world of ants, highlighting teamwork and diligence."
,}
{
    id: 94,
    title: "Handmade in India",
    author: "",
    image: "images/book94.jpg",
    available: true,
    description: "An insightful book showcasing the rich tradition of Indian handicrafts and the artisans behind them."
,}
{
    id: 95,
    title: "Children"s Encyclopedia: History",
    author: "",
    image: "images/book95.jpg",
    available: true,
    description: "A comprehensive encyclopedia that introduces children to significant historical events and figures."
,}
{
    id: 96,
    title: "All About Space and Solar System Encyclopedia",
    author: "",
    image: "images/book96.jpg",
    available: true,
    description: "An engaging encyclopedia that takes young readers on a journey through space, exploring planets, stars, and galaxies."
,}
{
    id: 97,
    title: "Children"s Encyclopedia: Space",
    author: "",
    image: "images/book97.jpg",
    available: true,
    description: "A detailed look into the universe, explaining complex space concepts in a child-friendly manner."
,}
{
    id: 98,
    title: "Mukand and Riaz",
    author: "",
    image: "images/book98.jpg",
    available: true,
    description: "A story of friendship between two boys during the partition of India, emphasizing unity and understanding."
,}
{
    id: 99,
    title: "Sadiq Wants to Stitch",
    author: "",
    image: "images/book99.jpg",
    available: true,
    description: "Sadiq dreams of becoming a tailor, challenging gender norms and pursuing his passion."
,}
{
    id: 100,
    title: "Disney"s More 5-Minute Stories",
    author: "",
    image: "images/book100.jpg",
    available: true,
    description: "A collection of short Disney stories, perfect for bedtime reading and quick entertainment."
,}
{
    id: 101,
    title: "Akbar Birbal Ki Prasidh Kahaniya",
    author: "",
    image: "images/book101.jpg",
    available: true,
    description: "Famous tales of Emperor Akbar and his witty advisor Birbal, filled with humor and wisdom."
,}
{
    id: 102,
    title: "The Dancing Village",
    author: "",
    image: "images/book102.jpg",
    available: true,
    description: "A village where everyone dances, spreading joy and unity among its inhabitants."
,}
];

// Add these new functions at the end of your script.js:

// Search function
function searchBooks(searchText) {
    const searchTerm = searchText.toLowerCase();
    return books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
    );
}

// Display search results
function displaySearchResults(results) {
    const booksContainer = document.getElementById('booksContainer');
    booksContainer.innerHTML = '';

    if (results.length === 0) {
        booksContainer.innerHTML = '<p>No books found</p>';
        return;
    }

    results.forEach(book => {
        // Create book card
        const bookCard = createBookCard(book);
        booksContainer.appendChild(bookCard);
    });
}

// Create a book card
function createBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.innerHTML = `
        <img src="${book.image}" alt="${book.title}" class="book-image">
        <div class="book-info">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">By ${book.author}</p>
            <p class="book-description">${book.description}</p>
            <button class="add-to-cart" onclick="addToCart(${book.id})" 
                ${!book.available ? 'disabled' : ''}>
                ${book.available ? 'Add to Cart' : 'Not Available'}
            </button>
        </div>
    `;
    return bookCard;
}

// Save cart to local storage
function saveCart() {
    localStorage.setItem('bookCart', JSON.stringify(cart));
}

// Load cart from local storage
function loadCart() {
    const savedCart = localStorage.getItem('bookCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Initialize everything when page loads
window.addEventListener('load', () => {
    loadBooks();
    loadCart();
});
