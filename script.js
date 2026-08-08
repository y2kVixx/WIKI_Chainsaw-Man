const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {

        const name = card.dataset.name.toLowerCase();

        if (name.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const close = document.getElementById("close");

const info = {
  pochita: "The Chainsaw Devil who became Denji's heart to save his life. Despite his small, dog-like physical appearance in the real world, he is actually the hero of Hell, feared by other devils for his power to erase the existence of any devil he consumes.",

  denji: "The protagonist of Chainsaw Man. A naive, impulsive, and simple-hearted young man who spent his life in extreme poverty hunting devils to pay off his father's debts. After fusing with his devil-dog, Pochita, he gains the ability to transform parts of his body into chainsaws. His goals are extremely mundane, such as eating good food and getting a girlfriend, but he is fiercely loyal to his few friends.",

  power: "The Blood Fiend who joins Public Safety Division 4 as Denji's partner. Extremely self-centered, childish, dishonest, and lacking basic hygiene, Power acts purely on instinct and the pursuit of personal glory. Despite her difficult personality and habit of boasting about nonexistent superiority, she develops a strong bond of affection with Denji and her pet cat, Meowy.",

  makima: "A high-ranking Devil Hunter in Public Safety and the authority figure who takes Denji in. Always calm, elegant, and extremely manipulative, she exudes an aura of mystery and absolute control. Makima uses Denji's desire for affection to keep him under her thumb, hiding her true intentions and terrifying powers behind a gentle smile.",

  himeno: "A veteran Public Safety Devil Hunter and Aki Hayakawa's first partner. Fun, outgoing, and possessing a maternal spirit toward newcomers, she uses humor and alcohol to cope with the constant stress of the job. Himeno has a contract with the Ghost Devil and cares deeply for Aki, doing everything she can to keep him alive in a world where hunter life expectancy is extremely low.",

  aki: "An experienced Public Safety Devil Hunter tasked with supervising Denji and Power. He is driven by a deep desire for revenge against the Gun Devil for destroying his family. Despite his stern, cold, and disciplined exterior, Aki is a deeply empathetic and protective person who ends up forming a close, family-like bond with his teammates.",

  reze: "A seemingly sweet and gentle young woman who works at a coffee shop and gets close to Denji. Behind this friendly facade, she hides her true identity as the Bomb Devil Hybrid, a trained assassin sent to capture Pochita's heart.",

  kobeni: "A Public Safety Devil Hunter who is extremely anxious, cowardly, and unlucky. She joined the profession under pressure from her family to pay for her brother's college tuition. Despite her constant panic, Kobeni displays impressive reflexes and lethal skill under extreme pressure.",

  kishibe: "A legendary veteran hunter in Public Safety, widely considered the strongest. Cynical, apathetic, and rarely seen without his flask, he acts as a master to Denji and Power, and is one of the few individuals cold enough to suspect Makima's true motives.",

  akane: "A private devil hunter working alongside the Yakuza and Katana Man. She holds a contract with the Snake Devil and demonstrates a cold, calculating demeanor during the coordinated attacks against Public Safety.",

  katanaman: "The grandson of the deceased Yakuza boss who exploited Denji. He became the Katana Hybrid to avenge his grandfather's death, serving as one of the first major antagonists against Aki's squad.",

  angel: "The Angel Devil working for Public Safety. Despite his angelic appearance, his touch drains the lifespan of anyone who comes into physical contact with him. He is extremely lazy and disillusioned with life, yet forms a close friendship with Aki.",

  beam: "The Shark Fiend assigned to Division 4. Eccentric, hyperactive, and devoted almost religiously to Denji and the Chainsaw Devil, he can swim through solid surfaces like floors and walls.",

  galgali: "The Violence Fiend who wears a constant poison-gas mask to keep his immense strength under control. Contrary to his name and nature, he is surprisingly polite, friendly, calm, and prefers peaceful solutions over fighting.",

  princi: "The manifestation of the Spider Devil in Public Safety. She appears human from the waist up with spider legs below, acting with near-total obedience to Makima's direct orders.",

  arai: "A rookie Public Safety Devil Hunter on the same team as Kobeni and Himeno. Dedicated, protective, and dutiful, he frequently showed concern for the safety and well-being of his teammates.",

  tendo: "Michiko Tendo is a Public Safety Devil Hunter from the Kyoto division assigned to assist during major operations. Tall, calm, and professional, she holds a contract with the Punishment Devil.",

  kurose: "Yutaro Kurose is a Public Safety Devil Hunter from Kyoto who works alongside Tendo. Friendly and casual, he also holds a contract with the Punishment Devil.",

  fami: "The Famine Devil, one of the Four Horsemen of the Apocalypse. Posing as a student at Fourth East High School, she operates quietly behind the scenes, using her power over starvation and control of lesser devils to manipulate events for her own ends.",

  pingtsi: "A cheerful, highly perceptive Fiend who accompanies Quanxi. She possesses the ability to analyze opponents and reveal their contracts and weaknesses.",

  long: "A quiet, horned Fiend in Quanxi's group capable of spitting flames.",

  cosmo: "The Cosmos Fiend in Quanxi's group, who continuously repeats the word 'Halloween'. Her power forces her targets to absorb all knowledge in the universe, overwhelming their minds.",

  tsugihagi: "A quiet Fiend in Quanxi's harem whose body is covered in stitches.",

  darkness: "A Primal Fear Devil that embodies humanity's inherent terror of the dark. Highly terrifying and possessing god-like powers, it has never experienced death in Hell.",

  fumiko: "A Public Safety agent assigned as Denji's bodyguard and observer in the second part of the story. She possesses an eccentric, carefree, and often unpredictable personality.",

  mitaka: "The co-protagonist of Chainsaw Man Part 2. An antisocial, awkward, and lonely high school student who, after a fatal encounter, ends up sharing her body with the War Devil.",

  yoru: "The War Devil, one of the Four Horsemen of the Apocalypse. Inhabiting Asa Mitaka's body, she seeks to regain her full power and defeat the Chainsaw Devil, possessing the ability to turn anything she owns into powerful weapons.",

  death: "The Death Devil (Lil D), the ultimate and most feared member of the Four Horsemen of the Apocalypse. As the manifestation of the primal fear of death, she stands as one of the most terrifyingly powerful entities in existence.",

  yoshida: "A skilled private Devil Hunter who contracted with the Octopus Devil. Introduced during the International Assassins arc, he resurfaces in Part 2 as a student tasked with monitoring Denji's identity.",

  quanxi: "A legendary devil hunter from China and the first Hybrid in history. Known for her superhuman speed and unmatched swordsmanship, she leads a group of fiends and cares deeply about protecting those close to her.",

  santa: "The codename for a shadowy network of assassins hired to capture Denji. Utilizing the Puppet Devil, Santa Claus controls bodies from a distance and creates an army of human puppets.",

  brothers: "A trio of assassin brothers sent from the United States to target Denji's heart. They use the Skin Devil to impersonate others and infiltrate unnoticed.",

  miri: "A young Longsword Hybrid who was previously controlled by Makima. He later joins the Chainsaw Man Church seeking a sense of purpose and trying to connect with Denji.",

  barem: "The Flamethrower Hybrid and one of the most fanatical followers of Makima's original vision. He resurfaces in Part 2 as a manipulative leader within the Chainsaw Man Church.",

  whip: "The Whip Hybrid, a woman who has lived for decades despite her youthful appearance. She operates alongside Barem as part of the Chainsaw Man Church.",

  nayuta: "The reincarnation of the Control Devil following Makima's defeat. Raised by Denji as a younger sister, she shares his love for dogs and displays a protective, possessive, and mischievous personality.",

  queda: "The Falling Devil, a Primal Fear representing the instinctual terror of falling. She acts as a powerful antagonist sent to drag Asa and Yoru's heart down into Hell.",

  haruka: "The president of the Devil Hunter Club at Fourth East High School. He is an obsessive fan of Chainsaw Man who claims to be the hero himself while secretly leading the Chainsaw Man Church.",

  seigi: "A large, imposing member of Fourth East High School's Devil Hunter Club who sports an eyepatch.",

  brobro: "Kobeni's younger brother, who joined the Devil Hunter Club at school under his family's pressure, inheriting his sister's signature nervous behavior."
};

document.querySelectorAll(".infoBtn").forEach(button => {

    button.addEventListener("click", () => {

        const card = button.parentElement;

        const name = card.dataset.name;

        modalTitle.textContent = name;

        modalText.textContent = info[name.toLowerCase()] || "Informações indisponíveis.";

        modal.classList.add("active");

    });

});

close.addEventListener("click", () => {

    modal.classList.remove("active");

});

window.addEventListener("click", e => {

    if (e.target === modal) {

        modal.classList.remove("active");

    }

});

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

const scrollButton = document.getElementById("scrollButton");

scrollButton.addEventListener("click", () => {

    document.getElementById("characters").scrollIntoView({

        behavior: "smooth"

    });

});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".card").forEach(card => {

    card.classList.add("fade");

    observer.observe(card);

});

document.querySelectorAll(".gallery-grid img").forEach(img => {

    img.addEventListener("click", () => {

        modalTitle.textContent = "Imagem";

        modalText.innerHTML = `<img src="${img.src}" style="width:100%;border-radius:15px;">`;

        modal.classList.add("active");

    });

});

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});