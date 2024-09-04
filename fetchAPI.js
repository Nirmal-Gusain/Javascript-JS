async function getdata() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data)
    return data
}

async function main() {
    let data = await getdata()
    let me = document.getElementById("me")
    if (me && data) {
        me.innerText = data.id;
    }
}
main()