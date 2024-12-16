const container = document.getElementById('cloudContComp')


cloudFunction()


function cloudFunction() {
    const srcList =  init()

    imgController(srcList)
    
}


function init() {

    let srcList = [];

    for (let index = 0; index < container.getElementsByTagName('img').length ; index++) {
        const element =  container.getElementsByTagName('img')[index];
        if (element.src){
            srcList[index] = element.src
        }
        
    }

    container.innerHTML = ''

    return srcList
}

function imgController(srcList) {

    // for (let index = 0; index < srcList.length; index++) {
    //     const element = srcList[index];
    //     CloudImg(element)
        
    // }

    let counterCloudShow = 1
    CloudImg(srcList[0])

    setInterval(() => {
        
        CloudImg(srcList[counterCloudShow % srcList.length])

        counterCloudShow++
    }, 7000);

}


function CloudImg(src) {  
    const imgTag = document.createElement('img');  
    imgTag.src = src;  
    imgTag.classList = 'img';  
    
    // Set the rightSpace and other properties inside the onload event  
    imgTag.onload = () => {  
        let rightSpace = (-1 * imgTag.width);  
        const speed = Math.floor(Math.random() * (45 - 35 + 1)) + 35;  
        const topSpace = Math.floor(Math.random() * (60 - 5 + 1)) + 5;  

        imgTag.style.top = `${topSpace}%`;  
        imgTag.style.transform = `translateY(${topSpace}%)`;  
        imgTag.style.right = `${rightSpace}px`;  

        let intervalID = setInterval(() => {  
            imgTag.style.right = `${rightSpace}px`;  
            rightSpace += 1;  
            if (rightSpace > window.innerWidth) {  
                clearInterval(intervalID);  
                container.removeChild(imgTag);  
            }  
        }, speed);  
    };  

    // Append the image to the container before it has loaded  
    container.appendChild(imgTag);  
}