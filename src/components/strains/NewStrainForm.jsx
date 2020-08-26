import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import cn from "classnames";
import { nanoid } from "nanoid";

import StageStats from "./StageStats";
import { addStrain } from "../../redux/actions/strains.actions";

/**
 * The form which allows a user to add a new strain to the list.
 *
 * @author Marko Maric
 * @version 1.0
 */
const NewStrainForm = () => {
  const [state, dispatchToState] = useReducer(strainFormReducer, initialState);
  const dispatch = useDispatch();

  /**
   * Handle when the user the form.
   */
  function handleSubmit(event) {
    event.preventDefault();

    // Make sure all the form inputs are valid
    if (validateFormInput()) {
      const newState = state;
      delete newState.formValidation;

      dispatch(
        addStrain({
          ...newState,
          id: nanoid(),
        })
      );

      // Clear the entire form
      dispatchToState({ type: CLEAR_FORM });
    }
  }

  /**
   * Handle when the user changes any of the values in the grow stages.
   *
   * @param { Object } event The "onChange" event which triggered this function.
   */
  function handleStageValueUpdate(event) {
    dispatchToState({
      type: UPDATE_STAGE_VALUE,
      payload: {
        stage: event.currentTarget.dataset.stage,
        field: event.currentTarget.dataset.field,
        value: event.currentTarget.value,
      },
    });
  }

  /**
   * Handle when the validation state of the field needs to change.
   *
   * @param { Object } event The "onChange" event which triggered this function.
   * @param { Boolean } isValid Defines the new value of the prop which will be adjusted.
   */
  function handleStageIsValidUpdate(event, isValid) {
    dispatchToState({
      type: UPDATE_STAGE_VALUE,
      payload: {
        stage: event.currentTarget.dataset.stage,
        field: event.currentTarget.dataset.field,
        value: isValid,
      },
    });
  }

  /**
   * Validate the form inputs to make sure only valid values are being passed. This function
   * is also responsible for displaying the invalid fields to the user.
   */
  function validateFormInput() {
    let isNameValid = true;
    let isThcContentValid = true;
    let areStageValuesValid = true;

    if (state.name.length === 0) {
      isNameValid = false;
      dispatchToState({ type: UPDATE_NAME_ISVALID, payload: false });
    }

    if (state.thcContent.length === 0) {
      isThcContentValid = false;
      dispatchToState({ type: UPDATE_THCCONTENT_ISVALID, payload: false });
    }

    // Validate the values in all the stage-fields contain some values.
    for (let stage in state.stages) {
      for (let field in state.stages[stage]) {
        if (state.stages[stage][field].length === 0) {
          areStageValuesValid = false;
          dispatchToState({
            type: UPDATE_STAGE_VALUE,
            payload: {
              stage,
              field,
              value: false,
            },
          });
        }
      }
    }

    return isNameValid && isThcContentValid && areStageValuesValid;
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
            className={cn("input", { "is-danger": !state.formValidation.isNameValid })}
            placeholder="OG Kush"
            value={state.name}
            onChange={(event) =>
              dispatchToState({
                type: UPDATE_NAME_VALUE,
                payload: event.currentTarget.value,
              })
            }
            onBlur={() => dispatchToState({ type: UPDATE_NAME_ISVALID, payload: true })}
          />
        </div>
        {!state.formValidation.isNameValid && <p className="help is-danger">Please enter a name for your strain</p>}
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
            value={state.desc}
            onChange={(event) =>
              dispatchToState({
                type: UPDATE_DESC_VALUE,
                payload: event.currentTarget.value,
              })
            }
          />
        </div>
        <p className="help">Here you can add some additional information about the strain.</p>
      </div>

      <div className="field field-thccontent">
        <label htmlFor="thcContent" className="label">
          THC Content
        </label>
        <div className="control">
          <input
            type="number"
            id="thcContent"
            className={cn("input", { "is-danger": !state.formValidation.isThcContentValid })}
            placeholder="19.4"
            min="0"
            max="100"
            step="0.1"
            value={state.thcContent.value}
            onChange={(event) =>
              dispatchToState({
                type: UPDATE_THCCONTENT_VALUE,
                payload: event.currentTarget.value,
              })
            }
            onBlur={() =>
              dispatchToState({
                type: UPDATE_THCCONTENT_ISVALID,
                payload: true,
              })
            }
          />
        </div>
        {!state.formValidation.isThcContentValid && (
          <p className="help is-danger">Please enter an approx. estimate for the THC content of this strain.</p>
        )}
        <p className="help">This is only supposed to be an approximation.</p>
      </div>

      <hr />

      <div className="columns">
        <div className="column">
          <h2 className="subtitle">Seedling Stage</h2>
          <StageStats
            stage="seed"
            stageValue={state.stages.seed}
            stageValidation={state.formValidation.stages.seed}
            updateStageValues={handleStageValueUpdate}
            updateStageValidation={handleStageIsValidUpdate}
          />
        </div>
        <div className="column">
          <h2 className="subtitle">Vegetative Stage</h2>
          <StageStats
            stage="veg"
            stageValue={state.stages.veg}
            stageValidation={state.formValidation.stages.veg}
            updateStageValues={handleStageValueUpdate}
            updateStageValidation={handleStageIsValidUpdate}
          />
        </div>
        <div className="column">
          <h2 className="subtitle">Flowering Stage</h2>
          <StageStats
            stage="flow"
            stageValue={state.stages.flow}
            stageValidation={state.formValidation.stages.flow}
            updateStageValues={handleStageValueUpdate}
            updateStageValidation={handleStageIsValidUpdate}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <button className="button is-primary has-text-weight-bold" onClick={handleSubmit}>
            Add the new Strain
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewStrainForm;

// The components state
const CLEAR_FORM = "@@strainForm/clear/entire-form";
const UPDATE_NAME_VALUE = "@@strainForm/update/name-value";
const UPDATE_NAME_ISVALID = "@@strainForm/update/name-isValid";
const UPDATE_DESC_VALUE = "@@strainForm/update/desc-value";
const UPDATE_THCCONTENT_VALUE = "@@strainForm/update/thcContent-value";
const UPDATE_THCCONTENT_ISVALID = "@@strainForm/update/thcContent-isValid";
const UPDATE_STAGE_VALUE = "@@strainForm/update/stage-value";

const initialState = {
  name: "",
  desc: "",
  thcContent: "",
  stages: {
    seed: {
      days: "",
      minTemp: "",
      maxTemp: "",
      minHumid: "",
      maxHumid: "",
    },
    veg: {
      days: "",
      minTemp: "",
      maxTemp: "",
      minHumid: "",
      maxHumid: "",
    },
    flow: {
      days: "",
      minTemp: "",
      maxTemp: "",
      minHumid: "",
      maxHumid: "",
    },
  },
  formValidation: {
    isNameValid: true,
    isThcContentValid: true,
    stages: {
      seed: {
        days: true,
        minTemp: true,
        maxTemp: true,
        minHumid: true,
        maxHumid: true,
      },
      veg: {
        days: true,
        minTemp: true,
        maxTemp: true,
        minHumid: true,
        maxHumid: true,
      },
      flow: {
        days: true,
        minTemp: true,
        maxTemp: true,
        minHumid: true,
        maxHumid: true,
      },
    },
  },
};

/**
 * The `strainForm` reducer. It serves as the forms state.
 *
 * @param { Object } state The entire state of the component.
 * @param { Object } action The action which defines in what way the state will be changed.
 */
const strainFormReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NAME_VALUE:
      return {
        ...state,
        name: action.payload,
      };

    case UPDATE_NAME_ISVALID:
      return {
        ...state,
        formValidation: {
          ...state.formValidation,
          isNameValid: action.payload,
        },
      };

    case UPDATE_DESC_VALUE:
      return {
        ...state,
        desc: action.payload,
      };

    case UPDATE_THCCONTENT_VALUE:
      return {
        ...state,
        thcContent: action.payload,
      };

    case UPDATE_THCCONTENT_ISVALID:
      return {
        ...state,
        formValidation: {
          ...state.formValidation,
          isThcContentValid: action.payload,
        },
      };

    case UPDATE_STAGE_VALUE:
      if (typeof action.payload.value === "boolean") {
        const updatedValidated = {
          ...state,
          formValidation: {
            ...state.formValidation,
            stages: {
              ...state.formValidation.stages,
              [action.payload.stage]: {
                ...state.formValidation.stages[action.payload.stage],
                [action.payload.field]: action.payload.value,
              },
            },
          },
        };

        return updatedValidated;
      }

      return {
        ...state,
        stages: {
          ...state.stages,
          [action.payload.stage]: {
            ...state.stages[action.payload.stage],
            [action.payload.field]: action.payload.value,
          },
        },
      };

    case CLEAR_FORM:
      return initialState;

    default:
      return state;
  }
};
