import React from 'react'

const Display = ({days,hours,minutes,seconds}) => {
    return (
        <div>
            {/* <h1>Time left till the Race</h1> */}
            <table>
                <tbody>
                    <tr>
                        <th>{days}</th>&nbsp;&nbsp;
                        <th>{hours}</th>&nbsp;&nbsp;
                        <th>{minutes}</th>&nbsp;&nbsp;
                        <th>{seconds}</th>&nbsp;&nbsp;
                    </tr>
                    <tr>
                        <td>DAYS</td>&nbsp;&nbsp;
                        <td>HOURS</td>&nbsp;&nbsp;
                        <td>MINUTES</td>&nbsp;&nbsp;
                        <td>SECONDS</td>&nbsp;&nbsp;
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Display