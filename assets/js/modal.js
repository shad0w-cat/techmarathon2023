let modalDiv = document.getElementById("modalOverlay");
document.addEventListener("DOMContentLoaded", () => {
    var eventImages = document.getElementsByClassName("event-click")
    for (let i = 0; i < eventImages.length; i++) {
        eventImages[i].addEventListener("click", function (event) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', `./pages/${this.alt}.html`, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    modalDiv.style.visibility = "visible";
                    var dom = new DOMParser().parseFromString(xhr.responseText, 'text/html')
                    document.getElementById("modalBody").innerHTML = xhr.responseText;
                    document.getElementById("modalHeader").innerHTML = `<span id="closeModalBtn" onclick="closeModal()">&times;</span>` + dom.getElementById("root").getAttribute("data-event");
                }
            };
            xhr.send();
        })
    }
})

function closeModal() {
    modalDiv.style.visibility = "hidden";
}

window.addEventListener("click", function (event) {
    if (event.target == modalOverlay) {
        modalDiv.style.visibility = "hidden";
    }
});