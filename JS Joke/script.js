
const button = document.querySelector("button");
const single = document.querySelector("#Single");
const twopart = document.querySelector("#Twopart");
const jokebox = document.querySelector(".jokee");

single.addEventListener("change", () => twopart.checked = !single.checked);
twopart.addEventListener("change", () => single.checked = !twopart.checked);

button.addEventListener("click", async () => {
    const jokeType = single.checked ? "single" : (twopart.checked ? "twopart" : null);
    if (!jokeType) {
        alert("Bir Zarafat Tipi Secin!!!");
        return;
    }
    const joke = await (jokeType === "single" ? getWithAxios() : getWithTwoAxios());
    jokebox.innerText = joke;
});

const getWithAxios = async () => (await axios.get('https://v2.jokeapi.dev/joke/Any?type=single')).data.joke;
const getWithTwoAxios = async () => {
    const response = await axios.get('https://v2.jokeapi.dev/joke/Any?type=twopart');
    return `${response.data.setup}\n${response.data.delivery}`;
}
