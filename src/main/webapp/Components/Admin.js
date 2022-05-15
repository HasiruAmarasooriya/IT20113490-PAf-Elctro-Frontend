/**
*
*/

$(document).ready(function()
{
if ($("#alertSuccess").text().trim() == "")
{
$("#alertSuccess").hide();
}
$("#alertError").hide();
});




// SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
// Clear alerts---------------------
$("#alertSuccess").text("");
$("#alertSuccess").hide();
$("#alertError").text("");
$("#alertError").hide();

// Form validation-------------------
var status = validateAdminForm();
if (status != true)
{
$("#alertError").text(status);
$("#alertError").show();
return;
}



// If valid------------------------
var type = ($("#hidadminNumberSave").val() == "") ? "POST" : "PUT";
$.ajax(
{
url : "AdminAPI",
type : type,
data : $("#formAdmin").serialize(),
dataType : "text",

complete : function(response, status)
{
onAdminSaveComplete(response.responseText, status);
}
});
});




function onAdminSaveComplete(response, status)
{
if (status == "success")
{
var resultSet = JSON.parse(response);
if (resultSet.status.trim() == "success")
{
$("#alertSuccess").text("Successfully saved.");
$("#alertSuccess").show();
$("#divAdminGrid").html(resultSet.data);
} else if (resultSet.status.trim() == "error")
{
$("#alertError").text(resultSet.data);
$("#alertError").show();
}
} else if (status == "error")
{
$("#alertError").text("Error while saving.");
$("#alertError").show();
} else
{
$("#alertError").text("Unknown error while saving..");
$("#alertError").show();
}

$("#hidadminNumberSave").val("");
$("#formAdmin")[0].reset();
}





// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
$("#hidadminNumberSave").val($(this).closest("tr").find('#hidadminNumberUpdate').val());
$("#adminName").val($(this).closest("tr").find('td:eq(0)').text());
$("#adminEmail").val($(this).closest("tr").find('td:eq(1)').text());
$("#adminAge").val($(this).closest("tr").find('td:eq(2)').text());
$("#password").val($(this).closest("tr").find('td:eq(3)').text());
$("#phone").val($(this).closest("tr").find('td:eq(4)').text());
$("#nic").val($(this).closest("tr").find('td:eq(5)').text());
});




// CLIENT-MODEL================================================================
function validateAdminForm()
{
// Name
if ($("#adminName").val().trim() == "")
{
return "Insert Admin Name.";
}
// Email
if ($("#adminEmail").val().trim() == "")
{
return "Insert Admin Email.";
}

// Age
if ($("#adminAge").val().trim() == "")
{
return "Insert Admin Age.";
}


//Password
if ($("#password").val().trim() == "")
{
return "Insert Password.";
}

//Phone
if ($("#phone").val().trim() == "")
{
return "Insert Phone.";
}

//nic
if ($("#nic").val().trim() == "")
{
return "Insert nic.";
}

return true;
}



//DELETE
$(document).on("click", ".btnRemove", function(event)
{
$.ajax(
{
url : "AdminAPI",
type : "DELETE",
data : "adminNumber=" + $(this).data("adminnumber"),
dataType : "text",
complete : function(response, status)
{
onAdminDeleteComplete(response.responseText, status);
}
});
});




function onAdminDeleteComplete(response, status)
{
if (status == "success")
{
var resultSet = JSON.parse(response);
if (resultSet.status.trim() == "success")
{
$("#alertSuccess").text("Successfully deleted.");
$("#alertSuccess").show();
$("#divAdminGrid").html(resultSet.data);
} else if (resultSet.status.trim() == "error")
{
$("#alertError").text(resultSet.data);
$("#alertError").show();
}
} else if (status == "error")
{
$("#alertError").text("Error while deleting.");
$("#alertError").show();
} else
{
$("#alertError").text("Unknown error while deleting..");
$("#alertError").show();
}
}