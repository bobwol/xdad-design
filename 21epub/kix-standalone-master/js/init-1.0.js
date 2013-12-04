var DOCS_timing = {};
DOCS_timing['sl'] = new Date().getTime();

DOCS_timing['sac'] = new Date().getTime();
if (window.jstiming) {
    window.jstiming.sn = 'kix';
};

var KX_kixApp;
var DOCS_warmStartDocumentLoader;
function KX_startKix() {
    DOCS_initializeModules({
        "kix_core": [],
        "kix_app": ["kix_core"],
        "kix_tertiary": ["kix_app"],
        "kix_jstex": ["kix_app"],
        "kix_a11y": ["kix_app"],
        "kix_ita": ["kix_tertiary"]
    },
    {
        "kix_core": ["js/kix_core-1.0.js"],
        "kix_app": ["js/kix_app-1.0.js"],
        "kix_tertiary": ["js/kix_tertiary-1.0.js"],
        "kix_jstex": ["js/kix_jstex-1.0.js"],
        "kix_a11y": ["js/kix_a11y-1.js"],
        "kix_ita": ["js/kix_ita-1.0.js"]
    },
    'kix_core');
    var config = {
        'am': 4,
        'bl': 'null',
        'csie': [],
        'csisvi': false,
        'docid': '13UpAPHIGnshc0cJaLITp_9mBTkDtHU1NrwALQrEo8PY',
        'domain': '',
        'durl': 'https://docs.google.com/drawings',
        'ear': true,
        'ebc': false,
        'ecb': true,
        'ecer': true,
        'ecso': false,
        'ecsi': true,
        'edpr': false,
        'edo': true,
        'edos': false,
        'edr': true,
        'eex': true,
        'eimg': true,
        'elementId': 'docs-editor',
        'els': false,
        'email': 'wagona7310a7310@gmail.com',
        'ems': false,
        'epub': true,
        'erv': true,
        'erh': true,
        'ercp': true,
        'esb': false,
        'esco': true,
        'esvcm': true,
        'est': false,
        'etr': true,
        'ewd': false,
        'fpu': 'https:\/\/docs.google.com\/picker?protocol\x3dgadgets\x26relayUrl\x3dhttps:\/\/docs.google.com\/relay.html\x26hostId\x3dkix-fonts\x26title\x3dAdd+fonts\x26maxSize\x3d2000x2000\x26hl\x3den\x26authuser\x3d0\x26navHidden\x3dtrue\x26multiselectEnabled\x3dtrue\x26selectButtonLabel\x3dOK\x26nav\x3d((%22fonts%22))',
        'l': 'en',
        'ogi': '00431369850963280366',
        'oui': '00431369850963280366',
        'psi': 'kix',
        'rtl': false,
        'ud': '',
        'up': '/document',
        'un': 'wagona7310a7310',
        'wfsl': ["ca", "da", "de", "en", "es", "fi", "fr", "it", "nl", "no", "pt", "sv"]
    };
    config['erts'] = true;
    config['er'] = true;
    config['ak'] = '';
    config['ci'] = true;
 
    KX_kixApp = _createKixApplication('3f5efd201cecb0e', config, 'Untitled document', true, {},
    undefined, undefined, undefined, {
        "hs_t": {
            "sdef_ps": {
                "ps_sa_i": false,
                "ps_sa": 0.0,
                "ps_sb": 0.0,
                "ps_ir_i": true,
                "ps_il_i": true,
                "ps_al_i": true,
                "ps_ls_i": true,
                "ps_sb_i": false,
                "ps_ifl_i": true
            },
            "sdef_ts": {
                "ts_it_i": true,
                "ts_st_i": true,
                "ts_fgc_i": true,
                "ts_va_i": true,
                "ts_ff": "Trebuchet MS",
                "ts_bd_i": true,
                "ts_ff_i": false,
                "ts_un_i": true,
                "ts_bgc_i": true,
                "ts_fs": 21,
                "ts_sc_i": true,
                "ts_fs_i": false,
                "ts_bd": false
            }
        },
        "hs_st": {
            "sdef_ps": {
                "ps_sa_i": false,
                "ps_sa": 10.0,
                "ps_sb": 0.0,
                "ps_ir_i": true,
                "ps_il_i": true,
                "ps_al_i": true,
                "ps_ls_i": true,
                "ps_sb_i": false,
                "ps_ifl_i": true
            },
            "sdef_ts": {
                "ts_it_i": false,
                "ts_st_i": true,
                "ts_fgc_i": false,
                "ts_va_i": true,
                "ts_ff": "Trebuchet MS",
                "ts_bd_i": true,
                "ts_ff_i": false,
                "ts_un_i": true,
                "ts_bgc_i": true,
                "ts_it": true,
                "ts_fs": 13,
                "ts_sc_i": true,
                "ts_fs_i": false,
                "ts_fgc": "#666666"
            }
        },
        "hs_nt": {
            "sdef_ps": {
                "ps_sa_i": false,
                "ps_hdid": "",
                "ps_sa": 0.0,
                "ps_sb": 0.0,
                "ps_ir": 0.0,
                "ps_ltr": true,
                "ps_ls_i": false,
                "ps_sb_i": false,
                "ps_al": 0,
                "ps_ifl_i": false,
                "ps_ts": {
                    "cv": {
                        "op": "set",
                        "opValue": []
                    }
                },
                "ps_il_i": false,
                "ps_ir_i": false,
                "ps_al_i": false,
                "ps_ls": 1.15,
                "ps_hd": 0,
                "ps_ifl": 0.0,
                "ps_il": 0.0
            },
            "sdef_ts": {
                "ts_st": false,
                "ts_it_i": false,
                "ts_st_i": false,
                "ts_bgc": null,
                "ts_va": "nor",
                "ts_fgc_i": false,
                "ts_sc": false,
                "ts_va_i": false,
                "ts_ff": "Arial",
                "ts_bd_i": false,
                "ts_ff_i": false,
                "ts_un_i": false,
                "ts_bgc_i": false,
                "ts_it": false,
                "ts_fs": 11,
                "ts_sc_i": false,
                "ts_fs_i": false,
                "ts_fgc": "#000000",
                "ts_un": false,
                "ts_bd": false
            }
        },
        "hs_h4": {
            "sdef_ps": {
                "ps_sa_i": false,
                "ps_sa": 0.0,
                "ps_sb": 8.0,
                "ps_ir_i": true,
                "ps_il_i": true,
                "ps_al_i": true,
                "ps_ls_i": true,
                "ps_sb_i": false,
                "ps_ifl_i": true
            },
            "sdef_ts": {
                "ts_it_i": true,
                "ts_st_i": true,
                "ts_fgc_i": false,
                "ts_va_i": true,
                "ts_ff": "Trebuchet MS",
                "ts_bd_i": true,
                "ts_ff_i": false,
                "ts_un_i": false,
                "ts_bgc_i": true,
                "ts_it": false,
                "ts_fs": 11,
                "ts_sc_i": true,
                "ts_fs_i": false,
                "ts_fgc": "#666666",
                "ts_un": true,
                "ts_bd": false
            }
        },
        "hs_h2": {
            "sdef_ps": {
                "ps_sa_i": false,
                "ps_sa": 0.0,
                "ps_sb": 10.0,
                "ps_ir_i": true,
                "ps_il_i": true,
                "ps_al_i": true,
                "ps_ls_i": true,
                "ps_sb_i": false,
                "ps_ifl_i": true
            },
            "sdef_ts": {
                "ts_it_i": true,
                "ts_st_i": true,
                "ts_fgc_i": true,
                "ts_va_i": true,
                "ts_ff": "Trebuchet MS",
                "ts_bd_i": false,
                "ts_ff_i": false,
                "ts_un_i": true,
                "ts_bgc_i": true,
                "ts_fs": 13,
                "ts_sc_i": true,
                "ts_fs_i": false,
                "ts_bd": true
            }
        },
        "hs_h5": {
            "sdef_ps": {
                "ps_sa_i": false,
                "ps_sa": 0.0,
                "ps_sb": 8.0,
                "ps_ir_i": true,
                "ps_il_i": true,
                "ps_al_i": true,
                "ps_ls_i": true,
                "ps_sb_i": false,
                "ps_ifl_i": true
            },
            "sdef_ts": {
                "ts_it_i": true,
                "ts_st_i": true,
                "ts_fgc_i": false,
                "ts_va_i": true,
                "ts_ff": "Trebuchet MS",
                "ts_bd_i": true,
                "ts_ff_i": false,
                "ts_un_i": true,
                "ts_bgc_i": true,
                "ts_fs": 11,
                "ts_sc_i": true,
                "ts_fgc": "#666666",
                "ts_fs_i": false,
                "ts_bd": false
            }
        },
        "hs_h3": {
            "sdef_ps": {
                "ps_sa_i": false,
                "ps_sa": 0.0,
                "ps_sb": 8.0,
                "ps_ir_i": true,
                "ps_il_i": true,
                "ps_al_i": true,
                "ps_ls_i": true,
                "ps_sb_i": false,
                "ps_ifl_i": true
            },
            "sdef_ts": {
                "ts_it_i": true,
                "ts_st_i": true,
                "ts_fgc_i": false,
                "ts_va_i": true,
                "ts_ff": "Trebuchet MS",
                "ts_bd_i": false,
                "ts_ff_i": false,
                "ts_un_i": true,
                "ts_bgc_i": true,
                "ts_fs": 12,
                "ts_sc_i": true,
                "ts_fgc": "#666666",
                "ts_fs_i": false,
                "ts_bd": true
            }
        },
        "hs_h6": {
            "sdef_ps": {
                "ps_sa_i": false,
                "ps_sa": 0.0,
                "ps_sb": 8.0,
                "ps_ir_i": true,
                "ps_il_i": true,
                "ps_al_i": true,
                "ps_ls_i": true,
                "ps_sb_i": false,
                "ps_ifl_i": true
            },
            "sdef_ts": {
                "ts_it_i": false,
                "ts_st_i": true,
                "ts_fgc_i": false,
                "ts_va_i": true,
                "ts_ff": "Trebuchet MS",
                "ts_bd_i": true,
                "ts_ff_i": false,
                "ts_un_i": true,
                "ts_bgc_i": true,
                "ts_it": true,
                "ts_fs": 11,
                "ts_sc_i": true,
                "ts_fs_i": false,
                "ts_fgc": "#666666",
                "ts_bd": false
            }
        },
        "hs_h1": {
            "sdef_ps": {
                "ps_sa_i": false,
                "ps_sa": 0.0,
                "ps_sb": 10.0,
                "ps_ir_i": true,
                "ps_il_i": true,
                "ps_al_i": true,
                "ps_ls_i": true,
                "ps_sb_i": false,
                "ps_ifl_i": true
            },
            "sdef_ts": {
                "ts_it_i": true,
                "ts_st_i": true,
                "ts_fgc_i": true,
                "ts_va_i": true,
                "ts_ff": "Trebuchet MS",
                "ts_bd_i": true,
                "ts_ff_i": false,
                "ts_un_i": true,
                "ts_bgc_i": true,
                "ts_fs": 16,
                "ts_sc_i": true,
                "ts_fs_i": false,
                "ts_bd": false
            }
        }
    },
    {
        "fontMetadataMap": {
            "Corsiva": {
                "documentFont": false,
                "fontFaces": [{
                    "fontFamily": "Corsiva",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Corsiva"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/licensed\/font?kit=-AYUHbOFXdCR-CDRUOObAQLUuEpTyoUstqEm5AMlJo4"
                    }],
                    "style": "normal",
                    "weight": 400
                },
                {
                    "fontFamily": "Corsiva",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Corsiva Italic"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "Corsiva-Italic"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/licensed\/font?kit=y0dW0MXSKInjKyUQ3zH2VLO3LdcAZYWl9Si6vvxL-qU"
                    }],
                    "style": "italic",
                    "weight": 400
                },
                {
                    "fontFamily": "Corsiva",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Corsiva Bold"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "Corsiva-Bold"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/licensed\/font?kit=cXEAKf31zBQlthLLmwbAYr3hpw3pgy2gAi-Ip7WPMi0"
                    }],
                    "style": "normal",
                    "weight": 700
                },
                {
                    "fontFamily": "Corsiva",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Corsiva Bold Italic"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "Corsiva-BoldItalic"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/licensed\/font?kit=rmOImgdYHKzakCiZXNeZXaRDOzjiPcYnFooOUGCOsRk"
                    }],
                    "style": "italic",
                    "weight": 700
                },
                {
                    "fontFamily": "Corsiva::Menu",
                    "menuFont": true,
                    "sources": [{
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/licensed\/font?kit=Gv6LCd1-36ZR97f1YeZnowLUuEpTyoUstqEm5AMlJo4"
                    }],
                    "style": "normal",
                    "weight": 400
                }],
                "version": "v1"
            },
            "Calibri": {
                "documentFont": false,
                "fontFaces": [{
                    "fontFamily": "Calibri",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Calibri"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/licensed\/font?kit=VdF1ZYqF-aETvRzg2WdyWALUuEpTyoUstqEm5AMlJo4"
                    }],
                    "style": "normal",
                    "weight": 400
                },
                {
                    "fontFamily": "Calibri",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Calibri Italic"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "Calibri-Italic"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/licensed\/font?kit=s6BJz6dd05IaBkVSZYii2rO3LdcAZYWl9Si6vvxL-qU"
                    }],
                    "style": "italic",
                    "weight": 400
                },
                {
                    "fontFamily": "Calibri",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Calibri Bold"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "Calibri-Bold"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/licensed\/font?kit=cCwcoZCh95jEfkePtzfl973hpw3pgy2gAi-Ip7WPMi0"
                    }],
                    "style": "normal",
                    "weight": 700
                },
                {
                    "fontFamily": "Calibri",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Calibri Bold Italic"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "Calibri-BoldItalic"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/licensed\/font?kit=tglRjQQneep4ISNw_cVZOKRDOzjiPcYnFooOUGCOsRk"
                    }],
                    "style": "italic",
                    "weight": 700
                },
                {
                    "fontFamily": "Calibri::Menu",
                    "menuFont": true,
                    "sources": [{
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/licensed\/font?kit=QV7iPCY0Krv0-Xyt14BH7QLUuEpTyoUstqEm5AMlJo4"
                    }],
                    "style": "normal",
                    "weight": 400
                }],
                "version": "v1"
            },
            "jsMath cmr10": {
                "documentFont": false,
                "fontFaces": [{
                    "fontFamily": "jsMath cmr10",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "jsMath-cmr10"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/jsmathcmr10\/v3\/_2fBznrzTFuHymY6OLQcEKRDOzjiPcYnFooOUGCOsRk.woff"
                    }],
                    "style": "normal",
                    "weight": 400
                },
                {
                    "fontFamily": "jsMath cmr10::Menu",
                    "menuFont": true,
                    "sources": [{
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/jsmathcmr10\/v3\/_2fBznrzTFuHymY6OLQcELyZXjRt7DtCfnhPeGk_nvY.woff"
                    }],
                    "style": "normal",
                    "weight": 400
                }],
                "version": "v3"
            },
            "Syncopate": {
                "documentFont": false,
                "fontFaces": [{
                    "fontFamily": "Syncopate",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Syncopate"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "Syncopate-Regular"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/syncopate\/v3\/pDM9CVwNx1ufBHCEatJA3LO3LdcAZYWl9Si6vvxL-qU.woff"
                    }],
                    "style": "normal",
                    "weight": 400
                },
                {
                    "fontFamily": "Syncopate",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Syncopate Bold"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "Syncopate-Bold"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/syncopate\/v3\/S5z8ixiOoC4WJ1im6jAlYKRDOzjiPcYnFooOUGCOsRk.woff"
                    }],
                    "style": "normal",
                    "weight": 700
                },
                {
                    "fontFamily": "Syncopate::Menu",
                    "menuFont": true,
                    "sources": [{
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/syncopate\/v3\/J8LIyVp-BBfhgWRYSdAgPrO3LdcAZYWl9Si6vvxL-qU.woff"
                    }],
                    "style": "normal",
                    "weight": 400
                }],
                "version": "v3"
            },
            "jsMath cmex10": {
                "documentFont": false,
                "fontFaces": [{
                    "fontFamily": "jsMath cmex10",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "jsMath-cmex10"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/jsmathcmex10\/v3\/n7p2sMu2ciQhmbPABQDTcQMLyzRW1YLFfp_nP0nKzGA.woff"
                    }],
                    "style": "normal",
                    "weight": 400
                },
                {
                    "fontFamily": "jsMath cmex10::Menu",
                    "menuFont": true,
                    "sources": [{
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/jsmathcmex10\/v3\/n7p2sMu2ciQhmbPABQDTcY2cof54KyXTZ48wzMToefo.woff"
                    }],
                    "style": "normal",
                    "weight": 400
                }],
                "version": "v3"
            },
            "Cambria": {
                "documentFont": false,
                "fontFaces": [{
                    "fontFamily": "Cambria",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Cambria"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/licensed\/font?kit=31pAu3x0sbHmDZQRJp6nfQLUuEpTyoUstqEm5AMlJo4"
                    }],
                    "style": "normal",
                    "weight": 400
                },
                {
                    "fontFamily": "Cambria",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Cambria Italic"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "Cambria-Italic"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/licensed\/font?kit=MD9mg8Cy2AOZQTj1RMSKurO3LdcAZYWl9Si6vvxL-qU"
                    }],
                    "style": "italic",
                    "weight": 400
                },
                {
                    "fontFamily": "Cambria",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Cambria Bold"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "Cambria-Bold"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/licensed\/font?kit=wkshsMjunzKumD3zh1j69b3hpw3pgy2gAi-Ip7WPMi0"
                    }],
                    "style": "normal",
                    "weight": 700
                },
                {
                    "fontFamily": "Cambria",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Cambria Bold Italic"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "Cambria-BoldItalic"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/licensed\/font?kit=v58W6z8cm42h92CJRCAnu6RDOzjiPcYnFooOUGCOsRk"
                    }],
                    "style": "italic",
                    "weight": 700
                },
                {
                    "fontFamily": "Cambria::Menu",
                    "menuFont": true,
                    "sources": [{
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/licensed\/font?kit=1nMY87THe_NAM5Gtd_-H7gLUuEpTyoUstqEm5AMlJo4"
                    }],
                    "style": "normal",
                    "weight": 400
                }],
                "version": "v1"
            },
            "Droid Sans": {
                "documentFont": false,
                "fontFaces": [{
                    "fontFamily": "Droid Sans",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Droid Sans"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "DroidSans"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/droidsans\/v3\/s-BiyweUPV0v-yRb-cjciL3hpw3pgy2gAi-Ip7WPMi0.woff"
                    }],
                    "style": "normal",
                    "weight": 400
                },
                {
                    "fontFamily": "Droid Sans",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Droid Sans Bold"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "DroidSans-Bold"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/droidsans\/v3\/EFpQQyG9GqCrobXxL-KRMXbFhgvWbfSbdVg11QabG8w.woff"
                    }],
                    "style": "normal",
                    "weight": 700
                },
                {
                    "fontFamily": "Droid Sans::Menu",
                    "menuFont": true,
                    "sources": [{
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/droidsans\/v3\/vk1xBJHzOPMZIrllGO7pBL3hpw3pgy2gAi-Ip7WPMi0.woff"
                    }],
                    "style": "normal",
                    "weight": 400
                }],
                "version": "v3"
            },
            "Consolas": {
                "documentFont": false,
                "fontFaces": [{
                    "fontFamily": "Consolas",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Consolas"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/licensed\/font?kit=Zl8GCCaOFFtFoHFpBV1tmXYhjbSpvc47ee6xR_80Hnw"
                    }],
                    "style": "normal",
                    "weight": 400
                },
                {
                    "fontFamily": "Consolas",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Consolas Italic"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "Consolas-Italic"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/licensed\/font?kit=cVJn0wXX1S2hzvYQNO8ECL3hpw3pgy2gAi-Ip7WPMi0"
                    }],
                    "style": "italic",
                    "weight": 400
                },
                {
                    "fontFamily": "Consolas",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Consolas Bold"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "Consolas-Bold"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/licensed\/font?kit=vKbwwzjtMQjKFO_o3aiX-7rIa-7acMAeDBVuclsi6Gc"
                    }],
                    "style": "normal",
                    "weight": 700
                },
                {
                    "fontFamily": "Consolas",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Consolas Bold Italic"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "Consolas-BoldItalic"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/licensed\/font?kit=6EE6-6fTE2IyE_ufy2c86nbFhgvWbfSbdVg11QabG8w"
                    }],
                    "style": "italic",
                    "weight": 700
                },
                {
                    "fontFamily": "Consolas::Menu",
                    "menuFont": true,
                    "sources": [{
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/licensed\/font?kit=tU9YDI746eMeg42M7b80THYhjbSpvc47ee6xR_80Hnw"
                    }],
                    "style": "normal",
                    "weight": 400
                }],
                "version": "v1"
            },
            "jsMath cmmi10": {
                "documentFont": false,
                "fontFaces": [{
                    "fontFamily": "jsMath cmmi10",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "jsMath-cmmi10"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/jsmathcmmi10\/v3\/0JSKQqP4Y5vIZB4l52jAjAMLyzRW1YLFfp_nP0nKzGA.woff"
                    }],
                    "style": "normal",
                    "weight": 400
                },
                {
                    "fontFamily": "jsMath cmmi10::Menu",
                    "menuFont": true,
                    "sources": [{
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/jsmathcmmi10\/v3\/0JSKQqP4Y5vIZB4l52jAjI2cof54KyXTZ48wzMToefo.woff"
                    }],
                    "style": "normal",
                    "weight": 400
                }],
                "version": "v3"
            },
            "Ubuntu": {
                "documentFont": false,
                "fontFaces": [{
                    "fontFamily": "Ubuntu",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Ubuntu Light"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "Ubuntu-Light"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/ubuntu\/v4\/_aijTyevf54tkVDLy-dlnLO3LdcAZYWl9Si6vvxL-qU.woff"
                    }],
                    "style": "normal",
                    "weight": 300
                },
                {
                    "fontFamily": "Ubuntu",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Ubuntu Light Italic"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "Ubuntu-LightItalic"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/ubuntu\/v4\/DZ_YjBPqZ88vcZCcIXm6VrrIa-7acMAeDBVuclsi6Gc.woff"
                    }],
                    "style": "italic",
                    "weight": 300
                },
                {
                    "fontFamily": "Ubuntu",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Ubuntu"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/ubuntu\/v4\/vRvZYZlUaogOuHbBTT1SNevvDin1pK8aKteLpeZ5c0A.woff"
                    }],
                    "style": "normal",
                    "weight": 400
                },
                {
                    "fontFamily": "Ubuntu",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Ubuntu Italic"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "Ubuntu-Italic"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/ubuntu\/v4\/kbP_6ONYVgE-bLa9ZRbvvnYhjbSpvc47ee6xR_80Hnw.woff"
                    }],
                    "style": "italic",
                    "weight": 400
                },
                {
                    "fontFamily": "Ubuntu",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Ubuntu Medium"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "Ubuntu-Medium"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/ubuntu\/v4\/OsJ2DjdpjqFRVUSto6IffLO3LdcAZYWl9Si6vvxL-qU.woff"
                    }],
                    "style": "normal",
                    "weight": 500
                },
                {
                    "fontFamily": "Ubuntu",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Ubuntu Medium Italic"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "Ubuntu-MediumItalic"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/ubuntu\/v4\/ohKfORL_YnhBMzkCPoIqwrrIa-7acMAeDBVuclsi6Gc.woff"
                    }],
                    "style": "italic",
                    "weight": 500
                },
                {
                    "fontFamily": "Ubuntu",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Ubuntu Bold"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "Ubuntu-Bold"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/ubuntu\/v4\/0ihfXUL2emPh0ROJezvraLO3LdcAZYWl9Si6vvxL-qU.woff"
                    }],
                    "style": "normal",
                    "weight": 700
                },
                {
                    "fontFamily": "Ubuntu",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Ubuntu Bold Italic"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "Ubuntu-BoldItalic"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/ubuntu\/v4\/OMD20Sg9RTs7sUORCEN-7brIa-7acMAeDBVuclsi6Gc.woff"
                    }],
                    "style": "italic",
                    "weight": 700
                },
                {
                    "fontFamily": "Ubuntu::Menu",
                    "menuFont": true,
                    "sources": [{
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/ubuntu\/v4\/tcKMcGiTiP6oQJ3OO9TdcuvvDin1pK8aKteLpeZ5c0A.woff"
                    }],
                    "style": "normal",
                    "weight": 400
                }],
                "version": "v4"
            },
            "jsMath cmbx10": {
                "documentFont": false,
                "fontFaces": [{
                    "fontFamily": "jsMath cmbx10",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "jsMath-cmbx10"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/jsmathcmbx10\/v3\/mQWqSxeuMfOFFco6wXjtYQMLyzRW1YLFfp_nP0nKzGA.woff"
                    }],
                    "style": "normal",
                    "weight": 400
                },
                {
                    "fontFamily": "jsMath cmbx10::Menu",
                    "menuFont": true,
                    "sources": [{
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/jsmathcmbx10\/v3\/mQWqSxeuMfOFFco6wXjtYY2cof54KyXTZ48wzMToefo.woff"
                    }],
                    "style": "normal",
                    "weight": 400
                }],
                "version": "v3"
            },
            "jsMath cmsy10": {
                "documentFont": false,
                "fontFaces": [{
                    "fontFamily": "jsMath cmsy10",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "jsMath-cmsy10"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/jsmathcmsy10\/v3\/QTZ2F6-N2KBSZvG48dFYbQMLyzRW1YLFfp_nP0nKzGA.woff"
                    }],
                    "style": "normal",
                    "weight": 400
                },
                {
                    "fontFamily": "jsMath cmsy10::Menu",
                    "menuFont": true,
                    "sources": [{
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/jsmathcmsy10\/v3\/QTZ2F6-N2KBSZvG48dFYbY2cof54KyXTZ48wzMToefo.woff"
                    }],
                    "style": "normal",
                    "weight": 400
                }],
                "version": "v3"
            },
            "jsMath cmti10": {
                "documentFont": false,
                "fontFaces": [{
                    "fontFamily": "jsMath cmti10",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "jsMath-cmti10"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/jsmathcmti10\/v3\/mrXZJMtAIRbOuKCWEl5K0AMLyzRW1YLFfp_nP0nKzGA.woff"
                    }],
                    "style": "normal",
                    "weight": 400
                },
                {
                    "fontFamily": "jsMath cmti10::Menu",
                    "menuFont": true,
                    "sources": [{
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/jsmathcmti10\/v3\/mrXZJMtAIRbOuKCWEl5K0I2cof54KyXTZ48wzMToefo.woff"
                    }],
                    "style": "normal",
                    "weight": 400
                }],
                "version": "v3"
            },
            "Droid Serif": {
                "documentFont": false,
                "fontFaces": [{
                    "fontFamily": "Droid Serif",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Droid Serif"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "DroidSerif"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/droidserif\/v3\/0AKsP294HTD-nvJgucYTaLrIa-7acMAeDBVuclsi6Gc.woff"
                    }],
                    "style": "normal",
                    "weight": 400
                },
                {
                    "fontFamily": "Droid Serif",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Droid Serif Italic"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "DroidSerif-Italic"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/droidserif\/v3\/cj2hUnSRBhwmSPr9kS5894o3ZslTYfJv0R05CazkwN8.woff"
                    }],
                    "style": "italic",
                    "weight": 400
                },
                {
                    "fontFamily": "Droid Serif",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Droid Serif Bold"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "DroidSerif-Bold"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/droidserif\/v3\/QQt14e8dY39u-eYBZmppwRbnBKKEOwRKgsHDreGcocg.woff"
                    }],
                    "style": "normal",
                    "weight": 700
                },
                {
                    "fontFamily": "Droid Serif",
                    "menuFont": false,
                    "sources": [{
                        "format": "woff",
                        "isLocal": true,
                        "url": "Droid Serif Bold Italic"
                    },
                    {
                        "format": "woff",
                        "isLocal": true,
                        "url": "DroidSerif-BoldItalic"
                    },
                    {
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/droidserif\/v3\/c92rD_x0V1LslSFt3-QEpiHgNb6vKVPdRA9LSAKGxzw.woff"
                    }],
                    "style": "italic",
                    "weight": 700
                },
                {
                    "fontFamily": "Droid Serif::Menu",
                    "menuFont": true,
                    "sources": [{
                        "format": "woff",
                        "isLocal": false,
                        "url": "\/\/themes.googleusercontent.com\/static\/fonts\/droidserif\/v3\/0AKsP294HTD-nvJgucYTaJXfdieUyyORoM9wGrfggHw.woff"
                    }],
                    "style": "normal",
                    "weight": 400
                }],
                "version": "v3"
            }
        }
    },
    [null, null, 0, null, null, "0", [null, 1, 1, 1, 1, 1], null, ["weix xiaojun", null, "//ssl.gstatic.com/s2/profiles/images/silhouette96.png", "115238388340527972261", 1], 1, "13UpAPHIGnshc0cJaLITp_9mBTkDtHU1NrwALQrEo8PY", null, 1, null, null, null, 0, 1, 1, 1, null, null, null, null, 1, 1, "/comments/u/115238388340527972261/c", 0, null, 0], undefined, [{
        "data": {
            "value": ["jsMath cmbx10", "jsMath cmex10", "jsMath cmmi10", "jsMath cmr10", "jsMath cmsy10", "jsMath cmti10"]
        },
        "keyPath": ["syncMap", "applicationFonts", "1"],
        "state": {
            "hashValue": "5f470699"
        }
    },
    {
        "data": {
            "familyList": [],
            "recentlyUsedFamilyList": []
        },
        "keyPath": ["syncMap", "preferences", "docs-fonts"],
        "state": {
            "timestamp": 1365900307487000
        }
    },
    {
        "data": {
            "wordList": []
        },
        "keyPath": ["syncMap", "preferences", "docs-user_dictionary"],
        "state": {
            "timestamp": 1365900307495000
        }
    },
    {
        "data": {
            "value": true
        },
        "keyPath": ["syncMap", "preferences", "docs-show_spelling", "1"],
        "state": {
            "timestamp": 1365900307497000
        }
    },
    {
        "data": {
            "value": false
        },
        "keyPath": ["syncMap", "preferences", "docs-show_reference", "1"],
        "state": {
            "timestamp": 1365900307499000
        }
    },
    {
        "data": {
            "viewMode": 1
        },
        "keyPath": ["syncMap", "preferences", "docs-chrome", "1"],
        "state": {
            "timestamp": 1365813339621330
        }
    },
    {
        "data": {},
        "keyPath": ["syncMap", "preferences", "docs-global_promos", "0"],
        "state": {
            "timestamp": 1365900307456000
        }
    },
    {
        "data": {
            "value": true
        },
        "keyPath": ["syncMap", "preferences", "kix-sr"],
        "state": {
            "timestamp": 1365900307397000
        }
    },
    {
        "data": {
            "value": true
        },
        "keyPath": ["syncMap", "preferences", "kix-ssc"],
        "state": {
            "timestamp": 1365900307397000
        }
    },
    {
        "data": {
            "value": 1
        },
        "keyPath": ["syncMap", "preferences", "kix-vm"],
        "state": {
            "timestamp": 1365900307397000
        }
    },
    {
        "data": {
            "autocorrectLinks": true,
            "autocorrectSmartQuotes": true,
            "enableStringReplacement": true,
            "ruleList": []
        },
        "keyPath": ["syncMap", "preferences", "kix-aC"],
        "state": {
            "timestamp": 1365900307502000
        }
    },
    {
        "data": {},
        "keyPath": ["syncMap", "preferences", "kix-ap", "1"],
        "state": {
            "timestamp": 1365900307456000
        }
    },
    {
        "data": {
            "documentStyle": {}
        },
        "keyPath": ["syncMap", "preferences", "kix-ps"],
        "state": {
            "timestamp": 1365900306978000
        }
    },
    {
        "data": {
            "defaultStyleSetId": "",
            "styleSetList": []
        },
        "keyPath": ["syncMap", "preferences", "kix-ss"],
        "state": {
            "timestamp": 1365900306972000
        }
    }], undefined);
    DOCS_warmStartDocumentLoader = KX_kixApp.getWarmStartDocumentLoader();
}
KX_startKix();
_getTimingInstance().setTime('al');
_getTimingInstance().setTime('eac');
DOCS_warmStartDocumentLoader.startLoad(1, null);
DOCS_modelChunk = [{
    "ty": "as",
    "st": "document",
    "si": 0,
    "ei": 0,
    "sm": {
        "ds_b": {},
        "ds_pw": 612.0,
        "ds_ml": 72.0,
        "ds_hi": null,
        "ds_ch": true,
        "ds_fi": null,
        "ds_mt": 72.0,
        "ds_ph": 792.0,
        "ds_cf": true,
        "ds_mr": 72.0,
        "ds_mb": 72.0
    },
    "fm": false
},
{
    "ty": "as",
    "st": "headings",
    "si": 0,
    "ei": 0,
    "sm": {
        "hs_t": {
            "sdef_ps": {
                "ps_sa_i": false,
                "ps_sa": 0.0,
                "ps_sb": 0.0,
                "ps_ir_i": true,
                "ps_il_i": true,
                "ps_al_i": true,
                "ps_ls_i": true,
                "ps_sb_i": false,
                "ps_ifl_i": true
            },
            "sdef_ts": {
                "ts_it_i": true,
                "ts_st_i": true,
                "ts_fgc_i": true,
                "ts_va_i": true,
                "ts_ff": "Trebuchet MS",
                "ts_bd_i": true,
                "ts_ff_i": false,
                "ts_un_i": true,
                "ts_bgc_i": true,
                "ts_fs": 21,
                "ts_sc_i": true,
                "ts_fs_i": false,
                "ts_bd": false
            }
        },
        "hs_st": {
            "sdef_ps": {
                "ps_sa_i": false,
                "ps_sa": 10.0,
                "ps_sb": 0.0,
                "ps_ir_i": true,
                "ps_il_i": true,
                "ps_al_i": true,
                "ps_ls_i": true,
                "ps_sb_i": false,
                "ps_ifl_i": true
            },
            "sdef_ts": {
                "ts_it_i": false,
                "ts_st_i": true,
                "ts_fgc_i": false,
                "ts_va_i": true,
                "ts_ff": "Trebuchet MS",
                "ts_bd_i": true,
                "ts_ff_i": false,
                "ts_un_i": true,
                "ts_bgc_i": true,
                "ts_it": true,
                "ts_fs": 13,
                "ts_sc_i": true,
                "ts_fs_i": false,
                "ts_fgc": "#666666"
            }
        },
        "hs_nt": {
            "sdef_ps": {
                "ps_sa_i": false,
                "ps_hdid": "",
                "ps_sa": 0.0,
                "ps_sb": 0.0,
                "ps_ir": 0.0,
                "ps_ls_i": false,
                "ps_ltr": true,
                "ps_sb_i": false,
                "ps_ifl_i": false,
                "ps_al": 0,
                "ps_ts": {
                    "cv": {
                        "op": "set",
                        "opValue": []
                    }
                },
                "ps_ir_i": false,
                "ps_il_i": false,
                "ps_al_i": false,
                "ps_ls": 1.15,
                "ps_hd": 0,
                "ps_il": 0.0,
                "ps_ifl": 0.0
            },
            "sdef_ts": {
                "ts_st": false,
                "ts_st_i": false,
                "ts_it_i": false,
                "ts_bgc": null,
                "ts_va": "nor",
                "ts_va_i": false,
                "ts_sc": false,
                "ts_fgc_i": false,
                "ts_ff": "Arial",
                "ts_bd_i": false,
                "ts_un_i": false,
                "ts_ff_i": false,
                "ts_bgc_i": false,
                "ts_fs": 11,
                "ts_it": false,
                "ts_sc_i": false,
                "ts_un": false,
                "ts_fgc": "#000000",
                "ts_fs_i": false,
                "ts_bd": false
            }
        },
        "hs_h4": {
            "sdef_ps": {
                "ps_sa_i": false,
                "ps_sa": 0.0,
                "ps_sb": 8.0,
                "ps_ir_i": true,
                "ps_il_i": true,
                "ps_al_i": true,
                "ps_ls_i": true,
                "ps_sb_i": false,
                "ps_ifl_i": true
            },
            "sdef_ts": {
                "ts_it_i": true,
                "ts_st_i": true,
                "ts_fgc_i": false,
                "ts_va_i": true,
                "ts_ff": "Trebuchet MS",
                "ts_bd_i": true,
                "ts_ff_i": false,
                "ts_un_i": false,
                "ts_bgc_i": true,
                "ts_it": false,
                "ts_fs": 11,
                "ts_sc_i": true,
                "ts_fs_i": false,
                "ts_un": true,
                "ts_fgc": "#666666",
                "ts_bd": false
            }
        },
        "hs_h2": {
            "sdef_ps": {
                "ps_sa_i": false,
                "ps_sa": 0.0,
                "ps_sb": 10.0,
                "ps_ir_i": true,
                "ps_il_i": true,
                "ps_al_i": true,
                "ps_ls_i": true,
                "ps_sb_i": false,
                "ps_ifl_i": true
            },
            "sdef_ts": {
                "ts_it_i": true,
                "ts_st_i": true,
                "ts_fgc_i": true,
                "ts_va_i": true,
                "ts_ff": "Trebuchet MS",
                "ts_bd_i": false,
                "ts_ff_i": false,
                "ts_un_i": true,
                "ts_bgc_i": true,
                "ts_fs": 13,
                "ts_sc_i": true,
                "ts_fs_i": false,
                "ts_bd": true
            }
        },
        "hs_h5": {
            "sdef_ps": {
                "ps_sa_i": false,
                "ps_sa": 0.0,
                "ps_sb": 8.0,
                "ps_ir_i": true,
                "ps_il_i": true,
                "ps_al_i": true,
                "ps_ls_i": true,
                "ps_sb_i": false,
                "ps_ifl_i": true
            },
            "sdef_ts": {
                "ts_it_i": true,
                "ts_st_i": true,
                "ts_fgc_i": false,
                "ts_va_i": true,
                "ts_ff": "Trebuchet MS",
                "ts_bd_i": true,
                "ts_ff_i": false,
                "ts_un_i": true,
                "ts_bgc_i": true,
                "ts_fs": 11,
                "ts_sc_i": true,
                "ts_fgc": "#666666",
                "ts_fs_i": false,
                "ts_bd": false
            }
        },
        "hs_h3": {
            "sdef_ps": {
                "ps_sa_i": false,
                "ps_sa": 0.0,
                "ps_sb": 8.0,
                "ps_ir_i": true,
                "ps_il_i": true,
                "ps_al_i": true,
                "ps_ls_i": true,
                "ps_sb_i": false,
                "ps_ifl_i": true
            },
            "sdef_ts": {
                "ts_it_i": true,
                "ts_st_i": true,
                "ts_fgc_i": false,
                "ts_va_i": true,
                "ts_ff": "Trebuchet MS",
                "ts_bd_i": false,
                "ts_ff_i": false,
                "ts_un_i": true,
                "ts_bgc_i": true,
                "ts_fs": 12,
                "ts_sc_i": true,
                "ts_fgc": "#666666",
                "ts_fs_i": false,
                "ts_bd": true
            }
        },
        "hs_h6": {
            "sdef_ps": {
                "ps_sa_i": false,
                "ps_sa": 0.0,
                "ps_sb": 8.0,
                "ps_ir_i": true,
                "ps_il_i": true,
                "ps_al_i": true,
                "ps_ls_i": true,
                "ps_sb_i": false,
                "ps_ifl_i": true
            },
            "sdef_ts": {
                "ts_it_i": false,
                "ts_st_i": true,
                "ts_fgc_i": false,
                "ts_va_i": true,
                "ts_ff": "Trebuchet MS",
                "ts_bd_i": true,
                "ts_ff_i": false,
                "ts_un_i": true,
                "ts_bgc_i": true,
                "ts_it": true,
                "ts_fs": 11,
                "ts_sc_i": true,
                "ts_fs_i": false,
                "ts_fgc": "#666666",
                "ts_bd": false
            }
        },
        "hs_h1": {
            "sdef_ps": {
                "ps_sa_i": false,
                "ps_sa": 0.0,
                "ps_sb": 10.0,
                "ps_ir_i": true,
                "ps_il_i": true,
                "ps_al_i": true,
                "ps_ls_i": true,
                "ps_sb_i": false,
                "ps_ifl_i": true
            },
            "sdef_ts": {
                "ts_it_i": true,
                "ts_st_i": true,
                "ts_fgc_i": true,
                "ts_va_i": true,
                "ts_ff": "Trebuchet MS",
                "ts_bd_i": true,
                "ts_ff_i": false,
                "ts_un_i": true,
                "ts_bgc_i": true,
                "ts_fs": 16,
                "ts_sc_i": true,
                "ts_fs_i": false,
                "ts_bd": false
            }
        }
    },
    "fm": false
},
{
    "ty": "as",
    "st": "language",
    "si": 0,
    "ei": 0,
    "sm": {
        "lgs_l": "en"
    },
    "fm": false
},
{
    "ty": "as",
    "st": "list",
    "si": 1,
    "ei": 1,
    "sm": {
        "ls_ts": null,
        "ls_id": null,
        "ls_nest": 0
    },
    "fm": false
},
{
    "ty": "as",
    "st": "paragraph",
    "si": 1,
    "ei": 1,
    "sm": {
        "ps_sa_i": true,
        "ps_hdid": "",
        "ps_sa": 10.0,
        "ps_sb": 0.0,
        "ps_ir": 0.0,
        "ps_ls_i": true,
        "ps_ltr": true,
        "ps_sb_i": true,
        "ps_ifl_i": true,
        "ps_al": 0,
        "ps_ts": {
            "cv": {
                "op": "set",
                "opValue": []
            }
        },
        "ps_il_i": true,
        "ps_al_i": true,
        "ps_ir_i": true,
        "ps_ls": 1.15,
        "ps_hd": 0,
        "ps_ifl": 0.0,
        "ps_il": 0.0
    },
    "fm": false
},
{
    "ty": "as",
    "st": "comment",
    "si": 0,
    "ei": 1,
    "sm": {
        "cs_cids": {
            "cv": {
                "op": "set",
                "opValue": []
            }
        }
    },
    "fm": false
},
{
    "ty": "as",
    "st": "doco_anchor",
    "si": 0,
    "ei": 1,
    "sm": {
        "das_a": {
            "cv": {
                "op": "set",
                "opValue": []
            }
        }
    },
    "fm": false
},
{
    "ty": "as",
    "st": "import_warnings",
    "si": 0,
    "ei": 1,
    "sm": {
        "iws_iwids": {
            "cv": {
                "op": "set",
                "opValue": []
            }
        }
    },
    "fm": false
},
{
    "ty": "as",
    "st": "link",
    "si": 0,
    "ei": 1,
    "sm": {
        "lnks_link": null
    },
    "fm": false
},
{
    "ty": "as",
    "st": "text",
    "si": 0,
    "ei": 1,
    "sm": {
        "ts_st": false,
        "ts_it_i": true,
        "ts_st_i": true,
        "ts_bgc": null,
        "ts_va": "nor",
        "ts_va_i": true,
        "ts_sc": false,
        "ts_fgc_i": true,
        "ts_ff": "Arial",
        "ts_bd_i": true,
        "ts_ff_i": true,
        "ts_un_i": true,
        "ts_bgc_i": true,
        "ts_it": false,
        "ts_fs": 11,
        "ts_sc_i": true,
        "ts_un": false,
        "ts_fs_i": true,
        "ts_fgc": "#000000",
        "ts_bd": false
    },
    "fm": false
}];

DOCS_warmStartDocumentLoader.loadModelChunk(DOCS_modelChunk);
DOCS_modelChunk = undefined;
// DOCS_warmStartDocumentLoader.endLoad();