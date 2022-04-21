//Quy Đổi Tiền
/**
 * Input: soTienDo, quyDoi
 * 
 * Các bước xử lý:
 * B1: Tìm tới thẻ bằng id.
 * B2: Tạo hàm
 * + Lấy giá trị từ form.
 * + Lập công thức tính toán.
 *      quyDoi = soTienDo * 23.500
 * 
 * 
 * Output: hiện kết quả quyDoi lên UI
 */

var inputTienDo = document.getElementById("inputUSD");

function quyDoi() {

var usd = inputTienDo.value;

var quyDoi = usd * 23.500;

document.getElementById("txtResult3").innerHTML = "Sau Khi Đổi Là: <br>" + quyDoi.toFixed(3) + " VNĐ";

}

document.getElementById("btnCalc3").onclick = quyDoi;
document.getElementById("txtResult3").style.textAlign = "center";
