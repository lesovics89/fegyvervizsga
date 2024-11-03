const generalQuestions = [
    {
        question: "A lőfegyverismeret fontossága és a fegyvertartási engedély érvényességének ideje.",
        options: ["A biztonságos fegyverhasználat biztosítása miatt fontos", "Nem szükséges fegyvertartási engedély", "Csak önvédelmi célból szükséges"],
        correctAnswer: "A biztonságos fegyverhasználat biztosítása miatt fontos"
    },
    {
        question: "A tűzfegyver fogalma és a fegyvertartási engedély érvényességének ideje.",
        options: ["Lőport és lövedéket használó eszköz, érvényességi idő 5 év", "Csak lövedéket tartalmazó eszköz", "Nincs időkorlát az engedélyre"],
        correctAnswer: "Lőport és lövedéket használó eszköz, érvényességi idő 5 év"
    },
    {
        question: "A lőszer fogalma. Milyen lőfegyvert nem lehet forgalmazni és tartani?",
        options: ["Lőszer: lövedék, hüvely, lőpor, csappantyú; katonai fegyver nem tartható", "Csak csappantyú és lövedék", "Bármilyen fegyver tartható"],
        correctAnswer: "Lőszer: lövedék, hüvely, lőpor, csappantyú; katonai fegyver nem tartható"
    },
    {
        question: "A lőfegyver megszerzésére és tartására ki kaphat engedélyt?",
        options: ["18 éven felüli, büntetlen előéletű személy", "Csak vadászok", "Csak katonák"],
        correctAnswer: "18 éven felüli, büntetlen előéletű személy"
    },
    {
        question: "Hol, hogyan kell a lőfegyvert és a lőszert tárolni?",
        options: ["Zárt helyiségben, elkülönítve a lőszert", "Csak a lakásban", "Bárhol tartható"],
        correctAnswer: "Zárt helyiségben, elkülönítve a lőszert"
    },
    {
        question: "Sorolja fel a tűzfegyver fődarabokat. Mi a szemrevételezési és vizsgálati tanúsítvány?",
        options: ["Cső, zár, tusa, tanúsítvány a fegyver alkalmasságáról", "Csak a tusa és a zár", "Tanúsítvány nem szükséges"],
        correctAnswer: "Cső, zár, tusa, tanúsítvány a fegyver alkalmasságáról"
    },
    {
        question: "Mikor nem lehet a lőfegyvert szállítani, viselni, használni?",
        options: ["Alkoholfogyasztás vagy drog hatása alatt", "Bármikor lehet", "Csak munkavégzés közben"],
        correctAnswer: "Alkoholfogyasztás vagy drog hatása alatt"
    },
    {
        question: "A lőfegyverek szállításának szabályai.",
        options: ["Lőfegyver csak töltetlenül és lezárva szállítható", "Csak engedéllyel szállítható", "Bármikor szállítható töltve"],
        correctAnswer: "Lőfegyver csak töltetlenül és lezárva szállítható"
    },
    {
        question: "Mi a teendője, ha lőfegyverét – megszerzésére jogosultnak vagy forgalmazónak – eladta?",
        options: ["Be kell jelenteni a hatóságnál", "Nem szükséges bejelenteni", "Csak írásos formában eladni"],
        correctAnswer: "Be kell jelenteni a hatóságnál"
    },
    {
        question: "A lőfegyver használata esetén milyen okmányokat kell az engedélyesnek magánál tartani?",
        options: ["Engedély és személyazonosító igazolvány", "Csak a fegyvertartási engedély", "Nincs szükség okmányokra"],
        correctAnswer: "Engedély és személyazonosító igazolvány"
    },
    {
        question: "Hatósági ellenőrzéskor mi a kötelessége a lőfegyver tulajdonosának?",
        options: ["Engedély bemutatása és azonnali együttműködés", "Csak az igazolvány felmutatása", "Az ellenőrzés megtagadása"],
        correctAnswer: "Engedély bemutatása és azonnali együttműködés"
    },
    {
        question: "Kinek adható és kinek engedhető át a lőfegyver?",
        options: ["Csak fegyvertartási engedéllyel rendelkező személynek", "Bárkinek, aki nagykorú", "Csak családtagnak"],
        correctAnswer: "Csak fegyvertartási engedéllyel rendelkező személynek"
    },
    {
        question: "Mikor kell a lőfegyvert a vizsgálatra kijelölt szervezetnek bemutatni?",
        options: ["Rendszeres időközönként és átalakítás után", "Csak ha elromlott", "Csak engedély hosszabbításkor"],
        correctAnswer: "Rendszeres időközönként és átalakítás után"
    },
    {
        question: "Mi a teendője, ha lőfegyverét vagy fegyvertartási engedélyét elvesztette?",
        options: ["Azonnal jelenteni kell a hatóságnak", "Nincs teendő", "Csak egy hét után kell jelenteni"],
        correctAnswer: "Azonnal jelenteni kell a hatóságnak"
    },
    {
        question: "Milyen adatok megváltozását kell a rendőrhatóságnak bejelenteni?",
        options: ["Név, lakcím és fegyvertartási engedély adatai", "Csak a név", "Nincs bejelentési kötelezettség"],
        correctAnswer: "Név, lakcím és fegyvertartási engedély adatai"
    }
    // ... további általános kérdések ugyanilyen formátumban
];



