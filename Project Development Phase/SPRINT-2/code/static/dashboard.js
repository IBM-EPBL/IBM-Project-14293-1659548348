function functio()
{
    var username = document.getElementById("username").value;
    var role = document.getElementById("role").value;
    if(role=="USER")
    {role ="DONOR"}
    else
    {
      role="USER"
    }
    var data =
        {"username":username,
        "role":role}
    
$.ajax(
{   contentType: 'application/json;charset=UTF-8',
    type:'POST',
    headers: {
'Content-Type': 'application/x-www-form-urlencoded'
},

    url:"http://100.127.73.5:5000/toggle",
    data:JSON.stringify(data),
    
    ContentType:'application/json',
    success:function(result)
    {
    console.log(result['status'])
    document.getElementById("result").innerText = result['role'];
    document.getElementById('role').value=result['role'];
    }
}
)

}

var tablehead = "<h2>Your Request</h2><div class='table-responsive pb-5'><table id='tbOrderHistory' class='table border ps-table w-100 mb-3'><thead><tr><th class='font-weight-bold py-2 border-0'>Recipient Name</th><th class='font-weight-bold py-2 border-0 quantity'>Age</th><th class='font-weight-bold py-2 border-0 '>Sex</th><th class='font-weight-bold py-2 border-0 '>Blood Group</th></tr></thead><tbody>"

var tablend = "	</tbody></table></div>"
					
				


function myhistory()
{
    var username = document.getElementById("username").value;

    var data =
        {"username":username,
        }
    
$.ajax(
{   contentType: 'application/json;charset=UTF-8',
    type:'POST',
    headers: {
'Content-Type': 'application/x-www-form-urlencoded'
},

    url:"http://127.0.0.1:5000/getrequests",
    data:JSON.stringify(data),
    
    ContentType:'application/json',
    success:function(result)
    {
    console.log(result['requests'])
  table =" "
    for( x in result['requests'] )
    {
        table = table+"<tr><td>"+result['requests'][x].name +"</td><td>"+result['requests'][x].age +"</td><td>"+result['requests'][x].sex +"</td><td>"+result['requests'][x].blood_type +"</td></tr>"
    }
    $('.content').html(tablehead+table+tablend)
    }
}
)

}
var header = document.getElementsByClassName("side-bar");
var btns = header.getElementById("a");
for (var i = 0; i < btns.length; i++) {
btns.addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });}