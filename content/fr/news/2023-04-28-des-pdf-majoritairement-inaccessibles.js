'use strict';
import Highcharts from '../../js/charts/highcharts.js';
import '../../js/charts/modules/exporting.js';
import '../../js/charts/modules/accessibility.js';
import '../../js/charts/modules/annotations.js';
import '../../js/charts/modules/export-data.js';
import '../../js/charts/modules/pattern-fill.js';
import Graph from '../../js/graph.js';

Highcharts.setOptions({                                                                            // highcharts french translations
    lang: Graph.Highcharts_translations
});

const graph_translations = {
    "fr": {
        "pdf-20230503-1": {
            "taggedPDF": "PDF visés par la loi, balisés",
            "untaggedPDF": "PDF visés par la loi, non balisés",
            "forms": "Formulaires",
            "others": "Autres documents",
            "exemptPDF": "PDF exemptés",
            "title": "Graphique 1. Répartition des PDF disponibles en téléchargement"
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
        "untaggedPDF": "Untagged PDFs covered by the law",
        "forms": "Forms",
        "others": "Other documents",
        "exemptPDF": "Exempt PDFs",
        "title": "Graph 1. Breakdown of PDFs available for download"
      },
      "pdf-20230503-2": {
        "year": "Year",
        "title": "Graph 2. Percentage of untagged PDFs by year"
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
            Papa.parse('datasource/pdf-20230503-1.csv', {
                download: true,
                header: true,
                complete: results => {
                    let c_x = {
                        categories: Graph.get_cat(results.data, 'Categorie'),
                        title: {text: "Catégorie", x: -100},
                        labels: {
                            style: {
                                fontSize: '14px',
                                wordBreak: 'break-all',
                                textOverflow: 'allow',
                                width: 100
                            }
                        }
                    };
                    let c_y = {
                        title: {
                            text: undefined
                        },
                        visible: false,
                        max: 11000
                    };
                    Graph.build_chart(
                        Highcharts,
                        graph_translations[Graph.chart_lang]["pdf-20230503-1"].title,
                        "pdf-20230503-1", 
                        [{data: Graph.get_num(results.data, 'Formulaires'), name: graph_translations[Graph.chart_lang]["pdf-20230503-1"].forms, color: {patternIndex: 0}}, {data: Graph.get_num(results.data, 'Images'), name: "Images", color: { pattern: {
                            path: 'M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2c9.272 0 14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6 44.272-6 49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14c-9.272 0-14.215 5.258-18.7 10.339C11.918 1.306 8.353 6-.02 6.002',
                    width: 70,
                    height: 8,
                            color: 'rgb(140, 3, 3)'
                        }}}, {data: Graph.get_num(results.data, 'Autres documents'), name: graph_translations[Graph.chart_lang]["pdf-20230503-1"].others}],
                        'bar',
                        "",
                        c_x,
                        c_y,
                        true,
                        0.21,
                        'rgba(46, 117, 182, .9)',
                        'normal',
                        4);
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
                        undefined,
                        4);
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
                        undefined,
                        4);
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
                        undefined,
                        4);
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
                        undefined,
                        5);
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
    
});