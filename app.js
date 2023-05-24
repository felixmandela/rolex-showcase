const header = document.getElementById("header");
const linkHeader = document.getElementById("link-container");
header.addEventListener("scroll", getNewSection);

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
    const pageOffset = header.scrollTop + window.innerHeight;
    const firstLinkOffset = window.innerHeight - firstLink.offsetTop;

    if (pageOffset - 10 < firstLinkOffset) {
        document.querySelector("#link-container").insertBefore(lastLink, firstLink);
    }

    if (pageOffset > lastLinkOffset - 10) {
        document.querySelector("#link-container").appendChild(firstLink);
    }

    let activeIndex = -1;

    for (let i = 0; i < linkWrapper.length; i++) {
        const linkRect = linkWrapper[i].getBoundingClientRect();
        if (linkRect.top < centerScreen && linkRect.top + linkRect.height > centerScreen) {
            activeIndex = i;
            break;
        }
    }


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










function startScroll() {
    header.scrollTo(0, 30)
}

window.onload = startScroll;
