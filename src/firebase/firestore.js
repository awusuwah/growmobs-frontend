import { firestore } from "../firebase";

/**
 * Add a grow to the database.
 *
 * @param { Object } grow The new grow which wil be added to the database.
 */
export const addGrow = (grow) => {
  return firestore
    .collection("grows")
    .doc(grow.id)
    .set({ ...grow });
};

/**
 * Remove a specific grow from the database.
 *
 * @param { string } growId The ID of the grow which will be removed from the database.
 */
export const removeGrow = (growId) => {
  return firestore.collection("grows").doc(growId).delete();
};

/**
 * Add a strain to the database.
 *
 * @param { Object } strain The new strain which will be added to the database.
 */
export const addStrain = (strain) => {
  return firestore
    .collection("strains")
    .doc(strain.id)
    .set({ ...strain });
};

/**
 * Fetch all the strains from the database.
 */
export const fetchAllStrains = async () => {
  const unpreparedStrains = await firestore.collection("strains").get();
  let preparedStrains = [];

  unpreparedStrains.forEach((doc) => {
    preparedStrains.push(doc.data());
  });

  return preparedStrains;
};

/**
 * Remove a specific strain from the database.
 *
 * @param { string } strainId The ID of the strain which will be removed from the database.
 */
export const removeStrain = (strainId) => {
  return firestore.collection("strains").doc(strainId).delete();
};
