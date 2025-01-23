function cost (mins) { 

  let sum=0 //Final cost of lesson
  const hour = 30; //cost per hour
  const half=10; //cost per 30 minutes
  var hourly = 65; //hourly minutes including 5 minutes grace period
  var halfHourly =35; //half hourly including 5 minutes grace period
  var extraMins=0; //extra mins 
  var extraCharges=0;//extra charges
  
  //If mins is less than hourly so under an hour
  if (mins < hourly){
   //return cost of an hour 
   sum = sum+hour;
  

  } else if
    //mins is greater than hourly i.e 65 minutes as there ais a free 5 minute grace period
    (mins > hourly ){
    //extraMins = mins - hourly
    extraMins = mins - hourly;
    
    //extraCharges = extraMins /30 minutes to return the amount of extra half hours to be charged for
    extraCharges = extraMins / 30 
    
    //extraCharges will equal extraCharges * 10(cost per extra 30 minutes, and then rounded up to the next largest integer.
    extraCharges =Math.ceil(extraCharges)*10;
        
    sum = hour + extraCharges;
  }
  return (sum);
} 
  