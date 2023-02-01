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