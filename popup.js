const btnCclt = document.querySelector("#cclt");
const inpCid = document.querySelector("#cid");

btnCclt.addEventListener("click", () => { 
    window.location.href = `https://stage.lv.infusemedia.com/leadstool/campaign/${inpCid.value}`;
});