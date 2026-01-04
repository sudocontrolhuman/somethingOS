let enabled = true;

function beforeUnloadHandler(e) {
    if (enabled) {
        e.preventDefault();
        e.returnValue = '';
    }
}

window.addEventListener('beforeunload', beforeUnloadHandler);

document.getElementById('toggle').addEventListener('change', function() {
    enabled = this.checked;
});
