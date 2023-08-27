function display(vehicle) {
    const html = `<h1>${vehicle.Brand} ${vehicle.Model} ${vehicle.Year}</h1>
    <img src="${vehicle.image}" alt="aston">
    <table>
        <tr>
            <th>Price</th>
            <td>${vehicle.Price}</td>
        </tr>
        <tr>
            <th>Brand</th>
            <td>${vehicle.Brand}</td>
        </tr>
        <tr>
            <th>Model</th>
            <td>${vehicle.Model}</td>
        </tr>
        <tr>
            <th>Year</th>
            <td>${vehicle.Year}</td>
        </tr>
        <tr>
            <th>Engine</th>
            <td></td>
        </tr>
        <tr>
            <th>Type</td>
            <td>${vehicle.Engine.key}</td>
        </tr>
        <tr>
            <th>Capacity</th>
            <td>${vehicle.Engine.capacity}</td>
        </tr>
        <tr>
            <th>Features</th>
            <td>${vehicle.Features[0]}<br>${vehicle.Features[1]}<br>${vehicle.Features[2]}</td>
        </tr>
        <tr>
            <th>Color</th>
            <td>${vehicle.Color}</td>
        </tr>
    </table>`;
    document.querySelector('.container').innerHTML = html;
}


const request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        display(JSON.parse(request.responseText));
    }
}

request.open('GET', 'vehicle.json');
request.send();