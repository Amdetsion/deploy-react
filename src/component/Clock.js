import React, { Fragment } from 'react';
import styled from 'styled-components';

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Timess>
      <Fragment>
        <section className="timer-container">
          <section className="timer">
            <div className="clock">
              <section>
                <p className="innertext">{timerDays}</p>
                <small>Days</small>
              </section>
              <span>:</span>
              <section>
                <p className="innertext">{timerHours}</p>
                <small>Hours</small>
              </section>{' '}
              <span>:</span>
              <section>
                <p className="innertext">{timerMinutes}</p>
                <small>Minutes</small>
              </section>{' '}
              <span>:</span>
              <section>
                <p className="innertext">{timerSeconds}</p>
                <small>Seconds</small>
              </section>
            </div>
          </section>
        </section>
      </Fragment>
    </Timess>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;

const Timess = styled.div`
  .innertext {
    color:red;
  }
  @media only screen and (max-width: 414px) {
    .innertext {
      font-size: 17px;
      color: red;
    }
  }
`;
