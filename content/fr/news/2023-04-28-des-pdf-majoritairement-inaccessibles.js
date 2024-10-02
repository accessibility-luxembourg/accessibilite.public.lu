'use strict';
import Highcharts from 'highcharts/es-modules/masters/highcharts.src.js';
import 'highcharts/es-modules/masters/modules/treemap.src.js';
import 'highcharts/es-modules/masters/modules/annotations.src.js';
import 'highcharts/es-modules/masters/modules/exporting.src.js';
import 'highcharts/es-modules/masters/modules/export-data.src.js';
import 'highcharts/es-modules/masters/modules/accessibility.src.js';
import Papa from 'papaparse';
import Graph from '../../../src/js/graph.js';

Highcharts.setOptions({                                                                            // highcharts french translations
    lang: Graph.Highcharts_translations
});

const graph_translations = {
    "fr": {
        "pdf-20230503-1": {
            "taggedPDF": "PDF visés par la loi, balisés",
            "untaggedPDF": "PDF visés par la loi, non balisés",
            "forms": "Formu-<br>laires",
            "taggedOthers": "Autres documents structurés",
            "untaggedOthers": "Autres documents non structurés",
            "exemptPDF": "PDF exemptés",
            "title": "Graphique 1. Répartition des PDF disponibles en téléchargement",
            "subtitle": "Sur un total de 25 398 fichiers"
        },
        "pdf-20230503-2": {
          "year": "Année",
          "title": "Graphique 2. Part des PDF non balisés par année en %"
        },
        "pdf-20230503-3": {
          "year": "Année",
          "title": "Graphique 3. Quantité de PDF publiés par année",
          "quantity": "PDF"
        },
        "pdf-20230503-4": {
          "title": "Graphique 4. Part des PDF balisés en pourcentage",
          "pct": "Part en pourcentage"
        },
        "pdf-20230503-5": {
          "title": "Graphique 5. Part des PDF numérisés parmi les non balisés en %",
          "pct": "Part en pourcentage"
        },
        "pct": "Pourcentage"
    },
    "en": {
      "pdf-20230503-1": {
        "taggedPDF": "Tagged PDFs covered by the law",
        "untaggedPDF": "Non-tagged PDFs covered by the law",
        "forms": "Forms",
        "taggedOthers": "Other structured documents",
        "untaggedOthers": "Other unstructured documents",
        "exemptPDF": "Exempt PDFs",
        "title": "Graph 1. Breakdown of PDFs available for download",
        "subtitle": "Out of a total of 25,398 files"
      },
      "pdf-20230503-2": {
        "year": "Year",
        "title": "Graph 2. Percentage of non-tagged PDFs by year"
      },
      "pdf-20230503-3": {
        "year": "Year",
        "title": "Graph 3. Number of PDFs published per year",
        "quantity": "PDF"
      },
      "pdf-20230503-4": {
        "title": "Graph 4. Percentage of tagged PDFs",
        "pct": "Percentage share"
      },
      "pdf-20230503-5": {
        "title": "Graph 5. Percentage of digitised PDFs among non-tagged PDFs",
        "pct": "Percentage share"
      },
        "pct": "Percentage"
    }
}

