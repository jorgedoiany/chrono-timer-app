import React, { Fragment } from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <div className="clock">
            <section>
              <p>{timerDays}</p>
              <small>DAYS</small>
            </section>
            <section>
              <p>{timerHours}</p>
              <small>HOURS</small>
            </section>
            {""}
            <section>
              <p>{timerMinutes}</p>
              <small>MINUTES</small>
            </section>
            {""}
            <section>
              <p>{timerSeconds}</p>
              <small>SECONDS</small>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

Clock.defaultProps = {
  timerDays: 0,
  timerHours: 0,
  timerMinutes: 0,
  timerSeconds: 0,
};

export default Clock;
