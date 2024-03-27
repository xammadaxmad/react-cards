import LSHelper from "../helpers/LSHelper";
function CurrentUser() {
    const currentUserData = LSHelper.get("AUTH")
    return (
        <p>
            <b>{currentUserData.username}</b>: {currentUserData.email}
        </p>
    )
}

export default CurrentUser