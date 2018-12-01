export const signIn = (authData) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            authData.email, 
            authData.password
        ).then(() => {
            dispatch({type: "LOGIN_SUCCESS"});
        }).catch((error) => {
            dispatch({type: "LOGIN_ERROR", error});
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'});
        });
    }
}