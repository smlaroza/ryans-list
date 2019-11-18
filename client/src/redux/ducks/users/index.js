import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const GET_USERS = "users/GET_USERS"
const SHOW_SUB = "SHOW_SUB"

// initial state
const initialState = {
  users: [],
  sub: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload }
    case SHOW_SUB:
      return { ...state, sub: action.payload }
    default:
      return state
  }
}

// action creators
const getUsers = () => {
  return (dispatch) => {
    axios.get("/users").then((resp) => {
      const cats = {
        name1: resp.data[0].name,
        name2: resp.data[1].name,
        name3: resp.data[2].name,
        name4: resp.data[3].name,
        name5: resp.data[4].name,
        name6: resp.data[5].name,
        name7: resp.data[6].name
      }
      dispatch({
        type: GET_USERS,
        payload: cats
      })
    })
  }
}

const getsubCat = () => {
  return (dispatch) => {
    axios.get("/users/sub").then((resp) => {
      const newArr = {
        subOne: newArray(resp.data),
        subTwo: newArray(resp.data),
        subThree: newArray(resp.data),
        subFour: newArray(resp.data),
        subFive: newArray(resp.data),
        subSix: newArray(resp.data),
        subSeven: newArray(resp.data)
      }
      dispatch({
        type: SHOW_SUB,
        payload: resp.data
      })
    })
  }
}
var subOne = []
var subTwo = []
var subThree = []
var subFour = []
var subFive = []
var subSix = []
var subSeven = []
function newArray(the) {
  for (let i = 0; i < the.length; i++) {
    if (the[i].parent_id === 1) {
      subOne.push(the[i])
    } else if ((the[i].parent_id = 2)) {
      subTwo.push(the[i])
    } else if ((the[i].parent_id = 3)) {
      subThree.push(the[i])
    } else if ((the[i].parent_id = 4)) {
      subFour.push(the[i])
    } else if ((the[i].parent_id = 5)) {
      subFive.push(the[i])
    } else if ((the[i].parent_id = 6)) {
      subSix.push(the[i])
    } else if ((the[i].parent_id = 7)) {
      subSeven.push(the[i])
    }
  }
}

// custom hooks
export function useUsers() {
  const users = useSelector((appState) => appState.userState.users)
  const dispatch = useDispatch()
  const sub = useSelector((appState) => appState.userState.sub)

  useEffect(() => {
    dispatch(getUsers())
    dispatch(getsubCat())
  }, [dispatch])

  return {
    users,
    sub,
    subOne,
    subTwo,
    subThree,
    subFour,
    subFive,
    subSix,
    subSeven
  }
}
