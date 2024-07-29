const getStorageCart = () => {
    const storageCart = JSON.parse(localStorage.getItem("donation-cart"))
    return storageCart || [];
}
const saveDonationInfo = (id) => {
    const localStorageCart = getStorageCart();
    const exist = localStorageCart.find(dId=>dId == id);
    if(!exist){
        localStorageCart.push(id);
        localStorage.setItem("donation-cart",JSON.stringify(localStorageCart));
    }
}

export {getStorageCart, saveDonationInfo};