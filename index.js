const PHONE_NUMBER = 6285858936731


document.addEventListener("DOMContentLoaded", () => {
    // NAVBAR
    const buttonNav = document.querySelector("nav button")
    const mobileNav = document.querySelector(".mobileNav")
    const mobileNavButton = document.querySelector(".mobileNav button")

    buttonNav.addEventListener("click", () => {
        mobileNav.style.left = "0%"
    })
    mobileNavButton.addEventListener("click", () => {
        mobileNav.style.left = "-150%"
    })

    // CONTACT
    const btnContact = document.querySelector(".special-contact-btn")
    btnContact.addEventListener("click", () => {
        document.location.href = "https://wa.me/"+ PHONE_NUMBER +"/"
    })
})