function loadchart (chartid) {                                                                     // load charts when entering viewport
    switch (chartid) {
        
        case "pdf-20230503-1":
            Highcharts.chart('pdf-20230503-1', {
                credits: false,
                series: [{
                    type: 'treemap',
                    accessibility: {
                        enabled: false
                    },
                    layoutAlgorithm: 'sliceAndDice',
                    layoutStartingDirection: 'horizontal',
                    borderColor: '#fff',
                    borderRadius: 3,
                    borderWidth: 2,
                    dataLabels: {
                        style: {
                            textOutline: 'none'
                        }
                    },
                    levels: [{
                        level: 1,
                        layoutAlgorithm: 'sliceAndDice',
                    }, {
                        level: 2,
                        layoutAlgorithm: 'sliceAndDice',
                        dataLabels: {
                            enabled: true,
                            align: 'left',
                            verticalAlign: 'top',
                            style: {
                                fontSize: '16px',
                                fontWeight: 'normal'
                            }
                        }
                    }, {
                        level: 3,
                        layoutAlgorithm: 'stripes',
                        layoutStartingDirection: 'vertical',
                        dataLabels: {
                            enabled: true,
                            align: 'left',
                            verticalAlign: 'bottom',
                            style: {
                                fontSize: '12px',
                                fontWeight: 'normal'
                            }
                        }
                    },],
                    data: [{
                        id: 'A',
                        color: '#E3E4DB',
                        value: 11617
                    }, {
                        id: 'B',
                        value: 13781,
                        color: '#3F6C51'
                    }, {
                        name: graph_translations[Graph.chart_lang]["pdf-20230503-1"].taggedPDF,
                        parent: 'B',
                        id: 'B1',
                        value: 5591,
                        pct: 22,
                        sortIndex: 0
                    }, {
                        name: graph_translations[Graph.chart_lang]["pdf-20230503-1"].untaggedPDF,
                        parent: 'B',
                        id: 'B2',
                        value: 8185,
                        pct: 32.2,
                        sortIndex: 1,
                        color: '#A30015'
                    }, {
                        name: graph_translations[Graph.chart_lang]["pdf-20230503-1"].forms,
                        parent: 'B1',
                        value: 642,
                        pct: 2.5,
                        sortIndex: 0
                    }, {
                        name: graph_translations[Graph.chart_lang]["pdf-20230503-1"].forms,
                        parent: 'B2',
                        value: 705,
                        pct: 2.8,
                        sortIndex: 1
                    },{
                        name: graph_translations[Graph.chart_lang]["pdf-20230503-1"].taggedOthers,
                        parent: 'B1',
                        value: 4949,
                        pct: 19,
                        sortIndex: 1
                    },  {
                        name: 'Images',
                        parent: 'B2',
                        value: 1131,
                        pct: 4,
                        sortIndex: 0
                    }, {
                        name: graph_translations[Graph.chart_lang]["pdf-20230503-1"].untaggedOthers,
                        parent: 'B2',
                        value: 6349,
                        pct: 25,
                        sortIndex: 2
                    }, {
                        name: graph_translations[Graph.chart_lang]["pdf-20230503-1"].exemptPDF,
                        parent: 'A',
                        value: 11617,
                        pct: 46
                    }]
                }],
                exporting: {
                    buttons: {
                      contextButton: {
                        menuItems: ["printChart",
                                    "separator",
                                    "downloadPNG",
                                    "downloadJPEG",
                                    "downloadPDF",
                                    "downloadSVG",
                                    "separator",
                                    "downloadCSV",
                                    "downloadXLS"]
                      }
                    }
                },
                title: {
                    text: graph_translations[Graph.chart_lang]["pdf-20230503-1"].title,
                    align: 'center',
                    style: {
                        fontFamily: "Fira Sans",
                        fontWeight: 400,
                        fontSize: '16px'
                    }
                },
                subtitle: {
                    text: graph_translations[Graph.chart_lang]["pdf-20230503-1"].subtitle,
                    align: 'center',
                    style: {
                        fontFamily: "Fira Sans",
                        fontWeight: 400,
                        fontSize: '12px'
                    }
                },
                tooltip: {
                    useHTML: true,
                    pointFormat:
                        '{point.name} : {point.value} ({point.pct}%)'
                }
            });
        break;

        case "pdf-20230503-2":
            Papa.parse('datasource/pdf-20230503-2.csv', {
                download: true,
                header: true,
                complete: results => {
                    let c_x = {
                        categories: Graph.get_cat(results.data, 'year'),
                        title: {text: graph_translations[Graph.chart_lang]["pdf-20230503-2"].year, y: 100}
                    };
                    let c_y = {
                        title: {
                            text: undefined
                        },
                        max: 70
                    };
                    Graph.build_chart(
                        Highcharts,
                        graph_translations[Graph.chart_lang]["pdf-20230503-2"].title, 
                        "pdf-20230503-2", 
                        [{data: Graph.get_num(results.data, 'pct-non-tagged'), name: graph_translations[Graph.chart_lang].pct}],
                        'column', 
                        "", 
                        c_x, 
                        c_y,
                        false,
                        0.2,
                        'transparent',
                        '{y}%');
                }
            });
        break;

        case "pdf-20230503-3":
            Papa.parse('datasource/pdf-20230503-3.csv', {
                download: true,
                header: true,
                complete: results => {
                    let c_x = {
                        categories: Graph.get_cat(results.data, 'year'),
                        title: {text: graph_translations[Graph.chart_lang]["pdf-20230503-3"].year, y: 100}
                    };
                    let c_y = {
                        title: {
                            text: undefined
                        },
                        max: 4000
                    };
                    Graph.build_chart(
                        Highcharts,
                        graph_translations[Graph.chart_lang]["pdf-20230503-3"].title, 
                        "pdf-20230503-3", 
                        [{data: Graph.get_num(results.data, 'num-pdf'), name: graph_translations[Graph.chart_lang]["pdf-20230503-3"].quantity}],
                        'column', 
                        "", 
                        c_x, 
                        c_y,
                        false,
                        0.2,
                        'transparent',
                        '{y}');
                }
            });
        break;

        case "pdf-20230503-4":
            Papa.parse('datasource/pdf-20230503-4.csv', {
                download: true,
                header: true,
                complete: results => {
                    let c_x = {
                        categories: Graph.get_cat(results.data, 'Site'),
                        title: {text: "Site", x: -100}
                    };
                    let c_y = {
                        title: {
                            text: undefined
                        },
                        max: 100
                    };
                    Graph.build_chart(
                        Highcharts,
                        graph_translations[Graph.chart_lang]["pdf-20230503-4"].title, 
                        "pdf-20230503-4", 
                        [{data: Graph.get_num(results.data, 'pct-tagged-pdf'), name: graph_translations[Graph.chart_lang]["pdf-20230503-4"].pct}],
                        'bar', 
                        "", 
                        c_x, 
                        c_y,
                        false,
                        0.17,
                        'rgb(46, 117, 182)',
                        '{y}%');
                }
            });
        break;

        case "pdf-20230503-5":
            Papa.parse('datasource/pdf-20230503-5.csv', {
                download: true,
                header: true,
                complete: results => {
                    let c_x = {
                        categories: Graph.get_cat(results.data, 'Site'),
                        title: {text: "Site", x: -100}
                    };
                    let c_y = {
                        title: {
                            text: undefined
                        },
                        max: 100
                    };
                    Graph.build_chart(
                        Highcharts,
                        graph_translations[Graph.chart_lang]["pdf-20230503-5"].title, 
                        "pdf-20230503-5", 
                        [{data: Graph.get_num(results.data, 'pct-scanned-pdf'), name: graph_translations[Graph.chart_lang]["pdf-20230503-5"].pct}],
                        'bar', 
                        "", 
                        c_x, 
                        c_y,
                        false,
                        0.2,
                        'rgb(46, 117, 182)',
                        '{y}%');
                }
            });
        break;
        
    }
}

