//Tính Giá Trị Trung Bình
/**
 * Input: num1, num2, num3, num4, num5, trungBinh.
 * 
 * 
 * Các bước xử lý:
 * B1: Tìm tới thẻ bằng id.
 * B2: Tạo hàm
 * + Lấy giá trị từ form.
 * + Lập công thức tính toán.
 *      - tb = (num1 + num2 + num3 + num4 + num5) / 5.
 * 
 * Output: tinhTrungBinh.
 */

 var inputSoMot = document.getElementById("inputNum1");
 var inputSoHai = document.getElementById("inputNum2");
 var inputSoBa = document.getElementById("inputNum3");
 var inputSoBon = document.getElementById("inputNum4");
 var inputSoNam = document.getElementById("inputNum5");
 var tb = 0;

 function tinhTrungBinh() {
 
 var so1 = inputSoMot.value;
 var so2 = inputSoHai.value;
 var so3 = inputSoBa.value;
 var so4 = inputSoBon.value;
 var so5 = inputSoNam.value;
 
  // console.log(Number(so1));
  // console.log(Number(so2));
  // console.log(Number(so3));
  // console.log(Number(so4));
  // console.log(Number(so5));


 tb = (Number(so1) + Number(so2) + Number(so3) + Number(so4) + Number(so5)) / 5;

 document.getElementById("txtResult2").innerHTML = "Trung Bình của 5 số là: <br>" + tb;

 }
 document.getElementById("btnCalc2").onclick = tinhTrungBinh;
 document.getElementById("txtResult2").style.textAlign = "center";