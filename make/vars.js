const vw = x => x*width/100;
const vh = x => x*height/100;

const width = 7029 - 6709;

const topHeight = 1841 - 1200;
const descHeight = 1200 - 594;
const photosHeight = 1700 - 594;
const blueHeight = 2336 - 1700;
const bottomHeight = 3028-2336;

const height = topHeight + descHeight + photosHeight + blueHeight + bottomHeight;

module.exports  = {
    "grid320": {
        "width": width+"px",
        "height": height+"px",
        "main-section": {
            "top": {
                "height": topHeight+"px"
            },
            "desc": {
                "height": descHeight+"px"
            },
            "photos": {
                "height": photosHeight+"px"
            },
            "blue": {
                "height": blueHeight+"px"
            },
            "bottom": {
                "height": bottomHeight+"px"
            }
        },
        "width-of": {
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
