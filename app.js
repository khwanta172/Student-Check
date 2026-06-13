<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ระบบเช็กชื่อเข้าเรียน</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{
    background:#f4f6fb;
    padding:20px;
}

.container{
    max-width:900px;
    margin:auto;
}

.header{
    background:#fff;
    padding:20px;
    border-radius:12px;
    margin-bottom:20px;
    box-shadow:0 2px 10px rgba(0,0,0,.1);
}

.header h1{
    color:#333;
}

.card{
    background:#fff;
    padding:20px;
    border-radius:12px;
    margin-bottom:20px;
    box-shadow:0 2px 10px rgba(0,0,0,.1);
}

.input-group{
    display:flex;
    gap:10px;
}

.input-group input{
    flex:1;
    padding:12px;
    border:1px solid #ddd;
    border-radius:8px;
}

.btn{
    border:none;
    padding:12px 20px;
    border-radius:8px;
    cursor:pointer;
    font-weight:bold;
}

.btn-primary{
    background:#3f51b5;
    color:white;
}

.student{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:12px;
    border-bottom:1px solid #eee;
}

.student:last-child{
    border:none;
}

.actions{
    display:flex;
    gap:8px;
}

.present{
    background:#4caf50;
    color:white;
}

.absent{
    background:#f44336;
    color:white;
}

.stats{
    display:flex;
    gap:20px;
    justify-content:center;
}

.stat-box{
    flex:1;
    text-align:center;
    background:#fff;
    padding:20px;
    border-radius:12px;
    box-shadow:0 2px 10px rgba(0,0,0,.1);
}

.stat-box h2{
    font-size:32px;
}

.export{
    width:100%;
    background:#ff9800;
    color:white;
    margin-top:15px;
}

@media(max-width:768px){

    .input-group{
        flex-direction:column;
    }

    .student{
        flex-direction:column;
        align-items:flex-start;
        gap:10px;
    }

    .actions{
        width:100%;
    }

    .actions button{
        flex:1;
    }

    .stats{
        flex-direction:column;
    }
}

</style>
</head>

<body>

<div class="container">

    <div class="header">
        <h1>📚 ระบบเช็กชื่อเข้าเรียน</h1>
    </div>

    <div class="card">

        <div class="input-group">

            <input
                type="text"
                id="studentName"
                placeholder="เพิ่มชื่อนักเรียน">

            <button
                class="btn btn-primary"
                onclick="addStudent()">

                เพิ่มนักเรียน

            </button>

        </div>

    </div>

    <div class="stats">

        <div class="stat-box">

            <h2 id="presentCount">0</h2>

            <p>Present</p>

        </div>

        <div class="stat-box">

            <h2 id="absentCount">0</h2>

            <p>Absent</p>

        </div>

    </div>

    <br>

    <div class="card">

        <h2>รายชื่อนักเรียน</h2>

        <br>

        <div id="studentList"></div>

        <button
            class="btn export"
            onclick="exportExcel()">

            Export Excel

        </button>

    </div>

</div>

<script src="app.js"></script>

</body>
</html>
