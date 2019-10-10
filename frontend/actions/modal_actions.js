export const CLOSE_ALL_MODALS = "CLOSE_ALL_MODALS";
export const CLOSE_CURRENT_MODAL = "CLOSE_CURRENT_MODAL";
export const OPEN_SINGLE = "OPEN_SINGLE";

export const closeAllModals = () => ({
  type: CLOSE_ALL_MODALS,
});

export const closeThisModal = (modalName) => ({
  type: CLOSE_CURRENT_MODAL,
  modal: modalName
});

export const openSingle = (modalName) => ({
  type: OPEN_SINGLE,
  modal: modalName
});

export const closeModals = () => dispatch => (
  dispatch(closeAllModals())
);

export const closeModal = (modalName) => dispatch => (
  dispatch(closeThisModal(modalName))
);

export const openModal = (modalName) => dispatch => {
   return dispatch(openSingle(modalName));
};
