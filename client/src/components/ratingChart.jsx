import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const RatingChart = props => {

    let star1=0, star2=0, star3=0, star4=0, star5=0;

    //get each star ratings
    const getChartData = () => {
        props.reviews.forEach(review => {
            // divide into stars
            if (review.rating >= 1 && review.rating < 2) {
                star1++;
            }
        })

        console.log(star1);
    };

    //run func
    getChartData();

    const options = {
        responsive: true,
        legend: {
            position: 'bottom',
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: true,
                ticks: {
                    beginAtZero: true,
                    steps: 18,
                    stepValue: 8,
                    max: props.reviews.length
                }
                }],
            yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true,
                        steps: 1,
                        stepValue: 1,
                        max: 1
                    }
                }]
        },
        title: {
            display: false,
        }
    };

    const data = {
        labels: ['5 star'],
        datasets: [
          {
            barThickness: 15,
            backgroundColor: 'rgb(253,157,7)',
            data: [5]
          }
        ]
      };
    
    return (
        <div>
            <HorizontalBar
              data={data}
              options={options}
              height={70}
            />
            <p className="blue">How does Amazon calculate star ratings?</p>
        </div>
    )
};

export default RatingChart;