const cont = document.getElementById('clouds2')
const LeftClouds = document.getElementById('CloudsLeft')
const RightClouds = document.getElementById('CloudsRight')

window.addEventListener('scroll', () => {
    if ((window.scrollY - ( 0.5 * window.innerHeight)) >= 0){
        LeftClouds.style.left = `-${0.2 * (window.scrollY - ( 0.5 * window.innerHeight))}%`
        RightClouds.style.right = `-${0.2 * (window.scrollY - ( 0.5 * window.innerHeight))}%`
    }
})