const timer=(id,dedaline)=>{
 


    const getTimeRemaining=(endtime)=>{
        const time=Date.parse(endtime)-Date.parse(new Date())
        const secounds=Math.floor((time/1000)% 60)
        const minutes=Math.floor((time/1000/60) % 60)
        const hours=Math.floor((time/1000/60/60) % 24)
        const days=Math.floor((time/1000/60/60/24) % 60) 
        // console.log('secounds',secounds)
        // console.log('sec',time.getSeconds())

        return {
            'total':time,
            'days':days,
            'hours':hours,
            'minutes':minutes,
            'secounds':secounds
        }


    }

    const setClock=(selector,endtime)=>{
        // console.log('внутри setClock')
        const updateClock=()=>{
            // console.log('updateClock')
            const time=getTimeRemaining(endtime)

            days.textContent=addZero(time.days)
            hours.textContent=addZero(time.hours)
            minutes.textContent=addZero(time.minutes)
            secounds.textContent=addZero(time.secounds) 
           
            if(time.total <=0){
                days.textContent='00'
                hours.textContent='00'
                minutes.textContent='00'
                secounds.textContent='00'

                clearInterval(timeInterval)
            }


        } 
        const timer=document.querySelector(selector)
        const days=timer.querySelector('#days')
        const hours=timer.querySelector('#hours')
        const minutes=timer.querySelector('#minutes')
        const secounds=timer.querySelector('#seconds')

        const timeInterval=setInterval(updateClock, 1000)
        
        
        updateClock()

    }
    const addZero=(num)=>{
        if(num<=9){
            return '0'+num
        }else{
            return num
        }

    }

  

    setClock(id,dedaline)
}
export default timer