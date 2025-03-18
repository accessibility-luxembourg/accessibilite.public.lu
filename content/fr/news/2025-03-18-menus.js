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
        "category": "Catégorie",
        "menu": {
            "title": "Graphique 1. Score d’accessibilité de différentes catégories de sites de la campagne d’audit 2024, en %"
        }
    },
    "en": {
        "category": "Category",       
        "menu": {
            "title": "Graph 1. Accessibility score of different categories of sites from the 2024 audit campaign, as a percentage"
        }
    }
}

function loadchart (chartid) {                                                                     // load charts when entering viewport
    switch (chartid) {
        case "menu_compliance":
            Papa.parse('datasource/2025-03-menu.csv', {
                download: true,
                header: true,
                complete: results => {
                    let c_x = {
                        categories: Graph.get_cat(results.data, 'Category'),
                        title: {text: graph_translations[Graph.chart_lang].category, y: 100}
                    };
                    let c_y = {
                        title: {
                            text: undefined
                        },
                        max: 80
                    };
                    Graph.build_chart(
                        Highcharts,
                        graph_translations[Graph.chart_lang].menu.title, 
                        "menu_compliance", 
                        [{data: Graph.get_num(results.data, 'Score'), name: "Score"}],
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
    ob.observe(document.querySelector('#menu_compliance'));

    window.onkeydown = function () {   // if user navigates with keys charts shall load immediately
        for (let q=0; q<document.querySelectorAll("figure.chart > div:first-of-type:not([data-highcharts-chart])").length; q++) {
            loadchart(document.querySelectorAll("figure.chart > div:first-of-type:not([data-highcharts-chart])")[q].id);
        } 
    };
    
});