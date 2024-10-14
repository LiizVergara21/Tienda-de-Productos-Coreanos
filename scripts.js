// Carrito de compras
let cart = [];
let total = 0;

// Función para agregar productos al carrito
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCart();
    alert(`${productName} ha sido añadido al carrito con éxito.`);
}

// Función para actualizar el carrito en pantalla
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Tu carrito está vacío.</p>';
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement('p');
            itemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(itemElement);
        });
    }

    cartTotal.textContent = total.toFixed(2);
}

// Función para simular el proceso de compra
function checkout() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío. Añade productos antes de realizar la compra.");
    } else {
        let confirmacion = confirm(`Total a pagar: $${total.toFixed(2)}. ¿Deseas proceder con la compra?`);
        
        if (confirmacion) {
            alert(`Gracias por tu compra ficticia. Total: $${total.toFixed(2)}. ¡Este es solo un proyecto!`);
            cart = [];
            total = 0;
            updateCart();
        } else {
            alert("Compra cancelada. Puedes seguir agregando productos.");
        }
    }
}

// Chat ficticio (se mantiene igual)
function sendMessage() {
    const input = document.getElementById('chat-input').value;
    const chatBox = document.getElementById('chat-box');

    if(input.trim() !== "") {
        const userMessage = document.createElement('p');
        userMessage.textContent = `Usuario: ${input}`;
        chatBox.appendChild(userMessage);

        const botMessage = document.createElement('p');
        botMessage.textContent = "Bot: ¡Gracias por tu mensaje! Nos pondremos en contacto pronto.";
        chatBox.appendChild(botMessage);

        document.getElementById('chat-input').value = ""; // Limpiar el campo de texto
    }
}

function showAlert() {
    alert("¡Este es un proyecto ficticio! No es posible realizar compras reales, pero puedes explorar los productos.");
}
