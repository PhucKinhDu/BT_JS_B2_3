//Tính Tổng 2 Ký Số
/**
 * Input: num, ten, unit, sum
 * 
 * Các bước xử lý:
 * B1: Tìm tới thẻ bằng id.
 * B2: Tạo hàm
 * + Lấy giá trị từ form.
 * + Lập công thức tính toán.
 *      
 * 
 * Output: hiện kết quả lên UI
 */

var nhapSo = document.getElementById("inputNhapSo");
var ten = 0;
var unit = 0;
var sum = 0;

function tinhTongSo() {

  var num = nhapSo.value;
  console.log(num);

  ten = Math.floor(num / 10);
  console.log(ten);

  var phanDu = num % 10;
  console.log(phanDu);

  sum = ten + phanDu;


  document.getElementById("txtResult5").innerHTML = "Tổng của 2 ký số là: " + sum;
}

document.getElementById("btnCalc5").onclick = tinhTongSo;
document.getElementById("txtResult5").style.textAlign = "center";

//VD: num = 64
// ten = Math.floor(num / 10);// 64 / 10 = 6.4 (Math.floor = 6)
// console.log(ten)

// var phanDu = num % 10;// 64 % 10 = 6.4 (% = 4)
// console.log(phanDu)

// sum = ten + phanDu;// 6 + 4 = 10
// console.log(sum);

//document.getElementById("inputNhapSo");
// var num = 586;
// Chưa có kết quả thì gán biến = 0
// var hund = 0;
// var ten = 0;
// var unit = 0;
// var sum = 0;


// hund = Math.floor(num / 100);//586 / 100 = 5.86 (dùng Math.floor thì chỉ lấy phần nguyên là 5)
// console.log(hund);

// var phanDu = num % 100;// 586 / 100 = 5.86 (dùng % thì chỉ lấy phần dư là 86)
// console.log(phanDu);

// ten = Math.floor(phanDu / 10);//86 / 10 = 8.6 (dùng Math.floor thì chỉ lấy phần nguyên là 8)
// console.log(ten);

// unit = phanDu % 10;
// console.log(unit);

// sum = hund + ten + unit;

// console.log("Tổng 3 chữ số là: "+ sum);






