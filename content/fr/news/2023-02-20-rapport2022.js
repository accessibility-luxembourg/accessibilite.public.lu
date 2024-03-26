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
        "theme": "Thématique",
        "compliance": "Conformité<br>partielle",
        "compliance_desc": "La conformité partielle est atteinte à partir de 50%.",
        "full_compliance": {
            "title": "Graphique 1. Niveau de conformité des sites audités en 2022, en pourcentage"
        },
        "full_themes": {
            "title": "Graphique 2. Répartition des non-conformités, en pourcentage"
        },
        "simple_themes": {
            "title": "Graphique 3. Répartition des non-conformités, en pourcentage"
        },
        "simple_compliance": {
            "title": "Graphique 4. Niveau de conformité, par domaine administratif, en pourcentage"
        },
        "full_app_compliance": {
            "title": "Graphique 5. Niveau de conformité des apps auditées en 2022, en pourcentage"
        },
        "full_app_themes": {
            "title": "Graphique 6. Répartition des non-conformités sur les apps, en pourcentage"
        }
    },
    "en": {
        "categories": "Categories",
        "admin_level": "Administrative area",
        "theme": "Theme",
        "compliance": "Partial<br>compliance",
        "compliance_desc": "Partial compliance is reached at 50%.",
        "full_compliance": {
            "title": "Graph 1. Level of compliance of audited sites in 2022, as a percentage"
        },
        "full_themes": {
            "title": "Graph 2. Breakdown of non-compliances, as a percentage"
        },
        "simple_themes": {
            "title": "Graph 3. Breakdown of non-compliances, as a percentage"
        },
        "simple_compliance": {
            "title": "Graph 4. Level of compliance, by administrative area, as a percentage"
        },
        "full_app_compliance": {
            "title": "Graph 5. Level of compliance of apps audited in 2022, as a percentage"
        },
        "full_app_themes": {
            "title": "Graph 6. Breakdown of non-compliances on apps, as a percentage"
        }
    },
    "de": {
        "categories": "Categories",
        "admin_level": "Administrative area",
        "theme": "Theme",
        "compliance": "Partial<br>compliance",
        "compliance_desc": "Partial compliance is reached at 50%.",
        "full_compliance": {
            "title": "Graph 1. Level of compliance of audited sites in 2022, as a percentage"
        },
        "full_themes": {
            "title": "Graph 2. Breakdown of non-compliances, as a percentage"
        },
        "simple_themes": {
            "title": "Graph 3. Breakdown of non-compliances, as a percentage"
        },
        "simple_compliance": {
            "title": "Graph 4. Level of compliance, by administrative area, as a percentage"
        },
        "full_app_compliance": {
            "title": "Graph 5. Level of compliance of apps audited in 2022, as a percentage"
        },
        "full_app_themes": {
            "title": "Graph 6. Breakdown of non-compliances on apps, as a percentage"
        }
    }
}

