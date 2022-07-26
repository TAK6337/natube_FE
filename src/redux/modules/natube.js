// Actions
const LOAD   = 'dictionary/LOAD';       
const CREATE = 'dictionary/CREATE';     

const initialState = {
    list: [{
        id: "abc", 
        pw: "123"
    }]
};


// Action Creators
export function loadNatube(natube_list) {
    return { type: LOAD, natube_list };
  }
  
  export function createNatube(natube) {
    console.log("액션을 생성할거야");
      return { type: CREATE, natube }; 
  }


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case "natube/LOAD": {
        console.log(action.natube_list);
        return {list: action.natube_list};
      } 
      case "natube/CREATE": {
        console.log("이제 값을 바꿀거야");
        const new_natube_list = [...state.list, action.natube];   
        // 원래 있던 리스트에 새로운 걸 추가한 게 새 딕션리스트
        return {list : new_natube_list};                           
    }
      default: 
        return state;
    }
  }