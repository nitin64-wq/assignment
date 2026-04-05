function loadData() {
    const btn = document.querySelector('button');
    const dataContainer = document.getElementById("data");
        if (btn) btn.disabled = true;    
    dataContainer.innerHTML = "<p>Loading...</p>";
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function (res) {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
        }).then(function (data) {      
                  dataContainer.innerHTML = "";
            const fragment = document.createDocumentFragment();
            
                      data.forEach(function(user) {
                const p = document.createElement("p");
                p.textContent = user.name;
                fragment.appendChild(p);
            });            
            dataContainer.appendChild(fragment);
        }).catch(function (err) {
            console.error(err);
            dataContainer.innerHTML = "<p>Failed to load data</p>";
        }).finally(function() {           
             if (btn) btn.disabled = false;
        });
}
