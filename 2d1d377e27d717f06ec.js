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
        directStreamURL: 'https://live.prodjradio.net:8065/radio',
        defaultArtwork: ['no-cover-large.png'],
        irrelevantWords: false,
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
        //directStreamURL: 'https://corsradio.herokuapp.com/?q=http://87.98.216.129:4638/;',
        defaultArtwork: ['no-cover-large.png'],
        irrelevantWords: false,
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
        //directStreamURL: 'https://center.mbahnunungonline.net/proxy/center2?mp=/center',
        defaultArtwork: ['https://warningfm.github.io/v3/images/1d205655ef29e14a8255c89fe2383a41.jpg'],
        irrelevantWords: false,
        colors: 'dynamic',
        theme: 'dynamic'
    })
})

// Handle: Example 4 click function
$('#top-4').click(function () {
    $.kast({
        host: 'cast1.servcast.net',
        port: 5398,
        version: 2,
        //directStreamURL: 'https://cast4.mbahnunungonline.net/proxy/mbahnunung55?mp=/stream',
        defaultArtwork: ['https://warningfm.github.io/v3/images/no-cover-large.png'],
        irrelevantWords: false,
        colors: 'dynamic',
        theme: 'dark',
        autoPlay: true,
        played: true
    })
})

// Handle: Example 5 click function
$('#top-5').click(function () {
    $.kast({
        host: '192.99.8.170',
        port: 8098,
        artwork: true,
        //directStreamURL: 'https://corsradio.herokuapp.com/?q=http://192.99.8.170:8098/stream',
        defaultArtwork: ['https://warningfm.github.io/v3/images/no-cover-large.png'],
        irrelevantWords: false,
        colors: 'dynamic',
        theme: 'dynamic',
        //ui: 'transparent',
        autoPlay: false
    })
})

// Handle: Example 6 click function
$('#top-6').click(function () {
    $.kast({
        host: 'tgas.dyndns.org',
        port: 8010,
        version: 2,
        protocol: 'http',
        //directStreamURL: 'https://clover-cors.herokuapp.com/?q=http://217.120.175.194:8010/2',
        defaultArtwork: ['https://i.imgur.com/oDvLz7u.jpg'],
        irrelevantWords: false,
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
        host: 'live.elpasfm.com',
        port: 8072,
        version: 2,
        sid: 1,
        protocol: 'http',
        //directStreamURL: 'https://sertanejapop.herokuapp.com/?q=http://live.elpasfm.com:8072/elpasfm',
        defaultArtwork: ['https://warningfm.github.io/v3/images/1d205655ef29e14a8255c89fe2383a41.jpg'],
        irrelevantWords: false,
        colors: 'dynamic',
        theme: 'dynamic',
        ui: 'colored',
        played: true
    })
})

// Handle: Example 8 click function
$('#top-8').click(function () {
    $.kast({
        host: 'live.sg.mcfmbwi.com',
        port: 9720,
        //directStreamURL: 'https://corsradio.herokuapp.com/?q=http://live.sg.mcfmbwi.com:9720/mcfm',
        irrelevantWords: false,
        colors: 'dynamic',
        theme: 'dynamic',
        startTemplate: 'maximized',
        statusBar: true
    })
})

// Handle: Example 9 click function
$('#top-9').click(function () {
    $.kast({
        host: 'stream.ariegm.com',
        port: 8800,
        version: 2,
        protocol: 'http',
        //directStreamURL: 'https://us-server.radioidola.com:8880/stream',
        irrelevantWords: false,
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
        host: '144.76.106.52',
        port: 7000,
        version: 2,
        sid: 1,
        //directStreamURL: 'https://castprox.herokuapp.com/http://144.76.106.52:7000/progressive.aac',
        irrelevantWords: false,
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
        host: 'live.radiotawangalun.com',
        port: 8060,
        sid: 1,
        protocol: 'http',
        //directStreamURL: 'https://corsradio.herokuapp.com/index.php?q=http://live.radiotawangalun.com:8060/rsta',
        irrelevantWords: false,
        colors: 'dynamic',
        theme: 'dynamic',
        startTemplate: 'minimized',
        statusBar: true
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

