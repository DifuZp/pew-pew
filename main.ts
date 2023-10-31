radio.onReceivedNumber(function (receivedNumber) {
    y = 0
    střela_X = receivedNumber
    for (let index = 0; index < 4; index++) {
        led.plot(střela_X, y)
        y += 1
        basic.pause(100)
        led.unplot(střela_X, y + -1)
    }
    if (střela_X == 0 && false) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            basic.clearScreen()
            basic.pause(100)
        }
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    if (x > 0) {
        led.unplot(x, 4)
        x += -1
        led.plot(x, 4)
    }
})
input.onButtonPressed(Button.AB, function () {
    y = 3
    if (xx == 0) {
        for (let index = 0; index < 4; index++) {
            xx = 1
            led.plot(x, y)
            y += -1
            basic.pause(100)
            led.unplot(x, y - -1)
            xx = 0
        }
    }
    radio.sendNumber(x)
})
input.onButtonPressed(Button.B, function () {
    if (x < 4) {
        led.unplot(x, 4)
        x += 1
        led.plot(x, 4)
    }
})
let xx = 0
let střela_X = 0
let y = 0
let x = 0
led.plot(2, 4)
x = 2
radio.setGroup(1)
