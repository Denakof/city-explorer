import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <>
                <div>

                    {this.props.days.map(day => {
                        return  <>{day.date} <>
                            {day.description}</> </>


                    })}        </div>
            </>
        )
    }



}

export default Weather;

