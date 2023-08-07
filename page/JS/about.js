window.onload = function () {
    const TeamName = [`<img src="../src/text_icon.svg">`, "JERRY", "David", "Danger", "Samuel", "Nail", `<a style="font-family: 'Zen Kurenaido', sans-serif;font-size: 25px;">你的電腦由我們共同維護！<img src="../src/7dc21e53b91342679cc66131b60ea8b4.png" style="width: 40px; vertical-align: -7px;"></a>`];
    const TeamNameWrapper = document.getElementById("ourTeamWrapper");
    const wrapper = document.getElementById("kit-wrapper");
    const colorKit = document.getElementById("color-kit");
    const kitPositionY = ["25px", "63px", "103px", "136px"];
    const kitID = ["version", "update", "website", "sensei"];
    const KeyBtn = wrapper.querySelectorAll('[class*=kit-]');
    const current_version = "0.1.0_Alpha";
    const sensei = "Jerry";
    let i = 0;
    turn()

    function turn() {
        TeamNameWrapper.innerHTML = TeamName[i];
        i++;
        if (i >= TeamName.length) {
            i = 0;
        }
        setTimeout(turn, 3000)
    }

    wrapper.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'KEYBTN'; //添加事件監聽器
        if (!isButton) {
            return;
        } else {
            const Index = kitID.indexOf(event.target.id);
            colorKit.style.top = kitPositionY[Index];
            event.target.style.color = "#000";
            document.getElementById(`wrapper-${event.target.id}`).style.display = "flex";
            for (i = 0; i < KeyBtn.length; i++) {
                if (KeyBtn[i].id != event.target.id) {
                    KeyBtn[i].style.color = "transparent";
                    document.getElementById(`wrapper-${KeyBtn[i].id}`).style.display = "none";
                }
            }
        }
    })

    fetch(`https://bocchi-the-antivirus-api.000webhostapp.com/?action=update&current_version=${current_version}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Request failed with status: ' + response.status);
            }
        })
        .then(data => {
            document.getElementById("n-version").innerText = current_version;
            document.getElementById("c-version").innerText = data.version;
            document.getElementById("v-version").innerText = `${data.verified} sensei`;
            document.getElementById("s-version").innerText = data.time;
            if (data.version == "Already the latest version!") {
                var elementToRemove = document.getElementById('btn-01');
                elementToRemove.remove();
            }else{
                // Create a new div element
                var divElement = document.createElement('div');

                // Set attributes or properties of the div element
                divElement.id = 'btn-01';
                divElement.className = 'btn-01';
                divElement.textContent = 'Update now!';

                // Append the div element to an existing element in the DOM
                var parentElement = document.getElementById('btn-01-wrapper'); // Replace with the actual parent element where you want to append the div
                parentElement.appendChild(divElement);
            }
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });
}