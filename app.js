document.addEventListener("scroll", getNewSection)
const main = document.getElementById("main")
let sect = document.getElementsByClassName("section")

function getNewSection() {
    let lastSection = document.querySelector("section:last-child");
    let firstSection = document.querySelector("section:first-child");
    let wholeSection = document.querySelectorAll("section")
    let lastSectionOffset = lastSection.offsetTop + lastSection.clientHeight;
    let allSection = document.getElementsByClassName("section-link")
    let centerScreen = window.innerHeight / 2
    // console.log(lastSection.clientHeight)
    // console.log(lastSection.offsetTop)
    // console.log('---')
    let pageOffset = window.scrollY + window.innerHeight
    // console.log(pageOffset)
    let firstSectionOffset = window.innerHeight - firstSection.offsetTop;
    // console.log(firstSectionOffset)
    // console.log(window.innerHeight)
    // console.log(firstSection.offsetTop)
    if (pageOffset - 30 < firstSectionOffset) {
        // main.innerHTML = newHtml + main.innerHTML
        document.querySelector("main").insertBefore(lastSection, firstSection)
    }
    if (pageOffset > lastSectionOffset - 30) {
        // main.innerHTML += newHtml
        document.querySelector("main").appendChild(firstSection)
    }


    for (let i = 0; i < allSection.length - 1; i++) {
        // console.log(allSection[i].getBoundingClientRect().top)
        // console.log(allSection[i].getBoundingClientRect().top < centerScreen)
        // console.log(centerScreen)
        // console.log(allSection[i].getBoundingClientRect().top + allSection[i].clientHeight)
        // console.log(allSection[i].getBoundingClientRect().top + allSection[i].clientHeight > centerScreen)
        // console.log('-------')
        // console.log(centerScreen)
        // console.log(window.scrollY)
        if (allSection[i].getBoundingClientRect().top < centerScreen && allSection[i].getBoundingClientRect().top + allSection[i].clientHeight > centerScreen) {
            // allSection[i].style.color = "black";
            // allSection[i - 1].style.color = "#e8e8e8";
            // allSection[i + 1].style.color = "#e8e8e8";

            // console.log('----')
            // console.log(allSection[i].offsetTop)
            // console.log((allSection[i].clientHeight / 2))
            // console.log(allSection[i].offsetTop + (allSection[i].clientHeight / 2))
            // console.log(window.scrollY)
            // console.log('----')

            allSection[i].classList.add('active');
            allSection[i - 1].classList.remove('active');
            allSection[i + 1].classList.remove('active');
        } else {
            allSection[i].classList.remove('active');
        }
    }


}

// for (let i = 0; i < sect.length - 1; i++) {
//     sect[i].addEventListener("click", () => window.scrollTo(0, 1000))
// }

for (let i = 0; i < sect.length - 1; i++) {
    sect[i].addEventListener("click", (e) => {
        sect = document.getElementsByClassName("section")
        let scrolly = window.scrollY
        window.scrollTo(0, e.target.offsetTop - (174 * 2));
        console.log('---')
        console.log(e.target)
        console.log(scrolly)
        console.log(sect[i].offsetTop)
        console.log(sect[i].offsetTop + (sect[i].clientHeight / 2))
        console.log('---')
    })
}

function test() {
    window.scrollTo(0, 300)
}

// window.onload = test
// window.addEventListener("load", () => window.scrollTo(0, 0))