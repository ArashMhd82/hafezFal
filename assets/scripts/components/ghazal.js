const tabir = document.getElementById('nextBtn')
const tabirClose = document.getElementById('exit')
const niatBtn = document.getElementById('niatBtn')
const ghazalShomare = document.getElementById('ghazalShomareBtn')
const falBtn = document.getElementById('falBtn')
const soundBtn = document.getElementById('soundBtn')
const tabirCont = document.getElementById('tabirCont')
const tabirContText = document.getElementById('tabirTextCont')

const ghazalUi = document.getElementById('ghazalUi')

const niatFall = [
    ['ای حافظ شیرازی'],
    ['تو محرم هر رازی'],
    ['تو را به خدا و'],
    ['به شاخ نباتت قسم می دهم'],
    ['که هر چه صلاح و مصلحت می بینی'],
    ['برایم آشکار و آرزوی مرا براورده سازی.']
]


tabir.addEventListener('click', () => {
    tabirCont.classList.toggle('disNon')
})

tabirClose.addEventListener('click', () => {
    tabirCont.classList.toggle('disNon')

})

niatBtn.addEventListener('click', () => {
    console.log('niatBtn')
    Niat()
})

falBtn.addEventListener('click', () => {
    console.log('falBtn')
    NewFal()
})

let count = 0
soundBtn.addEventListener('click', () => {
    const sound = document.getElementById('ghazalSound')
    sound.load()
    if(count % 2 == 0){
        console.log(count)
        sound.play()
        count+= 1
    }else{
        sound.pause()
        count+= 1
    }

    console.log('soundBtn')
})

InitGhazal()

function InitGhazal() {
    Niat()
}


function Niat() {
    Show(niatFall)
    Sound('')
    
}

function Show(data) {
    if(data){

        
        ghazalUi.innerHTML = ''
        
        for (let index = 0; index < data.length; index++) {
            const beytUl = document.createElement('ul')
            const betyData = [data[index], data[(index + 1)]]
            
            beytUl.classList = 'beytUl'

            for (let index = 0; index < betyData.length; index++) {
                const element = betyData[index];
                const mesra = document.createElement('li')
                mesra.classList = 'mesraLi'
                mesra.innerText = element
                beytUl.append(mesra)
            }


            
            const beytLi = document.createElement('li')
            beytLi.classList = 'beytLi'
            
            beytLi.append(beytUl)
            
            ghazalUi.append(beytLi)
            
            index++
        }
    }

    
}


function Sound(soundUrl) {
    const sound = document.getElementById('ghazalSound')
    sound.src = `${soundUrl}`
    console.log(sound)
}



async function fetchAPI() {
    const url = 'https://api.ganjoor.net/api/ganjoor/hafez/faal'
    
    try{

        const response = await fetch(url)

        if(!response.ok){
            throw new Error(response.status)
        }
        
        const package = await response.json()
        
        return package
        
        
    }catch(error){
        ul.innerHTML = `<li class="niatStyle" style="color:darkred;">خطا!<br> لطفا دوباره تلاش کنید.</li>`
        console.error(`something came up! ${error}`)
    }

}

async function applyData(data) {
    let ghazalData = []
    
    const fData = await data
    document.getElementById('ghazalShomareBtn').innerText = `غزل ${fData.title.slice(10)}`
    console.log(fData)
    for (let index = 0; index < fData.verses.length; index++) {
        const element = fData.verses[index].text;
        ghazalData[index] = element
        
    }
    Show(ghazalData)
    Sound(fData.recitations[0].mp3Url)
    tabirFunc(fData.poemSummary)




}

async function NewFal() {
    applyData(await fetchAPI())
}

function tabirFunc(tabir) {
    tabirContText.innerText = tabir
}