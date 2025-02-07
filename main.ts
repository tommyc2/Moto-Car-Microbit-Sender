/**
 * There is enough code here to get your car moving but there are a few improvements that could be made.
 * 
 * See if you can spot them!
 */
/**
 * When A is pressed down, the car goes left
 * 
 * When B is pressed down, the car goes right
 * 
 *  
 * 
 * When either button (A or B) is released, the car stops
 */
/**
 * See if you can add more improvements here!
 * 
 * See if you can make the car reverse!
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
