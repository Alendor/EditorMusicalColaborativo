let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let partituraSchema = new Schema({
    "nombre_obra": "Dolphin Dance",
    "descripcion_obra":{
        "compositor": ["David", "Sebastian"],
        "genero": "Classic",
        "version": 2.0
        },
    
    "descripcion_partitura": {
        "instrumento": ["Guitarra",25],
        "canal_midi": 2,
        "patch": "#valor"
        }, 
    
    "pentagrama":{
        "cantidad_lineas": 5,
        "grosor": 3.1,
        "separacion": 0.5,
        "ubicacion_pentagrama": [1,2]
        },
    
    "eventos": 
    [   {
            "tempo": 1.2,
            "tipo": "nota",
            "clef": "G5",
            "compas": [4,4],
            "nota_midi": 3,
            "ubicacion":{
                "grafica": [2,3],
                "cronometrica": 2.1,
                "mesurada": [2,3]
             },
            "figura":{
                "representacion_ascii": 56,
                "formato_cabeza": {
                    "tamaño_fuente": 14.0,
                    "color": "#000000"
                },
                "formato_plica": {
                    "grosor": 4,
                    "angulo": 85,
                    "longitud": 15
                },
                "corchete":2,
                "signos_de_la_Figura": {
                    "graficos": "xx",
                    "caracter": "xx",
                    "tamaño": 14,
                    "ubicacion_en_figura": ["x","y"],
                    "alteracion": 3
                },
                "signos_entre_figuras": {
                    "alcance": 25,
                    "grosor": 2,
                    "angulo": 14
                },
                "barra_entre_figuras": {
                    "alcance": 25,
                    "grosor": 2,
                    "angulo": 14,
                    "cantidad _linea": 2
                }
            },
            "velocidadAtaque" : 3
        },
        {
            "tempo": 1.2,
            "tipo": "nota",
            "clef": "A",
            "compas": [4,4],
            "nota_midi": 3,
            "ubicacion":{
                "grafica": [2,3],
                "cronometrica": 2.1,
                "mesurada": [2,3]
             },
            "figura":{
                "representacion_ascii": 56,
                "formato_cabeza": {
                    "tamaño_fuente": 14.0,
                    "color": "#000000"
                },
                "formato_plica": {
                    "grosor": 4,
                    "angulo": 85,
                    "longitud": 15
                },
                "corchete":2,
                "signos_de_la_Figura": {
                    "graficos": "xx",
                    "caracter": "xx",
                    "tamaño": 14,
                    "ubicacion_en_figura": ["x","y"],
                    "alteracion": 3
                },
                "signos_entre_figuras": {
                    "alcance": 25,
                    "grosor": 2,
                    "angulo": 14
                },
                "barra_entre_figuras": {
                    "alcance": 25,
                    "grosor": 2,
                    "angulo": 14,
                    "cantidad _linea": 2
                }
            },
            "velocidadAtaque" : 3
        },
        {
            "tempo": 1.2,
            "tipo": "nota",
            "clef": "G",
            "compas": [4,4],
            "nota_midi": 3,
            "ubicacion":{
                "grafica": [2,3],
                "cronometrica": 2.1,
                "mesurada": [2,3]
             },
            "figura":{
                "representacion_ascii": 56,
                "formato_cabeza": {
                    "tamaño_fuente": 14.0,
                    "color": "#000000"
                },
                "formato_plica": {
                    "grosor": 4,
                    "angulo": 85,
                    "longitud": 15
                },
                "corchete":2,
                "signos_de_la_Figura": {
                    "graficos": "xx",
                    "caracter": "xx",
                    "tamaño": 14,
                    "ubicacion_en_figura": ["x","y"],
                    "alteracion": 3
                },
                "signos_entre_figuras": {
                    "alcance": 25,
                    "grosor": 2,
                    "angulo": 14
                },
                "barra_entre_figuras": {
                    "alcance": 25,
                    "grosor": 2,
                    "angulo": 14,
                    "cantidad _linea": 2
                }
            },
            "velocidadAtaque" : 3
        }
    ]
    }, { versionKey: false });

let Partitura = mongoose.model('Partituras', partiturasSchema);

module.exports = Partitura;