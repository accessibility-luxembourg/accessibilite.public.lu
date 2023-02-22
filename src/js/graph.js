const Highcharts_translations =  {
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


function get_cat (elt, col) {                                                                      // generic function returning an array of categories
    let data = [];
    for (let i = 0; i < elt.length; i++) {
            data.push(elt[i][col]);
    };
    return data;
}


function get_num (elt, col) {                                                                      // generic function returning an array of numbers
    let data = [];
    for (let i = 0; i < elt.length; i++) {
        data.push(Math.round(elt[i][col].replace(',', '.').replace("%", "")));
    };
    return data;
}


function obCallback (loadchart) {
    return function (payload) {
        for (let entry of payload) {
            if (!entry.target.hasAttribute("data-highcharts-chart") && entry.intersectionRatio >= 0.01) {
                entry.target.innerHTML = "";
            }
            if (!entry.target.hasAttribute("data-highcharts-chart") && entry.intersectionRatio >= 0.3) {
                loadchart(entry.target.id);
            }
        }
    }
}


function build_chart (highcharts, ch_title, ch_dest, ch_data, ch_type, ch_annotations, ch_xaxis, ch_yaxis, ch_legend, ch_gpadding, ch_label_bgColor, ch_format) {
    const ch_height = document.getElementById(ch_dest).getBoundingClientRect().height;
    const ch_animation = ! window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const chart = highcharts.chart(ch_dest, {
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
        exporting: {
            sourceHeight: ch_height
        },
        navigation: {
            menuItemStyle: {
                fontFamily: 'Fira Sans',
            }
        }
    });
}


export default { 'Highcharts_translations': Highcharts_translations, 'get_cat':get_cat, 'get_num': get_num, 'obCallback': obCallback, 'build_chart': build_chart }