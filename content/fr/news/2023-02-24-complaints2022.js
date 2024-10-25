'use strict';
import Highcharts from 'highcharts/es-modules/masters/highcharts.src.js';
import 'highcharts/es-modules/masters/modules/annotations.src.js';
import 'highcharts/es-modules/masters/modules/exporting.src.js';
import 'highcharts/es-modules/masters/modules/export-data.src.js';
import 'highcharts/es-modules/masters/modules/accessibility.src.js';
import 'highcharts/es-modules/masters/modules/pattern-fill.src.js';
import Papa from 'papaparse';
import Graph from '../../../src/js/graph.js';

Highcharts.setOptions({                                                                            // highcharts french translations
    lang: Graph.Highcharts_translations
});

const graph_translations = {
    "fr": {
        "reasons": "Raisons",
        "complaint": "Réclamations",
        "solutions": "Solutions à court terme proposées",
        "complaints": {
            "title": "Graphique 7. Réclamations reçues et solutions à court terme proposées"
        },
        "burden": {
            "title": "Graphique 8. Les cinq raisons principales de charge disproportionnée évoquées, en pourcentage"
        }
    },
    "en": {
        "reasons": "Reasons",
        "complaint": "Complaints",
        "solutions": "Proposed short-term solutions",
        "complaints": {
            "title": "Graph 7. Complaints received and short-term solutions proposed"
        },
        "burden": {
            "title": "Graph 8. The five main reasons given for disproportionate burden, as a percentage"
        }
    },
    "de": {
        "reasons": "Reasons",
        "complaint": "Complaints",
        "solutions": "Proposed short-term solutions",
        "complaints": {
            "title": "Graph 7. Complaints received and short-term solutions proposed"
        },
        "burden": {
            "title": "Graph 8. The five main reasons given for disproportionate burden, as a percentage"
        }
    }
}

function loadchart (chartid) {                                                                     // load charts when entering viewport
    switch (chartid) {
        case "complaints":
            Papa.parse('datasource/complaints.csv', {
                download: true,
                header: true,
                complete: results => {
                    let c_x = {
                        categories: Graph.get_cat(results.data, 'Date'),
                        title: {text: "Date", x: -100}
                    };
                    let c_y = {
                        title: {
                            text: undefined
                        }
                    };
                    Graph.build_chart(
                        Highcharts,
                        graph_translations[Graph.chart_lang].complaints.title, 
                        "complaints", 
                        [{data: Graph.get_num(results.data, 'Complaints'), name: graph_translations[Graph.chart_lang].complaint, color: {patternIndex: 0}}, {data: Graph.get_num(results.data, 'Solution'), name: graph_translations[Graph.chart_lang].solutions}],
                        'bar', 
                        "", 
                        c_x, 
                        c_y,
                        true,
                        0.2,
                        'rgb(46, 117, 182)',
                        undefined);
                }
            });
        break;
        case "burden":
            Papa.parse('datasource/burden.csv', {
                download: true,
                header: true,
                complete: results => {
                    let c_x = {
                        categories: Graph.get_cat(results.data, 'Theme'),
                        title: {text: graph_translations[Graph.chart_lang].reasons, x: -100}
                    };
                    let c_y = {
                        title: {
                            text: undefined
                        }
                    };
                    Graph.build_chart(
                        Highcharts,
                        graph_translations[Graph.chart_lang].burden.title, 
                        "burden", 
                        [{data: Graph.get_num(results.data, '2021'), name: "2021", color: {patternIndex: 0}}, {data: Graph.get_num(results.data, '2022'), name: "2022"}],
                        'bar', 
                        "", 
                        c_x, 
                        c_y,
                        true,
                        0.05,
                        'rgb(46, 117, 182)',
                        undefined);
                }
            });
        break;
    }
}

document.addEventListener('DOMContentLoaded', function () {               // create description div linked to charts for screen readers

    const ob = new IntersectionObserver(Graph.obCallback(loadchart), {threshold: [0.01, 0.3]});
    ob.observe(document.querySelector('#complaints'));
    ob.observe(document.querySelector('#burden'));

    window.onkeydown = function () {   // if user navigates with keys charts shall load immediately
        for (let q=0; q<document.querySelectorAll("figure.chart > div:first-of-type:not([data-highcharts-chart])").length; q++) {
            loadchart(document.querySelectorAll("figure.chart > div:first-of-type:not([data-highcharts-chart])")[q].id);
        } 
    };
    
});