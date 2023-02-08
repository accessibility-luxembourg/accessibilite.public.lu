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
                        "Graphique 7. Réclamations reçues et solutions à court terme proposées", 
                        "complaints", 
                        [{data: Graph.get_num(results.data, 'Complaints'), name: "Réclamations", color: {patternIndex: 0}}, {data: Graph.get_num(results.data, 'Solution'), name: "Solutions à court terme proposées"}],
                        'bar', 
                        "", 
                        c_x, 
                        c_y,
                        true,
                        0.2,
                        'rgb(46, 117, 182)',
                        '{y}');
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
                        title: {text: "Raisons", x: -100}
                    };
                    let c_y = {
                        title: {
                            text: undefined
                        }
                    };
                    Graph.build_chart(
                        Highcharts,
                        "Graphique 8. Les cinq raisons principales de charge disproportionnée évoquées, en pourcentage", 
                        "burden", 
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
    ob.observe(document.querySelector('#complaints'));
    ob.observe(document.querySelector('#burden'));

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