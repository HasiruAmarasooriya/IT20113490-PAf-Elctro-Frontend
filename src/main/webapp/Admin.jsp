<%@page import="com.model.Admin"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Admin Management</title><link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/Admin.js"></script></head><body>
<div class="container"><div class="row"><div class="col-6">
<h1>Admin Management </h1>
<form id="formAdmin" name="formAdmin">

Admin Name:
<input id="adminName" name="adminName" type="text"
class="form-control form-control-sm">
<br>

Admin Email:
<input id="adminEmail" name="adminEmail" type="text"
class="form-control form-control-sm">
<br>

Admin Age:
<input id="adminAge" name="adminAge" type="text"
class="form-control form-control-sm">
<br>

Password:
<input id="password" name="password" type="text"
class="form-control form-control-sm">
<br>

Phone:
<input id="phone" name="phone" type="text"
class="form-control form-control-sm">
<br>

NIC:
<input id="nic" name="nic" type="text"
class="form-control form-control-sm">
<br>


<input id="btnSave" name="btnSave" type="button" value="Save"
class="btn btn-primary">

<input type="hidden" id="hidadminNumberSave"
name="hidadminNumberSave" value="">
</form>

<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divAdminGrid">
<%
Admin adminobj = new Admin();
out.print(adminobj.readAdmin());
%>
</div>
</div> </div> </div>
</body>
</html>

