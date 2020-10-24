const Database = require('./db.js');

Database.then(function (db) {
    //inserir dados na tabla
    db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-3.7348316",
            "-38.5447852",
            "Lar dos meninos",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
            "https://images.unsplash.com/photo-1598454444299-62f9d5d5dc48?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar",
            "Horário de visitas das 8h até 18h",
            "1"
        );
    `)

})