/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: true,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'RoundRect',
                type: 'rect',
                rect: ['44px', '110px','206px','130px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['97px', '154px','auto','auto','auto', 'auto'],
                text: "hello world",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'background2',
                type: 'image',
                rect: ['245px', '-7px','500px','350px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"background.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["style", "height", '350px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '500px']
            ],
            "${_RoundRect}": [
                ["style", "height", '130px'],
                ["style", "top", '110px'],
                ["style", "left", '44px'],
                ["style", "width", '206px']
            ],
            "${_Text}": [
                ["style", "top", '154px'],
                ["style", "text-align", 'center'],
                ["style", "left", '97px']
            ],
            "${_background2}": [
                ["style", "left", '245px'],
                ["style", "top", '-7px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-455333329");
