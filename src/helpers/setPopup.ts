import '../Styles/popup.css'

const setPopup = (message: string, type: 'error' | 'success') => {
    const getClass = (): string => {
        switch (type) {
            case "error":
                return 'popupError';
            case "success":
                return 'popupSuccess';
        }
    }
    const popup = document.createElement('div');
    const text = document.createElement('p');
    text.innerText = message;
    popup.classList.add('popup');
    popup.classList.add(getClass());
    popup.appendChild(text);
    document.body.appendChild(popup);
    setTimeout(() => {
        document.body.removeChild(popup);
    },3500)
}

export default setPopup
