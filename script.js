(function main() {
      function reset() {    
        document
          .querySelectorAll('.selected')
          .forEach(e => e.classList.remove("selected"));
      }
    
      function secsUntilNextMultipleOf5() {
        const date = new Date();
        const mins = date.getMinutes() % 5;
        const secs = date.getSeconds();
                
        return (4-mins)*60 + (59-secs);
      }
    
    const date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
      
    reset();
  
    if (hour > 12) {
      hour = hour-12;
    } else if (hour === 0) {
      hour = 12;
    }
    
    minute = Math.floor(minute/5);
    
    if (minute > 0 && minute <= 6) {
      document.querySelector(`.past`).classList.add("selected");
    } else if (minute > 6 && minute < 12) {
      document.querySelector(`.to`).classList.add("selected");
    }
  
    if (minute > 6 && minute < 12) {
      minute = 12 - minute;
      hour++;  
    }

    if (minute > 0) {
      document.querySelector(`.mins.m${5*minute}`).classList.add("selected");
    } else {
      document.querySelector(`.oclock`).classList.add("selected");
    }
    
    document.querySelector(`.hour.h${hour}`).classList.add("selected");
    
    setTimeout(main, (secsUntilNextMultipleOf5()+1)*1000);
  })();