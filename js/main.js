const btnAbrirModal =
document.querySelector("#btn-abrir-modal");
const btnCerrarModal =
document.querySelector("#btn-cerrar-modal");
const modal =
document.querySelector("#modal");

btnAbrirModal.addEventListener("click",() =>{
    modal.showModal();
})

btnCerrarModal.addEventListener("click",()=>{
    modal.close();
})

const btnAbrirModalFactura =
document.querySelector("#btn-abrir-modal-factura");
const btnCerrarModalFactura =
document.querySelector("#btn-cerrar-modal-factura");
const modalFactura =
document.querySelector("#modal-factura");

btnAbrirModalFactura.addEventListener("click",() =>{
    modalFactura.showModal();
})

btnCerrarModalFactura.addEventListener("click",()=>{
    modalFactura.close();
})