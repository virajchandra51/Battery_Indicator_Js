// BATTERY
initBattery()

function initBattery(){
  const batteryCapsuleLiquid = document.querySelector('.battery_capsule_liquid')
  const batteryStatus = document.querySelector('.battery_status')
  const batteryPercentage = document.querySelector('.battery_percentage')

  navigator.getBattery().then((batt) => {
    updateBattery = () => {
      let level = Math.floor(batt.level*100)
      batteryPercentage.innerHTML = level+'%'
      batteryCapsuleLiquid.style.height = `${parseInt(batt.level*100)}%`
      if (level == 100) {
        batteryStatus.innerHTML = 'Full Battery <i class="ri-battery-2-fill green_color"></i>'        
        batteryCapsuleLiquid.style.height = '103%'
      }
      else if(level<=20 & !batt.charging){
        batteryStatus.innerHTML = 'Low Battery <i class="ri-plug-line animated_red"></i>' 
      }
      else if(batt.charging){
        batteryStatus.innerHTML = 'Charging . . .<i class="ri-flashlight-line animated_green"></i>'
      }
      else{
        batteryStatus.innerHTML = ''
      }

      if(level<=20){
        batteryCapsuleLiquid.classList.add('gradient_color_red')
        batteryCapsuleLiquid.classList.remove('gradient_color_green','gradient_color_orange','gradient_color_yellow')
      }
      else if(level<=40){
        batteryCapsuleLiquid.classList.add('gradient_color_orange')
        batteryCapsuleLiquid.classList.remove('gradient_color_green','gradient_color_red','gradient_color_yellow')
      }
      else if(level<=80){
        batteryCapsuleLiquid.classList.add('gradient_color_yellow')
        batteryCapsuleLiquid.classList.remove('gradient_color_green','gradient_color_red','gradient_color_orange')
      }
      else
      {
        batteryCapsuleLiquid.classList.add('gradient_color_green')
        batteryCapsuleLiquid.classList.remove('gradient_color_orange','gradient_color_red','gradient_color_yellow')
      }
    }
    updateBattery()
    batt.addEventListener('chargingchange',() => {updateBattery()})
    batt.addEventListener('levelchange',() => {updateBattery()})
  })
}