function loadchart (chartid) {                                                                     // load charts when entering viewport
    switch (chartid) {
        case "full_compliance":
            Papa.parse('datasource/2022-report/full_compliance.csv', {
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
                        graph_translations[Graph.chart_lang]["full_compliance"].title,                 // chart title
                        "full_compliance",                                                             // div ID
                        [{data: Graph.get_num(results.data, 'Score'), name: "Score"}],                 // dataset(s)
                        'bar',                                                                         // chart type
                        c_annotations,                                                                 // annotations
                        c_x,                                                                           // xAxis
                        c_y,                                                                           // yAxis 
                        false,                                                                         // show legend
                        0.2,                                                                           // group padding
                        'transparent',                                                                 // label background color
                        '{y}%');                                                                       // label format
                }
            });
        break;
        case "full_themes":
            Papa.parse('datasource/2022-report/full_themes.csv', {
                download: true,
                header: true,
                complete: results => {
                    let c_x = {
                        categories: Graph.get_cat(results.data, 'Theme'),
                        title: {text: "Catégories", x: -100}
                    };
                    let c_y = {
                        title: {
                            text: undefined
                        },
                        max: 30
                    };
                    Graph.build_chart(
                        Highcharts,
                        graph_translations[Graph.chart_lang]["full_themes"].title, 
                        "full_themes", 
                        [{data: Graph.get_num(results.data, 'Score'), name: "Score"}],
                        'bar', 
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
        case "simple_themes":
            Papa.parse('datasource/2022-report/simple_themes.csv', {
                download: true,
                header: true,
                complete: results => {
                    let c_x = {
                        categories: Graph.get_cat(results.data, 'Theme'),
                        title: {text: graph_translations[Graph.chart_lang].categories, x: -100}
                    };
                    let c_y = {
                        title: {
                            text: undefined
                        },
                        max: 30
                    };
                    Graph.build_chart(
                        Highcharts,
                        graph_translations[Graph.chart_lang]["simple_themes"].title, 
                        "simple_themes", 
                        [{data: Graph.get_num(results.data, 'Score'), name: "Score"}],
                        'bar', 
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
        case "simple_compliance":
            Papa.parse('datasource/2022-report/simple_compliance.csv', {
                download: true,
                header: true,
                complete: results => {
                    let c_x = {
                        categories: Graph.get_cat(results.data, 'Admin_level'),
                        title: {text: graph_translations[Graph.chart_lang].admin_level, y: 100}
                    };
                    let c_y = {
                        title: {
                            text: undefined
                        },
                        max: 80
                    };
                    Graph.build_chart(
                        Highcharts,
                        graph_translations[Graph.chart_lang]["simple_compliance"].title, 
                        "simple_compliance", 
                        [{data: Graph.get_num(results.data, 'Compliance'), name: "Score"}],
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
        case "full_app_compliance":
            Papa.parse('datasource/2022-report/full_app_compliance.csv', {
                download: true,
                header: true,
                complete: results => {
                    let c_x = {
                        categories: Graph.get_cat(results.data, 'App'),
                        title: {text: "Apps", x: -100}
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
                        graph_translations[Graph.chart_lang]["full_app_compliance"].title, 
                        "full_app_compliance", 
                        [{data: Graph.get_num(results.data, 'Score'), name: "Score"}],
                        'bar', 
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
        case "full_app_themes":
            Papa.parse('datasource/2022-report/full_app_themes.csv', {
                download: true,
                header: true,
                complete: results => {
                    let c_x = {
                        categories: Graph.get_cat(results.data, 'Theme'),
                        title: {text: graph_translations[Graph.chart_lang].theme, x: -100}
                    };
                    let c_y = {
                        title: {
                            text: undefined
                        },
                        max: 30
                    };
                    Graph.build_chart(
                        Highcharts,
                        graph_translations[Graph.chart_lang]["full_app_themes"].title, 
                        "full_app_themes", 
                        [{data: Graph.get_num(results.data, '2021'), name: "2021", color: {patternIndex: 0}}, {data: Graph.get_num(results.data, '2022'), name: "2022"}],
                        'bar', 
                        "", 
                        c_x, 
                        c_y,
                        true,
                        0.05,
                        'rgb(46, 117, 182)',
                        '{y}%');
                }
            });
        break;
    }
}

document.addEventListener('DOMContentLoaded', function () {                 // create description div linked to charts for screen readers

    const ob = new IntersectionObserver(Graph.obCallback(loadchart), {threshold: [0.01, 0.3]});
    ob.observe(document.querySelector('#full_compliance'));
    ob.observe(document.querySelector('#full_themes'));
    ob.observe(document.querySelector('#simple_themes'));
    ob.observe(document.querySelector('#simple_compliance'));
    ob.observe(document.querySelector('#full_app_compliance'));
    ob.observe(document.querySelector('#full_app_themes'));

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