import React from 'react'

const WeekWeatherList = ({weather}) => {

    
    return (
        <div>
           { weather.daily.map(day => <div>
                {day.temp.day}
            </div>
           )
            }
        </div>
    )
}

export default WeekWeatherList
