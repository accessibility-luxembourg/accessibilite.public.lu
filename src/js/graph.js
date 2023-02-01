import Highcharts from 'highcharts';
import Annotations from 'highcharts/es-modules/Extensions/Annotations/Annotation.js';
Annotations(Highcharts);
import Exporting from 'highcharts/es-modules/Extensions/Exporting/Exporting.js';
Exporting(Highcharts);
import Exportdata from 'highcharts/es-modules/Extensions/ExportData/ExportData.js';
Exportdata(Highcharts);
import Accessibility from 'highcharts/es-modules/Accessibility/Accessibility.js';
Accessibility(Highcharts);
import Patternfill from 'highcharts/es-modules/Extensions/PatternFill.js';
Patternfill(Highcharts);
import Papa from "papaparse";


Highcharts.setOptions({                                                                            // highcharts french translations
    lang: {
        downloadCSV: "Télécharger au format CSV",
        downloadJPEG: "Télécharger au format JPEG",
        downloadPDF: "Télécharger au format PDF",
        downloadPNG: "Télécharger au format PNG",
        downloadSVG: "Télécharger au format SVG",
        downloadXLS: "Télécharger au format XLS",
        exitFullscreen: "Quitter le mode plein écran",
        printChart: "Imprimer le diagramme",
        viewData: "Voir les données en tableau",
        viewFullscreen: "Voir en mode plein écran",
        hideData: "Masquer le tableau",
        contextButtonTitle: "Menu contextuel du diagramme",
        accessibility: {
            axis: {
                rangeCategories: "Plage de données : {numCategories} catégories.",
                rangeFromTo: "La plage de données s'étend de {rangeFrom} à {rangeTo}.",
                xAxisDescriptionSingular: "L'axe des ordonnées présente les {names[0]}. {ranges[0]}",
                yAxisDescriptionSingular: "L'axe des abscisses présente les Scores"
            },
            chartTypes: {
                barSingle: "Diagramme en barres avec {numPoints} {#plural(numPoints, barres, barre)}.",
                columnSingle: "Diagramme en colonnes avec {numPoints} {#plural(numPoints, barres, barre)}."
            },
            table: {
                viewAsDataTableButtonText: "Afficher en tableau"
            },
            exporting: {
                menuButtonLabel: "Ouvrir le menu du diagramme",
                chartMenuLabel: "Menu"
            },
            screenReaderSection: {
                annotations: {
                    heading: "Sommaire des annotations"
                },
                endOfChartMarker: "Fin du diagramme interactif"
            }
        }
    }
});


const prefers_reduced_motion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;      // chart animation preferences
let ch_animation = true;
if (prefers_reduced_motion) {ch_animation = false;}


function get_cat (elt, col) {                                                                      // generic function returning an array of categories
    let data = [];
    for (i = 0; i < elt.length; i++) {
            data.push(elt[i][col]);
    };
    return data;
}


function get_num (elt, col) {                                                                      // generic function returning an array of numbers
    let data = [];
    for (i = 0; i < elt.length; i++) {
        data.push(Math.round(elt[i][col].replace(',', '.').replace("%", "")));
    };
    return data;
}


function isScrolledIntoView (elt) {                                                                // generic function returning position of charts                      
    let isVisible = false;
    if (prefers_reduced_motion || (elt.getBoundingClientRect().top < 600 && !elt.hasAttribute("data-highcharts-chart"))) {isVisible = true;}
    return isVisible;
}


document.addEventListener('DOMContentLoaded', function () {                                        // create description div linked to charts for screen readers
    for (d=0; d<document.getElementsByTagName("details").length; d++) {
        let accessible_div = document.createElement("div");
        accessible_div.setAttribute("class", "highcharts-description");
        accessible_div.setAttribute("style", "display: none");
        accessible_div.innerHTML = document.getElementsByTagName("details")[d].getElementsByTagName("p")[0].innerHTML;
        let parentDiv = document.getElementsByTagName("details")[d].parentNode;
        parentDiv.insertBefore(accessible_div, document.getElementsByTagName("details")[d]);
    }
});


function build_chart (ch_title, ch_dest, ch_data, ch_type, ch_annotations, ch_xaxis, ch_yaxis, ch_legend, ch_gpadding, ch_label_bgColor, ch_format) {
    const chart = Highcharts.chart(ch_dest, {
        chart: {
            type: ch_type
        },
        accessibility: {
            point: {
                valueDescriptionFormat: '{xDescription} {separator} {point.y} %',
                valueDecimals: 1
            }
        },
        credits: false,
        colors:['rgb(46, 117, 182)'],
        title: {
            text: ch_title,
            style: {
                fontFamily: "Fira Sans",
                fontWeight: 400,
                fontSize: 16
            }
        },
        legend: {
            enabled: ch_legend
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            series: {
                pointPadding: 0,
                groupPadding: ch_gpadding,
                borderWidth: 0,
                maxPointWidth: 40,
                animation: ch_animation,
                dataLabels: {
                    enabled: true,
                    inside: true,
                    format: ch_format,
                    fontSize: '8px',
                    style:{
                        fontWeight: 'normal',
                        textOutline: 'none',
                    }
                }
            },
            column: {
                dataLabels: {
                    color: 'white',
                    verticalAlign: 'bottom',
                    align: 'center'
                }
            },
            bar: {
                dataLabels: {
                    color: 'white',
                    align: 'left',
                    backgroundColor: ch_label_bgColor
                }
            }
        },
        xAxis: ch_xaxis,
        yAxis: ch_yaxis,
        series: ch_data,
        annotations: ch_annotations,
        navigation: {
            menuItemStyle: {
                fontFamily: 'Fira Sans',
            }
        }
    });
}


