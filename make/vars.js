
const topHeight = 280.0;
const descHeight = 591.0;
const photosHeight = 346.0;
const blueHeight = 200.0;
const bottomHeight = 200.0;

const height = topHeight + descHeight + photosHeight + blueHeight + bottomHeight;

const modif = (x) => (x*0.8) + "vw"

module.exports  = {
    "grid320": {
        "heigth-percentage": modif(height),
        "heigth-mm": 17.5,
        "main-section": {
            "top": {
                "heigth": modif(topHeight)
            },
            "desc": {
                "heigth": modif(descHeight)
            },
            "photos": {
                "heigth": modif(photosHeight)
            },
            "blue": {
                "heigth": modif(blueHeight)
            },
            "bottom": {
                "heigth": modif(bottomHeight)
            }
        },
        "width": {
            "start-line": "4.4%",
            "invisible-line": "9.5%",
            "visible-line": "7.3%",
            "end-line": "4.3%"
        },
        "opacity": {
            "invisible": 0,
            "visible": 0
        },
        "background-color": {
            "invisible": "rgba(0, 0, 0, 0)",
            "visible": "rgba(255, 0, 0, 1)"
        }
    }
}
