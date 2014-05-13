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
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Ellipse',
                type: 'ellipse',
                rect: ['242px', '134px','66px','66px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['242px', '209px','66px','75px','auto', 'auto'],
                borderRadius: ["11px 0px", "11px 0px", "11px 0px", "11px 0px"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle2}": [
                ["style", "top", '209px'],
                ["style", "border-bottom-left-radius", [11,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "background-color", 'rgba(192,192,192,1)'],
                ["style", "border-bottom-right-radius", [11,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "border-top-left-radius", [11,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '242px'],
                ["style", "border-top-right-radius", [11,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Ellipse}": [
                ["style", "top", '134px'],
                ["style", "left", '242px'],
                ["color", "background-color", 'rgba(192,192,192,1)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 850,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "style", "${_Ellipse}", "top", '169px', { fromValue: '134px'}], position: 0, duration: 850 },
                { id: "eid7", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(234,14,14,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1)'}], position: 0, duration: 850 },
                { id: "eid5", tween: [ "style", "${_Rectangle2}", "left", '369px', { fromValue: '242px'}], position: 0, duration: 850 },
                { id: "eid3", tween: [ "style", "${_Ellipse}", "left", '369px', { fromValue: '242px'}], position: 0, duration: 850 },
                { id: "eid6", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(234,14,14,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1)'}], position: 0, duration: 850 },
                { id: "eid4", tween: [ "style", "${_Rectangle2}", "top", '244px', { fromValue: '209px'}], position: 0, duration: 850 }            ]
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
})(jQuery, AdobeEdge, "EDGE-18691953");
