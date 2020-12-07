let panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses() //remove active for previous pannels
        panel.classList.add('active');//activate active class for clicked pannel
    })
})

function removeActiveClasses() {
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}