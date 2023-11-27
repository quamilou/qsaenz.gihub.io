document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    var body = document.body;
    body.classList.toggle('dark-mode');

    var btn = document.getElementById('toggle-dark-mode');
    if (body.classList.contains('dark-mode')) {
        btn.textContent = 'Mode Jour';
    } else {
        btn.textContent = 'Mode Nuit';
    }
});
