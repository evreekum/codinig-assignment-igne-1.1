import React from "react";


const {format} = require("date-fns/locale/nl");


function transformDate(formatDate) {
    const date = new Date(formatDate);
    const dutchLocale = require("date-fns/locale/nl");
    const formattedDate = format(date, "dd.MM.yyyy", {
        locale: dutchLocale
    });
    return formattedDate
}

export default transformDate;