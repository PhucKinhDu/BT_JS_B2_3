//Tính Tiền Lương Nhân Viên
/**
 * Input: soNgayLam, tongLuong.
 * 
 * Các bước xử lý:
 * B1: Tìm tới thẻ bằng id.
 * B2: Tạo hàm
 * + Lấy giá trị từ Form
 * + Lập công thức tính toán.
 *    - tongLuong = luongMotNgay * soNgayLam;
 * B3: Gắn sự kiện click cho button.
 * B4: Hiển thị kết quả lên UI.
 * 
 * Output: luongNhanVien.
 */

var inputSoNgay = document.getElementById("inputDay");

function tinhTienLuong() {

var soNgay = inputSoNgay.value;

var tongLuong = soNgay * 100;

document.getElementById("txtResult1").innerHTML = "Tổng Tiền Lương là: <br>" + tongLuong.toFixed(3) + " VNĐ.";

}

document.getElementById("btnCalc").onclick = tinhTienLuong;
document.getElementById("txtResult1").style.textAlign = "center";