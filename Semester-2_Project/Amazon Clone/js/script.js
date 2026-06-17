let shoppingCartData = [];
        
        const cartCountUI = document.getElementById('cart-count');
        const overlay = document.getElementById('screen-overlay');
        const sidebar = document.getElementById('amazon-sidebar');
        const checkoutModal = document.getElementById('checkout-modal');
        const modalItemsContainer = document.getElementById('modal-items-container');
        const modalTotalPriceUI = document.getElementById('modal-total-price');

        function addItemToCart(name, price) {
            shoppingCartData.push({ productName: name, productPrice: price });
            cartCountUI.textContent = shoppingCartData.length;
        }

        function openCartModal() {
            if(shoppingCartData.length === 0) {
                alert("Your Amazon Cart is empty! Add some items first.");
                return;
            }
            
            modalItemsContainer.innerHTML = "";
            let grandTotal = 0;

            shoppingCartData.forEach((item) => {
                grandTotal += item.productPrice;
                const row = document.createElement('div');
                row.className = 'cart-item-row';
                row.innerHTML = `
                    <span>📦 ${item.productName}</span>
                    <strong>₹${item.productPrice.toLocaleString('en-IN')}</strong>
                `;
                modalItemsContainer.appendChild(row);
            });

            modalTotalPriceUI.textContent = `Total Bill: ₹${grandTotal.toLocaleString('en-IN')}`;
            overlay.classList.add('active');
            checkoutModal.classList.add('active');
        }

        function closeCart() {
            overlay.classList.remove('active');
            checkoutModal.classList.remove('active');
        }

        function openSidebar() {
            sidebar.classList.add('active');
            overlay.classList.add('active');
        }

        function closeSidebar() {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        }

        document.getElementById('search-click-btn').addEventListener('click', runSearch);
        document.getElementById('search-box').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') runSearch();
        });

          function runSearch() {
            const text = document.getElementById('search-box').value;
            if(text.trim() !== "") {
                alert("Searching Amazon database grid for: " + text);
            }
        }
