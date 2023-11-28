const settingsBox = () => {
    document.getElementsByClassName("settings-box")[0].classList.toggle('settings-box-active')
    document.getElementsByClassName("set-button")[0].classList.toggle('settings-button-inactive')
    document.getElementsByClassName("back-button")[0].classList.toggle('back-button-active')
}
const pauseGame = () => {
    document.getElementsByClassName("set-button")[1].classList.toggle('settings-button-inactive')
    document.getElementsByClassName("back-button")[1].classList.toggle('back-button-active')
}

const themeChange = (value) => {
    if(value == 1){
        theme.innerHTML = `html {
            height: 100vh;
            overflow: hidden;
        }
        body {
            background-color: rgb(0, 0, 0);
        }
        .setings {
            display: flex;
        }
        #headline {
            font-size: 60px;
            color: rgb(209, 209, 209);
        }
        .sendmessage h1 {
            color: rgb(201, 201, 201);
        }
        .copyright {
            display: flex;
            position: fixed;
            z-index: 4;
            bottom: 10px;
            right: 10px;
            color: rgb(195, 0, 255);
            font-family: Arial, Helvetica, sans-serif;
            border-radius: 5px;
            text-decoration: none;
            border: 0;
            padding: 5px 10px;
            cursor: pointer;
        }
        .set-button {
            display: flex;
            background-color: rgb(197, 197, 197);
            color: rgb(0, 0, 0);
            font-family: Arial, Helvetica, sans-serif;
            border-radius: 5px;
            border: 0;
            padding: 5px 10px;
            cursor: pointer;
            margin: 4px;
            align-items: center;
            justify-content: center;
        }
        .back-button {
            display: none;
            background-color: rgb(197, 197, 197);
            color: rgb(0, 0, 0);
            border-radius: 5px;
            font-family: Arial, Helvetica, sans-serif;
            border: 0;
            padding: 5px 10px;
            cursor: pointer;
            margin: 4px;
            align-items: center;
            justify-content: center;
        }
        .footer-btn {
            display: flex;
            position: fixed;
            z-index: 4;
            bottom: 10px;
            left: 10px;
        }
        .settings-box {
            width: 0%;
            height: 100vh;
            top: 0px;
            left: 0px;
            display: flex;
            overflow: hidden;
            position: fixed;
            z-index: 3;
            transition: .5s;
            background-color: rgba(0, 0, 0, 0.205);
            backdrop-filter: blur(8px);
        }
        .settings-box-active {
            width: 100%;
            align-items: center;
            justify-content: center;
        }
        .settings-button-inactive {
            display: none;
            align-items: center;
            justify-content: center;
        }
        .back-button-active {
            display: flex;
        }
        .settings-01 {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .settings-02 {
            padding: 20px;
            width: 80%;
            max-width: 500px;
            height: auto;
            overflow: hidden;
            border-radius: 10px;
            background-color: rgba(46, 10, 53, 0.986);
        }
        .settings-02 table {
            color: white;
        }
        .settings-02 table tr td label {
            font-family: Arial, Helvetica, sans-serif;
            text-transform: capitalize;
        }
        .settings-02 table tr td input, .settings-02 table tr td select {
            margin: 10px;
            border: none;
            background-color: transparent;
            color: rgb(255, 255, 255);
        }
        .settings-02 table tr td option {
            background-color: rgb(48, 48, 48);
        }`
    }else{
        theme.innerHTML = `html {
            height: 100vh;
            overflow: hidden;
        }
        body {
            background-color: rgb(255, 255, 255);
        }
        .setings {
            display: flex;
        }
        #headline {
            font-size: 60px;
        }
        .sendmessage h1 {
            color: rgb(24, 24, 24);
        }
        .copyright {
            display: flex;
            position: fixed;
            z-index: 4;
            bottom: 10px;
            right: 10px;
            color: rgb(225, 0, 255);
            font-family: Arial, Helvetica, sans-serif;
            border-radius: 5px;
            text-decoration: none;
            border: 0;
            padding: 5px 10px;
            cursor: pointer;
        }
        .set-button {
            display: flex;
            background-color: rgb(0, 0, 0);
            color: white;
            font-family: Arial, Helvetica, sans-serif;
            border-radius: 5px;
            border: 0;
            padding: 5px 10px;
            cursor: pointer;
            margin: 4px;
            align-items: center;
            justify-content: center;
        }
        .back-button {
            display: none;
            background-color: rgb(0, 0, 0);
            color: white;
            border-radius: 5px;
            font-family: Arial, Helvetica, sans-serif;
            border: 0;
            padding: 5px 10px;
            cursor: pointer;
            margin: 4px;
            align-items: center;
            justify-content: center;
        }
        .footer-btn {
            display: flex;
            position: fixed;
            z-index: 4;
            bottom: 10px;
            left: 10px;
        }
        .settings-box {
            width: 0%;
            height: 100vh;
            top: 0px;
            left: 0px;
            display: flex;
            overflow: hidden;
            position: fixed;
            z-index: 3;
            transition: .5s;
            background-color: rgba(0, 0, 0, 0.205);
            backdrop-filter: blur(8px);
        }
        .settings-box-active {
            width: 100%;
            align-items: center;
            justify-content: center;
        }
        .settings-button-inactive {
            display: none;
            align-items: center;
            justify-content: center;
        }
        .back-button-active {
            display: flex;
        }
        .settings-01 {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .settings-02 {
            padding: 20px;
            width: 80%;
            max-width: 500px;
            height: auto;
            overflow: hidden;
            border-radius: 10px;
            background-color: rgba(0, 0, 0, 0.795);
        }
        .settings-02 table {
            color: white;
        }
        .settings-02 table tr td label {
            font-family: Arial, Helvetica, sans-serif;
            text-transform: capitalize;
        }
        .settings-02 table tr td input, .settings-02 table tr td select {
            margin: 10px;
            border: none;
            background-color: transparent;
            color: white;
        }
        .settings-02 table tr td option {
            background-color: rgb(48, 48, 48);
        }`
    }
}