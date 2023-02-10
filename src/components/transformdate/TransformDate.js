import React from "react";


function transformDate(timestamp) {


    const dateArray = date.split("-");
    const newDate = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`
    return newDate;
}
}
export default transformDate;