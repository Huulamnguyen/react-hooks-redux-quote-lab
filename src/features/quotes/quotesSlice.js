// Action Creators
// TODO: Create action creators as defined in tests

export const addQuote = (quote) => {
  return {
    type: "quotes/add",
    payload: quote,
  }
}

export const removeQuote = (quoteId) => {
  return {
    type: "quotes/remove",
    payload: quoteId,
  }
}

export const upvoteQuote = (quoteId) => {
  return {
    type: "quotes/upvote",
    payload: quoteId
  }
}

export const downvoteQuote = (quoteId) => {
  return {
    type: "quotes/downvote",
    payload: quoteId
  }
}

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type){
    case "quotes/add":
      return [...state, payload];
    
    case "quotes/remove":
      return state.filter(quote => quote.id !== payload)

    case "quotes/upvote":
      return state.map(q => {
        if (q.id === payload) {
          return {
            ...q,
            votes: q.votes + 1
          }
        } else {
          return q
        }
      })
    
    case "quotes/downvote":
      return state.map(q => {
        if(q.id === payload && q.votes > 0) {
          return {
            ...q,
            votes: q.votes - 1
          }
        } else {
          return q
        }
      })
    default:
      break;
  }
  return state;
}
