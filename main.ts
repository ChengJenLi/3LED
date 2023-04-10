function 全黑 () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function 黃燈閃爍 () {
    黃燈()
    basic.showNumber(3)
    basic.pause(200)
    全黑()
    basic.pause(200)
    黃燈()
    basic.showNumber(2)
    basic.pause(200)
    全黑()
    basic.pause(200)
    黃燈()
    basic.showNumber(1)
    basic.pause(200)
}
function 紅燈 () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function 黃燈 () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function 倒計10秒 () {
    t = 10
    for (let index = 0; index < 10; index++) {
        t += -1
        basic.showString("" + (t))
        basic.pause(1000)
    }
}
function 綠燈 () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
let t = 0
basic.showIcon(IconNames.StickFigure)
basic.forever(function () {
    紅燈()
    倒計10秒()
    黃燈閃爍()
    綠燈()
    倒計10秒()
    黃燈閃爍()
})
