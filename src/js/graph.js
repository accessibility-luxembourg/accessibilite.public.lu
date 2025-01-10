let Highcharts_translations = {};

let chart_lang = document.querySelector('html').getAttribute('lang').substring(0,2);

if (chart_lang == "fr") {
    Highcharts_translations =  {
        accessibility: {
            axis: {
                rangeCategories: "Plage de données : {numCategories} catégories.",
                rangeFromTo: "La plage de données s'étend de {rangeFrom} à {rangeTo}.",
                xAxisDescriptionSingular: "",
                yAxisDescriptionSingular: ""
            },
            chartTypes: {
                barSingle: "",
                barMultiple: "",
                defaultSingle: "",
                defaultMultiple: "",
                columnSingle: "",
                columnMultiple: ""
            },
            legend: {
                legendLabelNoTitle: "Afficher ou masquer une donnée",
                legendItem: "Afficher {itemName}"
            },
            series: {
                summary: {
                    bar: "",
                    column: "",
                    default: ""
                }
            },
            table: {
                viewAsDataTableButtonText: "Afficher en tableau",
                tableSummary: "Affichage des données du graphique en tableau"
            },
            exporting: {
                menuButtonLabel: "Ouvrir le menu du diagramme",
                chartMenuLabel: "Menu"
            },
            screenReaderSection: {
                annotations: {
                    heading: "Sommaire des annotations"
                },
                endOfChartMarker: ""
            },
            svgContainerLabel: '',
            chartContainerLabel: ''
        }
    }
}

if (chart_lang == "en") {
    Highcharts_translations =  {
        accessibility: {
            axis: {
                xAxisDescriptionSingular: "",
                yAxisDescriptionSingular: ""
            },
            chartTypes: {
                barSingle: "",
                barMultiple: "",
                defaultSingle: "",
                defaultMultiple: "",
                columnSingle: "",
                columnMultiple: ""
            },
            series: {
                summary: {
                    bar: "",
                    column: "",
                    default: ""
                }
            },
            screenReaderSection: {
                endOfChartMarker: ""
            },
            svgContainerLabel: '',
            chartContainerLabel: ''
        }
    }
}


function replaceTableDesc(H, ch_dest) {
    H.wrap(H.Chart.prototype, 'toggleDataTable', function(proceed, show) {
      show = H.pick(show, !this.isDataTableVisible);
      // Create the div
      const createContainer = show && !this.dataTableDiv;
      if (createContainer) {
        this.dataTableDiv = document.getElementById(ch_dest).parentElement.querySelector('.highcharts-data-table');
      }
      // Toggle the visibility
      if (this.dataTableDiv) {
        const style = this.dataTableDiv.style,
          oldDisplay = style.display;
        style.display = show ? 'block' : 'none';
        // Generate the data table
        if (show) {
          this.dataTableDiv.innerHTML = H.AST.emptyHTML;
          const ast = new H.AST([this.getTableAST()]);
          ast.addToDOM(this.dataTableDiv);
          H.fireEvent(this, 'afterViewData', {
            element: this.dataTableDiv,
            wasHidden: createContainer || oldDisplay !== style.display
          });
        }
      }
    });
};


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


function build_chart (highcharts, ch_title, ch_dest, ch_data, ch_type, ch_annotations, ch_xaxis, ch_yaxis, ch_legend, ch_gpadding, ch_label_bgColor, ch_stacking, ch_heading=3) {
    replaceTableDesc(highcharts,ch_dest);
    highcharts.AST.allowedAttributes.push('onfocus', 'onclick', 'onblur');
    const ch_height = document.getElementById(ch_dest).getBoundingClientRect().height;
    const ch_animation = ! window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let newSkipLink = "Passer à la description du graphique";
    if (document.querySelector('html').getAttribute('lang') === "en") {newSkipLink = "Skip to the chart description";}

    const chart = highcharts.chart(ch_dest, {
        chart: {
            type: ch_type,
            events: {
                render() {
                    // HOTFIX for the jump when navigating with the keyboard on charts with a legend
                    // the problem appears when the page is already scrolled and the page loads, then the top css attribute gets a wrong value
                    // examples of articles with a chart containing a legend:
                    // /fr/news/2023-02-24-complaints2022.html
                    // /fr/news/2023-04-28-des-pdf-majoritairement-inaccessibles
                    setTimeout(() => {
                        document.querySelectorAll('.highcharts-a11y-proxy-button').forEach((button) => {
                            button.style.top = 0;
                        });
                    }, 250);
                }
            }
        },
        accessibility: {
            point: {
                valueDescriptionFormat: '{xDescription} {separator} {point.y}',
                valueDecimals: 1
            },
            screenReaderSection: {
                beforeChartFormat: '<h'+ ch_heading +'>{chartTitle}</h' + ch_heading + '><div><button onfocus="document.getElementById(\''+ ch_dest +'\').querySelector(\'.highcharts-subtitle\').style.opacity = 1" onblur="document.getElementById(\''+ ch_dest +'\').querySelector(\'.highcharts-subtitle\').style.opacity = 0" onclick="document.getElementById(\''+ ch_dest + '\').parentNode.querySelector(\'summary\').focus()" class="skipchart">'+ newSkipLink +'</button></div><div>{xAxisDescription}</div><div>{yAxisDescription}</div><div>{annotationsTitle}{annotationsList}</div>'
            }
        },
        credits: false,
        colors:['rgb(46, 117, 182)'],
        title: {
            text: ch_title,
            style: {
                fontFamily: "Fira Sans",
                fontWeight: 400,
                fontSize: '16px'
            }
        },
        subtitle: {
            useHTML: true,
            text: '<button style="border: 1px solid black; background: none; padding: 0.5em; cursor: pointer" onclick="document.getElementById(\''+ ch_dest + '\').parentNode.querySelector(\'summary\').focus()">'+ newSkipLink +'</button>',
            style: {
                opacity: 0
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
                stacking: ch_stacking,
                animation: ch_animation,
                dataLabels: {
                    formatter: function() {
                        if (this.y) {
                            return this.y;
                        }
                    },
                    enabled: true,
                    inside: true,
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
        },
        exporting: {
            enabled: false, // désactive le menu burger
            showTable: true
        }
    });
}


export default { 'Highcharts_translations': Highcharts_translations, 'replaceTableDesc': replaceTableDesc, 'get_cat': get_cat, 'get_num': get_num, 'obCallback': obCallback, 'build_chart': build_chart, 'chart_lang': chart_lang }