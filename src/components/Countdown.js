import React, { useState, useEffect } from 'react';

function Countdown() {
    const targetDate = new Date('2023-08-19').getTime();

    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(interval);
                setTime({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTime({
                    days,
                    hours,
                    minutes,
                    seconds
                });
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [targetDate]);

    return (
        <div className="font-mono">
            {String(time.days).padStart(2, '0')} :{' '}
            {String(time.hours).padStart(2, '0')} :{' '}
            {String(time.minutes).padStart(2, '0')} :{' '}
            {String(time.seconds).padStart(2, '0')}
        </div>
    );
}

export default Countdown;
