namespace storyboard {
    function runAdafruitLogo(done: () => void) {
        const adafruitLogo = img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . d d . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . d d d . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . d d d d 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . d d d d d 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . d d d d d d 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . d d d d d d 6 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . d d d d d d d 6 6 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . d d d d d d 6 6 6 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . d d d d d d d 6 6 6 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . d d d d d d d 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . d d d d d d d 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . d d d d d d d 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . a a a a a a a a a a a . . . . . . . d d d d d d d 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            a a a a a a a a a a a a d d d . . . . d d d d d d d 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            a a a a a a a a a a a a d d d d d . . d d d d d d d 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            a a a a a a a a a a a a d d d d d d . d d d d d d 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . a a a a a a a a a a d d d d d d d d d d d d d d 6 . 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . a a a a a a a a a a d d d d d d d d d d d d d 6 . . 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . a a a a a a a a a d d d d d d d d d d d d d 6 . . . 6 6 6 6 6 6 . 6 6 5 5 5 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . a a a a a a a a d d d d d d d d d d d d d d . . . . 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . a a a a a a a d d d d d d d d d d d d d 6 . . . 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . a a a a a a d d d d d d d d d d d d d d 6 . . . 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . a a a a a d d d d d d . . . d d d d 6 6 6 . . 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . a a a a d d d d d d d . . . . d d 6 6 6 . 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . a a d d d d d d d d d . . . . d 6 6 6 6 6 6 6 6 6 . . 6 6 5 5 5 5 5 5 5 5 b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . a d d d d d d d d d d d . . . 6 6 6 6 6 6 6 . . . . . . 5 5 5 5 5 5 5 b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . d d d d d d d d d d d d d 6 6 6 6 6 6 . . . . . . . 5 5 5 5 5 5 5 5 b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . d d d d d d d d d d 6 6 6 6 6 6 6 6 6 . . 6 6 5 5 5 5 5 5 5 5 b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . .
            . . . . . . . . . . . d d d d d d d d d 6 6 . 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . .
            . . . . . . . . . . d d d d d d d d d 6 . . . 6 6 6 . 6 6 6 6 6 5 5 5 5 5 5 5 5 b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . .
            . . . . . . . . . d d d d d d d d d . . . . 6 6 6 6 . . 6 6 6 5 5 5 5 5 5 5 5 5 b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . .
            . . . . . . . . d d d d d d d d d d . . . . 6 6 6 6 . . . 6 6 5 5 5 5 5 5 5 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . .
            . . . . . . . . d d d d d d d d d . . . 6 6 6 6 6 6 6 . . 6 5 5 5 5 5 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . .
            . . . . . . . d d d d d d d d d d . 6 6 6 6 6 6 6 6 6 . . . 5 5 5 5 5 5 5 . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 . . . . 1 1 1 1 1 1 1 1 1 1 1 1 . . . . 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . 1 1 1 1 1 1 1 1 1 . .
            . . . . . . . d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 . . 5 5 5 5 5 5 5 5 . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . 1 1 1 1 1 1 1 1 1 1 . 1 1 1 1 1 . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . 1 1 1 1 1 1 1 1 1 . .
            . . . . . . d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 . 5 5 5 5 5 5 5 5 . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . 1 1 1 1 1 1 1 1 1 . .
            . . . . . . d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 b b . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . 1 1 1 1 1 1 1 1 1 . .
            . . . . . . d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 b b . . . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 1 . . . . . 1 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . .
            . . . . . d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 5 b b . . . . . . . . . . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 1 . . . . . . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . .
            . . . . . d d d d d d d d d d 6 6 6 6 6 6 6 . 6 6 6 6 5 5 5 5 5 5 5 5 5 b b b b . . . . . . . . . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . . . . . . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . .
            . . . . . d d d d d d d d d d 6 6 6 6 6 6 . . 6 6 6 6 5 5 5 5 5 5 5 5 5 b b b b . . . . . 1 1 1 1 1 1 1 1 . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . . 1 1 1 1 1 . . . . 1 1 1 1 1 1 1 1 . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . . . . . . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . .
            . . . . d d d d d d d d d d 6 6 6 6 6 6 . . . . 6 6 5 5 5 5 5 5 5 5 5 b b b b b . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . . 1 1 1 1 1 . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . . . . . . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . .
            . . . . d d d d d d d d d d 6 6 6 6 . . . . . . 6 6 5 5 5 5 5 5 5 5 5 b b b b b . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . . . . . . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . .
            . . . . d d d d d d d d d 6 6 6 . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 b b b b b . . . 1 1 1 1 1 1 . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 1 . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . . . . . . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . .
            . . . . d d d d d d d d d . . . . . . . . . . . . . 5 5 5 5 5 5 5 5 b b b b b b . . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . . . . . . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . .
            . . . . d d d d d d . . . . . . . . . . . . . . . . . 5 5 5 5 5 5 5 b b b b b b . . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . . . . . . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 5 5 5 5 b b b b b b b . . . 1 1 1 1 1 1 . . . . 1 1 1 1 1 1 . . 1 1 1 1 1 1 . . . . . 1 1 1 1 1 1 . . 1 1 1 1 1 1 . . . . 1 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . . . . . . . 1 1 1 1 1 1 . . . . 1 1 1 1 1 1 . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 5 5 5 b b b b b b b . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 . . 1 1 1 1 1 1 1 1 1 . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 b b b b b b b b . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 . . 1 1 1 1 1 1 1 1 1 . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b . . . . . 1 1 1 1 1 1 1 1 1 . 1 1 1 1 1 . . . 1 1 1 1 1 1 1 1 1 1 . 1 1 1 1 1 . . . 1 1 1 1 1 1 1 1 1 . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . . . . . . . . 1 1 1 1 1 1 1 1 1 . 1 1 1 1 1 . . 1 1 1 1 1 . . . 1 1 1 1 1 1 1 1 . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b . . . . . . 1 1 1 1 1 1 1 . . 1 1 1 1 1 . . . . 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 . . . . 1 1 1 1 1 1 1 . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . . . 1 1 1 1 1 . . . . . . . . . . 1 1 1 1 1 1 1 . . 1 1 1 1 1 . . 1 1 1 1 1 . . . . 1 1 1 1 1 1 . . .
        `;

        const adafruitLogoColors = [
            0x000000,
            0x17abff,
            0xdf2929,
            0xc600ff,
            0xff007d,
            0x00ff72,
            0xe5ff00,
            0x0034ff,
            0xffffff,
            0x00efff,
            0xff0000,
            0x7400db,
            0x636363,
            0xff7a00,
            0x2d9f00,
            0x000000
        ]
        palette.setColors(color.createBuffer(adafruitLogoColors));
        scene.setBackgroundColor(0xf);
        const sprite = sprites.create(adafruitLogo);
        sprite.x = screen.width;
        sprite.vx = -125;
        sprite.ax = 100;
        pause(1500)
        sprite.ax = -200;
        pause(2000);

        game.onUpdate(function () {
            if (sprite.vx > -5 && sprite.vx < 0)
                sprite.vx = 0;
        })

        done();
    }

    /**
     * Adafruit boot sequence
     */
    //% fixedInstance whenUsed block="Adafruit"
    export const adafruitBootSequence = new BootSequence(runAdafruitLogo, 0)
}