const dictionnary = {
    brown : "#a57848",
    blue : "#91d6ff",
    green : "#91ff98",
    pink : "#ff87c3",
    yellow : "#d3b332"
}

function getColor(color) {
    return dictionnary[color] ? dictionnary[color] : "#000000";
}

export {getColor, dictionnary};