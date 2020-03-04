export async function getUser(name: string){

const myHeaders = {
  
}
const url = 'https://gist.githubusercontent.com/sureshsamanthapudi/aa1e876d59c851475285f6be55a7310d/raw/154e0b2e4813800b983434fa20c9d7f9947700ea/users.json'
let response = await fetch(url, {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
});

if (response.ok) { 
    let json = await response.json();
    return json
  } else {
    alert("HTTP-Error: " + response.status);
  }
}

export function getAllUsers() {
  new Promise( (resolve,reject) => {

  }).then(value => {})
    .catch(value => {})
    .finally()
}





