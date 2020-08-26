import React from "react";
import cn from "classnames";

/**
 * A small piece of a form to enter the different values for the different growing stages.
 *
 * @author Marko Maric
 * @version 1.0
 */
const StageStats = ({ stage, stageValue, stageValidation, updateStageValues, updateStageValidation }) => {
  return (
    <div>
      <div className="field">
        <label htmlFor={`${stage}-minTemp`} className="label">
          Min. Temperature
        </label>
        <div className="control has-icons-left">
          <input
            type="number"
            id={`${stage}-minTemp`}
            data-stage={stage}
            data-field="minTemp"
            className={cn("input", { "is-danger": !stageValidation.minTemp })}
            placeholder="22.4"
            value={stageValue.minTemp}
            onChange={(event) => updateStageValues(event)}
            onBlur={(event) => updateStageValidation(event, true)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-temperature-low"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${stage}-maxTemp`} className="label">
          Max. Temperature
        </label>
        <div className="control has-icons-left">
          <input
            type="number"
            id={`${stage}-maxTemp`}
            data-stage={stage}
            data-field="maxTemp"
            className={cn("input", { "is-danger": !stageValidation.maxTemp })}
            placeholder="42.3"
            value={stageValue.maxTemp}
            onChange={(event) => updateStageValues(event)}
            onBlur={(event) => updateStageValidation(event, true)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-temperature-high"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${stage}-minHumid`} className="label">
          Min. Humidity
        </label>
        <div className="control has-icons-left">
          <input
            type="number"
            id={`${stage}-minHumid`}
            data-stage={stage}
            data-field="minHumid"
            className={cn("input", { "is-danger": !stageValidation.minHumid })}
            placeholder="15"
            value={stageValue.minHumid}
            onChange={(event) => updateStageValues(event)}
            onBlur={(event) => updateStageValidation(event, true)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-tint"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${stage}-maxHumid`} className="label">
          Max. Humidity
        </label>
        <div className="control has-icons-left">
          <input
            type="number"
            id={`${stage}-maxHumid`}
            data-stage={stage}
            data-field="maxHumid"
            className={cn("input", { "is-danger": !stageValidation.maxHumid })}
            placeholder="43"
            value={stageValue.maxHumid}
            onChange={(event) => updateStageValues(event)}
            onBlur={(event) => updateStageValidation(event, true)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-tint"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${stage}-days`} className="label">
          Duration in Days
        </label>
        <div className="control has-icons-left">
          <input
            type="number"
            id={`${stage}-days`}
            data-stage={stage}
            data-field="days"
            className={cn("input", { "is-danger": !stageValidation.days })}
            placeholder="21"
            value={stageValue.days}
            onChange={(event) => updateStageValues(event)}
            onBlur={(event) => updateStageValidation(event, true)}
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
