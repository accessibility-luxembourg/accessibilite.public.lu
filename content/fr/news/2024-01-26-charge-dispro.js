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
        "title": "Graphique 1. Niveau de conformité des sites audités en 2023"
    },
    "en": {
      "categories": "Categories",
      "title": "Graph 1. Level of compliance of audited sites in 2023"
    },
    "de": {
      "categories": "Categories",
      "title": "Graph 1. Level of compliance of audited sites in 2023"
    }
}

function loadchart (chartid) {                                                                     // load charts when entering viewport
    switch (chartid) {
        case "dispro":
            Papa.parse('datasource/2024-01-charge-dispro.csv', {
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
                        max: 40,
                    };
                    Graph.build_chart(
                        Highcharts,
                        graph_translations[Graph.chart_lang].title,                 // char title
                        "dispro",                                                                      // div ID
                        [{data: Graph.get_num(results.data, 'Score'), name: "Score"}],                 // dataset(s)
                        'bar',                                                                         // chart type
                        '',                                                                            // annotations
                        c_x,                                                                           // xAxis
                        c_y,                                                                           // yAxis 
                        false,                                                                         // show legend
                        0.2,                                                                           // group padding
                        'transparent',                                                                 // label background color
                        '{y}%');                                                                       // label format
                }
            });
        break;
    }
}

document.addEventListener('DOMContentLoaded', function () {                 // create description div linked to charts for screen readers

    const ob = new IntersectionObserver(Graph.obCallback(loadchart), {threshold: [0.01, 0.3]});
    ob.observe(document.querySelector('#dispro'));

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