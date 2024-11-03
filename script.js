const allQuestions = {
    pisztoly: [
        {
            question: "Ismertesse az öntöltő maroklőfegyver fő részeit, azok rendeltetését.",
            options: ["Cső, Szán, Tok, Helyretoló rugó vagy szerkezet, Tár", "Cső, Elsütő billentyű, Rugó", "Markolat, Ravasz, Hüvelyvonó"],
            correctAnswer: "Cső, Szán, Tok, Helyretoló rugó vagy szerkezet, Tár"
        },
        {
            question: "Ismertesse a pisztolylőszerek részeit.",
            options: ["Hüvely, Lövedék, Gyújtó", "Csak lövedék", "Ravasz, Markolat, Töltényűr"],
            correctAnswer: "Hüvely, Lövedék, Gyújtó"
        },
        {
            question: "Ismertesse a maroklőfegyver töltésének, ürítésének szabályait.",
            options: ["Töltés közben a fegyvert a föld vagy az ég felé irányítjuk", "Csak célra tartva tölthető", "A tárat a markolatba helyezzük, majd biztosítunk"],
            correctAnswer: "Töltés közben a fegyvert a föld vagy az ég felé irányítjuk"
        },
        {
            question: "Ismertesse az öntöltő maroklőfegyver hatásos lőtávolságát, hatásmódját.",
            options: ["20-50 méter", "10-20 méter", "100 méter"],
            correctAnswer: "20-50 méter"
        },
        {
            question: "Sorolja fel a maroklőfegyverek használata során előforduló leggyakoribb akadályokat és azok elhárításának módját.",
            options: ["Tár nehezen tolható be, kiesik, nem zár be a szán", "Mindig töltve marad", "Csak karbantartás szükséges"],
            correctAnswer: "Tár nehezen tolható be, kiesik, nem zár be a szán"
        },
        {
            question: "Ismertesse az öntöltő maroklőfegyver karbantartásának szabályait, a karbantartás eszközeit és módját.",
            options: ["Csőtisztító, szerkezet tisztító kefék, tisztító olajok, karbantartó olajok", "Csak vizuális ellenőrzés", "Rendszeres szétszerelés"],
            correctAnswer: "Csőtisztító, szerkezet tisztító kefék, tisztító olajok, karbantartó olajok"
        },
        {
            question: "Ismertesse az öntöltő maroklőfegyver részleges szét- és összeszerelésének végrehajtása.",
            options: ["A fegyver töltetlenségének ellenőrzése, szán és sátorvas kioldása", "Csak szán hátrahúzás", "Biztosítás elvégzése után tárazás"],
            correctAnswer: "A fegyver töltetlenségének ellenőrzése, szán és sátorvas kioldása"
        },
        {
            question: "Mi a különbség revolverező és nem revolverező pisztoly között?",
            options: ["A revolver forgótáras", "Mindkettő forgótáras", "A revolver állandó lövést ad"],
            correctAnswer: "A revolver forgótáras"
        },
        {
            question: "Mi a különbség merevcsövű és csőhátrasiklásos maroklőfegyver között?",
            options: ["A merevcsövű csöve a tokhoz rögzített", "Mindkettő csöve mozog", "Csak csőhátrasiklásos létezik"],
            correctAnswer: "A merevcsövű csöve a tokhoz rögzített"
        },
        {
            question: "Ismertesse az öntöltő maroklőfegyver működési elvét, hatásadatait.",
            options: ["Töltés, elsütés, ürítés és célzás", "Csak töltés és célzás", "Csak ürítés és lövés"],
            correctAnswer: "Töltés, elsütés, ürítés és célzás"
        },
        {
            question: "Ismertesse az öntöltő maroklőfegyver hatásos lőtávolságát, hatásmódját.",
            options: ["20-50 méter, 300-500 m hatás", "10-30 méter, 200 m hatás", "50-100 méter, 400 m hatás"],
            correctAnswer: "20-50 méter, 300-500 m hatás"
        },
        {
            question: "Sorolja fel a maroklőfegyverek használata során előforduló leggyakoribb akadályokat és azok elhárításának módját.",
            options: ["Tárcsere és karbantartás", "Csak karbantartás", "Nincs szükség karbantartásra"],
            correctAnswer: "Tárcsere és karbantartás"
        },
        {
            question: "Ismertesse az öntöltő maroklőfegyver részleges szét- és összeszerelésének végrehajtása során követendő lépéseket.",
            options: ["Töltetlenség ellenőrzése, szán eltávolítása, rugó eltávolítása", "Csak szán eltávolítása", "Nincs szükség szétszerelésre"],
            correctAnswer: "Töltetlenség ellenőrzése, szán eltávolítása, rugó eltávolítása"
        },
        {
            question: "Ismertesse a maroklőfegyver töltésének és ürítésének végrehajtását.",
            options: ["Tár behelyezése, szán hátrahúzása, ellenőrzés", "Csak tár behelyezése", "Csak szán hátrahúzása"],
            correctAnswer: "Tár behelyezése, szán hátrahúzása, ellenőrzés"
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
            options: ["12-es, 16-os, 20-as", "Csak 12-es", "Csak 20-as"],
            correctAnswer: "12-es, 16-os, 20-as"
        },
        {
            question: "Sörétes lőfegyver fő részei és rendeltetésük.",
            options: ["Cső, zárszerkezet, lakatszerkezet, tusa", "Csak cső és tusa", "Csak zárszerkezet és tusa"],
            correctAnswer: "Cső, zárszerkezet, lakatszerkezet, tusa"
        },
        {
            question: "A sörétes lőfegyver hatásos lőtávolsága és a sörétméret közötti összefüggés.",
            options: ["30-40 méter a hatásos lőtávolság", "Csak 20 méterig hatásos", "100 méterig hatásos"],
            correctAnswer: "30-40 méter a hatásos lőtávolság"
        },
        {
            question: "A sörétes lőfegyver használatának biztonsági távolsága. Befolyásolja-e a kaliber?",
            options: ["Nem befolyásolja a kaliber", "Csak a sörétméret befolyásolja", "A cső hossza a döntő"],
            correctAnswer: "Nem befolyásolja a kaliber"
        },
        {
            question: "A sörétes lőszer részei és azok rendeltetése. Mi a gyöngygolyó és mire használható?",
            options: ["Csappantyú, hüvelyfenék, lőpor, sörétszemek", "Csak lőpor és lövedék", "Csak csappantyú és hüvelyfenék"],
            correctAnswer: "Csappantyú, hüvelyfenék, lőpor, sörétszemek"
        },
        {
            question: "Mikor szabad a sörétes lőfegyvert megtölteni és mikor köteles üríteni?",
            options: ["Csak a hajtás indulásakor", "Mindig töltve kell tartani", "Csak ha a vezető utasítást ad"],
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
        }
    ],

    golyos: [
        {
            question: "A golyós lőfegyvert milyen célra szabad használni?",
            options: ["Nagyvad elejtésére és sportcélra", "Csak apróvadra", "Csak önvédelmi célra"],
            correctAnswer: "Nagyvad elejtésére és sportcélra"
        },
        {
            question: "A golyós lőfegyverek csoportosítása cső és töltési rendszerük szerint.",
            options: ["Billenő csövű és merev csövű", "Csak billenő csövű", "Csak merev csövű"],
            correctAnswer: "Billenő csövű és merev csövű"
        },
        {
            question: "Milyen töltési rendszerű golyós lőfegyvereket ismer?",
            options: ["Egylövetű, ismétlő, öntöltő", "Csak öntöltő", "Csak ismétlő"],
            correctAnswer: "Egylövetű, ismétlő, öntöltő"
        },
        {
            question: "A golyós lőfegyverek fő részei, az elsütő és biztosító szerkezet rendeltetése, működése.",
            options: ["Cső, tok, zárdugattyú, tusa", "Csak cső és tusa", "Csak tok és zárdugattyú"],
            correctAnswer: "Cső, tok, zárdugattyú, tusa"
        },
        {
            question: "A golyós lőfegyverek hatásos lőtávolsága. Milyen messzire repülhet el a lövedék?",
            options: ["Nyílt irányzékkal 80-100 m, céltávcsővel 100-150 m", "Csak 50 méterig hatásos", "Maximálisan 2000 méter"],
            correctAnswer: "Nyílt irányzékkal 80-100 m, céltávcsővel 100-150 m"
        },
        {
            question: "A golyós lőfegyverek csoportosítása, hüvelyük és lövedéktípusuk szerint.",
            options: ["Peremes, süllyesztett peremű, szalagos", "Csak peremes", "Csak süllyesztett peremű"],
            correctAnswer: "Peremes, süllyesztett peremű, szalagos"
        },
        {
            question: "A golyós lőszer részei. Van-e tiltott lövedéktípus?",
            options: ["Lövedék, töltényhüvely, lőpor, csappantyú", "Csak lőpor és lövedék", "Csak csappantyú"],
            correctAnswer: "Lövedék, töltényhüvely, lőpor, csappantyú"
        },
        {
            question: "Mit jelöl a 8x57JS, a 7x64, a 30-06, illetve a 22 Hornet meghatározás?",
            options: ["A fegyvercső átmérőjét és a lőszerhüvely hosszát", "Csak a fegyvercső átmérőjét", "Csak a lőszerhüvely hosszát"],
            correctAnswer: "A fegyvercső átmérőjét és a lőszerhüvely hosszát"
        },
        {
            question: "Mit jelent a huzagemelkedés és a csavarzathossz?",
            options: ["A lövedék a csőben megtett teljes fordulata", "Csak a cső átmérője", "Csak a lövedék sebessége"],
            correctAnswer: "A lövedék a csőben megtett teljes fordulata"
        },
        {
            question: "Hogyan kell a golyós lőfegyvert tűzkész állapotba hozni?",
            options: ["Zárdugattyú felhúzása, töltés, biztosítás", "Csak töltés", "Csak zárdugattyú felhúzása"],
            correctAnswer: "Zárdugattyú felhúzása, töltés, biztosítás"
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
function loadQuestions() {
    clearInterval(timerInterval);
    document.getElementById("questions").innerHTML = ""; // Korábbi kérdések törlése
    timer = 1500; // Időzítő újraindítása
    startTimer();

    const questions = getRandomQuestions(allQuestions[selectedCategory], 25);
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