/* todo */

window.onscroll = function () {                                                                    // load charts when entering viewport
    if (isScrolledIntoView(document.getElementById('full_compliance'))) {
        Papa.parse('data/full_compliance.csv', {
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
                    categories: get_cat(results.data, 'Site'),
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
                build_chart(
                    "Graphique 1. Niveau de conformité des sites audités en 2022, en pourcentage", // char title
                    "full_compliance",                                                             // div ID
                    [{data: get_num(results.data, 'Score'), name: "Score"}],                       // dataset(s)
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
    }

    if (isScrolledIntoView(document.getElementById('full_themes'))) {
        Papa.parse('data/full_themes.csv', {
            download: true,
            header: true,
            complete: results => {
                let c_x = {
                    categories: get_cat(results.data, 'Theme'),
                    title: {text: "Catégories", x: -100}
                };
                let c_y = {
                    title: {
                        text: undefined
                    }
                };
                build_chart(
                    "Graphique 2. Répartition des non-conformités, en pourcentage", 
                    "full_themes", 
                    [{data: get_num(results.data, 'Score'), name: "Score"}],
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
    }

    if (isScrolledIntoView(document.getElementById('simple_themes'))) {
        Papa.parse('data/simple_themes.csv', {
            download: true,
            header: true,
            complete: results => {
                let c_x = {
                    categories: get_cat(results.data, 'Theme'),
                    title: {text: "Catégories", x: -100}
                };
                let c_y = {
                    title: {
                        text: undefined
                    }
                };
                build_chart(
                    "Graphique 3. Répartition des non-conformités, en pourcentage", 
                    "simple_themes", 
                    [{data: get_num(results.data, 'Score'), name: "Score"}],
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
    }

    if (isScrolledIntoView(document.getElementById('simple_compliance'))) {
        Papa.parse('data/simple_compliance.csv', {
            download: true,
            header: true,
            complete: results => {
                let c_x = {
                    categories: get_cat(results.data, 'Admin_level'),
                    title: {text: "Domaine administratif", y: 100}
                };
                let c_y = {
                    title: {
                        text: undefined
                    }
                };
                build_chart(
                    "Graphique 4. Niveau de conformité, par domaine administratif, en pourcentage", 
                    "simple_compliance", 
                    [{data: get_num(results.data, 'Compliance'), name: "Score"}],
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
    }

    if (isScrolledIntoView(document.getElementById('full_app_compliance'))) {
        Papa.parse('data/full_app_compliance.csv', {
            download: true,
            header: true,
            complete: results => {
                let c_x = {
                    categories: get_cat(results.data, 'App'),
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
                build_chart(
                    "Graphique 5. Niveau de conformité des apps auditées en 2022, en pourcentage", 
                    "full_app_compliance", 
                    [{data: get_num(results.data, 'Score'), name: "Score"}],
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
    }

    if (isScrolledIntoView(document.getElementById('full_app_themes'))) {
        Papa.parse('data/full_app_themes.csv', {
            download: true,
            header: true,
            complete: results => {
                let c_x = {
                    categories: get_cat(results.data, 'Theme'),
                    title: {text: "Thématique", x: -100}
                };
                let c_y = {
                    title: {
                        text: undefined
                    }
                };
                build_chart(
                    "Graphique 6. Répartition des non-conformités sur les apps, en pourcentage", 
                    "full_app_themes", 
                    [{data: get_num(results.data, '2021'), name: "2021", color: {patternIndex: 0}}, {data: get_num(results.data, '2022'), name: "2022"}],
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
    }

    if (isScrolledIntoView(document.getElementById('complaints'))) {
        Papa.parse('data/complaints.csv', {
            download: true,
            header: true,
            complete: results => {
                let c_x = {
                    categories: get_cat(results.data, 'Date'),
                    title: {text: "Date", x: -100}
                };
                let c_y = {
                    title: {
                        text: undefined
                    }
                };
                build_chart(
                    "Graphique 7. Réclamations reçues et solutions à court terme proposées", 
                    "complaints", 
                    [{data: get_num(results.data, 'Complaints'), name: "Réclamations", color: {patternIndex: 0}}, {data: get_num(results.data, 'Solution'), name: "Solutions à court terme proposées"}],
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
    }

    if (isScrolledIntoView(document.getElementById('burden'))) {
        Papa.parse('data/burden.csv', {
            download: true,
            header: true,
            complete: results => {
                let c_x = {
                    categories: get_cat(results.data, 'Theme'),
                    title: {text: "Raisons", x: -100}
                };
                let c_y = {
                    title: {
                        text: undefined
                    }
                };
                build_chart(
                    "Graphique 8. Les cinq raisons principales de charge disproportionnée évoquées, en pourcentage", 
                    "burden", 
                    [{data: get_num(results.data, '2021'), name: "2021", color: {patternIndex: 0}}, {data: get_num(results.data, '2022'), name: "2022"}],
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
    }
}