document.addEventListener('DOMContentLoaded', function () {                 // create description div linked to charts for screen readers

    const ob = new IntersectionObserver(Graph.obCallback(loadchart), {threshold: [0.01, 0.3]});
    ob.observe(document.querySelector('#pdf-20230503-1'));
    ob.observe(document.querySelector('#pdf-20230503-2'));
    ob.observe(document.querySelector('#pdf-20230503-3'));
    ob.observe(document.querySelector('#pdf-20230503-4'));
    ob.observe(document.querySelector('#pdf-20230503-5'));

    window.onkeydown = function () {   // if user navigates with keys charts shall load immediately
        for (let q=0; q<document.querySelectorAll("figure.chart > div:first-of-type:not([data-highcharts-chart])").length; q++) {
            loadchart(document.querySelectorAll("figure.chart > div:first-of-type:not([data-highcharts-chart])")[q].id);
        } 
    };
    
    for (let d=0; d<document.getElementsByTagName("details").length; d++) {
        let accessible_div = document.createElement("div");
        accessible_div.setAttribute("class", "highcharts-description");
        accessible_div.setAttribute("style", "display: none");
        accessible_div.innerHTML = document.getElementsByTagName("details")[d].getElementsByTagName("p")[0].innerHTML;
        let parentDiv = document.getElementsByTagName("details")[d].parentNode;
        parentDiv.insertBefore(accessible_div, document.getElementsByTagName("details")[d]);
    }
});