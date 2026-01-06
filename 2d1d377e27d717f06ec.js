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
        host: 'azuracast.suzananet.com',
        port: 8010,
        protocol: 'https',
        colors: 'dynamic',
        theme: 'dynamic',
        mobileCare: false
    })
})

// Handle: Example 2 click function
$('#top-2').click(function () {
    $.kast({
        host: 'streaming.girifm.com',
        port: 8020,
        directStreamURL: 'https://azuracast.suzananet.com/radio/8020/radio',
        colors: 'dynamic',
        theme: 'dynamic',
        //ui: 'transparent',
        serverInfo: ['servergenre', 'servertitle'],
        autoPlay: true,
        continuous: false
    })
})

// Handle: Example 3 click function
$('#top-3').click(function () {
    $.kast({
        host: 'stream3.radiocenter.si',
        port: 8000,
        colors: 'dynamic',
        theme: 'dynamic',
        directStreamURL: 'https://stream.nextmedia.si/proxy/center2?mp=/center;',
        //ui: 'transparent',
        serverInfo: ['servergenre', 'servertitle'],
        autoPlay: true,
        continuous: false
    })
})

// Handle: Example 4 click function
$('#top-4').click(function () {
    $.kast({
        host: 'sv.stri.my.id',
        port: 3310,
        protocol: 'https',
        //directStreamURL: 'https://sv.stri.my.id/listen/radio_bintang_tenggara_2.0/rbtfm',
        defaultArtwork: ['https://warningfm.github.io/v3/images/1d205655ef29e14a8255c89fe2383a41.jpg'],
        colors: 'dynamic',
        theme: 'dark',
        autoPlay: true,
        played: true
    })
})

// Handle: Example 5 click function
$('#top-5').click(function () {
    $.kast({
        host: 'radione.top',
        port: 8000,
        protocol: 'https',
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
        host: 'tgas.dyndns.org',
        port: 8010,
        version: 2,
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
        host: 'live.prodjradio.net',
        port: 8000,
        version: 2,
        //sid: 1,
        protocol: 'http',
        directStreamURL: 'https://ssl1.surfmusik.de/s.php?s=http://live.prodjradio.net:8000',
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
        host: 'sv3.stri.my.id',
        port: 5423,
        version: 2,
        directStreamURL: 'https://a7.alhastream.com:5423/radio',
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
        host: 'stream.rockradio.si',
        port: 9034,
        version: 2,
        protocol: 'http',
        directStreamURL: 'https://stream.nextmedia.si/proxy/rockr1_1?mp=/rock',
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
        directStreamURL: 'https://hirschmilch.de:7000/progressive.aac',
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
        host: 'streaming.ebsfm.com',
        port: 8100,
        version: 2,
        protocol: 'http',
        directStreamURL: 'https://azuracast.suzananet.com/radio/8100/radio',
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
        version: 2,
        colors: 'dynamic',
        theme: 'dynamic',
        mobileCare: ['ultra', '4069px'], // the pixel number here is to force MobileCare to run on Desktops and Tablets too (Up to 4K Screens)
        continuous: false
    })
})
