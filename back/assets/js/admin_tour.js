document.addEventListener('DOMContentLoaded', function () {
    console.log('Admin Tour JS Loaded');

    // Identifica los campos por su ID o nombre generado por EasyAdmin
    const countrySelect = document.getElementById('Tour_pais');
    const citySelect = document.getElementById('Tour_ciudad');

    if (!countrySelect || !citySelect) {
        return;
    }

    // Función para actualizar ciudades desde la BD
    function updateCities(countryCode, currentCityId) {
        // Limpiar ciudad actual temporalmente mientras cargamos
        citySelect.innerHTML = '<option value="">Cargando...</option>';

        if (!countryCode) {
            citySelect.innerHTML = '<option value="">Seleccione un país primero</option>';
            return;
        }

        // Fetch ciudades de la BD filtradas por país
        fetch(`/admin/api/cities?country=${countryCode}`)
            .then(response => response.json())
            .then(data => {
                citySelect.innerHTML = '';

                // Opción vacía por defecto
                const defaultOption = document.createElement('option');
                defaultOption.value = '';
                defaultOption.text = 'Seleccione una ciudad...';
                citySelect.appendChild(defaultOption);

                // data es {id: nombre, ...}
                for (const [id, nombre] of Object.entries(data)) {
                    const option = document.createElement('option');
                    option.value = id;
                    option.text = nombre;
                    if (id === String(currentCityId)) {
                        option.selected = true;
                    }
                    citySelect.appendChild(option);
                }
            })
            .catch(error => {
                console.error('Error fetching cities:', error);
                citySelect.innerHTML = '<option value="">Error al cargar ciudades</option>';
            });
    }

    // Listener para cambio de país
    countrySelect.addEventListener('change', function () {
        const countryCode = this.value;
        updateCities(countryCode, null);
    });

    // Ejecutar al cargar la página para filtrar las opciones iniciales
    const initialCountry = countrySelect.value;
    const initialCity = citySelect.value;

    if (initialCountry) {
        updateCities(initialCountry, initialCity);
    } else {
        // En "New", país vacío -> limpiar ciudad
        citySelect.innerHTML = '<option value="">Seleccione un país primero</option>';
    }
});
