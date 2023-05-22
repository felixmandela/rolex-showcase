document.addEventListener("scroll", getNewSection)
let currPos = window.scrollY


function getNewSection() {
    let lastSection = document.querySelector("section:last-child");
    let firstSection = document.querySelector("section:first-child");
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
    if (pageOffset > lastSectionOffset - 150) {
        document.querySelector("main").appendChild(firstSection)
    }
    if (pageOffset < firstSectionOffset + 150) {
        document.querySelector("main").insertBefore(lastSection, firstSection)
    }
    // currPos = window.scrollY

    for (let i = 0; i < allSection.length - 1; i++) {
        console.log(allSection[i].getBoundingClientRect().top)
        console.log(allSection[i].getBoundingClientRect().top < centerScreen)
        console.log(centerScreen)
        console.log(allSection[i].getBoundingClientRect().top + allSection[i].clientHeight)
        console.log(allSection[i].getBoundingClientRect().top + allSection[i].clientHeight > centerScreen)
        console.log('-------')
        if (allSection[i].getBoundingClientRect().top < centerScreen && allSection[i].getBoundingClientRect().top + allSection[i].clientHeight > centerScreen) {
            allSection[i].style.color = "black";
            allSection[i - 1].style.color = "#e8e8e8";
            allSection[i + 1].style.color = "#e8e8e8";
        }
    }


}

