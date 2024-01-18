Feature: Ordering tickets
    Scenario: Order a standart ticket
        Given user is on "/client/index.php" page
        When user select date tomorrow
        When user select movie first
        When user choose a standart seat "/client/hall.php"
        When user orders ticket on button "Забронировать"
        Then user sees button "Получить код бронирования"

    Scenario: Order a VIP ticket
        Given user is on "/client/index.php" page
        When user select date tomorrow
        When user select movie second
        When user choose a VIP seat "/client/hall.php"
        When user orders ticket on button "Забронировать"
        Then user sees button "Получить код бронирования"  

    Scenario: Disable order ticket
        Given user is on "/client/index.php" page
        When user select date tomorrow
        When user select movie first
        When user choose a disable seat "/client/hall.php"
        Then user sees inactive button "Забронировать"