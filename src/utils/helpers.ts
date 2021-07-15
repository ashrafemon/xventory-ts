export const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result);
    };
    reader.onerror = function (error) {
        console.log("Error: ", error);
    };
};

export const generateTableHeader = (data) => {
    let headers = [];
    if (data && Object.keys(data).length > 0) {
        Object.keys(data).forEach((key) => {
            if (
                !(
                    key === "id" ||
                    key === "__typename" ||
                    key === "storeList" ||
                    key === "image"
                )
            ) {
                headers.push(key);
            }
        });
    }

    return headers;
};

export const generateTableData = (data, headers) => {
    let tableData = [];

    if (data && headers) {
        data.forEach((item) => {
            let singleData = {};
            Object.keys(item).forEach((key) => {
                if (headers.includes(key)) {
                    singleData[key] = item[key];
                }
            });
            singleData["id"] = item.id;
            tableData.push(singleData);
        });
    } else {
        tableData = [];
    }

    return tableData;
};

export const generateTable = (data) => {
    let headers = [];
    let rows = [];

    if (data && data.length > 0) {
        Object.keys(data[0]).forEach((key) => {
            if (
                !(
                    key === "id" ||
                    key === "__typename" ||
                    key === "storeList" ||
                    key === "image" ||
                    key === "address" ||
                    key === "storePreference"
                )
            ) {
                headers.push(key);
            }
        });
    } else {
        headers = [];
    }

    if (data && headers) {
        data.forEach((item) => {
            let singleData = {};
            Object.keys(item).forEach((key) => {
                if (headers.includes(key)) {
                    singleData[key] = item[key];
                }
            });
            singleData["id"] = item.id;
            rows.push(singleData);
        });
    } else {
        data = [];
    }

    return { headers, rows };
};

export const propertySlicer = (obj) => {
    let newObj = {
        ...obj,
    };

    Object.keys(newObj).forEach((key) => {
        if (key !== "id") delete newObj[key];
    });

    return newObj;
};

export const typeNamePropertySlicer = (data) => {
    let newData = [...data];

    newData &&
        newData.forEach((item) => {
            Object.keys(item).forEach((key) => {
                if (key === "__typename") {
                    delete item[key];
                }
            });
        });

    // try {
    //     Object.keys(obj).forEach((key) => {
    //         // if (key !== "__typename") {
    //         //     newObj = {
    //         //         ...newObj,
    //         //         [key]: obj[key],
    //         //     };
    //         // }
    //         if (key === "__typename") {
    //            delete
    //         }
    //         // else {
    //         //     if (
    //         //         typeof newObj[key] === "object" &&
    //         //         typeof newObj[key] !== "string" &&
    //         //         newObj[key] !== null
    //         //     ) {
    //         //         console.log("1", key);
    //         //         Object.keys(newObj[key]).forEach((nestedKey) => {
    //         //             console.log("2", nestedKey);
    //         //             if (nestedKey === "__typename") {
    //         //                 delete newObj[key][nestedKey];
    //         //                 // console.log("typename", newObj[key][nestedKey]);
    //         //             }
    //         //         });
    //         //     }
    //         // }
    //     });
    // } catch (err) {
    //     console.log(err);
    // }

    return newData;
};
