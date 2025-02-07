/**
 * There is enough code here to get your car moving but there are a few improvements that could be made.
 * 
 * See if you can spot them!
 */
/**
 * The goal here is to create the cars brain. 
 * 
 * The Car will only do what it knows how to do, the radio received block contains the different instructions the car can take currently.
 * 
 * s = stop
 * 
 * l = left
 * 
 * r = right
 * 
 * You can add more functionality by extending the if statement with the plus button.
 * 
 * You need to add the final piece which is driving the car forward
 */
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendValue("s", 0)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendValue("s", 0)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    radio.sendValue("f", 0)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    radio.sendValue("l", 0)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendValue("s", 0)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    radio.sendValue("r", 0)
})
radio.setGroup(2)
motobit.enable(MotorPower.On)
