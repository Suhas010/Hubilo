/**
 * App actions goes here. I am Just using single action for easy and earlier task completion..sorry
 * @param {} user 
 */

export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
