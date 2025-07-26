// 1. Tăng/giảm số lượng sản phẩm
const quantityBoxes = document.querySelectorAll('.quantity-box');
quantityBoxes.forEach(box => {
  const minusBtn = box.querySelector('button:first-child');
  const plusBtn = box.querySelector('button:last-child');
  const input = box.querySelector('input');

  minusBtn.addEventListener('click', () => {
    let value = parseInt(input.value);
    if (value > 1) {
      input.value = value - 1;
      updateRowTotal(box);
    }
  });

  plusBtn.addEventListener('click', () => {
    let value = parseInt(input.value);
    input.value = value + 1;
    updateRowTotal(box);
  });
});

// 2. Xóa sản phẩm khỏi giỏ hàng
const removeBtns = document.querySelectorAll('.remove-btn');
removeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const row = btn.closest('tr');
    row.remove();
  });
});

// 3. Cập nhật tổng tiền mỗi dòng
function updateRowTotal(box) {
  const row = box.closest('tr');
  const priceText = row.querySelector('td:nth-child(2)').textContent;
  const input = box.querySelector('input');
  const quantity = parseInt(input.value);

  const price = parseInt(priceText.replace(/\D/g, ''));
  const total = price * quantity;

  row.querySelector('td:nth-child(4)').textContent = total.toLocaleString('vi-VN') + ' đ';
}

// 4. Thông báo khi nhấn nút Thanh toán
document.querySelector('.page-footer button').addEventListener('click', () => {
  alert('Cảm ơn bạn đã thanh toán. Đơn hàng đang được xử lý!');
});