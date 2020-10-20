const map = L.map('mapid').setView([-3.7338316,-38.5347852], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon from
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

//add the photos field
function addPhotoField() {
    //get the photo container #images
    const container = document.querySelector('#images')
    //get the container to duplicate .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //create the last added image clone
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verify if the field is empty. If it is, do not add to the photos container
    const input = newFieldContainer.children[0]
    if (input.value == "") {
        return
    }
    //clear the field before adding to the images container
    input.value = ""
    //add the clone to the #images clone
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        //clear the field value
        span.parentNode.children[0].value = ""
        return
    }

    //delete the field
    span.parentNode.remove();
}
