const blogState: any = [];

const blogReducer = (state = blogState, action: any) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.blog];
    case "EDIT_BLOG":
      return state.map((b: any) => {
        if (b.id === action.id) {
          return {
            ...b,
            ...action.update,
          };
        } else {
          return b;
        }
      });
    case "REMOVE_BLOG":
      return state.filter(({ id }: any) => {
        return id !== action.id;
      });
    case "SET_BLOGS":
      return action.blogs;
    default:
      return state;
  }
};

export default blogReducer;
