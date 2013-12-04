/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
         dom: [
         {
            id:'Rectangle',
            type:'rect',
            rect:[0,0,574,592],
            fill:["rgba(255,255,255,0.00)"],
            stroke:[4,"rgba(213,105,37,1.00)","solid"],
            transform:[]
         },
         {
            id:'line',
            type:'rect',
            rect:[71,127,0,0],
            transform:[[-103]]
         },
         {
            id:'chi',
            type:'image',
            rect:[0,0,261,264],
            clip:['rect(-6px 274px 267px -6px)'],
            fill:["rgba(0,0,0,0)",'image/chi.jpg'],
            transform:[[74,25],[],[],[0.706,0.706]]
         },
         {
            id:'chiCopy',
            type:'image',
            rect:[0,0,261,264],
            fill:["rgba(0,0,0,0)",'image/chi.jpg'],
            transform:[[325,202],[],[],[0.369,0.369]]
         },
         {
            id:'off',
            type:'image',
            rect:[0,0,152,210],
            fill:["rgba(0,0,0,0)",'image/off.jpg'],
            transform:[[278,442],[],[],[0.335,0.335]]
         },
         {
            id:'on',
            type:'image',
            rect:[0,0,152,210],
            fill:["rgba(0,0,0,0)",'image/on.jpg'],
            transform:[[278,442],[],[],[0.335,0.335]]
         },
         {
            id:'Text',
            type:'text',
            rect:[444,47,225,97],
            text:"这是段demo，点击开关试试",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none",""],
            transform:[[-425,-29]]
         },
         {
            id:'icon',
            type:'image',
            rect:[0,0,24,24],
            fill:["rgba(0,0,0,0)",im+"spechbubble_sq_line_icon%2624.png"],
            transform:[[528,17]]
         },
         {
            id:'icon2',
            type:'image',
            rect:[0,0,24,24],
            fill:["rgba(0,0,0,0)",im+"rnd_br_first_icon%2624.png"],
            transform:[[528,546]]
         },
         {
            id:'cads',
            type:'rect',
            rect:[423,193,0,0],
            transform:[[-421,-144]]
         },
         {
            id:'zoom',
            type:'image',
            rect:[0,0,24,24],
            fill:["rgba(0,0,0,0)",im+"zoom_icon%2624.png"],
            transform:[[17,97]]
         },
         {
            id:'text22',
            type:'rect',
            rect:[231,145,0,0]
         },
         {
            id:'block',
            type:'rect',
            rect:[439,668,0,0],
            transform:[[-421,-121]]
         },
         {
            id:'icon4',
            type:'image',
            rect:[0,0,24,24],
            fill:["rgba(0,0,0,0)",im+"playback_reload_icon%2624.png"],
            transform:[[202,546]]
         }],
         symbolInstances: [
         {
            id:'block',
            symbolName:'block'
         },
         {
            id:'line',
            symbolName:'line'
         },
         {
            id:'text22',
            symbolName:'text2'
         },
         {
            id:'cads',
            symbolName:'cads'
         }
         ]
      },
   states: {
      "Base State": {
         "${_block}": [
            ["transform", "translateX", '-421.28px'],
            ["transform", "translateY", '-121.35px']
         ],
         "${_cads}": [
            ["transform", "translateY", '-144.35px'],
            ["transform", "translateX", '-421.28px']
         ],
         "${_text22}": [
            ["style", "display", 'block'],
            ["transform", "translateY", '-250.35px'],
            ["transform", "translateX", '-68.29px']
         ],
         "${_icon4}": [
            ["transform", "translateX", '202.72px'],
            ["transform", "translateY", '546.64px']
         ],
         "${_off}": [
            ["transform", "scaleX", '0.3351'],
            ["transform", "scaleY", '0.33511'],
            ["transform", "translateY", '442.7px'],
            ["transform", "translateX", '278.6px']
         ],
         "${_on}": [
            ["transform", "scaleX", '0.3351'],
            ["transform", "scaleY", '0.33511'],
            ["transform", "translateY", '442.7px'],
            ["transform", "translateX", '278.6px']
         ],
         "${_zoom}": [
            ["transform", "translateX", '17.7px'],
            ["transform", "translateY", '97.87px']
         ],
         "body": [
            ["color", "background-color", 'rgba(0,0,0,0)']
         ],
         "${_line}": [
            ["transform", "translateX", '-103px'],
            ["transform", "translateY", '0.16px']
         ],
         "${_icon2}": [
            ["transform", "translateX", '528.71px'],
            ["transform", "translateY", '546.64px']
         ],
         "${_Text}": [
            ["transform", "translateX", '-425.83px'],
            ["transform", "translateY", '-29.17px']
         ],
         "${_chi}": [
            ["transform", "translateX", '208.71px'],
            ["transform", "rotateZ", '0'],
            ["transform", "scaleX", '0.70641'],
            ["style", "clip", [-6,274,267,-6], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '27.32px'],
            ["transform", "scaleY", '0.70641']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '600px'],
            ["style", "width", '582px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["color", "border-color", 'rgba(213,105,37,1.00)'],
            ["transform", "translateX", '0.02px'],
            ["transform", "translateY", '0.16px'],
            ["style", "height", '592px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["style", "width", '574px']
         ],
         "${_icon}": [
            ["transform", "translateX", '528.32px'],
            ["transform", "translateY", '17.64px']
         ],
         "${_chiCopy}": [
            ["transform", "translateX", '325.67px'],
            ["transform", "rotateZ", '0'],
            ["transform", "scaleX", '0.36908'],
            ["transform", "translateY", '202.33px'],
            ["transform", "scaleY", '0.36908']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4500,
         autoPlay: true,
         labels: {
            "2": 404
         },
         timeline: [
            { id: "eid238", tween: [ "transform", "${_chi}", "translateY", '27.32px', { fromValue: '27.32px'}], position: 0, duration: 0 },
            { id: "eid198", tween: [ "transform", "${_text22}", "translateX", '-68.29px', { fromValue: '-68.29px'}], position: 4117, duration: 0 },
            { id: "eid4", tween: [ "transform", "${_chiCopy}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 404, duration: 397 },
            { id: "eid5", tween: [ "transform", "${_chiCopy}", "rotateZ", '720deg', { fromValue: '360deg'}], position: 801, duration: 400 },
            { id: "eid6", tween: [ "transform", "${_chiCopy}", "rotateZ", '1080deg', { fromValue: '720deg'}], position: 1201, duration: 401 },
            { id: "eid7", tween: [ "transform", "${_chiCopy}", "rotateZ", '1440deg', { fromValue: '1080deg'}], position: 1603, duration: 396 },
            { id: "eid200", tween: [ "style", "${_text22}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid213", tween: [ "style", "${_text22}", "display", 'none', { fromValue: 'block'}], position: 3187, duration: 0 },
            { id: "eid214", tween: [ "style", "${_text22}", "display", 'none', { fromValue: 'none'}], position: 4500, duration: 0 },
            { id: "eid243", tween: [ "transform", "${_chi}", "translateX", '208.71px', { fromValue: '208.71px'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "transform", "${_chi}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 404, duration: 1595 },
            { id: "eid199", tween: [ "transform", "${_text22}", "translateY", '-250.35px', { fromValue: '-250.35px'}], position: 4117, duration: 0 }         ]
      }
   }
},
"line": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      type: 'image',
      id: 'Untitled-2',
      rect: [-71,-127,640,480],
      transform: [[71,127]],
      fill: ['rgba(0,0,0,0)','image/Untitled-2.svg']
   },
   {
      type: 'image',
      id: 'Untitled-4Copy',
      rect: [-71,-127,23,12],
      transform: [[116,511]],
      fill: ['rgba(0,0,0,0)','image/Untitled-4.svg']
   },
   {
      type: 'image',
      id: 'off2',
      rect: [488,337,152,210],
      transform: [[-119,-21],{},{},[0.339,0.339]],
      fill: ['rgba(0,0,0,0)','image/off.jpg']
   },
   {
      type: 'image',
      id: 'on2',
      rect: [-28,326,152,210],
      transform: [[396,-10],{},{},[0.339,0.339]],
      fill: ['rgba(0,0,0,0)','image/on.jpg']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_off2}": [
            ["transform", "scaleX", '0.33957'],
            ["transform", "translateY", '-21.34px'],
            ["transform", "translateX", '-119.41px'],
            ["transform", "scaleY", '0.33957']
         ],
         "${symbolSelector}": [
            ["style", "height", '480px'],
            ["style", "width", '640px']
         ],
         "${_on2}": [
            ["transform", "scaleX", '0.33957'],
            ["transform", "translateX", '396.57px'],
            ["transform", "translateY", '-10.34px'],
            ["transform", "scaleY", '0.33957']
         ],
         "${_Untitled-2}": [
            ["transform", "translateX", '71.08px'],
            ["transform", "translateY", '127.32px']
         ],
         "${_Untitled-4Copy}": [
            ["transform", "translateX", '107.76px'],
            ["transform", "translateY", '511.93px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4117,
         autoPlay: true,
         timeline: [
            { id: "eid122", tween: [ "transform", "${_Untitled-4Copy}", "translateX", '228.13px', { fromValue: '107.76px'}], position: 0, duration: 447 },
            { id: "eid123", tween: [ "transform", "${_Untitled-4Copy}", "translateX", '249.89px', { fromValue: '228.13px'}], position: 447, duration: 129 },
            { id: "eid124", tween: [ "transform", "${_Untitled-4Copy}", "translateX", '256.89px', { fromValue: '249.89px'}], position: 577, duration: 135 },
            { id: "eid125", tween: [ "transform", "${_Untitled-4Copy}", "translateX", '257.89px', { fromValue: '256.89px'}], position: 712, duration: 537 },
            { id: "eid126", tween: [ "transform", "${_Untitled-4Copy}", "translateX", '261.89px', { fromValue: '257.89px'}], position: 1250, duration: 149 },
            { id: "eid127", tween: [ "transform", "${_Untitled-4Copy}", "translateX", '284.89px', { fromValue: '261.89px'}], position: 1399, duration: 135 },
            { id: "eid128", tween: [ "transform", "${_Untitled-4Copy}", "translateX", '412.77px', { fromValue: '284.89px'}], position: 1535, duration: 509 },
            { id: "eid129", tween: [ "transform", "${_Untitled-4Copy}", "translateX", '427.77px', { fromValue: '412.77px'}], position: 2044, duration: 139 },
            { id: "eid130", tween: [ "transform", "${_Untitled-4Copy}", "translateX", '436.77px', { fromValue: '427.77px'}], position: 2183, duration: 140 },
            { id: "eid131", tween: [ "transform", "${_Untitled-4Copy}", "translateX", '445.77px', { fromValue: '436.77px'}], position: 2544, duration: 129 },
            { id: "eid132", tween: [ "transform", "${_Untitled-4Copy}", "translateX", '463.77px', { fromValue: '445.77px'}], position: 2673, duration: 126 },
            { id: "eid133", tween: [ "transform", "${_Untitled-4Copy}", "translateX", '614.77px', { fromValue: '463.77px'}], position: 2800, duration: 500 },
            { id: "eid134", tween: [ "transform", "${_Untitled-4Copy}", "translateX", '632.77px', { fromValue: '614.77px'}], position: 3301, duration: 111 },
            { id: "eid135", tween: [ "transform", "${_Untitled-4Copy}", "translateX", '639.77px', { fromValue: '632.77px'}], position: 3412, duration: 131 },
            { id: "eid136", tween: [ "transform", "${_Untitled-4Copy}", "translateX", '639.77px', { fromValue: '639.77px'}], position: 4117, duration: 0 },
            { id: "eid97", tween: [ "transform", "${_Untitled-4Copy}", "rotateZ", '-45deg', { fromValue: '0deg'}], position: 447, duration: 129 },
            { id: "eid98", tween: [ "transform", "${_Untitled-4Copy}", "rotateZ", '-90deg', { fromValue: '-45deg'}], position: 577, duration: 135 },
            { id: "eid99", tween: [ "transform", "${_Untitled-4Copy}", "rotateZ", '-45deg', { fromValue: '-90deg'}], position: 1250, duration: 149 },
            { id: "eid100", tween: [ "transform", "${_Untitled-4Copy}", "rotateZ", '0deg', { fromValue: '-45deg'}], position: 1399, duration: 135 },
            { id: "eid101", tween: [ "transform", "${_Untitled-4Copy}", "rotateZ", '45deg', { fromValue: '0deg'}], position: 2044, duration: 139 },
            { id: "eid102", tween: [ "transform", "${_Untitled-4Copy}", "rotateZ", '90deg', { fromValue: '45deg'}], position: 2183, duration: 140 },
            { id: "eid103", tween: [ "transform", "${_Untitled-4Copy}", "rotateZ", '45deg', { fromValue: '90deg'}], position: 2544, duration: 129 },
            { id: "eid104", tween: [ "transform", "${_Untitled-4Copy}", "rotateZ", '0deg', { fromValue: '45deg'}], position: 2673, duration: 126 },
            { id: "eid105", tween: [ "transform", "${_Untitled-4Copy}", "rotateZ", '-45deg', { fromValue: '0deg'}], position: 3301, duration: 111 },
            { id: "eid106", tween: [ "transform", "${_Untitled-4Copy}", "rotateZ", '-90deg', { fromValue: '-45deg'}], position: 3412, duration: 131 },
            { id: "eid107", tween: [ "transform", "${_Untitled-4Copy}", "rotateZ", '-90deg', { fromValue: '-90deg'}], position: 4117, duration: 0 },
            { id: "eid108", tween: [ "transform", "${_Untitled-4Copy}", "translateY", '512.02px', { fromValue: '511.93px'}], position: 0, duration: 447 },
            { id: "eid109", tween: [ "transform", "${_Untitled-4Copy}", "translateY", '501.93px', { fromValue: '512.02px'}], position: 447, duration: 129 },
            { id: "eid110", tween: [ "transform", "${_Untitled-4Copy}", "translateY", '487.93px', { fromValue: '501.93px'}], position: 577, duration: 135 },
            { id: "eid111", tween: [ "transform", "${_Untitled-4Copy}", "translateY", '327.91px', { fromValue: '487.93px'}], position: 712, duration: 537 },
            { id: "eid112", tween: [ "transform", "${_Untitled-4Copy}", "translateY", '313.91px', { fromValue: '327.91px'}], position: 1250, duration: 149 },
            { id: "eid113", tween: [ "transform", "${_Untitled-4Copy}", "translateY", '303.91px', { fromValue: '313.91px'}], position: 1399, duration: 135 },
            { id: "eid114", tween: [ "transform", "${_Untitled-4Copy}", "translateY", '308.91px', { fromValue: '303.91px'}], position: 2044, duration: 139 },
            { id: "eid115", tween: [ "transform", "${_Untitled-4Copy}", "translateY", '335.91px', { fromValue: '308.91px'}], position: 2183, duration: 140 },
            { id: "eid116", tween: [ "transform", "${_Untitled-4Copy}", "translateY", '392.59px', { fromValue: '335.91px'}], position: 2324, duration: 219 },
            { id: "eid117", tween: [ "transform", "${_Untitled-4Copy}", "translateY", '409.59px', { fromValue: '392.59px'}], position: 2544, duration: 129 },
            { id: "eid118", tween: [ "transform", "${_Untitled-4Copy}", "translateY", '415.59px', { fromValue: '409.59px'}], position: 2673, duration: 126 },
            { id: "eid119", tween: [ "transform", "${_Untitled-4Copy}", "translateY", '406.59px', { fromValue: '415.59px'}], position: 3301, duration: 111 },
            { id: "eid120", tween: [ "transform", "${_Untitled-4Copy}", "translateY", '386.59px', { fromValue: '406.59px'}], position: 3412, duration: 131 },
            { id: "eid121", tween: [ "transform", "${_Untitled-4Copy}", "translateY", '210.59px', { fromValue: '386.59px'}], position: 3544, duration: 573 }         ]
      }
   }
},
"text2": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[156,2],[-180]],
      id: 'Untitled-4',
      type: 'image',
      rect: [-156,-2,331,187],
      fill: ['rgba(0,0,0,0)','image/Untitled-4.png']
   },
   {
      transform: [[0,6]],
      rect: [89,32,207,124],
      type: 'text',
      id: 'Text3',
      text: 'Adobe Edge LessonsEdge comes with a complete set of in-app quick-start lessons. You can access them individually from the Edge Welcome screen, or at any other time from the Lessons panel ',
      align: 'auto',
      font: ['Arial, Helvetica, sans-serif',14,'rgba(126,126,126,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["transform", "translateX", '-49.93px'],
            ["color", "color", 'rgba(126,126,126,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '3.34px'],
            ["style", "font-size", '14px']
         ],
         "${_Untitled-4}": [
            ["transform", "translateY", '2px'],
            ["style", "opacity", '0'],
            ["transform", "translateX", '156px'],
            ["transform", "rotateZ", '-180deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '187px'],
            ["style", "width", '331px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 188,
         autoPlay: true,
         timeline: [
            { id: "eid185", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 188 },
            { id: "eid190", tween: [ "transform", "${_Untitled-4}", "translateX", '190.34px', { fromValue: '156px'}], position: 0, duration: 188 },
            { id: "eid191", tween: [ "transform", "${_Untitled-4}", "translateY", '111.25px', { fromValue: '2px'}], position: 0, duration: 188 },
            { id: "eid192", tween: [ "transform", "${_Text3}", "translateX", '-16.52px', { fromValue: '-49.93px'}], position: 0, duration: 188 },
            { id: "eid184", tween: [ "style", "${_Untitled-4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 188 },
            { id: "eid193", tween: [ "transform", "${_Text3}", "translateY", '114.39px', { fromValue: '3.34px'}], position: 0, duration: 188 }         ]
      }
   }
},
"cads": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[423,193]],
      id: 'cad',
      type: 'image',
      rect: [-423,-193,579,469],
      fill: ['rgba(0,0,0,0)','image/cad.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cad}": [
            ["transform", "scaleX", '0.00086'],
            ["transform", "scaleY", '0.00106'],
            ["transform", "translateX", '166.24px'],
            ["transform", "translateY", '-7.39px']
         ],
         "${symbolSelector}": [
            ["style", "height", '469px'],
            ["style", "width", '579px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 189.74609375,
         autoPlay: true,
         timeline: [
            { id: "eid227", tween: [ "transform", "${_cad}", "scaleY", '1', { fromValue: '0.00106'}], position: 0, duration: 189 },
            { id: "eid228", tween: [ "transform", "${_cad}", "translateX", '423px', { fromValue: '166.24px'}], position: 0, duration: 189 },
            { id: "eid226", tween: [ "transform", "${_cad}", "scaleX", '1', { fromValue: '0.00086'}], position: 0, duration: 189 },
            { id: "eid229", tween: [ "transform", "${_cad}", "translateY", '193px', { fromValue: '-7.39px'}], position: 0, duration: 189 }         ]
      }
   }
},
"block": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[-24,373]],
      rect: [24,-373,11,24],
      id: 'Rectangle3',
      stroke: [0,'rgb(213, 105, 37)','none'],
      type: 'rect',
      fill: ['rgba(227,113,30,1.00)']
   },
   {
      transform: [[0,-5]],
      rect: [145,5,11,24],
      id: 'Rectangle4',
      stroke: [0,'rgb(213, 105, 37)','none'],
      type: 'rect',
      fill: ['rgba(227,113,30,1.00)']
   },
   {
      transform: [[-6,-3]],
      rect: [19,12,11,7],
      id: 'Rectangle5',
      stroke: [0,'rgb(213, 105, 37)','none'],
      type: 'rect',
      fill: ['rgba(227,113,30,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle5}": [
            ["color", "background-color", 'rgba(227,113,30,1.00)'],
            ["transform", "translateX", '-8px'],
            ["transform", "translateY", '-3px'],
            ["style", "width", '11px']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(227,113,30,1.00)'],
            ["transform", "translateX", '-24px'],
            ["style", "height", '24px'],
            ["transform", "translateY", '373.99px'],
            ["style", "width", '11px']
         ],
         "${_Rectangle4}": [
            ["transform", "translateY", '-4px'],
            ["color", "background-color", 'rgba(227,113,30,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '24.01001px'],
            ["style", "width", '156px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid232", tween: [ "transform", "${_Rectangle5}", "translateY", '-3px', { fromValue: '-3px'}], position: 0, duration: 0 },
            { id: "eid234", tween: [ "transform", "${_Rectangle5}", "translateY", '-3px', { fromValue: '-3px'}], position: 1000, duration: 0 },
            { id: "eid236", tween: [ "transform", "${_Rectangle4}", "translateY", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
            { id: "eid235", tween: [ "transform", "${_Rectangle5}", "translateX", '114.99px', { fromValue: '-8px'}], position: 0, duration: 1000 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-266247688");
