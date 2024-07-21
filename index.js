function addingEventListener() {
    const input = document.getElementById('button');
    function clickAlert() {
        alert('clicked!');
    }
    input.addEventListener('click', clickAlert);
}
addingEventListener();
