
$(document).ready(function(){
    const selectElement = document.getElementById("nameFanpage")
    selectElement.addEventListener('change', (event) => {
        // delete all data in chart if exist
        // $("#chartjs-dashboard-line").remove()
        // $("#chartjs-dashboard-pie").remove()

        nameFanpage = event.target.value
        if(nameFanpage == "Thêm Fanpage Cần Quản Lý"){
            window.location.href = "add_fanpage.html"
        }
        data_retrivie = {
            name_fb: nameFanpage
        }
        $.ajax({
            url: "http://localhost:4040/fp_data",
            type: "POST",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            data: JSON.stringify(data_retrivie),
            contentType: 'application/json',
            success: function(data) {
                console.log(data)
                // text H1 have id=numFollower is number of follower
                if (data.name_fb=="Sơn Tùng MTP"){
                    document.getElementById("rateFollower").innerHTML = "0.65%"
                    document.getElementById("rateComment").innerHTML = "5.26%"
                    document.getElementById("rateLike").innerHTML = "-12.5%"
                    document.getElementById("ratePost").innerHTML = "-2.64%"
                    // add data to chart have id chartjs-dashboard-pie
                    list_like = [139520, 83964, 46430, 55408, 53093, 120772, 195329, 164111, 211384, 67518]
                    var ctx = document.getElementById("chartjs-dashboard-line").getContext("2d");
                    var gradient = ctx.createLinearGradient(0, 0, 0, 225);
                    gradient.addColorStop(0, "rgba(215, 227, 244, 1)");
                    gradient.addColorStop(1, "rgba(215, 227, 244, 0)");
                    new Chart(document.getElementById("chartjs-dashboard-line"), {
                        type: "line",
                        data: {
                            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                            datasets: [{
                                label: "Like",
                                fill: true,
                                backgroundColor: gradient,
                                borderColor: window.theme.primary,
                                data: list_like
                            }]
                        },
                        options: {
                            maintainAspectRatio: false,
                            legend: {
                                display: false
                            },
                            tooltips: {
                                intersect: false
                            },
                            hover: {
                                intersect: true
                            },
                            plugins: {
                                filler: {
                                    propagate: false
                                }
                            },
                            scales: {
                                xAxes: [{
                                    reverse: true,
                                    gridLines: {
                                        color: "rgba(0,0,0,0.0)"
                                    }
                                }],
                                yAxes: [{
                                    ticks: {
                                        stepSize: 1000
                                    },
                                    display: true,
                                    borderDash: [3, 3],
                                    gridLines: {
                                        color: "rgba(0,0,0,0.0)"
                                    }
                                }]
                            }
                        }
                    });
                    
                }
                else if (data.name_fb=="Jack - J97"){
                    document.getElementById("rateFollower").innerHTML = "0.42%"
                    document.getElementById("rateComment").innerHTML = "1.26%"
                    document.getElementById("rateLike").innerHTML = "-0.22%"
                    document.getElementById("ratePost").innerHTML = "-1.65%"

                    list_like = [139520, 48653, 29244, 31161, 31951, 37673, 54890, 19048, 23212, 23963]
                    var ctx = document.getElementById("chartjs-dashboard-line").getContext("2d");
                    var gradient = ctx.createLinearGradient(0, 0, 0, 225);
                    gradient.addColorStop(0, "rgba(215, 227, 244, 1)");
                    gradient.addColorStop(1, "rgba(215, 227, 244, 0)");
                    new Chart(document.getElementById("chartjs-dashboard-line"), {
                        type: "line",
                        data: {
                            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                            datasets: [{
                                label: "Like",
                                fill: true,
                                backgroundColor: gradient,
                                borderColor: window.theme.primary,
                                data: list_like
                            }]
                        },
                        options: {
                            maintainAspectRatio: false,
                            legend: {
                                display: false
                            },
                            tooltips: {
                                intersect: false
                            },
                            hover: {
                                intersect: true
                            },
                            plugins: {
                                filler: {
                                    propagate: false
                                }
                            },
                            scales: {
                                xAxes: [{
                                    reverse: true,
                                    gridLines: {
                                        color: "rgba(0,0,0,0.0)"
                                    }
                                }],
                                yAxes: [{
                                    ticks: {
                                        stepSize: 1000
                                    },
                                    display: true,
                                    borderDash: [3, 3],
                                    gridLines: {
                                        color: "rgba(0,0,0,0.0)"
                                    }
                                }]
                            }
                        }
                    });
                    
                }
                document.getElementById("numFollower").innerHTML = data.follower
                document.getElementById("numComment").innerHTML = data.total_cmts
                document.getElementById("numLike").innerHTML = data.total_likes
                document.getElementById("numPost").innerHTML = data.num_post
                document.getElementById("ratePos").innerHTML = data.rate_pos
                document.getElementById("rateNeg").innerHTML = data.rate_neg
                document.getElementById("rateNeu").innerHTML = data.rate_neu
                // add data to chart have id chartjs-dashboard-pie
                list_sentiment = [data.rate_pos, data.rate_neg, data.rate_neu]
                new Chart(document.getElementById("chartjs-dashboard-pie"), {
                    type: "pie",
                    data: {
                        labels: ["Tích Cực", "Tiêu cực", "Trung Lập"],
                        datasets: [{
                            data: list_sentiment,
                            backgroundColor: [
                                window.theme.success,
                                window.theme.danger,
                                window.theme.warning
                            ],
                            borderWidth: 5
                        }]
                    },
                    options: {
                        responsive: !window.MSInputMethodContext,
                        maintainAspectRatio: false,
                        legend: {
                            display: false
                        },
                        cutoutPercentage: 75
                    }
                });
                // time
                document.addEventListener("DOMContentLoaded", function() {
                    var date = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);
                    var defaultDate = date.getUTCFullYear() + "-" + (date.getUTCMonth() + 1) + "-" + date.getUTCDate();
                    document.getElementById("datetimepicker-dashboard").flatpickr({
                        inline: true,
                        prevArrow: "<span title=\"Previous month\">&laquo;</span>",
                        nextArrow: "<span title=\"Next month\">&raquo;</span>",
                        defaultDate: defaultDate
                    });
                });
            },
            error: function(err) {
                console.log(err)
            }
            
        })
    });
});


