/**
 * There is enough code here to get your car moving but there are a few improvements that could be made.
 * 
 * See if you can spot them!
 */
/**
 * l = left
 * 
 * r = right
 * 
 * s = stop
 * 
 * f = both motors (left and right) go forward
 */
/**
 * When A is pressed down, the car goes LEFT
 * 
 * When B is pressed down, the car goes RIGHT
 * 
 *  
 * 
 * When either button (A or B) is released, the car STOPS
 * 
 * When both buttons (A & B) are pressed together, the car STOPS
 */
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
    radio.sendValue("s", 0)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
    radio.sendValue("s", 0)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        # . . . .
        # . . . .
        `)
    radio.sendValue("f", 0)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `)
    radio.sendValue("l", 0)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
    radio.sendValue("s", 0)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    basic.showLeds(`
        # # # # .
        # . . . #
        # # # # .
        # . . . #
        # . . . #
        `)
    radio.sendValue("r", 0)
})
radio.setGroup(2)
motobit.enable(MotorPower.On)
