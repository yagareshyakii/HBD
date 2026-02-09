const paragraph =
"Happy Birthday Suwasineee🖤✨🎉🎀 Epodhum Happy ah iru sandhosamaa iru..nalla sapduuu....🎗️💞 Nee 100 yrs sandhosamaa irukanum 🤩💫 na samyy ta epodhum atha venditeyy tha irupeyy 💯✨En life la na una pathadheyy romba lucky ah feel pandreyy theriumaa...🙂‍↕️😇💕naa una narayaraa kasta padicherukeyyy kova paduthetukeyyy athala manicheruu 😄 analuu Neeyum ena naraya apdi pannerukaaa nanu manicheteyy viduu..😁 Un b day ku enala endha gift  🎁 vanga mudilaa.. vangureyy nu sonaluu nee vena tha solluvaa enaku theriyumm... Enaku therinjadha vachii etho pannerukeyy unakuu 🥳 Aprmaa na unaku thenmuttai thenga muttai 🍫 la vange thareyyy...Naraya spcl memories irukuu un kudaa enoda kutty kutty happiness ehh nee thaa 🌸🥰 Epodhum Happy ah iru sandhosamaa iruu 😍🌟 Once again Happy Birthday Suwasineee 🖤💎🌎";

let i = 0;
let typingStarted = false;
const speed =35;

function typeLetter() {
    if (i < paragraph.length) {
        document.getElementById("text").textContent += paragraph.charAt(i);
        i++;
        setTimeout(typeLetter, speed);
    }
}

function goToPage(pageId) {
    const page = document.getElementById(pageId);

    page.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
        page.classList.add("active-page");

        if (pageId === "page5" && !typingStarted) {
            typingStarted = true;
            typeLetter();
        }
    }, 700);
}