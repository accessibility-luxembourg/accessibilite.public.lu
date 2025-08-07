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
        "categories": "Catégories",
        "admin_level": "Domaine administratif",
        "compliance": "Conformité<br>partielle",
        "compliance_desc": "La conformité partielle est atteinte à partir de 50%.",
        "full_compliance": {
            "title": "Graphique 1. Niveau de conformité des sites audités en 2023, en %"
        },
        "full_themes": {
            "title": "Graphique 2. Top 10 des non-conformités décelées dans l'échantillon, en %"
        },
        "full_app_compliance": {
            "title": "Graphique 3. Taux de conformité des apps auditées en 2023, en %"
        },
        "simple_compliance_top10": {
            "title": "Graphique 4. Top 10 des sites publics cibles d'un audit simplifié, en %"
        },
        "simple_compliance": {
            "title": "Graphique 5. Niveau de conformité par domaine administratif, en %"
        }
    },
    "en": {
        "categories": "Categories",
        "admin_level": "Administrative area",
        "theme": "Theme",
        "compliance": "Partial<br>compliance",
        "compliance_desc": "Partial compliance is reached at 50%.",
        "full_compliance": {
            "title": "Graph 1. Compliance rate of audited sites in 2023, as a percentage"
        },
        "full_themes": {
            "title": "Graph 2. Top 10 non-compliances found in the sample, as a percentage"
        },
        "full_app_compliance": {
            "title": "Graph 3. Compliance rate of audited apps in 2023, as a percentage"
        },
        "simple_compliance_top10": {
            "title": "Graph 4. Top 10 public sites targeted by a simplified audit, as a percentage"
        },
        "simple_compliance": {
            "title": "Graph 5. Compliance rate by administrative area, as a percentage"
        }
    }
}

function loadchart (chartid) {                                                                     // load charts when entering viewport
    switch (chartid) {
        case "full_compliance":
            Papa.parse('datasource/2023-report/full_compliance.csv', {
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
                        undefined);                                                                       // label format
                }
            });
        break;
        case "full_themes":
            Papa.parse('datasource/2023-report/full_themes.csv', {
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
                        max: 100
                    };
                    Graph.build_chart(
                        Highcharts,
                        graph_translations[Graph.chart_lang].full_themes.title, 
                        "full_themes", 
                        [{data: Graph.get_num(results.data, 'Score'), name: "Score"}],
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
        case "full_app_compliance":
            Papa.parse('datasource/2023-report/full_app_compliance.csv', {
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
                        graph_translations[Graph.chart_lang].full_app_compliance.title, 
                        "full_app_compliance", 
                        [{data: Graph.get_num(results.data, 'Score'), name: "Score"}],
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
        case "simple_compliance_top10":
            Papa.parse('datasource/2023-report/simple_compliance_top10.csv', {
                download: true,
                header: true,
                complete: results => {
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
                        graph_translations[Graph.chart_lang].simple_compliance_top10.title,           // chart title
                        "simple_compliance_top10",                                                     // div ID
                        [{data: Graph.get_num(results.data, 'Score'), name: "Score"}],                 // dataset(s)
                        'bar',                                                                         // chart type
                        "",                                                                            // annotations
                        c_x,                                                                           // xAxis
                        c_y,                                                                           // yAxis 
                        false,                                                                         // show legend
                        0.2,                                                                           // group padding
                        'transparent',                                                                 // label background color
                        undefined);                                                                       // label format
                }
            });
        break;
        case "simple_compliance":
            Papa.parse('datasource/2023-report/simple_compliance.csv', {
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
                        graph_translations[Graph.chart_lang].simple_compliance.title, 
                        "simple_compliance", 
                        [{data: Graph.get_num(results.data, 'Compliance'), name: "Score"}],
                        'column', 
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
    ob.observe(document.querySelector('#full_themes'));
    ob.observe(document.querySelector('#full_app_compliance'));
    ob.observe(document.querySelector('#simple_compliance_top10'));
    ob.observe(document.querySelector('#simple_compliance'));

    window.onkeydown = function () {   // if user navigates with keys charts shall load immediately
        for (let q=0; q<document.querySelectorAll("figure.chart > div:first-of-type:not([data-highcharts-chart])").length; q++) {
            loadchart(document.querySelectorAll("figure.chart > div:first-of-type:not([data-highcharts-chart])")[q].id);
        } 
    };
    
});