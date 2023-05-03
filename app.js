(function() {
    const pictures = [
        "AAPL",
        "AMZN",
        "AMD",
        "DIS",
        "L",
        "MSFT"
    ];

    const buttons = document.querySelectorAll(".btn")
    const imageDIV = document.querySelector(".img-container")

    let counter = 0

    buttons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            if (button.classList.contains("btn-left")) {
                counter--
                if (counter < 0) {
                    counter = pictures.length - 1
                }
                imageDIV.style.background = `url('./img/${pictures[counter]}.png')`
            }

            if (button.classList.contains("btn-right")) {
                counter++
                if (counter > pictures.length - 1) {
                    counter = 0
                }
                imageDIV.style.background = `url('./img/${pictures[counter]}.png')`
            }
    })
})
})();