const allQuestions = {
    pisztoly: [
        {
            question: "Ismertesse az öntöltő maroklőfegyver fő részeit, azok rendeltetését.",
            options: ["Cső, Szán, Tok, Helyretoló rugó vagy szerkezet, Tár", "Csak a markolat és a tár", "A lövedék és a szán"],
            correctAnswer: "Cső, Szán, Tok, Helyretoló rugó vagy szerkezet, Tár"
        },
        {
            question: "Ismertesse a pisztolylőszerek részeit.",
            options: ["Hüvely, Lövedék, Gyújtó", "Csak a lőpor és a hüvely", "Csak a lövedék és a gyújtó"],
            correctAnswer: "Hüvely, Lövedék, Gyújtó"
        },
        {
            question: "Ismertesse a maroklőfegyver töltésének, ürítésének szabályait.",
            options: ["Töltés közben a fegyvert a föld vagy az ég felé irányítjuk", "Mindig a cél felé irányítjuk", "Csak biztosított állapotban tölthető"],
            correctAnswer: "Töltés közben a fegyvert a föld vagy az ég felé irányítjuk"
        },
        {
            question: "Ismertesse az öntöltő maroklőfegyver hatásos lőtávolságát, hatásmódját.",
            options: ["20-50 méter", "100-150 méter", "10-20 méter"],
            correctAnswer: "20-50 méter"
        },
        {
            question: "Sorolja fel a maroklőfegyverek használata során előforduló leggyakoribb akadályokat és azok elhárításának módját.",
            options: ["Tár nehezen tolható be, kiesik, nem zár be a szán", "Csak rendszeres karbantartás szükséges", "A szán minden lövésnél megakad"],
            correctAnswer: "Tár nehezen tolható be, kiesik, nem zár be a szán"
        },
        {
            question: "Ismertesse az öntöltő maroklőfegyver karbantartásának szabályait, a karbantartás eszközeit és módját.",
            options: ["Csőtisztító, szerkezet tisztító kefék, tisztító olajok, karbantartó olajok", "Csak vizuális ellenőrzés szükséges", "A markolat és a tár tisztítása"],
            correctAnswer: "Csőtisztító, szerkezet tisztító kefék, tisztító olajok, karbantartó olajok"
        },
        {
            question: "Ismertesse az öntöltő maroklőfegyver részleges szét- és összeszerelésének végrehajtása.",
            options: ["A fegyver töltetlenségének ellenőrzése, szán és sátorvas kioldása", "A lövedék eltávolítása a hüvelyből", "Csak a markolat eltávolítása szükséges"],
            correctAnswer: "A fegyver töltetlenségének ellenőrzése, szán és sátorvas kioldása"
        },
        {
            question: "Mi a különbség revolverező és nem revolverező pisztoly között?",
            options: ["A revolver forgótáras", "Mindkettő forgótáras", "A revolver nem használ hüvelyt"],
            correctAnswer: "A revolver forgótáras"
        },
        {
            question: "Mi a különbség merevcsövű és csőhátrasiklásos maroklőfegyver között?",
            options: ["A merevcsövű csöve a tokhoz rögzített", "A csőhátrasiklásos fix markolattal rendelkezik", "Csak csőhátrasiklásos létezik"],
            correctAnswer: "A merevcsövű csöve a tokhoz rögzített"
        },
        {
            question: "Ismertesse az öntöltő maroklőfegyver működési elvét, hatásadatait.",
            options: ["Töltés, elsütés, ürítés és célzás", "Csak a töltés és az ürítés szükséges", "Csak az elsütés és a célzás szükséges"],
            correctAnswer: "Töltés, elsütés, ürítés és célzás"
        },
        {
            question: "Ismertesse a pisztolylőszerek részeit.",
            options: ["Hüvely, lövedék, gyújtó", "Csak a lövedék és a hüvely", "Csak a gyújtó és a lőpor"],
            correctAnswer: "Hüvely, lövedék, gyújtó"
        },
        {
            question: "Ismertesse az öntöltő maroklőfegyver hatásos lőtávolságát.",
            options: ["20-50 méter, 300-500 m hatás", "10-30 méter, 200 m hatás", "50-100 méter, 400 m hatás"],
            correctAnswer: "20-50 méter, 300-500 m hatás"
        },
        {
            question: "Sorolja fel a maroklőfegyverek használata során előforduló leggyakoribb akadályokat.",
            options: ["Tárcsere és karbantartás", "A hüvely cseréje szükséges", "Nincs szükség rendszeres karbantartásra"],
            correctAnswer: "Tárcsere és karbantartás"
        },
        {
            question: "Ismertesse az öntöltő maroklőfegyver karbantartásának szabályait.",
            options: ["Csőtisztító, olajok, kefék", "Csak a csőtisztító szükséges", "Csak a markolat tisztítása szükséges"],
            correctAnswer: "Csőtisztító, olajok, kefék"
        },
        {
            question: "Ismertesse az öntöltő maroklőfegyver részleges szét- és összeszerelésének végrehajtása során követendő lépéseket.",
            options: ["Töltetlenség ellenőrzése, szán eltávolítása, rugó eltávolítása", "A fegyver teljes szétszerelése szükséges", "Csak a tár eltávolítása szükséges"],
            correctAnswer: "Töltetlenség ellenőrzése, szán eltávolítása, rugó eltávolítása"
        }
    ],

    soretes: [
        {
            question: "A sörétes lőfegyvert milyen célra szabad használni?",
            options: ["Szőrmés és szárnyas apróvad vadászatára", "Csak sportcélra", "Csak önvédelemre"],
            correctAnswer: "Szőrmés és szárnyas apróvad vadászatára"
        },
        {
            question: "Sörétes lőfegyverek csoportosítása rendszerük és csőelrendezésük szerint.",
            options: ["Merevcsövű és billenőcsövű", "Csak billenőcsövű", "Csak merevcsövű"],
            correctAnswer: "Merevcsövű és billenőcsövű"
        },
        {
            question: "Sorolja fel a leggyakrabban használatos sörétes kalibereket.",
            options: ["12-es, 16-os, 20-as", "10-es, 15-ös, 25-ös", "18-as, 14-es, 24-es"],
            correctAnswer: "12-es, 16-os, 20-as"
        },
        {
            question: "Sörétes lőfegyver fő részei és rendeltetésük.",
            options: ["Cső, zárszerkezet, lakatszerkezet, tusa", "Markolat, ravasz, lövedék", "Elsütőszerkezet, csappantyú, rugó"],
            correctAnswer: "Cső, zárszerkezet, lakatszerkezet, tusa"
        },
        {
            question: "A sörétes lőfegyver hatásos lőtávolsága és a sörétméret közötti összefüggés.",
            options: ["30-40 méter a hatásos lőtávolság", "10-15 méter a hatásos lőtávolság", "50-60 méter a hatásos lőtávolság"],
            correctAnswer: "30-40 méter a hatásos lőtávolság"
        },
        {
            question: "A sörétes lőfegyver használatának biztonsági távolsága. Befolyásolja-e a kaliber?",
            options: ["Nem befolyásolja a kaliber", "A kaliber határozza meg a távolságot", "A kaliber nem releváns biztonsági szempontból"],
            correctAnswer: "Nem befolyásolja a kaliber"
        },
        {
            question: "A sörétes lőszer részei és azok rendeltetése. Mi a gyöngygolyó és mire használható?",
            options: ["Csappantyú, hüvelyfenék, lőpor, sörétszemek", "Ravasz, cső, markolat", "Csak lövedék és hüvely"],
            correctAnswer: "Csappantyú, hüvelyfenék, lőpor, sörétszemek"
        },
        {
            question: "Mikor szabad a sörétes lőfegyvert megtölteni és mikor köteles üríteni?",
            options: ["Csak a hajtás indulásakor", "Csak a fegyver tisztításakor", "Mindig töltve kell tartani"],
            correctAnswer: "Csak a hajtás indulásakor"
        },
        {
            question: "Hogyan kell a sörétes lőfegyvert tűzkész állapotba hozni, üríteni?",
            options: ["Csőre irányítás, töltés, biztosítás", "Csak a töltés végén biztosítani", "Biztosítás szükségtelen"],
            correctAnswer: "Csőre irányítás, töltés, biztosítás"
        },
        {
            question: "A sörétes lőfegyverből milyen szögben szabad lövéseket leadni?",
            options: ["45 foknál nagyobb szögben", "Csak 30 fokos szögben", "Bármilyen szögben lehet"],
            correctAnswer: "45 foknál nagyobb szögben"
        },
        {
            question: "Mit jelent a sörétes lőszer kaliberjelölése, például a 16/70, 12/76 és 20/65?",
            options: ["A fegyver kaliberét és töltényűr hosszát", "Csak a fegyver kaliberét", "Csak a töltényűr hosszát"],
            correctAnswer: "A fegyver kaliberét és töltényűr hosszát"
        },
        {
            question: "Ismertesse a sörétes lőszer részeit és azok rendeltetését.",
            options: ["Csappantyú, hüvelyfenék, lőpor, fojtás, sörétszemek", "Csak csappantyú és hüvelyfenék", "Csak lőpor és fojtás"],
            correctAnswer: "Csappantyú, hüvelyfenék, lőpor, fojtás, sörétszemek"
        },
        {
            question: "Mikor kell a sörétes lőfegyvert megtölteni és mikor köteles üríteni?",
            options: ["A hajtás kezdetén és áthaladásnál", "Csak a hajtás végén", "Csak a lövés előtt"],
            correctAnswer: "A hajtás kezdetén és áthaladásnál"
        },
        {
            question: "Hogyan kell a sörétes lőfegyvert tűzkész állapotba hozni, üríteni?",
            options: ["A zárszerkezet kinyitása után a töltény behelyezése", "Csak csőtorkolat hátrahúzása", "Csak biztosítás eltávolítása"],
            correctAnswer: "A zárszerkezet kinyitása után a töltény behelyezése"
        },
        {
            question: "A sörétes lőfegyver biztonsági távolsága hogyan számolható ki?",
            options: ["Sörét átmérője szorozva 100 méterrel", "Csak 50 méter", "Nincs biztonsági távolság"],
            correctAnswer: "Sörét átmérője szorozva 100 méterrel"
        },
        {
            question: "A sörétes lőfegyver hatásos lőtávolsága és a sörétméret közötti összefüggés?",
            options: ["30-40 méter a sörétraj terítése miatt", "Csak 20 méterig hatásos", "Nincs összefüggés a mérettel"],
            correctAnswer: "30-40 méter a sörétraj terítése miatt"
        }
    ],

    golyos: [
        {
            question: "A golyós lőfegyvert milyen célra szabad használni?",
            options: ["Nagyvad elejtésére és sportcélra", "Csak apróvad vadászatára", "Csak önvédelmi célra"],
            correctAnswer: "Nagyvad elejtésére és sportcélra"
        },
        {
            question: "Hogyan csoportosítjuk a golyós lőfegyvereket cső és töltési rendszerük szerint?",
            options: ["Billenő csövű és merev csövű", "Csak billenő csövű", "Csak merev csövű"],
            correctAnswer: "Billenő csövű és merev csövű"
        },
        {
            question: "Ismertesse a golyós lőfegyverek tárrendszereit.",
            options: ["Előagytáras, középagytáras, tusatáras", "Csak középagytáras", "Csak tusatáras"],
            correctAnswer: "Előagytáras, középagytáras, tusatáras"
        },
        {
            question: "A golyós lőfegyver csövének jellemzése",
            options: ["A lőszer befogadása, lövedék megvezetése, célba juttatás", "Csak lövedék megvezetése", "Csak célba juttatás"],
            correctAnswer: "A lőszer befogadása, lövedék megvezetése, célba juttatás"
        },
        {
            question: "A golyós vadászlőfegyverek hatásos lőtávolsága nyílt irányzékkal?",
            options: ["80 - 100 méter", "100 - 150 méter", "300 - 400 méter"],
            correctAnswer: "80 - 100 méter"
        },
        {
            question: "A golyós lőszer részei.",
            options: ["Lövedék, töltényhüvely, lőpor, csappantyú", "Csak lövedék és hüvely", "Csak lőpor és gyújtószer"],
            correctAnswer: "Lövedék, töltényhüvely, lőpor, csappantyú"
        },
        {
            question: "Mit jelöl a 8x57JS, a 7x64, a 30-06, illetve a 22 Hornet meghatározás?",
            options: ["A fegyvercső átmérőjét és a lőszerhüvely hosszát", "Csak a fegyvercső átmérőjét", "Csak a lőszerhüvely hosszát"],
            correctAnswer: "A fegyvercső átmérőjét és a lőszerhüvely hosszát"
        },
        {
            question: "Mit jelent a huzagemelkedés és a csavarzathossz? Mivel foglalkozik a célballisztika?",
            options: ["A lövedék fordulatszámának és a roncsolódásának vizsgálatát", "Csak a fordulatszám vizsgálatát", "Csak a roncsolódás vizsgálatát"],
            correctAnswer: "A lövedék fordulatszámának és a roncsolódásának vizsgálatát"
        },
        {
            question: "Hogyan kell a golyós lőfegyvert tűzkész állapotba hozni?",
            options: ["Zárdugattyú felhúzása, töltés, biztosítás", "Csak töltés", "Csak zárdugattyú felhúzása"],
            correctAnswer: "Zárdugattyú felhúzása, töltés, biztosítás"
        },
        {
            question: "A golyós lőszer hüvelyeinek csoportosítása.",
            options: ["Peremes és süllyesztett peremű", "Csak peremes", "Csak süllyesztett peremű"],
            correctAnswer: "Peremes és süllyesztett peremű"
        },
        {
            question: "Mi a külballisztika?",
            options: ["A csőből kilépett lövedék mozgása", "Csak a lövedék sebessége", "A lövedék alakjának változása"],
            correctAnswer: "A csőből kilépett lövedék mozgása"
        },
        {
            question: "A golyós vadászlőfegyverek hatásos lőtávolsága céltávcsővel?",
            options: ["100 - 150 méter", "300 - 500 méter", "Csak 50 méter"],
            correctAnswer: "100 - 150 méter"
        },
        {
            question: "A golyós vadászlőfegyverek biztonsági távolsága?",
            options: ["3000 - 5000 méter", "100 - 200 méter", "1500 - 2000 méter"],
            correctAnswer: "3000 - 5000 méter"
        }
    ]
};

