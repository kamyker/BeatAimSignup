var titleID = "FB3";

function DoExampleLoginWithCustomID(){
    //PlayFab.settings.titleId = document.getElementById("titleId").value;
    var loginRequest = {
        TitleId: titleID,// PlayFab.settings.titleId,
        Username: document.getElementById("playerName").value,
        Email: document.getElementById("email").value,
		RequireBothUsernameAndEmail: true
    };

    PlayFabClientSDK.LoginWithCustomID(loginRequest, LoginCallback);
}

var LoginCallback = function (result, error) {
    if (result !== null) {
        document.getElementById("resultOutput").innerHTML = "Congratulations, you made your first successful API call!";
    } else if (error !== null) {
        document.getElementById("resultOutput").innerHTML =
            "Something went wrong with your first API call.\n" +
            "Here's some debug information:\n" +
            PlayFab.GenerateErrorReport(error);
    }
}