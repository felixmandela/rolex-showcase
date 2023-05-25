const main = document.getElementById("main");
const linkHeader = document.getElementById("link-container");
window.addEventListener("scroll", getNewSection);
window.addEventListener("scroll", () => {
    document.querySelector("#landing-screen").style.opacity = "0"
    document.querySelector("main").style.opacity = "1"
    document.querySelector("footer").style.opacity = "1"
});

function getNewSection() {
    const body = document.getElementById("body")
    const lastLink = document.querySelector(".link-wrapper:last-child");
    const firstLink = document.querySelector(".link-wrapper:first-child");
    const lastLinkOffset = lastLink.offsetTop + lastLink.clientHeight;
    const linkWrapper = document.getElementsByClassName("link-wrapper");
    const headerLink = document.getElementsByClassName("header-link");
    const imageContainer = document.getElementsByClassName("image-container");
    const bgColor = document.getElementsByClassName("bg-color");
    const textColor = document.getElementsByClassName("text-color");
    const centerScreen = window.innerHeight / 2;
    const pageOffset = window.scrollY + window.innerHeight;
    const firstLinkOffset = window.innerHeight - firstLink.offsetTop;

    // create infinite loop effect
    // scroll up
    if (pageOffset - 10 < firstLinkOffset) {
        document.querySelector("#link-container").insertBefore(lastLink, firstLink);
    }
    // scroll down
    if (pageOffset > lastLinkOffset - 10) {
        document.querySelector("#link-container").appendChild(firstLink);
    }

    let activeIndex = -1;
    // select the item on the middle of the screen
    for (let i = 0; i < linkWrapper.length; i++) {
        const linkRect = linkWrapper[i].getBoundingClientRect();
        // move the active criteria to near the bottom of the screen
        if (window.innerWidth <= 625) {
            if (linkRect.top < window.innerHeight - 150 && linkRect.top + linkRect.height > window.innerHeight - 150) {
                activeIndex = i;
                break;
            }
        } else {
            if (linkRect.top < centerScreen && linkRect.top + linkRect.height > centerScreen) {
                activeIndex = i;
                break;
            }
        }
    }

    // add active class to change styling
    for (let i = 0; i < headerLink.length; i++) {
        if (i === activeIndex) {
            headerLink[i].classList.add("active");
            imageContainer[i].style.opacity = "1";
            body.style.backgroundColor = `${bgColor[i].innerHTML}`;
            headerLink[i].style.color = `${textColor[i].innerHTML}`
        } else {
            headerLink[i].classList.remove("active");
            imageContainer[i].style.opacity = "0";
            imageContainer[i].style.backgroundColor = "";
            headerLink[i].style.color = "";
        }
    }
}


