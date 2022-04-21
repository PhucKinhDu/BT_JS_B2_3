//Tính Diện Tích & Chu Vi Hình Chữ Nhật
/**
 * Input: chieuDai, chieuRong, dienTich, chuVi
 * 
 * Các bước xử lý:
 * B1: Tìm tới thẻ bằng id.
 * B2: Tạo hàm
 * + Lấy giá trị từ form.
 * + Lập công thức tính toán.
 *      dienTich = chieuDai * chieuRong
 *      chuVi = (chieuDai + chieuRong) * 2
 * 
 * Output: hiện kết quả dienTich, chuVi lên UI
 */

var inputChieuDai = document.getElementById("inputWidth");
var inputChieuRong = document.getElementById("inputHeight");
var dt = 0;
var cv = 0;

function tinhCDCR() {
  var chieuDai = inputChieuDai.value;
  var chieuRong = inputChieuRong.value;


  var dt = chieuDai * chieuRong;
  var cv = (Number(chieuDai) + Number(chieuRong)) * 2;

  // console.log(chieuDai + chieuRong);

  document.getElementById("txtResult4").innerHTML = "Diện Tích của hình là: <br>" + dt + "<br> Chu Vi của hình là: <br>" + cv;

}
document.getElementById("btnCalc4").onclick = tinhCDCR;
document.getElementById("txtResult4").style.textAlign = "center";