let selectedCategory = "pisztoly";
let timer = 1500; // 25 perc másodpercekben
let timerInterval;
let score; // Az aktuális pontszám
let totalQuestions; // Az összes kérdés száma

// Kategória kiválasztása és kérdések betöltése
function selectCategory() {
    selectedCategory = document.getElementById("category").value;
    loadQuestions();
}

// Véletlenszerű kérdések kiválasztása
function getRandomQuestions(questions, num) {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, num);
}

// Időzítő indítása
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timer--;
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        document.getElementById("timer").innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timer <= 0) {
            clearInterval(timerInterval);
            showResult();
        }
    }, 1000);
}

// Kérdések betöltése a választott kategóriából
// Kérdések betöltése a választott kategóriából, beleértve az általános kérdéseket is
function loadQuestions() {
    clearInterval(timerInterval);
    document.getElementById("questions").innerHTML = ""; // Korábbi kérdések törlése
    timer = 1500; // Időzítő újraindítása
    startTimer();

    // Összefűzzük az általános kérdéseket a kiválasztott kategória kérdéseivel
    const combinedQuestions = [...generalQuestions, ...allQuestions[selectedCategory]];
    const questions = getRandomQuestions(combinedQuestions, 25);
    
    totalQuestions = questions.length; // Az összes kérdés számának beállítása
    score = totalQuestions; // Kezdeti pontszám beállítása az összes kérdés számára
    const questionContainer = document.getElementById("questions");

    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.className = "question";

        const questionText = document.createElement("p");
        questionText.innerText = q.question;
        questionDiv.appendChild(questionText);

        // Válaszlehetőségek keverése
        const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);

        shuffledOptions.forEach((option) => {
            const label = document.createElement("label");
            label.className = "option";
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `question${index}`;
            radio.value = option;
            radio.onclick = () => checkAnswer(index, option, questionDiv, q.correctAnswer);
            label.appendChild(radio);
            label.appendChild(document.createTextNode(option));
            questionDiv.appendChild(label);
        });

        questionContainer.appendChild(questionDiv);
    });
}


