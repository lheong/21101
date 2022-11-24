const fs = require('fs')

let getOne = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resource/出师表.md', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

let getTwo = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resource/桃花源记.md', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

let getThree = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resource/出居庸关.md', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

// 出师表
getOne().then(res => {
    console.log(res.toString());
    return res.toString()

}).then((data) => {
    // 桃花源记
    console.log(data, '38');
    let result = getTwo().then(res => res.toString())
    return result + data;
}).then((data1) => {
    // 出居庸关
    console.log(data1, '42');
    getThree().then(res => {
        console.log(res.toString());
    })
})

