basic.forever(function () {
    let daysRemaining = 327
    let currentHours = 0
    let currentMinutes = 0
    const ONE_SECOND_TO_MILLLISECONDS = 60000

    input.onButtonPressed(Button.A, function () {
        if (currentHours < 23) {
            currentHours += 1
        } else {
            currentHours = 0
        }
        basic.showString(currentHours + '')
    })

    input.onButtonPressed(Button.B, function () {
        if (currentMinutes < 59) {
            currentMinutes += 1
        } else {
            currentMinutes = 0
        }
        basic.showString(currentMinutes + '')
    })




    // input.onButtonPressed(Button.AB, function () {
    //     basic.forever(() => {
    //         basic.showString(daysRemaining + '')
    //     })
    //     basic.forever(() => {
    //         basic.showString(daysRemaining + '')
    //         basic.pause(ONE_SECOND_TO_MILLLISECONDS)
    //         if (currentMinutes < 59) {
    //             currentMinutes = currentMinutes + 1
    //         } else {
    //             currentMinutes = 0
    //             if (currentHours < 23) {
    //                 currentHours = currentHours + 1
    //             } else {
    //                 currentHours = 0
    //                 daysRemaining = daysRemaining - 1
    //             }
    //         }
    //     })
    // })

})
