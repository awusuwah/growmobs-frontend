import React, { useState } from "react";

import NewStrainForm from "../components/strains/NewStrainForm";
import StrainList from "../components/strains/StrainList";

import "./Views.scss";

/**
 * The view which defines the layout of the `strains` page. It will contain a search field
 * to filter all the available strains and allow the user to add new strains. The user will
 * also be able to view all his strains using a gallery like list.
 *
 * @author Marko Maric
 * @version 1.0
 */
const StrainsView = () => {
  const [showForm, setShowForm] = useState(true);

  /**
   * Toggle if the `add new strain` form is visible or not.
   */
  function toggleForm() {
    setShowForm(!showForm);
  }

  return (
    <div className="view strains-view">
      <section className="form">{showForm && <NewStrainForm />}</section>
      <section className="strain-list">
        <StrainList />
      </section>

      <div className="buttons">
        {showForm ? (
          <button
            className="button is-danger is-light has-text-weight-bold action"
            onClick={() => setShowForm(false)}
          >
            Nevermind
            <i className="fas fa-ban"></i>
          </button>
        ) : (
          <button
            className="button is-primary is-light has-text-weight-bold action"
            onClick={() => setShowForm(true)}
          >
            Add Strain
            <i className="fas fa-cannabis"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default StrainsView;
