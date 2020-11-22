
function SVG(elementName) {
    return document.createElementNS('http://www.w3.org/2000/svg', elementName);
}


function showTooltip(evt, text) {
    let tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = text;
    tooltip.style.display = "block";
    tooltip.style.left = evt.pageX + 10 + 'px';
    tooltip.style.top = evt.pageY + 10 + 'px';
}

function hideTooltip() {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
}

class SVGCell {
    static colors = ["rgb(0,0,0)", "rgb(0,0,255)", "rgb(0,255,0)", "rgb(255,0,0)", "rgb(255,255,0)",
        "rgb(0,255,255)", "rgb(255,0,255)", "rgb(255,255,255)"
    ]
    constructor(id, size) {
        this.xPos = 0;
        this.yPos = 0;
        this.svg = SVG("rect")
        this.size = size
        this.id = id
        this.svg.setAttribute("x", this.xPos)
        this.svg.setAttribute("y", this.yPos)
        this.svg.setAttribute("width", this.size)
        this.svg.setAttribute("height", this.size)
        this.svg.addEventListener('mouseout', function (e) {
            //e.currentTarget.setAttribute('fill', '#ff00cc');
            hideTooltip()
        });
    }

    setColor(color) {
        this.svg.setAttribute("fill", SVGCell.colors[color])
    }
    move(x, y) {
        this.xPos = x
        this.yPos = y
        this.svg.setAttribute("transform", "translate(" + x * this.size + "," + y * this.size +
            ")");
    }
}