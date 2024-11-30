/**
 * Check and remove the duplicate data 
 * 
 * @param {any[]} array
 * @param {string | number} key
 */
function removeDuplicatesByTitle(array, key) {
    const seen = new Set();
    return array.filter(item => {
        const value = item[key];
        if (seen.has(value)) {
            return false;  
        }
        seen.add(value);
        return true; 
    });
}

/** @type {import('./$types').PageLoad} */
export async function load({fetch}) {
    const request = await fetch('https://www.data.gouv.fr/api/1/datasets/?q=loi');
    const response = await request.json();
    console.log(response);
    let results = response.data.slice(1, 10);
    results = removeDuplicatesByTitle(results, 'title');
    console.log(results)

    return { dataApi:results };
}