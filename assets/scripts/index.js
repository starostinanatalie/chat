const name = document.getElementById('name');
const checkSpam = (str) => {
    const addStr = str.toUpperCase();
    const indexV = addStr.search('VIAGRA');
    const indexX = addStr.search('XXX');
    let strV = str;
    if (indexX !== -1) {
        strV = str.slice(0, indexX) + "***" + str.slice(indexX + 3);
    }
    if (indexV !== -1) {
        return strV.slice(0, indexV) + "***" + strV.slice(indexV + 6);
    }
    else {
        return strV;
    }
}

const addNewPost = () => {
    let nameValue = name.value;
    if (nameValue === "") {
        nameValue = "username";
    }
    let avatar = document.getElementById('avatar');
    let avatarValue = avatar.value;
    if (avatarValue === "") {
        let random = Math.round(Math.random() * 6);
        avatarValue = `./assets/images/img${random}.jpg`;
    }
    let str = document.getElementById('textComment');
    const strValue = str.value;
    const text = checkSpam(strValue);
    const chatlist = document.getElementById('chatlist');

    let newDiv = document.createElement('div');
    newDiv.classList.add('chatItem');
    let chatAvatar = document.createElement('img');
    chatAvatar.classList.add('chatAvatar');
    chatAvatar.setAttribute('src', avatarValue);
    newDiv.append(chatAvatar);
    let chatName = document.createElement('h3');
    chatName.classList.add('chatName');
    chatName.textContent = nameValue;
    newDiv.append(chatName);
    let chatDate = document.createElement('h4');
    chatDate.classList.add('chatDate');
    let date = new Date();
    chatDate.textContent = date.toDateString() + date.toLocaleTimeString();
    newDiv.append(chatDate);
    let chatText = document.createElement('p');
    chatText.classList.add('chatText');
    chatText.textContent = text;
    newDiv.append(chatText);
   
    chatlist.append(newDiv);

    name.value = '';
    avatar.value = '';
    str.value = '';
}

const nameDecision = () => {
    const labelForName = document.getElementById('labelForName');
    if (no.checked) {
        name.classList.add('invisible');
        labelForName.classList.add('invisible');
    } else {
        name.classList.remove('invisible');
        labelForName.classList.remove('invisible');
    }
}

const yes = document.getElementById('yes');
const no = document.getElementById('no');
yes.addEventListener('change', nameDecision);
no.addEventListener('change', nameDecision);


const button = document.getElementById('button');
button.addEventListener('click', addNewPost);
