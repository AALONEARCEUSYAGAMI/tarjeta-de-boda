<?php
// Nombre del archivo CSV donde se guardarán los datos
$filename = 'invitados.csv';

// Abrir el archivo en modo de adición
$file = fopen($filename, 'a');

// Verificar si se abrió correctamente
if ($file === false) {
    die('No se pudo abrir el archivo.');
}

// Obtener los datos del formulario
$name = $_POST['name'] ?? '';
$phone = $_POST['phone'] ?? '';

// Número de filas en el archivo CSV
$rowNumber = 1;

// Leer el archivo CSV para obtener el número de filas
if (($handle = fopen($filename, 'r')) !== false) {
    while (($data = fgetcsv($handle)) !== false) {
        $rowNumber++;
    }
    fclose($handle);
}

// Escribir los datos en el archivo CSV
fputcsv($file, [$rowNumber, $name, $phone]);

// Cerrar el archivo
fclose($file);

// Redirigir al usuario a una página de agradecimiento
header('Location: thank_you.html');
exit();
?>
