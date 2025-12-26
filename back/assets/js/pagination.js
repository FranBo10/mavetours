document.addEventListener('DOMContentLoaded', function() {
    attachPaginationEventListeners();
});

function attachPaginationEventListeners() {
    document.querySelectorAll('.pagination a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            let url = this.getAttribute('href');
            fetch(url, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                } 
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('comentario-lista').innerHTML = data.content;
                history.pushState(null, '', url);
                attachPaginationEventListeners();
                
                document.querySelector('.btn-primary-card').scrollIntoView({ behavior: 'smooth' });
            })
            .catch(error => console.error('Error:', error));
        });
    });
}
