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
        host: 'live.prodjradio.net',
        port: 8000,
        protocol: 'http',
        version: 2,
        sid: 1,
        directStreamURL: 'https://live.prodjradio.net:8065/stream',
        defaultArtwork: ['no-cover-large.png'],
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
        protocol: 'http',
        version: 2,
        sid: 1,
        directStreamURL: 'https://castprox.herokuapp.com/http://87.98.216.129:4638/;',
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
$('#top-3').click(function () {
    $.kast({
        host: 'stream3.radiocenter.si',
        port: 8068,
        directStreamURL: 'https://rbtfm.herokuapp.com/?q=http://stream3.radiocenter.si:8068/center',
        defaultArtwork: ['no-cover-large.png'],
        colors: 'dynamic',
        theme: 'dynamic'
    })
})

// Handle: Example 4 click function
$('#top-4').click(function () {
    $.kast({
        host: 'live.sg.radiobintangtenggara.com',
        port: 9560,
        version: 2,
        directStreamURL: 'https://rbtfm.herokuapp.com/?q=http://live.sg.radiobintangtenggara.com:9560/rbtfm',
        defaultArtwork: ['https://i.imgur.com/0X6Jnwe.png', 'images/video-games-music-optional-64x64.jpg'], // 64x64 image is optional, but recommended
        colors: 'dynamic',
        theme: 'dark',
        autoPlay: true,
        played: true
    })
})

// Handle: Example 5 click function
$('#top-5').click(function () {
    $.kast({
        host: 'live.citrafmradio.com',
        port: 9882,
        artwork: true,
        defaultArtwork: ['no-cover-large.png'],
        colors: 'dynamic',
        theme: 'dynamic',
        ui: 'transparent',
        autoPlay: true
    })
})

// Handle: Example 6 click function
$('#top-6').click(function () {
    $.kast({
        host: 'tgas.dyndns.org',
        port: 8010,
        version: 2,
        protocol: 'http',
        defaultArtwork: ['https://i.imgur.com/oDvLz7u.jpg'],
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
        host: '206.190.130.182',
        port: 8142,
        version: 2,
        sid: 1,
        protocol: 'http',
        directStreamURL: 'https://rbtfm.herokuapp.com/?q=http://206.190.130.182:8142/stream',
        defaultArtwork: ['no-cover-large.png'],
        colors: {
            primary: 'grey',
            accent: 'light blue'
        },
        theme: 'dynamic',
        ui: 'colored',
        played: false
    })
})

// Handle: Example 8 click function
$('#top-8').click(function () {
    $.kast({
        host: 'live.sg.mcfmbwi.com',
        port: 9720,
        colors: 'dynamic',
        theme: 'dynamic',
        startTemplate: 'maximized',
        statusBar: true
    })
})

// Handle: Example 9 click function
$('#top-9').click(function () {
    $.kast({
        host: 'cast.ariegm.com',
        port: 8880,
        version: 2,
        protocol: 'https',
        colors: {
            primary: 'blue grey'
            //accent: 'yellow' // Because accent is yellow by default
        },
        theme: 'dynamic',
        continuous: false
    })
})

// Handle: Example 10 click function
$('#top-10').click(function () {
    $.kast({
        host: '173.254.198.39',
        port: 7777,
        version: 2,
        sid: 2,
        colors: {
            primary: 'grey',
            accent: 'light blue'
        },
        theme: 'light',
        ui: 'transparent',
        played: false
    })
})

// Handle: Example 11 click function
$('#top-11').click(function () {
    $.kast({
        host: '192.111.140.11',
        port: 8004,
        sid: 2,
        protocol: 'http',
        colors: 'dynamic',
        theme: 'dynamic',
        startTemplate: 'minimized',
        statusBar: false
    })
})

// Handle: Example 12 click function
$('#top-12').click(function () {
    $.kast({
        host: 'diradio.biru.co.id',
        port: 8910,
        colors: 'dynamic',
        theme: 'dynamic',
        mobileCare: ['ultra', '4069px'], // the pixel number here is to force MobileCare to run on Desktops and Tablets too (Up to 4K Screens)
        continuous: false
    })
})

