

// function addTableRow()
// {
//     var table=document.getElementById("table"),
//     newRow = table.insertRow(table.length),
//     cell1=newRow.insertCell(0),
//     cell2=newRow.insertCell(1),
//     cell3=newRow.insertCell(2),
//     cell4=newRow.insertCell(3),
//    fname=document.getElementById("fname").value,
//    lname=document.getElementById("lname").value,
//    roll_num=document.getElementById("roll_num").value,
//    Grade=document.getElementById("Grade").value;

//    cell1.innerHTML=fname;
//    cell2.innerHTML=lname;
//    cell3.innerHTML=roll_num;
//    cell4.innerHTML=Grade;
 
// }
// function Calculate() {
//     //YOUR CODE GOES HERE
// }

function UIPopulate() {
    var noOfSubjects = $('#noOfSubjects').val();

    var h = '';
    for (i = 0; i < noOfSubjects; i++) {
        h += '<tr>';

        h += '<td>';
        h += '<span>Subject ' + (i + 1) + ' -> </span>';
        h += '</td>';

        h += '<td>';
        h += '<span>Name :</span>';
        h += '</td>';

        h += '<td>';
        h += '<input type="text" id="subjectName' + i + '"/>';
        h += '</td>';

        h += '<td>';
        h += '<span>Marks Obtained :</span>';
        h += '</td>';

        h += '<td>';
        h += '<input type="number" min="0" max="100" id="subjectMarksObtained' + i + '"/>';
        h += '</td>';

        h += '</tr>';
    }

    $('#inputTable').html(h);
}

/* function Calculate()
{
    console.log("pass")
    name =$('#nameOfStudent').val();
    var student = new Object();
    student.name=name;
    var studentStr = JSON.stringify(student);
    console.log(studentStr);
          $.ajax({
            method: 'GET',
            url: 'https://localhost:44324/MyFirstService.asmx/AddStudents',
            ContentType: 'application/JSON',
            data: {
                request: studentStr,
            },

            success: function (result) {
                console.log(result);

            }
        });
    }
 */
//Calculate()

function Calculate()
{
    
          $.ajax({
            method: 'GET',
            url: 'https://localhost:44324/MyFirstService.asmx/GetStudents',
            ContentType: 'application/JSON',
            success: function (result) {
                console.log(result);

            }
        });
    }