// Завдання 4
function compareNumbers(num1, num2) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (num1 > num2) {
                resolve("Перше число більше");
            } else if (num1 < num2) {
                resolve("Друге число більше");
            } else {
                reject("Числа рівні");
            }
        }, 1000);
    });
}

function runCompare() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    compareNumbers(n1, n2)
        .then(function(message) {
            alert(message);
        })
        .catch(function(error) {
            alert(error);
        });
}



// Завдання 5
function runPromises() {
    let p1 = new Promise(function(resolve) {
        setTimeout(function() {
            resolve(Math.floor(Math.random() * 10) + 1);
        }, 1000);
    });

    let p2 = new Promise(function(resolve) {
        setTimeout(function() {
            resolve(Math.floor(Math.random() * 10) + 1);
        }, 2000);
    });

    let p3 = new Promise(function(resolve) {
        setTimeout(function() {
            resolve(Math.floor(Math.random() * 10) + 1);
        }, 3000);
    });

    Promise.all([p1, p2, p3]).then(function(values) {
        let sum = values[0] + values[1] + values[2];
        document.getElementById("result").innerHTML =
            "Сума чисел: " + sum;
    });
}
