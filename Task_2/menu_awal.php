<!DOCTYPE html>
<html>
    <head>
        <title>TUGAS PEMWEB</title>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <form action="detail_produk.php" method=GET>
            <div class="tabel-judul">
            <table align="center">
                <tr align="center">
                    <div class="judul">
                    <td>MASUKAN DATA PRODUK!</td>
                    </div>
                </tr>
            </table>
            </div>
            <div class= "tabel-isi">  
            <table align="center">
                <tr>
                    <td>Nama Produk</td>
                    <td>:</td>
                    <td><input nama="name" type="text"></td>
                </tr>
                <tr >
                    <td>ID Produk</td>
                    <td>:</td>
                    <td><input name="id" type="text"></td>
                </tr>
                <tr align="center">
                    <td><button class="submit">SUBMIT</button></td>
                </tr>
            </table>
            </div>
        </form>
    </body>
</html>