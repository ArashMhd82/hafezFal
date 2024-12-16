const tree = document.getElementById('treeImg')
const tree2 = document.getElementById('treeImg2')
const tree3 = document.getElementById('treeImg3')
const tree4 = document.getElementById('treeImg4')

const cloud = document.getElementById('upperCloud')

window.addEventListener('scroll', () => {
    tree.style.bottom = `${(window.scrollY * 0.35)}px`
    tree2.style.bottom = `${(window.scrollY * 0.15)}px`
    tree3.style.bottom = `-${(window.scrollY * 0.05)}px`
    tree4.style.bottom = `-${(window.scrollY * 0.05)}px`
    
    tree.style.left = `-${(window.scrollY * 0.4)}px`
    tree2.style.right = `-${(window.scrollY * 0.2)}px`
    tree3.style.right = `calc(20% - ${(window.scrollY * 0.7)}px)`
    tree4.style.left = `calc(20% - ${(window.scrollY * 0.7)}px)`

    if (window.scrollY <= 120){
        cloud.style.height = `calc(30vh - ${window.scrollY}px)`
    }else{
        cloud.style.height = `15vh`
    }
    
})