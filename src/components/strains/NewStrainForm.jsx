import React, { useState } from "react";
import { useDispatch } from "react-redux";
import cn from "classnames";
import { v4 as uuidv4 } from "uuid";

import StageStats from "./StageStats";
import { addStrain } from "../../redux/actions/strains.actions";

/**
 * The form which allows a user to add a new strain to the list.
 *
 * @author Marko Maric
 */
const NewStrainForm = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [thcContent, setThcContent] = useState("");

  const [seedMinTemp, setSeedMinTemp] = useState("");
  const [seedMaxTemp, setSeedMaxTemp] = useState("");
  const [seedMinHumid, setSeedMinHumid] = useState("");
  const [seedMaxHumid, setSeedMaxHumid] = useState("");
  const [seedDays, setSeedDays] = useState("");

  const [vegMinTemp, setVegMinTemp] = useState("");
  const [vegMaxTemp, setVegMaxTemp] = useState("");
  const [vegMinHumid, setVegMinHumid] = useState("");
  const [vegMaxHumid, setVegMaxHumid] = useState("");
  const [vegDays, setVegDays] = useState("");

  const [flowMinTemp, setFlowMinTemp] = useState("");
  const [flowMaxTemp, setFlowMaxTemp] = useState("");
  const [flowMinHumid, setFlowMinHumid] = useState("");
  const [flowMaxHumid, setFlowMaxHumid] = useState("");
  const [flowDays, setFlowDays] = useState("");

  const [hasNameError, setNameError] = useState(false);
  const [hasThcContentError, setThcContentError] = useState(false);

  const dispatch = useDispatch();

  /**
   * Handle when the user the form.
   */
  function handleSubmit(event) {
    event.preventDefault();

    // Make sure all the form inputs are valid
    if (validateFormInput()) {
      dispatch(
        addStrain({
          id: uuidv4(),
          name,
          desc,
          thcContent,
          stats: {
            seedling: {
              minTemp: seedMinTemp || null,
              maxTemp: seedMaxTemp || null,
              minHumid: seedMinHumid || null,
              maxHumid: seedMaxHumid || null,
              days: seedDays || null,
            },
            vegetative: {
              minTemp: vegMinTemp || null,
              maxTemp: vegMaxTemp || null,
              minHumid: vegMinHumid || null,
              maxHumid: vegMaxHumid || null,
              days: vegDays || null,
            },
            flowering: {
              minTemp: flowMinTemp || null,
              maxTemp: flowMaxTemp || null,
              minHumid: flowMinHumid || null,
              maxHumid: flowMaxHumid || null,
              days: flowDays || null,
            },
          },
        })
      );
    }
  }

  /**
   * Validate the form inputs to make sure only valid values are being passed. This function
   * is also responsible for displaying the invalid fields to the user.
   */
  function validateFormInput() {
    let isNameValid = true;
    let isThcContentValid = true;

    if (name.length === 0) {
      isNameValid = false;
      setNameError(true);
    }

    if (thcContent.length === 0) {
      isThcContentValid = false;
      setThcContentError(true);
    }

    return isNameValid && isThcContentValid;
  }

  return (
    <form>
      <h1 className="title">Add a new Strain</h1>

      <div className="field">
        <label htmlFor="strainName" className="label">
          Name
        </label>
        <div className="control">
          <input
            type="text"
            id="strainName"
            className={cn("input", { "is-danger": hasNameError })}
            placeholder="OG Kush"
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
            onBlur={() => setNameError(false)}
          />
        </div>
        {hasNameError && (
          <p className="help is-danger">Please enter a name for your strain</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="strainDesc" className="label">
          Description
        </label>
        <div className="control">
          <input
            type="text"
            id="strainDesc"
            className="input"
            placeholder="xyz"
            value={desc}
            onChange={(event) => setDesc(event.currentTarget.value)}
          />
        </div>
        <p className="help">
          Here you can add some additional information about the strain.
        </p>
      </div>

      <div className="field field-thccontent">
        <label htmlFor="thcContent" className="label">
          THC Content
        </label>
        <div className="control">
          <input
            type="number"
            id="thcContent"
            className={cn("input", { "is-danger": hasThcContentError })}
            placeholder="19.4"
            value={thcContent}
            onChange={(event) => setThcContent(event.currentTarget.value)}
            onBlur={() => setThcContentError(false)}
          />
        </div>
        {hasThcContentError && (
          <p className="help is-danger">
            Please enter an approx. estimate for the THC content of this strain.
          </p>
        )}
        <p className="help">This is only supposed to be an approximation.</p>
      </div>

      <hr />

      <div className="columns">
        <div className="column">
          <h2 className="subtitle">Seedling Stage</h2>
          <StageStats
            preId="seed"
            minTemp={seedMinTemp}
            maxTemp={seedMaxTemp}
            minHumid={seedMinHumid}
            maxHumid={seedMaxHumid}
            days={seedDays}
            setMinTemp={setSeedMinTemp}
            setMaxTemp={setSeedMaxTemp}
            setMinHumid={setSeedMinHumid}
            setMaxHumid={setSeedMaxHumid}
            setDays={setSeedDays}
          />
        </div>
        <div className="column">
          <h2 className="subtitle">Vegetative Stage</h2>
          <StageStats
            preId="veg"
            minTemp={vegMinTemp}
            maxTemp={vegMaxTemp}
            minHumid={vegMinHumid}
            maxHumid={vegMaxHumid}
            days={vegDays}
            setMinTemp={setVegMinTemp}
            setMaxTemp={setVegMaxTemp}
            setMinHumid={setVegMinHumid}
            setMaxHumid={setVegMaxHumid}
            setDays={setVegDays}
          />
        </div>
        <div className="column">
          <h2 className="subtitle">Flowering Stage</h2>
          <StageStats
            preId="flow"
            minTemp={flowMinTemp}
            maxTemp={flowMaxTemp}
            minHumid={flowMinHumid}
            maxHumid={flowMaxHumid}
            days={flowDays}
            setMinTemp={setFlowMinTemp}
            setMaxTemp={setFlowMaxTemp}
            setMinHumid={setFlowMinHumid}
            setMaxHumid={setFlowMaxHumid}
            setDays={setFlowDays}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <button
            className="button is-primary has-text-weight-bold"
            onClick={handleSubmit}
          >
            Add the new Strain
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewStrainForm;
