import {combineReducers} from 'redux';




const users = (state=[{firstName: "John", lastName: "Rasbin", fullName: "John Rasbin", isEdit:false}], action)=>{
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.user];
    case "REMOVE_USER":
      return [...state.slice(0, action.index), ...state.slice(action.index+1) ];
    case "EDIT_USER":
      return[...state.map((user, index)=>{
        if (index === action.indexToChange) {
          return {
            ...user,
            isEdit: !user.isEdit,
            fullName: action.fullName
          }
        }
        return user;
      })]
    default:
      return state;

  }
}



export default combineReducers({ users });
