import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './useCountdown';
import styled from 'styled-components';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <Show>
      <div className="show-counter">
        <a
          href="https://tapasadhikary.com"
          target="_blank"
          rel="noopener noreferrer"
          className="countdown-link"
        >
          <div className="bigdays">
            <div className="days">
              <p className="amde">
                <DateTimeDisplay
                  value={days}
                  type={'Days'}
                  isDanger={days <= 3}
                />
              </p>
            </div>
          </div>
          <div className="hours">
            <p className="amde">
              {' '}
              <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
            </p>
          </div>
          <div className="minutes">
            <p className="amde">
              <DateTimeDisplay
                value={minutes}
                type={'Mins'}
                isDanger={false}
                className="minutevalue"
              />
            </p>
          </div>

          <div className="seconds">
            <p className="amde">
              <DateTimeDisplay
                value={seconds}
                type={'Seconds'}
                isDanger={false}
              />
            </p>
          </div>
        </a>
      </div>
    </Show>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;

const Show = styled.div`
  .show-counter .countdown-link {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.75rem;
    padding: 0.5rem;

    width: 400px;
    text-decoration: none;
    color: #000;
    margin-left: 95px;
    margin-top: 30px;
    margin-bottom: 80px;
    height: 150px;
  }
  @media only screen and (min-width: 360px) and (max-width: 370px) {
    .show-counter .countdown-link {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      font-size: 10px;
      line-height: 1.75rem;
      padding: 0.5rem;

      text-decoration: none;
      color: #000;
      background-color: white;
      margin-top: -10px;
      height: 150px;
      padding-left: 0px;
      margin-left: -60px;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 414px) {
    .show-counter .countdown-link {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      font-size: 10px;
      line-height: 1.75rem;
      padding: 0.5rem;

      text-decoration: none;
      color: #000;
      background-color: white;
      margin-top: -10px;
      height: 150px;
      padding-left: 0px;
      margin-left: -40px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    .show-counter .countdown-link {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      font-size: 10px;
      line-height: 1.75rem;
      padding: 0.5rem;

      text-decoration: none;
      color: #000;
      background-color: white;
      margin-top: -10px;
      height: 150px;
      padding-left: 0px;
      margin-left: -40px;
    }
  }

  .days {
    background-color: #4169e1;
    margin-right: 10px;
    width: 80px;
    color: white;
    padding-left: 0px;
    border-radius: 10px;
    height: 90px;
  }

  .hours {
    background-color: #4169e1;
    margin-right: 10px;
    width: 100px;
    color: white;
    padding-left: 0px;
    border-radius: 10px;
  }
  .minutes {
    margin-right: 10px;
    width: 100px;
    color: white;
    padding-left: 0px;
    border-radius: 10px;
    background-color: #4169e1;
  }
  .seconds {
    background-color: #4169e1;
    margin-right: 10px;
    width: 70px;
    width: 100px;
    color: white;
    padding-left: 20px;
    border-radius: 10px;
  }
`;
