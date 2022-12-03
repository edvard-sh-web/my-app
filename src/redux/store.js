import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hello world", likesCount: 15},
                {id: 2, message: "My first post", likesCount: 20},

            ],
            newPostText: '',
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Hello"},
                {id: 4, message: "Hello"},
                {id: 5, message: "Hello"},
            ],
            dialogs: [
                {
                    id: 1,
                    name: "Edward",
                    profilePic: "https://whatifgaming.com/wp-content/uploads/2021/10/2c56ebc89b30b98254177b1bb65b64cb.jpg"
                },
                {
                    id: 2,
                    name: "Yana",
                    profilePic: "https://whatifgaming.com/wp-content/uploads/2021/10/2c56ebc89b30b98254177b1bb65b64cb.jpg"
                },
                {
                    id: 3,
                    name: "Vanya",
                    profilePic: "https://whatifgaming.com/wp-content/uploads/2021/10/2c56ebc89b30b98254177b1bb65b64cb.jpg"
                },
                {
                    id: 4,
                    name: "Sveta",
                    profilePic: "https://whatifgaming.com/wp-content/uploads/2021/10/2c56ebc89b30b98254177b1bb65b64cb.jpg"
                },
                {
                    id: 5,
                    name: "Sasha",
                    profilePic: "https://whatifgaming.com/wp-content/uploads/2021/10/2c56ebc89b30b98254177b1bb65b64cb.jpg"
                },
            ],
            newMessageBody: '',
        },
        sidebar: {
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
        },

    },
    _callSubscriber() {
        console.log("state changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    },
}



export default store;
window.store = store;
