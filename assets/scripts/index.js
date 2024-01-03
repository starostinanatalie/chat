
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
    let name = document.getElementById('name');
    const nameValue = name.value;
    let avatar = document.getElementById('avatar');
    const avatarValue = avatar.value;
    let str = document.getElementById('textComment');
    const strValue = str.value;
    const text = checkSpam(strValue);
    const chatlist = document.getElementById('chatlist');

    let newDiv = document.createElement('div');
    newDiv.classList.add('chatItem');
    let chatName = document.createElement('h3');
    chatName.classList.add('chatName');
    chatName.textContent = nameValue;
    newDiv.append(chatName);
    let chatAvatar = document.createElement('img');
    chatAvatar.classList.add('chatAvatar');
    chatAvatar.setAttribute('src', avatarValue);
    newDiv.append(chatAvatar);
    let chatText = document.createElement('p');
    chatText.classList.add('chatText');
    chatText.textContent = text;
    newDiv.append(chatText);
   
    chatlist.append(newDiv);

    name.value = '';
    avatar.value = '';
    str.value = '';

    
}

const button = document.getElementById('button');
button.addEventListener('click', addNewPost);
