 function actualizarReloj() {
        const fecha = new Date();

        // Día y fecha
        const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        const diaSemana = dias[fecha.getDay()];
        const dia = fecha.getDate();
        const mes = meses[fecha.getMonth()];
        const anio = fecha.getFullYear();

        document.getElementById('fecha').innerText = `${diaSemana} ${dia} de ${mes} del ${anio}`;

        // Hora
        let hora = fecha.getHours();
        let minuto = fecha.getMinutes();
        let segundo = fecha.getSeconds();
        let ampm = hora >= 12 ? 'PM' : 'AM';

        hora = hora % 12 || 12;
        hora = hora < 10 ? '0' + hora : hora;
        minuto = minuto < 10 ? '0' + minuto : minuto;
        segundo = segundo < 10 ? '0' + segundo : segundo;

        document.getElementById('hora').innerText = hora;
        document.getElementById('minuto').innerText = minuto;
        document.getElementById('segundo').innerText = segundo;
        document.getElementById('ampm').innerText = ampm;
    }

    setInterval(actualizarReloj, 1000);
    actualizarReloj();