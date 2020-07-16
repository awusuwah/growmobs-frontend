import React from "react";

/**
 *
 */
const StageStats = ({
  preId,
  minTemp,
  maxTemp,
  minHumid,
  maxHumid,
  days,
  setMinTemp,
  setMaxTemp,
  setMinHumid,
  setMaxHumid,
  setDays,
}) => {
  return (
    <div>
      <div className="field">
        <label htmlFor={`${preId}-minTemp`} className="label">
          Min. Temperature
        </label>
        <div className="control has-icons-left">
          <input
            type="number"
            id={`${preId}-minTemp`}
            className="input"
            placeholder="22.4"
            value={minTemp}
            onChange={(event) => setMinTemp(event.currentTarget.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-temperature-low"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${preId}-maxTemp`} className="label">
          Max. Temperature
        </label>
        <div className="control has-icons-left">
          <input
            type="number"
            id={`${preId}-maxTemp`}
            className="input"
            placeholder="42.3"
            value={maxTemp}
            onChange={(event) => setMaxTemp(event.currentTarget.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-temperature-high"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${preId}-minHumid`} className="label">
          Min. Humidity
        </label>
        <div className="control has-icons-left">
          <input
            type="number"
            id={`${preId}-minHumid`}
            className="input"
            placeholder="15"
            value={minHumid}
            onChange={(event) => setMinHumid(event.currentTarget.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-tint"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${preId}-maxHumid`} className="label">
          Max. Humidity
        </label>
        <div className="control has-icons-left">
          <input
            type="number"
            id={`${preId}-maxHumid`}
            className="input"
            placeholder="43"
            value={maxHumid}
            onChange={(event) => setMaxHumid(event.currentTarget.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-tint"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${preId}-days`} className="label">
          Duration in Days
        </label>
        <div className="control has-icons-left">
          <input
            type="number"
            id={`${preId}-days`}
            className="input"
            placeholder="21"
            value={days}
            onChange={(event) => setDays(event.currentTarget.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-hourglass-end"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default StageStats;
