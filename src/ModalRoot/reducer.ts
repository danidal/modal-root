import produce from 'immer';

interface ModalProps {
    open: boolean,
}

interface Modal {
    id: number,
    type: string,
    props: ModalProps,
}

export interface State {
  modals: Modal[];
}

export const initialState: State = {
  modals: [],
};

interface Action {
  type: string;
}

const modalRootReducer = (
  state: State = initialState,
  action: Action
): State => produce(state, draft => {
    switch (action.type) {
        case "SHOW_MODAL":
          return { ...state };
        case "HIDE_MODAL":
          return { ...state };
        case "DESTROY_MODAL":
          return { ...state };
        default:
          throw new Error("wrong action type");
      }
})

export default modalRootReducer;
