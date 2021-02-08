const images=()=>{
    console.log('images')
    const imgPopup=document.createElement('div')
    const workSection=document.querySelector('.works')
    const bigImage=document.createElement('img')

    imgPopup.classList.add('popup')
    workSection.appendChild(imgPopup)
    imgPopup.style.justifyContent='center'
    imgPopup.style.alignItems='center'
    imgPopup.style.display='none'

    imgPopup.appendChild(bigImage)

    workSection.addEventListener('click',(event)=>{
        event.preventDefault()
        let target=event.target
        console.log(target)
        if(target && target.classList.contains('preview')){

            imgPopup.style.display='flex'
            const path=target.parentNode.getAttribute('href')
            console.log(path)

            bigImage.setAttribute('src',path)
        }

        if (target && target.matches('div.popup')){
            console.log('здесь')
            imgPopup.style.display='none'
 
        }

    })



}

export default images