/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// const prom = new Promise((resolve, reject) => {
//     const random = Math.random();

//     setTimeout(() => {
//         if(random > 0.5) {
//             resolve({title: "fulfilled!!!"});
//         } else {
//             reject({title: "rejected!!!"});
//         }
//     }, 1000)

// });

// prom
//     .then((data) => {
//         console.log("then", data);
//     })
//     .catch(({ title }) => {
//         console.log("catch", title);
//     })
//     .finally(() => console.log("finally"))








/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */


// const lalala = new Promise((resolve, reject) => {
//     resolve(5)
// })

// lalala
//     .then(res => {
//         console.log(res);
//         return res * 2;
//     })
//     .then(data => {
//         console.log(data);
//         return data + 1;
//     })
//     .then(res => {
//         console.log(res);
//     })
//     .catch(error => {
//         console.log(error);
//     })
//     .finally(() => {})



// const promise = new Promise((resolve) => {
//     resolve(10)
// })


// promise
//     .then(value => {
//         return new Promise((resolve) => {
//             resolve(value * 2)
//         })
//     })
//     .then(value => console.log(value))





// console.log("step 1");

// setTimeout(() => {
//     console.log("step 2");
// }, 0)

// new Promise((resolve) => {
//     resolve("step 3")
// })
//     .then(data => console.log(data))

// new Promise((resolve) => {
//     resolve("step 4")
// })
//     .then(data => console.log(data))

// setTimeout(() => {
//     console.log("step 5");
// })



// setTimeout(() => {
//     console.log("step 1");
// }, 0)


// new Promise(resolve => {
//     resolve("step 2")
// })
//     .then(data => {
//         console.log(data);
//         setTimeout(() => console.log("step 3"), 0)
//     })

// setTimeout(() => {
//     console.log("step 4");
// }, 0)




// setTimeout(() => console.log("step 1"))


// setTimeout(() => {
//     new Promise(resolve => {
//         resolve("step 2")
//     })
//         .then(data => console.log(data))
// })

// new Promise(resolve => {
//     resolve("step 3")
// })
//     .then(data => console.log(data))


// setTimeout(() => console.log("step 4"))






// function getFoo() {
// const BASE_URL = 'https://jsonplaceholder.typicode.com';
// const END_POINT = '/posts';
// const params = new URLSearchParams({
// param1: 'blabla'
// })
// const url = `${BASE_URL}${END_POINT}?${params}`;


// const headers = {
//     header: 'Andrii'
// }
// return fetch(url, { headers }).then(res=> res.json);
// }


// getFoo().then(data => {
// console.log(data)
// })




function getBreedInfo(breed) {
    const BASE_URL = 'https://dogbreeddb.p.rapidapi.com';
    const END_POINT = '/cat_breeds/breed';
    // const params = new URLSearchParams({

    // });
    
    const url = `${BASE_URL}${END_POINT}/${breed}`;

    const headers = {
        'X-RapidAPI-Key': '34863de73emsh8eda819c770ecc9p192e4ejsnc7fc867c12c2',
        'X-RapidAPI-Host': 'cat-breeds.p.rapidapi.com'
    };

    return fetch(url, { headers }).then(res => res.json());
}



getBreedInfo('aegean').then(data => {console.log(data)});