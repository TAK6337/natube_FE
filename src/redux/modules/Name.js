
// Actions
const LOAD = 'name/LOAD';
const CREATE = 'name/CREATE';

const initialState = {
    list: [],
  };

  // Action Creators
export function loadName(name_list) {
return { type: LOAD, name_list};
}

export function createName(names) {
    return { type: CREATE, names};
    }


export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "name/LOAD": {
            return { list: action.name_list};
        }
        case "name/CREAT": {
            const new_name = [...state.list, action.names];
            return { list: new_name};
        }




        default:
            return state;
    }
}   