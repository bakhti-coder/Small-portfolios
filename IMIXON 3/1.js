getDif("Men kelajakda kuchli dasturchi bo'laman");

function getDif(str) {
    let unli = 0, undosh = 0;
    for(let i = 0; i < str.length; i++) {
        let code = str[i].toLowerCase().charCodeA   (0);
        if(code == 97 || code == 101 || code == 105 || code == 111 || code == 117) {
            unli++;
        } else {
            undosh++;
        }
    }
    console.log(`Jami: ${str.length}`);
    console.log(`Unli: ${unli}`);
    console.log(`Undosh: ${undosh}`);
    if(unli > undosh) {
        console.log(`Farq: ${unli - undosh}`);
    } else {
        console.log(`Farq: ${undosh - unli}`);
    }
}
