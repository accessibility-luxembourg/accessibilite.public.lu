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
        "categories": "Catégories",
        "admin_level": "Domaine administratif",
        "compliance": "Conformité<br>partielle",
        "compliance_desc": "La conformité partielle est atteinte à partir de 50%.",
        "full_compliance": {
            "title": "Graphique 1. Niveau de conformité des sites audités en 2024, en %"
        },
        "admin_levels": {
            "title": "Graphique 2. Contrôle simplifié des sites Web, scores moyens de conformité par niveau administratif, comparaison des campagnes 2020 - 2021 et 2022 - 2024"
        },
        "complaints": {
            "title": "Graphique 3. Nombre de réclamations par thème, de 2022 à 2024"
        }
    },
    "en": {
        "categories": "Categories",
        "admin_level": "Administrative area",
        "theme": "Theme",
        "compliance": "Partial<br>compliance",
        "compliance_desc": "Partial compliance is reached at 50%.",
        "full_compliance": {
            "title": "Graph 1. Compliance rate of audited sites in 2024, as a percentage"
        },
        "admin_levels": {
            "title": "Graph 2. Simplified monitoring of websites, average compliance scores by administrative level, comparison between 2020 - 2021 and 2022 - 2024 campaigns"
        },
        "complaints": {
            "title": "Graph 3. Number of complaints by theme, from 2022 to 2024"
        }
    }
}

function loadchart (chartid) {                                                                     // load charts when entering viewport
    switch (chartid) {
        case "full_compliance":
            Papa.parse('datasource/2024-report/full_compliance.csv', {
                download: true,
                header: true,
                complete: results => {
                    let c_annotations = [{
                        labels: [{
                            point: { x: 450, y: 50,  yAxis: 0 },
                            text: graph_translations[Graph.chart_lang].compliance,
                            accessibility: {
                                description: graph_translations[Graph.chart_lang].compliance_desc
                            }
                        }],
                        labelOptions: {
                            includeInDataExport: false
                        }
                    }];
                    let c_x = {
                        categories: Graph.get_cat(results.data, 'Site'),
                        title: {text: "Sites", x: -100}
                    };
                    let c_y = {
                        title: {
                            text: undefined
                        },
                        max: 100,
                        plotLines: [{
                            color: 'rgb(197, 90, 17)', 
                            dashStyle: 'solid', 
                            value: 50, 
                            width: 3
                          }]
                    };
                    Graph.build_chart(
                        Highcharts,
                        graph_translations[Graph.chart_lang].full_compliance.title,                    // chart title
                        "full_compliance",                                                             // div ID
                        [{data: Graph.get_num(results.data, 'Score'), name: "Score"}],                 // dataset(s)
                        'bar',                                                                         // chart type
                        c_annotations,                                                                 // annotations
                        c_x,                                                                           // xAxis
                        c_y,                                                                           // yAxis 
                        false,                                                                         // show legend
                        0.2,                                                                           // group padding
                        'transparent',                                                                 // label background color
                        undefined);                                                                    // label format
                }
            });
        break;
        case "admin_levels":
            Papa.parse('datasource/2024-report/admin_levels.csv', {
                download: true,
                header: true,
                complete: results => {
                    let c_x = {
                        categories: Graph.get_cat(results.data, 'Level'),
                        title: {text: graph_translations[Graph.chart_lang].reasons, x: -100}
                    };
                    let c_y = {
                        title: {
                            text: undefined
                        }
                    };
                    Graph.build_chart(
                        Highcharts,
                        graph_translations[Graph.chart_lang].admin_levels.title, 
                        "admin_levels", 
                        [{data: Graph.get_num(results.data, '2020-2021'), name: '2020-2021', color: {patternIndex: 0}}, {data: Graph.get_num(results.data, '2022-2024'), name: '2022-2024'}],
                        'column', 
                        "", 
                        c_x, 
                        c_y,
                        true,
                        0.05,
                        'rgb(46, 117, 182)',
                        undefined);
                }
            });
        case "complaints":
            Papa.parse('datasource/2024-report/complaints.csv', {
                download: true,
                header: true,
                complete: results => {
                    let c_x = {
                        categories: Graph.get_cat(results.data, 'Keyword'),
                        title: {text: graph_translations[Graph.chart_lang].categories, x: -100}
                    };
                    let c_y = {
                        title: {
                            text: undefined
                        },
                        max: 10
                    };
                    Graph.build_chart(
                        Highcharts,
                        graph_translations[Graph.chart_lang].complaints.title, 
                        "complaints", 
                        [{data: Graph.get_num(results.data, 'Complaints'), name: "Réclamations"}],
                        'bar', 
                        "", 
                        c_x, 
                        c_y,
                        false,
                        0.2,
                        'transparent',
                        undefined);
                }
            });
        break;
    }
}

document.addEventListener('DOMContentLoaded', function () {                 // create description div linked to charts for screen readers

    const ob = new IntersectionObserver(Graph.obCallback(loadchart), {threshold: [0.01, 0.3]});
    ob.observe(document.querySelector('#full_compliance'));
    ob.observe(document.querySelector('#admin_levels'));
    ob.observe(document.querySelector('#complaints'));

    window.onkeydown = function () {   // if user navigates with keys charts shall load immediately
        for (let q=0; q<document.querySelectorAll("figure.chart > div:first-of-type:not([data-highcharts-chart])").length; q++) {
            loadchart(document.querySelectorAll("figure.chart > div:first-of-type:not([data-highcharts-chart])")[q].id);
        } 
    };
    
});