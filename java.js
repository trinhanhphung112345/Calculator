//  Khai báo 
let operand1 = ''; // lưu giá trị của các số 
let operand2 = '';
let opt; // lưu toán tử 


// Định nghĩa hàm 
function Button123(btn) { // đặt tên hàm là Button123
// nội dung hàm
 const pressedValue =  btn.innerText ; // lấy giá trị value của btn 
//  mà ta gán vào và sử dụng 
//  thuộc tính innerTExt

const ResultInput  = document.getElementById('ResultInput');

if( isNaN(pressedValue)) // kiểm tra isNaN = giá trị người dùng kích vào
{
    // Nếu kh phải giá trị số thì tiếp tục kiểm tra 
    if( pressedValue == 'C')
    {
        operand1 = " ";
        operand2 = " ";
        opt = undefined ;
        ResultInput.value = "";
        return;


    }
    if( pressedValue == '=' ) // Thuc hien tính toán 
    {
        const result = perform(operand1,operand2,opt) 
        // hàm perform sẽ được định nghĩa sau hàm btt123
        ResultInput.value = result; 
        // gán kêt quả vào ResultInput
        operand1 = " ";
        operand2= " ";
        opt = undefined; // có thể thực hiện tính toán lại 


    }
    else {
            otp = pressedValue ;// ngdung nhấn vào giá trị + - * / 



    }


}
else
{ // user kich  vào các btn số thì tao có thể kiểm tra 
        if(opt )
        {
                operand2 += pressedValue;
                ResultInput.value = operand2;


        }else
        {
                operand1 += pressedValue;
                ResultInput.value = operand1; // hiển thị giá trị vào Resultinput


        }


}


}


// hàm perform thực hiện tất cá phép tính chuyền vao

function perform(orand1,orand2,otor)// đặt tên để phân biệt tham số
// với biến toán cục

{
 orand1 = Number(orand1); // thuc hien chuyen đổi number của tham số chuyền vào thành giá trị số
 orand2 = Number(orand2); 

switch(otor)
{
        case "+" : 
            return orand1 + orand2;
           
            case "-" : 
            return orand1 - orand2;
           
            case "*" : 
            return orand1 * orand2;
           
            case "/" : 
            return orand1 / orand2;
           




}



}
