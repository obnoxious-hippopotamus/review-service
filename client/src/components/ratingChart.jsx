import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const RatingChart = props => {

    let star1 = 0, star2=0, star3=0, star4=0, star5 = 0;

    //get each star ratings
    const getChartData = () => {
        props.reviews.forEach(review => {
            // divide into stars
            let star = review.rating;
            if (star === 1) {
                star1 = star1 + 1;
            } else if (star === 2) {
                star2 = star2 + 1;
            } else if (star === 3) {
                star3 = star3 + 1;
            } else if (star === 4) {
                star4 = star4 + 1;
            } else if (star === 5) {
                star5 = star5 + 1;
            } else {
                console.log('rating not included');
            }
        });
    };

    //run func
    getChartData();

    const options = {
        responsive: true,
        legend: {
            display: false
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: false,
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                    beginAtZero: true,
                    max: props.reviews.length
                },
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                    beginAtZero: true,
                    steps: 1,
                    stepValue: 1,
                    max: 1
                },
            }]
        },
        title: {
            display: false,
        }
    };

    const data = {
        labels: ['5 star', '4 star', '3 star', '2 star', '1 star'],
        datasets: [
          {
            barThickness: 15,
            backgroundColor: 'rgb(253,157,7)',
            data: [star5, star4, star3, star2, star1]
          }
        ]
      };
    
    return (
        <div className="chartArea">
            <div className="flex">
                <HorizontalBar
                data={data}
                options={options}
                height={100}
                />
                <div>
                <p className="blue percentage">{Math.round(star5 / props.reviews.length * 100)}%</p>
                <p className="blue percentage">{Math.round(star4 / props.reviews.length * 100)}%</p>
                <p className="blue percentage">{Math.round(star3 / props.reviews.length * 100)}%</p>
                <p className="blue percentage">{Math.round(star2 / props.reviews.length * 100)}%</p>
                <p className="blue percentage">{Math.round(star1 / props.reviews.length * 100)}%</p>
                </div>
                
            </div>
            <p className="blue">How does Amazon calculate star ratings?</p>
        </div>
    )
};

export default RatingChart;