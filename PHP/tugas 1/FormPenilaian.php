<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data dari form
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $nilai = $_POST['nilai'];

    // Logika struktur kendali
    if ($nilai >= 70) {
        $status = "Lulus";
    } else {
        $status = "Remedial";
    }

    // Tampilkan hasil
    echo "<h3>Hasil Penilaian</h3>";
    echo "<p>Nama: " . $nama . "</p>";
    echo "<p>Email: " . $email . "</p>";
    echo "<p>Nilai Ujian: " . $nilai . "</p>";
    echo "<p>Status: <b>$status</b></p>";
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Form Nilai Ujian</title>
</head>

<body>

    <h2>Form Input Nilai Ujian</h2>

    <form method="POST">
        <label for="nama">Nama:</label><br>
        <input type="text" id="nama" name="nama" required><br><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>

        <label for="nilai">Nilai Ujian:</label><br>
        <input type="number" id="nilai" name="nilai" min="0" max="100" required><br><br>

        <input type="submit" name="submit" value="Kirim">
    </form>



</body>

</html>