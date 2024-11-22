document.addEventListener('DOMContentLoaded', () => {
    const navigate = {
        signIn: 'pagina5.html',
        consumoEnergia: 'pagina3.html',
        energiaPoluente: 'pagina6.html',
        simulador: () => window.open('https://enel-rj.simuladordeconsumo.com.br', '_blank'),
        login: 'pagina1.html',
    };

    Object.keys(navigate).forEach(id => {
        document.getElementById(id)?.addEventListener('click', () => {
            typeof navigate[id] === 'function'
                ? navigate[id]()
                : (window.location.href = navigate[id]);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('atmosButton')?.addEventListener('click', () => {
        window.location.href = 'pagina4.html';
    });
    document.getElementById('saibaMaisButton')?.addEventListener('click', () => {
        window.location.href = 'pagina2.html';
    });
});
