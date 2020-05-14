import reducer, { initialState, State } from "./reducer";

describe("ModalRoot reducer", () => {
  it("throws error when wrong action type is provided", () => {
    expect(() => reducer(initialState, { type: "WRONG" })).toThrow(
      new Error("wrong action type")
    );
  });
  it("handles SHOW_MODAL", () => {
    const newState: State = reducer(initialState, { type: "SHOW_MODAL" });
    expect(newState.modals).toHaveLength(1);
  });
});