// Válaszok ellenőrzése
function checkAnswer(questionIndex, selectedAnswer, questionDiv, correctAnswer) {
    // Előző színek törlése
    questionDiv.querySelectorAll("label.option").forEach((label) => {
        label.style.backgroundColor = "";
    });

    // Helyes vagy hibás válasz színének beállítása és pont levonása hibás válasz esetén
    questionDiv.querySelectorAll("label.option").forEach((label) => {
        const radioInput = label.querySelector("input[type='radio']");
        if (radioInput.value === correctAnswer) {
            label.style.backgroundColor = "lightgreen"; // Helyes válasz háttérszíne
        } else if (radioInput.checked && radioInput.value !== correctAnswer) {
            label.style.backgroundColor = "lightcoral"; // Hibás válasz háttérszíne
            score--; // Pont levonása hibás válasz esetén
        }
    });

    // Ha az összes kérdés megválaszolásra került, akkor az eredmény megjelenítése
    const allAnswered = Array.from(document.querySelectorAll(".question")).every(question =>
        question.querySelector("input[type='radio']:checked") !== null
    );

    if (allAnswered) {
        showResult(); // Eredmény kiírása, ha minden kérdés meg van válaszolva
    }
}

// Eredmény modális ablakban való megjelenítése
function showResult() {
    document.getElementById("modal-result").innerText = `Eredmény: ${score} / ${totalQuestions} pont`;
    document.getElementById("result-modal").style.display = "block";
}

// Új teszt indítása a kiválasztott kategóriával
function startNewTest(category) {
    selectedCategory = category;
    document.getElementById("category").value = category; // Kategóriaválasztó frissítése
    closeModal(); // Modális ablak bezárása
    loadQuestions(); // Kérdések újratöltése az új kategóriával
    window.scrollTo(0, 0); // Az oldal tetejére ugrás
}

// Modális ablak bezárása
function closeModal() {
    document.getElementById("result-modal").style.display = "none";
}

// Oldal betöltésekor az alapértelmezett kategória kérdéseinek betöltése
document.addEventListener("DOMContentLoaded", () => {
    loadQuestions();
});
