export default class CountdownTimer{
    constructor({ selector, targetDate }) {
        // this.selector = selector;
        this.targetDate = targetDate;
        this.refs = {
            days: document.querySelector(`${selector} [data-value="days"]`),
            hours: document.querySelector(`${selector} [data-value="hours"]`),
            mins: document.querySelector(`${selector} [data-value="mins"]`),
            secs: document.querySelector(`${selector} [data-value="secs"]`),
            timerFace: document.querySelector('#timer-1'),
        };
    }
     
    start() {
        setInterval(() => {
            this.currentTime = Date.now();
            const deltaTime = this.targetDate - this.currentTime;
            
            this.updateTimer(this.getTimeComponents(deltaTime));
        }, 1000);
         
    };

    updateTimer({ days, hours, mins, secs }) {
        this.refs.days.innerHTML = days,
        this.refs.hours.innerHTML = hours,
        this.refs.mins.innerHTML = mins,
        this.refs.secs.innerHTML = secs;
    }

   pad(value) {
    return String(value).padStart(2, '0');
   }

    getTimeComponents(time) {
        
        const days = this.pad( Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

       return { days, hours, mins, secs };
       console.log({ days, hours, mins, secs })
    }
    
}