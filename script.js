fetch('data.json')
.then(res => res.json())
.then(data => {
    appendData(data)
})
.catch(rejected => {
    console.log('error: ' + rejected);
});

function appendData(data) {
    
    var mainContainer = document.getElementById("iSumary");

    for (var i = 0; i < data.length; i++) {
        var divCate = document.createElement("div");
        var divCate_head = document.createElement("div");
        var img = document.createElement("img");
        var pTitle = document.createElement("p");
        var divScore = document.createElement("div");
        var spanScore = document.createElement("span");
        var spanScore2 = document.createElement("span");

        divCate.classList.add("cate_category");
        divCate.classList.add(data[i].class);

        divCate_head.classList.add("category_heading");

        pTitle.innerHTML = `${data[i].category}`;

        img.src = `${data[i].icon}`;
        img.alt = `${data[i].alt}`

        divScore.classList.add("category_score");

        spanScore.innerHTML = `${data[i].score} / `;
        spanScore2.innerHTML = `100`;
        
        mainContainer.appendChild(divCate);
        divCate.appendChild(divCate_head);
        divCate_head.appendChild(img);
        divCate_head.appendChild(pTitle);
        divCate.appendChild(divScore);
        divScore.appendChild(spanScore);
        divScore.appendChild(spanScore2);
        
       
    }
}