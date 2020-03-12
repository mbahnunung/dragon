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
        host: 'live.sg.radiobintangtenggara.com',
        port: 9560,
        protocol: 'http',
        version: 2,
        sid: 1,
        directStreamURL: 'https://castprox.herokuapp.com/http://live.sg.radiobintangtenggara.com:9560/rbtfm',
        defaultArtwork: ['no-cover-large.png'],
        colors: 'dynamic',
        theme: 'dynamic',
        mobileCare: false
    })
})

// Handle: Example 2 click function
$('#top-2').click(function () {
    $.kast({
        host: 'live.radiobintangtenggara.com',
        port: 8000,
        protocol: 'http',
        version: 2,
        sid: 1,
        directStreamURL: 'https://castprox.herokuapp.com/http://live.radiobintangtenggara.com:8000/mbahnunungonline',
        defaultArtwork: ['no-cover-large.png'],
        colors: 'dynamic',
        theme: 'dynamic',
        ui: 'colored',
        //serverInfo: ['servergenre', 'servertitle'],
        autoPlay: true,
        continuous: true
    })
})

// Handle: Example 3 click function
$('#demo-3').click(function () {
    $.kast({
        host: '64.40.111.77',
        port: 8000,
        colors: 'dynamic',
        theme: 'dynamic'
    })
})

// Handle: Example 4 click function
$('#demo-4').click(function () {
    $.kast({
        host: 'live.sg.radiobintangtenggara.com',
        port: 9560,
        version: 2,
        defaultArtwork: ['images/video-games-music.jpg', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'dark',
        autoPlay: true,
        played: false
    })
})

// Handle: Example 5 click function
$('#demo-5').click(function () {
    $.kast({
        host: 'live.citrafmradio.com',
        port: 9882,
        artwork: true,
        colors: 'dynamic',
        theme: 'dynamic',
        //ui: 'transparent',
        autoPlay: true
    })
})

// Handle: Example 6 click function
$('#demo-6').click(function () {
    $.kast({
        host: 'tgas.dyndns.org',
        port: 8010,
        version: 2,
        protocol: 'http',
        colors: {
            primary: 'blue grey'
            //accent: 'yellow' // Because accent is yellow by default
        },
        theme: 'dynamic',
        continuous: false
    })
})

// Handle: Example 7 click function
$('#demo-7').click(function () {
    $.kast({
        host: '192.99.8.170',
        port: 8098,
        version: 2,
        sid: 1,
        protocol: 'http',
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
$('#demo-8').click(function () {
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
