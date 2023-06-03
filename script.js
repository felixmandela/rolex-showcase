const main = document.getElementById("main");
const watchContainer = document.getElementById("watch-container");

window.addEventListener("scroll", getNewSection);
window.addEventListener("scroll", () => {
    document.querySelector("#landing-screen").style.opacity = "0";
    document.querySelector("main").style.opacity = "1";
    document.querySelector("footer").style.opacity = "1";
});

function getNewSection() {
    const body = document.getElementById("body");
    const lastWatch = document.querySelector(".watch-item:last-child");
    const firstWatch = document.querySelector(".watch-item:first-child");
    const lastWatchOffset = lastWatch.offsetTop + lastWatch.clientHeight;
    const watchItem = document.getElementsByClassName("watch-item");
    const watchName = document.getElementsByClassName("watch-name");
    const watchImageContainer = document.getElementsByClassName("watch-image-container");
    const bgColor = document.getElementsByClassName("bg-color");
    const textColor = document.getElementsByClassName("text-color");
    const centerScreen = window.innerHeight / 2;
    const pageOffset = window.scrollY + window.innerHeight;
    const firstWatchOffset = window.innerHeight - firstWatch.offsetTop;

    // Create infinite loop effect - scroll up
    if (pageOffset - 10 < firstWatchOffset) {
        watchContainer.insertBefore(lastWatch, firstWatch);
    }

    // Scroll down
    if (pageOffset > lastWatchOffset - 10) {
        watchContainer.appendChild(firstWatch);
    }

    let activeIndex = -1;

    // Select the item in the middle of the screen
    for (let i = 0; i < watchItem.length; i++) {
        const watchRect = watchItem[i].getBoundingClientRect();

        // Move the active criteria near the bottom of the screen
        if (window.innerWidth <= 625) {
            if (
                watchRect.top < window.innerHeight - 150 &&
                watchRect.top + watchRect.height > window.innerHeight - 150
            ) {
                activeIndex = i;
                break;
            }
        } else {
            if (watchRect.top < centerScreen && watchRect.top + watchRect.height > centerScreen) {
                activeIndex = i;
                break;
            }
        }
    }

    // Add active class to change styling
    for (let i = 0; i < watchName.length; i++) {
        if (i === activeIndex) {
            watchName[i].classList.add("is-active");
            watchImageContainer[i].style.opacity = "1";
            body.style.backgroundColor = `${bgColor[i].innerHTML}`;
            watchName[i].style.color = `${textColor[i].innerHTML}`;
        } else {
            watchName[i].classList.remove("is-active");
            watchImageContainer[i].style.opacity = "0";
            watchImageContainer[i].style.backgroundColor = "";
            watchName[i].style.color = "";
        }
    }
}
