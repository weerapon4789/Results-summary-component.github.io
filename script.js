fetch('/data.json')
.then(res => res.json())
.then(data => {
    appendData(data)
})
.catch(rejected => {
    console.log('error: ' + rejected);
});

function appendData(data) {
    var mainContainer = document.getElementById("iSumarry");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = `${data[i].category}` ;
        mainContainer.appendChild(div);
    }
}