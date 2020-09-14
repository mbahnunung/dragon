// =============================================== //
// - Remove any active classes (yellow boxes)
// - Add active class to the clicked example box
// - Destroy any pervious Kast
// - On example box click, call Kast
// =============================================== //


// Handle: All Example boxes
$('.card-content').click(function () {
    $('.card-content').removeClass('active');
    $(this).addClass('active');
    
    // Destroy any pervious Kast
    // before we call a new Kast
    $.kast('destroy')    
})

// Handle: Example 1 click function
$('#top-1').click(function () {
    $.kast({
        host: 'sj128.hnux.com',
        colors: 'dynamic',
        theme: 'dynamic',
        mobileCare: false
    })
})

// Handle: Example 2 click function
$('#top-2').click(function () {
    $.kast({
        host: '87.98.216.129',
        port: 4638,
        colors: 'dynamic',
        theme: 'dynamic',
        ui: 'transparent',
        serverInfo: ['servergenre', 'servertitle'],
        autoPlay: true,
        continuous: false
    })
})

// Handle: Example 3 click function
$('#top-3').click(function () {
    $.kast({
        host: 'stream3.radiocenter.si',
        port: 8068,
        colors: 'dynamic',
        theme: 'dynamic'
    })
})

// Handle: Example 4 click function
$('#top-4').click(function () {
    $.kast({
        host: 'live.sg.radiobintangtenggara.com',
        port: 9560,
        protocol: 'http',
        defaultArtwork: ['https://warningfm.github.io/v3/images/1d205655ef29e14a8255c89fe2383a41.jpg'],
        colors: 'dynamic',
        theme: 'dark',
        autoPlay: true,
        played: false
    })
})

// Handle: Example 5 click function
$('#top-5').click(function () {
    $.kast({
        host: '50.7.96.138',
        port: 8235,
        artwork: true,
        colors: 'dynamic',
        theme: 'dynamic',
        ui: 'transparent',
        autoPlay: true
    })
})

// Handle: Example 6 click function
$('#top-6').click(function () {
    $.kast({
        host: '80.86.106.136',
        port: 8090,
        version: 1,
        colors: {
            primary: 'blue grey'
            //accent: 'yellow' // Because accent is yellow by default
        },
        theme: 'dynamic',
        continuous: false
    })
})

// Handle: Example 7 click function
$('#top-7').click(function () {
    $.kast({
        host: '91.250.77.9',
        port: 30710,
        version: 1,
        colors: {
            primary: 'grey',
            accent: 'light blue'
        },
        theme: 'light',
        ui: 'transparent',
        played: false
    })
})

// Handle: Example 8 click function
$('#top-8').click(function () {
    $.kast({
        host: '204.12.193.98',
        port: 8415,
        colors: 'dynamic',
        theme: 'dynamic',
        startTemplate: 'minimized',
        statusBar: false
    })
})

// Handle: Example 9 click function
$('#demo-9').click(function () {
    $.kast({
        host: '206.190.136.212',
        port: 9402,
        colors: 'dynamic',
        theme: 'dynamic',
        mobileCare: ['ultra', '4069px'], // the pixel number here is to force MobileCare to run on Desktops and Tablets too (Up to 4K Screens)
        continuous: false
    })
})
