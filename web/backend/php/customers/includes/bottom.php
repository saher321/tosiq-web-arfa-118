<script>
        const searchInput = document.getElementById('customerSearch');
        const customerRows = document.querySelectorAll('.customer-row');
        const customerCount = document.getElementById('customerCount');
        const emptyState = document.getElementById('emptyState');

        function filterCustomers() {
            const query = searchInput.value.toLowerCase().trim();
            let visibleCount = 0;

            customerRows.forEach(row => {
                const matches = row.textContent.toLowerCase().includes(query);

                row.classList.toggle('hidden', !matches);

                if (matches) visibleCount++;
            });

            emptyState.classList.toggle('hidden', visibleCount > 0);

            customerCount.textContent =
                `Showing ${visibleCount} customer${visibleCount !== 1 ? 's' : ''}`;
        }

        searchInput.addEventListener('input', filterCustomers);

        function deleteCustomer(button) {
            if (confirm('Are you sure you want to delete this customer?')) {
                button.closest('tr').remove();
                filterCustomers();
            }
        }
    </script>