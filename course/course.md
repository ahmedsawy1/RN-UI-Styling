- define actions
- create reducers
- create store
- pick the global state
- dispatch actions

We will cover all of this

What’s Actions In Redux
- Actions are a plain JavaScript object that contains information. 
- type: is the action type like "LOGIN" "ADD_TO_DO"
- payload: the data yuo use to update the state 
EX. "ADD_TO_DO" = add todo string, 
EX. "LOGIN" = email and password, 
 

const login = () => ({
    type: LOGIN
    payload: {isSignedIn: true}
});

const logout = () => ({
    type: LOGOUT
    payload: {isSignedIn: false}
});


// you can add to payload 
{isSignedIn: true, token:"dsadas", messages:5}
{isSignedIn: false, token:null }



Don't worry if you don't understand ^_^