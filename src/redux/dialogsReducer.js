const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state=initialState, action) => {
    let stateCopy;

        switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: state.messages.length++, message: body}],
            };

        default:
            return state;

    }
}

export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body,})

export const sendMessageCreator = () => ({type: SEND_MESSAGE,})


export default dialogsReducer;
