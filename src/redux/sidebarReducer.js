let initialState =  {
    friends: [
        {
            id: 1,
            name: "Andrew",
            profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDtS3xGOSF3KrNqFbp9jmXMigMPGRsJah9IA&usqp=CAU"
        },
        {
            id: 2,
            name: "Sasha",
            profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDtS3xGOSF3KrNqFbp9jmXMigMPGRsJah9IA&usqp=CAU"
        },
        {
            id: 3,
            name: "Sveta",
            profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDtS3xGOSF3KrNqFbp9jmXMigMPGRsJah9IA&usqp=CAU"
        },
    ]
};

const sidebarReducer = (state = initialState, action) => {

    return state;
}
export default sidebarReducer;