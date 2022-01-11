// =============================================== //
// - Remove any active classes (yellow boxes)
// - please add your options (host, port, version, etc..)
// - Destroy any pervious Kast
// - On example box click, call Kast
// =============================================== //

    $.kast({
        host: 'rbtfm.cloudns.info',
        port: 9560,
        protocol: 'http',
        version: 1,
        directStreamURL: 'https://sv.stri.my.id/radio/8360/rbtfm',
        defaultArtwork: ['https://raw.githubusercontent.com/warningfm/v3/master/images/1d205655ef29e14a8255c89fe2383a41.jpg'],
        statusBar: false,
        startTemplate: 'maximized',
        language: {
            offlineText: 'Temporarily Offline',
            playedText: '<font face="Georgia" color="blue">Wes Mari Diputer :</font>',
            unknownTrackText: 'Informasi & Solusi - c^o^d^e^l^i^s^t^.^c^c', 
            unknownArtistText: 'Radio Bintang Tenggara' 
        },
        position: 'left',
        colors: 'dynamic',
        theme: 'dark',
        autoPlay: true,
        played: false
      })
