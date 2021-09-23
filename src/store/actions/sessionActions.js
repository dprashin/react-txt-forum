export const ACTION_SESSION_SET = '[session] SET' //label 

export const sessionSetAction = profile => ({
    type: ACTION_SESSION_SET,
    payload: profile
})