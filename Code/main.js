function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// JavaScript xử lý khi ấn nút "Đặt bánh"
function submitOrder() {
    // Lấy thông tin từ các trường nhập và thực hiện xử lý theo yêu cầu
    var hoTen = document.getElementById("hoTen").value;
    var soDienThoai = document.getElementById("soDienThoai").value;
    var diaChi = document.getElementById("diaChi").value;
    var loaiBanh = document.getElementById("loaiBanh").value;
    var soLuong = document.getElementById("soLuong").value;
    var yeuCauThem = document.getElementById("yeuCauThem").value;

    // Xử lý thông tin nhập vào 
    function validatePhoneNumber(input) {
        // sử dụng biểu thức chính quy (/\D/g) để loại bỏ tất cả 
        // các ký tự không phải số từ giá trị nhập vào
        input.value = input.value.replace(/\D/g, '');
    }

    // Thực hiện xử lý đặt bánh ở đây 
    console.log("Thông tin đặt bánh:");
    console.log("Họ và tên: " + hoTen);
    console.log("Số điện thoại: " + soDienThoai);
    console.log("Địa chỉ: " + diaChi);
    console.log("Loại bánh: " + loaiBanh);
    console.log("Số lượng: " + soLuong);
    console.log("Yêu cầu thêm: " + yeuCauThem);

    // Sau khi xử lý, đóng modal
    closeModal();
}