/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fondo1-ebook',
                            display: 'block',
                            type: 'image',
                            rect: ['0', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fondo1-ebook.svg",'0px','0px']
                        },
                        {
                            id: 'fondo2-ebook',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fondo2-ebook.svg",'0px','0px']
                        },
                        {
                            id: 'fondo3',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fondo3.svg",'0px','0px']
                        },
                        {
                            id: 'profe-Alejandra',
                            display: 'none',
                            type: 'image',
                            rect: ['677px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"profe-Alejandra.svg",'0px','0px']
                        },
                        {
                            id: 'profe-Adrian',
                            display: 'none',
                            type: 'image',
                            rect: ['-728px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"profe-Adrian.svg",'0px','0px']
                        },
                        {
                            id: 'titulo',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '-506px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"titulo.svg",'0px','0px']
                        },
                        {
                            id: 'capa-superior',
                            display: 'block',
                            type: 'image',
                            rect: ['0', '160px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"capa-superior.svg",'0px','0px']
                        },
                        {
                            id: 'tabla-contenido',
                            display: 'none',
                            type: 'image',
                            rect: ['773px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tabla-contenido.svg",'0px','0px']
                        },
                        {
                            id: 'Alejandra2',
                            display: 'none',
                            type: 'image',
                            rect: ['-772px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Alejandra2.svg",'0px','0px']
                        },
                        {
                            id: 'text-intro',
                            display: 'none',
                            type: 'image',
                            rect: ['819px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-intro.svg",'0px','0px']
                        },
                        {
                            id: 'Adrian2',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '612px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Adrian2.svg",'0px','0px']
                        },
                        {
                            id: 'text-pag3',
                            display: 'none',
                            type: 'image',
                            rect: ['-2307px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-pag3.svg",'0px','0px']
                        },
                        {
                            id: 'text-pag4',
                            display: 'none',
                            type: 'image',
                            rect: ['1463px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-pag4.svg",'0px','0px']
                        },
                        {
                            id: 'text-pag5',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-pag5.svg",'0px','0px']
                        },
                        {
                            id: 'text-pag6',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '-640px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-pag6.svg",'0px','0px']
                        },
                        {
                            id: 'pers-p7',
                            display: 'none',
                            type: 'image',
                            rect: ['-764px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pers-p7.svg",'0px','0px']
                        },
                        {
                            id: 'text-p7',
                            display: 'none',
                            type: 'image',
                            rect: ['696px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-p7.svg",'0px','0px']
                        },
                        {
                            id: 'caro-p8',
                            display: 'none',
                            type: 'image',
                            rect: ['-934px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"caro-p8.svg",'0px','0px']
                        },
                        {
                            id: 'ale-p8',
                            display: 'none',
                            type: 'image',
                            rect: ['906px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ale-p8.svg",'0px','0px']
                        },
                        {
                            id: 'ale-p9',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '763px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ale-p9.svg",'0px','0px']
                        },
                        {
                            id: 'caro-p9',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '-640px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"caro-p9.svg",'0px','0px']
                        },
                        {
                            id: 'caro-p10',
                            display: 'none',
                            type: 'image',
                            rect: ['-1992px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"caro-p10.svg",'0px','0px']
                        },
                        {
                            id: 'ale-p10',
                            display: 'none',
                            type: 'image',
                            rect: ['931px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ale-p10.svg",'0px','0px']
                        },
                        {
                            id: 'ale-p11',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '568px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ale-p11.svg",'0px','0px']
                        },
                        {
                            id: 'text-p11',
                            display: 'none',
                            type: 'image',
                            rect: ['708px', '0px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-p11.svg",'0px','0px']
                        },
                        {
                            id: 'ale-p13',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '-651px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ale-p13.svg",'0px','0px']
                        },
                        {
                            id: 'caro-p13',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '600px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"caro-p13.svg",'0px','0px']
                        },
                        {
                            id: 'ale-p14',
                            display: 'none',
                            type: 'image',
                            rect: ['-1609px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ale-p14.svg",'0px','0px']
                        },
                        {
                            id: 'caro-p14',
                            display: 'none',
                            type: 'image',
                            rect: ['1002px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"caro-p14.svg",'0px','0px']
                        },
                        {
                            id: 'ale-p15',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '-1px', '1280px', '641px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ale-p15.svg",'0px','0px']
                        },
                        {
                            id: 'ima-p16',
                            display: 'none',
                            type: 'image',
                            rect: ['-854px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ima-p16.svg",'0px','0px']
                        },
                        {
                            id: 'text-p16',
                            display: 'none',
                            type: 'image',
                            rect: ['734px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-p16.svg",'0px','0px']
                        },
                        {
                            id: 'ima2-p16',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ima2-p16.svg",'0px','0px']
                        },
                        {
                            id: 'caro-p17',
                            display: 'none',
                            type: 'image',
                            rect: ['-1882px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"caro-p17.svg",'0px','0px']
                        },
                        {
                            id: 'ale-p17',
                            display: 'none',
                            type: 'image',
                            rect: ['1063px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ale-p17.svg",'0px','0px']
                        },
                        {
                            id: 'text-p18',
                            display: 'none',
                            type: 'image',
                            rect: ['-1280px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-p18.svg",'0px','0px']
                        },
                        {
                            id: 'ale-p18',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '552px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ale-p18.svg",'0px','0px']
                        },
                        {
                            id: 'ale-p19',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '634px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ale-p19.svg",'0px','0px']
                        },
                        {
                            id: 'text-p19',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '-554px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-p19.svg",'0px','0px']
                        },
                        {
                            id: 'text-p20',
                            display: 'none',
                            type: 'image',
                            rect: ['-686px', '0px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-p20.svg",'0px','0px']
                        },
                        {
                            id: 'ale-p20',
                            display: 'none',
                            type: 'image',
                            rect: ['856px', '0px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ale-p20.svg",'0px','0px']
                        },
                        {
                            id: 'text-p21',
                            display: 'none',
                            type: 'image',
                            rect: ['1280px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-p21.svg",'0px','0px']
                        },
                        {
                            id: 'ale-p21',
                            display: 'none',
                            type: 'image',
                            rect: ['-1280px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ale-p21.svg",'0px','0px']
                        },
                        {
                            id: 'caro-p22',
                            display: 'none',
                            type: 'image',
                            rect: ['-1511px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"caro-p22.svg",'0px','0px']
                        },
                        {
                            id: 'ale-p22',
                            display: 'none',
                            type: 'image',
                            rect: ['1049px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ale-p22.svg",'0px','0px']
                        },
                        {
                            id: 'text-p23',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '612px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-p23.svg",'0px','0px']
                        },
                        {
                            id: 'text-p24',
                            display: 'none',
                            type: 'image',
                            rect: ['703px', '0px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-p24.svg",'0px','0px']
                        },
                        {
                            id: 'ale-p24',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '640px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ale-p24.svg",'0px','0px']
                        },
                        {
                            id: 'caro-p25',
                            display: 'none',
                            type: 'image',
                            rect: ['-1451px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"caro-p25.svg",'0px','0px']
                        },
                        {
                            id: 'ale-p25',
                            display: 'none',
                            type: 'image',
                            rect: ['1231px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ale-p25.svg",'0px','0px']
                        },
                        {
                            id: 'datocurioso',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"datocurioso.svg",'0px','0px']
                        },
                        {
                            id: 'proceo-pag22',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"proceo-pag22.svg",'0px','0px']
                        },
                        {
                            id: 'text-pag26',
                            display: 'none',
                            type: 'image',
                            rect: ['1295px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-pag26.svg",'0px','0px']
                        },
                        {
                            id: 'text-pag27',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '661px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-pag27.svg",'0px','0px']
                        },
                        {
                            id: 'text-pag28',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '541px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-pag28.svg",'0px','0px']
                        },
                        {
                            id: 'text-pag29',
                            display: 'none',
                            type: 'image',
                            rect: ['1280px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-pag29.svg",'0px','0px']
                        },
                        {
                            id: 'text-pag30',
                            display: 'none',
                            type: 'image',
                            rect: ['-754px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-pag30.svg",'0px','0px']
                        },
                        {
                            id: 'ima-pag28',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ima-pag28.svg",'0px','0px']
                        },
                        {
                            id: 'ima-pag29',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ima-pag29.svg",'0px','0px']
                        },
                        {
                            id: 'text-pag31',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '640px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-pag31.svg",'0px','0px']
                        },
                        {
                            id: 'text-pag32',
                            display: 'none',
                            type: 'image',
                            rect: ['1274px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-pag32.svg",'0px','0px']
                        },
                        {
                            id: 'text-pag33',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '600px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-pag33.svg",'0px','0px']
                        },
                        {
                            id: 'text-pag34',
                            display: 'none',
                            type: 'image',
                            rect: ['-1340px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-pag34.svg",'0px','0px']
                        },
                        {
                            id: 'text-pag35',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '-702px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-pag35.svg",'0px','0px']
                        },
                        {
                            id: 'text-pag36',
                            display: 'none',
                            type: 'image',
                            rect: ['1273px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-pag36.svg",'0px','0px']
                        },
                        {
                            id: 'text-pag37',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '-659px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-pag37.svg",'0px','0px']
                        },
                        {
                            id: 'text-pag38',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '742px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-pag38.svg",'0px','0px']
                        },
                        {
                            id: 'text-pag39',
                            display: 'none',
                            type: 'image',
                            rect: ['-1322px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-pag39.svg",'0px','0px']
                        },
                        {
                            id: 'text-pag40',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '597px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-pag40.svg",'0px','0px']
                        },
                        {
                            id: 'text-pag41',
                            display: 'none',
                            type: 'image',
                            rect: ['-2116px', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-pag41.svg",'0px','0px']
                        },
                        {
                            id: 'text-pag42',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '688px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-pag42.svg",'0px','0px']
                        },
                        {
                            id: 'vid-proceso',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"vid-proceso.svg",'0px','0px']
                        },
                        {
                            id: 'sig-atrs',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '111px', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sig-atrs.svg",'0px','0px']
                        },
                        {
                            id: 'au-p7',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['818', '265', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"au-p7.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'musicafondo',
                            display: 'none',
                            volume: '0.1',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1337', '297', '320px', '45px', 'auto', 'auto'],
                            loop: 'loop',
                            source: [aud+"musicafondo.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'au-p14',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1015', '108', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"au-p14.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'au-p9',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1015', '108', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"au-p9.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'titulo2',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1015', '108', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"titulo.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'au-p17',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1015', '108', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"au-p17.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'au-p15',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1015', '108', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"au-p15.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'Intro',
                            display: 'none',
                            volume: '1',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1015', '108', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"Intro.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'au-pa13',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1015', '108', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"au-pa13.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'au-p8',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1015', '108', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"au-p8.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'au-p10',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1015', '108', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"au-p10.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'au-p25',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1015', '108', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"au-p25.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'au-p22',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1015', '108', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"au-p22.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'au-p31',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1115', '307', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"au-p31.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'au-p34',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1115', '307', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"au-p34.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'au-p27',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1115', '307', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"au-p27.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'au-p37',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1115', '307', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"au-p37.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'au-p32',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1115', '307', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"au-p32.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'au-p38',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1101', '351', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"au-p38.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'ATP',
                            display: 'none',
                            type: 'video',
                            tag: 'video',
                            rect: ['1354px', '114px', '559px', '314px', 'auto', 'auto'],
                            controls: 'controls',
                            loop: 'loop',
                            opacity: '1',
                            source: [vid+"ATP.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'Video-dialogos2',
                            display: 'none',
                            type: 'video',
                            tag: 'video',
                            rect: ['-827px', '119px', '699px', '393px', 'auto', 'auto'],
                            controls: 'controls',
                            source: [vid+"Video-dialogos2.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'Hidro',
                            display: 'none',
                            type: 'video',
                            tag: 'video',
                            rect: ['-696px', '133px', '558px', '314px', 'auto', 'auto'],
                            controls: 'controls',
                            source: [vid+"Hidro.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'vid-fosfagenica',
                            display: 'none',
                            type: 'video',
                            tag: 'video',
                            rect: ['1332px', '105px', '759px', '430px', 'auto', 'auto'],
                            controls: 'controls',
                            source: [vid+"vid-fosfagenica.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'Video-Intro-final_Subtitulos',
                            display: 'none',
                            type: 'video',
                            tag: 'video',
                            rect: ['48px', '96px', '769px', '433px', 'auto', 'auto'],
                            controls: 'controls',
                            source: [vid+"Video-Intro-final%20%28Subtitulos%29.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'Video2',
                            display: 'none',
                            type: 'video',
                            tag: 'video',
                            rect: ['479px', '101px', '759px', '426px', 'auto', 'auto'],
                            controls: 'controls',
                            source: [vid+"Video2.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'GLUCOLISIS-bp',
                            display: 'none',
                            type: 'video',
                            tag: 'video',
                            rect: ['1312px', '119px', '716px', '403px', 'auto', 'auto'],
                            controls: 'controls',
                            source: [vid+"GLUCOLISIS-bp.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'Anim-R6-viaGlucolitica-bp',
                            display: 'none',
                            type: 'video',
                            tag: 'video',
                            rect: ['1384px', '121px', '707px', '398px', 'auto', 'auto'],
                            controls: 'controls',
                            source: [vid+"Anim-R6-viaGlucolitica-bp.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'Lactato-glucolitica-bp',
                            display: 'none',
                            type: 'video',
                            tag: 'video',
                            rect: ['495px', '117px', '727px', '409px', 'auto', 'auto'],
                            controls: 'controls',
                            source: [vid+"Lactato-glucolitica-bp.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'VideoFinal-Despedida-smaller',
                            display: 'none',
                            type: 'video',
                            tag: 'video',
                            rect: ['0', '-17px', '1280', '720', 'auto', 'auto'],
                            controls: 'controls',
                            source: [vid+"VideoFinal-Despedida-smaller.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'pantallafinal',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1280px', '640px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pantallafinal.svg",'0px','0px']
                        },
                        {
                            id: 'cerrar-proceso',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['1220px', '80px', '46px', '46px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'act-sound',
                            type: 'ellipse',
                            rect: ['938px', '588px', '44px', '44px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'off-sound',
                            type: 'ellipse',
                            rect: ['986px', '588px', '44px', '44px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btn-atras',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '561px', '105px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'btn-ima-p16',
                            display: 'none',
                            type: 'rect',
                            rect: ['785px', '435px', '324px', '81px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btn-iniciar',
                            display: 'none',
                            type: 'rect',
                            rect: ['469px', '395px', '337px', '83px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btn-siguiente',
                            display: 'none',
                            type: 'rect',
                            rect: ['1175px', '561px', '105px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'atr-pag27',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '560px', '106px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag27',
                            display: 'none',
                            type: 'rect',
                            rect: ['1174px', '560px', '106px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag2',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '560px', '108px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag2',
                            display: 'none',
                            type: 'rect',
                            rect: ['1172px', '560px', '108px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag4',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '559px', '110px', '81px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag4',
                            display: 'none',
                            type: 'rect',
                            rect: ['1171px', '547px', '110px', '93px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag5',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '557px', '105px', '83px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag5',
                            display: 'none',
                            type: 'rect',
                            rect: ['1175px', '557px', '105px', '83px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag6',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '560px', '106px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag6',
                            display: 'none',
                            type: 'rect',
                            rect: ['1174px', '560px', '106px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-p7',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '561px', '105px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag7',
                            display: 'none',
                            type: 'rect',
                            rect: ['1175px', '561px', '105px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag3',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '561px', '106px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag3',
                            display: 'none',
                            type: 'rect',
                            rect: ['1174px', '561px', '106px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag8',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '560px', '105px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag8',
                            display: 'none',
                            type: 'rect',
                            rect: ['1175px', '560px', '105px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag9',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '560px', '106px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag10',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '560px', '106px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag10',
                            display: 'none',
                            type: 'rect',
                            rect: ['1174px', '560px', '106px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag11',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '561px', '109px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag11',
                            display: 'none',
                            type: 'rect',
                            rect: ['1171px', '561px', '109px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag12',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '561px', '105px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag12',
                            display: 'none',
                            type: 'rect',
                            rect: ['1175px', '561px', '105px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag9',
                            display: 'none',
                            type: 'rect',
                            rect: ['1174px', '560px', '106px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag13',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '561px', '106px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btn-proceso',
                            display: 'none',
                            type: 'rect',
                            rect: ['693px', '270px', '325px', '78px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag13',
                            display: 'none',
                            type: 'rect',
                            rect: ['1174px', '561px', '106px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag14',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '561px', '105px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag14',
                            display: 'none',
                            type: 'rect',
                            rect: ['1175px', '561px', '105px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag15',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '560px', '107px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag15',
                            display: 'none',
                            type: 'rect',
                            rect: ['1173px', '560px', '107px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag16',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '559px', '105px', '81px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag16',
                            display: 'none',
                            type: 'rect',
                            rect: ['1175px', '559px', '105px', '81px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag17',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '560px', '107px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag17',
                            display: 'none',
                            type: 'rect',
                            rect: ['1173px', '560px', '107px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag18',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '560px', '106px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag18',
                            display: 'none',
                            type: 'rect',
                            rect: ['1174px', '560px', '106px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag19',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '561px', '107px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag19',
                            display: 'none',
                            type: 'rect',
                            rect: ['1173px', '561px', '107px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag20',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '561px', '109px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag20',
                            display: 'none',
                            type: 'rect',
                            rect: ['1171px', '561px', '109px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag21',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '561px', '107px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag21',
                            display: 'none',
                            type: 'rect',
                            rect: ['1173px', '561px', '107px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag22',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '560px', '106px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag22',
                            display: 'none',
                            type: 'rect',
                            rect: ['1174px', '560px', '106px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'proceso-pag22',
                            display: 'none',
                            type: 'rect',
                            rect: ['524px', '391px', '190px', '41px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag23',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '560px', '106px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag23',
                            display: 'none',
                            type: 'rect',
                            rect: ['1174px', '560px', '106px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag24',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '559px', '105px', '81px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag24',
                            display: 'none',
                            type: 'rect',
                            rect: ['1175px', '559px', '105px', '81px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag25',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '560px', '109px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag25',
                            display: 'none',
                            type: 'rect',
                            rect: ['1171px', '560px', '109px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag26',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '561px', '107px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag26',
                            display: 'none',
                            type: 'rect',
                            rect: ['1173px', '561px', '107px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag28',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '561px', '108px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag28',
                            display: 'none',
                            type: 'rect',
                            rect: ['1172px', '561px', '108px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag29',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '561px', '109px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag29',
                            display: 'none',
                            type: 'rect',
                            rect: ['1171px', '561px', '109px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'ver-imapag28',
                            display: 'none',
                            type: 'rect',
                            rect: ['387px', '493px', '253px', '59px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'dato-importante',
                            display: 'none',
                            type: 'rect',
                            rect: ['232px', '201px', '292px', '66px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag30',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '561px', '105px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag30',
                            display: 'none',
                            type: 'rect',
                            rect: ['1175px', '561px', '105px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'datocurioso-pag18',
                            display: 'none',
                            type: 'rect',
                            rect: ['640px', '518px', '245px', '57px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag31',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '561px', '107px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag31',
                            display: 'none',
                            type: 'rect',
                            rect: ['1173px', '561px', '107px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag32',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '560px', '108px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag32',
                            display: 'none',
                            type: 'rect',
                            rect: ['1172px', '560px', '108px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag33',
                            display: 'none',
                            type: 'rect',
                            rect: ['-1px', '559px', '109px', '81px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag34',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '561px', '106px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag34',
                            display: 'none',
                            type: 'rect',
                            rect: ['1174px', '561px', '106px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag35',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '560px', '107px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag35',
                            display: 'none',
                            type: 'rect',
                            rect: ['1173px', '560px', '107px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag36',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '561px', '108px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag36',
                            display: 'none',
                            type: 'rect',
                            rect: ['1172px', '561px', '108px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag37',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '561px', '107px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag37',
                            display: 'none',
                            type: 'rect',
                            rect: ['1173px', '561px', '107px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag38',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '561px', '106px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['4']]
                        },
                        {
                            id: 'sig-pag38',
                            display: 'none',
                            type: 'rect',
                            rect: ['1174px', '561px', '106px', '79px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag39',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '559px', '106px', '81px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag39',
                            display: 'none',
                            type: 'rect',
                            rect: ['1174px', '559px', '106px', '81px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag33',
                            display: 'none',
                            type: 'rect',
                            rect: ['1171px', '559px', '109px', '81px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag40',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '560px', '106px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag40',
                            display: 'none',
                            type: 'rect',
                            rect: ['1174px', '560px', '106px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag41',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '560px', '107px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag41',
                            display: 'none',
                            type: 'rect',
                            rect: ['1173px', '560px', '107px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'atr-pag42',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '562px', '108px', '78px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sig-pag42',
                            display: 'none',
                            type: 'rect',
                            rect: ['1172px', '562px', '108px', '78px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btn-reiniciar',
                            display: 'none',
                            type: 'rect',
                            rect: ['376px', '532px', '235px', '91px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btn-act',
                            display: 'none',
                            type: 'rect',
                            rect: ['620px', '532px', '235px', '91px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '640px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 56000,
                    autoPlay: true,
                    labels: {
                        "inicio": 0,
                        "tabla": 2500,
                        "intro": 4000,
                        "pag3": 5500,
                        "pag4": 6750,
                        "pag5": 8000,
                        "pag6": 9250,
                        "pag7": 10500,
                        "pag8": 11750,
                        "pag9": 13000,
                        "pag10": 14250,
                        "pag11": 15500,
                        "pag12": 16750,
                        "pag13": 18000,
                        "pag14": 19250,
                        "pag15": 20500,
                        "pag16": 21750,
                        "pag17": 23000,
                        "pag18": 24250,
                        "pag19": 25500,
                        "pag20": 26750,
                        "pag21": 28000,
                        "pag22": 29250,
                        "pag23": 30500,
                        "pag24": 31750,
                        "pag25": 33000,
                        "pag26": 34250,
                        "pag27": 35500,
                        "pag28": 36750,
                        "pag29": 38000,
                        "pag30": 39250,
                        "pag31": 40500,
                        "pag32": 41750,
                        "pag33": 43000,
                        "pag34": 44250,
                        "pag35": 45500,
                        "pag36": 46750,
                        "pag37": 48000,
                        "pag38": 49250,
                        "pag39": 50500,
                        "pag40": 51750,
                        "pag41": 53000,
                        "pag42": 54250,
                        "proceso": 55250,
                        "pag43": 56000
                    },
                    data: [
                        [
                            "eid153",
                            "display",
                            13000,
                            0,
                            "easeInOutBack",
                            "${caro-p9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid163",
                            "display",
                            14000,
                            0,
                            "easeInOutBack",
                            "${caro-p9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid225",
                            "display",
                            18000,
                            0,
                            "easeInOutBack",
                            "${caro-p13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid237",
                            "display",
                            19000,
                            0,
                            "easeInOutBack",
                            "${caro-p13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1244",
                            "display",
                            39500,
                            0,
                            "easeOutBack",
                            "${GLUCOLISIS-bp}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1248",
                            "display",
                            40250,
                            0,
                            "easeOutBack",
                            "${GLUCOLISIS-bp}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1549",
                            "display",
                            56000,
                            0,
                            "easeOutBack",
                            "${pantallafinal}",
                            'none',
                            'block'
                        ],
                        [
                            "eid764",
                            "display",
                            30500,
                            0,
                            "easeOutBack",
                            "${atr-pag23}",
                            'none',
                            'block'
                        ],
                        [
                            "eid772",
                            "display",
                            31500,
                            0,
                            "easeOutBack",
                            "${atr-pag23}",
                            'block',
                            'none'
                        ],
                        [
                            "eid608",
                            "display",
                            25500,
                            0,
                            "easeOutBack",
                            "${atr-pag19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid620",
                            "display",
                            26500,
                            0,
                            "easeOutBack",
                            "${atr-pag19}",
                            'block',
                            'none'
                        ],
                        [
                            "eid172",
                            "left",
                            14250,
                            500,
                            "easeInOutBack",
                            "${ale-p10}",
                            '931px',
                            '0px'
                        ],
                        [
                            "eid1397",
                            "display",
                            41750,
                            0,
                            "easeOutBack",
                            "${text-pag32}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1401",
                            "display",
                            42750,
                            0,
                            "easeOutBack",
                            "${text-pag32}",
                            'block',
                            'none'
                        ],
                        [
                            "eid224",
                            "display",
                            18000,
                            0,
                            "easeInOutBack",
                            "${ale-p13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid238",
                            "display",
                            19000,
                            0,
                            "easeInOutBack",
                            "${ale-p13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1492",
                            "display",
                            50500,
                            0,
                            "easeOutBack",
                            "${sig-pag39}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1499",
                            "display",
                            51500,
                            0,
                            "easeOutBack",
                            "${sig-pag39}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1209",
                            "display",
                            37250,
                            0,
                            "easeOutBack",
                            "${ver-imapag28}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1210",
                            "display",
                            37750,
                            0,
                            "easeOutBack",
                            "${ver-imapag28}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1192",
                            "top",
                            35500,
                            500,
                            "easeOutCirc",
                            "${text-pag27}",
                            '661px',
                            '0px'
                        ],
                        [
                            "eid1418",
                            "left",
                            44250,
                            500,
                            "easeOutBack",
                            "${text-pag34}",
                            '-1340px',
                            '0px'
                        ],
                        [
                            "eid1480",
                            "display",
                            49250,
                            0,
                            "easeOutBack",
                            "${atr-pag38}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1491",
                            "display",
                            50250,
                            0,
                            "easeOutBack",
                            "${atr-pag38}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1740",
                            "rotateZ",
                            49642,
                            0,
                            "easeOutBack",
                            "${atr-pag38}",
                            '4deg',
                            '4deg'
                        ],
                        [
                            "eid1497",
                            "left",
                            50500,
                            500,
                            "easeOutBack",
                            "${text-pag39}",
                            '-1322px',
                            '0px'
                        ],
                        [
                            "eid1510",
                            "top",
                            51750,
                            0,
                            "easeOutBack",
                            "${Anim-R6-viaGlucolitica-bp}",
                            '121px',
                            '121px'
                        ],
                        [
                            "eid338",
                            "display",
                            21750,
                            0,
                            "easeOutBack",
                            "${atr-pag16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid361",
                            "display",
                            22750,
                            0,
                            "easeOutBack",
                            "${atr-pag16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13",
                            "left",
                            750,
                            500,
                            "easeOutBack",
                            "${profe-Alejandra}",
                            '677px',
                            '0px'
                        ],
                        [
                            "eid191",
                            "left",
                            15500,
                            500,
                            "easeInOutBack",
                            "${text-p11}",
                            '708px',
                            '0px'
                        ],
                        [
                            "eid52",
                            "display",
                            4000,
                            0,
                            "easeOutBack",
                            "${sig-pag2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid53",
                            "display",
                            5250,
                            0,
                            "easeOutBack",
                            "${sig-pag2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1482",
                            "display",
                            49250,
                            0,
                            "easeOutBack",
                            "${text-pag38}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1489",
                            "display",
                            50250,
                            0,
                            "easeOutBack",
                            "${text-pag38}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1527",
                            "display",
                            54250,
                            0,
                            "easeOutBack",
                            "${atr-pag42}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1543",
                            "display",
                            55750,
                            0,
                            "easeOutBack",
                            "${atr-pag42}",
                            'block',
                            'none'
                        ],
                        [
                            "eid59",
                            "display",
                            5500,
                            0,
                            "easeOutBack",
                            "${text-pag3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid65",
                            "display",
                            6500,
                            0,
                            "easeOutBack",
                            "${text-pag3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1556",
                            "display",
                            56000,
                            0,
                            "easeOutBack",
                            "${btn-act}",
                            'none',
                            'block'
                        ],
                        [
                            "eid675",
                            "left",
                            29250,
                            500,
                            "easeOutBack",
                            "${ale-p22}",
                            '1049px',
                            '0px'
                        ],
                        [
                            "eid678",
                            "display",
                            29250,
                            0,
                            "easeOutBack",
                            "${atr-pag22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid762",
                            "display",
                            30250,
                            0,
                            "easeOutBack",
                            "${atr-pag22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid676",
                            "left",
                            29250,
                            500,
                            "easeOutBack",
                            "${caro-p22}",
                            '-1511px',
                            '0px'
                        ],
                        [
                            "eid66",
                            "display",
                            5500,
                            0,
                            "easeOutBack",
                            "${atr-pag3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid69",
                            "display",
                            6500,
                            0,
                            "easeOutBack",
                            "${atr-pag3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1197",
                            "display",
                            36750,
                            0,
                            "easeOutCirc",
                            "${atr-pag28}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1204",
                            "display",
                            37750,
                            0,
                            "easeOutBack",
                            "${atr-pag28}",
                            'block',
                            'none'
                        ],
                        [
                            "eid622",
                            "display",
                            26750,
                            0,
                            "easeOutBack",
                            "${atr-pag20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid634",
                            "display",
                            27750,
                            0,
                            "easeOutBack",
                            "${atr-pag20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid110",
                            "display",
                            9250,
                            0,
                            "easeInOutBack",
                            "${Video-dialogos2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid117",
                            "display",
                            10250,
                            0,
                            "easeInOutBack",
                            "${Video-dialogos2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid167",
                            "display",
                            14250,
                            0,
                            "easeInOutBack",
                            "${atr-pag10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid177",
                            "display",
                            15250,
                            0,
                            "easeInOutBack",
                            "${atr-pag10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1547",
                            "display",
                            34250,
                            0,
                            "easeOutBack",
                            "${fondo3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1548",
                            "display",
                            55750,
                            0,
                            "easeOutBack",
                            "${fondo3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1211",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${ima-pag28}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1517",
                            "display",
                            53000,
                            0,
                            "easeOutBack",
                            "${text-pag41}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1521",
                            "display",
                            54000,
                            0,
                            "easeOutBack",
                            "${text-pag41}",
                            'block',
                            'none'
                        ],
                        [
                            "eid143",
                            "display",
                            11750,
                            0,
                            "easeInOutBack",
                            "${atr-pag8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid150",
                            "display",
                            12750,
                            0,
                            "easeInOutBack",
                            "${atr-pag8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1413",
                            "display",
                            44250,
                            0,
                            "easeOutBack",
                            "${sig-pag34}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1420",
                            "display",
                            45250,
                            0,
                            "easeOutBack",
                            "${sig-pag34}",
                            'block',
                            'none'
                        ],
                        [
                            "eid821",
                            "left",
                            33000,
                            500,
                            "easeOutBack",
                            "${ale-p25}",
                            '1231px',
                            '0px'
                        ],
                        [
                            "eid215",
                            "left",
                            16750,
                            500,
                            "easeInOutBack",
                            "${vid-fosfagenica}",
                            '1332px',
                            '468px'
                        ],
                        [
                            "eid1292",
                            "display",
                            39250,
                            0,
                            "easeOutBack",
                            "${sig-pag30}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1293",
                            "display",
                            40250,
                            0,
                            "easeOutBack",
                            "${sig-pag30}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1474",
                            "top",
                            48000,
                            500,
                            "easeOutBack",
                            "${text-pag37}",
                            '-659px',
                            '0px'
                        ],
                        [
                            "eid6",
                            "display",
                            250,
                            0,
                            "linear",
                            "${profe-Adrian}",
                            'none',
                            'block'
                        ],
                        [
                            "eid19",
                            "display",
                            2250,
                            0,
                            "easeOutElastic",
                            "${profe-Adrian}",
                            'block',
                            'none'
                        ],
                        [
                            "eid157",
                            "top",
                            13000,
                            500,
                            "easeInOutBack",
                            "${ale-p9}",
                            '763px',
                            '0px'
                        ],
                        [
                            "eid281",
                            "width",
                            20500,
                            500,
                            "easeOutBack",
                            "${ale-p15}",
                            '2261px',
                            '1280px'
                        ],
                        [
                            "eid169",
                            "display",
                            14250,
                            0,
                            "easeInOutBack",
                            "${caro-p10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid179",
                            "display",
                            15250,
                            0,
                            "easeInOutBack",
                            "${caro-p10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1384",
                            "display",
                            40500,
                            0,
                            "easeOutBack",
                            "${text-pag31}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1388",
                            "display",
                            41500,
                            0,
                            "easeOutBack",
                            "${text-pag31}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1208",
                            "left",
                            38000,
                            500,
                            "easeOutBack",
                            "${text-pag29}",
                            '1280px',
                            '0px'
                        ],
                        [
                            "eid51",
                            "display",
                            4000,
                            0,
                            "easeOutBack",
                            "${atr-pag2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid54",
                            "display",
                            5250,
                            0,
                            "easeOutBack",
                            "${atr-pag2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid34",
                            "left",
                            2750,
                            500,
                            "easeOutSine",
                            "${tabla-contenido}",
                            '773px',
                            '0px'
                        ],
                        [
                            "eid9",
                            "left",
                            250,
                            500,
                            "easeOutBack",
                            "${profe-Adrian}",
                            '-728px',
                            '0px'
                        ],
                        [
                            "eid833",
                            "display",
                            29750,
                            0,
                            "easeOutBack",
                            "${proceso-pag22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid834",
                            "display",
                            30250,
                            0,
                            "easeOutBack",
                            "${proceso-pag22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid372",
                            "left",
                            23000,
                            500,
                            "easeOutBack",
                            "${ale-p17}",
                            '1063px',
                            '0px'
                        ],
                        [
                            "eid255",
                            "display",
                            20500,
                            0,
                            "easeInOutBack",
                            "${ale-p15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid284",
                            "display",
                            21500,
                            0,
                            "easeOutBack",
                            "${ale-p15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid248",
                            "left",
                            19250,
                            500,
                            "easeInOutBack",
                            "${caro-p14}",
                            '1002px',
                            '0px'
                        ],
                        [
                            "eid1320",
                            "display",
                            35500,
                            0,
                            "easeOutBack",
                            "${sig-pag27}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1322",
                            "display",
                            36500,
                            0,
                            "easeOutBack",
                            "${sig-pag27}",
                            'block',
                            'none'
                        ],
                        [
                            "eid677",
                            "display",
                            29250,
                            0,
                            "easeOutBack",
                            "${sig-pag22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid761",
                            "display",
                            30250,
                            0,
                            "easeOutBack",
                            "${sig-pag22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid113",
                            "left",
                            9250,
                            500,
                            "easeInOutBack",
                            "${Video-dialogos2}",
                            '-827px',
                            '53px'
                        ],
                        [
                            "eid1243",
                            "left",
                            39250,
                            500,
                            "easeOutBack",
                            "${text-pag30}",
                            '-754px',
                            '0px'
                        ],
                        [
                            "eid814",
                            "display",
                            33000,
                            0,
                            "easeOutBack",
                            "${ale-p25}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1168",
                            "display",
                            34000,
                            0,
                            "linear",
                            "${ale-p25}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1196",
                            "display",
                            36750,
                            0,
                            "easeOutCirc",
                            "${sig-pag28}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1203",
                            "display",
                            37750,
                            0,
                            "easeOutBack",
                            "${sig-pag28}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1391",
                            "display",
                            40500,
                            0,
                            "easeOutBack",
                            "${sig-pag31}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1393",
                            "display",
                            41500,
                            0,
                            "easeOutBack",
                            "${sig-pag31}",
                            'block',
                            'none'
                        ],
                        [
                            "eid146",
                            "display",
                            9250,
                            0,
                            "easeInOutBack",
                            "${sig-pag6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid147",
                            "display",
                            10250,
                            0,
                            "easeInOutBack",
                            "${sig-pag6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid867",
                            "display",
                            33000,
                            0,
                            "easeOutBack",
                            "${atr-pag25}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1171",
                            "display",
                            34000,
                            0,
                            "linear",
                            "${atr-pag25}",
                            'block',
                            'none'
                        ],
                        [
                            "eid92",
                            "display",
                            8000,
                            0,
                            "linear",
                            "${text-pag5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid105",
                            "display",
                            9000,
                            0,
                            "easeInOutBack",
                            "${text-pag5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1193",
                            "display",
                            36000,
                            0,
                            "easeOutCirc",
                            "${Video2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1194",
                            "display",
                            36500,
                            0,
                            "easeOutCirc",
                            "${Video2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid175",
                            "left",
                            14250,
                            500,
                            "easeInOutBack",
                            "${caro-p10}",
                            '-1992px',
                            '0px'
                        ],
                        [
                            "eid234",
                            "top",
                            18000,
                            500,
                            "easeInOutBack",
                            "${caro-p13}",
                            '600px',
                            '0px'
                        ],
                        [
                            "eid254",
                            "display",
                            20500,
                            0,
                            "easeInOutBack",
                            "${atr-pag15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid286",
                            "display",
                            21500,
                            0,
                            "easeOutBack",
                            "${atr-pag15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid67",
                            "display",
                            5500,
                            0,
                            "easeOutBack",
                            "${sig-pag3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid68",
                            "display",
                            6500,
                            0,
                            "easeOutBack",
                            "${sig-pag3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid630",
                            "left",
                            26750,
                            500,
                            "easeOutBack",
                            "${text-p20}",
                            '-686px',
                            '0px'
                        ],
                        [
                            "eid223",
                            "display",
                            18000,
                            0,
                            "easeInOutBack",
                            "${sig-pag13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid235",
                            "display",
                            19000,
                            0,
                            "easeInOutBack",
                            "${sig-pag13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid127",
                            "left",
                            10500,
                            500,
                            "easeInOutBack",
                            "${text-p7}",
                            '696px',
                            '0px'
                        ],
                        [
                            "eid340",
                            "display",
                            21750,
                            0,
                            "easeOutBack",
                            "${ima-p16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid363",
                            "display",
                            22750,
                            0,
                            "easeOutBack",
                            "${ima-p16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1409",
                            "top",
                            43000,
                            500,
                            "easeOutBack",
                            "${text-pag33}",
                            '600px',
                            '0px'
                        ],
                        [
                            "eid129",
                            "display",
                            10500,
                            0,
                            "easeInOutBack",
                            "${sig-pag7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid131",
                            "display",
                            11500,
                            0,
                            "easeInOutBack",
                            "${sig-pag7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid378",
                            "display",
                            24250,
                            0,
                            "easeOutBack",
                            "${text-p18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid392",
                            "display",
                            25250,
                            0,
                            "easeOutBack",
                            "${text-p18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid141",
                            "left",
                            11750,
                            500,
                            "easeInOutBack",
                            "${caro-p8}",
                            '-934px',
                            '0px'
                        ],
                        [
                            "eid1406",
                            "display",
                            43000,
                            0,
                            "easeOutBack",
                            "${text-pag33}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1410",
                            "display",
                            44000,
                            0,
                            "easeOutBack",
                            "${text-pag33}",
                            'block',
                            'none'
                        ],
                        [
                            "eid30",
                            "left",
                            2750,
                            500,
                            "easeOutSine",
                            "${Alejandra2}",
                            '-772px',
                            '0px'
                        ],
                        [
                            "eid1493",
                            "display",
                            50500,
                            0,
                            "easeOutBack",
                            "${atr-pag39}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1500",
                            "display",
                            51500,
                            0,
                            "easeOutBack",
                            "${atr-pag39}",
                            'block',
                            'none'
                        ],
                        [
                            "eid58",
                            "display",
                            5500,
                            0,
                            "easeOutBack",
                            "${fondo2-ebook}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1546",
                            "display",
                            34000,
                            0,
                            "easeOutBack",
                            "${fondo2-ebook}",
                            'block',
                            'none'
                        ],
                        [
                            "eid36",
                            "display",
                            2750,
                            0,
                            "easeOutSine",
                            "${btn-atras}",
                            'none',
                            'block'
                        ],
                        [
                            "eid38",
                            "display",
                            3750,
                            0,
                            "easeOutSine",
                            "${btn-atras}",
                            'block',
                            'none'
                        ],
                        [
                            "eid186",
                            "top",
                            15500,
                            0,
                            "easeInOutBack",
                            "${text-p11}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1400",
                            "left",
                            41750,
                            500,
                            "easeOutBack",
                            "${text-pag32}",
                            '1274px',
                            '0px'
                        ],
                        [
                            "eid609",
                            "display",
                            25500,
                            0,
                            "easeOutBack",
                            "${text-p19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid617",
                            "display",
                            26500,
                            0,
                            "easeOutBack",
                            "${text-p19}",
                            'block',
                            'none'
                        ],
                        [
                            "eid222",
                            "display",
                            18000,
                            0,
                            "easeInOutBack",
                            "${atr-pag13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid236",
                            "display",
                            19000,
                            0,
                            "easeInOutBack",
                            "${atr-pag13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid26",
                            "top",
                            2500,
                            250,
                            "easeOutSine",
                            "${sig-atrs}",
                            '111px',
                            '0px'
                        ],
                        [
                            "eid637",
                            "display",
                            28000,
                            0,
                            "easeOutBack",
                            "${ale-p21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid666",
                            "display",
                            29000,
                            0,
                            "easeOutBack",
                            "${ale-p21}",
                            'block',
                            'none'
                        ],
                        [
                            "eid142",
                            "left",
                            11750,
                            500,
                            "easeInOutBack",
                            "${ale-p8}",
                            '906px',
                            '0px'
                        ],
                        [
                            "eid48",
                            "left",
                            4250,
                            500,
                            "easeOutBack",
                            "${text-intro}",
                            '819px',
                            '0px'
                        ],
                        [
                            "eid85",
                            "display",
                            6750,
                            0,
                            "linear",
                            "${sig-pag4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid86",
                            "display",
                            7750,
                            0,
                            "linear",
                            "${sig-pag4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid610",
                            "display",
                            25500,
                            0,
                            "easeOutBack",
                            "${ale-p19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid618",
                            "display",
                            26500,
                            0,
                            "easeOutBack",
                            "${ale-p19}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1432",
                            "display",
                            46750,
                            0,
                            "easeOutBack",
                            "${atr-pag36}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1458",
                            "display",
                            47750,
                            0,
                            "easeOutBack",
                            "${atr-pag36}",
                            'block',
                            'none'
                        ],
                        [
                            "eid27",
                            "display",
                            2750,
                            0,
                            "easeOutSine",
                            "${Alejandra2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid39",
                            "display",
                            3750,
                            0,
                            "easeOutSine",
                            "${Alejandra2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid121",
                            "display",
                            10500,
                            0,
                            "easeInOutBack",
                            "${pers-p7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid134",
                            "display",
                            11500,
                            0,
                            "easeInOutBack",
                            "${pers-p7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid162",
                            "display",
                            13000,
                            0,
                            "easeInOutBack",
                            "${atr-pag9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid165",
                            "display",
                            14000,
                            0,
                            "easeInOutBack",
                            "${atr-pag9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid636",
                            "display",
                            28000,
                            0,
                            "easeOutBack",
                            "${atr-pag21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid667",
                            "display",
                            29000,
                            0,
                            "easeOutBack",
                            "${atr-pag21}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1531",
                            "top",
                            54250,
                            500,
                            "easeOutBack",
                            "${text-pag42}",
                            '688px',
                            '0px'
                        ],
                        [
                            "eid1405",
                            "display",
                            43000,
                            0,
                            "easeOutBack",
                            "${atr-pag33}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1412",
                            "display",
                            44000,
                            0,
                            "easeOutBack",
                            "${atr-pag33}",
                            'block',
                            'none'
                        ],
                        [
                            "eid644",
                            "left",
                            28000,
                            500,
                            "easeOutBack",
                            "${text-p21}",
                            '1280px',
                            '0px'
                        ],
                        [
                            "eid769",
                            "top",
                            30500,
                            500,
                            "easeOutBack",
                            "${text-p23}",
                            '612px',
                            '0px'
                        ],
                        [
                            "eid161",
                            "display",
                            13000,
                            0,
                            "easeInOutBack",
                            "${sig-pag9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid180",
                            "display",
                            14000,
                            0,
                            "easeInOutBack",
                            "${sig-pag9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid154",
                            "display",
                            13000,
                            0,
                            "easeInOutBack",
                            "${ale-p9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid164",
                            "display",
                            14000,
                            0,
                            "easeInOutBack",
                            "${ale-p9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid364",
                            "display",
                            23000,
                            0,
                            "easeOutBack",
                            "${sig-pag17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid374",
                            "display",
                            24000,
                            0,
                            "easeOutBack",
                            "${sig-pag17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid282",
                            "top",
                            20500,
                            500,
                            "easeOutBack",
                            "${ale-p15}",
                            '-222px',
                            '-1px'
                        ],
                        [
                            "eid1783",
                            "display",
                            51750,
                            0,
                            "easeOutBack",
                            "${Anim-R6-viaGlucolitica-bp}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1784",
                            "display",
                            52750,
                            0,
                            "easeOutBack",
                            "${Anim-R6-viaGlucolitica-bp}",
                            'block',
                            'none'
                        ],
                        [
                            "eid241",
                            "display",
                            19250,
                            0,
                            "easeInOutBack",
                            "${caro-p14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid249",
                            "display",
                            20250,
                            0,
                            "easeInOutBack",
                            "${caro-p14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid192",
                            "display",
                            15500,
                            0,
                            "easeInOutBack",
                            "${sig-pag11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid194",
                            "display",
                            16500,
                            0,
                            "easeInOutBack",
                            "${sig-pag11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1415",
                            "display",
                            44250,
                            0,
                            "easeOutBack",
                            "${text-pag34}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1419",
                            "display",
                            45250,
                            0,
                            "easeOutBack",
                            "${text-pag34}",
                            'block',
                            'none'
                        ],
                        [
                            "eid136",
                            "display",
                            11750,
                            0,
                            "easeInOutBack",
                            "${caro-p8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid151",
                            "display",
                            12750,
                            0,
                            "easeInOutBack",
                            "${caro-p8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1526",
                            "display",
                            54250,
                            0,
                            "easeOutBack",
                            "${sig-pag42}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1542",
                            "display",
                            55750,
                            0,
                            "easeOutBack",
                            "${sig-pag42}",
                            'block',
                            'none'
                        ],
                        [
                            "eid337",
                            "display",
                            21750,
                            0,
                            "easeOutBack",
                            "${sig-pag16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid360",
                            "display",
                            22750,
                            0,
                            "easeOutBack",
                            "${sig-pag16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1431",
                            "display",
                            46750,
                            0,
                            "easeOutBack",
                            "${sig-pag36}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1459",
                            "display",
                            47750,
                            0,
                            "easeOutBack",
                            "${sig-pag36}",
                            'block',
                            'none'
                        ],
                        [
                            "eid339",
                            "display",
                            21750,
                            0,
                            "easeOutBack",
                            "${text-p16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid362",
                            "display",
                            22750,
                            0,
                            "easeOutBack",
                            "${text-p16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid45",
                            "display",
                            4250,
                            0,
                            "easeOutSine",
                            "${text-intro}",
                            'none',
                            'block'
                        ],
                        [
                            "eid56",
                            "display",
                            5250,
                            0,
                            "easeOutBack",
                            "${text-intro}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1396",
                            "display",
                            41750,
                            0,
                            "easeOutBack",
                            "${atr-pag32}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1403",
                            "display",
                            42750,
                            0,
                            "easeOutBack",
                            "${atr-pag32}",
                            'block',
                            'none'
                        ],
                        [
                            "eid635",
                            "display",
                            28000,
                            0,
                            "easeOutBack",
                            "${sig-pag21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid668",
                            "display",
                            29000,
                            0,
                            "easeOutBack",
                            "${sig-pag21}",
                            'block',
                            'none'
                        ],
                        [
                            "eid345",
                            "left",
                            21750,
                            500,
                            "easeOutBack",
                            "${ima-p16}",
                            '-854px',
                            '0px'
                        ],
                        [
                            "eid1504",
                            "top",
                            51750,
                            500,
                            "easeOutBack",
                            "${text-pag40}",
                            '597px',
                            '0px'
                        ],
                        [
                            "eid765",
                            "display",
                            30500,
                            0,
                            "easeOutBack",
                            "${text-p23}",
                            'none',
                            'block'
                        ],
                        [
                            "eid770",
                            "display",
                            31500,
                            0,
                            "easeOutBack",
                            "${text-p23}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1395",
                            "display",
                            41750,
                            0,
                            "easeOutBack",
                            "${sig-pag32}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1402",
                            "display",
                            42750,
                            0,
                            "easeOutBack",
                            "${sig-pag32}",
                            'block',
                            'none'
                        ],
                        [
                            "eid216",
                            "top",
                            16750,
                            0,
                            "easeInOutBack",
                            "${vid-fosfagenica}",
                            '105px',
                            '105px'
                        ],
                        [
                            "eid359",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${ima2-p16}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1224",
                            "display",
                            38500,
                            0,
                            "easeOutBack",
                            "${dato-importante}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1236",
                            "display",
                            39000,
                            0,
                            "easeOutBack",
                            "${dato-importante}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1516",
                            "display",
                            53000,
                            0,
                            "easeOutBack",
                            "${sig-pag41}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1524",
                            "display",
                            54000,
                            0,
                            "easeOutBack",
                            "${sig-pag41}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1505",
                            "display",
                            51750,
                            0,
                            "easeOutBack",
                            "${atr-pag40}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1514",
                            "display",
                            52750,
                            0,
                            "easeOutBack",
                            "${atr-pag40}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1189",
                            "display",
                            35500,
                            0,
                            "easeOutCirc",
                            "${text-pag27}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1195",
                            "display",
                            36500,
                            0,
                            "easeOutCirc",
                            "${text-pag27}",
                            'block',
                            'none'
                        ],
                        [
                            "eid379",
                            "display",
                            24250,
                            0,
                            "easeOutBack",
                            "${ale-p18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid391",
                            "display",
                            25250,
                            0,
                            "easeOutBack",
                            "${ale-p18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid815",
                            "display",
                            33000,
                            0,
                            "easeOutBack",
                            "${caro-p25}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1169",
                            "display",
                            34000,
                            0,
                            "linear",
                            "${caro-p25}",
                            'block',
                            'none'
                        ],
                        [
                            "eid382",
                            "left",
                            24250,
                            500,
                            "easeOutBack",
                            "${text-p18}",
                            '-1280px',
                            '0px'
                        ],
                        [
                            "eid49",
                            "display",
                            1750,
                            0,
                            "easeOutBack",
                            "${btn-iniciar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid50",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${btn-iniciar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1387",
                            "top",
                            40500,
                            500,
                            "easeOutBack",
                            "${text-pag31}",
                            '640px',
                            '0px'
                        ],
                        [
                            "eid763",
                            "display",
                            30500,
                            0,
                            "easeOutBack",
                            "${sig-pag23}",
                            'none',
                            'block'
                        ],
                        [
                            "eid771",
                            "display",
                            31500,
                            0,
                            "easeOutBack",
                            "${sig-pag23}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1205",
                            "display",
                            38000,
                            0,
                            "easeOutBack",
                            "${text-pag29}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1239",
                            "display",
                            39000,
                            0,
                            "easeOutBack",
                            "${text-pag29}",
                            'block',
                            'none'
                        ],
                        [
                            "eid128",
                            "left",
                            10500,
                            500,
                            "easeInOutBack",
                            "${pers-p7}",
                            '-764px',
                            '0px'
                        ],
                        [
                            "eid81",
                            "display",
                            6750,
                            0,
                            "easeOutBack",
                            "${atr-pag4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid87",
                            "display",
                            7750,
                            0,
                            "linear",
                            "${atr-pag4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid866",
                            "display",
                            33000,
                            0,
                            "easeOutBack",
                            "${sig-pag25}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1170",
                            "display",
                            34000,
                            0,
                            "linear",
                            "${sig-pag25}",
                            'block',
                            'none'
                        ],
                        [
                            "eid209",
                            "display",
                            16750,
                            0,
                            "easeInOutBack",
                            "${sig-pag12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid210",
                            "display",
                            17750,
                            0,
                            "easeInOutBack",
                            "${sig-pag12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid181",
                            "display",
                            15500,
                            0,
                            "easeInOutBack",
                            "${text-p11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid196",
                            "display",
                            16500,
                            0,
                            "easeInOutBack",
                            "${text-p11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1321",
                            "display",
                            35500,
                            0,
                            "easeOutBack",
                            "${atr-pag27}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1323",
                            "display",
                            36500,
                            0,
                            "easeOutBack",
                            "${atr-pag27}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1316",
                            "display",
                            34250,
                            0,
                            "easeOutBack",
                            "${atr-pag26}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1318",
                            "display",
                            35250,
                            0,
                            "easeOutBack",
                            "${atr-pag26}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1555",
                            "display",
                            56000,
                            0,
                            "easeOutBack",
                            "${btn-reiniciar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid835",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${proceo-pag22}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1225",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${ima-pag29}",
                            'none',
                            'none'
                        ],
                        [
                            "eid135",
                            "display",
                            11750,
                            0,
                            "easeInOutBack",
                            "${ale-p8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid152",
                            "display",
                            12750,
                            0,
                            "easeInOutBack",
                            "${ale-p8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1520",
                            "left",
                            53000,
                            500,
                            "easeOutBack",
                            "${text-pag41}",
                            '-2116px',
                            '0px'
                        ],
                        [
                            "eid1509",
                            "left",
                            51750,
                            500,
                            "easeOutBack",
                            "${Anim-R6-viaGlucolitica-bp}",
                            '1384px',
                            '520px'
                        ],
                        [
                            "eid168",
                            "display",
                            14250,
                            0,
                            "easeInOutBack",
                            "${ale-p10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid178",
                            "display",
                            15250,
                            0,
                            "easeInOutBack",
                            "${ale-p10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid182",
                            "display",
                            15500,
                            0,
                            "easeInOutBack",
                            "${ale-p11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid197",
                            "display",
                            17750,
                            0,
                            "easeInOutBack",
                            "${ale-p11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid62",
                            "left",
                            5500,
                            500,
                            "easeOutBack",
                            "${text-pag3}",
                            '-2307px',
                            '0px'
                        ],
                        [
                            "eid1534",
                            "display",
                            54750,
                            0,
                            "easeOutBack",
                            "${btn-proceso}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1535",
                            "display",
                            55250,
                            0,
                            "easeOutBack",
                            "${btn-proceso}",
                            'block',
                            'none'
                        ],
                        [
                            "eid145",
                            "display",
                            9250,
                            0,
                            "easeInOutBack",
                            "${atr-pag6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid148",
                            "display",
                            10250,
                            0,
                            "easeInOutBack",
                            "${atr-pag6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid41",
                            "display",
                            4000,
                            0,
                            "easeOutSine",
                            "${Adrian2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid55",
                            "display",
                            5250,
                            0,
                            "easeOutBack",
                            "${Adrian2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1427",
                            "top",
                            45500,
                            500,
                            "easeOutBack",
                            "${text-pag35}",
                            '-702px',
                            '0px'
                        ],
                        [
                            "eid97",
                            "display",
                            8000,
                            0,
                            "easeInOutBack",
                            "${Hidro}",
                            'none',
                            'block'
                        ],
                        [
                            "eid102",
                            "display",
                            9000,
                            0,
                            "easeInOutBack",
                            "${Hidro}",
                            'block',
                            'none'
                        ],
                        [
                            "eid5",
                            "top",
                            0,
                            250,
                            "linear",
                            "${capa-superior}",
                            '160px',
                            '0px'
                        ],
                        [
                            "eid63",
                            "display",
                            6000,
                            0,
                            "easeOutCirc",
                            "${Video-Intro-final_Subtitulos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid64",
                            "display",
                            6500,
                            0,
                            "easeOutBack",
                            "${Video-Intro-final_Subtitulos}",
                            'block',
                            'none'
                        ],
                        [
                            "eid625",
                            "top",
                            26750,
                            0,
                            "easeOutBack",
                            "${ale-p20}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid31",
                            "display",
                            2750,
                            0,
                            "easeOutSine",
                            "${tabla-contenido}",
                            'none',
                            'block'
                        ],
                        [
                            "eid40",
                            "display",
                            3750,
                            0,
                            "easeOutSine",
                            "${tabla-contenido}",
                            'block',
                            'none'
                        ],
                        [
                            "eid629",
                            "left",
                            26750,
                            500,
                            "easeOutBack",
                            "${ale-p20}",
                            '856px',
                            '0px'
                        ],
                        [
                            "eid796",
                            "display",
                            31750,
                            0,
                            "easeOutBack",
                            "${text-p24}",
                            'none',
                            'block'
                        ],
                        [
                            "eid811",
                            "display",
                            32750,
                            0,
                            "easeOutBack",
                            "${text-p24}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1317",
                            "display",
                            34250,
                            0,
                            "easeOutBack",
                            "${sig-pag26}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1319",
                            "display",
                            35250,
                            0,
                            "easeOutBack",
                            "${sig-pag26}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1424",
                            "display",
                            45500,
                            0,
                            "easeOutBack",
                            "${text-pag35}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1428",
                            "display",
                            46500,
                            0,
                            "easeOutBack",
                            "${text-pag35}",
                            'block',
                            'none'
                        ],
                        [
                            "eid670",
                            "display",
                            29250,
                            0,
                            "easeOutBack",
                            "${caro-p22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid730",
                            "display",
                            30250,
                            0,
                            "easeOutBack",
                            "${caro-p22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid366",
                            "display",
                            23000,
                            0,
                            "easeOutBack",
                            "${ale-p17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid376",
                            "display",
                            24000,
                            0,
                            "easeOutBack",
                            "${ale-p17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid106",
                            "display",
                            9250,
                            0,
                            "easeInOutBack",
                            "${text-pag6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid118",
                            "display",
                            10250,
                            0,
                            "easeInOutBack",
                            "${text-pag6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1554",
                            "top",
                            56000,
                            0,
                            "easeOutBack",
                            "${VideoFinal-Despedida-smaller}",
                            '-17px',
                            '-17px'
                        ],
                        [
                            "eid1201",
                            "top",
                            36750,
                            500,
                            "easeOutBack",
                            "${text-pag28}",
                            '541px',
                            '0px'
                        ],
                        [
                            "eid607",
                            "display",
                            25500,
                            0,
                            "easeOutBack",
                            "${sig-pag19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid619",
                            "display",
                            26500,
                            0,
                            "easeOutBack",
                            "${sig-pag19}",
                            'block',
                            'none'
                        ],
                        [
                            "eid822",
                            "left",
                            33000,
                            500,
                            "easeOutBack",
                            "${caro-p25}",
                            '-1451px',
                            '0px'
                        ],
                        [
                            "eid95",
                            "left",
                            8000,
                            500,
                            "easeInOutBack",
                            "${text-pag5}",
                            '1300px',
                            '0px'
                        ],
                        [
                            "eid144",
                            "display",
                            11750,
                            0,
                            "easeInOutBack",
                            "${sig-pag8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid149",
                            "display",
                            12750,
                            0,
                            "easeInOutBack",
                            "${sig-pag8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1550",
                            "display",
                            56000,
                            0,
                            "easeOutBack",
                            "${VideoFinal-Despedida-smaller}",
                            'none',
                            'block'
                        ],
                        [
                            "eid809",
                            "left",
                            31750,
                            500,
                            "easeOutBack",
                            "${text-p24}",
                            '703px',
                            '0px'
                        ],
                        [
                            "eid185",
                            "top",
                            15500,
                            500,
                            "easeInOutBack",
                            "${ale-p11}",
                            '568px',
                            '0px'
                        ],
                        [
                            "eid1477",
                            "display",
                            48000,
                            0,
                            "easeOutBack",
                            "${atr-pag37}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1479",
                            "display",
                            49000,
                            0,
                            "easeOutBack",
                            "${atr-pag37}",
                            'block',
                            'none'
                        ],
                        [
                            "eid414",
                            "display",
                            24250,
                            0,
                            "easeOutBack",
                            "${atr-pag18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid416",
                            "display",
                            25250,
                            0,
                            "easeOutBack",
                            "${atr-pag18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10",
                            "display",
                            750,
                            0,
                            "easeOutBack",
                            "${profe-Alejandra}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20",
                            "display",
                            2250,
                            0,
                            "easeOutElastic",
                            "${profe-Alejandra}",
                            'block',
                            'none'
                        ],
                        [
                            "eid22",
                            "display",
                            2500,
                            0,
                            "easeOutElastic",
                            "${sig-atrs}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1544",
                            "display",
                            56000,
                            0,
                            "easeOutBack",
                            "${sig-atrs}",
                            'block',
                            'none'
                        ],
                        [
                            "eid247",
                            "left",
                            19250,
                            500,
                            "easeInOutBack",
                            "${ale-p14}",
                            '-1609px',
                            '0px'
                        ],
                        [
                            "eid242",
                            "display",
                            19250,
                            0,
                            "easeInOutBack",
                            "${ale-p14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid250",
                            "display",
                            20250,
                            0,
                            "easeInOutBack",
                            "${ale-p14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1538",
                            "display",
                            55250,
                            0,
                            "easeOutBack",
                            "${cerrar-proceso}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1539",
                            "display",
                            55750,
                            0,
                            "easeOutBack",
                            "${cerrar-proceso}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1536",
                            "display",
                            55250,
                            0,
                            "easeOutBack",
                            "${Lactato-glucolitica-bp}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1537",
                            "display",
                            55750,
                            0,
                            "easeOutBack",
                            "${Lactato-glucolitica-bp}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1501",
                            "display",
                            51750,
                            0,
                            "easeOutBack",
                            "${text-pag40}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1512",
                            "display",
                            52750,
                            0,
                            "easeOutBack",
                            "${text-pag40}",
                            'block',
                            'none'
                        ],
                        [
                            "eid774",
                            "display",
                            31750,
                            0,
                            "easeOutBack",
                            "${sig-pag24}",
                            'none',
                            'block'
                        ],
                        [
                            "eid812",
                            "display",
                            32750,
                            0,
                            "easeOutBack",
                            "${sig-pag24}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1223",
                            "display",
                            38000,
                            0,
                            "easeOutBack",
                            "${atr-pag29}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1238",
                            "display",
                            39000,
                            0,
                            "easeOutBack",
                            "${atr-pag29}",
                            'block',
                            'none'
                        ],
                        [
                            "eid367",
                            "display",
                            23000,
                            0,
                            "easeOutBack",
                            "${caro-p17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid377",
                            "display",
                            24000,
                            0,
                            "easeOutBack",
                            "${caro-p17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1392",
                            "display",
                            40500,
                            0,
                            "easeOutBack",
                            "${atr-pag31}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1394",
                            "display",
                            41500,
                            0,
                            "easeOutBack",
                            "${atr-pag31}",
                            'block',
                            'none'
                        ],
                        [
                            "eid193",
                            "display",
                            15500,
                            0,
                            "easeInOutBack",
                            "${atr-pag11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid195",
                            "display",
                            16500,
                            0,
                            "easeInOutBack",
                            "${atr-pag11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14",
                            "display",
                            1250,
                            0,
                            "easeOutBack",
                            "${titulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18",
                            "display",
                            2250,
                            0,
                            "easeOutElastic",
                            "${titulo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid773",
                            "display",
                            31750,
                            0,
                            "easeOutBack",
                            "${atr-pag24}",
                            'none',
                            'block'
                        ],
                        [
                            "eid813",
                            "display",
                            32750,
                            0,
                            "easeOutBack",
                            "${atr-pag24}",
                            'block',
                            'none'
                        ],
                        [
                            "eid621",
                            "display",
                            26750,
                            0,
                            "easeOutBack",
                            "${sig-pag20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid633",
                            "display",
                            27750,
                            0,
                            "easeOutBack",
                            "${sig-pag20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid130",
                            "display",
                            10500,
                            0,
                            "easeInOutBack",
                            "${atr-p7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid132",
                            "display",
                            11500,
                            0,
                            "easeInOutBack",
                            "${atr-p7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1476",
                            "display",
                            48000,
                            0,
                            "easeOutBack",
                            "${sig-pag37}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1478",
                            "display",
                            49000,
                            0,
                            "easeOutBack",
                            "${sig-pag37}",
                            'block',
                            'none'
                        ],
                        [
                            "eid623",
                            "display",
                            26750,
                            0,
                            "easeOutBack",
                            "${ale-p20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid632",
                            "display",
                            27750,
                            0,
                            "easeOutBack",
                            "${ale-p20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid643",
                            "left",
                            28000,
                            500,
                            "easeOutBack",
                            "${ale-p21}",
                            '-1280px',
                            '0px'
                        ],
                        [
                            "eid386",
                            "display",
                            24750,
                            0,
                            "easeOutBack",
                            "${datocurioso-pag18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid388",
                            "display",
                            25250,
                            0,
                            "easeOutBack",
                            "${datocurioso-pag18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1532",
                            "display",
                            55250,
                            0,
                            "easeOutBack",
                            "${vid-proceso}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1540",
                            "display",
                            55750,
                            0,
                            "easeOutBack",
                            "${vid-proceso}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1528",
                            "display",
                            54250,
                            0,
                            "easeOutBack",
                            "${text-pag42}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1541",
                            "display",
                            55750,
                            0,
                            "easeOutBack",
                            "${text-pag42}",
                            'block',
                            'none'
                        ],
                        [
                            "eid166",
                            "display",
                            14250,
                            0,
                            "easeInOutBack",
                            "${sig-pag10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid176",
                            "display",
                            15250,
                            0,
                            "easeInOutBack",
                            "${sig-pag10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid669",
                            "display",
                            29250,
                            0,
                            "easeOutBack",
                            "${ale-p22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid729",
                            "display",
                            30250,
                            0,
                            "easeOutBack",
                            "${ale-p22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1481",
                            "display",
                            49250,
                            0,
                            "easeOutBack",
                            "${sig-pag38}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1490",
                            "display",
                            50250,
                            0,
                            "easeOutBack",
                            "${sig-pag38}",
                            'block',
                            'none'
                        ],
                        [
                            "eid44",
                            "top",
                            4000,
                            500,
                            "easeOutSine",
                            "${Adrian2}",
                            '612px',
                            '0px'
                        ],
                        [
                            "eid1422",
                            "display",
                            45500,
                            0,
                            "easeOutBack",
                            "${sig-pag35}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1429",
                            "display",
                            46500,
                            0,
                            "easeOutBack",
                            "${sig-pag35}",
                            'block',
                            'none'
                        ],
                        [
                            "eid73",
                            "left",
                            6750,
                            500,
                            "easeOutBack",
                            "${text-pag4}",
                            '1463px',
                            '0px'
                        ],
                        [
                            "eid232",
                            "top",
                            18000,
                            500,
                            "easeInOutBack",
                            "${ale-p13}",
                            '-651px',
                            '0px'
                        ],
                        [
                            "eid387",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${datocurioso}",
                            'none',
                            'none'
                        ],
                        [
                            "eid212",
                            "display",
                            16750,
                            0,
                            "easeInOutBack",
                            "${vid-fosfagenica}",
                            'none',
                            'block'
                        ],
                        [
                            "eid217",
                            "display",
                            17750,
                            0,
                            "easeInOutBack",
                            "${vid-fosfagenica}",
                            'block',
                            'none'
                        ],
                        [
                            "eid413",
                            "display",
                            24250,
                            0,
                            "easeOutBack",
                            "${sig-pag18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid415",
                            "display",
                            25250,
                            0,
                            "easeOutBack",
                            "${sig-pag18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1515",
                            "display",
                            53000,
                            0,
                            "easeOutBack",
                            "${atr-pag41}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1525",
                            "display",
                            54000,
                            0,
                            "easeOutBack",
                            "${atr-pag41}",
                            'block',
                            'none'
                        ],
                        [
                            "eid70",
                            "display",
                            6750,
                            0,
                            "easeOutBack",
                            "${text-pag4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid83",
                            "display",
                            7750,
                            0,
                            "linear",
                            "${text-pag4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid626",
                            "top",
                            26750,
                            0,
                            "easeOutBack",
                            "${text-p20}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid17",
                            "top",
                            1250,
                            500,
                            "easeOutElastic",
                            "${titulo}",
                            '-506px',
                            '0px'
                        ],
                        [
                            "eid1175",
                            "left",
                            34250,
                            500,
                            "easeOutCirc",
                            "${text-pag26}",
                            '1295px',
                            '0px'
                        ],
                        [
                            "eid240",
                            "display",
                            19250,
                            0,
                            "easeInOutBack",
                            "${atr-pag14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid251",
                            "display",
                            20250,
                            0,
                            "easeInOutBack",
                            "${atr-pag14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1506",
                            "display",
                            51750,
                            0,
                            "easeOutBack",
                            "${sig-pag40}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1513",
                            "display",
                            52750,
                            0,
                            "easeOutBack",
                            "${sig-pag40}",
                            'block',
                            'none'
                        ],
                        [
                            "eid256",
                            "-webkit-transform-origin",
                            20500,
                            0,
                            "easeInOutBack",
                            "${ale-p15}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1815",
                            "-moz-transform-origin",
                            20500,
                            0,
                            "easeInOutBack",
                            "${ale-p15}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1816",
                            "-ms-transform-origin",
                            20500,
                            0,
                            "easeInOutBack",
                            "${ale-p15}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1817",
                            "msTransformOrigin",
                            20500,
                            0,
                            "easeInOutBack",
                            "${ale-p15}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1818",
                            "-o-transform-origin",
                            20500,
                            0,
                            "easeInOutBack",
                            "${ale-p15}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1819",
                            "transform-origin",
                            20500,
                            0,
                            "easeInOutBack",
                            "${ale-p15}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid257",
                            "-webkit-transform-origin",
                            21000,
                            0,
                            "easeInOutBack",
                            "${ale-p15}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1820",
                            "-moz-transform-origin",
                            21000,
                            0,
                            "easeInOutBack",
                            "${ale-p15}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1821",
                            "-ms-transform-origin",
                            21000,
                            0,
                            "easeInOutBack",
                            "${ale-p15}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1822",
                            "msTransformOrigin",
                            21000,
                            0,
                            "easeInOutBack",
                            "${ale-p15}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1823",
                            "-o-transform-origin",
                            21000,
                            0,
                            "easeInOutBack",
                            "${ale-p15}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1824",
                            "transform-origin",
                            21000,
                            0,
                            "easeInOutBack",
                            "${ale-p15}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid280",
                            "height",
                            20500,
                            500,
                            "easeOutBack",
                            "${ale-p15}",
                            '1131px',
                            '641px'
                        ],
                        [
                            "eid109",
                            "top",
                            9250,
                            500,
                            "easeInOutBack",
                            "${text-pag6}",
                            '-640px',
                            '0px'
                        ],
                        [
                            "eid346",
                            "left",
                            21750,
                            500,
                            "easeOutBack",
                            "${text-p16}",
                            '734px',
                            '0px'
                        ],
                        [
                            "eid1494",
                            "display",
                            50500,
                            0,
                            "easeOutBack",
                            "${text-pag39}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1498",
                            "display",
                            51500,
                            0,
                            "easeOutBack",
                            "${text-pag39}",
                            'block',
                            'none'
                        ],
                        [
                            "eid638",
                            "display",
                            28000,
                            0,
                            "easeOutBack",
                            "${text-p21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid665",
                            "display",
                            29000,
                            0,
                            "easeOutBack",
                            "${text-p21}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1488",
                            "top",
                            49250,
                            500,
                            "easeOutBack",
                            "${text-pag38}",
                            '742px',
                            '0px'
                        ],
                        [
                            "eid1470",
                            "display",
                            48000,
                            0,
                            "easeOutBack",
                            "${text-pag37}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1475",
                            "display",
                            49000,
                            0,
                            "easeOutBack",
                            "${text-pag37}",
                            'block',
                            'none'
                        ],
                        [
                            "eid239",
                            "display",
                            19250,
                            0,
                            "easeInOutBack",
                            "${sig-pag14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid252",
                            "display",
                            20250,
                            0,
                            "easeInOutBack",
                            "${sig-pag14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid804",
                            "top",
                            31750,
                            500,
                            "easeOutBack",
                            "${ale-p24}",
                            '640px',
                            '0px'
                        ],
                        [
                            "eid1172",
                            "display",
                            34250,
                            0,
                            "linear",
                            "${text-pag26}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1188",
                            "display",
                            35250,
                            0,
                            "easeOutCirc",
                            "${text-pag26}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1247",
                            "left",
                            39500,
                            250,
                            "easeOutBack",
                            "${GLUCOLISIS-bp}",
                            '1312px',
                            '530px'
                        ],
                        [
                            "eid160",
                            "top",
                            13000,
                            500,
                            "easeInOutBack",
                            "${caro-p9}",
                            '-640px',
                            '0px'
                        ],
                        [
                            "eid1456",
                            "left",
                            46750,
                            500,
                            "easeOutBack",
                            "${text-pag36}",
                            '1273px',
                            '0px'
                        ],
                        [
                            "eid795",
                            "display",
                            31750,
                            0,
                            "easeOutBack",
                            "${ale-p24}",
                            'none',
                            'block'
                        ],
                        [
                            "eid810",
                            "display",
                            32750,
                            0,
                            "easeOutBack",
                            "${ale-p24}",
                            'block',
                            'none'
                        ],
                        [
                            "eid89",
                            "display",
                            8000,
                            0,
                            "linear",
                            "${atr-pag5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid103",
                            "display",
                            9000,
                            0,
                            "easeInOutBack",
                            "${atr-pag5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1453",
                            "display",
                            46750,
                            0,
                            "easeOutBack",
                            "${text-pag36}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1457",
                            "display",
                            47750,
                            0,
                            "easeOutBack",
                            "${text-pag36}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1423",
                            "display",
                            45500,
                            0,
                            "easeOutBack",
                            "${atr-pag35}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1430",
                            "display",
                            46500,
                            0,
                            "easeOutBack",
                            "${atr-pag35}",
                            'block',
                            'none'
                        ],
                        [
                            "eid80",
                            "left",
                            6750,
                            500,
                            "easeOutBack",
                            "${ATP}",
                            '1354px',
                            '668px'
                        ],
                        [
                            "eid1414",
                            "display",
                            44250,
                            0,
                            "easeOutBack",
                            "${atr-pag34}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1421",
                            "display",
                            45250,
                            0,
                            "easeOutBack",
                            "${atr-pag34}",
                            'block',
                            'none'
                        ],
                        [
                            "eid385",
                            "top",
                            24250,
                            500,
                            "easeOutBack",
                            "${ale-p18}",
                            '552px',
                            '0px'
                        ],
                        [
                            "eid1198",
                            "display",
                            36750,
                            0,
                            "easeOutCirc",
                            "${text-pag28}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1202",
                            "display",
                            37750,
                            0,
                            "easeOutBack",
                            "${text-pag28}",
                            'block',
                            'none'
                        ],
                        [
                            "eid357",
                            "display",
                            22250,
                            0,
                            "easeOutBack",
                            "${btn-ima-p16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid358",
                            "display",
                            22750,
                            0,
                            "easeOutBack",
                            "${btn-ima-p16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid365",
                            "display",
                            23000,
                            0,
                            "easeOutBack",
                            "${atr-pag17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid375",
                            "display",
                            24000,
                            0,
                            "easeOutBack",
                            "${atr-pag17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1222",
                            "display",
                            38000,
                            0,
                            "easeOutBack",
                            "${sig-pag29}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1237",
                            "display",
                            39000,
                            0,
                            "easeOutBack",
                            "${sig-pag29}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1314",
                            "display",
                            39250,
                            0,
                            "easeOutBack",
                            "${atr-pag30}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1315",
                            "display",
                            40250,
                            0,
                            "easeOutBack",
                            "${atr-pag30}",
                            'block',
                            'none'
                        ],
                        [
                            "eid208",
                            "display",
                            16750,
                            0,
                            "easeInOutBack",
                            "${atr-pag12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid211",
                            "display",
                            17750,
                            0,
                            "easeInOutBack",
                            "${atr-pag12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid283",
                            "left",
                            20500,
                            500,
                            "easeOutBack",
                            "${ale-p15}",
                            '-443px',
                            '0px'
                        ],
                        [
                            "eid253",
                            "display",
                            20500,
                            0,
                            "easeInOutBack",
                            "${sig-pag15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid285",
                            "display",
                            21500,
                            0,
                            "easeOutBack",
                            "${sig-pag15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid35",
                            "display",
                            2750,
                            0,
                            "easeOutSine",
                            "${btn-siguiente}",
                            'none',
                            'block'
                        ],
                        [
                            "eid37",
                            "display",
                            3750,
                            0,
                            "easeOutSine",
                            "${btn-siguiente}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${fondo1-ebook}",
                            'block',
                            'block'
                        ],
                        [
                            "eid57",
                            "display",
                            5250,
                            0,
                            "easeOutBack",
                            "${fondo1-ebook}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1404",
                            "display",
                            43000,
                            0,
                            "easeOutBack",
                            "${sig-pag33}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1411",
                            "display",
                            44000,
                            0,
                            "easeOutBack",
                            "${sig-pag33}",
                            'block',
                            'none'
                        ],
                        [
                            "eid624",
                            "display",
                            26750,
                            0,
                            "easeOutBack",
                            "${text-p20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid631",
                            "display",
                            27750,
                            0,
                            "easeOutBack",
                            "${text-p20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid124",
                            "display",
                            10500,
                            0,
                            "easeInOutBack",
                            "${text-p7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid133",
                            "display",
                            11500,
                            0,
                            "easeInOutBack",
                            "${text-p7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid615",
                            "top",
                            25500,
                            500,
                            "easeOutBack",
                            "${text-p19}",
                            '-554px',
                            '0px'
                        ],
                        [
                            "eid1240",
                            "display",
                            39250,
                            0,
                            "easeOutBack",
                            "${text-pag30}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1251",
                            "display",
                            40250,
                            0,
                            "easeOutBack",
                            "${text-pag30}",
                            'block',
                            'none'
                        ],
                        [
                            "eid616",
                            "top",
                            25500,
                            500,
                            "easeOutBack",
                            "${ale-p19}",
                            '634px',
                            '0px'
                        ],
                        [
                            "eid2",
                            "display",
                            0,
                            0,
                            "linear",
                            "${capa-superior}",
                            'block',
                            'block'
                        ],
                        [
                            "eid21",
                            "display",
                            2250,
                            0,
                            "easeOutElastic",
                            "${capa-superior}",
                            'block',
                            'none'
                        ],
                        [
                            "eid77",
                            "display",
                            6750,
                            0,
                            "easeOutBack",
                            "${ATP}",
                            'none',
                            'block'
                        ],
                        [
                            "eid82",
                            "display",
                            7750,
                            0,
                            "linear",
                            "${ATP}",
                            'block',
                            'none'
                        ],
                        [
                            "eid88",
                            "display",
                            8000,
                            0,
                            "linear",
                            "${sig-pag5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid104",
                            "display",
                            9000,
                            0,
                            "easeInOutBack",
                            "${sig-pag5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid373",
                            "left",
                            23000,
                            500,
                            "easeOutBack",
                            "${caro-p17}",
                            '-1882px',
                            '0px'
                        ],
                        [
                            "eid101",
                            "left",
                            8000,
                            500,
                            "easeInOutBack",
                            "${Hidro}",
                            '-696px',
                            '59px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("e-book_edgeActions.js");
})("EDGE-264244432");
