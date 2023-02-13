'use strict';
import Highcharts from 'highcharts/es-modules/masters/highcharts.src.js';
import 'highcharts/es-modules/masters/modules/annotations.src.js';
import 'highcharts/es-modules/masters/modules/exporting.src.js';
import 'highcharts/es-modules/masters/modules/export-data.src.js';
import 'highcharts/es-modules/masters/modules/accessibility.src.js';
import 'highcharts/es-modules/masters/modules/pattern-fill.src.js';
import Papa from 'papaparse';
import Graph from '../../src/js/graph.js';
document.querySelector('.main-container').classList.add('full_width');

Highcharts.setOptions({                                                                            // highcharts french translations
    lang: Graph.Highcharts_translations
});


function loadchart (chartid) {                                                                     // load charts when entering viewport
    switch (chartid) {
        case "full_compliance":
            Papa.parse('datasource/full_compliance.csv', {
                download: true,
                header: true,
                complete: results => {
                    let c_annotations = [{
                        labels: [{
                            point: { x: 450, y: 50,  yAxis: 0 },
                            text: 'Conformité<br>partielle',
                            accessibility: {
                                description: "La conformité partielle est atteinte à partir de 50%."
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
                        plotLines: [{
                            color: 'rgb(197, 90, 17)', 
                            dashStyle: 'solid', 
                            value: 50, 
                            width: 3
                          }]
                    };
                    Graph.build_chart(
                        Highcharts,
                        "Graphique 1. Niveau de conformité des sites audités en 2022, en pourcentage", // char title
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
            Papa.parse('datasource/full_themes.csv', {
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
                        }
                    };
                    Graph.build_chart(
                        Highcharts,
                        "Graphique 2. Répartition des non-conformités, en pourcentage", 
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
            Papa.parse('datasource/simple_themes.csv', {
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
                        }
                    };
                    Graph.build_chart(
                        Highcharts,
                        "Graphique 3. Répartition des non-conformités, en pourcentage", 
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
            Papa.parse('datasource/simple_compliance.csv', {
                download: true,
                header: true,
                complete: results => {
                    let c_x = {
                        categories: Graph.get_cat(results.data, 'Admin_level'),
                        title: {text: "Domaine administratif", y: 100}
                    };
                    let c_y = {
                        title: {
                            text: undefined
                        }
                    };
                    Graph.build_chart(
                        Highcharts,
                        "Graphique 4. Niveau de conformité, par domaine administratif, en pourcentage", 
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
            Papa.parse('datasource/full_app_compliance.csv', {
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
                        plotLines: [{
                            color: 'rgb(197, 90, 17)', 
                            dashStyle: 'solid', 
                            value: 50, 
                            width: 3
                          }]
                    };
                    Graph.build_chart(
                        Highcharts,
                        "Graphique 5. Niveau de conformité des apps auditées en 2022, en pourcentage", 
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
            Papa.parse('datasource/full_app_themes.csv', {
                download: true,
                header: true,
                complete: results => {
                    let c_x = {
                        categories: Graph.get_cat(results.data, 'Theme'),
                        title: {text: "Thématique", x: -100}
                    };
                    let c_y = {
                        title: {
                            text: undefined
                        }
                    };
                    Graph.build_chart(
                        Highcharts,
                        "Graphique 6. Répartition des non-conformités sur les apps, en pourcentage", 
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

document.addEventListener('DOMContentLoaded', function () {                                        // create description div linked to charts for screen readers
    const ob = new IntersectionObserver(Graph.obCallback(loadchart), {threshold: 0.3});
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
    
    for (let q=0; q<document.querySelectorAll("figure.chart > div:first-of-type").length; q++) {
        document.querySelectorAll("figure.chart > div:first-of-type")[q].innerHTML = "";
    }  
    
    for (let d=0; d<document.getElementsByTagName("details").length; d++) {
        let accessible_div = document.createElement("div");
        accessible_div.setAttribute("class", "highcharts-description");
        accessible_div.setAttribute("style", "display: none");
        accessible_div.innerHTML = document.getElementsByTagName("details")[d].getElementsByTagName("p")[0].innerHTML;
        let parentDiv = document.getElementsByTagName("details")[d].parentNode;
        parentDiv.insertBefore(accessible_div, document.getElementsByTagName("details")[d]);
    }
});