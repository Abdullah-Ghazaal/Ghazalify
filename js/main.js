const collapElements = document.querySelectorAll(".collapsible");
collapElements.forEach(item => {
    item.addEventListener("click", function(){
        this.classList.toggle("collapsible--expanded");
    })
})